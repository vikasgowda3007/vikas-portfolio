import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RESUME } from '../../../data/resume-data';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', RESUME.name);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the branded mark instead of the legacy dot', () => {
    const host = fixture.nativeElement as HTMLElement;

    const brandMark = host.querySelector<HTMLImageElement>('.brand-mark');

    expect(brandMark).not.toBeNull();
    expect(brandMark?.getAttribute('src')).toContain('favicon.svg');
    expect(host.querySelector('.dot')).toBeNull();
  });
});
