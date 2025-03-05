import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface VisualizationProps {
    array: number[];
    target: number;
    windowSize: number;
}

const SlidingWindowVisualizer: React.FC<VisualizationProps> = ({ array, target, windowSize }) => {
    const [currentStart, setCurrentStart] = useState(0);
    const [currentSum, setCurrentSum] = useState(0);
    const [steps, setSteps] = useState<string[]>([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [found, setFound] = useState<boolean>(false);

    const visualizeSlidingWindow = () => {
        setIsAnimating(true);
        setFound(false);
        setSteps([]);
        setCurrentStart(0);
        let tempSum = 0;
        let tempStart = 0;

        const executeStep = (tempEnd: number) => {
            if (tempEnd >= array.length) {
                setIsAnimating(false);
                setSteps((prev) => [...prev, "Algorithm completed."]);
                return;
            }

            tempSum += array[tempEnd];
            setSteps((prev) => [
                ...prev,
                `Step ${tempEnd + 1}: Added ${array[tempEnd]}, new sum = ${tempSum}`,
            ]);
            setCurrentStart(tempStart);

            // Check if the window size exceeds and adjust
            if (tempEnd - tempStart + 1 > windowSize) {
                tempSum -= array[tempStart];
                setSteps((prev) => [
                    ...prev,
                    `Adjusted: Removed ${array[tempStart]} to maintain window size.`,
                ]);
                tempStart++;
            }

            // Check for match
            if (tempSum === target && tempEnd - tempStart + 1 === windowSize) {
                setSteps((prev) => [...prev, "Target sum found!"]);
                setFound(true);
                setIsAnimating(false);
                return;
            }

            // Schedule next step
            setTimeout(() => executeStep(tempEnd + 1), 1000);
        };

        // Start the visualization
        executeStep(0);
    };

    return (
        <div className="p-6 space-y-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-white">Sliding Window Visualization</h1>
            <div className="relative flex items-center space-x-2">
                {array.map((num, idx) => (
                    <div
                        key={idx}
                        className={`p-3 w-12 h-12 text-center font-bold text-white rounded-md transition-all duration-500 ${idx >= currentStart && idx < currentStart + windowSize
                                ? "bg-green-500 scale-110"
                                : "bg-gray-700"
                            }`}
                    >
                        {num}
                    </div>
                ))}
            </div>
            <p className="text-lg text-white">
                Current Sum: <span className="font-bold">{currentSum}</span>
            </p>
            <div className="text-lg text-white">
                Steps:
                <ul className="text-sm text-gray-300 mt-2 list-disc pl-4 space-y-1">
                    {steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                    ))}
                </ul>
            </div>
            <div className="space-x-4">
                <Button onClick={visualizeSlidingWindow} disabled={isAnimating} variant="default">
                    Start Visualization
                </Button>
                <Button onClick={() => setIsAnimating(false)} variant="secondary">
                    Stop
                </Button>
            </div>
            {found && <p className="text-green-400 mt-4">Subarray found!</p>}
            {!found && !isAnimating && steps.length > 0 && (
                <p className="text-red-400 mt-4">No matching subarray found.</p>
            )}
        </div>
    );
};

export default SlidingWindowVisualizer;
