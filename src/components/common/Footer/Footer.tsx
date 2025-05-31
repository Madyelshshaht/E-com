import { Col, Form, InputGroup, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
const { footerContainer } = styles;


const footer = () => {
    return (
        <>
            <footer className={footerContainer}>
                <Row className="d-flex align-items-center">
                    <Col sm={8}>
                        <p>&copy; 2025 Mady eCom</p>
                        <p style={{ marginTop: "-18px" }}>
                            <NavLink to="" style={{ textDecoration: "none", color: "black" }}>Privacy Policy </NavLink>

                            |
                            <NavLink to="" style={{ textDecoration: "none", color: "black" }}> Terms & Conditions</NavLink>
                        </p>
                    </Col>
                    <Col sm={4} className="">
                        <InputGroup>
                            <Form.Control type="email" placeholder="Enter email" className="input-email " />
                            <button className="btn rounded ms-2 btn-outline-success">Send</button>
                        </InputGroup>
                    </Col>
                </Row>
            </footer>
        </>
    );
};

export default footer;
