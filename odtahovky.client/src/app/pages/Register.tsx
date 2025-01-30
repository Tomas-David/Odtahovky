import InfoText from "../../components/info-text/InfoText";
import Input from "../../components/input/Input";
import classes from './Register.module.css';
import { useEffect, useState } from "react";


const Register: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [Phone, setPhone] = useState<string>('');
    const [passwordAgain, setPasswordAgain] = useState<string>('');
    const [samePassword, setSamePassword] = useState<boolean>(false);   
    const [passwordLength, setPasswordLength] = useState<boolean>(false); 
    const [passwordUpperCase, setPasswordUpperCase] = useState<boolean>(false);
    const [passwordNumber, setPasswordNumber] = useState<boolean>(false);


    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if(samePassword){
            const data = { email, password, userName, Phone };
            const response = await fetch("/api/Auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        }
    }

    const CheckPassword = () => {
        if(password === passwordAgain){
            setSamePassword(true);
        } else {
            setSamePassword(false);
        }

        if(password.length >= 8){
            setPasswordLength(true);
        } else {
            setPasswordLength(false);
        }

        if(password.match(/[A-Z]/)){
            setPasswordUpperCase(true);
        } else {
            setPasswordUpperCase(false);
        }

        if(password.match(/[0-9]/)){
            setPasswordNumber(true);
        } else {    
            setPasswordNumber(false);
        }

    }

    useEffect(() => {
        CheckPassword();
    });

    return (
        <form className={classes.container} onSubmit={submitHandler}>
            
            <Input label="Jméno a příjmení" />
            <Input label="Telefon" />
            <Input label="Email" type="email" />
            <Input label="Heslo" type="password" />
            <Input label="Heslo znovu" type="password" />
            <InfoText text="Minimálně 8 znaků" condition={passwordLength} />
            <InfoText text="Alespoň jedno velké písmeno" condition={passwordUpperCase} />
            <InfoText text="Alespoň jedno číslo" condition={passwordNumber} />
            <InfoText text="Hesla jsou stejná" condition={samePassword} />
            <button className={classes.btn} type="submit">Registrovat</button>
        </form>
    );
}


export default Register;