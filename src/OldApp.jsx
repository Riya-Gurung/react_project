

import { useState,useEffect} from "react"
import './App.css'

function Welcome(props){
  return<h1>hello,{props.name}!,you are {props.gender}</h1>

}
function Counter(){
  const [count,setCount]= useState(0)
  const [nextVar,setNextVar]=useState(0)

  useEffect(
    ()=>{
      console.log('COUNTER MOUNTED')
      setCount(count+5)

    },[nextVar]
  )

  function chNext(){
    setNextVar(nextVar+1)
  }

  function increase(){
    setCount(count+1)
    console.log(count)
  }
  function decrease()
  {
    setCount(count-1)
    console.log(count)
  }
  return<>
  <h1>the count value:{count}</h1>
  <button onClick={increase} onMouseEnter={
    ()=>{
      console.log("MOUSE Entered")
    }

  }>INCREASE</button>
  <button onClick={decrease}>DECREASE</button>
  <button onClick={chNext}>CHANGE NEXT COUNT{nextVar}</button>
  
  </>
}

function MeroForm(){
  const[firstName,setfirstName]=useState("babita")
  const[LastName,setLastName]=useState("kafle")
  const [premiumUser,setPremiumUser]=useState(false)

  /*if(premiumUser){
   return <h2>you are a premium user, you can enjoy premium features..</h2>
  }
  else{
   return <h2> you are a normal user, you cam enjoy normal features
    </h2>
  } */

  
  return<>
  <br></br>
  <br></br>
  <h1>this is my form..
  welcome to my form</h1>

  <button onClick={()=>{
    setPremiumUser(!premiumUser)
  }}>Toggle Premium</button>

  {
    premiumUser ?( <h1>you are premium user</h1>):(<h1>you are a normal user.</h1>)
  }

  
  <h2>FirstName Value is:{firstName||"N/A"}</h2>
  <h2>LastName Value is:{LastName}</h2>

  <form>
    <label htmlFor="firstName">firstName</label>
    <input value={firstName}  id="firstName" type="text" onChange={
      (e)=>{
        console.log("input changed", e.target.value)

        setfirstName(e.target.value)
      }
    }/>
    <label htmlFor="LastName">LastName</label>
    <input value={LastName} id="LastName" type="text"  onChange={
      (e)=>{
        console.log("input changed",e.target.value)
        setLastName(e.target.value)
      }
    }/>
  </form>
  </>
}
function Games(){

  const [games,setGames]=useState(["Volleyball","Basketball","Football"])
  return(
    <div>
      <h1>This displays Games.</h1>

      <ul>
        

      {games.map((game,index)=>{
        return<li key={index}>{game}</li>
      })}
        
        </ul>
        {games.map((game,index)=>{
          return<Game key={index} title={game} />
        })}

    </div>
  )
}
function Game(props){
  return(
    <div style={{
      padding:"10px",
      color:"blue",
      backgroundColor:"pink",
      borderRadius:"10px",
      margin:"10px"
      
    }}>
      <h1 className="game-title" >{props.title}</h1>
      <hr/>
    </div>

  )
}


function App() {

  let person_name="babita"
  return<><Welcome name={person_name} gender="female"/>
    <Welcome name="riya" gender="female"/>
    <Counter />
    <MeroForm />
    <Games />
    </>
  
}

export default App

