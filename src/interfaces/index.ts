import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps{
    title: string,
    containerStyles?: string,
    btnType?: "button" | "submit",
    handleClick?: MouseEventHandler<HTMLButtonElement>
}


export interface CustomFilterProps{
    title:string
}

export interface SearchManufacturerProps{

    setManufacturer:Dispatch<SetStateAction<string>>,
    manufacturer:string
}