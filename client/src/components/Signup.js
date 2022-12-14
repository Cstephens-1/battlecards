import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
// import LoginButton from "../LogInButton.PNG"
// import signupfont from '../signupfont.PNG'

function Signup({ setCurrentUser }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            navigate('/mypage')
          })
        } else {
          setCurrentUser(null)
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <AppWrapper className="authForm">
      <FormWrapper>
      <form onSubmit={handleSubmit}>
        <H1styler>Sign Up</H1styler>
        <p>
          <LabelStyler htmlFor="username">Username </LabelStyler>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </p>
        <p>
          <LabelStyler htmlFor="password">Password </LabelStyler>
          <input type="password"name="" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </p>
        {/* <p>
          <LabelStyler htmlFor="password_confirmation">Password Confirmation </LabelStyler>
          <input type="password" name="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        </p> */}
        {/* <p>
          <LabelStyler>Name </LabelStyler>
          <input type="text" name="" value={name} onChange={(e) => setName(e.target.value)}/>
        </p> */}
        
        <p><ButtonStyler type="submit">Sign Up</ButtonStyler>
        <NavLink to="/">Log In</NavLink></p>
        {/* <p><ButtonStyler type="submit"></ButtonStyler></p> */}
        {/* <p><NavLink to="/signup"><img src={signupfont} alt="signup"/></NavLink></p> */}
      </form>
      </FormWrapper>
    </AppWrapper>
  )
}

export default Signup


const AppWrapper = styled.div`
background:repeating-linear-gradient(
  90deg, #fff, #fff 145px, #000 145px, #000 290px);
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
position: absolute;

`

const FormWrapper = styled.div`
  background-color: white;
text-align: center;
padding-bottom: 20px;
width: 50vw;
margin-left: 25vw;
margin-top: 25vh;

`

const NavLink = styled(Link)`
  font-family: Graduate;
  font-weight: 800;
  font-size: 24px;
  color: black;
  text-decoration: none;

  padding-top: 5px;
  &:hover {
    color: white;
    background: black;
  }
  /* position: relative; */
`;

const LabelStyler = styled.label`
  font-family: Graduate;
  font-weight: 600;
`


// const ButtonStyler = styled.button`
//   background-color:white;
//   color: black;
//   font-size: 25px;
//   padding-bottom: 2px;
//   &:hover {
//     color: white;
//     background: black;
//     padding-top: 5px;
//   }
// `

const ButtonStyler = styled.button`
border-style: none;
  background-color:white;
  color:black;
  font-size: 25px;
  font-family: Graduate;
  font-weight: 800;
  margin-right: 30px;
  &:hover {
    color: white;
    background: black;
    /* padding-top: 10px; */
  }
`

// const NavLink = styled(Link)`

//   color: black;
//   text-decoration: none;

//   padding-top: 5px;
//   &:hover {
//     color: white;
//     background: black;
//   }
//   /* position: relative; */
// `;

const H1styler = styled.h1`
    font-family: Graduate;
    font-size: 50px;
    font-weight: 1500;
    padding-top: 20px;
    /* margin-left: 40vw; */
`
