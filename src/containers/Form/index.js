import { connect } from 'react-redux';
import { setMessageValue } from 'src/actions';
import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  inputValue: state.currentMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setMessageValue: (inputValue) => dispatch(setMessageValue(inputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
