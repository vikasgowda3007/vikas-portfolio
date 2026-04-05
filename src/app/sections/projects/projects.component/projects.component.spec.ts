import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { RESUME } from '../../../core/data/resume-data';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('projects', RESUME.projects);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders technologies only in the focus panel', () => {
    const element: HTMLElement = fixture.nativeElement;
    const projectTitles = Array.from(element.querySelectorAll('.project-copy h3')).map((title) =>
      title.textContent?.trim()
    );
    const focusPills = Array.from(element.querySelectorAll('.project-panel li')).map((pill) =>
      pill.textContent?.trim()
    );

    expect(element.querySelector('.tech')).toBeNull();
    expect(projectTitles).toContain('AI Resume Generator');
    expect(projectTitles).toContain('Self-Tracking Telescope');
    expect(projectTitles).toContain('Kavach Webpage');
    expect(focusPills).toContain('Python');
    expect(focusPills).toContain('Angular');
  });
});
