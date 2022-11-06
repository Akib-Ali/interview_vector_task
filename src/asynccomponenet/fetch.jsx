import axios from "axios";
import { useState } from "react"

export const FetchAsync=()=>{

    const [storedata, setStoreData]= useState([])

    const getuser=async()=>{
    const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    setStoreData(await responce.json())



    }
    console.log(storedata)


    return(
        <div>
            <h1>Fetch Data From Async Await Method</h1>

            {storedata.map((elem,index)=>{
                return(
                    <ul key={index}>
                        <li>{elem.name}</li>
                    </ul>
                )
            })}
            <button style={{color:"white", backgroundColor:"black"}} onClick={getuser}>Show data</button>
        </div>
    )



}