import { ProductAction, ProductActionTypes } from "./../../types/product";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  endAt,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAt,
  updateDoc,
  where,
} from "firebase/firestore";
import { IProduct } from "./../../types/IProduct";
import { Dispatch } from "redux";
import { db } from "../../FIrebase/firebase";

export const addProduct = (newProduct: IProduct) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      await addDoc(collection(db, "product"), newProduct);
    } catch (error) {
      console.log(error);
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
        payload: "ошибка при добавление продукты" + error,
      });
    }
  };
};
export const getProduct = (search: string) => {
  // const cellectionProduct = collection(db, "product")
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.GET_PRODUCT_LOADING, payload: true });
      const res = query(
        collection(db, "product"),
        orderBy("title"),
        startAt(search),
        limit(4)
      );
      // where("type", "==", `${sorting ? sorting: 'fruits'}`),
      onSnapshot(res, (querySnapshot) => {
        const product: any[] = [];
        querySnapshot.forEach((doc) => {
          product.push(doc);
        });
        // console.log(product)
        dispatch({
          type: ProductActionTypes.GET_PRODUCT_SUCCESS,
          payload: product,
        });
      });
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_LOADING,
        payload: false,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
        payload: "ошибка при зопросе getProduct" + error,
      });
    }
  };
};
export const deleteProduct = (id: string) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      await deleteDoc(doc(db, "product", id));
    } catch (error) {
      console.log(error);
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
        payload: "error of deleteProduct" + error,
      });
    }
  };
};

export const updateProduct = (id: string) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      const ubDoc = await getDoc(doc(db, "product", id));
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_UBDATE,
        payload: ubDoc.data(),
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
        payload: "error of opdate Doc " + error,
      });
    }
  };
};

export const saveProduct = (id: any, updatedProduct: any) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      await updateDoc(doc(db, "product", id), updatedProduct);
    } catch (error) {
      console.log(error);
      dispatch({
        type: ProductActionTypes.GET_PRODUCT_ERROR,
        payload: "error of Save Doc " + error,
      });
    }
  };
};
