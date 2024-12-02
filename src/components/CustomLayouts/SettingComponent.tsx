"use client";
import { CanvaLayoutDataType, CanvaPatternType, LayoutType, useAppStore } from "@/store/appStore";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Layout } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";

export const SettingsComponent = () => {

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
            <DialogTrigger asChild>
                <Button onClick={toggleSetting} className='bg-black opacity-65 rounded-sm backdrop-blur-md text-white text-sm px-2 py-1'>
                    <Layout />
                </Button>
            </DialogTrigger>
            <DialogContent>
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
                                    ] as CanvaPatternType[])?.map(item => (
                                        <SelectItem
                                            key={item}
                                            value={item}>{item}</SelectItem>

                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div className="flex gap-6">
                        <Checkbox checked={isFixed} onCheckedChange={() => changeLayout({ isFixed: !isFixed })} />
                        <label>
                            Fixed
                        </label>
                        <Checkbox
                            checked={isClipEnabled}
                            onCheckedChange={() => changeLayout({ isClipEnabled: !isClipEnabled })}
                        />
                        <label>
                            Clipped
                        </label>
                    </div>
                </div>
                <div className="flex justify-end ">
                    <Button onClick={toggleSetting}>
                        Done
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    </div >
}
