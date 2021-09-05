import './Input.css'

function Input(props) {
    return (
        <input
            className = "fields"
            id={props.id} 
            type="text"
            onChange={props.onChangeValue}
            value={props.value}/>
    )
}

export default Input;