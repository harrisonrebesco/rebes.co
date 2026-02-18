// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

const EXPERIENCE_START_YEAR = 2020;
const EXPERIENCE_START_MONTH = 3; // March (1-based)
const EXPERIENCE_START_DAY = 1;

const getYearsExperience = (asOf = new Date()) => {
  const startDate = new Date(EXPERIENCE_START_YEAR, EXPERIENCE_START_MONTH - 1, EXPERIENCE_START_DAY);
  if (asOf < startDate) {
    return 0;
  }

  const monthsElapsed =
    (asOf.getFullYear() - EXPERIENCE_START_YEAR) * 12 +
    (asOf.getMonth() - (EXPERIENCE_START_MONTH - 1));
  const hasPartialMonth = asOf.getDate() > EXPERIENCE_START_DAY ? 1 : 0;
  const monthsWithPartial = monthsElapsed + hasPartialMonth;

  return Math.max(1, Math.ceil(monthsWithPartial / 12));
};

export const YEARS_EXPERIENCE = getYearsExperience();
export const YEARS_EXPERIENCE_TEXT = `${YEARS_EXPERIENCE} ${
  YEARS_EXPERIENCE === 1 ? "year" : "years"
}`;
export const EXPERIENCE_DESCRIPTION = `Full stack web developer with ${YEARS_EXPERIENCE_TEXT} of experience, based in Maitland, NSW, Australia, specialising in Django applications.`;

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  archiveAllPosts: boolean;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://harry.rebes.co/",
  author: "Harry Rebesco",
  profile: "https://harry.rebes.co/about",
  desc: EXPERIENCE_DESCRIPTION,
  title: "Harry Rebesco",
  ogImage: "profile-placeholder.svg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  archiveAllPosts: true,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/harrisonrebesco/rebes.co/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "America/Los_Angeles",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/harrisonrebesco",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/harrisonrebesco/",
    label: "LinkedIn",
  },
  {
    href: "mailto:hrebesco@live.com.au",
    label: "Email",
  },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Email: "mail",
};
