import DynamoDBStack from "./DynamoDBStack";

const main = (app) => {
  new DynamoDBStack(app, "dynamodb");
};

export default main;
