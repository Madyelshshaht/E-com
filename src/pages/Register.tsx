
import { Navigate } from "react-router-dom";

import { Input } from "@components/forms/Input";
import { Heading } from "@components/common";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import useRegister from "@hooks/useRegister";



// Destructuring

const Register = () => {

    const { loading, error, accessToken, formErrors, EmailAvailabiiltyStatus, register, handleSubmit, submitForm, OnBlurHandler } = useRegister();

    if (accessToken) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Heading title="User Registration" />
            <Row className="mb-5">
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Input
                            label="First Name"
                            type="text"
                            name="firstName"
                            register={register} // (...register("firstName")
                            error={formErrors.firstName?.message}
                        />
                        <Input
                            label="Last Name"
                            type="text"
                            name="lastName"
                            register={register}
                            error={formErrors.lastName?.message}
                        />
                        <Input
                            label="Email"
                            type="text"
                            name="email"
                            register={register}
                            onBlur={OnBlurHandler}
                            error={
                                formErrors.email?.message
                                    ? formErrors.email?.message
                                    : EmailAvailabiiltyStatus === "notAvialabla"
                                        ? "This email already is used ."
                                        : EmailAvailabiiltyStatus === "failed"
                                            ? "Error from the server."
                                            : ""
                            }
                            formText={
                                EmailAvailabiiltyStatus === "checking"
                                    ? "We`re currently the availability of this email address. Please wait a moment ."
                                    : ""
                            }
                            success={
                                EmailAvailabiiltyStatus === "available"
                                    ? "This email is available for use ."
                                    : ""
                            }
                            disabled={
                                EmailAvailabiiltyStatus === "checking"
                                    ? true
                                    : false || loading === "pending"
                            }
                        />
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            register={register}
                            error={formErrors.password?.message}
                        />
                        <Input
                            label="confirm Password"
                            type="password"
                            name="confirmPassword"
                            register={register}
                            error={formErrors.confirmPassword?.message}
                        />
                        <Button
                            variant="success"
                            type="submit"
                            style={{ color: "white" }}
                            disabled={
                                EmailAvailabiiltyStatus === "checking"
                                    ? true
                                    : EmailAvailabiiltyStatus === "notAvialabla"
                                        ? true
                                        : false
                            }
                        >
                            {loading === "pending" ? (
                                <>
                                    <Spinner animation="border" size="sm"></Spinner> laoding...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                        {error && (
                            <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
                        )}
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Register;
