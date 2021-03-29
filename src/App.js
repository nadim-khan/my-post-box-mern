import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import PostComponent from "./components/PostComponent";
import PostCreateComponent from "./components/PostCreateComponent";
import PostUpdateComponent from "./components/PostUpdateComponent";
import MenuBarComponent from "./components/view/MenuBarComponent";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
       <header className="App-header">
        <Router>
          <MenuBarComponent />
            <Container className="mt-4">
              <Route path="/" exact component={PostComponent} />
              <Route path="/add" exact component={PostCreateComponent} />
              <Route path="/update" exact component={PostUpdateComponent} />
            </Container>
        </Router>
       </header>
      
    </div>
  );
}

export default App;
