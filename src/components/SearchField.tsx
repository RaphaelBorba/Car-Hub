"use client"
import { fuels, yearsOfProduction } from "@/constants";
import { CustomFilter, SearchBar } from ".";
import { useEffect, useState } from "react";


export default function SearchField() {

    const [reseted, setReseted] = useState(false)
    const [fuel, setFuel] = useState(fuels[0])
    const [yearProdution, setYearProdution] = useState(yearsOfProduction[0])

    useEffect(() => { 
        setFuel(fuels[0])
        setYearProdution(yearsOfProduction[0])
    }, [reseted])

    return (
        <div className="home__filters">
            <SearchBar setReseted={setReseted} reseted={reseted} />
            <div className="home__filter-container">
                <CustomFilter title="fuel" options={fuels} span={fuel} setSpan={setFuel} />
                <CustomFilter title="year" options={yearsOfProduction} span={yearProdution} setSpan={setYearProdution}/>
            </div>
        </div>
    )
}