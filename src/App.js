import React, { Component } from 'react';
import './App.css';

import StudentForm from './components/StudentForm';
import ErrorBoundary from './components/ErrorBoundary';

import Header from './Header';
import Teachers from './Teachers';
import Footer from './Footer';

class App extends Component {
  render() {
    return [
      <Header key='head'/>,
      <Teachers key='teach'/>,
      <Footer key='foot'/>,

      <ErrorBoundary key='error'>
        <StudentForm />
      </ErrorBoundary>
    ];
  }
}

export default App;
