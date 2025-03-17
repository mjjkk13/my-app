import { AuthRepositoryImpl } from "../../../Domain/repositories/AuthRepositoryImpl";
import { User } from "../../entities/User";

const { register } = new AuthRepositoryImpl();

export const RegisterAuthUseCase = async (user: User) => {
    return await register(user);
}