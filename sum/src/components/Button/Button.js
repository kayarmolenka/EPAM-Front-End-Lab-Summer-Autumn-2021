import './Button.css'

function Button(props) {
    return(
        <button
            className="btnAdd"
            onClick={props.onAddField}>Click here</button>
    )    
}

export default Button;