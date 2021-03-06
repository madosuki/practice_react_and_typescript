import { connect, Dispatch } from 'react-redux';
import Hello, { Props } from '../components/Hello';
import * as actions from '../actions';
import { StoreState } from '../types/index';
// name: languageName

export function mapStateToProps ({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

// Dispatch<actions.EnthusiasmAction>
export function mapDispatchToProps (dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm())
    };
}

export default connect<{}, Props>(mapStateToProps, mapDispatchToProps)(Hello);
