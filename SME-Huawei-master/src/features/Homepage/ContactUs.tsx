import { ChangeEvent, FormEvent, useState } from 'react';
import { FaPaperPlane, FaPhone, FaEnvelope, FaUser } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'mustafa.ashraf.saad@gmail.com',
    phone: '0106 900 4741',
    message: `Hello, I'm interested in learning how NexusFlow can enhance our logistics and supply chain processes, especially in inventory management and shipment tracking. Please feel free to reach out via email or phone. Looking forward to connecting!`,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="mx-auto max-w-md rounded-lg bg-green-50 p-4 text-center shadow-md">
          <div className="flex items-center justify-center gap-2 text-lg text-green-800">
            <FaPaperPlane className="h-5 w-5" />
            <span>Thank you for reaching out! We'll be in touch soon.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-blue-100 px-4 py-12 sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="grid md:grid-cols-2">
          {/* Left side - Contact Information */}
          <div className="bg-gradient-to-br from-primary to-secondary px-8 py-12 text-white">
            <h2 className="text-3xl font-bold">Let's Talk</h2>
            <p className="mt-4 text-blue-100">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="h-6 w-6 text-blue-200" />
                <span>may-x@logistics.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="h-6 w-6 text-blue-200" />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaUser className="h-6 w-6 text-blue-200" />
                <span>Mon - Fri, 9am - 6pm</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="px-8 py-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="group relative">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
                    placeholder="First Name"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute -top-5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    First Name
                  </label>
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
                    placeholder="Last Name"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute -top-5 left-1 text-sm text-teal-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="group relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute -top-5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Email
                  </label>
                </div>

                <div className="group relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute -top-5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Phone
                  </label>
                </div>
              </div>

              <div className="group relative">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full rounded-lg border-2 border-gray-300 bg-transparent p-4 text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute -top-3 left-3 bg-white px-2 text-sm text-teal-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-3 text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Send Message
                  <FaPaperPlane className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
