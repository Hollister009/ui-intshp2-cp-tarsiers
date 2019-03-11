import { connect } from 'react-redux';
import Footer from './Footer';

const mapStateToProps = state => ({
  headerFooterVisibility: state.headerFooterVisibility
});

export default connect(mapStateToProps)(Footer);
