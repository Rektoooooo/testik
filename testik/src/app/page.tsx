import Image from 'next/image'
import Movie from "@/app/movie";

const MovieList = ["Lord of the rings", "Tokyo drift","I love balls"]
export default function Home() {
  return (
      <>
        {MovieList.map((ass => {
          return <Movie title={ass} name={"mirek bartunek"} img={"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"} rating={"98"}></Movie>
        }))}
      </>
  )
}
