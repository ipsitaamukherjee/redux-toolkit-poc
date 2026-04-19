import './styles.css'

export default function Counter() {
    return (
        <div className="counter-container">
            <h2 className="counter-title">Counter</h2>
            <div className="counter-card">
                <span className="counter-value-label">Value:</span>
                <span className="counter-value">{}</span>
                <div className="counter-buttons">
                    <button className="counter-btn increment">Increment</button>
                    <button className="counter-btn decrement">Decrement</button>
                </div>
            </div>
        </div>
    )
}