import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


// redux - To cart
import { useDispatch } from 'react-redux';
import { addCartList } from '../store/cartSlice';

// JS
import Tab from './Tab';
import stockCheck from '../js/stockCheck';

function Detail(props) {
    let games = props.allGames;

    let navigate = useNavigate();
    let {id} = useParams();

    let dispatch = useDispatch();

    let index = 0;    
    for(let i in games){
        if(games[i].id == id){
            index = i;
        }
    }    
    

    let currentIndex = games.find( x => x.id == id);
    useEffect(()=>{
        //console.log(currentIndex.id)

        localStorage.getItem('watched') == null ?
        localStorage.setItem('watched', JSON.stringify([]))
        : console.log("watched Items here: " + localStorage.getItem('watched'));
    
               
        localStorage.getItem('prodCart') == null ?
        localStorage.setItem('prodCart', JSON.stringify([]))
        : console.log("In cart Items here: " + localStorage.getItem('prodCart'))

        let storage = localStorage.getItem('watched')
        storage = JSON.parse(storage)
        storage.push(currentIndex.id)
        
        // delete redundant data
        storage = new Set(storage)
        // to Array
        storage = Array.from(storage)

        localStorage.setItem('watched', JSON.stringify(storage))


    

    }, [])


     // let srcName = "";
    // for(let i in games){
    //     if(games[i].id == id){
    //         srcName = games[i].shortName;
    //     }
    // }


    //let srcLink = "https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + srcName + ".jpg?raw=true"



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
                    {stockCheck(games[index].stock)}
                    {
                        games[index].stock > 0 ?
                        <button className="btn btn-danger"onClick={()=>{
                        navigate('/cart');
                        dispatch(addCartList(games[index]));
                    }}> Add to cart</button> :

                    <button className="btn btn-secondary btn-disable">
                        Sold out
                    </button>
                    
                    }
                </div>
            </div> 
        </div>

        <Tab/>
        </>
    )
}


export default Detail;