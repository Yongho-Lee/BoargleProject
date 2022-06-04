
import Listing from './Listing';

function Arrivals(props) {    
    const games = props.allGames;
    
    let now = new Date();	// today date
    let twoMonthAgo = new Date(now.setMonth(now.getMonth() - 2));	// month ago



    let newArrivals = [];
    for(let i in games){                
        if(new Date(games[i].lastStock) > twoMonthAgo){
            newArrivals.push(games[i])
        }
    }

    function getYmd10(d) {
        //yyyy-mm-dd format Dates create
        return d.getFullYear() + "-" + ((d.getMonth() + 1) > 9 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1)) + "-" + (d.getDate() > 9 ? d.getDate().toString() : "0" + d.getDate().toString());
    }

    return(
        
        <div>
            <h4> New Arrival page </h4>

            <p>{getYmd10(twoMonthAgo)} ~ today</p>

                {
                    <Listing list={newArrivals}/>
                }

        </div>


        
    )

}




export default Arrivals;