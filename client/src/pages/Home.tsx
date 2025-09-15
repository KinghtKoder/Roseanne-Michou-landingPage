import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import BusinessHours from "@/components/BusinessHours";
import PaymentPlans from "@/components/PaymentPlans";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <BusinessHours />
        <PaymentPlans />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}