//https://orkhan.gitbook.io/typeorm/docs/custom-repository
import { AbstractRepository, EntityRepository } from "typeorm";
import Todos from "../entity/Todos";

@EntityRepository(Todos)
export class TodoRepository extends AbstractRepository<Todos> {}
