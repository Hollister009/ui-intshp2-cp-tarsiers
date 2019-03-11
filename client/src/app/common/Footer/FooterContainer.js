import { connect } from 'react-redux';
import Footer from './Footer';

const mapStateToProps = state => ({
  toggleHFVisibility: state.toggleHFVisibility
});

export default connect(mapStateToProps)(Footer);
