import { Request, Response } from "express";
import response from "../helpers/response";
import userModel from "../models/users";

const createUser = async (req:Request, res:Response) => {
    const { body } = req;

    try {
        await userModel.createModel(body);

        return response.success(res, 200, {
            message:'Create User is Successfull'
        });
    } catch (error) {
        response.error(res, 500, error);
    }
};

const listUsers = async (req:Request, res:Response) => {
    try {
        const fetchUsers = await userModel.listUsers();

        const result = fetchUsers.docs.map((doc) => ({id: doc.id, ...doc.data()}));

        return response.success(res, 200, result);
    } catch (error) {
        response.error(res, 500, error);
    }
}

const getUserById = async (req:Request, res:Response) => {
    const { params } = req;
    const { id } = params;

    try {
        const result = await userModel.getUserById(id);

        if(!result.exists()) return response.error(res, 400, 'User not found!');

        return response.success(res, 200, {
            id: result.id,
            ...result.data()
        });
    } catch (error) {
        response.error(res, 500, error);
    }
}

const patchUsersBYID = async (req:Request, res:Response) => {
    const { params, body } = req;
    const { id } = params;
    try {
        const getUserById = await userModel.getUserById(id);

        if(!getUserById.exists()) return response.error(res, 400, 'User not Found');

        await userModel.updateUserById(id, body);

        return response.success(res, 200, {
            message:'Update user is Successfull'
        });
    } catch (error) {
        response.error(res, 500, error);
    }
}

const deleteUserByID =async (req:Request, res:Response) => {
    const { id } = req.params
    try {
        const getUserById = await userModel.getUserById(id);

        if(!getUserById.exists()) return response.error(res, 400, 'User not Found');
        
        await userModel.deleteUserByID(id)

        return response.success(res, 200, {
            message:'Delete User is Successfull'
        });
    } catch (error) {
        response.error(res, 500, error);
    }
}

export default {
    createUser,
    listUsers,
    getUserById,
    patchUsersBYID,
    deleteUserByID
}