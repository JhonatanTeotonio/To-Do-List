import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "./components/Tasks"; //importando o componente que vai ser renderizado em outro arquivo
import './App.css'; //importando o css para o app
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

const App = ()  => {

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Tarefa 1",
      completed: false,
    },
    {
      id: "2",
      title: "Tarefa 2",
      completed: true,
    },
    {
      id: "3",
      title: "Tarefa 3",
      completed: false,
    }
  ]);
  //uso do useState para a variavel atualizar toda vez que receber um valor diferente

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return{ ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
      },
    ];

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }

  return(
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition}  />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
          </>
        )}/>

        <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
    </Router>
    //o return todo deve ser escrito dentro de uma só div
  );
};

export default App;