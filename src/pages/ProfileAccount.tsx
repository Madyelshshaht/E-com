import { Heading } from "@components/common"
import { useAppSelector } from "@store/hooks"
import { Col, Row } from "react-bootstrap"


const ProfileAccount = () => {
    const Account_Info_User = useAppSelector((state) => state.auth.user)
    return (
        <>
            <Heading title="Account Info" />
            <Row>
                <Col md={6} xs={12} >
                    <div className="d-flex flex-column">
                        <span className="py-2 px-1 fs-5">FirstName </span>
                        <span className="rounded p-2" style={{ backgroundColor: "#99b2a4", color: "white"}}>{Account_Info_User?.firstName.toUpperCase()}</span>
                    </div>
                </Col>
                <Col md={6} xs={12} >
                    <div className="d-flex flex-column">
                        <span className="py-2 px-1 fs-5">lastName </span>
                        <span className="rounded p-2" style={{ backgroundColor: "#99b2a4", color: "white" }}>{Account_Info_User?.lastName.toUpperCase()}</span>
                    </div>
                </Col>
                <Col md={6} xs={12} >
                    <div className="d-flex flex-column">
                        <span className="py-2 px-1 fs-5">MyEmail </span>
                        <span className="rounded p-2" style={{ backgroundColor: "#99b2a4", color: "white"}}>{Account_Info_User?.email}</span>
                    </div>
                </Col>
                <Col md={6} xs={12} >
                    <div className="d-flex flex-column">
                        <span className="py-2 px-1 fs-5">ID </span>
                        <span className="rounded p-2" style={{ backgroundColor: "#99b2a4", color: "white"}}>{Account_Info_User?.id}</span>
                    </div>
                </Col>

            </Row>

        </>
    )
}

export default ProfileAccount