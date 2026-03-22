// import React from "react";

import { useState } from "react"


const TrafficLight = () => {

    const[color,setColor] = useState("verde");

        const cambiarColor = ()=>{
            if (color === "rojo") {
                setColor("verde")
            }

            if (color === "verde") {
            setColor("amarillo")
            }

            if (color === "amarillo") {
            setColor("rojo")
            }
        }

        setInterval(cambiarColor, 3000);

        return (
        <div className="align-items-center justify-content-center d-flex flex-column mx-auto mt-4 bg-dark" style={{width:"100px", height:"200px"}}>

            <button  type="button"
  className={`btn rounded-circle ${color === "rojo" ? "bg-danger" : "bg-secondary"}`}
  style={{ width: "60px", height: "60px" }}
  onClick={() => setColor("rojo")}> A</button>
            <button type="button"
  className={`btn rounded-circle ${color === "amarillo" ? "bg-warning" : "bg-secondary"}`}
  style={{ width: "60px", height: "60px" }}
  onClick={() => setColor("amarillo")}>B</button>
            <button  type="button"
  className={`btn rounded-circle ${color === "verde" ? "bg-success" : "bg-secondary"}`}
  style={{ width: "60px", height: "60px" }}
  onClick={() => setColor("verde")}> C</button>
        </div>
        )
}


export default TrafficLight