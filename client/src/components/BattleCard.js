import styled from "styled-components"
import React, { useEffect, useState } from 'react'

function BattleCard({eachUnit, clickThis}){

    const [userLibrary, setUserLibrary] = useState([])
    console.log("this is a unit", eachUnit)

    function handleClick(){
        clickThis(eachUnit)
    }
    return(
        <BattleCardStyler>
            <h5>name:{eachUnit.name}</h5>
            <h5>health:{eachUnit.health}</h5>
            <h5>rarity: {eachUnit.rarity}</h5>
            <h5>cost: {eachUnit.cost}</h5>
            <button onClick={handleClick}>Buy</button>
        </BattleCardStyler>
    )
}

export default BattleCard

const BattleCardStyler = styled.div`
    border: 5px solid black;
    width: 20%;

`