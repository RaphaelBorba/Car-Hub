"use client"

import { CustomButtonProps } from "@/interfaces"
import Image from "next/image"

export default function CustomButton({ title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled }: CustomButtonProps) {

    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image alt={rightIcon} src={rightIcon} className="object-contain" fill />
                </div>
            )}
        </button>
    )
}