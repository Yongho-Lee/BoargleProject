import Listing from './Listing.js'

function Best2players(props) {


    let games = props.allGames;

    let bst2games = [];
    for(let i in games){                
        if(games[i].bestPlayer == 2){
            bst2games.push(games[i])
        }
    }

    return(

        <>
        <div>
            <h4> Best 2 players page </h4>        

                {
                    <Listing list={bst2games}/>
                }
     
        </div>


        </>
    )

}



export default Best2players;