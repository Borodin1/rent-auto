import "./App.css";
import { ContainerSale } from "./components/ContainerSale";
import { BlogPage, FooterPage, HeaderPage, HomePage, InviteListPage, ServicesPage } from "./pages/";

function App() {
  return <div className="App">
    <div>
      <HeaderPage/>
      <HomePage/>
      <ServicesPage/>
      <ContainerSale/>
  <BlogPage/>
<InviteListPage/>
   <FooterPage/>
    </div>
  </div>;
}

export default App;
