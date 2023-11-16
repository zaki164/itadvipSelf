import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Router from "./Router/Router";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
