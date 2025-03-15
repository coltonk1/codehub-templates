// Import necessary hooks from React
import { useState, useEffect } from "react";

/**
 * Home component - Main landing page of the application
 * This component demonstrates several React concepts:
 * - State management with useState
 * - Side effects with useEffect
 * - API data fetching
 * - Conditional rendering
 */
function Home() {
    // State for tracking button clicks with initial value of 0
    // useState returns an array with: [current state value, function to update state]
    // Use this pattern when you need to track values that change over time
    const [count, setCount] = useState(0);

    // State for storing display message text
    // Good practice: Keep related but distinct values in separate state variables
    const [message, setMessage] = useState("");

    // State for storing API response data, initially null
    // null is a good initial value when expecting an object from an API
    const [data, setData] = useState(null);

    // Runs once when the component mounts (initialization effect)
    // Use this pattern for:
    // - Component initialization
    // - Setting up subscriptions or event listeners
    // - One-time setup operations
    useEffect(() => {
        console.log("Home component mounted!");

        // Cleanup function that runs when component unmounts
        // Critical for preventing memory leaks by:
        // - Removing event listeners
        // - Cancelling subscriptions
        // - Clearing intervals/timeouts
        return () => {
            console.log("Home component unmounted!");
        };
    }, []); // Empty dependency array means this runs only on mount/unmount

    // Runs when 'count' changes to update the message
    // Use this pattern when:
    // - You need to synchronize state changes
    // - One state should react to changes in another state
    useEffect(() => {
        setMessage(`You clicked ${count} times`);
    }, [count]); // This effect depends on count state - will run whenever count changes

    // Fetches data from an external API when component mounts
    // Use this pattern for:
    // - Loading initial data
    // - Fetching resources your component needs to display
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json()) // Convert response to JSON
            .then((json) => setData(json)) // Store JSON data in state
            .catch((error) => console.error("Error fetching data:", error)); // Always handle potential errors

        // Note: In production code, you might want to:
        // - Add a loading state
        // - Include a cleanup function that aborts fetch if component unmounts
        // - Use async/await for cleaner syntax
    }, []); // Empty dependency array means this runs only once on mount

    return (
        // Main container with flexbox styling from Tailwind CSS
        // Tailwind provides utility classes for common layout patterns
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            {/* Heading that displays the message state */}
            <h1 className="text-3xl font-bold text-blue-500">{message}</h1>

            {/* Button that increases count state when clicked
                Event handler directly updates state using the setter function */}
            <button
                onClick={() => setCount(count + 1)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md cursor-pointer hover:bg-black"
            >
                Click Me
            </button>

            {/* Conditional rendering: only show data section if data exists
                This pattern (using &&) is ideal when you want to:
                - Show/hide elements based on a condition
                - Prevent errors from trying to access properties on null/undefined */}
            {data && (
                <>
                    {/* React Fragment (<>) groups elements without adding extra DOM nodes */}
                    <div className="mt-6 p-4 bg-white text-black rounded-md">
                        <h1 className="text-3xl font-bold text-blue-500">Fetched data:</h1>
                        <h2 className="text-lg font-bold">{data.title}</h2>
                        <p>{data.body}</p>
                    </div>
                </>
            )}
        </div>
    );
}

// Export the component to be imported elsewhere
// Each component should be exported to be used in other files
export default Home;
