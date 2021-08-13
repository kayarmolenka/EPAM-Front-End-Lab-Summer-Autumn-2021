function Input(props) {
    return (
        <input 
            type="number"
            onChange={props.onReceiveValue}
            value={0}/>
    )
}

export default Input;