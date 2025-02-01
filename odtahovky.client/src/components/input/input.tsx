import { useId } from "react";
import classes from "./input.module.css";
type InputProps = {
    label: string;
    type?: string;
    onChange: (e: string) => void;
}

const Input: React.FC<InputProps> = ({label, type,onChange}) => {

    const Id = useId();
    return (
        <>
            <label htmlFor={Id} className={classes.label}>{label}</label>
            <input onChange={(e) => onChange(e.currentTarget.value)} id={Id} type={type} className={classes.input}/>
        </>
    );
}

export default Input;