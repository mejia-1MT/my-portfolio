import Hero from "./hero/hero";
import Works from "./works/works";

export default function page() {
  return (
    <section className="relative text-white bg-primary z-10 lala">
      <Hero />
      <Works />
    </section>
  );
}
