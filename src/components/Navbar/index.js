import React,{useState,useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import {VscGithubInverted, VscMail } from 'react-icons/vsc'
import {IconContext} from 'react-icons/lib'
import {SiTwitter} from 'react-icons/si'
import {Nav, NavBarContainer,NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from "./NavBarElements"
import icon from '../../images/SQURLDarkGrey.svg'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  const changeNav = () => {
    if(window.scrollY >=80){
      setScroll(true);
    }else{
      setScroll(false);
    }
  }
  useEffect(()=>{
    changeNav();
    window.addEventListener("scroll", changeNav)
  }, [])
  return(
    <>
    <IconContext.Provider value={{color:'#141414', size:"2rem"}}>
      <Nav active={scroll} click={click}>
        <NavBarContainer>
          <NavLogo to='/'onClick={()=>window.scrollTo(0,0)}>
            <img src={icon} style={{height: "40px", marginRight: "12px", fontSize: "700"}}></img>
            SQURL
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            {/* <NavItem>
              <NavLinks href="#"><VscHome /></NavLinks>
            </NavItem> */}
          
            <NavItem>
              <NavLinks href="https://github.com/oslabs-beta/Squrl" target="_blank">
                <VscGithubInverted />
              </NavLinks>
            </NavItem>
          
            <NavItem>
              <NavLinks href="https://twitter.com/SqurlDB" target="_blank"><SiTwitter /></NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks href="mailto:mail@example.com" target="_blank"><VscMail /></NavLinks>
            </NavItem>

          </NavMenu>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;