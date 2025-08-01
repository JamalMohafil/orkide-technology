import ContactUsForm from '@/components/ContactUsForm';
import HeroContactUs from '@/components/HeroContactUs';
import HeroWeb from '@/components/HeroWeb';
import React from 'react'

const ContactUsPage = () => {
  return (
    <main className="py-10 ">
      <section className="h-max w-full  ">
        <HeroContactUs />
      </section>
      <section className="h-max w-full  ">
        <ContactUsForm />
      </section>
    </main>
  );
}

export default ContactUsPage