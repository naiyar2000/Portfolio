"use client";

// import { auth } from "@/app/firebase/firebaseConfig";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { prefix } from "@/prefix";
// import useAuthStore from "@/store/authStore";
// import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
import Image from "next/image";
import Link from "next/link";
// import { useEffect } from "react";
// import { Button } from "./ui/button";

const Header = () => {

    // const setUser = useAuthStore((state) => state.setUser);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         setUser(user);
    //     });

    //     return () => unsubscribe();
    // }, [setUser]);

    // const handleLogin = async () => {
    //     try {
    //         const provider = new GoogleAuthProvider();
    //         signInWithPopup(auth, provider);
    //     } catch (error) {
    //         console.error("Error signing in:", error);
    //     }
    // };

    // const handleLogout = async () => {
    //     try {
    //         await signOut(auth);
    //     } catch (error) {
    //         console.error("Error signing out:", error);
    //     }
    // };

    const { scrollPosition } = useScrollPosition();
    // const { user } = useAuthStore();

    return (
        <div className={`w-full text-white fixed top-0 z-50`}>
            <div className={`${scrollPosition > 0 ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg" : "bg-transparent"} flex justify-between items-center px-5 md:px-12 mx-2 my-2 h-16`}>
                <div>
                    <Link href={"/"}>
                        <span className="font-bold from-neutral-400 text-2xl">Portfolio</span>
                    </Link>
                </div>
                <div className="hidden md:flex gap-4 items-center">
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Skills</Link>
                    {/* <Button onClick={() => user ? handleLogout() : handleLogin()}>{user ? "LogOut" : "LogIn"}</Button> */}
                </div>
                <div className="md:hidden">
                    <Image
                        src={`${prefix}/icons/hamburgerIcon.svg`}
                        alt={"option"}
                        width={40}
                        height={30}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header