import { Layout } from "antd";
import "./App.css";
import "antd/dist/antd.min.css";
import AppHeader from "./components/common/AppHeader";
const { Header } = Layout;

function App() {
	return (
		<Layout className="mainLayout">
			<Header>
				<AppHeader />
			</Header>
		</Layout>
	);
}

export default App;
