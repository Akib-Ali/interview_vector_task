import axios from "axios"
import { useState } from "react"
import { UserInterface } from "./ui"
export const FetchComponent=()=>{

    const [storeData, setStoreData]= useState([])




    const fetchAPI=()=>{
        axios({
            method:"get",
            url:"https://jsonplaceholder.typicode.com/users"
        }).then((res)=>{
            setStoreData(res.data)

        }).catch((err)=>{
            console.log(err)

        })




    }
    console.log(storeData)


    return(
        <div>
            <h1>Task </h1>

            <div>
            <ul>
                <li>Fetch button click show all name</li>
                <li>Short button click Ist Time all all name sort Assending Order</li>
                <li> Short button click IIND Time all all name sort Descending Order</li>
                <li>Short button click IIIrd Time Rest all data Same order </li>
            </ul>
            </div>

             <div style={{display:"flex" , gap:"30px"}}>
                <button style={{backgroundColor:"black", color:"white"}} onClick={fetchAPI}>Show Name</button>
                <button style={{backgroundColor:"black", color:"white"}}>Sort Name</button>
             </div>

             {storeData.map((elem,index)=>(
                <UserInterface key={index}
                              id={index}
                              elem={elem}

                />

             )


             )}
             
        </div>
    )
}