import Tab from './Tab';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Detail(props) {
    let games = props.allGames;

    let navigate = useNavigate();
    let {id} = useParams();


    let srcName = "";
    let index = 0;    
    for(let i in games){
        if(games[i].id == id){
            index = i;
        }
    }    
    for(let i in games){
        if(games[i].id == id){
            srcName = games[i].shortName;
        }
    }


    let srcLink = "https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + srcName + ".jpg?raw=true"


    return(

        <>

        <div className="body-margin"></div>
        {/* <p> {games[1].name}</p>
        <p>{id}</p>
        <p>{srcLink}</p> */}
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + games[index].shortName + ".jpg?raw=true"} width="250px" height="200px" alt={'bgimage'+id} style={{marginTop:"40px"}}/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{games[index].name}</h4>
                    <p>{games[index].price}</p>
                    <p>{games[index].stock}  units</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div> 
        </div>

        <Tab/>

        </>
    )

}





export default Detail;