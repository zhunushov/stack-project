import { deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { RewiewsAction, RewiewsActionTypes } from './../../types/rewiews';
import { Dispatch } from 'redux';
import { db } from '../../FIrebase/firebase';



export const addRewiew = (newRew: object) => {
    console.log(newRew )
    return async (dispatch: Dispatch<RewiewsAction>) => {
        try {
             await addDoc(collection(db, "rewiews"), newRew)
        } catch (error) {
            console.log(error)
            dispatch({type: RewiewsActionTypes.GET_REWIEWS_ERROR, payload: "error of addRewiews" + error})
        }
    }
} 
export const deleteRewiew = (id: string) => {
    return async (dispatch: Dispatch<RewiewsAction>) => {
        try {
            await deleteDoc(doc(db, "rewiews", id))
        } catch (error) {
            console.log(error)
            dispatch({type: RewiewsActionTypes.GET_REWIEWS_ERROR, payload: "error of deleteRew" + error})
        }
    }
}
export const getRewiews = () => {
    return async (dispatch: Dispatch<RewiewsAction>) => {
         try {
             const res = query(collection(db, "rewiews"))
             const unsubsite = onSnapshot(res, (doc) => {
                 const rew: any[] = []
                    doc.forEach(item => {
                        rew.push(item)
                    })
                    console.log(rew)
                    dispatch({type: RewiewsActionTypes.GET_REWIEWS_SUCCESS, payload: rew})
             })
         } catch (error) {
             console.log(error)
             dispatch({type: RewiewsActionTypes.GET_REWIEWS_ERROR, payload: "Error of Get Rew" + error})
         }
    }
}