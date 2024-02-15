import { useState, useRef } from "react";

export function TimerDemo() {
    const [vol,setVol] = useState(0);
    let vol2ref = useRef(null);
    function V1(){
        setVol(10);
    }
    function V2(){
        setVol(20);
    }
    function V3(){
        setVol(30);
    }
    function handleVolumeUp() {
       setTimeout(V1,5000);

      vol2ref.current = setTimeout(V2,7000);
       setTimeout(V3,9000);
    }
    function handleCancel() {
        clearTimeout(vol2ref.current);
    }
    return (
        <div className="container">
            <h2>Timer Demo</h2>
            <button className="bi bi-volume-up btn btn-primary me-3" onClick={handleVolumeUp}> + </button>
            <button className="bi bi-volume-down btn btn-primary" onClick={handleCancel}> Cancel 20% </button>
            <p>Vol increased by {vol} </p>
        </div>
    );
}