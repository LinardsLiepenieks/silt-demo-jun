export const hero = {
  announcement: {
    badge: 'New',
    label: 'Agentic Employee Onboarding',
    href: 'https://gowindmill.com/lp/onboarding/',
  },
  // The words in `emphasis` are set in italics at the end of the headline.
  title: 'Performance reviews that people',
  emphasis: 'actually like',
  text: 'Finally, performance management that runs itself. 90% faster reviews. 93% employee satisfaction. Zero nagging required.',
  primaryCta: {
    label: 'AI demo',
    href: 'https://app.gowindmill.com/auth?returnTo=%2Fs%2Fnew%2F',
  },
  secondaryCta: { label: 'Book a demo', href: 'https://gowindmill.com/start/' },
};

export const heroLayers = [
  { label: 'People', image: '/images/hero/people.png' },
  { label: 'Evidence', image: '/images/hero/evidence.png' },
  { label: 'Standards', image: '/images/hero/standards.png' },
  { label: 'Perspectives', image: '/images/hero/judgements.png' },
];

export const heroLayerIntervalMs = 5000;

export type CustomerLogo = {
  name: string;
  file: string;
  /** Box width as a multiple of the row's logo height. */
  width: number;
  /** Visible artwork height as a multiple of the logo height. */
  artHeight: number;
  /** The image's width, height, left and top in % of the artwork box,
   * trimming the padding baked into each logo file. */
  crop: [number, number, number, number];
};

export const customersHeading = 'Trusted by AI-forward companies';

export const customerLogos: CustomerLogo[] = [
  {
    name: 'Rho',
    file: 'rho',
    width: 1.361,
    artHeight: 0.6094,
    crop: [133.333, 175.349, -16.667, -38.14],
  },
  {
    name: 'Merge',
    file: 'merge',
    width: 2.014,
    artHeight: 0.4117,
    crop: [101.215, 103.96, -0.6073, -1.98],
  },
  {
    name: 'Kalshi',
    file: 'kalshi-2',
    width: 1.781,
    artHeight: 0.4655,
    crop: [114.05, 182.213, -6.715, -39.921],
  },
  {
    name: 'Cal.com',
    file: 'cal',
    width: 1.994,
    artHeight: 0.4158,
    crop: [100.708, 105.283, 0, 0],
  },
  {
    name: "The Farmer's Dog",
    file: 'the-farmers-dog',
    width: 0.9029,
    artHeight: 0.8214,
    crop: [100.392, 110.345, -0.1961, -5.172],
  },
  {
    name: 'Huntress',
    file: 'huntress',
    width: 2.309,
    artHeight: 0.5611,
    crop: [100, 101.429, 0, -0.7143],
  },
  {
    name: 'Profound',
    file: 'profound-dark',
    width: 2.265,
    artHeight: 0.3661,
    crop: [117.614, 206.897, -8.807, -53.448],
  },
  {
    name: 'Etched',
    file: 'etched-wordmark',
    width: 2.029,
    artHeight: 0.4087,
    crop: [102.178, 110.811, -1.089, -5.405],
  },
  {
    name: 'Heidi',
    file: 'heidi',
    width: 0.7236,
    artHeight: 0.8214,
    crop: [162.162, 142.857, -31.171, -21.429],
  },
  {
    name: 'TickPick',
    file: 'tickpick',
    width: 1.975,
    artHeight: 0.4197,
    crop: [100, 100, 0, 0],
  },
];

export const whereWork = {
  title: 'Where work gets remembered.',
  cta: { label: 'See how it works', href: 'https://gowindmill.com/science/' },
  image: '/images/where-work.jpg',
};
