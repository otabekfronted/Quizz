// react-router-dom import
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
function Mainlayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* Footer */}
        </>
    );
}

export default Mainlayout;
