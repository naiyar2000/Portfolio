
"use client"
import React, { useEffect, useState } from 'react'
import { HomepageData, useHomeStore } from '@/store/homeStore';
import { prefix } from '@/prefix';
import useAuthStore from '@/store/authStore';
// import { Edit, Save } from 'lucide-react';
// import { updateHomepageData } from '@/app/action';
import HackerText from '../AnimatedComponents/HackerText';

const TextComponent = () => {

    const { homePageData } = useHomeStore();
    const { user } = useAuthStore();
    const [editMode, setEditMode] = useState(false);

    const [editState, setEditState] = useState<HomepageData>({
        ...homePageData
    })

    // const handleEdit = () => {
    //     if (editMode) {
    //         updateHomepageData({
    //             header: editState.header || homePageData.header,
    //             title: editState.title || homePageData.title,
    //             subTitle: editState.subTitle || homePageData.subTitle
    //         })
    //     } else {

    //     }
    //     setEditMode(prev => !prev)
    // }

    const handleEditStateChange = ({ key, value }: { key: "header" | "title" | "subTitle", value: string }) => {
        setEditState(prev => ({
            ...prev,
            [key]: value
        }))
    }

    useEffect(() => {
        setEditMode(false);
    }, [user])
    console.log("HELLO")

    return (
        <div className="group relative text-slate-300 md:top-1/4 md:w-2/5 md:text-white flex flex-col md:gap-2 gap-5">
            {/* {
                user && <div className="group-hover:block hidden absolute right-0 cursor-pointer" onClick={() => handleEdit()}>
                    {!editMode ? <Edit /> : <Save />}
                </div>
            } */}
            {editMode ? <input onChange={(e) => handleEditStateChange({ key: "header", value: e.target.value })} className="text-lg font-bold md:text-xl md:font-medium text-black" value={editState.header} />
                : <HackerText className="text-xl font-bold md:text-4xl md:font-bold" text={homePageData?.header} />}
            {editMode ? <input onChange={(e) => handleEditStateChange({ key: "title", value: e.target.value })} className="text-lg font-bold md:text-xl md:font-medium text-black" value={editState.title} /> :
                <h1 className="font-medium w-full text-2xl md:text-4xl pr-4">{homePageData?.title}</h1>}
            <div className="pr-16 flex flex-col gap-16 md:gap-10 items-start">
                {editMode ? <input onChange={(e) => handleEditStateChange({ key: "subTitle", value: e.target.value })} className="font-semibold text-2xl leading-6 md:text-xl md:font-medium text-black" value={editState.subTitle} /> :
                    <h2 className="font-semibold text-xl leading-6">
                        {homePageData?.subTitle}
                    </h2>
                }
                <a href={`${prefix}/pdf/Naiyar_resume.pdf`} download="Naiyar_Imam" className="cv-button neon-button no-underline text-lg">
                    {"DOWNLOAD CV"}
                </a>
            </div>
        </div>
    )
}

export default TextComponent