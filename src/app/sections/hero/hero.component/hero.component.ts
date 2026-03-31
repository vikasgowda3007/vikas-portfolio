import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resume } from '../../../core/models/resume/resume.module';

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
}
