import handler from "../libs/handler";
import dynamoDb from "../libs/dynamoDb";

const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    IndexName: "schedDateIndex",
    KeyConditionExpression: "schedDate = :schedDate",
    ExpressionAttributeValues: {
      ":schedDate": "2021-02-21",
    },
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});

export { main };
