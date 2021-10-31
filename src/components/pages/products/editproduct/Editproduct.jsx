import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Chart from "../../../chart/Chart";
import { productdata } from "../../../../dummydata";
import { Publish } from "@material-ui/icons";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const Titlecontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1``;
const Addbutton = styled.button`
  width: 80px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
`;
const Producttop = styled.div`
  display: flex;
`;
const Producttopleft = styled.div`
  flex: 1;
`;
const Producttopright = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
`;
const Productinfotop = styled.div`
  display: flex;
  align-items: center;
`;
const Productinfotopimg = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
`;
const Productinfotopname = styled.span`
  font-weight: 600;
`;
const Productinfobottom = styled.div`
  margin-top: 10px;
`;
const Productinfoitem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
const Productinfokey = styled.span``;
const Productinfovalue = styled.span`
  font-weight: 300;
`;
const Productbottom = styled.div`
  padding: 20px;
  margin: 20px;
  box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
`;
const Productform = styled.form`
  display: flex;
  justify-content: space-between;
`;
const Productformleft = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 10px;
    color: gray;
  }
`;
const Forminput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;
const FormSelect = styled.select`
  margin-bottom: 10px;
  height: 20px;
`;
const Selectoption = styled.option``;
const Productformright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Productformrightupload = styled.div`
  display: flex;
  align-items: center;
`;
const Productformrightuploadimg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  object-fit: cover;
  border-radius: 10px;
`;
const Productbutton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;
  padding: 5px;
  font-weight: 600;
`;
const Editproduct = () => {
  return (
    <Container>
      <Titlecontainer>
        <Title>Edit Product</Title>
        <Link to="/newproduct">
          <Addbutton>Create</Addbutton>
        </Link>
      </Titlecontainer>

      <Producttop>
        <Producttopleft>
          <Chart
            title={"Sales Perfomance"}
            data={productdata}
            dataKey={"Sales"}
            grid
          />
        </Producttopleft>
        <Producttopright>
          <Productinfotop>
            <Productinfotopimg src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Productinfotopimg>
            <Productinfotopname>Apple Airpods</Productinfotopname>
          </Productinfotop>

          <Productinfobottom>
            <Productinfoitem>
              <Productinfokey>id:</Productinfokey>
              <Productinfovalue>56778</Productinfovalue>
            </Productinfoitem>
            <Productinfoitem>
              <Productinfokey>sales:</Productinfokey>
              <Productinfovalue>56778</Productinfovalue>
            </Productinfoitem>
            <Productinfoitem>
              <Productinfokey>active:</Productinfokey>
              <Productinfovalue>yes</Productinfovalue>
            </Productinfoitem>
            <Productinfoitem>
              <Productinfokey>in stock:</Productinfokey>
              <Productinfovalue>no</Productinfovalue>
            </Productinfoitem>
          </Productinfobottom>
        </Producttopright>
      </Producttop>
      <Productbottom>
        <Productform>
          <Productformleft>
            <label htmlFor="">Product Name</label>
            <Forminput type="text" placeholder="Apple Airpods"></Forminput>
            <label htmlFor="">In Stock</label>
            <FormSelect name="instock" id="idstock">
              <Selectoption value="yes">Yes</Selectoption>
              <Selectoption value="no">No</Selectoption>
            </FormSelect>
            <label htmlFor="">Active</label>
            <FormSelect name="active" id="idactive">
              <Selectoption value="yes">Yes</Selectoption>
              <Selectoption value="no">No</Selectoption>
            </FormSelect>{" "}
          </Productformleft>
          <Productformright>
            <Productformrightupload>
              <Productformrightuploadimg src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </Productformrightupload>
            <Productbutton>Update</Productbutton>
          </Productformright>
        </Productform>
      </Productbottom>
    </Container>
  );
};

export default Editproduct;
