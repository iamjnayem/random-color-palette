import ColorDiceStyle from './ColorDice.module.css'
import { useEffect, useState } from 'react';
const ColorDice = (props) => {
    const [clicked, setClicked] = useState(false);
    const [code, setCode] = useState(props?.backgroundColor.toUpperCase() ?? "");

    useEffect(() => {
        if (clicked === true) {
            let actualCode = code;
            window.navigator.clipboard.writeText(actualCode);
            setCode("copied");
            setTimeout(() => {
                setCode(actualCode);
            }, 300);
        }
        setClicked(false);

    }, [clicked])

    const style = {
        backgroundColor: `#${props?.backgroundColor ?? ""}`
    }

    const handleClick = (e) => {
        setClicked(true);
    }

    return (
        <div className={ColorDiceStyle.colorContainer} onClick={handleClick}>
            <div className={ColorDiceStyle.color} style={style}></div>
            <p className={ColorDiceStyle.colorCode}>{code}</p>
        </div>
    )
}

export default ColorDice;