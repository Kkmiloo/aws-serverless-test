export const logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Serverless CICD deme',
      version: '1.0.0',
      timestamp: new Date().getTime(),
      event: event,
    }),
  };
};
