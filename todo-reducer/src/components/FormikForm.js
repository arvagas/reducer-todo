import React from 'react'
import { Form, Field, withFormik } from 'formik'

const AddTodo = ({  }) => {
    return (
        <Form>
            <label>
                Add new task:
                <Field type='text' name='todo' placeholder='Ex: Fold Laundry'/>
            </label>

            <button type='submit'>Add New</button>
            <button>Clear Completed</button>
        </Form>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ todo }) {
        return {
            todo: todo || '',
        }
    },

    // handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    handleSubmit({ resetForm, setSubmitting }) {
        resetForm()
        setSubmitting(false)
    }
})(AddTodo)

export default FormikForm