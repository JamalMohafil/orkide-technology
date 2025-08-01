import About from "@/components/About";
 import Hero from "@/components/Hero";
  import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
 import Services from "@/components/Services";
import Consulting from "@/components/Consulting";
import Top from "@/components/Top";
 
export default function Home() {
  return (
    <main>
      <section className="h-max w-full  ">
        <Hero />
      </section>
      <section id="services" className="h-max w-full  ">
        <Services />
      </section>
      <section id="about" className="h-max w-full  ">
        <About />
      </section>
      <section className="h-max w-full  ">
        <Team />
      </section>
      <section className="h-max w-full  ">
        <Consulting />
      </section>
      <section className="h-max w-full  ">
        <Testimonial />
      </section>
      <section className="h-max w-full  ">
        <Top />
      </section>    
    </main>
  );
}
