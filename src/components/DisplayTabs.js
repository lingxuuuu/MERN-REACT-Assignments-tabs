import React from 'react'

function DisplayTabs(props) {

    const {idx, name, isSelected, toggleTab} = props;

    return (
        <div onClick={ ()=> toggleTab(idx)} style = {isSelected ? {backgroundColor: "blue"} : {backgroundColor: "pink"} } >
            <h3> {name} </h3>      
        </div>
    )
}

export default DisplayTabs
