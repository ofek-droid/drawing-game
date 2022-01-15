import React, { createRef, forwardRef, LegacyRef, MouseEventHandler, MutableRefObject, Ref, useEffect, useRef, useState } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas"
import colorHSV from "../types/colorHSV";

interface refType {
    undo():void;
}

interface propType {
    color:colorHSV;
    stroke:number;
    bgColor:colorHSV
    ref: React.MutableRefObject<ReactSketchCanvasRef | null>
}



export default forwardRef((props:propType,ref:Ref<ReactSketchCanvasRef>) => {
    return <ReactSketchCanvas 
        canvasColor={hsla(props.bgColor)} 
        ref={ref}
        strokeWidth={props.stroke}
        strokeColor={`hsla(${props.color.h},${props.color.s}%,${props.color.v}%,${props.color.a * 2})`}
        className="border-2 "
        style={{ 
                borderRadius:20,
                overflow:'clip',
                boxShadow:'0px 5px 30px 1px black',
                marginTop:40,
            }}    
        width="70%"
        height="80%"
        eraserWidth={props.stroke}
        
    />
})
function hsla(color:colorHSV):string {
    return `hsla(${color.h},${color.s}%,${color.v}%,${color.a})`;
}