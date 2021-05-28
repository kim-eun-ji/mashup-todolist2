import { check } from "express-validator";
import express from "express";
import TodoService from "../services/TodoService";
import { BaseController } from "./BaseController";

export class TodoController extends BaseController {
  constructor() {
    super(new TodoService());
  }
}
