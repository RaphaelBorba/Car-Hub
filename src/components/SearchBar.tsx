"use client"

import { useState } from "react"
import { SearchManufacturer } from "."

export default function SearchBar(){

    const [manufacturer, setManufacturer] = useState<string>("")

    const handleSearch = ()=>{

    }

    return(
        <form className="searchbar" onSubmit={handleSearch}> 
        <div className="searchbar__item">
            <SearchManufacturer setManufacturer={setManufacturer} manufacturer={manufacturer} />
        </div>
        </form>
    )
}