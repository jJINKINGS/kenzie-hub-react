import { forwardRef, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import style from "./style.module.scss";

export const InputPassword = forwardRef(({ label, errors, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(false);

    return (
        <div className={style.divContainer}>
            <label className="label">{label}</label>
            <div className={style.divInput}>
                <input 
                    className={style.inputBox} 
                    type={isHidden ? "text" : "password"} 
                    ref={ref} {...rest}
                />
                {isHidden ? <FaRegEye className={style.icon} onClick={() => setIsHidden(!isHidden)} />
                : <FaRegEyeSlash className={style.icon} onClick={() => setIsHidden(!isHidden)} />}
            </div>
            {errors ? <p className="errorZod">{errors.message}</p> : null}
        </div>
    )
});

