import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import SearchField from "@/components/SearchField";
import { fuels, yearsOfProduction } from "@/constants";
import { CarProps } from "@/interfaces";
import { fetchCars } from "@/utils";


export default async function Home({ searchParams }: { searchParams: any }) {

  const allCars = await fetchCars({
    manufacuterer: searchParams.manufacturer || "",
    year: searchParams.year || "2022",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || "10",
    model: searchParams.model || "",
  })

  

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        
        <SearchField/>

        {!isDataEmpty
          ?
          <section>
            <div className="home__cars-wrapper">
              {
                allCars?.map((car, index) => <CarCard key={index} car={car} />)
              }
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
          :
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>

        }
      </div>
    </main>
  )
}
