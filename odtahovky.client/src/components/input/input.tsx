import { useId } from "react";
import classes from "./input.module.css";
type InputProps = {
    label: string;
}

const Input: React.FC<InputProps> = ({label}) => {

    const Id = useId();
    return (
        <>
            <label htmlFor={Id} className={classes.label}>{label}</label>
            <input id={Id} type="text" className={classes.input}/>
        </>
    );
}

export default Input;