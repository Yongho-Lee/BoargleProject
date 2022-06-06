import Listing from './Listing.js';

function InStock(props) {


    let games = props.allGames;

    let instkGames = [];
    for(let i in games){                
        if(games[i].stock > 1){
            instkGames.push(games[i])
        }
    }

    return(

        <>
        <div>
            <h4> In Stock Board Games </h4>           

                {
                    <Listing list={instkGames} />
                }     
        </div>


        </>
    )

}


export default InStock;