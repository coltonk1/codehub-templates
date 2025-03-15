import { useState, useEffect } from "react";

function About() {
    const [message, setMessage] = useState("Welcome to the About page!");

    useEffect(() => {
        console.log("About component mounted!");

        return () => {
            console.log("About component unmounted!");
        };
    }, []);

    useEffect(() => {
        setMessage(`About page loaded!`);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <h1 className="text-3xl font-bold text-blue-500">{message}</h1>

            <p className="mt-4 text-lg text-blue-500">This is the About page. Here, you'd find information about our company/project.</p>
        </div>
    );
}

export default About;
