

export default function Root() {
    return (
      <>
      <div className="flex flex-grow">
        <h1 className="m-auto mt-[2%] text-5xl">Skate Map</h1>
        <div className='absolute top-[2%] right-[2%] border-2 h-12 w-12 border-gray-800 rounded-full m-auto'></div>
      </div>
        <nav className="flex items-center m-[2%]">
            <a>Карта спотов</a>
            <a>Школа трюков</a>
            <a>Блог</a>
            <a>Правила скейтпарков</a>
        </nav>
      </>
    );
  }