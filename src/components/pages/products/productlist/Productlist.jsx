import { React, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { products } from "../../../../dummydata";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 4;
`;

const Rowusercontainer = styled.div`
  display: flex;
  align-items: center;
`;

const Rowavatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const Rowusername = styled.span``;
const Rowactionaction = styled.div`
  display: flex;
  align-items: center;
  .Rowactionactiondelete {
    color: red;
    cursor: pointer;
  }
`;
const Rowactionactionedit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 20px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
const Productlist = () => {
  const [data, setData] = useState(products);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Rowusercontainer>
            <Rowavatar src={params.row.img} />
            <Rowusername>{params.row.name}</Rowusername>
          </Rowusercontainer>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Rowactionaction>
            <Link to={"/product/" + params.row.id}>
              <Rowactionactionedit>Edit</Rowactionactionedit>
            </Link>
            <DeleteOutline
              className="Rowactionactiondelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </Rowactionaction>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onrow
      />
    </Container>
  );
};

export default Productlist;
