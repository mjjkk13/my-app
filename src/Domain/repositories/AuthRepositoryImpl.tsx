import { User } from "../entities/User";
import { ApiDelivery } from "../../Data/sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { AuthRepository } from "../../Data/repositories/AuthRepository";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user: User): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create', user);
            return (response.data);
        } catch (error) {
            let e = (error as Error).message;
            console.log('error' + e);
            return ({ success: false, message: e, data: undefined });
        }
    }
}