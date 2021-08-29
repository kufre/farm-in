class HttpStatusCode {
  static OK() {
    return {
      value: 200,
      writable: false,
      enumerable: true,
      configurable: false,
    };
  }

  static CREATED() {
    return {
      value: 201,
      writable: false,
      enumerable: true,
      configurable: false,
    };
  }

  static UNPROCESSABLE_ENTITY() {
    return {
      value: 422,
      writable: false,
      enumerable: true,
      configurable: false,
    };
  }

  static INVALID_REQUEST() {
    return {
      value: 400,
      writable: false,
      enumerable: true,
      configurable: false,
    };
  }

  static UNAUTHORIZED() {
    return {
      value: 401,
      writable: false,
      enumerable: true,
      configurable: false,
    };
  }

  static FORBIDDEN() {
    return {
      value: 403,
      writable: false,
      enumerable: true,
      configurable: false,
    };
  }
}
export default HttpStatusCode;
