import handler from "../libs/handler";
import dynamoDb from "../libs/dynamoDb";

const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: "c00b29ab-9036-5ee9-a532-02ac435908c8",
      agendaId: event.pathParameters.id,
    },
    UpdateExpression:
      "SET title = :title, details = :details, schedDate = :date, schedTime = :time, updatedAt = :updatedAt",
    ExpressionAttributeValues: {
      ":title": data.title || null,
      ":details": data.details || null,
      ":date": data.date || null,
      ":time": data.time || null,
      ":updatedAt": Date.now(),
    },
    ReturnValues: "ALL_NEW",
  };

  await dynamoDb.update(params);
  return { status: true };
});

export { main };
