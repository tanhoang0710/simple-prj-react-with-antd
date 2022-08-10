import { Layout } from "antd";
import "./App.css";
import "antd/dist/antd.min.css";
import AppHeader from "./components/common/AppHeader";
import AppHome from "./views/AppHome";
const { Header, Content } = Layout;

function App() {
	return (
		<Layout className="mainLayout">
			<Header>
				<AppHeader />
			</Header>
			<Content>
				<AppHome />
			</Content>
		</Layout>
	);
}

export default App;
