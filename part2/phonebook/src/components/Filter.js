import React from 'react'

const Filter =(props)=>{
    return(
        <>
            <h2>Search for contact</h2>
            <div>
                search by name: <input value = {props.value} onChange={props.onChange} />
            </div>
        </>
    )
}

export default Filter