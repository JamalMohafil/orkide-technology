'use client'
import ContactForm from '@/components/ContactForm';
import FeaturesWebsite from '@/components/FeaturesWebsite';
import HeroWeb from '@/components/HeroWeb';
import Websites from '@/components/Websites';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Web = () => {
  
  return (
    <main className="py-10 ">
      <section className="h-max w-full  ">
        <HeroWeb />
      </section>
      <section className="h-max w-full  ">
        <Websites />
      </section>
      <section className="h-max w-full   ">
        <FeaturesWebsite />
      </section>
      <section className="h-max w-full ">
        <ContactForm />
      </section>
    </main>
  );
}

export default Web