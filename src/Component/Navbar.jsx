import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="w-full bg-base-300">
            <div className="navbar bg-base-300 flex justify-between md:x-20 mx-auto ">
                <div className="flex">
                    <a className=" font-semibold text-2xl p-2"> <span className="text-3xl">Z</span>ip <span className="text-amber-400 text-3xl">C</span>art</a>
                </div>
                <div className=" hidden md:block md:flex gap-3 underline  items-center font-normal">
                    <Link className="hover:text-amber-500 hover:font-semibold " >Home</Link>
                    <Link className="hover:text-amber-500 hover:font-semibold " >About</Link>
                    <Link className="hover:text-amber-500 hover:font-semibold " >Blogs</Link>
                    <Link className="hover:text-amber-500 hover:font-semibold " >Services</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;