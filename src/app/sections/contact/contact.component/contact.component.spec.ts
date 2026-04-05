import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { RESUME } from '../../../core/data/resume-data';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  const linkedInWindow = window as Window & {
    IN?: {
      parse?: (element?: Element) => void;
    };
  };

  beforeAll(() => {
    linkedInWindow.IN = {
      parse: () => undefined
    };
  });

  afterAll(() => {
    delete linkedInWindow.IN;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('contact', RESUME.contact);
    fixture.componentRef.setInput('links', RESUME.links);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the LinkedIn badge and keeps non-LinkedIn links in elsewhere', () => {
    const element: HTMLElement = fixture.nativeElement;
    const badge = element.querySelector('.linkedin-badge');
    const badgeLink = element.querySelector('.linkedin-fallback-card') as HTMLAnchorElement | null;
    const elsewhereLinks = Array.from(element.querySelectorAll<HTMLAnchorElement>('.link-list a')).map(
      (link) => link.textContent?.trim()
    );

    expect(badge).not.toBeNull();
    expect(badge?.getAttribute('data-vanity')).toBe('vikas-keshavamurthy-b027b1165');
    expect(badgeLink?.getAttribute('href')).toBe(
      'https://www.linkedin.com/in/vikas-keshavamurthy-b027b1165?trk=profile-badge'
    );
    expect(badgeLink?.textContent).toContain('Vikas Keshavamurthy');
    expect(elsewhereLinks).toContain('GitHub');
    expect(elsewhereLinks).toContain('Resume PDF');
    expect(elsewhereLinks).not.toContain('LinkedIn');
  });

  it('omits the badge cleanly when the LinkedIn link is missing', async () => {
    fixture.componentRef.setInput(
      'links',
      RESUME.links.filter((link) => link.label !== 'LinkedIn')
    );
    fixture.detectChanges();
    await fixture.whenStable();

    const element: HTMLElement = fixture.nativeElement;
    const elsewhereLinks = Array.from(element.querySelectorAll<HTMLAnchorElement>('.link-list a')).map(
      (link) => link.textContent?.trim()
    );

    expect(element.querySelector('.linkedin')).toBeNull();
    expect(elsewhereLinks).toContain('GitHub');
    expect(elsewhereLinks).toContain('Resume PDF');
  });
});
