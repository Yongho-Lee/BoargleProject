
import Listing from './Listing.js'


function BestFamily(props) {

    let games = props.allGames;

    let bstfamily = [];
    for(let i in games){                
        if(findFamily(games[i].type)){
            bstfamily.push(games[i])
        }
    }

    const pageName = "Best Family Game page";

    return(

        <>
        <div>

                {
                    <Listing list={bstfamily} pageName={pageName}/>
                }

        </div>
        </>
    )

}


function findFamily(games){
    if(games.indexOf('family') > -1){
        return true
    } else { return false }
}

export default BestFamily;