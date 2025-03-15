import React from "react";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
            <p className="mt-4 text-lg">The page you are looking for does not exist.</p>
            <p className="mt-2 text-sm">Please check the URL or return to the homepage.</p>
        </div>
    );
}

export default NotFound;
