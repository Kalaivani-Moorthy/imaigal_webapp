import { useState } from 'react';
import { User, Calendar, DollarSign, FileText, Send } from 'lucide-react';

const MembershipSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    monthlyContribution: '',
    idType: '',
    governmentId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Imaigal Membership Registration</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Join our mission to make a difference in people's lives
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name (as in PAN / Aadhaar) *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* DOB Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                DOB (optional)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Monthly Contribution */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Contribution *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="monthlyContribution"
                  value={formData.monthlyContribution}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter monthly contribution amount"
                />
              </div>
            </div>

            {/* Government ID Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select the Government ID, for issuing 80G receipt *
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Please note that the tax-exemption can be claimed only if the PAN/Aadhaar is provided
              </p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="idType"
                    value="PAN"
                    checked={formData.idType === 'PAN'}
                    onChange={handleInputChange}
                    className="mr-3 text-teal-600"
                  />
                  <span className="text-gray-700">PAN</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="idType"
                    value="Aadhaar"
                    checked={formData.idType === 'Aadhaar'}
                    onChange={handleInputChange}
                    className="mr-3 text-teal-600"
                  />
                  <span className="text-gray-700">Aadhaar</span>
                </label>
              </div>
            </div>

            {/* Government ID Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Government ID (PAN / Aadhaar) *
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="governmentId"
                  value={formData.governmentId}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your PAN or Aadhaar number"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Registration
              </button>
            </div>

          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            By submitting this form, you agree to become a member of Imaigal Foundation and contribute to our mission of helping those in need.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MembershipSection;