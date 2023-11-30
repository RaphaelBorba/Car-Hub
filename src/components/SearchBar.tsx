"use client"

import React, { useState } from "react"
import { SearchManufacturer } from "."
import Image from "next/image"
import { useRouter } from "next/navigation"


const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg" alt="magnifying-glass" width={40} height={40} className="object-contain" />
    </button>
)

const ResetButton = ({ otherClasses, click }: { otherClasses: string, click: ()=>void }) => (
    <button type="button" className={`-ml-3 z-10 ${otherClasses}`} onClick={click}>
        <Image src="/reset.svg" alt="reset" width={30} height={30} className="object-contain " />
    </button>
)

export default function SearchBar({setReseted, reseted}:{setReseted:(any:boolean)=>void, reseted:boolean}) {

    const [manufacturer, setManufacturer] = useState<string>("")
    const [model, setModel] = useState("")
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (manufacturer === "" && model === "") return alert("Please fill in the search bar")

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const handleReset = () => {
        setManufacturer("")
        setModel("")
        setReseted(!reseted)
        const url = window.location.origin
        router.push(url, { scroll: false })
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname, { scroll: false })
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer setManufacturer={setManufacturer} manufacturer={manufacturer} />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image src="/model-icon.png" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" alt="car model" />
                <input
                    type="text"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                />

                <SearchButton otherClasses="sm:hidden" />
                <ResetButton click={handleReset} otherClasses="sm:hidden ml-4" />

            </div>
            <SearchButton otherClasses="max-sm:hidden" />
            <ResetButton click={handleReset} otherClasses="max-sm:hidden ml-4" />
        </form>
    )
}