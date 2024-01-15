import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";

export const RegisterPage = () => {
    
    return (
        <>
            <div className={style.divContainer}>
                <div className={style.divTitle}>
                    <img src={Logo} alt="Logo Kenzie Hub" />
                    <Link className="buttonRegister2" to="/">Voltar</Link>
                </div>
                <div className={style.divForm}>
                    <h3 className="title1">Crie sua conta</h3>
                    <p className={style.paragraph}>Rápido e grátis, vamos nessa</p>
                    <RegisterForm />
                </div>
            </div>
        </>
    )
};