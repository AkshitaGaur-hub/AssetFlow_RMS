import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css"


const Navbar = ({ onSidebarToggle }) => {
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
            <nav className="flex bg-gray-900 px-8 py-2 fixed top-0 left-0 w-full h-[70px] z-[2000]">
                <div className="flex flex-wrap justify-between items-center w-full gap-3">
                    {/* Logo and branding */}
                    <div className="flex items-center gap-3 p-2">
                        <h1 className='left text-white font-bold text-2xl'>LOGO</h1>
                    </div>

                    <div className="right flex gap-3 items-center">

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
                                            className="login-nav-btn rounded-xl"
                                            onClick={() => {

                                                localStorage.clear();
                                                setUser(null);

                                            }}
                                        >
                                            Logout
                                        </button>

                                    </div>

                                ) : (

                                    <button className="login-nav-btn rounded-xl">
                                        Login
                                    </button>

                                )
                            }
                        </Link>
                        <Link to="/register">
                            <button className="login-nav-btn rounded-xl">
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