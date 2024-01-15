import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../Services/api";
import { toast } from "react-toastify";


export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const[isOpen2, setIsOpen2] = useState(false);
    const[editTech, setEditTech] = useState(null);


    const { token, setTechList, techList } = useContext(UserContext);

    const createTech = async({ title, status }, reset) => {
        try {
            const newTech = { title, status};
            
            const { data } = await api.post("/users/techs", newTech, { headers: { Authorization: `Bearer ${token}`} });

            reset();
            setTechList([...techList, data]);
            toast.success("Tecnologia adiconada com sucesso!");
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTech = async(tech_id) => {
        try {
            await api.delete(`/users/techs/${tech_id}`, { headers: { Authorization: `Bearer ${token}`}});
            const filteredTechs = techList.filter((element => element.id !== tech_id));
            setTechList(filteredTechs);
            toast.success("Tecnologia deletada com sucesso!");
        } catch (error) {
            console.log(error);
        }
    };

    const selectTechEdit = (tech) => {
        setEditTech(tech);
        setIsOpen2(true);
    };

    const updateTech = async(userData) => {
        try {
            const newEditTech = {...editTech, ...userData};
            const { data } = await api.put(`/users/techs/${newEditTech.id}`, newEditTech, { headers: { Authorization: `Bearer ${token}`}});

            const newTechs = techList.map((tech) => tech.id === newEditTech.id ? data : tech);

            
            setTechList(newTechs);
            setEditTech(null);
            toast.success("Tecnologia editada com sucesso!");
        } catch (error) {
            console.log(error);
        }
    };

    return <TechContext.Provider value={ {setIsOpen, isOpen, createTech, isOpen2, setIsOpen2, deleteTech, selectTechEdit, editTech, updateTech} }>{children}</TechContext.Provider>
};