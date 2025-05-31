import {  Navigate } from "react-router-dom";

import useLogin from "@hooks/useLogin";

// Input temmplate
import { Input } from "@components/forms/Input";

// title
import { Heading } from "@components/common";

// BootStrab
import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";

const Login = () => {

    const {error, loading, accessToken ,formErrors , searchParams ,register ,handleSubmit  ,submitForm } = useLogin();

    if (accessToken) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Heading title="User Login" />
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    
                    {/* Show when you register  */}
                    {searchParams.get("message") === "account_created" && (
                        <Alert variant="success" className="text-center fw-medium">
                            Your account successfully created, please login
                        </Alert>
                    )}
                    {/* when you visit page protected you must login befor */}
                    {searchParams.get("message") === "login_required" && (
                        <Alert variant="success" className="text-center fw-medium">
                            Your must login to view the content
                        </Alert>
                    )}

                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Input
                            label="Email address"
                            type="text"
                            register={register}
                            name="email"
                            error={formErrors.email?.message}
                        />
                        <Input
                            label="Password"
                            type="password"
                            register={register}
                            name="password"
                            error={formErrors.password?.message}
                        />

                        <Button variant="success" type="submit" style={{ color: "white" }}>
                            {loading === "pending" ?
                                <>
                                    <Spinner animation="border" size="sm"></Spinner> Loading...
                                </>
                                : "Login"
                            }
                        </Button>
                        {error && (<p style={{ color: "#DC3545", marginTop: "10px" }}>
                            {error}
                        </p>)}
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Login;
