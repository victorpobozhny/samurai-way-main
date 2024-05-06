import { WrappedFieldProps } from "redux-form";
import { FC } from "react";
import s from './FormControl.module.css'

type FormControlProps = WrappedFieldProps & {
    tagName: 'textarea' | 'input'
}

const FormControl: FC<FormControlProps> = ({ input, meta, tagName, ...props }) => {

    const hasError = meta.touched && meta.error ;
    const Tag = tagName;

    return (
        <>
            <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
                <div>
                    <Tag {...input} {...props} />
                </div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </>
    )
};

export default FormControl;