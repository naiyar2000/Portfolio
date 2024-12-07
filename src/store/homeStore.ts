// import { fetchHomepageData } from "@/app/action";
import { create } from "zustand";
import { devtools } from 'zustand/middleware'

export type HomepageData = {
    header: string
    title: string,
    subTitle: string,
    loading?: boolean
}


type HomeStore = {
    homePageData: HomepageData;
    setHomePageData: () => Promise<void>;
}

export const useHomeStore = create<HomeStore>()(devtools((set) => ({
    homePageData: {
        header: "👋 Hi, I'm NAIYAR",
        title: "I craft engaging, interactive experiences with code, showcasing the creativity and dedication of a passionate frontend developer.",
        // subTitle: "Showcasing the work of a passionate frontend developer",
        subTitle: "",
        loading: false
    },
    setHomePageData: async () => {
        // const data = await fetchHomepageData();
        // if (data && data.data) {
        //     const finalData = data.data
        //     set(state => ({ ...state, homePageData: finalData }))
        // }
    }
})));