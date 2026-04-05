import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { RESUME } from '../../../core/data/resume-data';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('resume', RESUME);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keeps LinkedIn out of the hero action links', () => {
    const element: HTMLElement = fixture.nativeElement;
    const actionLinks = Array.from(element.querySelectorAll<HTMLAnchorElement>('.hero-actions a.btn.ghost')).map(
      (link) => link.textContent?.trim()
    );

    expect(actionLinks).toContain('GitHub');
    expect(actionLinks).toContain('Resume PDF');
    expect(actionLinks).not.toContain('LinkedIn');
  });

  it('does not render the current chapter stage card', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('.stage-shell')).toBeNull();
  });
});
