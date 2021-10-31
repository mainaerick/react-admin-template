import {
  CalendarToday,
  LocationCity,
  MailOutline,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const Usercontainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Usershow = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
`;
const Usershowtop = styled.div`
  display: flex;
  align-items: center;
`;
const Usershowtopimg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const Usertoptitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Usershowtopusername = styled.span`
  font-weight: 600;
`;
const Usershowtopusertitle = styled.span`
  font-weight: 300;
`;

const Usershowbottom = styled.div`
  margin-top: 20px;
`;
const Usershowbottomtitle = styled.div`
  font-weight: 600;
  color: lightgray;
  font-size: 14px;
`;
const Usershowbottominfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  .Usershowbottominfoicon {
    font-size: 16px;
  }
`;
const Usershowbottominfotitle = styled.div`
  margin-left: 10px;
`;

const Userupdate = styled.div`
  flex: 2;
  padding: 20px;
  box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.23);
`;
const Userupdatetitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const Userupdateform = styled.form`
  display: flex;
  justify-content: space-between;
`;
const Userupdateformleft = styled.div``;
const Userupdatefromitem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 500;
  }
`;
const Userupdateforminput = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;

const Userupdateformright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Userupdateupload = styled.div`
  display: flex;
  align-items: center;
  .uploadicon {
    cursor: pointer;
  }
`;
const Userupdateuploadimg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

const Userupdatebtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: green;
  color: white;
  font-weight: 600;
`;

const Edituser = () => {
  return (
    <Container>
      <Titlecontainer>
        <Title>Edit User</Title>
        <Link to="/newuser">
          <Addbutton>Create</Addbutton>
        </Link>
      </Titlecontainer>

      <Usercontainer>
        <Usershow>
          <Usershowtop>
            <Usershowtopimg
              src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <Usertoptitle>
              <Usershowtopusername>Anna Backer</Usershowtopusername>
              <Usershowtopusertitle>Software Enginner</Usershowtopusertitle>
            </Usertoptitle>
          </Usershowtop>

          <Usershowbottom>
            <Usershowbottomtitle>Account Details</Usershowbottomtitle>
            <Usershowbottominfo>
              <PermIdentity className="Usershowbottominfoicon" />
              <Usershowbottominfotitle>annabeck99</Usershowbottominfotitle>
            </Usershowbottominfo>
            <Usershowbottominfo>
              <CalendarToday className="Usershowbottominfoicon" />
              <Usershowbottominfotitle>10.12.1996</Usershowbottominfotitle>
            </Usershowbottominfo>
            <Usershowbottomtitle>Contact Details</Usershowbottomtitle>

            <Usershowbottominfo>
              <PhoneAndroid className="Usershowbottominfoicon" />
              <Usershowbottominfotitle>+254740212762</Usershowbottominfotitle>
            </Usershowbottominfo>
            <Usershowbottominfo>
              <MailOutlined className="Usershowbottominfoicon" />
              <Usershowbottominfotitle>
                kelli1n@gmail.com
              </Usershowbottominfotitle>
            </Usershowbottominfo>
            <Usershowbottominfo>
              <LocationCity className="Usershowbottominfoicon" />
              <Usershowbottominfotitle>Juja, Kiambu</Usershowbottominfotitle>
            </Usershowbottominfo>
          </Usershowbottom>
        </Usershow>
        <Userupdate>
          <Userupdatetitle>Edit</Userupdatetitle>
          <Userupdateform>
            <Userupdateformleft>
              <Userupdatefromitem>
                <label>Username</label>
                <Userupdateforminput type="text" placeholder="annabeck99" />
              </Userupdatefromitem>
              <Userupdatefromitem>
                <label>Full Name</label>
                <Userupdateforminput type="text" placeholder="Anna Backer" />
              </Userupdatefromitem>
              <Userupdatefromitem>
                <label>Email</label>
                <Userupdateforminput
                  type="email"
                  placeholder="kelli1n@gmail.com"
                />
              </Userupdatefromitem>
              <Userupdatefromitem>
                <label>Phone</label>
                <Userupdateforminput type="text" placeholder="+254740212762" />
              </Userupdatefromitem>

              <Userupdatefromitem>
                <label>Address</label>
                <Userupdateforminput type="text" placeholder="Juja, Kiambu" />
              </Userupdatefromitem>
            </Userupdateformleft>
            <Userupdateformright>
              <Userupdateupload>
                <Userupdateuploadimg src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Userupdateuploadimg>

                <label htmlFor="imgupload">
                  <Publish className="uploadicon" />
                </label>
                <input type="file" id="imgupload" style={{ display: "none" }} />
              </Userupdateupload>

              <Userupdatebtn>Update</Userupdatebtn>
            </Userupdateformright>
          </Userupdateform>
        </Userupdate>
      </Usercontainer>
    </Container>
  );
};

export default Edituser;
