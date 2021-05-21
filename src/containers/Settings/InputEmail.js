import { connect } from 'react-redux';
import { setEmailValue } from 'src/actions';
import InputEmail from 'src/components/Settings/InputEmail';

const mapStateToProps = (state) => ({
  value: state.settings.email,
});

const mapDispatchToProps = (dispatch) => ({
  setEmailValue: (value) => dispatch(setEmailValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputEmail);
