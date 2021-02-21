import AWS from "aws-sdk";

const aws_client = new AWS.DynamoDB.DocumentClient();

export default {
  get: (params) => aws_client.get(params).promise(),
  put: (params) => aws_client.put(params).promise(),
  delete: (params) => aws_client.delete(params).promise(),
  update: (params) => aws_client.update(params).promise(),
  query: (params) => aws_client.query(params).promise(),
};
