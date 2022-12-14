import {Link} from "react-router-dom"
import styled from "styled-components"
// import Button from 'react-bootstrap/Button';
 
function NavBar({handleLogout, currentUser}){
    return(
        <NavBarStyler>
          <NavLink to="/mypage">Home</NavLink>
          <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
          {currentUser.username === 'Cory' ? <NavLink to="/toc">Table Of Contents</NavLink> : <></>}
         <SpanStyler>Welcome, {currentUser.username}</SpanStyler>
        </NavBarStyler>
    )
}
 
 
 
export default NavBar

const NavBarStyler = styled.div`
    background-color: navy;
    /* height: 100vh; */
    width: 150vw;
    display: flex;
    flex-direction: row;
    /* position: fixed; */
`

// const ButtonStyler = styled.button`
//     border-radius: 8px;
//     font-size: 22px;
//     margin: 4px;
//     background-color: white;

    
// `

const NavLink = styled(Link)`
font-family: Graduate;
  color: orange;
  text-decoration: none;
  padding:20px;
  &:hover {
    color: white;
    background: navy;
  }
  `

  const SpanStyler=styled.span`
    font-family: Graduate;
  color: orange;
  text-decoration: none;
  padding:20px;
  right: 0;
  position: absolute;
  `