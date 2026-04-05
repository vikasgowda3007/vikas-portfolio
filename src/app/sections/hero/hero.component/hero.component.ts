import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resume, ResumeLink } from '../../../core/models/resume/resume.module';
import { isLinkedInProfileLink } from '../../../core/linkedin-badge';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input({ required: true }) resume!: Resume;

  get primaryName(): string {
    const [firstName] = this.resume.name.trim().split(/\s+/);
    return firstName || this.resume.name;
  }

  get secondaryName(): string {
    const [, ...rest] = this.resume.name.trim().split(/\s+/);
    return rest.join(' ');
  }

  get actionLinks(): ResumeLink[] {
    return this.resume.links.filter((link) => !isLinkedInProfileLink(link.href));
  }
}
