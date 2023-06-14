import styled from "styled-components";

const PlanetCardContainer = styled.main`
    width: 100%;
    height: 100%;
    padding: 50px 165px 0;
    display: grid;
    grid-template-rows: 1fr 128px;
    gap: 87px;
`;
const PlanetInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 350px;
`;
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
const ImageStyled = styled.img`
    height: 290px;
    width: 290px;
`;
const GeologyImage = styled.img`
    position: absolute;
    bottom: 0;
    height: 200px;
    width: 164px;
`;

const PlanetInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const PlanetName = styled.h1`
    font-family: 'Antonio', sans-serif;
    font-weight: 400;
    font-size: 80px;
    text-transform: uppercase;
    color: #FFFFFF;
`;
const PlanetDescContainer = styled.div`
    padding-top: 23px;
    padding-bottom: 39px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
const PlanetDesc = styled.p`
    font-family: 'League Spartan', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;

`;
const PlanetSource = styled.div`
    font-family: 'League Spartan', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #838391;
    display: flex;
    gap: 4px;

`;
const Source = styled.a`
    font-weight: 700;
    text-decoration-line: underline;
    color: white;
`;
const PlanetSections = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const PlanetSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 28px;
    padding: 16px 28px;
    border: 1px solid #838391;
    transition:  0.3s all ease-in-out;
    cursor: pointer;
    :hover{
        background: #38384F;
        transition:  0.3s all ease-in-out;
    }
    &.active{
        
        background: ${props => props.color};
    }
`;
const PlanetSectionNum = styled.p`
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: #838391;

`;
const PlanetSectionTitle = styled.p`
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: #ffffff;

`;









const PlanetStatsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 128px;
    gap: 30px;
`;
const Card = styled.div`
    padding-left: 23px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    mix-blend-mode: normal;
    border: 1px solid #838391;
`;
const CardTitle = styled.span`
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: 11px;
    color: #838391;
`;
const CardValue = styled.p`
    font-family: 'Antonio', sans-serif;
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    text-transform: uppercase;
`;


export {PlanetCardContainer,PlanetInfoContainer,PlanetStatsContainer,Card,CardTitle,CardValue,ImageContainer, ImageStyled,GeologyImage,PlanetDesc,PlanetDescContainer,PlanetInfo,PlanetName,PlanetSection,PlanetSectionNum,PlanetSectionTitle,PlanetSections,PlanetSource,Source};