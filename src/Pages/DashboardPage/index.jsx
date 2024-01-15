import style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import ButtonPlus from "../../assets/ButtonPlus.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { TechList } from "../../components/TechList";

export const DashboardPage = () => {
    const { user, userLogout } = useContext(UserContext);
    const { setIsOpen } = useContext(TechContext);

    return (
        <>
            <header className={style.header}>
                <div className={style.divHeader}>
                    <img src={Logo} alt="Logo Kenzie Hub" />
                    <button onClick={userLogout} className="buttonRegister2">Sair</button>
                </div>
            </header>

            <main className={style.main}>
                <section className={style.section1}>
                    <div>
                        <h1 className="title1">Olá, {user?.name}</h1>
                        <p className={style.paragraph}>{user?.course_module}</p>
                    </div>
                </section>

                <section className={style.section2}>
                    <h1 className="title1">Tecnologias</h1>
                    <img onClick={() => setIsOpen(true)} src={ButtonPlus} alt="buttonPlus" className="buttonPlus" />
                </section>

                <div className={style.divList}>
                    <TechList />
                </div>
            </main>
        </>
    )
};