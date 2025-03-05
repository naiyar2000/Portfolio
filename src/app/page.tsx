"use client";
import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";


export default function Home() {
  const setIsHome = useAppStore(state => state.setIsHome)
  useEffect(() => {
    setIsHome(true)
  }, [])
  return (
    <>
      <h1 className="text-white">Landing Page</h1>
    </>
  );
}

