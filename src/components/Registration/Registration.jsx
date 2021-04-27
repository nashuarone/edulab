import React, { useState } from 'react'
import { registrationAPI } from '../../api/api'
import s from "./Registration.module.css"

const Registration = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [myname, setMyname] = useState("")
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const handlleChangeE = (e) => {
    setEmail(e.target.value)
  }
  const handlleChangeP = (e) => {
    setPassword(e.target.value);
  };
  const handlleChangeM = (e) => {
    setMyname(e.target.value);
  };
  const handlleChangeS = (e) => {
    setSurname(e.target.value);
  };
  const handlleChangeB = (e) => {
    setBirthdate(e.target.value);
  };
  return (
    <div className={s.mainLoginForm}>
      <h1>Регистрация</h1>
      <div className={s.inputsFlex}>
        <input
          className={s.regInput}
          value={email}
          onChange={handlleChangeE}
          type="text"
          placeholder="Введите email"
        />
        <input
          className={s.regInput}
          value={password}
          onChange={handlleChangeP}
          type="password"
          placeholder="Введите пароль"
        />
        <input
          className={s.regInput}
          value={myname}
          onChange={handlleChangeM}
          type="text"
          placeholder="Введите имя"
        />
        <input
          className={s.regInput}
          value={surname}
          onChange={handlleChangeS}
          type="text"
          placeholder="Введите фамилию"
        />
        <input
          className={s.regInput}
          value={birthdate}
          onChange={handlleChangeB}
          type="date"
        />
        <button
          className={s.regBtn}
          onClick={() => registrationAPI(email, password, myname, surname)}
        >
          Зарегеистрироваться
        </button>
      </div>
    </div>
  );
}

export default Registration
