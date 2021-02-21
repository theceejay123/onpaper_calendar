import { v1 as uuidv1 } from "uuid";
import handler from "./libs/handler";
import dynamoDb from "./libs/dynamoDb";

const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      agendaId: uuidv1(),
      schedDate: data.date,
      schedTime: data.time,
      title: data.title,
      details: data.details,
      name: data.name,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});

export { main };
