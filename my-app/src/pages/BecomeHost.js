import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Home, MapPin, IndianRupee, Image as ImageIcon } from 'lucide-react';

function BecomeHost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    imageUrl: '',
    accommodationType: '',
    providingFood: '',
    guestsCount: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [img ,setImg] = useState();

  // Protect this route client-side just in case
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true); 

    const token = localStorage.getItem('token');
    let uploadedImageUrl = formData.imageUrl;

    try {
      if (img) {
        const uploadData = new FormData();
        uploadData.append('image', img);
        
        const uploadRes = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: uploadData
        });
        
        const uploadResult = await uploadRes.json();
        
        if (!uploadRes.ok) {
          throw new Error(uploadResult.error || "Image upload failed");
        }
        
        // Save the correct relative path including the uploads folder
        uploadedImageUrl = `uploads/${uploadResult.image.filename}`;
      }

      const response = await fetch('http://localhost:5000/api/accommodations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          price: Number(formData.price),
          location: formData.location,
          images: uploadedImageUrl ? [uploadedImageUrl] : [],
          accommodationType: formData.accommodationType,
          providingFood: formData.providingFood,
          guestsCount: Number(formData.guestsCount)
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add accommodation');
      }

      setSuccess('Accommodation listed successfully! Thank you for hosting.');
      setTimeout(() => {
        navigate('/'); // Redirect home or to profile
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 bg-saffron-50/50"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-saffron-100 blur-3xl opacity-60 z-0"></div>

      <div className="max-w-2xl w-full mx-auto relative z-10">
        <div className="flex items-center mb-8">
          <Link to="/" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow mr-4 text-gray-600 hover:text-saffron-600">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            List Your Accommodation
          </h2>
        </div>

        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
          
          <div className="mb-6 text-gray-600">
            <p>Welcome, Host! Fill in the specific details below to add your property to KumbhNivas.</p>
          </div>

          {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg relative">{error}</div>}
          {success && <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg relative">{success}</div>}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 flex items-center">
                <Home className="w-4 h-4 mr-2 text-saffron-500" /> Property Title
              </label>
              <div className="mt-1">
                <input id="title" name="title" type="text" required placeholder="e.g. Peaceful Room near Ganga Ghat" value={formData.title} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-colors" />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-saffron-500" /> Location / Address
              </label>
              <div className="mt-1">
                <input id="location" name="location" type="text" required placeholder="123 Main Street, Nashik" value={formData.location} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-colors" />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Detailed Description</label>
              <div className="mt-1">
                <textarea id="description" name="description" rows="4" required placeholder="Describe the amenities, distance to the main event, and any rules..." value={formData.description} onChange={handleChange} className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-colors"></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 flex items-center">
                  <IndianRupee className="w-4 h-4 mr-2 text-saffron-500" /> Price Per Night
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₹</span>
                  </div>
                  <input id="price" name="price" type="number" min="0" required placeholder="500" value={formData.price} onChange={handleChange} className="focus:ring-saffron-500 focus:border-saffron-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-xl px-4 py-3 border shadow-sm transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 flex items-center"> 
                  <ImageIcon className="w-4 h-4 mr-2 text-saffron-500" /> Image URL (Optional)
                </label>
                <div className="mt-1">
                  <input onChange={(e)=>(setImg(e.target.files[0]))}  type='file' />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type of Accommodation</label>
              <div className="space-y-2">
                {['house', 'flat/apartment', 'tent', 'beds in a shared room', 'room with your family'].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      id={`type-${type}`}
                      name="accommodationType"
                      type="radio"
                      value={type}
                      checked={formData.accommodationType === type}
                      onChange={handleChange}
                      required
                      className="focus:ring-saffron-500 h-4 w-4 text-saffron-600 border-gray-300"
                    />
                    <label htmlFor={`type-${type}`} className="ml-3 block text-sm font-medium text-gray-700 capitalize">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Are you providing food?</label>
                <div className="flex items-center space-x-6">
                  {['Yes', 'No'].map((option) => (
                    <div key={option} className="flex items-center">
                      <input
                        id={`food-${option}`}
                        name="providingFood"
                        type="radio"
                        value={option}
                        checked={formData.providingFood === option}
                        onChange={handleChange}
                        required
                        className="focus:ring-saffron-500 h-4 w-4 text-saffron-600 border-gray-300"
                      />
                      <label htmlFor={`food-${option}`} className="ml-2 block text-sm font-medium text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="guestsCount" className="block text-sm font-medium text-gray-700">
                  How many guests can stay over?
                </label>
                <div className="mt-1">
                  <input
                    id="guestsCount"
                    name="guestsCount"
                    type="number"
                    min="1"
                    required
                    placeholder="e.g. 2"
                    value={formData.guestsCount}
                    onChange={handleChange}
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-base font-bold text-white transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron-500 ${loading ? 'bg-saffron-400 cursor-not-allowed' : 'bg-saffron-600 hover:bg-saffron-700'}`}
              >
                {loading ? 'Submitting Listing...' : 'List Accommodation'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BecomeHost;
