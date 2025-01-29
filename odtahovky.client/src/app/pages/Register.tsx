import Input from "../../components/input/Input";
import classes from './Register.module.css';
import { useState } from "react";
const Register: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [Phone, setPhone] = useState<string>('');
    const [passwordAgain, setPasswordAgain] = useState<string>('');
    const [samePassword, setSamePassword] = useState<boolean>(true);    

    const submitHandler = (e: React.FormEvent) => {
        if(password === passwordAgain){
            setSamePassword(true);
            
        }else{
            setSamePassword(false);
        }
    }

    return (
        <form className={classes.container}>

            
            <Input label="Jméno a příjmení" />
            <Input label="Telefon" />
            <Input label="Email" type="email" />
            <Input label="Heslo" type="password" />
            <Input label="Heslo znovu" type="password" />
            <button className={classes.btn} type="submit">Registrovat</button>
        </form>
    );
}


export default Register;