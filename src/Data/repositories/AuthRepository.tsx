import { User } from "../../Domain/entities/User";
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";

export interface AuthRepository {
    register(user: User): Promise<ResponseApiDelivery>;
}