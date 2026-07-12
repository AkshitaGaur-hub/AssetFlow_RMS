import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css"


const Navbar = () => {
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [user, setUser] = useState(null);
    const notificationRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        const username = localStorage.getItem("username");

        if (username) {
            setUser(username);
        }

        const handleClickOutside = (event) => {

            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setNotificationOpen(false);
            }
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setProfileOpen(false);
            }

        };


        document.addEventListener(
            "mousedown",
            handleClickOutside
        );


        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);


    return (
        <>
            <nav className="bg-gray-900 px-8 py-2 fixed top-0 left-0 w-full h-[70px] z-[2000]">
                <div className="flex flex-wrap justify-between items-center w-full gap-3">
                    {/* Logo and branding */}
                    <div>
                        <h1 className='left text-white font-bold text-2xl'>LOGO</h1>
                    </div>

                    <div className="right flex gap-3 items-center">
                        {/* Search */}
                        <form className="relative ww-full max-w-sm">
                            {/* Search Icon */}
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                                    />
                                </svg>
                            </div>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 py-2.5 pl-10 pr-24 focus:outline-none "
                            />

                            {/* Button */}
                            <button
                                type="submit"
                                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-r-2xl bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition"
                            >
                                Search
                            </button>
                        </form>

                        {/* Notification */}
                        <div ref={notificationRef} className="relative">

                            <button
                                onClick={() => setNotificationOpen(!notificationOpen)}
                                className="text-xl"
                            >
                                🔔
                            </button>


                            {notificationOpen && (
                                <div className="absolute right-0 mt-2 w-72 bg-blue-950 text-white shadow-lg rounded-lg p-4">

                                    <h3 className="font-bold mb-3">
                                        Notifications
                                    </h3>


                                    <div className="border-b border-blue-800 py-2">
                                        New complaint received
                                    </div>


                                    <div className="border-b border-blue-800 py-2">
                                        Task completed
                                    </div>


                                    <div className="py-2">
                                        User registered
                                    </div>

                                </div>
                            )}

                        </div>

                        {/* Profile */}
                        <div ref={profileRef} className="relative">

                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex items-center gap-2"
                            >
                                <img
                                    src="https://images.ctfassets.net/ub3bwfd53mwy/6atCoddzStFzz0RcaztYCh/1c3e8a37eebe3c6a435038f8d9eef7f3/3_Image.jpg?w=750"
                                    className="w-10 h-10 rounded-full"
                                    alt="u"
                                />
                            </button>


                            {profileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-blue-950 text-white shadow-lg rounded-lg p-3">

                                    <p className="font-semibold">
                                        User Name
                                    </p>

                                    <p className="text-sm text-gray-300">
                                        user@gmail.com
                                    </p>


                                    <button className="mt-3 w-full text-left hover:font-bold p-2 rounded">
                                        Profile
                                    </button>


                                    <button className="mt-1 w-full text-left hover:font-bold p-2 rounded">
                                        Logout
                                    </button>

                                </div>
                            )}

                        </div>

                        <Link to="/login">
                            {
                                user ? (

                                    <div className="user-section">
                                        <button
                                            className="login-nav-btn"
                                            onClick={() => {

                                                localStorage.clear();
                                                setUser(null);

                                            }}
                                        >
                                            Logout
                                        </button>

                                    </div>

                                ) : (

                                    <button className="login-nav-btn">
                                        Login
                                    </button>

                                )
                            }
                        </Link>
                        <Link to="/register">
                            <button className="login-nav-btn">
                                Register
                            </button>
                        </Link>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar