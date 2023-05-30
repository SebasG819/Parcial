import { Recetas } from "../types/recetas";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const savereceInDB = async (receta: Recetas): Promise<Actions> => {
    await firebase.savereceInDB(receta);

   return{
    action: SomeActions.SAVE_RECE,
    payload: receta,
 };
};
    

