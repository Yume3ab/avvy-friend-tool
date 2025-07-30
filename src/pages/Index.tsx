// Update this page (the content is just a fallback if you fail to update the page)

import HeroSection from "@/components/landing/HeroSection";
import AboutAvvy from "@/components/landing/AboutAvvy";
import RecruitmentDetails from "@/components/landing/RecruitmentDetails";
import WorkflowSection from "@/components/landing/WorkflowSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ApplicationForm from "@/components/landing/ApplicationForm";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-rounded">
      <HeroSection />
      <AboutAvvy />
      <RecruitmentDetails />
      <WorkflowSection />
      <BenefitsSection />
      <ApplicationForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
