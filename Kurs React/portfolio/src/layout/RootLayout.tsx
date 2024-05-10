import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../components/MenuBar/MenuBar";
import "./styles.css"

export default function RootLayout() {

    return (
        <div className="header">
            <ResponsiveAppBar />
            <Outlet />
        </div>
    );
}