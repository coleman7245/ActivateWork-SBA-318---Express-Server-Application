function error(code, message) {
    let error = new Error(message);
    error.status = code;

    return error;
}