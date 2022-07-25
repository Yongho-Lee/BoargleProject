import Listing from './Listing.js'

function Best2players(props) {


    let games = props.allGames;

    let bst2games = [];
    for(let i in games){                
        if(games[i].bestPlayer == 2){
            bst2games.push(games[i])
        }
    }

    const pageName = "Best 2 players games";

    return(

        <>
        <div>   

                {
                    <Listing list={bst2games} pageName={pageName}/>
                }
     
        </div>


        </>
    )

}



export default Best2players;