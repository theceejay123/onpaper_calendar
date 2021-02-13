import handler from "../libs/handler";
import dynamoDb from "../libs/dynamoDb";

const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: "c00b29ab-9036-5ee9-a532-02ac435908c8",
      agendaId: event.pathParameters.id,
    },
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  return result.Item;
});

export { main };
