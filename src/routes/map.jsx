import React, { useState } from "react";
import { YaMap } from "../components/YaMap";
import { Link } from "react-router-dom";
import Modal from "../components/modal/Modal";

export default function Map() {

  const [modalActive, setModalActive] = useState(false)

  const points = [
    {
      id: '1',
      coordinates: [59.836172, 30.164347],
      title: 'Скейт-парк у речки',
      description: 'Скейтпарк от компании FK-Ramps. Год постройки: 2023',
      photo: 'https://cdnstatic.rg.ru/uploads/images/2022/08/29/1_dji_0143_402.jpg'
    },
    {
      id: "2",
      coordinates: [61.699623, 30.690952],
      title: "Пристань Метеоров"
    },
    {
      id: "3",
      coordinates: [61.705707, 30.672616],
      title: "Парк Ваккасалми"
    }
  ];

    return (
      <>
        <div className="flex flex-grow">
          <h1 className="m-auto mt-[2%] text-5xl"><Link to = {`/`}>Skate Map</Link></h1>
          <div className='absolute top-[2%] right-[2%] border-2 h-12 w-12 border-gray-800 rounded-full m-auto'></div>
        </div>
        <nav className="flex items-center m-[2%]">
            <a className="a"><Link to = {`/map`}>Карта спотов</Link></a>
            <a className="a">Школа трюков</a>
            <a className="a">Блог</a>
            <a className="a">Правила скейтпарков</a>
        </nav>
        <div className="w-[96%] m-auto">
          <button className='addSpot' onClick={() => setModalActive(true)}>Добавить спот</button>
          <YaMap points={points}/>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl">Заполните форму</h1>
            <h2 className="text-xl mt-[5%]">Введите вашу почту:</h2>
            <input className="border-2 border-gray-800 rounded-md p-1 mt-[3%] w-2/3" type={Text}></input>
            <h2 className="text-xl mt-[3%]">Введите название спота:</h2>
            <input className="border-2 border-gray-800 rounded-md p-1 mt-[3%] w-2/3" type={Text}></input>
            <h2 className="text-xl mt-[3%]">Введите описание спота:</h2>
            <textarea className="border-2 border-gray-800 rounded-md p-1 mt-[3%] w-2/3 h-52 resize-none"></textarea>
            <h2 className="text-xl mt-[3%]">Добавьте фото:</h2>
            <input type='file' className="p-1 mt-[3%] w-2/3"></input>
            <button 
              className="border-2 border-gray-800 flex items-center justify-center rounded-md p-1 mt-[3%] w-1/3"
              onClick={() => setModalActive(false)}>Отправить</button>
          </div>
        </Modal>
      </>
    );
  }