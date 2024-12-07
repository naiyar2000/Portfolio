import { Copy } from 'lucide-react';
import React from 'react';

export type CustomBoxProps = {
    title?: string;
    sandboxCode?: string;
    description?: string;
}
const CustomBox = ({
    title,
    sandboxCode,
    description
}: CustomBoxProps) => {
    const handleCopyLink = () => {
        navigator.clipboard.writeText('https://codesandbox.io/u/your-username'); // Replace with your actual CodeSandbox URL
        alert('Link copied to clipboard!');
    };

    return (
        <div className="max-w-sm mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden p-4">
            <div className="">
                {/* <h3 className="text-lg font-bold mb-2 text-white">{title}</h3> */}
                <iframe src={`https://codesandbox.io/embed/${sandboxCode}?view=preview&module=%2Fsrc%2FApp.tsx&hidenavigation=1`}
                    title="glowy-blob-effect"
                    style={{
                        width: "100%",
                        height: "220px",
                        border: 0,
                        borderRadius: "4px",
                        overflow: "hidden"
                    }}
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
            <div className="px-4 py-2">
                <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
                <p className="text-gray-300 text-base mb-4">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CustomBox;
