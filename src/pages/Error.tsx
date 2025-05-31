//lottie
import { LottieHandler } from "@components/feedback";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {




    return (
        <Container  >
            <div style={{marginTop :"5%" }} className="d-flex align-items-center flex-column">
                <LottieHandler type={"notFound_2"} style={{width: "500px"}}/>
                <Link to="/" replace={true} >How about going back to safety</Link>
                {/* attr [Replace] is remove Error Page from The Stack --> mean if click link home go to home -> else if you backward <- not found Error Page */}
            </div>

        </Container>
    )
}

export default Error;
