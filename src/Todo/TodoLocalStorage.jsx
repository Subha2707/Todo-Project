const todoKey="reactTodo";

export const  getLocalStorageTodo=()=>{
  const rawTodo = localStorage.getItem(todoKey);
  try{
    if(!rawTodo || rawTodo === "undefined") return [];
    const parsed=JSON.parse(rawTodo);
    return Array.isArray(parsed) ? parsed : []; 
  }
  catch(e){
    console.error("Error Parsing todo data from localStorage : ",e );
    return [];
  }
};
export const setLocalStorageTodo=(task)=>{
  return localStorage.setItem(todoKey,JSON.stringify(task));
}

