import Listing from './Listing.js'

function AllGames(props) {
    const games = props.allGames;
    return(

        <>
        <div>
            <h4> All-Games Page </h4>

        </div>

                {
                    <Listing list={games}/>
                }    
        </>
    )

}


export default AllGames;