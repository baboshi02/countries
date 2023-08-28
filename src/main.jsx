
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
// styles
const appStyle={
  textAlign:"center",
  fontSize:"20px",
  marginTop:"20px",
  marginRight:"30px",
  marginLeft:"30px"

}

const componentStyle={
  backgroundColor:"#2F3C7E",
  padding:"10px",
  color:"#FBEAEB"
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

// Components
const Header=(props)=>{
  return (
  <header style={componentStyle}>
    <h1>World Coutries <br/>Data</h1>
    <p>Currently We have {props.countryiesData.length} Countries</p>
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

const Country=()=>{
  <div>

  </div>
}
const CountriesList=()=>{

  return(
  <div style={componentStyle}>

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
      <Header countryiesData={data}/>
      <SearchBar/>
      
    </div>
  )

}


// Creating root and rendering
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)