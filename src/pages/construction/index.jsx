

import { ConstructHome } from "./home/constructHome.jsx";
import { WhyVesara } from "./why/why.jsx";
import { ConstructionCost } from "./cost/cost.jsx";
import { ConstructionTrust } from "./trustee/trust.jsx";
import { Footer } from "../root/footer/footer.jsx";


export const ConstructionPage = () => {
  return (
    <>
      <ConstructHome />
      <WhyVesara />
      <ConstructionCost />
      <ConstructionTrust />
      <Footer />
    </>
  );
};