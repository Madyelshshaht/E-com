import Hero from "@assets/img_Home/Hero.png";
import ggg1 from "@assets/img_Home/ggg1.jpeg";
import ggg2 from "@assets/img_Home/ggg2.jpeg";

// import img1 from "@assets/img_Home/img_1.png";
// import img2 from "@assets/img_Home/img_2.png";
// import img3 from "@assets/img_Home/img_3.png";
// import img4 from "@assets/img_Home/img_4.png";
// import img5 from "@assets/img_Home/img_5.png";
// import img6 from "@assets/img_Home/img_6.png";
// import img7 from "@assets/img_Home/img_7.png";
// import img8 from "@assets/img_Home/img_8.png";

//
import shiiping from "@assets/img_Home/icon-shipping.png";
import support from "@assets/img_Home/icon-support.png";
import return_order from "@assets/img_Home/icon-return.png";
import Payment from "@assets/img_Home/icon-payment Secure.png";
//

import Fashion_sale from "@assets/img_Home/Fashion sale.jpg";
import Get2 from "@assets/img_Home/get2.jpg";

// import recent1 from "@assets/img_Home/recent1.png";
// import recent2 from "@assets/img_Home/recent2.png";
// import recent3 from "@assets/img_Home/recent3.png";


import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Item_Img from "@components/Home/Item_Img";
import { useEffect, useState } from "react";
import axios from "axios";


type Item_Type = {
    img?: string;
    title: string;
    price?: number;
    Link_Item?: string | null;
    cat_prefix?: string;
}

type Tresponse = TProduct[];


const Home = () => {

    const [product, setproduct] = useState<Item_Type[]>([]);
    const [shuffledProducts, setShuffledProducts] = useState<Item_Type[]>([]);


    // console.log(product);



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get<Tresponse>("/products")
                setproduct(res.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchProducts()
    }, [])

    useEffect(() => {
        setShuffledProducts([...product].sort(() => Math.random() - 0.5));
    }, [product]);





    return (
        <Container>
            <div className="hero">
                <img src={ggg2} alt="Hero_Img" className="img-fluid w-100" />
            </div>
            <div className="Discover_New_Arrivals text-center pt-5 pb-5">
                <h4 className="fw-bold">Discover NEW Arrivals</h4>
                <p className="text-black-50">Recently added shirts!</p>
                <div className="Arivals pt-3 ">
                    <Row>

                        {shuffledProducts.map((pro, index) => (
                            <Col sm={6} md={4} lg={3} key={index}>
                                <Link to={`/categories/products/${pro.cat_prefix}`} style={{ textDecoration: "none" }}>
                                    <img src={pro.img} alt={pro.title} className="img-fluid Home_img" style={{ width: "200px", height: "250px" }} />
                                    <p className="fw-bold mt-2 text-dark ">{pro.title}</p>
                                    <p style={{ marginTop: "-10px", color: "black" }}>${pro.price ? pro.price.toFixed(2) : "N/A"}</p>
                                </Link>
                            </Col>
                        )).slice(0, 12)}

                    </Row>
                </div>

                <div
                    className="border-top border-5 border-dark rounded-pill mt-3 m-auto mb-5 mt-4"
                    style={{ width: "20%" }}
                ></div>

                <div className="shipping py-5">
                    <Row>
                        <Col sm={6} md={4} lg={3}>
                            <div className="d-flex justify-content-between">
                                <div className="icon">
                                    <img src={shiiping} alt="shipping" />
                                </div>
                                <div className="text-start">
                                    <p className="fw-bold">Free Shipping</p>
                                    <p style={{ fontSize: "12px" }}>
                                        Enjoy free shipping on all orders above $100
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="d-flex justify-content-between">
                                <div className="icon">
                                    <img src={support} alt="support" />
                                </div>
                                <div className="text-start">
                                    <p className="fw-bold">SUPPORT 24/7</p>
                                    <p style={{ fontSize: "12px" }}>
                                        Our support team is there to help you for queries
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="d-flex justify-content-between">
                                <div className="icon">
                                    <img src={return_order} alt="return_order" />
                                </div>
                                <div className="text-start">
                                    <p className="fw-bold">30 DAYS RETURN</p>
                                    <p style={{ fontSize: "12px" }}>
                                        Simply return it within 30 days for an exchange.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="d-flex justify-content-between">
                                <div className="icon">
                                    <img src={Payment} alt="Payment" />
                                </div>
                                <div className="text-start">
                                    <p className="fw-bold">100% PAYMENT SECURE</p>
                                    <p style={{ fontSize: "12px" }}>
                                        Our payments are secured with 256 bit encryption
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="buy2_Get1 pt-5">
                    <Row>
                        <Col sm={6} md={6} lg={7} className="mb-2">
                            <img
                                src={Fashion_sale}
                                alt="img_1"
                                className="img-fluid"
                                style={{ height: "350px" }}
                            />
                        </Col>
                        <Col sm={6} md={6} lg={5} className="mb-2">
                            <div className="img_Content ">
                                <img
                                    src={Get2}
                                    alt="img_1"
                                    className="img-fluid"
                                    style={{ height: "350px", content: "Shop Now" }}
                                />
                                <div className="content ">
                                    <h4>Buy 2 Get 1 Free</h4>
                                    <p>
                                        End of season sale. Buy any 2 items of your choice and get 1
                                        free.
                                    </p>
                                    <Button as={NavLink} to="/categories" variant="success">
                                        BUY NOW
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="Top_Sellers pt-5">
                    <h4 className="fw-bold">Top Sellers</h4>
                    <p className="text-black-50">Browse our top-selling products</p>
                    <div className="Arivals pt-3">
                        <Row>
                            {[...product]
                                .sort((a, b) => b.id - a.id) // ترتيب تنازلي حسب ID
                                .slice(0, 4) // اختيار أول 4 منتجات فقط
                                .map((pro, index) => (
                                    <Col sm={6} md={4} lg={3} key={index} >
                                        <Link to={`/categories/products/${pro.cat_prefix}`} style={{ textDecoration: "none" }}>
                                            <img src={pro.img} alt={pro.title} className="img-fluid Home_img" style={{ width: "200px", height: "250px" }} />
                                            <p className="fw-bold mt-2">{pro.title}</p>
                                            <p style={{ marginTop: "-10px" }}>${pro.price ? pro.price.toFixed(2) : "N/A"}</p>
                                        </Link>
                                    </Col>
                                ))}


                            {/* <Item_Img img={recent1} title="Gray Polo Shirt" price={29} Link_Item={`/categories/products/men`} />
                            <Item_Img img={recent2} title="Red Shirt" price={29} Link_Item={`/categories/products/women`} />
                            <Item_Img img={recent3} title="Polo White Shirt" price={29} Link_Item={`/categories/products/women`} />
                            <Item_Img img={img4} title="Pink Casual Shirt" price={29} Link_Item={`/categories/products/women`} /> */}
                        </Row>
                    </div>
                    <Button
                        as={NavLink}
                        to="categories"
                        variant="info"
                        style={{ color: "white" }}
                    >
                        Shop Now
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Home;
