const buildResponse = (success: boolean, data: any, message: string) => {
  return {
    success: success,
    message: message || (success && "success"),
    data: data,
  };
};

export { buildResponse };
