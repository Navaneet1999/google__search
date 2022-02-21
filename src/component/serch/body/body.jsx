import axios from "axios"
import { useEffect, useState } from "react"
import "./body.css"

export const Body = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        axios.get("https://fast-reef-22226.herokuapp.com/data").then((res) => {
            console.log("res",res.data);
            setDatas(res.data)
        })
    }
    return(
        
        <div id="detailed-result">
            <button id="sort-alphabetically" onClick={() => {
                
            }}>Sort A-Z</button>
            <button id="sort-alphabetically-desc">Sort Z-A</button>
            <button id="sort-by-date ">Sort by Date(Asc)</button>
            <button id="sort-by-date-desc">Sort by Date(Des)</button>
            <button id="sort-by-quality">Sort by Quality(Asc)</button>
            <button id="sort-by-quality-desc ">Sort by Quality(Des)</button>
            <button id="filter-explicit">Filter Explicit</button>
            {datas.map((e) => (
                <div className="box" key={e.id}>
                    <div className="cent">{e.url}</div>
                    <div className="cent"><a href=""><h3 className="title">{e.title}</h3></a>  <h3 className="author">| {e.author}</h3></div>
                    <div className="desc">{e.description}</div>
                    <div className="desc creation-date"><h3>Creation Date: {e.creation_date}</h3></div>
                    <div className="desc"><h3 className="explicit quality">Explicit: {e.explicit} Quality% : {e.quality}</h3></div>
                    
                </div>

            ))}
        </div>
    )
}