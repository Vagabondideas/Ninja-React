import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                {/* <h1>Logo Img</h1> */}
                <Image
                    src="/logo-3500x750.png"
                    alt="logo"
                    width={250}
                    height={50}
                />
            </div>
            <ul className="nav-list-items">
                <Link href="/" className="links">
                    Home
                </Link>
                <Link href="/ninjas" className="links">
                    Ninjas
                </Link>
                <Link href="/login" className="links">
                    Login
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
