import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import './layout.css'
const Layout = ({ user }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (user === "") {
            navigate("/login")
        }
    }, [])
    return (
        <>
            <div>
                {user === "" ? "" : <Link to={"/"}>Home</Link>}
            </div>
            <div className="container"><Outlet /></div>

        </>

    )
}

export default Layout;