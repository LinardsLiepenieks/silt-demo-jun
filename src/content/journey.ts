import type { AgendaProps } from '../components/agenda-mock';
import type { CalibrationProps } from '../components/calibration-mock';
import type { ChatMessage } from '../components/chat-mock';
import type { ReviewProps } from '../components/review-mock';
import type { JourneySlide } from '../components/sarah-journey';

const avatar = (name: string) => `/images/avatars/${name}.png`;

export const journeyHeading = {
  eyebrow: 'How it works',
  title: ['Meet Sarah.', "Here's her journey with Windmill."],
  text: 'From day one to her first performance review, Windmill is working behind the scenes.',
};

// How long each slide stays before the next one fades in.
export const journeyIntervalMs = 10000;

export const onboardingChat: ChatMessage[] = [
  {
    author: 'Windy',
    time: 'Mon 9:02',
    text: "Hey @Sarah, welcome to the team! Quick check-in — how's your first week going?",
  },
  {
    author: 'Sarah',
    avatar: avatar('kate'),
    time: 'Mon 9:04',
    text: 'Loving it so far! Would be great to get a walkthrough of the design system though.',
  },
];

export const oneOnOneAgenda: AgendaProps = {
  title: '1:1 Agenda — Sarah / Mark',
  meta: 'Auto-generated · Mar 14, 2026',
  items: [
    { text: 'Follow up on design-system walkthrough request' },
    { text: "Sarah's PR on the onboarding flow got strong reviews" },
    { text: 'Upcoming sprint planning — capacity check' },
    { text: 'Sarah added: Conference budget', added: true },
  ],
};

export const feedbackChat: ChatMessage[] = [
  {
    author: 'Windy',
    time: 'Thu 4:12',
    text: "Hey @Alex, saw you and @Sarah wrapped the onboarding redesign this week. How'd she do?",
  },
  {
    author: 'Alex',
    avatar: avatar('blake'),
    time: 'Thu 4:18',
    text: 'Really good. Took my PR review notes seriously and had a cleaner v2 back by end of day.',
  },
];

export const quarterReview: ReviewProps = {
  title: 'Performance Review',
  meta: 'Q1 2026 · Sarah Kim · IC3',
  rating: 'Exceeds',
  summary:
    'Led the onboarding redesign, unblocking 2 downstream teams. Consistently praised in peer feedback for code quality and communication.',
  tags: [
    { label: '8 evidence items', tone: 'purple' },
    { label: '3 peer reviews', tone: 'blue' },
  ],
};

export const calibrationGrid: CalibrationProps = {
  title: 'Calibration · IC3 Engineering',
  rows: ['High', 'Med', 'Low'],
  columns: ['Low', 'Meets', 'Exceeds'],
  people: [
    { avatar: avatar('kate'), row: 0, column: 2, highlighted: true },
    { avatar: avatar('blake'), row: 0, column: 1 },
    { avatar: avatar('james'), row: 1, column: 1 },
    { avatar: avatar('erin'), row: 1, column: 0 },
    { avatar: avatar('jose'), row: 2, column: 2 },
  ],
};

export const journeySlides: JourneySlide[] = [
  {
    step: 'Onboarding',
    eyebrow: 'Week 1',
    title: 'Sarah joins the team',
    text: 'Before her manager even thinks about it, Windy reaches out via Slack to check in. Her manager sees the gap before the next 1:1, and future new hires get the walkthrough on day one.',
    image: '/images/journey/sarah-journey-7.jpg',
    mock: { kind: 'chat', messages: onboardingChat },
  },
  {
    step: '1:1s',
    eyebrow: 'Weekly',
    title: '1:1s that prep themselves',
    text: "No more 'so… what should we talk about?' Windy pulls the agenda from the week's actual work, and Sarah adds what's on her mind.",
    image: '/images/journey/sarah-journey-8.jpg',
    mock: { kind: 'agenda', ...oneOnOneAgenda },
  },
  {
    step: 'Feedback',
    eyebrow: 'Ongoing',
    title: 'Continuous feedback, not annual surprises',
    text: 'Windy notices Sarah and Alex wrapped a project together and asks Alex how it went. Sarah sees the feedback the same day, not six months later.',
    image: '/images/journey/sarah-journey-3-v2.jpg',
    mock: { kind: 'chat', messages: feedbackChat },
  },
  {
    step: 'Review',
    eyebrow: 'Quarter end',
    title: 'Performance reviews, already written',
    text: "Windy drafts Sarah's review from real evidence. She gets a refresher on her own work. Her manager reviews the evidence instead of reconstructing the quarter from memory.",
    image: '/images/journey/sarah-journey-9.jpg',
    mock: { kind: 'review', ...quarterReview },
  },
  {
    step: 'Calibrations',
    eyebrow: 'Company-wide',
    title: 'Fair, traceable decisions',
    text: 'Committee members get a pre-read before the meeting flagging biases and rating inconsistencies. On the grid, they see where everyone lands and can trace any rating back to the evidence behind it.',
    image: '/images/journey/sarah-journey-5-v2.jpg',
    mock: { kind: 'calibration', ...calibrationGrid },
  },
];
