import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="Navbar">
                <div className="navLeftSide">
                    <h2>Shooping Cart</h2>
                </div>
                <div className="navRightSide">
                    <NavLink className='link' to='/homepage'>Home Page</NavLink>
                    <NavLink className='link' to='/mycartpage'>Cart Page</NavLink>
                </div>   
            </div>
            <Outlet/>
        </div>
    )
}

export default Navbar;