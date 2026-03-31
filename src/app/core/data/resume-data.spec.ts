import { RESUME } from './resume-data';

describe('RESUME', () => {
  it('should export the resume data used by the app', () => {
    expect(RESUME.name).toBe('Vikas Keshavamurthy');
    expect(RESUME.experience.length).toBeGreaterThan(0);
    expect(RESUME.links.some((link) => link.label === 'Resume PDF')).toBe(true);
  });
});
