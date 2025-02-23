import axios from 'axios'
import React, { useState } from 'react'

const CreateAnonym = () => {
    const [service, setService]               = useState("")
    const [taskName, setTaskName]             = useState("")
    const [description, setDescription]       = useState("")

    const API_TASKS = 'http://192.168.2.26:35421/itil_att/hs/taskapi/settask'

    async function setNewTask() {
        

        if (
            !taskName.trim()       ||
            !description.trim()) {
            
            alert("Заполните все поля!")
            return
        }

        let taskObj = [
            {
                ТипЗадачи             : "Анонимное письмо",
                Наименование          : taskName,
                Описание              : description
            }
        ]

        try {
            const res = await axios.post(API_TASKS, taskObj, {
                auth: {
                    username: "WebInterface",
                    password: "90nexuB"
                }
            })

            console.log(res);
        } catch (e) {
            console.log(e);
        }

        alert("Задача создана!")

        setTaskName       ("")
        setDescription    ("")
    }

    return (
        <div className='container'>
            <section>
                <div className="image"></div>
            </section>

            <section className='rightPage'>
                <div className="taskTitle">
                    <p className="titelP titelTeh">Анонимное письмо</p>
                </div>

                <div className='form'>                                    
                    <p className='taskNameTitel'>Введите наименование проблемы</p>
                    <input 
                        type="text" 
                        className='taskName'
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}/>                

                    <p className='descriptionTitel'>Опишить Вашу проблему:</p>
                    <textarea
                        name="description" 
                        id="" 
                        cols="60" 
                        rows="5"
                        className='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>

                    <button className="sendTask" onClick={() => {
                        setService("Задача Тех. Поддержке")
                        setNewTask()                            
                    }}>Отправить</button>
                </div>
            </section>
        </div>
    )
}

export default CreateAnonym