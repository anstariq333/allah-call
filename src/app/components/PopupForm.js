import { useState, useEffect } from 'react';

export default function PopupForm({ open, onClose, title = 'Contact Us', purpose = 'contact' }) {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus(prev => ({ ...prev, message: '' }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus.message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, error: false, message: '' });
    try {
      const formData = new FormData(e.target);
      formData.append('purpose', purpose);
      const response = await fetch('https://formspree.io/f/mvgaewpr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you! We have received your request.'
        });
        e.target.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Sorry, there was a problem submitting your form. Please try again.'
      });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-center text-[#6B2FB3]">{title}</h2>
        {!formStatus.submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]"
              required
            />
            <textarea
              name="message"
              placeholder={purpose === 'accept-islam' ? 'Why do you want to accept Islam? (Optional)' : 'Your Message'}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58875]"
              rows={purpose === 'accept-islam' ? 4 : 3}
            />
            <button type="submit" className="w-full bg-[#f58875] text-white py-2 rounded-lg hover:bg-[#e67a68] transition">Submit</button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Submitted Successfully!</h3>
            <p className="text-gray-600 mb-4">Thank you for reaching out. We will contact you soon.</p>
            <button onClick={onClose} className="bg-[#f58875] text-white px-6 py-2 rounded-lg hover:bg-[#e67a68] transition">Close</button>
          </div>
        )}
        {formStatus.message && (
          <div className={`mt-4 text-center ${formStatus.error ? 'text-red-500' : 'text-green-600'}`}>{formStatus.message}</div>
        )}
      </div>
    </div>
  );
} 