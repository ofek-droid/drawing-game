interface propType  {
    onChange: (n:number) => void;
}

export default (props:propType) => {
    return <input onChange={e => props.onChange(parseInt(e.target.value))} 
    type="range" min={3} max={120} 
    defaultValue={3}
    className="input-range"/>
}