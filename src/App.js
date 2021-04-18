import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import { data } from './Model/List'
import MyForm from './Components/MyForm';
import React, { useState } from 'react'


function App() {
  const [show_form_status, setStt] = useState(false)
  let list = data

  const openForm = () => {
    setStt(true)
  }

  const saveData = (userData) => {
    list.push({
      userId: 1,
      id: list.length,
      title: userData.title,
      body: userData.body
    })
    setStt(false)
  }
  return (
    <div className="container">
      <Header title="ToDo App" callBack={openForm} />
      {
        show_form_status ? <MyForm callBack={saveData} /> :
          <Todos data={data} />
      }
    </div>
  );
}

export default App;
