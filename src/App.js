import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import { data } from './Model/List'
import MyForm from './Components/MyForm';
import React, { useState } from 'react'


function App() {
  const [show_form_status, setStt] = useState(false)
  const [list, updateList] = useState(data)

  const openForm = () => {
    setStt(true)
  }

  const backToHome = () => {
    setStt(false)
  }

  const saveData = (userData) => {
    const data = [...list]
    data.push({
      userId: 1,
      id: Math.floor(Math.random() * list.length),
      title: userData.title,
      body: userData.body
    })
    updateList(data)
    setStt(false)
  }

  const deleteData = (userData) => {
    const data = [...list]
    const indx = data.indexOf(userData)
    data.splice(indx, 1)
    updateList(data)
  }
  return (
    <div className="container">
      <Header title="ToDo App" callBack={openForm} homeDelegation={backToHome} />
      {
        show_form_status ? <MyForm callBack={saveData} /> :
          <Todos data={list} callBack={deleteData} />
      }
    </div>
  );
}

export default App;
