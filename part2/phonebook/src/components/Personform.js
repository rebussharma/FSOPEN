import React from 'react'

const PersonForm = (props)=>{
    return(
        <>
        <form>
            <h2>Add New Contact</h2>
            <div>
              name: <input value={props.valueName} onChange={props.onChangeName}/>
            </div>
            <div>
              number: <input value={props.valueNumber} onChange={props.onChangeNumber} />
            </div>
            <div>
              <button type="submit" onClick={props.onClick}>add</button>
            </div>
        </form>
        </>
    )
}

export default PersonForm