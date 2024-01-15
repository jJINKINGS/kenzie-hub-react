import { forwardRef } from "react";
import style from "./style.module.scss";

export const Input = forwardRef(({ label, errors, ...rest}, ref) => {
    return(
        <div className={style.divInput}>
            <label className="label">{label}</label>
            <input className={style.inputBox} ref={ref} {...rest} />
            {errors ? <p className="errorZod">{errors.message}</p> : null}
        </div>
    )
});

