export default function ListTodosComponent(){

    const todos = [
        {id : 1, description: 'Learn AWS', done: false, targetDate: new Date()}
        ,{id : 2, description: 'Learn React', done: false, targetDate: new Date()}
        ,{id : 3, description: 'Learn Java', done: false, targetDate: new Date()}];

    return (
        <div className="container">
            <h1>List Todos Component</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target Date</th>
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
                                </tr>
                            
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}