import { useNavigate, useParams } from "react-router-dom"
import { retrieveTodoApi, updateTodoApi, createTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment";

export default function TodoComponent(){

    const {id} = useParams();

    const[description, setDescription] = useState('');

    const[target, setTarget] = useState('');

    const navigate = useNavigate();

    const authContext = useAuth();
    const username = authContext.username;

    useEffect(() => 
        retrieveTodos(), id
    );

    function retrieveTodos(){
        retrieveTodoApi(username, id)
        .then(response => setDescription(response.data.description))
        .then(response => setTarget(response.data.targetDate))
        .catch(error => console.log(error));
    }

    function onSubmit(values){
        if(id === -1){
            createTodoApi(username, {
                id: id,
                username: username,
                description: values.description,
                targetDate: values.targetDate,
                done: false
            }).then(() => {
                navigate('/todos');
            })
            }
        else {
        updateTodoApi(username, id, {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }).then(() => {
            console.log('Todo Updated');
        })
        .then(() => navigate('/todos'));
        }
    }
    function validate(values){
        let errors = {
            // description : 'Enter a valid description',
            // targetDate : 'Enter a valid target date'
        };
        if(values.description.length < 5){
            errors.description = 'Enter at least 5 characters in description';
        }
        if(values.targetDate == null || values.targetDate === '' || !moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid target date';
        }
        return errors;
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description, target}}
                    enableReinitialize={true}
                    onSubmit = {onSubmit}
                    validate = {validate}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                            />
                            <fieldset className="form-group">
                            <label>Description</label>
                            <Field className="form-control" type="text" name="description" />
                            </fieldset>
                            <fieldset className="form-group">
                            <label>Target Date</label>
                            <Field className="form-control" type="date" name="targetDate" />
                            </fieldset>
                            <div>
                                <button className="btn btn-success" type="submit"
                                >Save</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>
        </div>
    )
}