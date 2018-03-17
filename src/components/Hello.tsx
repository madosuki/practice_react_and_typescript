import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
};

const Hello = ({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) => {
    if (enthusiasmLevel <= 0) {
        throw new Error('熱意が足りないデスネー');
    }

    return (
        <div className="hello">
        <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
            <button onClick={onDecrement}>減少</button>
        </div>
        <div>
            <button onClick={onIncrement}>増加</button>
        </div>
        </div>
    );
};

export default Hello;