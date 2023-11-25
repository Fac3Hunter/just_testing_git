import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Product from "./Product";
import Users from "./User";
import Employee from "./Employee";
import "./styles.css";
//import { styles } from "./styles";
import styled from "styled-components";
import styles from "./components/Buttons.module.css";
import jQuery from "jquery";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
  }, []); // второй параметр - для стейтов, оно будет проигрываться каждый раз с их изменениями

  // Есть хук передающий контексты

  // Существуют Рефы - это стейты, но ёбнутые и отличия от переменных попробуй найди
  // у этого хука есть свои вариации, которые срабатывают в разные моменты прогрузки сайта

  //const str1 = "привет, ";
  //const str2 = "Дрон";
  //
  ////const name = "user";
  ////const age = "30";
  //
  //const arr = [1, 2, 3, 4, 5];
  //
  //const obj = { name: "john", surname: "smit" };
  //
  //const attr = "block";
  //
  //const li1 = <li>text1</li>;
  //const li2 = <li>text2</li>;
  //const li3 = <li>text3</li>;
  //const lis = (
  //  <div>
  //    {li1}
  //    {li2}
  //    {li3}
  //  </div>
  //);
  //
  //const items = (
  //  <>
  //    <li>text1</li>
  //    <li>text2</li>
  //    <li>text3</li>
  //  </>
  //);
  //
  //const num = 4;
  //
  //const isAdult = false;
  //
  //const rslt = isAdult ? <h1>( *)(* )</h1> : <h1>А вот и нет сисек.</h1>;
  //const isAuth = false;
  //
  //function getDigitsSum(number) {
  //  let sum = 0;
  //  for (let i of String(number)) {
  //    sum += Number(i);
  //  }
  //  return sum;
  //}
  //function show(n) {
  //  alert(n);
  //}
  //function logEvent(event) {
  //  console.log(event.target);
  //}
  //function func(arg, arg2, event) {
  //  console.log(arg, arg2, event.target);
  //}
  //const arr2 = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>].map(
  //  function (item, index) {
  //    return <li key={nanoid()}> {item.innerText}</li>;
  //  }
  //); // пофиксил ошибку с ключами
  //const arr3 = ["a", "b", "c", "d", "e"];
  //
  //const users = [
  //  { id: nanoid(), name: "user1", surn: "surn1", age: 30 },
  //  { id: nanoid(), name: "user2", surn: "surn2", age: 31 },
  //  { id: nanoid(), name: "user3", surn: "surn3", age: 32 },
  //];
  //const usersRmd = users.map(function (item, index) {
  //  return (
  //    <li key={item.id}>
  //      {item.name}:{item.age}
  //    </li>
  //  );
  //});
  //const arr3Rmd = arr3.map(function (item, index) {
  //  return <li key={index}>{item}</li>; // верно добавлять индексы, верно добавлять item.id
  //});
  //
  //const [name, setName] = useState("Jhon");
  //const [surName, setSurName] = useState("Doe");
  //const [age, setAge] = useState("19");
  //
  //function changeName(name) {
  //  setName(name);
  //}
  //function changeSurName(name) {
  //  setSurName(name);
  //}
  //const [banned, setBan] = useState(false);
  //
  //const [numSt, setNumSt] = useState(0);
  //
  //const [value, setValue] = useState("smValue");
  //const [value2, setValue2] = useState("smValue2");
  //
  //const [checked, setChecked] = useState(true);
  //const [selectValue, setSelectValue] = useState("Мск");
  //const [radioValue, setRadioValue] = useState("1");
  //
  ////условный рендеринг
  //let message;
  //if (checked) {
  //  message = (
  //    <>
  //      <h2>Ура, вам уже есть 18</h2>
  //      <p>здесь расположен контент только для взрослых</p>
  //    </>
  //  );
  //} else {
  //  message = <p>увы, вам еще нет 18 лет:(</p>;
  //}
  //
  //const initDate = {
  //  year: 2025,
  //  month: 12,
  //  day: 31,
  //};
  //const [date, setDate] = useState(initDate);
  //let timeRN = new Date(date.year, date.month, date.day);
  //function handleChange(prop, event) {
  //  setDate({ ...date, ...{ [prop]: event.target.value } });
  //}
  //// иногда нужно воспользоваться стейтами только один раз и при их обновлении не обновлять какой-то тег
  //// для этого есть дефолтные значения
  //// defaultValue и defaultChecked
  //
  //// свойственно хранить данные в массивах и объектах на всяких бд
  //// соответственно со стейтами придётся ебаться через объекты
  //// объекты и массивы в реакте нельзя менять напрямую, нужно чтобы они оставались иммутабельными
  //
  //const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  //const [count, setCount] = useState(6);
  //const initNotes = [
  //  {
  //    id: "GYi9G_uC4gBF1e2SixDvu",
  //    prop1: "value11",
  //    prop2: "value12",
  //    prop3: "value13",
  //  },
  //  {
  //    id: "IWSpfBPSV3SXgRF87uO74",
  //    prop1: "value21",
  //    prop2: "value22",
  //    prop3: "value23",
  //  },
  //  {
  //    id: "JAmjRlfQT8rLTm5tG2m1L",
  //    prop1: "value31",
  //    prop2: "value32",
  //    prop3: "value33",
  //  },
  //];
  //const [notesObj, setObjNotes] = useState(initNotes);
  //
  //const addItem = () => {
  //  setNotes([...notes, count]);
  //  setCount(count + 1);
  //};
  //const addNote = () => {
  //  const newNote = {
  //    id: nanoid(),
  //    prop1: `value${notesObj.length + 1}1`,
  //    prop2: `value${notesObj.length + 1}2`,
  //    prop3: `value${notesObj.length + 1}3`,
  //  };
  //
  //  setObjNotes([...notes, newNote]);
  //};
  //const result = notes.map((note, index) => {
  //  return <li key={index}>{note}</li>;
  //});
  //const users = [
  //  { id: nanoid(), name: "user1", surn: "surn1", age: 30 },
  //  { id: nanoid(), name: "user2", surn: "surn2", age: 31 },
  //  { id: nanoid(), name: "user3", surn: "surn3", age: 32 },
  //];
  //const result = users.map((user) => {
  //  return (
  //    <Users key={user.id} name={user.name} surname={user.surn} age={user.age} />
  //  );
  //});

  const NewP = styled.p`
    background-color: #c2beb7;
    font-size: 40px;
    font-weight: bold;
  `;
  const EvenNewerP = styled(NewP)`
    font-size: 50px;
    color: #ffffff;
    background-color: #211f1c;
  `;
  return (
    <div class="class1">
      <NewP> HAHAHAHAH!</NewP>
      <EvenNewerP> MUAHDHADDAHAHAHHA!</EvenNewerP>
      <Users />

      <Employee name="Jhon" surname="Doe" paycheck="10000" />
    </div>
    //<div>

    //  <p style={styles.class1}>
    //  <Product />
    //</p>
    //  <input type="button" onClick={addNote} />
    //  <ul>
    //    {notesObj.map((note) => (
    //      <li key={note.id}>{`${note.prop1}, ${note.prop2}, ${note.prop3}`}</li>
    //    ))}
    //  </ul>
    //  <input type="button" onClick={addItem} />
    //  <ul>{result}</ul>
    //  <p>{timeRN.getDay()}</p>
    //  <input
    //    value={date.year}
    //    onChange={(event) => {
    //      handleChange("year", event);
    //    }}
    //  />
    //  <input
    //    value={date.month}
    //    onChange={(event) => {
    //      handleChange("month", event);
    //    }}
    //  />
    //  <input
    //    value={date.day}
    //    onChange={(event) => {
    //      handleChange("day", event);
    //    }}
    //  />
    //  <p defaultValue={value}></p>
    //  <input type="checkbox" defaultChecked={checked} />
    //  <input
    //    type="radio"
    //    name="radio"
    //    value="1"
    //    checked={radioValue === "1" ? true : false}
    //    onChange={(event) => {
    //      setRadioValue(event.target.value);
    //    }}
    //  />
    //  <input
    //    type="radio"
    //    name="radio"
    //    value="2"
    //    checked={radioValue === "2" ? true : false}
    //    onChange={(event) => {
    //      setRadioValue(event.target.value);
    //    }}
    //  />
    //  <input
    //    type="radio"
    //    name="radio"
    //    value="3"
    //    checked={radioValue === "3" ? true : false}
    //    onChange={(event) => {
    //      setRadioValue(event.target.value);
    //    }}
    //  />
    //  <p>Здесь написано {radioValue}</p>
    //  <input
    //    type="checkbox"
    //    checked={checked}
    //    onChange={() => setChecked(!checked)}
    //  />
    //  {message}
    //  <select
    //    value={selectValue}
    //    onChange={(event) => setSelectValue(event.target.value)}
    //  >
    //    <option>Мск</option>
    //    <option>Юпитер</option>
    //    <option>Новоросс</option>
    //    <option>Лондон</option>
    //  </select>
    //  <p>Выбран {selectValue}</p>
    //  <p>{value}</p>
    //  <input value={value} onChange={(event) => setValue(event.target.value)} />
    //  <p>{value2.length}</p>
    //  <input
    //    value={value2}
    //    onChange={(event) => setValue2(event.target.value)}
    //  />
    //  <p>{numSt}</p>
    //  <button onClick={() => setNumSt(numSt + 1)}>Увеличить</button>
    //  <button onClick={() => setNumSt(numSt - 1)}>Уменьшить</button>
    //  <p>name: {name}</p>
    //  <p>surName: {surName}</p>
    //  <p>age: {age}</p>
    //
    //  <button onClick={() => changeName("Face")}>Change Name</button>
    //  <button onClick={() => changeSurName("Hunter")}>Change SurName</button>
    //  <p>{banned ? "Юзер в бане." : "Юзеру нормально"}</p>
    //  <button onClick={banned ? () => setBan(false) : () => setBan(true)}>
    //    🔨
    //  </button>
    //</div>
    // значения передаются в фигурных скобках:
    // если придётся использовать таблицы в коде, то их синтаксис на react выглядит так
    // тернарный оператор для вывода только при значении true немного хитрый, тк используется булиановая логика: &&
    // для false ! smthng && smthng2

    // Ошибка " Warning: Each child in an array or iterator should have a unique "key" prop. ", фиксится задачей ключей в циклах
    //<div>
    //  <h1>{nanoid()}</h1>
    //  <ul>{usersRmd}</ul>
    //  <ul>{arr3Rmd}</ul>
    //  {arr2}
    //  <button onClick={() => show(1)}>act1</button>
    //  <button onClick={(target) => func(1, 2, target)}>three</button>
    //  <button onClick={() => show(2)}>act2</button>
    //  <button onClick={logEvent}>act2</button>
    //  <button onClick={() => show(3)}>act3</button>
    //  {getDigitsSum(1234)}
    //  {isAuth && "Вы авторизованы."}
    //  {!isAuth && "Пожалуйста, авторизуйтесь."}
    //  {rslt}
    //  {isAdult ? <h1>( *)(* )</h1> : <h1>А вот и нет сисек.</h1>}
    //  result: {Math.sqrt(num)}
    //  <table>
    //    <thead>
    //      <tr>
    //        <td>Hi!</td>
    //        <td>Hi!</td>
    //        <td>Hi!</td>
    //      </tr>
    //    </thead>
    //    <tbody>
    //      <tr>
    //        <td>Dron!</td>
    //        <td>Dron!</td>
    //        <td>Dron!</td>
    //      </tr>
    //    </tbody>
    //    <tfoot>
    //      <tr>
    //        <td>Nogis</td>
    //        <td>Nogis</td>
    //        <td>Nogis</td>
    //      </tr>
    //    </tfoot>
    //  </table>
    //  <input /> <br />
    //  <input /> <br />
    //  <input /> <br />
    //  {lis}
    //  <p id={attr}>{str1}</p>
    //  <p>{str2}</p>
    //  name: {name}
    //  <br></br>
    //  age: {age}
    //  <ul>
    //    <li>{arr[0]}</li>
    //    <li>{arr[1]}</li>
    //    <li>{arr[2]}</li>
    //    <li>{arr[3]}</li>
    //    <li>{arr[4]}</li>
    //  </ul>
    //  <p>
    //    name: <span>{obj.name}</span>, <br />
    //    surname: <span>{obj.surname}</span>,
    //  </p>
    //</div>

    // Если нужно вернуть незакрытый тег, то надо использовать закрытую версию:
    //<input />
    // Если нужно вернуть пустой тег, то та же схема
    //<>
    //  <input />
    //  <input />
    //  <input />
    //</>
    // на самом деле можно убрать скобочку и весь первый тег вернётся через ретёрн
    //<>
    //  <ul>
    //    <li>text1</li>
    //    <li>text2</li>
    //    <li>text3</li>
    //  </ul>
    //  <ul>
    //    <li>text1</li>
    //    <li>text2</li>
    //    <li>text3</li>
    //  </ul>
    //</> // эти пустые теги используются для того чтобы передавать несколько тегов не задавая им общего родителя, что может сломать вёрстку
    //<div>
    //  <p class="firstComp">Основной Компонент</p>
    //  <p class="secondComp">Основной Компонент2</p>
    //  <p>Основной Компонент3</p>
    //</div>
  );
}

export default App;
