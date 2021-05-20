import { connect } from 'react-redux';
import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  currentMessage: state.currentMessage,
});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
