import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceIntro from "@/components/ServiceIntro";
import HowToUse from "@/components/HowToUse";
import KindergartenGuide from "@/components/KindergartenGuide";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServiceIntro />
        <HowToUse />
        <KindergartenGuide />
        <Reviews />
        <FAQ />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}
