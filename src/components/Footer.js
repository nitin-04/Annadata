import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Available in:</h3>
                        <ul className="space-y-2 text-gray-300" >
                            <li>New Delhi</li>
                            <li>Noida</li>
                            <li>Gurgoan</li>
                            <li>Banglore</li>
                            <li>Lucknow</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-sm text-gray-300 hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm text-gray-300 hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-sm text-gray-300 hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-sm text-gray-300 hover:underline">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Email: support@annadata.com</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Address: 111 Pari Chowk, Greater Noida, India</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 pt-4">
                    <p className="text-center text-sm text-gray-400">
                        © {new Date().getFullYear()} Annadata. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
