import React, { useEffect, useState } from 'react'
import BattleCard from './BattleCard'

function UserLibrary({userLibrary, itsClicked}){

    function clickThis(thisUnit){
        itsClicked(thisUnit)
    }

    
    function displayMyCards(){
        return(
                userLibrary.map(eachUnit =>{
                    return(
                        <BattleCard eachUnit={eachUnit} key={eachUnit.id} clickThis={clickThis} />
                    )
                })
        )
    }

    console.log('in user library', userLibrary)
    return(
        <>
        <h1>This is the current users library</h1>
        <h1>{displayMyCards}</h1>
        </>
    )
}

export default UserLibrary