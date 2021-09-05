import './SumRage.css';

function SumRage({sum}) {
    return (
        <div className="result"> Sum of rage is <span className="result_number">{sum}</span></div>
    )
}

export default SumRage;