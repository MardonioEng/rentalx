import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: 

describe("create car", () => {
  beforeEach(() => {
    createCarUseCase = new CreateCarUseCase();
  });

  it("should be able create a new car", async () => {
    await createCarUseCase.execute({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-123",
      fine_amount: 60,
      brand: "Brand",
      category_id: "Category",
    });
  });
});
