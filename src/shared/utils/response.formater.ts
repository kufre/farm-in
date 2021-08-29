import HttpStatusCode from './http.response';
import { Response } from 'express';
type ResponseObj = { data?: object; errors?: object | boolean; message: string };
type SuccessParams = { res: Response; data?: object; message?: string };
type ErrorParams = { res: Response; errors?: object | boolean; message?: string };

function formatResponse(params: ResponseObj) {
  const { data, errors = false, message } = params;
  return {
    data,
    errors,
    message,
  };
}

class ResponsFormatter {
  static SUCCESS(params: SuccessParams) {
    const { message = 'Request Successful', data = {}, res } = params;
    const responseDetails = formatResponse({ data, message });
    return res.status(HttpStatusCode.OK().value).send(responseDetails);
  }

  static CREATED(params: SuccessParams) {
    const { message = 'Request Successful', data = {}, res } = params;
    const responseDetails = formatResponse({ message, data });
    return res.status(HttpStatusCode.CREATED().value).send(responseDetails);
  }

  static INVALID_REQUEST(params: ErrorParams) {
    const { message = 'Request failed', errors = true, res } = params;
    const responseDetails = formatResponse({ errors, message });
    return res.status(HttpStatusCode.INVALID_REQUEST().value).send(responseDetails);
  }

  static UNPROCCESSABLE_ENTITY(params: ErrorParams) {
    const { message = 'Request failed', errors = true, res } = params;
    const responseDetails = formatResponse({ errors, message });
    return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY().value).send(responseDetails);
  }

  static UNAUTHORIZED(params: ErrorParams) {
    const { message = 'UNAUTHORIZED', errors = true, res } = params;
    const responseDetails = formatResponse({ errors, message });
    return res.status(HttpStatusCode.UNAUTHORIZED().value).send(responseDetails);
  }

  static FORBIDDEN(params: ErrorParams) {
    const { message = 'FORBIDDEN', errors = true, res } = params;
    const responseDetails = formatResponse({ errors, message });
    return res.status(HttpStatusCode.FORBIDDEN().value).send(responseDetails);
  }
}

export default ResponsFormatter;
