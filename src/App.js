import "./App.css";
import { ContainerSale } from "./components/ContainerSale";
import { BlogPage, HeaderPage, HomePage, InviteListPage, ServicesPage } from "./pages/";

function App() {
  return <div className="App">
    <div>
      <HeaderPage/>
      <HomePage/>
      <ServicesPage/>
      <ContainerSale/>
      <BlogPage/>
      <InviteListPage/>
    </div>
  </div>;
}

export default App;
