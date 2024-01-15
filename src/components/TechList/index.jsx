import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechCard } from "./TechCard";
import style from "./style.module.scss";

export const TechList = () => {
    const { techList } = useContext(UserContext);

    return (
    
            <ul className={style.ulTechList}>
                {techList.map(tech =>(
                    <TechCard key={tech.id} tech={tech} />
                ))}
            </ul>
    )
};