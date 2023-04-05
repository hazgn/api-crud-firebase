import {  collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import db from "../config/firebase";

const userCollections = collection(db, 'users');

const userDoc = (id:string) => {
    return doc(db, 'users', id)
}

const createModel = (body:any) => {
    return addDoc(userCollections, body)
}
const listUsers = () => {
    return getDocs(userCollections)
}

const getUserById = (id:string) => {
    return getDoc(userDoc(id))
}

const updateUserById = (id:string, body:any) => {
    return updateDoc(userDoc(id), body)
}

const deleteUserByID = (id:string) => {
    return deleteDoc(userDoc(id))
}

export default {
    createModel,
    listUsers,
    getUserById,
    updateUserById,
    deleteUserByID
};