import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList=({
    data,
    checked,
    onHandleDeleteTodo,
    onHandleCheckedTodo})=>{
    return(
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="btn check" onClick={()=>onHandleCheckedTodo(data)}>
              <MdCheck />
            </button>
            <button className="btn delete" onClick={()=>onHandleDeleteTodo(data)}>
              <MdDeleteForever />
            </button>
        </li>
    );
};