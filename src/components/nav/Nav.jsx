import { HeaderTitle, Menu, NavContainer, StyledLink } from "./styles";

const Nav = () => {
	return (
	<>
        <NavContainer>
            <HeaderTitle>THE PLANETS</HeaderTitle>
            <Menu>
                <StyledLink to="/">MERCURY</StyledLink>
                <StyledLink to="/venus">VENUS</StyledLink>
                <StyledLink to="/earth">EARTH</StyledLink>
                <StyledLink to="/mars">MARS</StyledLink>
                <StyledLink to="/jupiter">JUPITER</StyledLink>
                <StyledLink to="/saturn">SATURN</StyledLink>
                <StyledLink to="/uranus">URANUS</StyledLink>
                <StyledLink to="/neptune">NEPTUNE</StyledLink>
            </Menu>
        </NavContainer>
	</>
	);
};

export default Nav;
