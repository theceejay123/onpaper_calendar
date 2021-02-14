import handler from "../libs/handler";
import dynamoDb from "../libs/dynamoDb";
import { v5 as uuidv5 } from "uuid";

const ONPAPER_CALENDAR = process.env.uniqueId;
const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": uuidv5(
        event.requestContext.identity.cognitoIdentityId,
        ONPAPER_CALENDAR
      ),
    },
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});

export { main };
