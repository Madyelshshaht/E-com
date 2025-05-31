import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'; // access pages show in  manilayout --> all Pages
import { Header , Footer } from '@components/common';

import styles from "./styles.module.css"

const {container , wrapper} = styles;
const MainLayouts = () => {
    return (
        <Container className={container}>
            <Header />  {/* Header */}
            <div className={wrapper}>
                <Outlet />  {/*--> All pages*/}   {/*Outlet in Typescript*/}
            </div>
            <Footer />   {/* Footer */}
        </Container>
    )
}

export default MainLayouts
