// import axios from "axios";
// import { useEffect, useState } from "react";
// import "./even-demo.css";

// export function EventDemo() {
//     const [mobiles, setMobiles] = useState([]);
//     const [targetImg, setTargetImg] = useState();
//     function LoadMobiles() {
//         axios.get("mobile.json").then((response)=>setMobiles(response.data)).catch((ex)=>console.log(ex));
//     }
//     useEffect(()=>{
//         LoadMobiles();
//     },[])
    
//     function handleMouseOver(e) {
//         setTargetImg(e.target.src);
//     }
//     return (
//         <div className="container-fluid m-2 p-4" >
//            <section className="mt-4 row">
//                 <nav className="col-1">
//                     {
//                         mobiles.map((mobile)=>
//                             <div  key={mobile.img_src}>
//                                 <img src={mobile.img_src} width="60" height="100" onMouseOver={handleMouseOver} />
//                             </div>
                        
//                         )
//                     }
//                 </nav>
//                 <main className="col-11">
//                     <img width="300" height="400" src={targetImg} />
//                 </main>
//            </section>
//           </div> 
//     );
// }

// Flag animation cursor Demo

import { useState } from "react";

// export function EventDemo(){

//     const [styleObj, setStyleObj] = useState({position:'absolute',top:'', left:''});

//     function GetPosition(e){
//         setStyleObj({
//             position:'absolute',
//             top: e.clientY + 'px',
//             left: e.clientX + 'px'
//         })
//     }
   
//     return(
//         <div onMouseMove={GetPosition} className="container-fluid m-2 p-4">
//             <div style={{height:'1000px'}}>
//                 <p>Move mouse pointer to test</p>
//             </div>
//             <img style={styleObj} width="50" height="50" src="india_120.gif"/>
//         </div>
//     )
// }

//  marquee demo
export function EventDemo(){
    function handleMouseOver(e) {
        e.target.stop();
    }
    function handleMouseOut(e) {
        e.target.start();
    }
    return (
        <div className="container-fluid m-2 p-4">
            <marquee scrollamount="20" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{padding:'100px'}} >
                <img src="m1.png" width="200" height="200" />
                <img src="m2.png" width="200" height="200" />
                <img src="m3.png" width="200" height="200" />
                <img src="m4.png" width="200" height="200" />
            </marquee>
        </div>
    );
}
