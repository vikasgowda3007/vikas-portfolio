const LINKEDIN_BADGE_SCRIPT_ID = 'linkedin-profile-badge-script';
const LINKEDIN_BADGE_SCRIPT_SRC = 'https://platform.linkedin.com/badges/js/profile.js';

let linkedInBadgeScriptPromise: Promise<void> | null = null;

declare global {
  interface Window {
    LIRenderAll?: () => void;
  }
}

function parseLinkedInProfileUrl(url: string): URL | null {
  try {
    const normalizedUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const parsedUrl = new URL(normalizedUrl);
    const hostname = parsedUrl.hostname.replace(/^www\./i, '').toLowerCase();

    if (hostname !== 'linkedin.com') {
      return null;
    }

    const [section, vanity] = parsedUrl.pathname.split('/').filter(Boolean);

    return section === 'in' && vanity ? parsedUrl : null;
  } catch {
    return null;
  }
}

function waitForLinkedInBadgeScript(script: HTMLScriptElement): Promise<void> {
  if (typeof window !== 'undefined' && window.LIRenderAll) {
    return Promise.resolve();
  }

  if (script.dataset['linkedinBadgeLoaded'] === 'true') {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const handleLoad = () => {
      script.dataset['linkedinBadgeLoaded'] = 'true';
      cleanup();
      resolve();
    };

    const handleError = () => {
      cleanup();
      linkedInBadgeScriptPromise = null;
      reject(new Error('Failed to load the LinkedIn badge script.'));
    };

    const cleanup = () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };

    script.addEventListener('load', handleLoad, { once: true });
    script.addEventListener('error', handleError, { once: true });
  });
}

export function isLinkedInProfileLink(url: string): boolean {
  return Boolean(parseLinkedInProfileUrl(url));
}

export function extractLinkedInVanity(url: string): string | null {
  const parsedUrl = parseLinkedInProfileUrl(url);

  if (!parsedUrl) {
    return null;
  }

  const [, vanity] = parsedUrl.pathname.split('/').filter(Boolean);
  return vanity ? decodeURIComponent(vanity) : null;
}

export function buildLinkedInBadgeHref(url: string): string | null {
  const vanity = extractLinkedInVanity(url);

  return vanity ? `https://www.linkedin.com/in/${vanity}?trk=profile-badge` : null;
}

export function formatLinkedInProfileName(vanity: string): string {
  const segments = vanity
    .split('-')
    .filter(Boolean)
    .filter((segment, index, allSegments) => !(index === allSegments.length - 1 && /\d/.test(segment)));

  if (!segments.length) {
    return 'LinkedIn Profile';
  }

  return segments
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
    .join(' ');
}

export function hasRenderedLinkedInBadgeFrame(element: ParentNode | null): boolean {
  return Boolean(element?.querySelector('iframe'));
}

export function loadLinkedInBadgeScript(documentRef: Document): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (window.LIRenderAll) {
    return Promise.resolve();
  }

  if (linkedInBadgeScriptPromise) {
    return linkedInBadgeScriptPromise;
  }

  const existingScript = documentRef.getElementById(
    LINKEDIN_BADGE_SCRIPT_ID
  ) as HTMLScriptElement | null;

  if (existingScript) {
    linkedInBadgeScriptPromise = waitForLinkedInBadgeScript(existingScript);
    return linkedInBadgeScriptPromise;
  }

  const script = documentRef.createElement('script');
  script.id = LINKEDIN_BADGE_SCRIPT_ID;
  script.src = LINKEDIN_BADGE_SCRIPT_SRC;
  script.async = true;
  script.defer = true;
  script.type = 'text/javascript';

  linkedInBadgeScriptPromise = waitForLinkedInBadgeScript(script);
  documentRef.head.appendChild(script);

  return linkedInBadgeScriptPromise;
}
