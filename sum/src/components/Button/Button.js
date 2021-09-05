import './Button.css'

function Button(props) {
    return(
        <button
            className="btnAdd"
            onClick={props.onCalculateSumOfRange}>Click here</button>
    )    
}

export default Button;