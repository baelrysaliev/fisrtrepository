import React, { useState } from "react";
 import './sort.css'
import { data } from "./data";
import User from "./user";

 export default function Sort() {
    const [age, setAge] = useState()
    const [count, setCount] = useState()

    const renderCountry = () => {
        switch(count) {
            case 1:
                let count1 = data.filter ( (el) => {
                    return el.age < 18 && el.country == 'kyrgyz'
                } )
                return count1.map( (el) => {
                    return <User data={el}/>
                } )

                case 2:
                    let count2 = data.filter( (el) => {
                        return el.age <18 && el.country != 'kyrgyz'
                    } )
                    return count2.map( (el) => {
                        return <User data={el}/>
                    } )
                    default:
                        let count3 = data.filter( (el) => {
                            return el.age < 18
                        } )
                        return count3.map( (el) => {
                        return <User data={el}/>
                        } )
        }
    }

    const renderUser = () => {
        switch(age) {
            case 1:
            return (
                <>
                <div>
                    <button className="btn1" onClick={ () =>setCount(1) }> кыргыз</button>
                    <button className="btn1" onClick={ () =>setCount(2) }> башка улут</button>
                    <div> {renderCountry()} </div>
                </div>
                </>
            )
         case 2:
            let age1 = data.filter( (el) => {
                return el.age > 20 && el.age < 30
            } )   
            return age1.map( (el) => {
                return <User data={el}/>
            } )
            case 3:
                let age2 = data.filter ( (el) => {
                    return el.age > 30

                } )
                return age2.map( (el) => {
                    return <User data={el}/>
                } )
            case 4: 
            return data.map( (el) => {
                return <User data={el}/>
            } )
            default:
            return ''   
        }

    }





























    return (
        <>
        <div className="container">
            <div className="group">
                <button className="btn" onClick={() => setAge(4)}> баардык катышуучу</button>
                <button className="btn" onClick={() => setAge(1)}> 18ден кичине </button>
                <button className="btn" onClick={() => setAge(2)}> 20дан 30га чейин</button>
                <button className="btn" onClick={() => setAge(3)}> 30дан 50го чейин</button>
            </div>
            <div className="box"> { renderUser()} </div>
        </div>
        </>
    )
 }