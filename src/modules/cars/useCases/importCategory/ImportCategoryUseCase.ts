import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IImportCategory {
  name: string;
  description: string;
}

const categoriesByFile = [];
@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  execute(file: Express.Multer.File): void {
    const data = fs.readFileSync(file.path, "utf-8");

    fs.promises.unlink(file.path);

    const linhas = data.split("\r\n");

    for (let i = 0; i < linhas.length; i += 1) {
      categoriesByFile.push(linhas[i].split(","));
    }

    const categories: IImportCategory[] = [];
    categoriesByFile.forEach((category) => {
      const [name, description] = category;
      categories.push({
        name,
        description,
      });
    });

    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = await this.categoryRepository.findByName(name);

      if (!existCategory) {
        this.categoryRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
