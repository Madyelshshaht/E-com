import { useState } from "react";
import axios from "axios";

type TStatus = "idle" | "checking" | "available" | "notAvialabla" | "failed";

const useCheckEmailAvailabiilty = () => {
    const [EmailAvailabiiltyStatus, setEmailAvailabiiltyStatus] = useState<TStatus>("idle");
    const [EnterEmail, setEnterEmail] = useState<null | string>(null); // type is null or string

    const checkEmailAvailabiilty = async (email : string) => {
        setEnterEmail(email);
        setEmailAvailabiiltyStatus("checking")
        try {
            const resopnse = await axios.get(`/users?email=${email}`)
            if (!resopnse.data.length) {
                setEmailAvailabiiltyStatus("available");
            }else{
                setEmailAvailabiiltyStatus("notAvialabla");
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }catch (error) {
            setEmailAvailabiiltyStatus("failed")
        }
    }

    const resetCheckemailAvailability = () => {
        setEmailAvailabiiltyStatus("idle");
        setEnterEmail(null);
    }

    return { EmailAvailabiiltyStatus, EnterEmail, checkEmailAvailabiilty, resetCheckemailAvailability } ;

}

export default useCheckEmailAvailabiilty;