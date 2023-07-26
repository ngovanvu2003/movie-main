
import axios from "axios"
import Banner from "@/components/Banner"
import requests from "@/api/movie"
import { log } from "console"
import Row from "@/components/Row"


export default async function Home() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
  
  return (
   <>
   <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
   <Banner netflixOriginals={netflixOriginals}/>
   <section className="">
    <Row/>
    <Row/>

    <Row/>

    <Row/>
    <Row/>

    
   </section>
   </main>
   <h1 className=''>Hello</h1>
   </>
  )
}

// export const getServerSideProps = async () => {
//   const [
//     netflixOriginals,
//     trendingNow,
//     topRated,
//     actionMovies,
//     comedyMovies,
//     horrorMovies,
//     romanceMovies,
//     documentaries,
//   ] = await Promise.all([
//     fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
//     fetch(requests.fetchTrending).then((res) => res.json()),
//     fetch(requests.fetchTopRated).then((res) => res.json()),
//     fetch(requests.fetchActionMovies).then((res) => res.json()),
//     fetch(requests.fetchComedyMovies).then((res) => res.json()),
//     fetch(requests.fetchHorrorMovies).then((res) => res.json()),
//     fetch(requests.fetchRomanceMovies).then((res) => res.json()),
//     fetch(requests.fetchDocumentaries).then((res) => res.json()),
//   ])
//   return {
//     props: {
//       netflixOriginals: netflixOriginals.results,
//       trendingNow: trendingNow.results,
//       topRated: topRated.results,
//       actionMovies: actionMovies.results,
//       comedyMovies: comedyMovies.results,
//       horrorMovies: horrorMovies.results,
//       romanceMovies: romanceMovies.results,
//       documentaries: documentaries.results,
//     },   
//   }
// }



