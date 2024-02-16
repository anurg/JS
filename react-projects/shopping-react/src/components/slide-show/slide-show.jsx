import axios from "axios";

import { useState, useEffect, useRef } from "react";

export function SlideShow() {
    const [products,setProducts] = useState({id:0 , title:'', price:0 , description:'' ,category:'' , image:'' , rating:{rate:0,count:0}});
    const [status,setStatus] = useState('');
    let productId = useRef(1);
    let Timer = useRef(null);

    function LoadData(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response)=>{
            setProducts(response.data);
        });
    }
    function LoadDataAuto() {
        productId.current = productId.current + 1;
        axios.get(`https://fakestoreapi.com/products/${productId.current}`).then((response)=>{
            setProducts(response.data);
        });
    }
    function handlePlayClick() {
        Timer.current = setInterval(LoadDataAuto, 2000);
        setStatus('Slide Show Running');
    }
    function handlePauseClick() {
        clearInterval(Timer.current);
        setStatus('Slide Show Paused');
    }
    function handleNextClick(){
        productId.current = productId.current + 1;
        LoadData(productId.current);
    }
    function handlePrevClick() {
        productId.current = productId.current - 1;
        LoadData(productId.current);
    }
    useEffect(()=>{
        LoadData(1);
    },[])
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="mt-4 card w-50">
                <div className="card-header text-center">
                    <p className="card-title fw-bold">{products.title} </p>
                    <p>{status}</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column align-items-center justify-content-center">   
                        <button className="bi bi-chevron-left btn btn-dark" onClick={handlePrevClick}></button>                     
                        </div>
                        <div className="col-10">
                        <img src={products.image} width="100%" height="400px"/>
                        </div>
                        <div className="col-1 d-flex flex-column align-items-center justify-content-center">  
                        <button className="bi bi-chevron-right btn btn-dark" onClick={handleNextClick}></button>                      
                        </div>
                    </div>
                    
                </div>
                <div className="card-footer text-center">
                    <button className="bi bi-play btn btn-success me-2" onClick={handlePlayClick}></button>
                    <button className="bi bi-pause btn btn-warning" onClick={handlePauseClick}></button>
                </div>

            </div>

        </div>
    );
}