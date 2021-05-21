import { connect } from 'react-redux';
import { setPasswordValue } from 'src/actions';
import InputPassword from 'src/components/Settings/InputPassword';

const mapStateToProps = (state) => ({
  value: state.settings.password,
});

const mapDispatchToProps = (dispatch) => ({
  setPasswordValue: (value) => dispatch(setPasswordValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputPassword);
