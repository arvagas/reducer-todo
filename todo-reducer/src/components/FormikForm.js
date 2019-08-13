import React from 'react'
import { Form, Field, withFormik } from 'formik'

const AddTodo = ({ dispatch }) => {
    return (
        <Form>
            <label>
                Add new task:
                <Field type='text' name='todo' placeholder='Ex: Fold Laundry'/>
            </label>

            <button type='submit'>Add New</button>
            <button type='button' onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Clear Completed</button>
        </Form>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ todo }) {
        return {
            todo: todo || '',
        }
    },

    handleSubmit(values, { props, resetForm, setSubmitting }) {
        props.dispatch({type: 'ADD_ITEM', payload: values.todo})
        resetForm()
        setSubmitting(false)
    }
})(AddTodo)

export default FormikForm