export const siteUrl = 'https://gowindmill.com';

export type NavMenuItem = {
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
};

export type NavEntry =
  | { kind: 'link'; label: string; href: string; className: string }
  | {
      kind: 'menu';
      label: string;
      items: NavMenuItem[];
      listClassName: string;
    };

const productItems: NavMenuItem[] = [
  {
    title: 'Performance Reviews',
    description: 'Performance reviews that run themselves.',
    href: `${siteUrl}/features/performance-reviews/`,
  },
  {
    title: '1:1s',
    description:
      'Smart, automated agendas for effective 1:1 meetings with your team.',
    href: `${siteUrl}/features/one-on-ones/`,
  },
  {
    title: 'Onboarding',
    description:
      'Get new hires contributing faster with a program that runs itself and improves every class.',
    href: `${siteUrl}/features/onboarding/`,
  },
  {
    title: 'Pulse Surveys',
    description:
      'Custom surveys to understand team sentiment, gather blockers, or run retros.',
    href: `${siteUrl}/features/pulse-surveys/`,
  },
  {
    title: 'Analytics',
    description:
      "Reports on AI adoption, Windmill engagement, 1:1 habits, and your org's real collaboration network.",
    href: `${siteUrl}/features/analytics/`,
  },
  {
    title: 'Continuous Feedback',
    description:
      'Ongoing feedback system to help your team grow and improve consistently.',
    href: `${siteUrl}/features/continuous-feedback/`,
  },
  {
    title: 'Calibrations',
    description:
      'AI-powered pre-reads highlight discrepancies and flag biases for faster, fairer calibrations.',
    href: `${siteUrl}/features/calibrations/`,
  },
];

const resourceItems: NavMenuItem[] = [
  {
    title: 'Integrations',
    description: 'Connect Windmill with your favorite tools.',
    href: `${siteUrl}/integrations/`,
  },
  {
    title: 'Agents',
    description: 'Connect your favorite tools to Windmill.',
    href: `${siteUrl}/agents/`,
  },
  {
    title: 'Security',
    description: 'Visit our trust center.',
    href: 'https://app.drata.com/trust/7bd6416b-c1ac-4c6c-afb4-a015fe83db6b',
    isExternal: true,
  },
  {
    title: 'Help Center',
    description: 'Learn how to use Windmill.',
    href: 'https://help.gowindmill.com/',
    isExternal: true,
  },
  {
    title: 'Blog',
    description: 'Read our latest blog posts.',
    href: `${siteUrl}/blog/`,
  },
];

const companyItems: NavMenuItem[] = [
  {
    title: 'About Us',
    description: 'Learn about Windmill.',
    href: `${siteUrl}/about-us/`,
  },
  {
    title: 'Mission',
    description: "Why we're building Windmill.",
    href: `${siteUrl}/mission/`,
  },
  {
    title: 'Careers',
    description: 'Join our team.',
    href: `${siteUrl}/careers/`,
  },
];

// Order and widths match the live header; the menus sit between plain links.
export const navEntries: NavEntry[] = [
  {
    kind: 'menu',
    label: 'Product',
    items: productItems,
    listClassName: 'flex w-[300px] flex-col gap-2 p-4 lg:w-[400px]',
  },
  {
    kind: 'link',
    label: 'How It Works',
    href: `${siteUrl}/science/`,
    className: 'w-22 px-2',
  },
  {
    kind: 'link',
    label: 'Pricing',
    href: `${siteUrl}/pricing/`,
    className: 'w-22 pr-0 pl-2',
  },
  {
    kind: 'link',
    label: 'Customers',
    href: `${siteUrl}/customers/`,
    className: 'w-22 px-2',
  },
  {
    kind: 'menu',
    label: 'Resources',
    items: resourceItems,
    listClassName: 'grid w-[300px] gap-2 p-2',
  },
  {
    kind: 'menu',
    label: 'Company',
    items: companyItems,
    listClassName: 'grid w-[300px] gap-2 p-2',
  },
];

export const headerCtas = {
  logIn: { label: 'Log in', href: 'https://app.gowindmill.com/auth' },
  bookDemo: { label: 'Book a demo', href: `${siteUrl}/start/` },
};
