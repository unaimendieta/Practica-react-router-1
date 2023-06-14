import { Route, Routes } from "react-router-dom";
import PlanetCard from "../components/planetCard/PlanetCard";
import * as PLANET_DATA from "../constants/data";
const Router = () => {
	return (
        <Routes>
            <Route path="/" element={<PlanetCard planetData={PLANET_DATA.default[0]} color="#419EBB"/>} />
            <Route path="/venus" element={<PlanetCard planetData={PLANET_DATA.default[1]} color="#EDA249"/>} />
            <Route path="/earth" element={<PlanetCard planetData={PLANET_DATA.default[2]} color="#6D2ED5"/>} />
            <Route path="/mars" element={<PlanetCard planetData={PLANET_DATA.default[3]} color="#D14C32"/>} />
            <Route path="/jupiter" element={<PlanetCard planetData={PLANET_DATA.default[4]} color="#D83A34"/>} />
            <Route path="/saturn" element={<PlanetCard planetData={PLANET_DATA.default[5]} color="#CD5120"/>} />
            <Route path="/uranus" element={<PlanetCard planetData={PLANET_DATA.default[6]} color="#1EC1A2"/>} />
            <Route path="/neptune" element={<PlanetCard planetData={PLANET_DATA.default[7]} color="#2D68F0"/>} />
        </Routes>
	);
};

export default Router;
