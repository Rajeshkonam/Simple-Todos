import './index.css'

const TodoItem = props => {
  const {details, deleteTodo} = props
  const {title, id} = details
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="li">
      <p className="p2">{title}</p>
      <button type="button" className="b2" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
