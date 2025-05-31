import { Col, Container, Row } from "react-bootstrap";
import AboutHeor from "../assets/img_Home/AboutHero.jpg";
import girl from "../assets/img_Home/girl_banner.png";
import boy from "../assets/img_Home/boy_Banner.png";

import Abo1 from "../assets/img_Home/Abo1.png";
import Abo2 from "../assets/img_Home/abo2.png";
import Abo3 from "../assets/img_Home/abo3.png";
import Abo4 from "../assets/img_Home/abo4.png";

// 
import t1 from "@assets/img_Home/t1.png";
import t2 from "@assets/img_Home/t2.png";
import t3 from "@assets/img_Home/t3.png";


import Item_Img from "@components/Home/Item_Img";

type Item_Type = {
    img?: string;
    title: string;
    price?: number;
    Link_Item: string;
};

const AboutUs = ({ title, img, price, Link_Item }: Item_Type) => {
    return (
        <Container>
            <div className="About pt-3">
                <div className="img_Hero py-3">
                    <img src={AboutHeor} alt="AboutHeor" className="img-fluid" />
                </div>

                <div className="banners py-5">
                    <Row className="d-flex justify-content-center align-items-center  gap-5">
                        <Col sm={6} md={6} lg={5} className="mb-2 ">
                            <div className="img_Content ">
                                <img
                                    src={girl}
                                    alt="img_1"
                                    className="img-fluid rounded"
                                    style={{
                                        height: "350px",
                                        width: "100%",
                                        content: "Shop Now",
                                    }}
                                />
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={5} className="mb-2">
                            <div className="img_Content ">
                                <img
                                    src={boy}
                                    alt="img_1"
                                    className="img-fluid rounded"
                                    style={{
                                        height: "350px",
                                        width: "100%",
                                        content: "Shop Now",
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="Top_Sellers py-5 text-center">
                    <h2 className="fw-bold text-center pb-3">Top Sellers</h2>
                    <div className="Arivals pt-3">
                        <Row>
                            <Item_Img
                                img={Abo1}
                                title="Gray Polo Shirt"
                                price={20}
                                Link_Item={`/categories/products/men`}
                            />
                            <Item_Img
                                img={Abo2}
                                title="Gray Polo Shirt"
                                price={50}
                                Link_Item={`/categories/products/men`}
                            />
                            <Item_Img
                                img={Abo3}
                                title="Gray Polo Shirt"
                                price={15}
                                Link_Item={`/categories/products/men`}
                            />
                            <Item_Img
                                img={Abo4}
                                title="Gray Polo Shirt"
                                price={30}
                                Link_Item={`/categories/products/men`}
                            />
                        </Row>
                    </div>
                </div>

                <div className="Testimonials py-5">
                    <h2 className="text-center">Testimonials</h2>
                    <Row className="Testimonials-img d-flex align-items-center text-center text-md-start py-5" >
                        <Col sm={12} md={6} lg={3} className="Iamge"  >
                            <img src={t1} alt="" className="rounded-circle img-fluid m-auto " />
                        </Col>
                        <Col sm={12} md={6} lg={9} className="info p-2 p-md-5">
                            <p className="fw-bold fs-4">
                                Once we ordered some accessories items and we got the products
                                delivered in our doorstep, the customer support was super
                                helpful and they answered all my queries.
                            </p>
                            <p className="fs-5">Stacy</p>
                        </Col>
                    </Row>
                    <Row className="Testimonials-img d-flex align-items-center text-center text-md-start py-5">
                        <Col sm={12} md={6} lg={3} className="Iamge">
                            <img src={t2} alt="" className="rounded-circle img-fluid" />
                        </Col>
                        <Col sm={12} md={6} lg={9} className="info p-2 p-md-5">
                            <p className="fw-bold fs-4">
                                I ordered 5 shirts from them and received them in no time. The customer support was awesome!
                            </p>
                            <p className="fs-5">Tiffany</p>
                        </Col>
                    </Row>
                    <Row className="Testimonials-img d-flex align-items-center text-center text-md-start py-2">
                        <Col sm={12} md={6} lg={3} className="Iamge">
                            <img src={t3} alt="" className="rounded-circle img-fluid" />
                        </Col>
                        <Col sm={12} md={6} lg={9} className="info p-2 p-md-5">
                            <p className="fw-bold fs-4">
                                I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.
                            </p>
                            <p className="fs-5">James</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;
