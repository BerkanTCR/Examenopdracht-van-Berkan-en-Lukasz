import { Link, Outlet } from "react-router-dom"

const Navigationbar = () => {
    return (
        <>

            <nav>
                <ul>
                    <li><Link to="/documentatie">Documentatie</Link></li>
                    <li><Link to="/downloaden">Downloaden</Link></li>
                </ul>
            </nav >

            <Outlet />

        </>
    );
}

export default Navigationbar;