import { Visibility } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  padding: 20px;
  margin-right: 20px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Listitem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
`;
const Username = styled.span`
  font-weight: 600;
`;
const Usertitle = styled.span`
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: rgb(228, 228, 250);
  cursor: pointer;

  .buttonicon {
    font-size: 16px;
    margin-right: 5px;
  }
`;

const Widgetsm = () => {
  return (
    <Container>
      <Title>New Members</Title>
      <List>
        <Listitem>
          <Img src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Img>
          <User>
            <Username>Shanel Mungai</Username>
            <Usertitle>UI designer</Usertitle>
          </User>
          <Button>
            <Visibility className="buttonicon" />
            Display
          </Button>
        </Listitem>
        <Listitem>
          <Img src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Img>
          <User>
            <Username>Shanel Mungai</Username>
            <Usertitle>UI designer</Usertitle>
          </User>
          <Button>
            <Visibility className="buttonicon" />
            Display
          </Button>
        </Listitem>
        <Listitem>
          <Img src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Img>
          <User>
            <Username>Shanel Mungai</Username>
            <Usertitle>UI designer</Usertitle>
          </User>
          <Button>
            <Visibility className="buttonicon" />
            Display
          </Button>
        </Listitem>
        <Listitem>
          <Img src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Img>
          <User>
            <Username>Shanel Mungai</Username>
            <Usertitle>UI designer</Usertitle>
          </User>
          <Button>
            <Visibility className="buttonicon" />
            Display
          </Button>
        </Listitem>
      </List>
    </Container>
  );
};

export default Widgetsm;
