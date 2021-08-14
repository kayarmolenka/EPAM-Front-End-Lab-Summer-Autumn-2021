function Input(props) {
    return (
        <input
            id={props.id} 
            type="text"
            onChange={props.onChangeValue}
            value={props.value}/>
    )
}

export default Input;