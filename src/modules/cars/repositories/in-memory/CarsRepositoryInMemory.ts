import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";

import { ICarsRepository } from "../ICarsRepository";

class CategoriesRepositoryInMemory implements ICarsRepository {
  create(data: ICreateUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
