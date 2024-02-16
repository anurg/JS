import { useState, useRef, useEffect } from "react";

// export function TimerDemo() {
//     const [vol,setVol] = useState(0);
//     let vol2ref = useRef(null);
//     function V1(){
//         setVol(10);
//     }
//     function V2(){
//         setVol(20);
//     }
//     function V3(){
//         setVol(30);
//     }
//     function handleVolumeUp() {
//        setTimeout(V1,5000);

//       vol2ref.current = setTimeout(V2,7000);
//        setTimeout(V3,9000);
//     }
//     function handleCancel() {
//         clearTimeout(vol2ref.current);
//     }
//     return (
//         <div className="container">
//             <h2>Timer Demo</h2>
//             <button className="bi bi-volume-up btn btn-primary me-3" onClick={handleVolumeUp}> + </button>
//             <button className="bi bi-volume-down btn btn-primary" onClick={handleCancel}> Cancel 20% </button>
//             <p>Vol increased by {vol} </p>
//         </div>
//     );
// }

//  Set Interval Demo

// export function TimerDemo() {
//     const [time,setTime] = useState();

//     function Clock() {
//         var now = new Date();

//         setTime(now.toLocaleTimeString())
//     }
//     useEffect(()=>{
//         setInterval(Clock,1000);
//     },[]); 
//     return (
//         <div className="container">
//             <p className="mt-4 text-center">{time}</p>
//         </div>
//     );
// }

// IMage Load ProgressBar Demo
export function TimerDemo() {
    const [progress, setProgress] = useState('d-none');
    const [image,setImage] = useState('d-none');
    const [button, setButton] = useState('d-block');
    const [progressValue, setProgressValue] = useState(0);
    const [status, setStatus] = useState('');


    let loading = useRef(null);
    let count = useRef(0);
    function LoadingProgress() {

        count.current = count.current + 1;

        setProgressValue(count.current);
        if (count.current === 100) {
            setProgress('d-none');
            setImage('d-block');
        }
    }

    function handleLoadClick(e) {
      loading.current =  setInterval(LoadingProgress, 50);
       setButton('d-none');
        setProgress('d-block');
        
    }
    
    function handlePauseClick() {
        clearInterval(loading.current);
        setStatus('-Paused')
    }
    function handlePlayClick() {
        loading.current =  setInterval(LoadingProgress, 50);
        setStatus('')
    }
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height : "100vh"}}>
          <div className="w-25 text-center" >
            <div className={button}>
                <button className="btn btn-primary" onClick={handleLoadClick} >Load Image</button>
            </div>
            <div className={progress}>
                <progress min="1" max="100" className="w-100" style={{height : "40px"}} value={progressValue} />
                <p>{progressValue} % completed. {status}</p>
                <div>
                    <button className="bi bi-play btn btn-success me-2" onClick={handlePlayClick}></button>
                    <button className="bi bi-pause btn btn-warning" onClick={handlePauseClick}></button>
                </div>
            </div>
            <div className={image}>
                <img src="m2.png" width="300" height="300" />
            </div>
          </div>
        </div>
    );
}