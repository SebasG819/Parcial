import { SomeActions } from "../types/store";
import { AppState } from "../types/store";
import { Actions } from "../types/store";

export const reducer = (actions: Actions, state:AppState) => {
    const {action, payload} = actions;

    switch (action) {
        case SomeActions.SAVE_RECE:
            state.receta =[...state.receta, payload];
            return state;
        default:
            return state;
    };


};