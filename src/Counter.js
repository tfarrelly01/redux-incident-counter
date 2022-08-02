import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, set } from './actions';

import { SetCounter } from './SetCounter';

export const Counter = () => {
  const incident = 'Incident';

  // mapStateToProps equivalent from connect API in react-redux
  const count = useSelector((state) => state.count);

  // mapDispatchToProps equivalent from connect API in react-redux
  const dispatch = useDispatch();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
