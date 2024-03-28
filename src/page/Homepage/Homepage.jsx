import React from 'react'

import logosvg from '../../Image/logo.svg'
import searchBtn from '../../Image/SearchBtn.svg'
import flyer from '../../Image/flyer.svg'

import '../Homepage/Homepage.css'
import '../Homepage/HomepageMedia.css'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div className='allContainer'>
            <header>
                <ul class="navbarHead">
                    <li class="logo"><a href="#"><img src={logosvg} alt="Logo" /></a></li>
                    <li>
                        <ul class="findOrLogin">
                            <li class="findBtn"><a href=""><img src={searchBtn} alt="SearchButton"/></a></li>
                            <li class="loginBtn" onClick={() => navigate(`/login`)}><a href="">Вход</a></li>
                        </ul>
                    </li>
                </ul>
            </header>

            <div className='containerSupportAtt'>
                <div className='supporFooterContainer'>
                    <h3 class="supportTitel">Единое окно АТТ</h3>
                    <p class="supportText">Добро пожаловать! С помощью Единого окна можно подать заявку в службу технической поддержки, службу АХО или анонимное обращение.</p>

                    <p class="sendWeMessage"><img src={flyer} alt="#" /> Свяжитесь с нами</p>
            
                    <ul className='supportList'>
                        <li class="block1C" onClick={() => navigate(`/create1c`)}>
                            <div class="innerBlock">
                                <div class="multiInnerblock">
                                    <h5>1C</h5>
                                    <p class="titel1C">Задачи по доработкам или разработке внутри 1С</p>
                                </div>
                                <p class="getToTaskBtn">
                                    {">"}
                                </p>
                            </div>
                        </li>

                        {/* <li class="blockWeb">
                            <div class="innerBlock">
                                <div class="multiInnerblock">
                                    <h5>Web</h5>
                                    <p class="titel1C">Задачи по доработкам или разработке Web</p>
                                </div>
                                <p class="getToTaskBtn">
                                    {">"}
                                </p>
                            </div>
                        </li> */}

                        <li class="blockDesing" onClick={() => navigate('/createanonym')}>
                            <div class="innerBlock">
                                <div class="multiInnerblock">
                                    <h5>Анонимное письмо</h5>
                                    <p class="titel1C">Вы можете оставить тут анонимное письмо</p>
                                </div>
                                <p class="getToTaskBtn">
                                    {">"}
                                </p>
                            </div>
                        </li>

                        <li class="blockTehSupport" onClick={() => navigate(`/createteh`)}>
                            <div class="innerBlock">
                                <div class="multiInnerblock">
                                    <h5>Техническая поддержка</h5>
                                    <p class="titel1C">Задачи технической поддержке, замена картриджей и т.д.</p>
                                </div>
                                <p class="getToTaskBtn">
                                    {">"}
                                </p>
                            </div>
                        </li>

                        <li class="blockAHO" onClick={() => navigate('/createaho')}>
                            <div class="innerBlock">
                                <div class="multiInnerblock">
                                    <h5>АХО</h5>
                                    <p class="titel1C">Задачи АХО, покупка/замена воды, уборка снега</p>
                                </div>
                                <p class="getToTaskBtn">
                                    {">"}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Homepage