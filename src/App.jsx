import React, { useState } from "react"
import Game from "./components/Game";


function App(){

    const [games,setGames]=useState([
        {id:1,name:"Football",players:"11M",color:"red",twcolor:"bg-yellow-300"},
         {id:2,name:"Volleyball",players:"6M",color:"blue",twcolor:"bg-pink-300"},
          {id:3,name:"Baketball",players:"10M",color:"green",twcolor:"bg-orange-300"},
    ])
    


    return (
    <div>
       <h1 className="text-3xl"> This is Index Page</h1>

       <h1 className="text-5xl font-bold text-center">Popular Games</h1>

       {games.map(
        (game)=>{
            return(
                <Game game={game}/>
                // <div key={game.id} className="bg-pink-700 rounded-xl text-white m-4 p-4">
                //    < h2 className="text-2xl font-bold ">{game.name}</h2>
                //    <p className="text-lg">{game.players}players</p>
                //    </div>
            )
        }
       )

       }


    </div>
    )
}


export default App




// function App(){
//     return (<div>
//         this is app index page
//     </div>)
// }


// export default App