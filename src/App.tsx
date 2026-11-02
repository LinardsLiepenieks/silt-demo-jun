import { CustomerLogos } from './components/customer-logos';
import { CustomerSpotlight } from './components/customer-spotlight';
import { FeatureCards } from './components/feature-cards';
import { FeedbackNotes } from './components/feedback-notes';
import { Hero } from './components/hero';
import { SarahJourney } from './components/sarah-journey';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import { WhereWork } from './components/where-work';

export function App() {
  return (
    <>
      <div className="relative flex min-h-[70vh] flex-col">
        <SiteHeader />
        <main className="flex-grow">
          <Hero />
          <CustomerLogos />
          <WhereWork />
          <FeatureCards />
          <SarahJourney />
          <CustomerSpotlight />
          <FeedbackNotes />
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
