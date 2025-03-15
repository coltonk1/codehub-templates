import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-8 mt-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} ExampleSite. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/" className="hover:text-gray-300">
                            Privacy Policy
                        </Link>
                        <Link to="/" className="hover:text-gray-300">
                            Terms of Service
                        </Link>
                        <Link to="/" className="hover:text-gray-300">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
