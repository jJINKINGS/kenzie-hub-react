import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { Select } from "../../Input/Select";
import { CreateTechModalFormSchema } from "./CreateTechModalFormSchema";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "./style.module.scss";

export const CreateTechModalForm = () => {
    const { register, reset, handleSubmit, formState: { errors }, } = useForm(
        {
            resolver: zodResolver(CreateTechModalFormSchema)
        }
    );


    const { createTech } = useContext(TechContext);

    const submit = (userData) => {
        createTech(userData, reset);
    };

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit(submit)}>
                <div className={style.divForm}>
                    <Input
                        label="Nome"
                        type="text"
                        errors={errors.title}
                        {...register("title")}
                    />

                    <Select label="Selecionar status" {...register("status")} errors={errors.status}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>

                    <button className="buttonLogin1" type="submit">Cadastrar Tecnologia</button>
                </div>
            </form>
        </>
    )
};