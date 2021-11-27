import React from 'react'


const Info = (props) => { 

    const handlename = () =>{
        alert(props.fullname)
    }
    return (
        <div>
            <div onClick={handlename} >
            <h2 style={{color: "red"}}>{props.fullname} </h2>
            </div>
            <h2>{props.bio}</h2>
            <h2 style={{color:"blue"}}>{props.prof}</h2>
            <div>
                <img width='300' height='200' src={props.child} alt="cc" />
            </div>
            
         
            
        </div>
    )
}

export default Info

