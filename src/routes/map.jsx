import React from "react";
import { YaMap } from "../components/YaMap";
import { Link } from "react-router-dom";

export default function Map() {

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
          <YaMap points={points}/>
        </div>
      </>
    );
  }