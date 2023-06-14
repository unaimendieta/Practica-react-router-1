import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from "./router/Router";
import Nav from "./components/nav/Nav";

const App = () => {
	return (
	<>
		<GlobalStyles />
		<BrowserRouter>
			<Nav />
			<Router />
		</BrowserRouter>
	</>
	);
};

export default App;
