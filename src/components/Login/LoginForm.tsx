import React from 'react';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import FormControl from '../common/FormControl/FormControl';
import { required } from '../../utils/validators/validators';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={FormControl} tagName='input' validate={[required]} name={'login'} placeholder={'Login'} type={'text'} />
                </div>
                <div>
                    <Field component={FormControl} tagName='input' validate={[required]} name={'password'} placeholder={'Password'} type={'password'} />
                </div>
                <div>
                    <Field component={FormControl} tagName='input' validate={[required]} name={'rememberMe'} type={'checkbox'} />Remember me
                </div>
                <div>
                    <button>Log in</button>
                </div>
            </form>
        </div>
    );
};


export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

