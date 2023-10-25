import React from 'react'
import Rows from './Rows'
import requests from './requests.js'
import Banner from "./Banner.js"  
import Nav from "./Nav.js";
import "./App.css"
function App() {
  

  return (
    <div>
      {/* <img src={records} alt="" /> */}
       {/* <Header />  */}
      <Nav/>
      <Banner/>
      <Rows title="Netflix Originals " fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}  />
      <Rows title="Trending Now"  fetchUrl={requests.fetchTrending}/>
      <Rows title="TopRated"  fetchUrl={requests.fetchTopRated} />
      <Rows title="ActionMovies"  fetchUrl={requests.fetchActionMovies} />
      <Rows title="ComedyMovies"  fetchUrl={requests.fetchComedyMovies} />
      <Rows title="HorrorMovies"  fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="RomanceMovies"  fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="DocumentariesMovies"  fetchUrl={requests.fetchDocumentariesMovies} />



      {/* <Rows h="Trending"/>
      <Rows h="Top Rated"/>
      <Rows h="Action"/>  */}
      {/* <Experiment/> */}
       
    </div>
  )
}

export default App
