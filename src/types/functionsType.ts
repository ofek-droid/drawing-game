import colorHSV from "./colorHSV";

type functionsType = {
    undo: (() => void) | null;
    redo: (() => void) | null;
    eraseMode: ((b:boolean) => void) | null;
    fill: ((c:colorHSV) => void) | null
}
export default functionsType;