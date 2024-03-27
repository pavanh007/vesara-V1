import { Work } from "./work/work.jsx";
import { Testimonial } from "./testimonial/testimonial.jsx";
import { Team } from "./team/team.jsx";
import { Partner } from "./partner/partners.jsx";
import { Home } from "./home/Home.jsx";
import { Footer } from "./footer/footer.jsx";
import { About } from "./about/About.jsx";

export const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Partner />
      <Team />
      <Footer />
    </>
  );
}