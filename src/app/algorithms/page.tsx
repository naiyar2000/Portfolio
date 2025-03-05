
"use client";
import React, { useState } from "react";
import SlidingWindowVisualizer from "./SlidingWindow";
import { Input } from "@/components/ui/input";

const Algorithms: React.FC = () => {
    const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5, 6]);
    const [target, setTarget] = useState<number>(10);
    const [windowSize, setWindowSize] = useState<number>(3);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Sliding Window Algorithm</h1>
            <div className="space-y-4">
                <label className="block">
                    Input Array (comma-separated):
                    <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm"
                        value={array.join(",")}
                        onChange={(e) => setArray(e.target.value.split(",").map(Number))}
                    />
                </label>
                <label className="block">
                    Target Sum:
                    <Input
                        type="number"
                        value={target}
                        onChange={(e) => setTarget(Number(e.target.value))}
                    />
                </label>
                <label className="block">
                    Window Size:
                    <Input
                        type="number"
                        value={windowSize}
                        onChange={(e) => setWindowSize(Number(e.target.value))}
                    />
                </label>
            </div>
            <SlidingWindowVisualizer array={array} target={target} windowSize={windowSize} />
        </div>
    );
};

export default Algorithms;
