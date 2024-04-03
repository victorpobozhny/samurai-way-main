import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utils/validators/validators"
import FormControl from "../../common/FormControl/FormControl"

export type AddMessageFormProps = {
    newMessageBody: string
}


const maxLength50 = maxLengthCreator(50)

const AddMessageFormRedux: React.FC<InjectedFormProps<AddMessageFormProps>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl}
                    tagName='input'
                    validate={[required, maxLength50]}
                    name='newMessageBody'
                    placeholder='Enter you message' />
                <div>
                    <button>Send Message</button>
                </div>
            </div>
        </form>
    )
}

export const AddMessageForm = reduxForm<AddMessageFormProps>({ form: "dialogAddMessageForm" })(AddMessageFormRedux)