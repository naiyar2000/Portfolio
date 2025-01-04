"use client";

// import { auth } from "@/app/firebase/firebaseConfig";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { prefix } from "@/prefix";
// import useAuthStore from "@/store/authStore";
// import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUp, Code, Star, User, X as Delete, Home } from "lucide-react";
import { useAppStore } from "@/store/appStore";
import { useState } from "react";
// import { useEffect } from "react";
// import { Button } from "./ui/button";

const Header = () => {

    // const setUser = useAuthStore((state) => state.setUser);
    const animationFrameId = useAppStore((state) => state.animationFramId);
    const isHome = useAppStore((state) => state.isHome);
    const setAnimationFramId = useAppStore((state) => state.setAnimationFrameId);

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
    const [showOption, setShowOptions] = useState(false);
    // const { user } = useAuthStore();
    return (
        <>
            <div className={`w-full text-white fixed top-0 z-50`}>
                <div className={`${scrollPosition > 0 ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg" : "bg-transparent"} flex justify-between items-center px-5 md:px-12 mx-2 my-2 h-16`}>
                    <div>
                        <Link href={"/"}>
                            <span className="font-bold from-neutral-400 text-2xl">Portfolio</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-4 items-center">
                        <Link href={"#about"}>About</Link>
                        <Link href={"#skills"}>Skills</Link>
                        <Link href={"#gallery"}>Gallery</Link>
                        {/* <Button onClick={() => user ? handleLogout() : handleLogin()}>{user ? "LogOut" : "LogIn"}</Button> */}
                    </div>
                    {
                        isHome ?
                            <div className="md:hidden" onClick={() => setShowOptions(prev => !prev)}>
                                {
                                    showOption ? <Delete size={"40px"} /> : <Image
                                        src={`${prefix}/icons/hamburgerIcon.svg`}
                                        alt={"option"}
                                        width={40}
                                        height={30}
                                    />
                                }
                            </div>
                            :
                            <Link href={`/`} className="md:hidden" >
                                <Home size={"35px"} />
                            </Link>
                    }
                </div>
            </div>
            {
                showOption ? <div className="md:hidden fixed bottom-8 right-4 z-50">
                    <div className="flex flex-col gap-2">
                        <Link href={`#about`} className="flex items-center gap-2 bg-slate-200 rounded-md p-2">
                            <User className="w-4 h-4" />
                            About Me
                        </Link>
                        <Link href={`#skills`} className="flex items-center gap-2 bg-slate-200 rounded-md p-2">
                            <Star className="w-4 h-4" />
                            My Skills
                        </Link>
                        <Link href={`#gallery`} className="flex items-center gap-2 bg-slate-200 rounded-md p-2">
                            <Code className="w-4 h-4" />
                            Gallery
                        </Link>
                    </div>
                </div> : <div className={`${scrollPosition > 0 ? "block" : "hidden"} fixed bottom-8 right-4 z-50`}>
                    <Button variant={"secondary"} onClick={() => {
                        cancelAnimationFrame(animationFrameId);
                        setAnimationFramId(0);
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }}>
                        <ArrowUp />
                    </Button>
                </div>
            }
        </>
    )
}

export default Header