import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/index';

function App() {
  const myState = useSelector((state) => state.changeNumber );
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="quantity">
        <a className='quantity__decre' title="decrement" onClick={() => dispatch(decNumber())}><span> - </span></a>
        <input type="text" name='quantity' className='quantity__input' value={myState} />
        <a className='quantity__incre' title="decrement" onClick={() => dispatch(incNumber())}><span> + </span></a>
      </div>
    </div>
  );
}

export default App;
