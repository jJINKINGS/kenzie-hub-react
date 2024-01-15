import { useEffect, useRef } from "react";
import { EditTechModalForm } from "../Forms/EditTechModalForm";
import style from "./style.module.scss";

export const EditTechModal = ({setIsOpen2}) => {
    
    
    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutclick = (event) => {
            if(!modalRef.current?.contains(event.target)) {
                setIsOpen2(false);
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

    return(
        <div className={style.modalOverlay} role="dialog">
            <div ref={modalRef} className={style.modalBox}>
                <div className={style.headerModal}>
                    <h1 className="titleModal">Tecnologia Detalhes</h1>
                    <button ref={buttonRef} className={style.buttonX} onClick={() => setIsOpen2(false)}>X</button>
                </div>

                <EditTechModalForm />

            </div>
        </div>
    )
};