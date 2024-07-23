import React, { useEffect, useState } from 'react'

const Joker = () => {
const URL="https://official-joke-api.appspot.com/random_joke"
  const getjoke= async()=>{
    const response= await fetch(URL);
    const jsonresponse=await response.json();
    console.log(jsonresponse)
    setJoke({setup:jsonresponse.setup,punchline:jsonresponse.punchline})
   }
   useEffect(()=>{ async function getfirstjoke(){
    const response= await fetch(URL);
    const jsonresponse=await response.json();
    setJoke({setup:jsonresponse.setup,punchline:jsonresponse.punchline})
   }
   getfirstjoke();
  },[])
  const[joke,setJoke]=useState(getjoke);
  
  
  return (
    <div style={{border:"2px solid blue",borderRadius:"10px",padding:"10px",backgroundColor:"#134B70"}}>
      <h2 style={{color:"white"}}>Random Jokes Generator</h2>
      <h3 style={{color:"#A7E6FF"}}>{joke.setup}</h3>
      <h3 style={{color:"#FFF6E9"}}>{joke.punchline}</h3>
      <button onClick={getjoke}>Get new joke</button>

      
    </div>
  )
}

export default Joker;
