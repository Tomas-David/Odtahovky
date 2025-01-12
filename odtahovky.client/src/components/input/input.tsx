import { useId } from "react";
import classes from "./input.module.css";
type InputProps = {
    label: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({label, type}) => {

    const Id = useId();
    return (
        <>
            <label htmlFor={Id} className={classes.label}>{label}</label>
            <input id={Id} type={type} className={classes.input}/>
        </>
    );
}

export default Input;