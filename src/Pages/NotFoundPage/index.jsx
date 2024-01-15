import style from "./style.module.scss";

export const NotFoundPage = () => {
    return (
        <main className={style.main}>
            <h1>Error: 404</h1>
            <p>Não foi possivel encontrar a página</p>
        </main>
    )
};