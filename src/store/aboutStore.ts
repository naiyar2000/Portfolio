import { fetchAboutpageData, fetchHomepageData } from "@/app/action";
import { create } from "zustand";
import { devtools } from 'zustand/middleware'

export type AboutpageData = {
    id?: string,
    title: string,
    description: string,
}


type AboutStore = {
    aboutPageData: AboutpageData[];
    loading: boolean,
    setAboutPageData: () => Promise<void>;
}

export const useAboutStore = create<AboutStore>()(devtools((set) => ({
    aboutPageData: [],
    loading: true,
    setAboutPageData: async () => {
        const data = await fetchAboutpageData();
        if (data && data.data) {
            const finalData = data.data
            set(state => ({ ...state, aboutPageData: finalData, loading: false }))
        }
    }
})));