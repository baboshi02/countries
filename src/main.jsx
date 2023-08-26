
import React, { useState ,Component} from 'react'
import ReactDOM from 'react-dom/client'
const Body=()=>{
  const[state,setState]=useState({
    weight:"",
    age:""
  })
  let avgWeigh
  let avgAge
  const catsWeight=[]
  const catsAge=[]
  fetch("https://api.thecatapi.com/v1/breeds")
  .then(response=>response.json())
  .then(cats=>{
    cats.forEach(cat=>{
        let [min,max]=cat.weight.metric.split('-')
        min = parseInt(min)
        max=parseInt(max)
        const avg=(min+max)/2
        catsWeight.push(avg)
      
        //age
        let [minAge,maxAge]=cat.life_span.split('-')
        minAge = parseInt(minAge)
        maxAge=parseInt(maxAge)
        const avgAge=(minAge+maxAge)/2
        catsAge.push(avgAge)
        
      })
      
      let sum=0
      for(let i=0;i<catsWeight.length;i++){
        sum+=catsWeight[i]
      }
       avgWeigh=(sum/catsWeight.length).toFixed(2)

      //  age
      sum=0
      for(let i=0;i<catsAge.length;i++){
        sum+=catsAge[i]
      }
       avgAge=(sum/catsAge.length).toFixed(2)

      

      setState({weight:avgWeigh,age:avgAge})
      
    })

return (
        <div>an average weight of a cat is {state.weight} and live up to be {state.age}</div>
      )
 
  
}
const App=()=>{
  return(
    <div style={{textAlign:"center"}}>
      <h1>30 Days Of React</h1>
      <h4>Cat's Paradise</h4>
      <small>there are 67 breeds of cats</small>
      <Body/>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)