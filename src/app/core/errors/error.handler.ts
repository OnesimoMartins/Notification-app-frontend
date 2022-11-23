import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { LogService } from "../services/log.service";

@Injectable({
  providedIn:'root'
})
export class GlobalErrorHandler implements ErrorHandler{

  constructor(private logger:LogService){}

  handleError(error: Error | HttpErrorResponse): void {

    if(!(error instanceof HttpErrorResponse)){
      this.logger.log(error.message)
    }

  }

}
