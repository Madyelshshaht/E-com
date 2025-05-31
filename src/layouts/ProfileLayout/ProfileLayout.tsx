import { Row , Col  } from "react-bootstrap"
import { Outlet } from "react-router-dom"
const ProfileLayout = () => {
    return (
        <Row>
            {/* <Col md={3}>
                <ListGroup>
                    <ListGroup.Item as={NavLink} to="" end>Acount Info</ListGroup.Item>
                    <ListGroup.Item as={NavLink} to="orders">Orders</ListGroup.Item>
                </ListGroup>
            </Col> */}
            <Col><Outlet /></Col>
        </Row>
    )
}

export default ProfileLayout