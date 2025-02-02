import Input from "../../components/input/Input";
import classes from './Login.module.css';
import { useState } from "react";

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    return (
        <form>
        <div className={classes.container}>

                <Input label="Email" type="email" />
                <Input label="Heslo" type="password" />

            <button  className={classes.btn} type="submit">Přihlásit</button>
        </div>
        </form>
    );
}

export default Login;