// https://typeorm.io/#/entities/column-types
// MVC 중 M 인 Model 이라는 개념에 맞게 model 을 사용했지만 typeorm 은 Entity을 사용합니다. Entity 라는 폴더명에 model 을 넣는다는 의미로 설명드렸습니다.
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export default class Todos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  done: boolean;
}
