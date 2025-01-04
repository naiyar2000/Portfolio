import { create } from "zustand";
import { devtools } from 'zustand/middleware'

export type CanvaPatternType = "matrix-rain" |
    "polka-dot" |
    "mouse-cloud";

export type LayoutType = "video" |
    "canvas" |
    "canvasWebGl" |
    "default";

export interface CanvaLayoutDataType {
    clipPath?: string;
    pattern?: CanvaPatternType;
    isFixed?: boolean;
    isClipEnabled?: boolean;
}

type AppStore = {
    layoutType: LayoutType;
    canvaLayoutState: CanvaLayoutDataType;
    video: string,
    isSettingsOpen: boolean,
    animationFramId: number,
    toggleSetting: () => void,
    setCanvaLayoutType: (canvaState: CanvaLayoutDataType) => void,
    setLayoutType: (layout: LayoutType) => void,
    setVideo: (src: string) => void,
    setAnimationFrameId: (id: number) => void
}

export const useAppStore = create<AppStore>()(devtools((set) => ({
    layoutType: "default",
    canvaLayoutState: {
        clipPath: "polygon(0 1%, 100% 0, 100% 38%, 79% 80%, 46% 55%, 18% 38%)",
        pattern: "mouse-cloud",
        isFixed: true,
        isClipEnabled: true,
    },
    video: "home_video",
    isSettingsOpen: false,
    animationFramId: 0,
    toggleSetting: () => set(state => ({ ...state, isSettingsOpen: !state.isSettingsOpen })),
    setCanvaLayoutType: (canvaState: CanvaLayoutDataType) => {
        set(state => ({
            ...state, canvaLayoutState: {
                ...state.canvaLayoutState,
                ...canvaState
            }
        }))
    },
    setLayoutType: (layout: LayoutType) => {
        set((state) => ({ ...state, layoutType: layout }))
    },
    setVideo: (src: string) => set(state => ({ ...state, video: src })),
    setAnimationFrameId: (id: number) => set(state => ({ ...state, animationFramId: id }))
})));