"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";

import { SearchManufacturerProps } from "@/interfaces";
import { manufacturers } from "@/constants";


export default function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {

    const [query, setQuery] = useState<string>("")

    const filteredManufacturer = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

    return (
        <div className="serach-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            alt="Car Logo"
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className="ml-4" />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder="Volkswagen"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>
                            {filteredManufacturer.length === 0 && query !== ""
                                ?
                                (
                                    <Combobox.Option
                                        value={query}
                                        className="search-manufacturer__option"
                                    >
                                        Nothing Found
                                    </Combobox.Option>
                                )
                                :
                                (
                                    filteredManufacturer.map((item) => (
                                        <Combobox.Option
                                            key={item}
                                            className={({ active }) =>
                                            (`relative search-manufacturer__option 
                                            ${active ? "bg-primary-blue text-white" : "text_gray-900"}`)}
                                            value={item}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                        {item}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )
                            }
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}