import { useEffect, useRef } from "react";
import { CreateTechModalForm } from "../Forms/CreateTechModalForm";
import style from "./style.module.scss";

export const CreateTechModal = ({ setIsOpen }) => {
    

    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutclick = (event) => {
            if(!modalRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        }

        window.addEventListener("mousedown", handleOutclick);

        return () => {
            window.removeEventListener("mousedown", handleOutclick);
        }
    }, []);


    const buttonRef = useRef(null);

    useEffect(() => {
        const handleKeydown = (event) => {
            if(event.key === "Escape"){
                buttonRef.current?.click();
            }
        }

        window.addEventListener("keydown", handleKeydown);


        return () => {
            window.removeEventListener("keydown", handleKeydown);
        }
    }, []);

    return (
        <div className={style.modalOverlay} role="dialog">
            <div ref={modalRef} className={style.modalBox}>
                <div className={style.headerModal}>
                    <h1 className="titleModal">Cadastrar Tecnologia</h1>
                    <button ref={buttonRef} className={style.buttonX} onClick={() => setIsOpen(false)}>X</button>
                </div>

                <CreateTechModalForm />

            </div>
        </div>
    )
};