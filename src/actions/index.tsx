import * as constants from '../constants';
// import actionCreateFactory from 'typescript-fsa';

// set type

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
    payload?: object;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// set action

/*
const actionCreator = actionCreateFactory();
export const incrementEnthusiasm = actionCreator<EnthusiasmAction>(constants.INCREMENT_ENTHUSIASM);
export const decrementEnthusiasm = actionCreator<EnthusiasmAction>(constants.DECREMENT_ENTHUSIASM);
*/
// export const incrementEnthusiasm = actionCreator(constants.INCREMENT_ENTHUSIASM);
// export const decrementEnthusiasm = actionCreator(constants.DECREMENT_ENTHUSIASM);

// old writing

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}
