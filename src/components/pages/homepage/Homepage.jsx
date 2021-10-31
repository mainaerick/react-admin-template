import React from "react";
import styled from "styled-components";
import Chart from "../../chart/Chart";
import Featuredinfo from "../../featuredinfo/Featuredinfo";
import { userdata } from "../../../dummydata";
import Widgetlg from "../../widgetLg/Widgetlg";
import Widgetsm from "../../widgetSm/Widgetsm";

const Container = styled.div`
  flex: 4;
  background-color: #fff;
`;
const Homewidgets = styled.div`
  display: flex;
  margin: 20px;
`;
const Homepage = () => {
  return (
    <Container>
      <Featuredinfo />
      <Chart
        title={"Sales Analytics"}
        data={userdata}
        dataKey={"Active User"}
        grid
      />
      <Homewidgets>
        <Widgetsm />

        <Widgetlg />
      </Homewidgets>
    </Container>
  );
};

export default Homepage;
