import axios from "axios";

import { useEffect, useState } from "react";
import "./even-demo.css";

export function EventDemo() {
    const [mobiles, setMobiles] = useState([]);
    const [targetImg, setTargetImg] = useState();
    function LoadMobiles() {
        axios.get("mobile.json").then((response)=>setMobiles(response.data)).catch((ex)=>console.log(ex));
    }
    useEffect(()=>{
        LoadMobiles();
    },[])
    
    function handleMouseOver(e) {
        setTargetImg(e.target.src);
    }
    return (
        <div className="container-fluid m-2 p-4" >
           <section className="mt-4 row">
                <nav className="col-1">
                    {
                        mobiles.map((mobile)=>
                            <div  key={mobile.img_src}>
                                <img src={mobile.img_src} width="60" height="100" onMouseOver={handleMouseOver} />
                            </div>
                        
                        )
                    }
                </nav>
                <main className="col-11">
                    <img width="300" height="400" src={targetImg} />
                </main>
           </section>
          </div> 
    );
}