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
// export function EventDemo(){
//     const [userId,setUserId] = useState('');
//     const [users,setUsers] = useState([]);
//     const [userError,setUserError] = useState('');
//     const [valClass, setValClass] = useState('');
//     const [showWarn, setShowWarn] = useState('d-none');
//     useEffect(()=>{
//        axios.get("users.json").then((response)=>{
//             setUsers(response.data);
//        }) 
//     },[])
//     function VerifyUserId(e) {
//         for (var user of users) {
//             if (user.UserId === e.target.value) {
//                 setUserError("User Id taken, Please try another.");
//                 setValClass('text-danger');
//                 break;
//             } else {
//                 setUserError("User Id Available");
//                 setValClass('text-success');
//             }
//         }
//     }
//     function VerifyCaps(e) {
//         if (e.which >=65 && e.which<=90) {
//             setShowWarn('d-block');
//         } else {
//             setShowWarn('d-none');
//         }
//     }
//     return (
//         <div className="container-fluid m-2" >
//             <h2>Register User</h2>
//             <dl>
//                 <dt>User Id</dt>
//                 <dd><input type="text" onKeyUp={VerifyUserId} /></dd>
//                 <dd className={valClass}>{userError}</dd>
//                 <dt>Password</dt>
//                 <dd><input type="password" onKeyPress={VerifyCaps}/></dd>
//                 <dd className={`text-warning ${showWarn}`}><span className="bi bi-exclamation-triangle-fill text-warning"></span>
//                     Warning- Caps On</dd>
//             </dl>
//         </div>
//      );
// }

//  Password Strength Demo
export function EventDemo(){
    const [msg, setMsg] = useState('');
    const [meter, setMeter] = useState(0);

    function VerifyPassword(e) {
        if (e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
            setMeter(100);
            setMsg("Strong Password")
        } else {
            if (e.target.value.length<4) {
                setMeter(30);
                setMsg('Poor Pasword'); 
            } else {
                setMeter(70);
                setMsg('Weak Pasword'); 
            }
        }
    }
    return (
        <div className="container-fluid m-2 p-4">
            <h2>Register User</h2>
            <dl>
                <dt>Password</dt>
                <dd><input type="password" onKeyUp={VerifyPassword}/></dd>
                <dd><meter min="1" max="100" value={meter} style={{width : "200px"}}></meter></dd>
                <dd>{msg}</dd>
            </dl>
        </div>
    );
}
