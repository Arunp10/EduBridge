import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
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
    name: "Mr. Amir Ali",
    description: "Data Science",
    status: "Confirmed",
  },
  {
    avatar: "https://example.com/avatar2.jpg",
    time: "2:00 PM",
    date: "Feb 22, 2023",
    name: "Mr. Amir Ali",
    description: "Machine Framework Assets",
    status: "Confirmed",
  },
];

const ListItem = ({ avatar, time, date, name, description, status }) => (
  <>
  <Card className="w-75">
    <Card.Body>
      <Row>
        <Col xs={3} className="d-flex align-items-center">
          <Image
            src={profileImage }
            roundedCircle
            style={{ width: "100px", height: "100px", marginRight: "20px" }}
          />
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs={12}>
              <h6 className="mb-1">{name}</h6>
            </Col>
            <Col xs={12}>
              <small className="text-muted">{description}</small>
            </Col>
            <Col xs={12}>
              <small className="text-muted">Time: {time}</small>
            </Col>
            <Col xs={12}>
              <small className="text-muted">Date: {date}</small>
            </Col>
            <Col xs={12}>
              <small className="text-muted">Status: {status}</small>
            </Col>
          </Row>
        </Col>
      </Row>
      <Col xs={3} className="d-flex align-items-center">
        <Row>
          <button type="button" class="btn btn-danger">
            Cancel Appointment
          </button>
        </Row>
      </Col>
    </Card.Body>
    
  </Card>
  <br></br>
  </>
);

const Appointment = () => (
  
  <div className="container">
    <div className="row">
    <Sidebar />
    <div className="col-9">
      {data.map((item, index) => (
        <ListItem key={index} {...item   } />
      ))
      
      }
      </div>
    </div>
  </div>
);
export default Appointment;
