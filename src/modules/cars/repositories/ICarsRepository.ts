import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

interface ICarsRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { ICarsRepository };
