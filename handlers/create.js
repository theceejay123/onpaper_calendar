import { v5 as uuidv5, v1 as uuidv1 } from "uuid";
import handler from "../libs/handler";
import dynamoDb from "../libs/dynamoDb";

const ONPAPER_CALENDAR = "8c38558f-aa78-4623-93b4-52ea1cb0ab1a";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: uuidv5("123", ONPAPER_CALENDAR),
      agendaId: uuidv1(),
      schedDate: data.date,
      schedTime: data.time,
      title: data.title,
      details: data.details,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});