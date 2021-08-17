import './Modal.css';

const Modal = ({active, setModalActive, bug}) => {
    let descriptionError;

    if(bug === 'result is greater than MAX_SAFE_INTEGER') {
        descriptionError = <IsGreater />
    } else if(bug === 'argument is not a number') {
        descriptionError = <IsNotNumber />
    }

     return(
        <div className={active ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                {descriptionError}
            </div>
        </div>
    )
}

export default Modal;

const IsGreater = () => {
    return (
        <div>The result is greater than Number. MAX_SAFE_INTEGER. Please provide a different range and try again.</div>
    )
}  

const IsNotNumber = () => {
    return (
        <div>You specified a non-numeric value. Please provide the correct value and try again.</div>
    )
}