// components/Navbar.tsx
import Link from "next/link";

interface LinkType {
    href: string;
    label: string;
}

const Navbar = () => {
    const links: LinkType[] = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
    ];

    return (
        <nav className="bg-gray-900 p-4 text-white">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    ExampleSite
                </Link>
                <ul className="flex space-x-4">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                <span className="transition duration-300 hover:text-gray-400">{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
