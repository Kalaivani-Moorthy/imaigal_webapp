import { useState, useEffect, useRef } from 'react';

const StatsCards = () => {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-teal-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-cyan-200/40 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-teal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-300/50 rounded-full blur-lg"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* CARD 1 */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-teal-500">
            <div className="text-3xl font-bold text-teal-600 mb-2">2001</div>
            <p className="text-gray-600 font-medium">Foundation Year</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-cyan-500">
            <div className="text-3xl font-bold text-cyan-600 mb-2">70%</div>
            <p className="text-gray-600 font-medium">Educational Support</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-teal-400">
            <div className="text-3xl font-bold text-teal-500 mb-2">30%</div>
            <p className="text-gray-600 font-medium">Medical Support</p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-cyan-400">
            <div className="text-3xl font-bold text-cyan-500 mb-2">500+</div>
            <p className="text-gray-600 font-medium">Students Helped</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCards;