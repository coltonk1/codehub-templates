import Link from "next/link";

const Custom404 = () => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center bg-gray-100 px-4 text-center text-black">
            <h1 className="text-8xl font-bold text-red-500">404</h1>
            <p className="mt-4 text-lg">Oops! The page you are looking for does not exist.</p>
            <p className="mt-2 text-md text-gray-600">The page you’re looking for might have been removed or never existed.</p>
            <Link
                href="/"
                aria-label="Return to homepage"
                className="mt-6 inline-block rounded bg-blue-500 px-6 py-2 text-white hover:bg-black"
            >
                Go Home
            </Link>
        </div>
    );
};

export default Custom404;
