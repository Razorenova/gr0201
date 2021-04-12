import './App.css';
import {Menu} from "./components/Menu";
import {PageHeader} from "./components/PageHeader";
import {PostList} from "./components/PostList";
import {Footer} from "./components/Footer";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Route,BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Menu/>
              <PageHeader/>
              <Route exact path="/" render={()=><PostList/>} />
              <Route  path="/about" render={()=><About/>} />
              <Route  path="/contact" render={()=><Contact/>} />
              <hr/>
              <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;


