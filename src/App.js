import AppCss from './App.module.css';
import ColorDice from './Components/ColorDice';
import { useEffect, useState } from 'react';


const generateColor = () => {
  let randomHexCode = Math.floor(Math.random() * 0xffffff).toString(16);
  randomHexCode = randomHexCode.padStart(6, "0");
  return randomHexCode;
}

const App = () => {
  const [palette, setPalette] = useState([]);
  const [signal, setSignal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const arr = [];
    for(let i = 0; i < 12; i++){
      arr.push(generateColor());
    }
    setPalette([...arr]);
    setIsLoading(false);
    console.log('loadign...')
  }, [isLoading]);


  const handleClick = (e) => {
    setIsLoading(true);
  }


  return (
    <div className='text-center'>
      <h1 className='text-green-500 text-3xl mt-5'>Color Palete</h1>
      <div className='flex justify-between flex-wrap mx-[25%] my-8 bg-slate-100 p-10 rounded ' >
      {
        palette.map((item, index) => {
          return (
            <ColorDice backgroundColor={item} key={index}/>
          )
        })
      }
      </div>
      <button className={AppCss.customBtn} onClick={handleClick}>Refresh Palette</button>
    </div>
  )
}

export default App;
