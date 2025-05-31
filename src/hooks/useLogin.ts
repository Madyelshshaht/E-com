import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthLogin, resetUI } from "@store/auth/authSlice";

// Take query from url
import { useSearchParams, useNavigate } from "react-router-dom";

// Sumbit && Useform({ Mode , resolver : to link between valdation and Schema zodResolver(Schema)})
import { SubmitHandler, useForm } from "react-hook-form";

// Schema Validation
import { signInType, SignInSchema } from "@validation/signInSchema";



// the Linker between form and Schema zodResolver(Schema)
import { zodResolver } from "@hookform/resolvers/zod";

const useLogin = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const { error, loading, accessToken } = useAppSelector(state => state.auth)

    const {
        register,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm<signInType>({
        mode: "onBlur",
        resolver: zodResolver(SignInSchema),
    });

    const submitForm: SubmitHandler<signInType> = async (data) => {
        if (searchParams.get("message")) {
            setSearchParams("")
        }
        dispatch(actAuthLogin(data)).unwrap().then(() => navigate("/"));
    };

    useEffect(() => {
        return () => { dispatch(resetUI()) };
    }, [dispatch]);
    return { error, loading, accessToken ,formErrors , searchParams ,register ,handleSubmit  ,submitForm  }
}

export default useLogin