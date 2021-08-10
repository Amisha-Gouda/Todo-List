import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Todos from "./components/Todos";
import Footer from './components/footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import About from './components/about';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("deleted", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))



  }

  const addTodo = (title, desc) => {
    console.log("todo added", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0
    }
    else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {

      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);


    localStorage.setItem("todos", JSON.stringify(todos))

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => {
            return(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
            )
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


        <Footer />
      </Router>
    </>
  )
}

export default App;
