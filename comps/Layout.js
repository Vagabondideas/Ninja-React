import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        //    **** the class CONTENT in the layout will apply to everything
        //         replaces the CONTAINDER for max - width 0, auto ****

        <div className="content">
            <Navbar />
            {/* Children means all the pages, i.e. what's below the navbar */}
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
