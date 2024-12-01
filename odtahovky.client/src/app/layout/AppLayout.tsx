import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const AppLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            
        </>
    );
}

export default AppLayout;
