import './TodosCard.css'
export default function TodosCard({todos}){
    return (
        <div className='user'>
            <p>UserId:{todos.userId}</p>
            <p>Id:{todos.id}</p>
            <p>Title:{todos.title}</p>
        </div>
    )
}