import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "@modules/cars/repositories/ICategoryRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );
    if (categoryAlreadyExists) {
      throw new AppError("category already exists!");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
