import { forwardRef } from "react";
import style from "./style.module.scss";

export const Select = forwardRef(({ label, errors, children, ...rest}, ref) => {
    return(
        <div className={style.divInput}>
            <label className="label">{label}</label>
            <select className={style.inputBox} ref={ref} {...rest}>
                {children}
            </select>
            {errors ? <p className="errorZod">{errors.message}</p> : null}
        </div>
    )
});
