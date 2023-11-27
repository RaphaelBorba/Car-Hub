
export async function fetchCars() {
    
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    const headers = {
        'X-RapidAPI-Key': 'd893e85ef1msh4cd70e2f2520cafp1b3354jsn7dcec31341d3',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(url, {headers:headers}) 

    const result = await response.json()

    return result
    
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