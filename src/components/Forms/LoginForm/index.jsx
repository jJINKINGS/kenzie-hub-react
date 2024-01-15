import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { InputPassword } from "../../Input/InputPassword";
import style from "./style.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
    const[loading, setLoading] = useState(false);

    const { register, reset, handleSubmit, formState: { errors }, } = useForm(
        {
            resolver: zodResolver(loginFormSchema),
        }
    );

    const { userLogin } = useContext(UserContext);

    const submit = (userData) => {
        userLogin(userData, setLoading, reset);
    };

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit(submit)}>
                <div className={style.divForm}>
                    <Input
                        label="Email"
                        type="text"
                        errors={errors.email}
                        {...register("email")}
                    />

                    <InputPassword
                        label="Senha"
                        errors={errors.password}
                        {...register("password")}
                    />

                    <div>
                        <button className="buttonLogin1" type="submit">
                            {loading ? "Entrando..." : "Entrar"}
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
};