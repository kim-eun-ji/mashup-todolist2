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
      const data = await this.service.list();
      return this.responseController.ok<T>(res, data);
    } catch (e) {
      return this.responseController.clientError(res, "list 에러 메시지 테스트");
    }
  };

  public view = async <T>(req: express.Request, res: express.Response): Promise<T> => {
    try {
      const data = await this.service.view(req.params.id);
      if (data) return this.responseController.ok<T>(res, data);
      else throw new Error("해당 id에 대한 데이터가 존재하지 않습니다.");
      // else return this.responseController.notFound(res, "해당 id에 대한 데이터가 존재하지 않습니다.");
    } catch (e) {
      return this.responseController.clientError(res, e.message);
    }
  };

  public save = async <T>(req: express.Request, res: express.Response, data: T) => {
    try {
      await this.service.save(data);
      return this.responseController.created(res);
    } catch (e) {
      return this.responseController.clientError(res, "insert 실패");
    }
  };

  public remove = async <T>(req: express.Request, res: express.Response, data: T) => {
    try {
      await this.service.remove(data);
      return this.responseController.noContent(res);
    } catch (e) {
      return this.responseController.clientError(res, "delete 실패");
    }
  };
}
