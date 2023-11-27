import { CarProps, FilterProps } from "@/interfaces";

export async function fetchCars(filters: FilterProps) {

    const { fuel, limit, manufacuterer, model, year } = filters
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacuterer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`;
    const headers = {
        'X-RapidAPI-Key': 'd893e85ef1msh4cd70e2f2520cafp1b3354jsn7dcec31341d3',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(url, { headers: headers })

    const result = await response.json()

    return result

}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {

    const url = new URL("https://cdn.imagin.studio/getimage")
    const { make, year, model } = car

    url.searchParams.append("customer", "hrjavascript-mastery")
    url.searchParams.append("make", make)
    url.searchParams.append("modelFamily", model.split(" ")[0])
    url.searchParams.append("zoomType", "fullscreen")
    url.searchParams.append("modelYear", `${year}`)
    url.searchParams.append("angle", `${angle}`)

    return `${url}`
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {

    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname
}