import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey}></Line>
          <Tooltip></Tooltip>

          {grid && (
            <CartesianGrid
              stroke="#e0dfdf"
              strokeDasharray=" 5 5"
            ></CartesianGrid>
          )}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
