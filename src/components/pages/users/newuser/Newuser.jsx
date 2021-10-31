import { NoEncryption } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const Title = styled.h1``;

const Newuserform = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Formitem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
`;
const Forminput = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Newusergender = styled.div`
  label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`;
const Forminputradio = styled.input`
  margin-top: 15px;
`;
const Newuserselect = styled.select`
  height: 40px;
  border-radius: 5px;
`;
const Newuserselectoption = styled.option``;
const Formbutton = styled.button`
  width: 200px;
  border: none;
  background-color: green;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
const Newuser = () => {
  return (
    <Container>
      <Title>New User</Title>
      <Newuserform>
        <Formitem>
          <label for="">Username</label>
          <Forminput type="text" placeholder="john" />
        </Formitem>
        <Formitem>
          <label for="">Full name</label>
          <Forminput type="text" placeholder="john doe" />
        </Formitem>
        <Formitem>
          <label for="">Email</label>
          <Forminput type="email" placeholder="mnm@gmail.com" />
        </Formitem>
        <Formitem>
          <label for="">Password</label>
          <Forminput type="password" placeholder="password" />
        </Formitem>
        <Formitem>
          <label for="">Phone</label>
          <Forminput type="text" placeholder="+254740212762" />
        </Formitem>
        <Formitem>
          <label for="">Address</label>
          <Forminput type="text" placeholder="Juja, Kiambu" />
        </Formitem>
        <Formitem>
          <label for="">Gender</label>
          <Newusergender>
            <Forminputradio type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <Forminputradio
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label for="female">Female</label>
            <Forminputradio
              type="radio"
              name="gender"
              id="other"
              value="other"
            />
            <label for="other">Other</label>
          </Newusergender>
        </Formitem>
        <Formitem>
          <label>Active</label>
          <Newuserselect>
            <Newuserselectoption value="yes">Yes</Newuserselectoption>
            <Newuserselectoption value="no">No</Newuserselectoption>
          </Newuserselect>
        </Formitem>

        <Formitem>
          <Formbutton>Create</Formbutton>
        </Formitem>
      </Newuserform>
    </Container>
  );
};

export default Newuser;
