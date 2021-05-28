import { Connection, getCustomRepository, createConnection } from "typeorm";

export abstract class BaseService {
  protected repository;

  constructor(repository) {
    // this.repository = getCustomRepository(repository);
    this.repository = connection.getCustomRepository(repository);
  }

  // 액티브레코드 패턴
  public list = async <T>(): Promise<T[]> => {
    var data = await this.repository.find();
    return this.repository.find();
  };

  // Data Mapper
}
