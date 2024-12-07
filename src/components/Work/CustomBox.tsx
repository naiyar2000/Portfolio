import { prefix } from '@/prefix';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export type CustomBoxProps = {
    title?: string;
    sandboxCode?: string;
    description?: string;
    imageSrc?: string;
}
const CustomBox = ({
    title,
    sandboxCode,
    description,
    imageSrc
}: CustomBoxProps) => {

    return (
        <div className="max-w-sm mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden p-4">
            <div className="">
                <Image
                    width={352}
                    height={160}
                    src={`${prefix}/images/${imageSrc}`}
                    alt="sample preview"
                />
            </div>
            <div className="px-4 py-2">
                <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
                <p className="text-gray-300 text-base mb-4">
                    {description}
                </p>
                <Link
                    target='_blank'
                    href={`https://codesandbox.io/embed/${sandboxCode}?view=preview&module=%2Fsrc%2FApp.tsx&hidenavigation=1`}
                >
                    <Button variant={"secondary"}>VIEW CODE</Button>
                </Link>
            </div>
        </div>
    );
};

export default CustomBox;
