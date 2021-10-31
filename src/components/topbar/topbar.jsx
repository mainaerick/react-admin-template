import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-self: center;
  padding: 0px 20px;
`;
const Right = styled.div``;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;
const Icons = styled.span`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;
const Notificationbadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: -1px;
  color: #fff;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  font-size: 10px;
`;
const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <Logo>Logo</Logo>
        </Right>
        <Left>
          <Icons>
            <NotificationsNone />
            <Notificationbadge>2</Notificationbadge>
          </Icons>
          <Icons>
            <Language />
          </Icons>
          <Icons>
            <Settings />
          </Icons>
          <Avatar src="https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
