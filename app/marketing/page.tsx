import AboutMarketing from '@/components/AboutMarketing';
import LastMarketingSection from '@/components/LastMarketingSection';
import MarketingHero from '@/components/MarketingHero'
import MarketingSteps from '@/components/MarketingSteps';
import WhyWeUseDigitalMarketingSection from '@/components/WhyWeUseDigitalMarketingSection';
import React from 'react'

const MarketingPage = () => {
  return (
    <main>
      <section className="h-max w-full  ">
        <MarketingHero />
      </section>
      <section className="h-max w-full  ">
        <AboutMarketing />
      </section>
      <section className="h-max w-full  ">
        <MarketingSteps />
      </section>
      <section className="h-max w-full  ">
        <WhyWeUseDigitalMarketingSection />
      </section>
      <section className="h-max w-full  ">
        <LastMarketingSection />
      </section>
    </main>
  );
}

export default MarketingPage