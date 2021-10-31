import React from "react";
import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Featureditem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
`;

const Featuredtitle = styled.div`
  font-size: 20px;
`;
const FeaturedmoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;
const Featuredmoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const Featuredmoneyrate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;

  .featuredicon {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }
  .featuredicon.negative {
    color: red;
  }
`;
const Featuredsub = styled.span`
  font-size: 15px;
  color: grey;
`;
const Featuredinfo = () => {
  return (
    <Container>
      <Featureditem>
        <Featuredtitle>Revenue</Featuredtitle>
        <FeaturedmoneyContainer>
          <Featuredmoney>Ksh2,415</Featuredmoney>
          <Featuredmoneyrate>
            -11.4
            <ArrowDownward className="featuredicon negative" />
          </Featuredmoneyrate>
        </FeaturedmoneyContainer>
        <Featuredsub>Compare to last month</Featuredsub>
      </Featureditem>
      <Featureditem>
        <Featuredtitle>Sales</Featuredtitle>
        <FeaturedmoneyContainer>
          <Featuredmoney>Ksh2,415</Featuredmoney>
          <Featuredmoneyrate>
            -11.4
            <ArrowDownward className="featuredicon negative" />
          </Featuredmoneyrate>
        </FeaturedmoneyContainer>
        <Featuredsub>Compare to last month</Featuredsub>
      </Featureditem>
      <Featureditem>
        <Featuredtitle>Cost</Featuredtitle>
        <FeaturedmoneyContainer>
          <Featuredmoney>Ksh2,415</Featuredmoney>
          <Featuredmoneyrate>
            +2.4
            <ArrowUpward className="featuredicon" />
          </Featuredmoneyrate>
        </FeaturedmoneyContainer>
        <Featuredsub>Compare to last month</Featuredsub>
      </Featureditem>
    </Container>
  );
};

export default Featuredinfo;
