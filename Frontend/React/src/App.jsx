// Import necessary components from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import page components that will be displayed based on URL routes
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
// Import the layout component that contains header and footer
import HeaderFooter from "./components/HeaderFooter";

function App() {
    return (
        // Router wraps the entire app to enable navigation functionality
        <Router>
            {/* Routes component groups all route definitions */}
            <Routes>
                {/* Parent route that applies HeaderFooter to all nested routes */}
                <Route path="/" element={<HeaderFooter />}>
                    {/* Index route (homepage) when path is exactly "/" */}
                    <Route index element={<Home />} />
                    {/* Route that displays About component when path is "/about" */}
                    <Route path="about" element={<About />} />
                    {/* Catch-all route for any undefined paths, displays 404 page */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}

// Export App component to be imported in index.js
export default App;
