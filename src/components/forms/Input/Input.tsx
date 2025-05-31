import { Path, FieldValues, UseFormRegister } from "react-hook-form";
import { Form } from "react-bootstrap";

type InputProps<TFieldValue extends FieldValues> = {
    label: string;
    name: Path<TFieldValue>; 
    type?: string;
    error?: string;
    formText?: string;
    success?: string;
    disabled?: boolean;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    register: UseFormRegister<TFieldValue>;
};

const Input = <TFieldValue extends FieldValues>({ label, name, type = "text", error, formText, success , disabled , register , onBlur } : InputProps<TFieldValue>) => {

    const emailOnBlueHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if(onBlur){
            onBlur(e);
            register(name).onBlur(e);
        }else{
            register(name).onBlur(e);
        }
    };


    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                {...register(name)} // because register make (register(name).onBlur) so it ovewrite on it
                onBlur={emailOnBlueHandler}
                isInvalid={error ? true : false}
                isValid= {success ? true : false}
                disabled={disabled ? true : false}
            />
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
            {formText && <Form.Text muted> { formText } </Form.Text>}
        </Form.Group>
    );

};

export default Input;
