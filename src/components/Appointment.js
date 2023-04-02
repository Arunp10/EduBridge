// import { } from "@mui/icons-material";
import React from "react";
import { Card, Row, Col, Image,Button } from "react-bootstrap";
import profileImage from "./Assets/teacher1.jpg";
import Sidebar from "./SideBar";

const data = [
  {
    avatar: "./Assets/teacher1.jpg",
    time: "1:30 PM",
    date: "Feb 21, 2023",
    name: "Mr. Amir Ali",
    description: "Machine Learning",
    status: "Pending",
  },
  {
    avatar: "Assets/teacher2.png",
    time: "2:00 PM",
    date: "Feb 28, 2023",
    name: "Mr. Amir Ali",
    description: "Deep Learning",
    status: "Confirmed",
  },
  {
    avatar: "https://example.com/avatar2.jpg",
    time: "2:00 PM",
    date: "Feb 21, 2023",
    name: "Mr. Muhammad Qazami",
    description: "Data Science",
    status: "Confirmed",
  },
]

const ListItem = ({ avatar, time, date, name, description, status }) => (
    <>
    <Card className="container">
      <Card.Body>
        <Row>
          <Col xs={3} className="d-flex align-items-center">
            <Image
              src={profileImage}
              roundedCircle
              style={{ width: "80px", height: "80px", marginRight: "10px" }}
            /></Col>
            <Col><Card.Text>{name}</Card.Text></Col>
            <Col><Card.Text>{description}</Card.Text></Col>
            <Col><Card.Text>{time}</Card.Text></Col>
            <Col><Card.Text>{date}</Card.Text></Col>
            <Col><Card.Text>{status}</Card.Text></Col>
            <Col><Button variant="danger">Cancel</Button></Col>
            </Row>
      </Card.Body>
    </Card>
    <br />
    </>
  );
  
  const Appointment = () => (
    <>
    <div className="container mt-4">
      <div className="row">
      <Sidebar />
      <div className="col-9">
        {data.map((item, index) => (
          <ListItem key={index} {...item} />
        ))
        }
        </div>
      </div>
    </div>
    </>
)
export default Appointment




