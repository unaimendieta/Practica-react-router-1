import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding:0 32px ;
    width: 100%;
    height: 85px;
    border-bottom: 1px white solid;
`;

const HeaderTitle = styled.h1`
    
    font-family: 'Antonio', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    color: #FFFFFF;
`;

const Menu = styled.div`
    
    display: flex;
    flex-direction: row;
    gap: 33px;
`;

const StyledLink = styled(NavLink)`
    
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 1px;
    color: #FFFFFF;
    text-decoration: none;
`;

export {NavContainer,HeaderTitle,Menu,StyledLink};