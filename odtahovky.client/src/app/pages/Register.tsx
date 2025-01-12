import Input from "../../components/input/Input";
import classes from './Register.module.css';

const Register: React.FC = () => {
    return (
        <form className={classes.container}>

            
            <Input label="Jméno" />
            <Input label="Příjmení" />
            <Input label="Telefon" />
            <Input label="Email" type="email" />
            <Input label="Heslo" type="password" />
            <Input label="Heslo znovu" type="password" />
            <button className={classes.btn} type="submit">Registrovat</button>
        </form>
    );
}


export default Register;