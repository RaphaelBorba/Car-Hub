import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    btnType?: "button" | "submit",
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean,
}


export interface CustomFilterProps {
    title: string
    options: OptionProps[]
}

interface OptionProps {
    title:string,
    value:string
}

export interface SearchManufacturerProps {

    setManufacturer: (manufacturer: string) => void,
    manufacturer: string
}

export interface CarProps {

    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CarCardProps{
    car: CarProps
}

export interface CarDetailsProps{

    isOpen:boolean,
    closeModal:()=>void,
    car: CarProps
}

export interface FilterProps{

    manufacuterer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}