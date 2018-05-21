import { Action } from 'redux';

export default interface PutStringAction extends Action {
    type: 'ADD_TEXT';
    id: number;
    text: string;
}