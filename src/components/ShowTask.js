const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  };
  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTaskList);
  };
  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo List</span>
          <span className="count">{taskList.length}</span>
        </span>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </p>
      <ul>
        {taskList.map((tasks) => (
          <li key={tasks.id}>
            <p>
              <span className="name">{tasks.name}</span>
              <span className="time">{tasks.time}</span>
            </p>
            <i
              onClick={() => handleEdit(tasks.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(tasks.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
