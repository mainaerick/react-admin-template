import styled from "styled-components";
import Homepage from "./components/pages/homepage/Homepage";
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Userlist from "./components/pages/users/userslist/Userlist";
import EditUser from "./components/pages/users/edituser/Edituser";
import Newuser from "./components/pages/users/newuser/Newuser";
import Newproduct from "./components/pages/products/newproduct/Newproduct";
import Editproduct from "./components/pages/products/editproduct/Editproduct";
import Productlist from "./components/pages/products/productlist/Productlist";
const Container = styled.div`
  display: flex;
  margin-top: 10px;

  .link {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <Sidebar />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/users">
            <Userlist />
          </Route>
          <Route exact path="/user/:userId">
            <EditUser />
          </Route>
          <Route exact path="/newuser">
            <Newuser />
          </Route>

          <Route exact path="/products">
            <Productlist />
          </Route>
          <Route exact path="/product/:productId">
            <Editproduct />
          </Route>
          <Route exact path="/newproduct">
            <Newproduct />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
