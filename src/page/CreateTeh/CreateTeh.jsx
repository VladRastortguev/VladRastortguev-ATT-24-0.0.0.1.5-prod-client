import axios from 'axios'
import React, { useState } from 'react'

import '../CreateTeh/CreateTeh.css'

const CreateTeh = () => {
    const [service, setService]               = useState("")
    const [podService, setPodService]         = useState("")
    const [taskName, setTaskName]             = useState("")
    const [username, setUsername]             = useState("")
    const [email, setEmail]                   = useState("")
    const [phone, setPhone]                   = useState("")
    const [company, setCompany]               = useState("")
    const [influence, setInfluence]           = useState("")
    const [influenceDescr, setInfluenceDescr] = useState("")
    const [urgency, setUrgancy]               = useState("")
    const [urgencyDescr, setUrgancyDescr]     = useState("")
    const [description, setDescription]       = useState("")

    const API_TASKS = 'http://192.168.2.26:35421/itil_att/hs/taskapi/settask'

    async function setNewTask() {
        

        if (
            !podService.trim()     ||
            !taskName.trim()       ||
            !username.trim()       ||
            !email.trim()          ||
            !phone.trim()          ||
            !company.trim()        ||
            !influence.trim()      ||
            !influenceDescr.trim() ||
            !urgency.trim()        ||
            !urgencyDescr.trim()   ||
            !description.trim()) {
            
            alert("Заполните все поля!")
            return
        }

        let taskObj = [
            {
                ТипЗадачи             : "Задача Тех. Поддержке",
                ПодтипЗадачи          : podService,
                Наименование          : taskName,
                ИмяПользователя       : username,
                email                 : email,
                Телефон               : phone,
                КомпанияЗаказчик      : company,
                ВлияниеЗадачи         : influence,
                ВлияниеЗадачиПодробно : influenceDescr,
                Срочность             : urgency,
                СрочностьПодробно     : urgencyDescr,
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

        setPodService     ("")
        setTaskName       ("")
        // setUsername       ("")
        // setEmail          ("")
        // setPhone          ("")
        // setCompany        ("")
        setInfluence      ("")
        setInfluenceDescr ("")
        setUrgancy        ("")
        setUrgancyDescr   ("")
        setDescription    ("")
    }


    return (
        <>
            <div className='container'>
                <section>
                    <div className="image"></div>
                </section>
        
                <section className='rightPage'>
                    <div className="taskTitle">
                        <p className="titelP titelTeh">Задача Тех. Поддержки</p>
                    </div>

                    <div className='form'>
                        <p className='podServiceTitel'>Выберите тип задачи:</p>
                        <select 
                            name="podService" 
                            id=""
                            className='podService'
                            value={podService}
                            onChange={(e) => setPodService(e.target.value)}>

                            <option value=""></option>
                            <option value="Проблемы с серверами">Проблемы с серверами</option>
                            <option value="Проблемы со светом">Проблемы со светом</option>
                            <option value="Проблемы с ПО массовые">Проблемы с ПО массовые</option>
                            <option value="Проблема с картриджами">Проблема с картриджами</option>        
                            <option value="Проблемы с оборудованием">Проблемы с оборудованием</option>        
                            <option value="Проблемы с ПО одиночные">Проблемы с ПО одиночные</option>        
                        </select>

                        <p className='taskNameTitel'>Введите наименование задачи</p>
                        <input 
                            type="text" 
                            className='taskName'
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}/>

                        <p className="usernameTitel">Введите Ваше имя:</p>
                        <input 
                            type="text" 
                            className="username" 
                            placeholder="Имя" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>

                        <p className="emailTitel">Введите Ваш Email:</p>
                        <input 
                            type="text" 
                            className="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>

                        <p className="phoneTitel">Введите Ваш номер телефона:</p>
                        <input 
                            type="text" 
                            placeholder="+996(000)-00-00-00" 
                            id="phonenumder" 
                            className="phone" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}/>

                        <p className="companyTitel">Выберите Вашу компанию:</p>
                        <select 
                            name="company" 
                            id="" 
                            className="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}>
                        
                            <option value=""></option>
                            <option value="Алтын Тулпар">Алтын Тулпар</option>
                            <option value="Джи Моторс">Джи Моторс</option>
                            <option value="ДТ Техник">ДТ Техник</option>
                            <option value="БАКР">БАКР</option>
                            <option value="Киа Моторс">Киа Моторс</option>
                            <option value="ПрофПерспектива">ПрофПерспектива</option>
                            <option value="Тойота Центр">Тойота Центр</option>
                            <option value="Форвард Трейд">Форвард Трейд</option>
                            <option value="Эстокада">Эстокадаы</option>
                        </select> 

                        <p className="influenceTitel">Укажите влияние Вашей задачи на бизнес:</p>
                        <select 
                            name="influence" 
                            id="" 
                            className="influence"
                            value={influence}
                            onChange={(e) => setInfluence(e.target.value)}>
                        
                            <option value=""></option>
                            <option value="Низкое">Низкое</option>
                            <option value="Среднее">Среднее</option>
                            <option value="Высокое">Высокое</option>
                            <option value="Критическое">Критическое</option>
                        </select>

                        <p className="influenceDescrTitel">Опишите как Ваша задача влияет на бизнес:</p>
                        <textarea 
                            name="influenceDescr" 
                            className="influenceDescr" 
                            id="" 
                            cols="60" 
                            rows="2"
                            value={influenceDescr}
                            onChange={(e) => setInfluenceDescr(e.target.value)}
                        ></textarea>

                        <p className="UrgencyTitel">Укажите срочность выполнения Вашей задачи:</p>
                        <select 
                            name="Urgency" 
                            id="" 
                            className="Urgency"
                            value={urgency}
                            onChange={(e) => setUrgancy(e.target.value)}>

                            <option value=""></option>    
                            <option value="Низкая">Низкая</option>
                            <option value="Средняя">Средняя</option>
                            <option value="Высокая">Высокая</option>
                            <option value="Критическая">Критическая</option>
                        </select>

                        <p className="UrgencyDescrTitel">Опишите обоснование срочности выполнения Вашей задачи:</p>
                        <textarea 
                            name="UrgencyDescr" 
                            className="UrgencyDescr" 
                            id="" 
                            cols="60" 
                            rows="2" 
                            value={urgencyDescr} 
                            onChange={(e) => setUrgancyDescr(e.target.value)}
                        ></textarea>

                        <p className='descriptionTitel'>Опишить Вашу задачи:</p>
                        <textarea
                            name="description" 
                            id="" 
                            cols="60" 
                            rows="2"
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
        </>
    )
}

export default CreateTeh