import style from "./style.module.scss";
import iconEdit from "../../../assets/edit.svg";
import iconDelete from "../../../assets/delete.svg";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
    const{ selectTechEdit, deleteTech } = useContext(TechContext);

    return (
        <li>
            <div className={style.divCard}>
                <h1 className={style.titleTech}>{tech?.title}</h1>
                <div className={style.divCard2}>
                    <span className={style.titleStatus}>{tech?.status}</span>
                    <div>
                        <img onClick={() => selectTechEdit(tech)} src={iconEdit} alt="iconEdit" aria-label="edit" />
                        <img onClick={() => deleteTech(tech.id)} src={iconDelete} alt="iconDelete" aria-label="delete" />
                    </div>
                </div>
            </div>
        </li>
    )
};