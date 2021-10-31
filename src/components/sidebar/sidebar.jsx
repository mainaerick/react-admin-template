import { React, useState } from "react";
import styled from "styled-components";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link, NavLink, useLocation } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: rgb(252, 251, 251);
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const Menu = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.h3`
  color: #b4b4b4;
  font-size: 14px;
`;
const List = styled.ul`
  list-style: none;
  padding: 5px;
  .active {
    background-color: rgb(228, 228, 250);
  }
`;
const Listitem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: rgb(228, 228, 250);
  }
`;
const Icons = styled.div`
  margin-right: 5px;
  font-size: 20px !important;
`;

const Sidebar = () => {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const [active, setclassactive] = useState("");

  const listitemstatuschange = () => {
    setclassactive("active");
  };
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Link to="/" className="link">
              <Listitem className={splitLocation[1] === "" ? "active" : ""}>
                <Icons>
                  <LineStyle />
                </Icons>
                Home
              </Listitem>
            </Link>
            <Listitem>
              <Icons>
                <Timeline />
              </Icons>
              Anaytics
            </Listitem>
            <Listitem>
              <Icons>
                <TrendingUp />
              </Icons>
              Sales
            </Listitem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <Link to="/users" className="link">
              <Listitem
                className={splitLocation[1] === "users" ? "active" : ""}
              >
                <Icons>
                  <PermIdentity />
                </Icons>
                Users
              </Listitem>
            </Link>
            <Link to="/products" className="link">
              <Listitem
                className={splitLocation[1] === "products" ? "active" : ""}
              >
                <Icons>
                  <Storefront />
                </Icons>
                Products
              </Listitem>
            </Link>

            <Listitem>
              <Icons>
                <AttachMoney />
              </Icons>
              Transactions
            </Listitem>
            <Listitem>
              <Icons>
                <Report />
              </Icons>
              Reports
            </Listitem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <Listitem>
              <Icons>
                <MailOutline />
              </Icons>
              Mail
            </Listitem>
            <Listitem>
              <Icons>
                <DynamicFeed />
              </Icons>
              Feedback
            </Listitem>
            <Listitem>
              <Icons>
                <ChatBubbleOutline />
              </Icons>
              Messages
            </Listitem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <Listitem>
              <Icons>
                <WorkOutline />
              </Icons>
              Manage
            </Listitem>
            <Listitem>
              <Icons>
                <BarChart />
              </Icons>
              Anaytics
            </Listitem>
            <Listitem>
              <Icons>
                <Report />
              </Icons>
              Reports
            </Listitem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
