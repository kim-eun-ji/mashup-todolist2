import * as express from "express";

export class ResponseController {
  public static jsonResponse(res: express.Response, code: number, message: string) {
    return res.status(code).json({ message });
  }

  public ok<T>(res: express.Response, dto?: T) {
    if (!!dto) {
      res.type("application/json");
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  public created(res: express.Response) {
    return res.sendStatus(201);
  }

  /**
   * 400 Bad Request 잘못된 요청. 요청 uri, 헤더, 본문등에 오류가 있을때/전송된 문법이 잘못되어 서버가 요청을 이해할 수 없을 경우.
   * @param res
   * @param message : 구체적인 문제를 설명하는 오류 메시지
   * @returns
   */
  public clientError(res: express.Response, message?: string) {
    return ResponseController.jsonResponse(res, 400, message ? message : "Unauthorized");
  }

  // 204 No content, (PUT, POST, DELETE 요청의 경우 성공은 했지만 전송할 데이터가 없는 경우)
  public noContent(res: express.Response, message?: string) {
    return ResponseController.jsonResponse(res, 204, message ? message : "No content");
  }

  // 401 Unauthorized : 비인증(unauthenticated).
  public unauthorized(res: express.Response, message?: string) {
    return ResponseController.jsonResponse(res, 401, message ? message : "Unauthorized");
  }

  // 403 Forbidden : 클라이언트가 컨텐츠에 접근할 권리를 가지고 있지 않음. 401과 차이점은 서버가 클라이언트가 누구인지 안다는 것.
  public forbidden(res: express.Response, message?: string) {
    return ResponseController.jsonResponse(res, 403, message ? message : "Forbidden");
  }

  // 404 Not Found : 서버가 요청받은 리소스를 찾을 수 없음. 리소스를 숨기기 위해 403 대신 404를 전송할 때도 있다.
  public notFound(res: express.Response, message?: string) {
    return ResponseController.jsonResponse(res, 404, message ? message : "Not found");
  }
  // 409 Conflict : 요청이 현재 서버 상태와 충돌하는 경우. (두 프로세스 동일 문서 동시 업데이트 등...)
  public conflict(res: express.Response, message?: string) {
    return ResponseController.jsonResponse(res, 409, message ? message : "Conflict");
  }

  // 429 Too many requests : 사용자가 지정된 시간에 너무 많은 요청을 보냈을 경우.
  public tooMany(res: express.Response, message?: string) {
    return ResponseController.jsonResponse(res, 429, message ? message : "Too many requests");
  }

  // 500 : 서버에러
  public fail(res: express.Response, error: Error | string) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
}
