
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