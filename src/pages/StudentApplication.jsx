import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, User, CreditCard, CheckCircle, AlertCircle, ChevronRight, ChevronLeft, GraduationCap } from 'lucide-react';
import Button from '../components/Button';

const StudentApplication = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student & Family Details
    name: '',
    dateOfBirth: '',
    email: '',
    mobile: '',
    fatherName: '',
    fatherMobile: '',
    fatherOccupation: '',
    fatherIncome: '',
    motherName: '',
    motherMobile: '',
    motherOccupation: '',
    motherIncome: '',
    siblings: '',
    siblingsCount: '',
    siblingsOccupation: '',
    siblingsIncome: '',
    house: '',
    monthlyRent: '',
    // Educational Details
    currentCourse: '',
    schoolAddress: '',
    schoolContact: '',
    rollNumber: '',
    totalFees: '',
    expectedSupport: '',
    educationalLoan: '',
    loanBankName: '',
    loanBankAddress: '',
    loanBankPhone: '',
    loanAmount: '',
    sslcDetails: '',
    hscDetails: '',
    degreeDetails: '',
    // Bank Details
    accountHolder: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    collegeBankDetails: '',
    // Acknowledgement
    acknowledgement: ''
  });

  const steps = [
    { id: 1, name: 'Personal & Family Details', icon: User },
    { id: 2, name: 'Educational Details', icon: GraduationCap },
    { id: 3, name: 'Banking & Final Submission', icon: CreditCard },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('studentApplication', JSON.stringify({
      ...formData,
      id: Date.now(),
      status: 'Under Review',
      submittedAt: new Date().toISOString(),
    }));
    navigate('/student/status');
  };

  const FileUpload = ({ label, required = false, multiple = false, maxFiles = 1, note = "" }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {note && <p className="text-xs text-gray-600">{note}</p>}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 cursor-pointer">
        <Upload className="w-6 h-6 text-gray-500 mx-auto mb-2" />
        <p className="text-xs text-gray-700 font-medium">Upload File</p>
        <p className="text-xs text-gray-500">Max {maxFiles} file(s), 10MB</p>
        <input type="file" className="hidden" multiple={multiple} />
      </div>
    </div>
  );

  const InputField = ({ label, name, type = "text", required = false, placeholder = "", note = "" }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {note && <p className="text-xs text-gray-600">{note}</p>}
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white"
        required={required}
      />
    </div>
  );

  const TextArea = ({ label, name, required = false, placeholder = "", rows = 4 }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white"
        required={required}
      />
    </div>
  );

  const RadioGroup = ({ label, name, options, required = false }) => (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex space-x-6">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={formData[name] === option}
              onChange={handleChange}
              className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
              required={required}
            />
            <span className="text-sm font-medium text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            {/* Personal Details */}
            <div className="border-l-4 border-blue-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Personal Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Student Name" name="name" required />
                <InputField label="Date of Birth" name="dateOfBirth" type="date" required />
                <InputField label="Email ID (personal)" name="email" type="email" required />
                <InputField 
                  label="Mobile Number" 
                  name="mobile" 
                  required 
                  note="If student doesn't have mobile, provide parent/guardian number"
                />
              </div>
            </div>

            {/* Father/Guardian Details */}
            <div className="border-l-4 border-green-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Father / Guardian Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Father/Guardian's Name" name="fatherName" required />
                <InputField label="Father/Guardian's Mobile Number" name="fatherMobile" required />
                <InputField label="Father/Guardian's Occupation" name="fatherOccupation" required />
                <InputField label="Father/Guardian's Monthly Income" name="fatherIncome" required />
              </div>
            </div>

            {/* Mother Details */}
            <div className="border-l-4 border-purple-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Mother Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Mother's Name" name="motherName" />
                <InputField label="Mother's Mobile Number" name="motherMobile" />
                <InputField label="Mother's Occupation" name="motherOccupation" />
                <InputField label="Mother's Monthly Income" name="motherIncome" />
              </div>
            </div>

            {/* Siblings */}
            <div className="border-l-4 border-orange-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Siblings Information
              </h4>
              <RadioGroup label="Do you have siblings?" name="siblings" options={['Yes', 'No']} required />
              
              {formData.siblings === 'Yes' && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg border">
                  <InputField label="Number of siblings" name="siblingsCount" />
                  <InputField label="Occupation" name="siblingsOccupation" />
                  <InputField label="Monthly income (if working)" name="siblingsIncome" />
                </div>
              )}
            </div>

            {/* House Details */}
            <div className="border-l-4 border-teal-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                House Details
              </h4>
              <RadioGroup label="House Type" name="house" options={['Owned', 'Rental']} required />
              
              {formData.house === 'Rental' && (
                <div className="mt-4">
                  <InputField label="Monthly Rent" name="monthlyRent" required />
                </div>
              )}
            </div>

            {/* Request Letter */}
            <div className="border-l-4 border-red-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Request Letter
              </h4>
              <FileUpload 
                label="Upload hand-written request letter" 
                required 
                note="Explaining family situation / financial need (English or Tamil)"
              />
            </div>


          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            {/* Educational Details */}
            <div className="border-l-4 border-teal-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Educational Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Current Education / Course" name="currentCourse" required />
                <InputField label="School/College Name & Address" name="schoolAddress" required />
                <InputField label="School/College contact number" name="schoolContact" required />
                <InputField label="Roll/Register number" name="rollNumber" required />
              </div>
              <div className="mt-4">
                <FileUpload label="ID card" required note="Please upload image of the school/college ID card" />
                <div className="mt-4">
                  <FileUpload label="Bon-a-fide certificate" note="Please upload bon-a-fide certificate provided by school/college" />
                </div>
              </div>
            </div>

            {/* Fees Details */}
            <div className="border-l-4 border-emerald-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Fees Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Total yearly fees" name="totalFees" required note="As per school/college" />
                <InputField label="How much support is expected from Imaigal? (per year)" name="expectedSupport" required />
              </div>
              <div className="mt-4">
                <FileUpload label="Fees structure" required note="Please upload fees structure provided by school or college" />
              </div>
            </div>

            {/* Educational Loan */}
            <div className="border-l-4 border-purple-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Educational Loan Details
              </h4>
              <RadioGroup label="Have you applied for educational loan?" name="educationalLoan" options={['Yes', 'No']} required />
              
              {formData.educationalLoan === 'Yes' && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg border">
                  <InputField label="Bank name" name="loanBankName" />
                  <InputField label="Address" name="loanBankAddress" />
                  <InputField label="Phone number" name="loanBankPhone" />
                  <InputField label="Amount sanctioned per semester" name="loanAmount" />
                </div>
              )}
            </div>

            {/* Previous Educational Details */}
            <div className="border-l-4 border-orange-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Previous Educational Details
              </h4>
              
              {/* SSLC Details */}
              <div className="mb-6">
                <InputField 
                  label="SSLC Institution name and Marks Scored (in percentage)" 
                  name="sslcDetails" 
                  placeholder="Example - Government Boys High School, Tiruchengode - 90%" 
                />
                <div className="mt-3">
                  <FileUpload label="SSLC Marksheet" note="Kindly upload SSLC marksheet" />
                </div>
              </div>

              {/* H.Sc/Diploma Details */}
              <div className="mb-6">
                <InputField 
                  label="H.Sc/Diploma Institution name and Marks Scored (in percentage)" 
                  name="hscDetails" 
                />
                <div className="mt-3">
                  <FileUpload label="H.Sc/Diploma Marksheet" note="If Diploma, kindly upload consolidate marksheet" />
                </div>
              </div>

              {/* Degree Details */}
              <div>
                <InputField 
                  label="Degree Institution name and Marks Scored (in percentage)" 
                  name="degreeDetails" 
                  note="All semesters completed till now"
                />
                <div className="mt-3">
                  <FileUpload label="Degree Marksheet" multiple maxFiles={10} note="Upload up to 10 supported files. Max 10 MB per file" />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            {/* Bank Account Details */}
            <div className="border-l-4 border-emerald-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Bank Account Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Name of account holder" name="accountHolder" required note="As per bank records" />
                <InputField label="Name of Bank and Branch" name="bankName" required />
                <InputField label="Account number" name="accountNumber" required />
                <InputField label="IFSC code" name="ifscCode" required />
              </div>
              <div className="mt-4">
                <FileUpload label="Bank Passbook" required note="Please upload the first page of bank passbook" />
              </div>
            </div>

            {/* College Bank Details */}
            <div className="border-l-4 border-teal-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                College Information
              </h4>
              <TextArea 
                label="College's bank account details" 
                name="collegeBankDetails" 
                required 
                rows={3}
              />
            </div>

            {/* Document Uploads */}
            <div className="border-l-4 border-purple-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Additional Documents
              </h4>
              <FileUpload 
                label="Aadhar card of student & one of the parent/guardian" 
                multiple 
                maxFiles={5} 
                note="Upload up to 5 supported files. Max 10 MB per file"
              />
            </div>

            {/* Acknowledgement */}
            <div className="border-l-4 border-orange-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Acknowledgement
              </h4>
              <RadioGroup 
                label="I confirm that the details provided in this form are accurate and complete to the best of my knowledge and belief." 
                name="acknowledgement" 
                options={['Yes', 'No']} 
                required 
              />
            </div>

            {/* Signatures */}
            <div className="border-l-4 border-red-500 bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                Signatures
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FileUpload label="Father/Guardian Signature" required />
                <FileUpload label="Student signature" required />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Student Application Form
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Imaigal Educational & Charitable Trust
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            Complete all sections to submit your scholarship application
          </p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 lg:p-6 max-w-4xl mx-auto">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-orange-900 mb-2">Required Documents:</p>
              <p className="text-xs sm:text-sm text-orange-800 leading-relaxed">
                School/College ID card, Bonafide certificate, Fee structure, SSLC marksheet, 
                H.Sc./Diploma marksheet, Degree marksheet (till date), Bank passbook, 
                Student & Guardian signatures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="mb-6 lg:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.id
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    <IconComponent size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="ml-3">
                    <p className={`text-xs sm:text-sm font-medium ${
                      currentStep >= step.id ? 'text-teal-600' : 'text-gray-500'
                    }`}>
                      {step.name}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-12 lg:w-16 h-1 mx-2 lg:mx-4 ${
                    currentStep > step.id ? 'bg-teal-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{steps[currentStep - 1].name}</h3>
          <p className="text-teal-100 mt-2 text-sm lg:text-base">Step {currentStep} of {steps.length}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8">
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={currentStep === 1 ? 'invisible' : 'flex items-center'}
            >
              <ChevronLeft size={16} className="mr-1" />
              Previous
            </Button>

            {currentStep < 3 ? (
              <Button type="button" onClick={nextStep} className="flex items-center bg-teal-600 hover:bg-teal-700">
                Next Step
                <ChevronRight size={16} className="ml-1" />
              </Button>
            ) : (
              <Button type="submit" className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800">
                Submit Application
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentApplication;