import express from "express";
import { ResponseController } from "./ResponseController";
import { BaseService } from "../services/BaseService";

export abstract class BaseController {
  protected readonly responseController: ResponseController;
  protected readonly service;

  constructor(service) {
    this.responseController = new ResponseController();
    this.service = service;
  }

  public list = async <T>(req: express.Request, res: express.Response): Promise<T[]> => {
    try {
      const listData = await this.service.list();
      return this.responseController.ok<T>(res, listData);
    } catch (e) {
      return this.responseController.clientError(res, "list 에러 메시지 테스트");
    }
  };

  async view() {}
  async insert() {}
  async update() {}
  async delete() {}
}
