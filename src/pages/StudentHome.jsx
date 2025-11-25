import HeroCarousel from '../components/HeroCarousel';
import StatsCards from '../components/StatsCards';
import AboutSection from '../components/AboutSection';
import WhatWeDo from '../components/WhatWeDo';
import OurWorks from '../components/OurWorks';
import MembershipSection from '../components/MembershipSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const StudentHome = () => {
  return (
    <div>
      <HeroCarousel />
      <StatsCards />
      <AboutSection />
      <WhatWeDo />
      <OurWorks />
      <MembershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default StudentHome;