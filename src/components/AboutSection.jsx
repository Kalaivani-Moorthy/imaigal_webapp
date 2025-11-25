const AboutSection = () => {
  return (
    <section id="about" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-gradient-to-bl from-teal-100/50 to-transparent rounded-full -translate-y-32 lg:-translate-y-48 translate-x-32 lg:translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-56 lg:w-80 h-56 lg:h-80 bg-gradient-to-tr from-cyan-100/40 to-transparent rounded-full translate-y-28 lg:translate-y-40 -translate-x-28 lg:-translate-x-40"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About <span className="text-teal-600">Imaigal</span></h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">"The Eyelids" - A foundation dedicated to opening new possibilities for those in need</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">About Imaigal</h3>
            <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8">
              Imaigal Foundation is dedicated to transforming lives through education and healthcare support. 
              We believe every individual deserves the opportunity to reach their full potential.
            </p>
            
            {/* Zigzag Layout */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="space-y-2 sm:space-y-3">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Community volunteering" 
                  className="rounded-lg sm:rounded-xl shadow-sm w-full h-32 sm:h-40 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Community support" 
                  className="rounded-lg sm:rounded-xl shadow-sm w-full h-28 sm:h-36 object-cover"
                />
              </div>
              <div className="space-y-2 sm:space-y-3 mt-8 lg:mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Children learning" 
                  className="rounded-lg sm:rounded-xl shadow-sm w-full h-40 sm:h-52 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Education support" 
                  className="rounded-lg sm:rounded-xl shadow-sm w-full h-24 sm:h-28 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Feature Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">01</span>
              </div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2">Educational Support</h4>
              <p className="text-gray-600 text-sm">Providing scholarships and resources for deserving students.</p>
            </div>

            <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">02</span>
              </div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2">Medical Assistance</h4>
              <p className="text-gray-600 text-sm">Emergency healthcare support for families in need.</p>
            </div>

            <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">03</span>
              </div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2">Community Outreach</h4>
              <p className="text-gray-600 text-sm">Building stronger communities through volunteer programs.</p>
            </div>

            <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">04</span>
              </div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2">Mentorship Programs</h4>
              <p className="text-gray-600 text-sm">Guiding individuals towards sustainable growth and success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;