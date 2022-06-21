import { useEffect, useState} from 'react';
import { Nav } from 'react-bootstrap';


function Tab(props) {

    let games = props.games;

    let [tab, setTab] = useState(1);


    return(
        <>
        <div className="detail_nav" style={{ marginTop:"100px"}}>
            <Nav justify variant="tabs" defaultActiveKey="link-1">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{ setTab(1 )}}>Information</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>{ setTab(2)}}>Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled onClick={()=>{ setTab(3)}}>
                    Not service yet
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
            
            <TabComponent tab={tab} games={games}/>

        </>
 


    )




}


function TabComponent({tab, games}){

    let [fade, setFade] = useState('');

    useEffect(()=>{
        let a = setTimeout(()=>{setFade('end')}, 5);
        return() =>{
            clearTimeout(a);
            setFade('');
        }      

    }, [tab])

    return (
        [
            null,
        <div className={"start " + fade}> 
            <h4> {games.name} </h4>
            <span>
                <p> {games.desc} </p>
                <p> Publisher: {games.publisher}</p>
                <p> Best player: {games.bestPlayer}</p>
            </span>

        
        </div>,
        <div className={"start " + fade}> <h4> Reviews </h4></div>,
        <div className={"start " + fade}> <h4> Not service yet </h4></div>    
    ][tab]
        
        )
    
    // if(tab === 1){
    //     return(
    //         <div className={"start " + fade}> <h4> Information </h4></div>
    //     )
    // }
    // else if(tab === 2){
    //     return(
    //         <div className={"start " + fade}> <h4> Reviews </h4></div>
    //     )
    // }
    // else if(tab === 3){
    //     return(
    //         <div className={"start " + fade}> <h4> Not service yet </h4></div>
    //     )
       
    // }
    // else {      
    //     return(
    //         null
    //     )

    // }

}


export default Tab;