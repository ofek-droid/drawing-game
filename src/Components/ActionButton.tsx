import Pencil from '../assets/Pencil.svg'
import Eraser from '../assets/Eraser.svg'
import Undo from '../assets/Undo.svg'
import Redo from '../assets/Redo.svg'
import Fill from '../assets/Bucket.svg'

const object = {
    'pencil':Pencil,
    'eraser':Eraser,
    'undo':Undo,
    'redo':Redo,
    'fill': Fill
}

type btnType = 'pencil' | 'eraser' | 'undo' | 'redo' | "fill"

interface propType {
    type:btnType,
    rotate?:number
    onClick:() => void
}
export default (props:propType) => {

    return (<button onClick={props.onClick} className='w-20 h-20 bg-primary-button border-4 rounded-lg p-2'>
        <img className={' w-full h-full rotate-' + props.rotate} src={object[props.type]} alt="" />
    </button>)
}