import React, { useEffect, useState } from 'react'
import BattleCard from './BattleCard'
function MasterBattlecardsLibrary({masterLibrary, itsClicked}){

    
    function clickThis(thisUnit){
        console.log(thisUnit)
        itsClicked(thisUnit)
    }



    console.log(masterLibrary)

    function displayCards(){
        return(
                masterLibrary.map(eachUnit =>{
                    return(
                        <BattleCard eachUnit={eachUnit} clickThis={clickThis} key={eachUnit.id} />
                    )
                })
        )
    }


    return(
        <h1>{displayCards()}</h1>
    )
}

export default MasterBattlecardsLibrary