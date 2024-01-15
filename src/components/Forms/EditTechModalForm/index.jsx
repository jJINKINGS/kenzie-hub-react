import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { Select } from "../../Input/Select";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import style from "./style.module.scss";

export const EditTechModalForm = () => {


    const { updateTech, editTech } = useContext(TechContext);

    const { register, handleSubmit, } = useForm({
        defaultValues: { title: editTech?.title }
    });

    const submit = (userData) => {
        updateTech(userData);
    };

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit(submit)}>
                <div className={style.divForm}>
                    <Input
                        label="Nome"
                        type="text"
                        {...register("title")}
                    />

                    <Select label="Status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>

                    <button className="buttonLogin1" type="submit">Salvar Alterações</button>
                </div>
            </form>
        </>
    )
};