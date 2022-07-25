import Listing from './Listing.js'

function AllGames(props) {
    const games = props.allGames;
    const pageName = "All Products";

    return(

        <>

                {
                    <Listing list={games} pageName={pageName}/>
                }    
        </>
    )

}


export default AllGames;