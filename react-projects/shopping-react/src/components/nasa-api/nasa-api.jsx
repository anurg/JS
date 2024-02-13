import axios from "axios";
import { useEffect, useState } from "react";

export function NasaAPI() {
    const [mars, setMars] = useState();
    useEffect(()=>{
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=qfekusAXpHYvg8kGz3Utiwx29BqIBRBm7Y3Qfjkz')
        .then((response)=>{
            console.log(response.data);
            setMars(response.data);
        }).catch((ex)=>{
            console.log(ex)
        })
   },[]);
    return (
        <div className="container-fluid">
        <h2>Mars Rover Photos</h2>
        <div className="d-flex flex-wrap">
            {
                mars.photos.map(photo=>
                     <div key={photo.id} className="card p-2 m-2" style={{width:'200px'}}>
                        <a href={photo.src} target="_blank">
                        <img  src={photo.img_src} className="card-img-top" height="200"/>
                        </a>
                        <div className="card-header">
                            <h3>{photo.id}</h3>
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Camera</dt>
                                <dd>{photo.camera.full_name}</dd>
                                <dt>Rover</dt>
                                <dd>{photo.rover.name}</dd>
                            </dl>
                        </div>
                     </div>
                    )
            }
        </div>
    </div>
    );
}