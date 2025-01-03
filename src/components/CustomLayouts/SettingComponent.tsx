"use client";
import { CanvaLayoutDataType, CanvaPatternType, LayoutType, useAppStore } from "@/store/appStore";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Layout } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import useAuthStore from "@/store/authStore";

export const SettingsComponent = () => {

    const { user } = useAuthStore();

    const setCanvaLayoutType = useAppStore(state => state.setCanvaLayoutType);
    const { pattern, isFixed, isClipEnabled } = useAppStore(state => state.canvaLayoutState);
    const layoutType = useAppStore(state => state.layoutType);
    const isSettingsOpen = useAppStore(state => state.isSettingsOpen);
    const toggleSetting = useAppStore(state => state.toggleSetting);
    const setLayoutType = useAppStore(state => state.setLayoutType);

    const changeLayout = (newLayout: CanvaLayoutDataType) => {
        setCanvaLayoutType(newLayout)
    }

    return <div className="fixed top-20 right-20 z-50">
        <Dialog open={isSettingsOpen} onOpenChange={(open) => { if (!open) toggleSetting(); }}>
            <DialogTrigger asChild className={`${!user ? "block" : "hidden"}`}>
                <Button onClick={toggleSetting} className='bg-black opacity-65 rounded-sm backdrop-blur-md text-white text-sm px-2 py-1'>
                    <Layout />
                </Button>
            </DialogTrigger>
            <DialogDescription></DialogDescription>
            <DialogContent className="bg-glass text-white">
                <DialogTitle>
                    Layout Settings
                </DialogTitle>
                <div className="flex flex-col gap-8">
                    <Select
                        value={layoutType}
                        onValueChange={(e) => {
                            setLayoutType(e as LayoutType);
                        }}

                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a layout" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className='z-50'>
                                <SelectLabel>Layout</SelectLabel>
                                {
                                    ([
                                        "video",
                                        "canvas",
                                        "canvasWebGl"
                                    ] as LayoutType[])?.map(item => (
                                        <SelectItem
                                            key={item}
                                            value={item}>{item}</SelectItem>

                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select
                        disabled={layoutType === "video"}
                        value={pattern}
                        onValueChange={(e) => {
                            let newLayouPattern: CanvaLayoutDataType = {
                                pattern: e as CanvaPatternType
                            }
                            changeLayout(newLayouPattern);
                        }}

                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a pattern" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className='z-50'>
                                <SelectLabel>Pattern</SelectLabel>
                                {
                                    ([
                                        "matrix-rain",
                                        "polka-dot",
                                        "mouse-cloud"
                                    ] as CanvaPatternType[])?.map(item => (
                                        <SelectItem
                                            key={item}
                                            value={item}>{item}</SelectItem>

                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div className="flex gap-6 items-center">
                        <div className="flex gap-2 items-center">

                            <Checkbox className={"border-white"} checked={isFixed} onCheckedChange={() => changeLayout({ isFixed: !isFixed })} />
                            <label>
                                Fixed
                            </label>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Checkbox
                                className={"border-white"}
                                checked={isClipEnabled}
                                onCheckedChange={() => changeLayout({ isClipEnabled: !isClipEnabled })}
                            />
                            <label>
                                Clipped
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button onClick={toggleSetting} variant={"secondary"}>
                        Done
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    </div >
}
