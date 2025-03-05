"use client";
import LightSaberLoader from "@/components/LoaderComponents/LightSaberLoader";
import { prefix } from "@/prefix";
import { useAppStore } from "@/store/appStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const setIsHome = useAppStore(state => state.setIsHome);
  const router = useRouter()

  useEffect(() => {
    setIsHome(true);
    setTimeout(() => {
      router.push(`/home`);
    }, 2000)
  }, [setIsHome, router]);

  return (
    <LightSaberLoader />
  );
}