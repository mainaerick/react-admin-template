import React from "react";
import styled from "styled-components";
import { Publish } from "@material-ui/icons";

const Container = styled.div`
  flex: 4;
`;
const Title = styled.h1``;

const Productform = styled.form`
  margin-top: 10px;
`;
const Productformitem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
const Forminputfile = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 10px;
`;
const Forminput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 10px;
  border-bottom: 1px solid gray;
`;
const FormSelect = styled.select`
  margin-bottom: 10px;
  padding: 10px;
`;
const Selectoption = styled.option``;
const Productformright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Productbutton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;
  padding: 7px 10px;
  font-weight: 600;
  margin-top: 10px;
`;
const Newproduct = () => {
  return (
    <Container>
      <Title>New Product</Title>

      <Productform>
        <Productformitem>
          <label htmlFor="">Image</label>
          <Forminputfile type="file" id="file" />
        </Productformitem>
        <Productformitem>
          <label htmlFor="">Name</label>
          <Forminput type="text" placeholder="Apple Airpods"></Forminput>
        </Productformitem>
        <Productformitem>
          <label htmlFor="">Name</label>
          <Forminput type="text" placeholder="Apple Airpods"></Forminput>
        </Productformitem>
        <Productformitem>
          <label htmlFor="">Stock</label>
          <Forminput type="text" placeholder="123"></Forminput>
        </Productformitem>
        <Productformitem>
          <label htmlFor="">Active</label>
          <FormSelect name="active" id="idactive">
            <Selectoption value="yes">Yes</Selectoption>
            <Selectoption value="no">No</Selectoption>
          </FormSelect>{" "}
        </Productformitem>
        <Productbutton>Create</Productbutton>
      </Productform>
    </Container>
  );
};

export default Newproduct;
