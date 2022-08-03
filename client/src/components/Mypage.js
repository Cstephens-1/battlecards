// import { Link } from "react-router-dom"
// import { useEffect } from "react/cjs/react.production.min"
// import styled from "styled-components"

import MasterBattlecardsLibrary from "./MasterBattlecardsLibrary"
import UserLibrary from "./UserLibary"
import React, { useEffect, useState } from 'react'
 
 
function Mypage({currentUser}){

    const [masterLibrary, setMasterLibrary] = useState([])
    const [userLibrary, setUserLibrary] = useState([])

    function fetchAllLibraries(){
        fetch("http://localhost:3000/units")
        .then(resp=>resp.json())
        .then(unit => setMasterLibrary(unit))
    }

    useEffect(fetchAllLibraries, [])

    function itsClicked(oneUnit){
        console.log('in myPage', oneUnit)
        userLibrary.push(oneUnit)
        console.log('this is the user library', userLibrary)

    }
    

    return(
        <div>
            <h1>Master Library</h1>
           <MasterBattlecardsLibrary masterLibrary={masterLibrary} itsClicked={itsClicked} />
           <UserLibrary userLibrary={userLibrary} itsClicked={itsClicked}/>
           <button>Purchase a unit</button>
        </div>
    )}
 
export default Mypage

