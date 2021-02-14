import handler from "../libs/handler";
import dynamoDb from "../libs/dynamoDb";
import { v5 as uuidv5 } from "uuid";

const ONPAPER_CALENDAR = process.env.uniqueId;
const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: uuidv5(
        event.requestContext.identity.cognitoIdentityId,
        ONPAPER_CALENDAR
      ),
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
