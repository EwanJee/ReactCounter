import { useEffect, useState} from "react";
import { deleteTodoApi, retrieveAllTodosForUser } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

export default function ListTodosComponent(){

    const {id} = useParams();

    const [todos, setTodos] = useState([]);

    const authContext = useAuth();

    const username = authContext.username;

    const navigate = useNavigate();

    const[message, setMessage] = useState(null);

    //const todos = [
    //     {id : 1, description: 'Learn AWS', done: false, targetDate: new Date()}
    //     ,{id : 2, description: 'Learn React', done: false, targetDate: new Date()}
    //     ,{id : 3, description: 'Learn Java', done: false, targetDate: new Date()}
    //];

    //useEffect - tell React that your component needs to do something after render
    useEffect(() => 
        refreshTodos(), [id]
    );

    function refreshTodos(){
        if(id !== 1){
        retrieveAllTodosForUser(username)
        .then(response => setTodos(response.data))
        .catch(error => console.log(error));
        }
    };

    function deleteTodo(id){
        deleteTodoApi(username, id)
        .then(
            response => {
                setMessage(`Delete of todo ${id} Successful`);
                refreshTodos();
            }
            )
        .catch(error => console.log(error));
    }
    function updateTodo(id){
        navigate(`/todo/${id}`);
    }

    function addNewTodo(id){
        navigate(`/todo/-1`);
    }

    return (
        <div className="container">
            <h1>List Todos Component</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td> <button className="btn btn-warning"
                                    onClick={() => deleteTodo(todo.id)}
                                    >Delete</button></td>
                                    <td> <button className="btn btn-success"
                                    onClick={() => updateTodo(todo.id)}
                                    >Update</button></td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5"
            onClick={addNewTodo}
            >Add New Todo</div>
        </div>
    )
}