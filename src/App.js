import { useState } from "react";
import { ListItem, Modal,ToDoForm } from "./components";



function App() {
  const [toDo, setToDo] = useState('')
  const [toDoList, setToDoList] = useState([])
  const [editToDo, setEditToDo] = useState('')
  const [newToDo, setNewToDo] = useState('')

const handleChangeListToDo = () => {
    if (!toDo) return alert('To do should not be empty')
    if (toDoList.some(item => item.title === toDo)) return alert('To do title should be uniq')

    setToDoList([...toDoList, { title: toDo, done: false }])
    setToDo('')
  }
  const handleEditToDo = () => {
    if (!newToDo) return alert('To do should not be empty')
    if (toDoList.some(item => item.title === newToDo)) return alert('To do title should be uniq')

    setToDoList((list) => {
      return list.map((item) => 
        ({ ...item, title: item.title === editToDo ? newToDo : item.title }
        ))
    })
    setEditToDo('')
    setNewToDo('')
  }
  const handleDelete = (toDoTitle) => { 
    setToDoList((list) => list.filter(item => item.title !== toDoTitle))
  }

  const handleToggleToDo = (toDoTitle) => {
    setToDoList((list) => {
      return list.map((item) => 
        ({ ...item, done: item.title === toDoTitle ? !item.done : item.done}))
  })
  }

  const doneTasks = toDoList.filter(task=> task.done)
  const undoneTasks = toDoList.filter(task => !task.done)


  return (
    <div>
      <ToDoForm
        title="Add to do"
        value={toDo}
        onChange={setToDo}
        btnTitle="Add to Do"
        btnAction={handleChangeListToDo}
      />

      <div className="doneUndone">
      <h3>Undone Tasks</h3>
      <ul>
      {undoneTasks.map(({title, done}) => (
          <ListItem
            key={title}
            title={title}
            done={done}
            itemAction={() => handleToggleToDo(title)}
            editAction={() => {
              setEditToDo(title)
              setNewToDo(title)
            }}
            deleteAction={() =>{
              handleDelete(title)
            }}
          />
        ))}
      </ul>

      <h3>Done Tasks</h3>
      <ul>
      {doneTasks.map(({title, done}) => (
          <ListItem
            key={title}
            title={title}
            done={done}
            itemAction={() => handleToggleToDo(title)}
            editAction={() => {
              setEditToDo(title)
              setNewToDo(title)
            }}
            deleteAction={() =>{
              handleDelete(title)
            }}
          />
        ))}
      </ul></div>

      <Modal isOpen={editToDo} closeModal={setEditToDo}>
        <ToDoForm
          title="Edit to do"
          value={newToDo}
          onChange={setNewToDo}
          btnTitle="Edit to Do"
          btnAction={handleEditToDo}
          placeholder="New title"
        />
      </Modal>
    </div>
  );
}
export default App;
