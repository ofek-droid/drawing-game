import { useEffect, useRef, useState } from "react";
import { ReactSketchCanvasRef } from "react-sketch-canvas"
import SketchCanvas from "../Components/SketchCanvas";
import Wheel from '@uiw/react-color-wheel'
import colorHSV from "../types/colorHSV";
import Slider from "../Components/Slider";
import ButtonList from "../Components/ButtonList";
import functionsType from "../types/functionsType";

export default () => {


    const [theme,setTheme] = useState("Menashe");

    const [color,setColor] = useState<colorHSV>({h:0,s:0,v:70,a:1});
    
    const [stroke,setStroke] = useState(3);
    const [functions,setFunctions] = useState<functionsType>({undo:null, eraseMode:null,redo:null,fill:null});
    const [canvasColor,setCanavasColor] = useState<colorHSV>({h:0,s:0,v:70,a:1})
    const [controlPressed,setControlPressed] = useState(false);
    const [zPressed,setZPressed] = useState(false);

    const canvasRef = useRef<null | ReactSketchCanvasRef>(null);
    
    useEffect(() => {
        if(canvasRef.current) {
            const {undo,redo,eraseMode} = canvasRef.current;
            const fill = (c:colorHSV) => {
                setCanavasColor(c);
                canvasRef.current?.resetCanvas();
                canvasRef.current?.eraseMode(false);
            }
            

            setFunctions({undo,redo,eraseMode,fill});
        }
        document.addEventListener('keydown',(e) => {
            if(e.key === "Control") {
                setControlPressed(true);
                return;
            }
            if(e.key === "z") {
                setZPressed(true);

                return;
            }

        });
        document.addEventListener('keyup',(e) => {
            if(e.key === "Control") {
                setControlPressed(false);
                return;
            }
            if(e.key === "z") {
                setZPressed(false);
                return;
            }
        })
    },[]);

    useEffect(()=> {
        if(controlPressed && zPressed)  {
            canvasRef.current?.undo();
        }
    },[controlPressed,zPressed])

    return ( 
        <div className="h-full bg-primary-background p-5" >
            <h1 className="
            text-4xl
             text-primary-text

             ">Theme: {theme}</h1>

            <div className="h-full flex">
                <SketchCanvas bgColor={canvasColor} stroke={stroke} color={color} ref={canvasRef}/>
                <nav className="w-4/12 h-full border-2 flex flex-col items-center">
                    <Wheel 
                        color={color}
                        onChange={(newColor) => {setColor({...color,...newColor.hsva}); console.log(color)}}
                    />
                    <Slider onChange={setStroke}/>
                    <ButtonList color={color} functions={functions}/>
                </nav>
            </div>
        </div>
    );
}