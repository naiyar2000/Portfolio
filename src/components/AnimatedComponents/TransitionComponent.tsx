"use client";
import useInView from '@/app/hooks/useInView'
import React from 'react'

type TransitionType = "left-to-right" | "right-to-left" | "top-to-down" | "down-to-top" | "";

interface TransitionComponentProps {
    transitionType?: TransitionType;
    threshold?: number;
}

const TransitionComponent = ({ children, transitionProps, className, style }: { children: JSX.Element, transitionProps?: TransitionComponentProps, className?: string, style?: React.CSSProperties }) => {
    const [elementRef, isInView] = useInView({ threshold: transitionProps?.threshold || 0.1 }, true);
    const transitionClass: TransitionType = transitionProps?.transitionType || "left-to-right";


    return (
        <div ref={typeof (elementRef) != "boolean" ? elementRef : undefined} style={style} className={`${className} ${transitionClass} ${isInView === true ? "animate" : ""}`}>
            {children}
        </div>
    )
}

export default TransitionComponent;