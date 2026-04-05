import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
  inject
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ContactInfo, ResumeLink } from '../../../core/models/resume/resume.module';
import {
  buildLinkedInBadgeHref,
  extractLinkedInVanity,
  formatLinkedInProfileName,
  hasRenderedLinkedInBadgeFrame,
  isLinkedInProfileLink,
  loadLinkedInBadgeScript
} from '../../../core/linkedin-badge';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input({ required: true }) contact!: ContactInfo;
  @Input({ required: true }) links!: ResumeLink[];
  @ViewChild('linkedinBadgeHost') linkedinBadgeHost?: ElementRef<HTMLElement>;

  private readonly documentRef = inject(DOCUMENT);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly zone = inject(NgZone);

  private hasViewInitialized = false;
  private badgeObserver?: MutationObserver;
  private badgeFallbackTimer?: number;

  badgeDisplayMode: 'pending' | 'official' | 'fallback' = 'fallback';

  get linkedinLink(): ResumeLink | undefined {
    return this.links.find((link) => isLinkedInProfileLink(link.href));
  }

  get linkedinBadgeHref(): string | null {
    return this.linkedinLink ? buildLinkedInBadgeHref(this.linkedinLink.href) : null;
  }

  get linkedinBadgeVanity(): string | null {
    return this.linkedinLink ? extractLinkedInVanity(this.linkedinLink.href) : null;
  }

  get linkedinDisplayName(): string {
    return this.linkedinBadgeVanity
      ? formatLinkedInProfileName(this.linkedinBadgeVanity)
      : 'LinkedIn Profile';
  }

  get profileLinks(): ResumeLink[] {
    return this.links.filter((link) => !isLinkedInProfileLink(link.href));
  }

  get showFallbackBadge(): boolean {
    return Boolean(this.linkedinBadgeHref) && this.badgeDisplayMode !== 'official';
  }

  ngAfterViewInit(): void {
    this.hasViewInitialized = true;
    this.initializeLinkedInBadge();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['links'] && this.hasViewInitialized) {
      this.initializeLinkedInBadge();
    }
  }

  ngOnDestroy(): void {
    this.cleanupBadgeWatch();
  }

  private initializeLinkedInBadge(): void {
    this.cleanupBadgeWatch();
    this.badgeDisplayMode = 'fallback';

    const badgeHost = this.linkedinBadgeHost?.nativeElement;

    if (!isPlatformBrowser(this.platformId) || !this.linkedinBadgeVanity || !badgeHost) {
      return;
    }

    queueMicrotask(() => {
      loadLinkedInBadgeScript(this.documentRef)
        .then(() => {
          this.watchLinkedInBadgeRender();
          badgeHost.querySelectorAll('iframe').forEach((frame) => frame.remove());
          badgeHost.removeAttribute('data-rendered');
          window.LIRenderAll?.();
        })
        .catch(() => {
          this.zone.run(() => {
            this.badgeDisplayMode = 'fallback';
          });
        });
    });
  }

  private watchLinkedInBadgeRender(): void {
    const badgeHost = this.linkedinBadgeHost?.nativeElement;

    if (!badgeHost) {
      return;
    }

    const setOfficialMode = () => {
      this.cleanupBadgeWatch();
      this.zone.run(() => {
        this.badgeDisplayMode = 'official';
      });
    };

    if (hasRenderedLinkedInBadgeFrame(badgeHost)) {
      setOfficialMode();
      return;
    }

    this.badgeObserver = new MutationObserver(() => {
      if (hasRenderedLinkedInBadgeFrame(badgeHost)) {
        setOfficialMode();
      }
    });

    this.badgeObserver.observe(badgeHost, {
      childList: true,
      subtree: true
    });

    this.badgeFallbackTimer = window.setTimeout(() => {
      this.cleanupBadgeWatch();
      this.zone.run(() => {
        this.badgeDisplayMode = 'fallback';
      });
    }, 2500);
  }

  private cleanupBadgeWatch(): void {
    this.badgeObserver?.disconnect();
    this.badgeObserver = undefined;

    if (this.badgeFallbackTimer !== undefined) {
      window.clearTimeout(this.badgeFallbackTimer);
      this.badgeFallbackTimer = undefined;
    }
  }
}
