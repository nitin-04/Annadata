import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (

        <div className="min-h-screen bg-gray-50">

            <div className="relative h-64 bg-blue-600">
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center space-x-4">
                                <FaPhone className="text-blue-600 text-2xl" />
                                <div>
                                    <h3 className="font-bold">Phone</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-blue-600 text-2xl" />
                                <div>
                                    <h3 className="font-bold">Email</h3>
                                    <p>contact@annadata.com</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                                <div>
                                    <h3 className="font-bold">Location</h3>
                                    <p>123 Business Street, Suite 100<br />New York, NY 10001</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Media Links */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white shadow-lg rounded-lg p-8"

                    >
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                            <textarea
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-5 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-400">
                            Send Message

                        </button>
                    </motion.form>




                </div>
            </div>
        </div>
    );
};

export default Contact;