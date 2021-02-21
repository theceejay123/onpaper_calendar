import handler from "./libs/handler";
import dynamoDb from "./libs/dynamoDb";

const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      agendaId: event.pathParameters.id,
    },
  };

  await dynamoDb.delete(params);
  return { status: true };
});

export { main };
