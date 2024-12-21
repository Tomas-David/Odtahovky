import { useId } from "react";

type InputProps = {
    label: string;
}

const Input: React.FC<InputProps> = ({label}) => {

    const Id = useId();
    return (
        <>
            <label htmlFor={Id}>{label}</label>
            <input id={Id} type="text" />
        </>
    );
}

export default Input;