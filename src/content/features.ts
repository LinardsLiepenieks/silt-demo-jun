import type { FeatureCardProps } from '../components/feature-cards';

const card = (
  title: string,
  slug: string,
  image: string,
): FeatureCardProps => ({
  title,
  href: `https://gowindmill.com/features/${slug}/`,
  image: `/images/features/${image}.png`,
  hoverImage: `/images/features/${image}-hover.png`,
});

export const featuresHeading = {
  eyebrow: 'The full performance stack',
  title: 'Product and use cases',
};

export const featureCards: FeatureCardProps[] = [
  card('Performance Reviews', 'performance-reviews', 'perf-reviews'),
  card('1:1s', 'one-on-ones', 'one-on-ones'),
  card('Onboarding', 'onboarding', 'onboarding'),
  card('Continuous feedback', 'continuous-feedback', 'continuous-feedback'),
  card('Calibrations', 'calibrations', 'calibrations'),
  card('Pulse surveys', 'pulse-surveys', 'pulse-surveys'),
];
