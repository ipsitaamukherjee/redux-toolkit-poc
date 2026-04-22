import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slice/CounterSlice'
import './styles.css'

export default function Counter() {
    const count = useSelector((state) => state.counter.value )
    const dispatch = useDispatch()

    return (
        <div className="counter-container">
            <h2 className="counter-title">Counter</h2>
            <div className="counter-card">
                <span className="counter-value-label">Value: {count}</span>
                <span className="counter-value">{}</span>
                <div className="counter-buttons">
                    <button className="counter-btn increment" onClick={() => dispatch(increment())}>Increment</button>
                    <button className="counter-btn decrement" onClick={() => dispatch(decrement())}>Decrement</button>
                </div>
            </div>
        </div>
    )
}