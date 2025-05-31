import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {  useNavigate } from "react-router-dom";

// act authregister
import { actAuthRegister, resetUI } from "@store/auth/authslice";

// Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

// valdation
import { SignupSchema, signUpType } from "@validation/signUpSchema";

// checkAvialabilityhook
import useCheckEmailAvailabiilty from "@hooks/useCheckEmailAvailabiilty";

// to link between schema and form validation
import { zodResolver } from "@hookform/resolvers/zod";




const useRegister = () => {
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const { loading, error , accessToken} = useAppSelector((state) => state.auth);

    const {
        register, // value && onchange
        handleSubmit, // func handle submit
        formState: { errors: formErrors }, // get errors
        getFieldState, // get the state of email [1]// {IsDirty} ==> return false when input is Empty [2] {Invalid} ==> return true when email is false
        trigger, // trigger the email
    } = useForm<signUpType>({
        mode: "onBlur", // show error when you foucs out the innput  || Run when foucs on the input ;
        resolver: zodResolver(SignupSchema), //link resolver
    });

    const {
        EnterEmail,
        EmailAvailabiiltyStatus,
        checkEmailAvailabiilty,
        resetCheckemailAvailability,
    } = useCheckEmailAvailabiilty();

    const submitForm: SubmitHandler<signUpType> = async (data) => {
        const { firstName, lastName, email, password } = data;
        dispatch(actAuthRegister({ firstName, lastName, email, password }))
            .unwrap()
            .then(() => {
                navigate("/login?message=account_created");
            });
    };

    const OnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
        await trigger("email");
        const value = e.target.value; // value here ==> return the value of Email;
        const { isDirty, invalid } = getFieldState("email");
        if (isDirty && !invalid && EnterEmail !== value) {
            //check
            checkEmailAvailabiilty(value);
        }
        if (isDirty && invalid && EnterEmail) {
            resetCheckemailAvailability();
        }
    };


    useEffect(() => {
        return () => { dispatch(resetUI()) };
    }, [dispatch])




    return { loading, error, accessToken, formErrors, EmailAvailabiiltyStatus, register, handleSubmit, submitForm, OnBlurHandler }
}

export default useRegister