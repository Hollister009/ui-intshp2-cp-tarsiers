import { connect } from 'react-redux';
import Footer from './Footer';

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Footer);
