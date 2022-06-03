import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Detail(props) {
    let games = props.allGames;

    let navigate = useNavigate();
    let {id} = useParams();

    let srcname = games.map(function(a,i){
        if(games[i].id == id){
            return games[i].shortName;
        }
    })


    return(

        <>

        <div className="body-margin"></div>
        <p> {games[1].name}</p>
        <p>{id}</p>
        <p>{srcname}</p>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={require("../img/bgImage/puerto-rico.jpg?raw=true")} width="250px" height="200px" alt={'bgimage'+id} />
                </div>
                <div className="col-md-6 mt-4">
                    {/* <h4 className="pt-5">{props.shoes[0].title}</h4>
                    <p>{props.shoes[0].content}</p>
                    <p>{props.shoes[0].price}원</p> */}
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div> 
        </div>


        </>
    )

}


export default Detail;