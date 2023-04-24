import React, { useState } from "react";
import { YaMap } from "../components/YaMap";
import { Link } from "react-router-dom";
import Modal from "../components/modal/Modal";
import MapForm from "../components/MapForForm";

export default function Map() {

  const [modalActive, setModalActive] = useState(false)
  const [inputMail, setInputMail] = useState('')

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
      coordinates: [55.831903, 37.411961],
      title: "Пристань Метеоров"
    },
    {
      id: "3",
      coordinates: [55.763338, 37.565466],
      title: "Парк Ваккасалми"
    },

  ];
  

    return (
      <>
        <div className="flex flex-grow">
          <Link className="m-auto mt-[2%] text-5xl" to = {`/`}>Skate Map</Link>
          <div className='absolute top-[2%] right-[2%] border-2 h-12 w-12 border-gray-800 rounded-full m-auto'>
            <Link to = {`/profile`}>
              <img 
              className="h-10 rounded-full m-auto" 
              src="https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png"/>
            </Link>
          </div>
        </div>
        <nav className="flex items-center m-[2%]">
            <Link className="a" to = {`/map`}>Карта спотов</Link>
            <Link className="a" to = {`/school`}>Школа трюков</Link>
            <a className="a">Блог</a>
            <a className="a">Правила скейтпарков</a>
        </nav>
        <div className="w-[96%] m-auto">
          <button className='addSpot' onClick={() => setModalActive(true)}>Добавить спот</button>
          <YaMap points={points}/>
        </div>
        <Modal id="modal" active={modalActive} setActive={setModalActive}>
          <div className="flex flex-start items-center justify-center">
            <div className="w-1/2 m-[5%]">
              <MapForm/>
            </div>
            <div className="flex flex-col items-center w-1/2 min-h-full">
              <h1 className="text-3xl">Заполните форму</h1>
              <h2 className="text-xl mt-3">Введите вашу почту:</h2>
              <input id="inMail" value={inputMail} onChange={(event) => setInputMail(event.target.value)} className="border-2 border-gray-800 rounded-md p-1 mt-3 w-2/3"></input>
              <h2 className="text-xl mt-3">Введите название спота:</h2>
              <input id="inName" className="border-2 border-gray-800 rounded-md p-1 mt-3 w-2/3"></input>
              <h2 className="text-xl mt-3">Введите описание спота:</h2>
              <textarea id="taDescription" className="border-2 border-gray-800 rounded-md p-1 mt-3 w-2/3 h-32 resize-none"></textarea>
              <h2 className="text-xl mt-3">Добавьте фото:</h2>
              <input type='file' className="p-1 mt-[3%] w-2/3"></input>
              <button 
                className="border-2 border-gray-800 flex items-center justify-center rounded-md p-1 mt-[5%] w-1/3"
                onClick={() =>{
                  setModalActive(false);
                  }}>
                Отправить
                </button>
            </div>
          </div>
        </Modal>
      </>
    );
  }