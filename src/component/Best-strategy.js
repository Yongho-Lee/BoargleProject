import Listing from './Listing.js'

function BestStrategy(props) {
    let games = props.allGames;

    let bstStrategy = [];
    for(let i in games){                
        if(findStrategy(games[i].type)){
            bstStrategy.push(games[i])
        }
    }

    function findStrategy(games){
        if(games.indexOf('strategy') > -1){
            return true
        } else { return false }
    }

    const pageName = "Best Strategy Games";


    return(

        <>
        <div>  

                {
                    <Listing list={bstStrategy} pageName={pageName}/>
                }
     
        </div>


        </>
    )

}





export default BestStrategy;