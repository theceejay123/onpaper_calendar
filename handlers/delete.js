import handler from "../libs/handler";
import dynamoDb from "../libs/dynamoDb";
import { v5 as uuidv5 } from "uuid";

const ONPAPER_CALENDAR = process.env.uniqueId;
const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: uuidv5(
        event.requestContext.identity.cognitoIdentityId,
        ONPAPER_CALENDAR
      ),
      agendaId: event.pathParameters.id,
    },
  };

  await dynamoDb.delete(params);
  return { status: true };
});

export { main };
