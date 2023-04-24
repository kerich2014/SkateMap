import { Link } from "react-router-dom";

export default function Profile() {
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
      </>
    );
  }