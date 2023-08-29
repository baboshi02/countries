
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
// styles
const appStyle={
  padding:"20px",
  textAlign:"center",
  fontSize:"20px",
  marginTop:"20px",
  marginRight:"30px",
  marginLeft:"30px"

}

const HeaderStyle={
  backgroundColor:"#2F3C7E",
  padding:"10px",
  color:"#FBEAEB",
 
}

const searchBarStyle={
  marginTop:"10px",
  backgroundColor:"#2F3C7E",
  color:"#FBEAEB",
  fontSize:"larger",
  borderRadius:"20px",
  height:"40px",
  textAlign:"center",
  width:"auto"
}

const countriesListStyle={
  ...HeaderStyle,
  paddingLeft:"100px",
  paddingRight:"100px"
}

const countryStyle={

  textAlign:"left",
  backgroundColor:"#FBEAEB",
  color:"#2F3C7E"

  
}

// Components
const Header=(props)=>{
  return (
  <header style={HeaderStyle}>
    <h1>World Coutries <br/>Data</h1>
    <p>Currently We have {props.countriesData.length} Countries</p>
    <p> X satified the search criteria</p>
  </header>
  )
}
const SearchBar=()=>{
  return(
    <div>
          <input autoFocus placeholder='Search Countries By' type="text" style={searchBarStyle}/>
    </div>
  )
}

const Country=({countryData:{name,capital,flags,population,languages}})=>{
  
  return (
  <div style={countryStyle}>
    <div style={{align:"center" ,marginLeft:"25%"}}>
      <img src={flags.png} alt={name.common} />
    </div>
    <h3>Name: {name.common}</h3>
    <h3>Capital: {capital.join(",")}</h3>
    <h3>Languages: {Object.keys(languages).join(',')}</h3>
    <h3>Population: {population}</h3>
  </div>
  )
}
const CountriesList=({countriesData})=>{
  console.log(countriesData)
  return(
  <div style={countriesListStyle}>
    {countriesData.map(country=><Country countryData={country} key={country}/>)}
  </div>
  )
  
}


const App=()=>{
  const [data,setData]=useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData=async ()=>{
    try{
      const url ="https://restcountries.com/v3.1/all?fields=name,flags,capital,languages,population,currency"
      const response=await fetch(url)
      const body=await response.json()
      setData(body)
    }
    catch(error){
      console.log('error: ',error)
    }
  }
  // console.log('data: ',data)
  return (
    <div style={appStyle}>
      <Header countriesData={data}/>
      <SearchBar/>
      <CountriesList countriesData={data}/>
      
    </div>
  )

}


// Creating root and rendering
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)