import Lottie from "lottie-react";
import notFound from "@assets/lottiefiles/notfound.json";
import Empty from "@assets/lottiefiles/Empty.json";
import Loading from "@assets/lottiefiles/Loading.json";
import Error from "@assets/lottiefiles/Error.json";
import notFound_2 from "@assets/lottiefiles/notfound_2.json"
import success from "@assets/lottiefiles/success.json";

const lottieTypesMap = { 
    // because the (key name === value name) => so write the key only
    Empty,
    notFound,
    Loading,
    Error,
    notFound_2,
    success,
};

type TLottieHandlerProps = {
    type: keyof typeof lottieTypesMap;
    message?: string;
    style?: React.CSSProperties;
}

const LottieHandler = ({ type , message ,style }: TLottieHandlerProps) => {

    const lottie = lottieTypesMap[type];
    const messageStyule = type === "Error" ? { fontSize: "19px", color: "red" } : { fontSize: "19px", marginTop: "30px" }


    return (
        <div className="d-flex align-items-center flex-column">
            <Lottie animationData={lottie} style={style} />
            {message && <h3 style={ messageStyule }>{message}</h3>} 
        </div>
    )
}

export default LottieHandler
