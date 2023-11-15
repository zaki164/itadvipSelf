import { HashRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Router from "./Router/Router";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Router />
      </Layout>
    </HashRouter>
  );
}

export default App;
