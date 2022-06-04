import Listing from './Listing.js';

function InStock(props) {


    let games = props.allGames;

    let instkgames = [];
    for(let i in games){                
        if(games[i].stock > 1){
            instkgames.push(games[i])
        }
    }

    return(

        <>
        <div>
            <h4> In Stock Board Games </h4>           

                {
                    <Listing list={instkgames} />
                }     
        </div>


        </>
    )

}


export default InStock;