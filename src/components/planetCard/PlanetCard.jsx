import { useState } from "react";
import { Card, CardTitle, CardValue, GeologyImage, ImageContainer, ImageStyled, PlanetCardContainer, PlanetDesc, PlanetDescContainer, PlanetInfo, PlanetInfoContainer, PlanetName, PlanetSection, PlanetSectionNum, PlanetSectionTitle, PlanetSections, PlanetSource, PlanetStatsContainer, Source } from "./styles";

const PlanetCard = ({planetData, color}) => {
    const { name, rotation, revolution, radius, temperature, images } = planetData;
    const [currentPlantetData, setCurrentPlantetData] = useState({
        actual: "overview"
	});
	return (
	<> 
        <PlanetCardContainer >
          <PlanetInfoContainer>
            <ImageContainer>
                <ImageStyled src={currentPlantetData.actual!=="geology" ? (images[currentPlantetData.actual]) :(images.overview)} alt=""></ImageStyled>
                {currentPlantetData.actual==="geology" && (<GeologyImage src={images.geology} alt="geology"></GeologyImage>)}
            </ImageContainer>
            <PlanetInfo>
                <PlanetName>{name}</PlanetName>
                <PlanetDescContainer>
                    <PlanetDesc>{planetData[currentPlantetData.actual].content}</PlanetDesc>
                    <PlanetSource>
                        <span>Source:</span>
                        <Source href={planetData[currentPlantetData.actual].source}>Wikipedia</Source>
                        <img src="./images/icon-source.svg" alt=""/>
                    </PlanetSource>
                </PlanetDescContainer>
                <PlanetSections>
                    <PlanetSection color={color} className={(currentPlantetData.actual==="overview" && 'active')} onClick={()=>handleChange("overview",setCurrentPlantetData)}>
                        <PlanetSectionNum>01</PlanetSectionNum>
                        <PlanetSectionTitle>OVERVIEW</PlanetSectionTitle>
                    </PlanetSection>
                    <PlanetSection color={color} className={(currentPlantetData.actual==="structure" && 'active')} onClick={()=>handleChange("structure",setCurrentPlantetData)}>
                        <PlanetSectionNum>02</PlanetSectionNum>
                        <PlanetSectionTitle>INTERNAL STRUCTURE</PlanetSectionTitle>
                    </PlanetSection>
                    <PlanetSection color={color} className={(currentPlantetData.actual==="geology" && 'active')} onClick={()=>handleChange("geology",setCurrentPlantetData)}>
                        <PlanetSectionNum>03</PlanetSectionNum>
                        <PlanetSectionTitle>SURFACE GEOLOGY</PlanetSectionTitle>
                    </PlanetSection>
                </PlanetSections>
            </PlanetInfo>
          </PlanetInfoContainer>
          <PlanetStatsContainer>
            <Card>
                <CardTitle>ROTATION TIME</CardTitle>
                <CardValue>{rotation}</CardValue>
            </Card>
            <Card>
                <CardTitle>REVOLUTION TIME</CardTitle>
                <CardValue>{revolution}</CardValue>
            </Card>
            <Card>
                <CardTitle>RADIUS</CardTitle>
                <CardValue>{radius}</CardValue>
            </Card>
            <Card>
                <CardTitle>AVERAGE TEMP.</CardTitle>
                <CardValue>{temperature}</CardValue>
            </Card>
          </PlanetStatsContainer>
        </PlanetCardContainer>
	</>
	);
};
const handleChange = (current, setCurrentPlantetData) => {
	setCurrentPlantetData({ actual:current });
};
export default PlanetCard;