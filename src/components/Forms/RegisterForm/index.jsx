import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { InputPassword } from "../../Input/InputPassword";
import { Select } from "../../Input/Select";
import style from "./style.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
    const [loading, setLoading] = useState(false);

    const { register, reset, handleSubmit, formState: { errors }, } = useForm(
        {
            resolver: zodResolver(registerFormSchema),
        }
    );

    const { userRegister } = useContext(UserContext);

    const submit = (userData) => {
        userRegister(userData, setLoading, reset);
    };

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit(submit)}>
                <div className={style.divForm}>

                    <Input
                        label="Nome"
                        placeholder="Digite aqui seu nome"
                        type="text"
                        errors={errors.name}
                        {...register("name")}
                    />

                    <Input
                        label="Email"
                        placeholder="Digite aqui seu email"
                        type="text"
                        errors={errors.email}
                        {...register("email")}
                    />

                    <InputPassword
                        label="Senha"
                        placeholder="Digite sua senha aqui"
                        errors={errors.password}
                        {...register("password")}
                    />

                    <InputPassword
                        label="Confirmar Senha"
                        placeholder="Digite novamente sua senha"
                        errors={errors.confirmPassword}
                        {...register("confirmPassword")}
                    />

                    <Input
                        label="Bio"
                        type="text"
                        placeholder="Fale sobre você"
                        errors={errors.bio}
                        {...register("bio")}
                    />

                    <Input
                        label="Contato"
                        type="text"
                        placeholder="Opção de contato"
                        errors={errors.contact}
                        {...register("contact")}
                    />

                    <Select label="Selecionar módulo" {...register("course_module")} errors={errors.course_module}>
                        <option value="Primeiro Módulo(Introdução ao Frontend)">Primeiro Módulo</option>
                        <option value="Segundo Módulo(Frontend Avançado)">Segundo Módulo</option>
                        <option value="Terceiro Módulo(Introdução ao Backend)">Terceiro Módulo</option>
                        <option value="Quarto Módulo(Backend Avançado)">Quarto Módulo</option>
                    </Select>

                    <button className="buttonRegister1" type="submit">
                        {loading ? "Cadastrando..." : "Cadastre-se"}
                    </button>
                </div>
            </form>
        </>
    )
};