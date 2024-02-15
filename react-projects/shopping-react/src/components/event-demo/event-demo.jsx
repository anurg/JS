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

import { useEffect, useState } from "react";
import axios from "axios";

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
// export function EventDemo(){
//     function handleMouseOver(e) {
//         e.target.stop();
//     }
//     function handleMouseOut(e) {
//         e.target.start();
//     }
//     return (
//         <div className="container-fluid m-2 p-4">
//             <marquee scrollamount="20" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{padding:'100px'}} >
//                 <img src="m1.png" width="200" height="200" />
//                 <img src="m2.png" width="200" height="200" />
//                 <img src="m3.png" width="200" height="200" />
//                 <img src="m4.png" width="200" height="200" />
//             </marquee>
//         </div>
//     );
// }

// Key events
export function EventDemo(){
    const [userId,setUserId] = useState('');
    const [users,setUsers] = useState([]);
    const [userError,setUserError] = useState('');
    const [valClass, setValClass] = useState('');
    useEffect(()=>{
       axios.get("users.json").then((response)=>{
            setUsers(response.data);
       }) 
    },[])
    function VerifyUserId(e) {
        for (var user of users) {
            if (user.UserId === e.target.value) {
                setUserError("User Id taken, Please try another.");
                setValClass('text-danger');
                break;
            } else {
                setUserError("User Id Available");
                setValClass('text-success');
            }
        }
    }
    return (
        <div className="container-fluid m-2" >
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUserId} /></dd>
                <dd className={valClass}>{userError}</dd>

            </dl>
        </div>
     );
}