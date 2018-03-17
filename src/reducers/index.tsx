// reducers
import { incrementEnthusiasm, decrementEnthusiasm } from '../actions';
import { INITIAL_STATE } from '../types/index';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

// old import
// import { EnthusiasmAction, incrementEnthusiasm, decrementEnthusiasm } from '../actions';
// import { StoreState } from '../types/index';
// import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

// old implementation
/*
export function enthusiasm (state: StoreState, aciton: EnthusiasmAction): StoreState {
    switch (aciton.type) {
        case INCREMENT_ENTHUSIASM:
            return {
                ...state,
                enthusiasmLevel: Math.max(1, state.enthusiasmLevel + 10)
            };
        case DECREMENT_ENTHUSIASM:
            return {
                ...state,
                enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 10)
            };
        default:
            break;
    }

    return state;
}
*/

export const enthusiasm = reducerWithInitialState(INITIAL_STATE)
.case(incrementEnthusiasm, (state, enthusiasmLevel) => ({
        ...state, 
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel + 1)
    }))
.case(decrementEnthusiasm, (state, enthusiasmLevel) => ({
    ...state,
    enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
}));