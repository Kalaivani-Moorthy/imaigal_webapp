const HeroCarousel = () => {
  return (
    <div id="home" className="relative w-full h-[80vh] bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-60 blur-xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-full opacity-50 blur-lg"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-40 blur-2xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-4">
        <div className="flex flex-col lg:flex-row items-center h-full">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6 lg:pr-12">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-teal-200 shadow-sm">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              <span className="text-sm font-medium text-teal-600">Transforming Lives Since 2014</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Shape</span>
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500">
                  Tomorrow
                </span>
                <br/>
                <span className="text-gray-700 text-3xl lg:text-4xl">Today</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Imaigal Foundation empowers deserving students with scholarships, 
                mentorship, and opportunities to build extraordinary futures.
              </p>
            </div>
            
            {/* CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center">
                    Start Your Journey
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-teal-500 hover:text-teal-500 transition-all duration-300">
                  Watch Story
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 bg-teal-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-cyan-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span>500+ Students Supported</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★★★★★</span>
                  <span>Trusted by Community</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="NGO helping students" 
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-teal-500">₹50L+</div>
              <div className="text-xs text-gray-600">Scholarships</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-cyan-500">10+</div>
              <div className="text-xs text-gray-600">Years Impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
