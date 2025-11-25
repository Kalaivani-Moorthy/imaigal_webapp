import { useState, useEffect, useRef } from 'react';
import { Images, Users, Video, Grid3X3, Eye, X } from 'lucide-react';
import gallery01 from '../assets/gallery01.jpg';
import gallery02 from '../assets/gallery02.jpg';
import gallery03 from '../assets/gallery03.jpg';
import gallery04 from '../assets/gallery04.jpg';
import gallery05 from '../assets/gallery05.png';
import gallery06 from '../assets/gallery06.png';
import gallery07 from '../assets/gallery07.png';
import gallery08 from '../assets/gallery08.png';
import gallery09 from '../assets/gallery9.png';
import gallery10 from '../assets/gallery10.png';

const OurWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
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

  const tabs = [
    { id: 'all', label: 'All', icon: Grid3X3 },
    { id: 'images', label: 'Images', icon: Images },
    { id: 'meeting', label: 'Meeting', icon: Users }
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Works</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Imaigal has helped many poor students to realize their dream of education. Many of them are now IT professionals, Teachers, Lecturers etc.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              People who were once suffering from life threatening ailments could undergo surgeries with the support of Imaigal. 
              Their families are remembering Imaigal team with gratitude even today.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-lg p-2 shadow-md flex gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Images Filter */}
          {(activeTab === 'all' || activeTab === 'images') && (
            <>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer" onClick={() => setSelectedImage(gallery01)}>
                <img src={gallery01} alt="Gallery 1" className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">View Photo</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer" onClick={() => setSelectedImage(gallery02)}>
                <img src={gallery02} alt="Gallery 2" className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">View Photo</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer" onClick={() => setSelectedImage(gallery03)}>
                <img src={gallery03} alt="Gallery 3" className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">View Photo</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer" onClick={() => setSelectedImage(gallery04)}>
                <img src={gallery04} alt="Gallery 4" className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">View Photo</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer" onClick={() => setSelectedImage(gallery10)}>
                <img src={gallery10} alt="Gallery 10" className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">View Photo</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Meeting Filter */}
          {(activeTab === 'all' || activeTab === 'meeting') && (
            <>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer" onClick={() => setSelectedImage(gallery05)}>
                <img src={gallery05} alt="Gallery 5" className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">View Photo</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer" onClick={() => setSelectedImage(gallery06)}>
                <img src={gallery06} alt="Gallery 6" className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">View Photo</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer" onClick={() => setSelectedImage(gallery07)}>
                <img src={gallery07} alt="Gallery 7" className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">View Photo</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer" onClick={() => setSelectedImage(gallery08)}>
                <img src={gallery08} alt="Gallery 8" className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">View Photo</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer" onClick={() => setSelectedImage(gallery09)}>
                <img src={gallery09} alt="Gallery 9" className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">View Photo</p>
                  </div>
                </div>
              </div>
            </>
          )}



        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full p-4">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <img src={selectedImage} alt="Gallery" className="max-w-full max-h-full object-contain rounded-lg" />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default OurWorks;