// Главный файл для реакта
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import TableStars from './components/screens/home/tableStars-item/tableStars-item';
import Head from './components/screens/home/head-item/head-item'
import reportWebVitals from './reportWebVitals';
import Button from './components/screens/home/Button-item/Button-item';
import Input from './components/screens/home/input-item/input-item';
import Answer from './components/screens/home/answer-item/answer-item';
import Footer from './components/screens/home/footer-item/footer-item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <TableStars />
    <Answer text="Я легко записался(-лась) для получения консультации"/>
    <Answer text="Время ожидания консультации от момента записи составило меньше 10 дней"/>
    <Answer text="Специалист подробно и понятно ответил на все мои вопросы"/>
    <Answer text="У меня не возникло технических сложностей во время консультации. А если возникло, все оперативно решилось"/>
    <Answer text="Рекомендации специалиста были для мена полезны/информативны"/>
    <Answer text="Я буду рекомендовать своим знакомым и друзьям получение подобных консультаций"/>
    <Input />
    <Button text="Отправить анкету"/>
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
