import { createRef, forwardRef, Ref, useEffect, useRef, useState } from "react"
import { ReactSketchCanvasRef } from "react-sketch-canvas"
import colorHSV from "../types/colorHSV";
import functionsType from "../types/functionsType";
import ActionButton from "./ActionButton"

interface propType {
    functions:functionsType;
    color:colorHSV
}

export default ((props:propType) => {
        const {eraseMode,redo,undo,fill} = props.functions;
        return <div className="grid grid-cols-2 gap-3 mt-5">
            <ActionButton onClick={() => eraseMode? eraseMode(false): null} type="pencil" rotate={45}/>
            <ActionButton onClick={() => eraseMode? eraseMode(true) : null} type="eraser" rotate={30}/>
            <ActionButton onClick={() => undo? undo() : null} type="undo" rotate={0}/>
            <ActionButton onClick={() => redo? redo() : null} type="redo" rotate={0}/>
            <ActionButton onClick={() => fill? fill(props.color) : null} type="fill" rotate={0}/>
        </div>
    }
)