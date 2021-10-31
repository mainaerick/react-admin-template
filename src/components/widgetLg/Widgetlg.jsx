import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 2;
  box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  padding: 20px;
`;
const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const Table = styled.table`
  border-spacing: 20px;
  width: 100%;
`;
const Tablerow = styled.tr``;
const Tablehead = styled.th`
  text-align: left;
`;
const Tabledata = styled.td``;
const Tableimg = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;
const Tabledatauser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Tabledataname = styled.span``;

const Tabledatadate = styled.td`
  font-weight: 300;
`;
const Tabledataamaount = styled.td`
  font-weight: 300;
`;
const Tabledatastatus = styled.td``;
const Tabledatabutton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  cursor: pointer;

  &.Approved {
    background-color: #e5faf2;
    color: #3bb077;
  }
  &.Declined {
    background-color: #fff0f1;
    color: #d95087;
  }
  &.Pending {
    background-color: #ebf1fe;
    color: #2a7ade;
  }
`;

const Tabledatabutton_responsive = ({ type }) => {
  return <Tabledatabutton className={type}>{type}</Tabledatabutton>;
};
const Widgetlg = () => {
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <Tablerow>
          <Tablehead>Customer</Tablehead>
          <Tablehead>Date</Tablehead>
          <Tablehead>Amount</Tablehead>
          <Tablehead>Status</Tablehead>
        </Tablerow>

        <Tablerow>
          <Tabledatauser>
            <Tableimg src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Tableimg>
            <Tabledataname>Susan Carol</Tabledataname>
          </Tabledatauser>
          <Tabledatadate>28 Oct 2021</Tabledatadate>
          <Tabledataamaount>Ksh122.00</Tabledataamaount>
          <Tabledatastatus>
            <Tabledatabutton_responsive type="Approved"></Tabledatabutton_responsive>
          </Tabledatastatus>
        </Tablerow>

        <Tablerow>
          <Tabledatauser>
            <Tableimg src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Tableimg>
            <Tabledataname>Susan Carol</Tabledataname>
          </Tabledatauser>
          <Tabledatadate>28 Oct 2021</Tabledatadate>
          <Tabledataamaount>Ksh122.00</Tabledataamaount>
          <Tabledatastatus>
            <Tabledatabutton_responsive type="Pending"></Tabledatabutton_responsive>
          </Tabledatastatus>
        </Tablerow>
        <Tablerow>
          <Tabledatauser>
            <Tableimg src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Tableimg>
            <Tabledataname>Susan Carol</Tabledataname>
          </Tabledatauser>
          <Tabledatadate>28 Oct 2021</Tabledatadate>
          <Tabledataamaount>Ksh122.00</Tabledataamaount>
          <Tabledatastatus>
            <Tabledatabutton_responsive type="Declined"></Tabledatabutton_responsive>
          </Tabledatastatus>
        </Tablerow>
      </Table>
    </Container>
  );
};

export default Widgetlg;
