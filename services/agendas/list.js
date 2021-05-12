import handler from "./libs/handler";
import dynamoDb from "./libs/dynamoDb";

const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    IndexName: "schedDateIndex",
    KeyConditionExpression: "schedDate = :date",
    ExpressionAttributeValues: {
      ":date": decodeURIComponent(event.pathParameters.date),
    },
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});

export { main };
