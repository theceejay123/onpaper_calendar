import CognitoStack from "./CognitoStack";
import DynamoDBStack from "./DynamoDBStack";

const main = (app) => {
  new DynamoDBStack(app, "dynamodb");
  new CognitoStack(app, "cognito");
};

export default main;
