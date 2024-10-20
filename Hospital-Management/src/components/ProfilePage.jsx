import React, { useState } from "react";

export default function ProfilePage() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Dr. Bharat Saxena",
    gender: "Male",
    dob: "1996-07-27",
    specialization: "Obstetrician & Gynecologist",
    email: "bharat.docterz@gmail.com",
    regNumber: "",
    mobile: "9819364525",
    degree: "MBBS, MD, DCH",
    status: "",
    cv: "",
    website: "www.docterz.in",
    facebook: "https://www.facebook.com/yourprofile",
    twitter: "https://twitter.com/yourprofile",
    youtube: "https://www.youtube.com/channel/yourprofile",
    linkedin: "https://www.linkedin.com/in/yourprofile",
    instagram: "https://www.instagram.com/yourprofile"
  });

  const [profilePic, setProfilePic] = useState(null);
  const [signature, setSignature] = useState(null);
  const [gallery, setGallery] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, setState) => {
    const file = e.target.files[0];
    setState(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle saving the data (e.g., send to backend)
    console.log("Saved data:", { personalInfo, profilePic, signature, gallery });
  };

  return (
    <div className="flex space-x-4 p-8">
      {/* Left Side: Profile Image, Signature, Gallery */}
      <div className="w-1/3">
        {/* Profile Picture */}
        <div className="text-center mb-6">
          <img
            src={profilePic ? URL.createObjectURL(profilePic) : "https://via.placeholder.com/150"}
            alt="Profile"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <label className="text-blue-500 cursor-pointer">
            Edit
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(e, setProfilePic)}
            />
          </label>
        </div>

        {/* Signature */}
        <div className="text-center mb-6">
          <img
            src={signature ? URL.createObjectURL(signature) : "https://via.placeholder.com/150"}
            alt="Signature"
            className="w-32 h-20 mx-auto mb-4"
          />
          <label className="text-blue-500 cursor-pointer">
            Edit
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(e, setSignature)}
            />
          </label>
        </div>

        {/* Photo Gallery */}
        <div className="text-center">
          <div className="mb-4">
            <img
              src={gallery[0] ? URL.createObjectURL(gallery[0]) : "https://via.placeholder.com/150"}
              alt="Gallery"
              className="w-32 h-32 mx-auto"
            />
          </div>
          <label className="text-blue-500 cursor-pointer">
            Add Pictures
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(e, (file) => setGallery([...gallery, file]))}
            />
          </label>
        </div>
      </div>

      {/* Right Side: Personal Information Form */}
      <div className="w-2/3 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-6">Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={personalInfo.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={personalInfo.dob}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select
                name="gender"
                value={personalInfo.gender}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Specialization */}
            <div>
              <label className="block text-sm font-medium">Specialization</label>
              <input
                type="text"
                name="specialization"
                value={personalInfo.specialization}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={personalInfo.mobile}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>

            {/* Degree */}
            <div className="col-span-2">
              <label className="block text-sm font-medium">Primary Degree</label>
              <input
                type="text"
                name="degree"
                value={personalInfo.degree}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>

            {/* Website Link */}
            <div>
              <label className="block text-sm font-medium">Website Link</label>
              <input
                type="text"
                name="website"
                value={personalInfo.website}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>

            {/* Facebook */}
            <div>
              <label className="block text-sm font-medium">Facebook Link</label>
              <input
                type="text"
                name="facebook"
                value={personalInfo.facebook}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>

            {/* Twitter */}
            <div>
              <label className="block text-sm font-medium">Twitter Link</label>
              <input
                type="text"
                name="twitter"
                value={personalInfo.twitter}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label className="block text-sm font-medium">LinkedIn Link</label>
              <input
                type="text"
                name="linkedin"
                value={personalInfo.linkedin}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>

            {/* Instagram */}
            <div>
              <label className="block text-sm font-medium">Instagram Link</label>
              <input
                type="text"
                name="instagram"
                value={personalInfo.instagram}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded-md shadow-sm"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

