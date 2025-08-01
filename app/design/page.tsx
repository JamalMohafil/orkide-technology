import DesignHero from '@/components/DesignHero';
import SliderProjectsDesign from '@/components/SliderProjectsDesign';
import React from 'react'

const DesignPage = () => {
  return (
    <main>
      <section className="h-max max-h-[1000px] flex justify-center items-center overflow-hidden w-full gardeint-design">
        <DesignHero />
         
      </section>
      <section className="h-max w-full gardeint-design">
        <SliderProjectsDesign firstTitle='logo' secondTitle='logo' data={['test']} />
         
      </section>
    </main>
  );
}

export default DesignPage