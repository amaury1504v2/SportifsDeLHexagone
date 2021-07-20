import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'

import Navbar from './components/navbar';
import ExercisesList from './components/exercises-list';
import EditExercise from './components/edit-exercise';
import CreateExercise from './components/create-exercise';
import CreateUser from './components/create-user';
import Welcome from './components/welcome';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <br/>
        <Route path="/" exact component={Welcome} />
        <Route path="/exercises" component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
    </Router>
    </>
  );
}

export default App;
