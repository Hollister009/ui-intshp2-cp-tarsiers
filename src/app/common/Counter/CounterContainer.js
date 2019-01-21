import { connect } from 'react-redux';
import Counter from './Counter';

const mapStateToProps = state => ({ counter: state.counter.value });

const CounterContainer = connect(mapStateToProps)(Counter);

export default CounterContainer;
