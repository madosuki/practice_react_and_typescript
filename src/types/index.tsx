// types/index.tsx

export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
}

export const INITIAL_STATE: StoreState = {
    languageName: 'Typescript',
    enthusiasmLevel: 1
};