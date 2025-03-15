import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    ExampleSite
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-gray-400">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-gray-400">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
