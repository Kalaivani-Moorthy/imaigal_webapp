import { useState, useEffect, useRef } from 'react';
import { BookOpen, Heart, Trophy } from 'lucide-react';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-teal-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-100 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">What We Do</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            "Let us dream to make others realize their dreams" - Born from friendship, grown through compassion.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Beginning</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Imaigal was started by a small group of friends who joined hands with a simple belief - everyone deserves a chance to succeed. 
                We began with small monthly contributions to help those who needed 'a hand to stand'.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When students approached us unable to afford education, we embraced the philosophy: "Education is not preparation for life, but life itself."
              </p>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Growth</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                From supporting education, we expanded to old-age homes, orphanages, and blind schools. 
                Today, we're a family of 100+ dedicated members working for society's upliftment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beyond our core members, countless volunteers and contributors join us in addressing urgent educational and medical needs.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Focus Areas</h3>
          <div className="w-16 h-0.5 bg-gray-400 mx-auto"></div>
        </div>
        
<div className="grid grid-cols-1 md:grid-cols-3 gap-18 max-w-6xl mx-auto mt-12 auto-rows-fr">

  {/* CARD WRAPPER */}
  <div className="relative group h-full flex">
    {/* BACK SOLID SQUARE */}
    <div className="absolute -top-5 -left-5 w-40 h-40 bg-blue-200 rounded-md"></div>

    {/* OUTLINE SQUARE */}
    <div className="absolute -bottom-5 -right-4 w-50 h-30  border-4 border-blue-400 rounded-md"></div>

    {/* MAIN CARD */}
    <div className="relative bg-white p-6 shadow-xl group-hover:shadow-2xl 
      transition-all duration-300 rounded-lg h-full w-full min-h-[250px]">
      <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
      <h3 className="text-2xl font-bold text-blue-600 mb-2">Education</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Supporting students with financial assistance for tuition, books,
        and educational resources.
      </p>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="relative group h-full flex">
    <div className="absolute -top-5 -left-5 w-40 h-40 bg-red-200 rounded-md"></div>
    <div className="absolute -bottom-5 -right-4 w-50 h-30 border-4 border-red-400 rounded-md"></div>

    <div className="relative bg-white p-6 shadow-xl group-hover:shadow-2xl
      transition-all duration-300 rounded-lg h-full w-full min-h-[250px]">
      <Heart className="w-10 h-10 text-red-600 mb-4" />
      <h3 className="text-2xl font-bold text-red-600 mb-2">Medical</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Providing healthcare support during emergencies and covering
        essential treatment costs.
      </p>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="relative group h-full flex">
    <div className="absolute -top-5 -left-5 w-40 h-40 bg-purple-200 rounded-md"></div>
    <div className="absolute -bottom-5 -right-4 w-50 h-30  border-4 border-purple-400 rounded-md"></div>

    <div className="relative bg-white p-6 shadow-xl group-hover:shadow-2xl
      transition-all duration-300 rounded-lg h-full w-full min-h-[250px]">
      <Trophy className="w-10 h-10 text-purple-600 mb-4" />
      <h3 className="text-2xl font-bold text-purple-600 mb-2">Community Development</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Building stronger communities through outreach programs, 
        skill development, and social welfare initiatives.
      </p>
    </div>
  </div>

</div>


      </div>
    </section>
  );
};

export default WhatWeDo;