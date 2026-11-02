import { siteUrl } from './navigation';

export type FooterLink = { label: string; href: string };
export type FooterColumn = {
  title: string;
  links: FooterLink[];
  // The two long columns span both rows of the wide grid; the G2 badges sit
  // under the short ones.
  tall?: boolean;
};

const site = (path: string) => `${siteUrl}${path}`;

export const footerColumns: FooterColumn[] = [
  {
    title: 'FEATURES',
    tall: true,
    links: [
      {
        label: 'Performance Reviews',
        href: site('/features/performance-reviews/'),
      },
      { label: '1:1s', href: site('/features/one-on-ones/') },
      { label: 'Onboarding', href: site('/features/onboarding/') },
      { label: 'Pulse Surveys', href: site('/features/pulse-surveys/') },
      { label: 'Analytics', href: site('/features/analytics/') },
      {
        label: 'Continuous Feedback',
        href: site('/features/continuous-feedback/'),
      },
      { label: 'Calibrations', href: site('/features/calibrations/') },
    ],
  },
  {
    title: 'COMPANY',
    tall: true,
    links: [
      { label: 'About Us', href: site('/about-us/') },
      { label: 'Science', href: site('/science/') },
      { label: 'Mission', href: site('/mission/') },
      { label: 'Customers', href: site('/customers/') },
      { label: 'Integrations', href: site('/integrations/') },
      { label: 'Agents', href: site('/agents/') },
      { label: 'Pricing', href: site('/pricing/') },
      { label: 'Resources', href: site('/resources/') },
      { label: 'Glossary', href: site('/resources/glossary/') },
      { label: 'Blog', href: site('/blog/') },
      { label: 'Tools', href: site('/tools/') },
      {
        label: 'Jobs',
        href: 'https://gowindmill.notion.site/Careers-at-Windmill-0ac6592c8e46492ca8b7894c4ab6338b',
      },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'Contact Us', href: site('/contact/') },
      { label: 'Help Desk', href: 'https://help.gowindmill.com/' },
      { label: 'Status', href: 'https://status.gowindmill.com' },
    ],
  },
  {
    title: 'INTEGRATIONS',
    links: [
      { label: 'Jira', href: site('/integrations/jira/') },
      { label: 'Slack', href: site('/integrations/slack/') },
      { label: 'Figma', href: site('/integrations/figma/') },
      { label: 'Notion', href: site('/integrations/notion/') },
      {
        label: 'Google Workspace',
        href: site('/integrations/googleWorkspace/'),
      },
      { label: 'Asana', href: site('/integrations/asana/') },
      { label: '+32 more', href: site('/integrations/') },
    ],
  },
];

export const socialLinks = {
  x: {
    label: 'Follow Windmill on X (formerly Twitter)',
    href: 'https://x.com/trywindmill',
  },
  linkedIn: {
    label: 'Follow Windmill on LinkedIn',
    href: 'https://www.linkedin.com/company/gowindmill/',
  },
  youTube: {
    label: 'Subscribe to Windmill on YouTube',
    href: 'https://www.youtube.com/@GoWindmill',
  },
};

export const g2Badges = {
  usersLoveUs: {
    href: 'https://www.g2.com/products/windmill-windmill/reviews?utm_source=rewards-medal',
    title: 'Users love Windmill on G2',
    src: '/images/g2/users-love-us.svg',
    alt: 'Users Love Us',
  },
  stars: {
    href: 'https://www.g2.com/products/windmill-windmill/reviews?utm_source=review-widget',
    title: 'Read reviews of Windmill on G2',
    src: '/images/g2/stars.png',
    alt: 'Read Windmill reviews on G2',
  },
};

export const legalLinks: (FooterLink & { newTab?: boolean })[] = [
  { label: 'Terms of Service', href: site('/legal/terms-of-service/') },
  { label: 'Privacy Policy', href: site('/legal/privacy-policy/') },
  {
    label: 'Do Not Sell or Share My Personal Information',
    href: 'https://app.termly.io/notify/5059523c-b34c-4e5a-a3a5-fa02bbdbed97',
    newTab: true,
  },
  { label: 'Consent Preferences', href: '#' },
];

export const complianceLink = {
  label: 'SOC 2 Type II · GDPR',
  href: 'https://app.drata.com/trust/7bd6416b-c1ac-4c6c-afb4-a015fe83db6b',
};

export const copyright = '© 2026 Windmill';
