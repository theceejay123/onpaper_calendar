import handler from "../libs/handler";
import dynamoDb from "../libs/dynamoDb";

const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": "c00b29ab-9036-5ee9-a532-02ac435908c8",
    },
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});

export { main };
