 import React from "react";
 import './user.css'

 export default function User( {data} ){
    return(
        <>
        <div className="block">
            <div> {data.name} </div>
            <div> {data.age} </div>
            <div> {data.country} </div>
        </div>
        </>
    )
 }