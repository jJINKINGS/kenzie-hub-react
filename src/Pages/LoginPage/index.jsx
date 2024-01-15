import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";

export const LoginPage = () => {
    
    return (
        <>
            <div className={style.divContainer}>
                <div className={style.divImg}>
                    <img src={Logo} alt="Logo Kenzie Hub" />
                </div>
                <div className={style.divForm}>
                    <h3 className="title1">Login</h3>
                    <LoginForm />
                    <p className={style.paragraph}>Ainda não possui uma conta?</p>
                    <Link className="buttonLogin2" to="/register">Cadastre-se</Link>
                </div>
            </div>
        </>
    )
};
