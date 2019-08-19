import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/addTodo'
import About from './components/pages/About'
//import uuid from 'uuid'
import axios from 'axios'

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  //Toggle Complete (id kommer nede fra todoItem, gjennom todos - og hit)
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  //delete todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(
          todo => todo.id !== id)] })) 
  }

  //add todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed :false
    })
      .then(res => this.setState({ todos: 
        [...this.state.todos, res.data] }))
    
  }

  render() {
   
    return ( //this is JSX - legg til flere HTML classes med className i App
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete}
              delTodo={this.delTodo} /> 
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
          
        </div>
      </div>
      </Router>
    )
  }

}

export default App;
