import { Link } from "react-router-dom"
import { navLinks } from "../constants"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { TiArrowSortedDown } from "react-icons/ti";
import { logoutUser } from '../features/authSlice';

const Navbar = () => {
    const [active, setActive] = useState(0);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser())
    }
    return (
        <div className=" bg-white shadow-xl px-10 py-4 flex items-center justify-between">
            <div className="font-merriweather text-xl font-extrabold">
                <Link to="/">Dev <span className="text-orange-700">Diaries</span></Link>
            </div>
            <div className="flex items-center justify-between">
                {
                    navLinks.map((el, i) => (
                        <li key={i} className={`list-none px-8   font-merriweather text-sm font-medium ${active === i ? 'bg-gray-200 p-2 rounded-sm' : ''}`} onClick={() => setActive(i)}>
                            <Link to={el.link}>{el.name}</Link>
                        </li>
                    ))
                }
                {user && (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="m-1 flex items-center">
                            {user?.name}
                            <img src={user?.photo} className="w-8 h-8 ml-2 rounded-full bg-cover" />
                            <TiArrowSortedDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-sm w-56">
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li className="cursor-pointer">
                                <a onClick={logout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                )}
                {!user && (
                    <div className="flex gap-2">
                        <button className="btn btn-sm rounded-sm">
                            <Link to="/signup">Signup</Link>
                        </button>
                        <button className="btn btn-sm bg-orange-500 rounded-sm text-white hover:bg-orange-400 border-0">
                            <Link to="/login">Login</Link>
                        </button>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Navbar