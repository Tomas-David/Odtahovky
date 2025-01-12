import Input from "../../components/input/Input";
import classes from './Login.module.css';


const Login: React.FC = () => {

    return (
        <form className={classes.container}>

                <Input label="Email" />
                <Input label="Heslo" />

            <button  className={classes.btn} type="submit">Přihlásit</button>
        </form>
    );
}

export default Login;