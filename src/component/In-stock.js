import Listing from './Listing.js';

function InStock(props) {


    let games = props.allGames;

    let instkGames = [];
    for(let i in games){                
        if(games[i].stock > 1){
            instkGames.push(games[i])
        }
    }

    const pageName = "In Stock Board Games";


    return(

        <>
        <div>        

                {
                    <Listing list={instkGames} pageName={pageName}/>
                }     
        </div>


        </>
    )

}


export default InStock;