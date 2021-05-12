import { expect, haveResource } from "@aws-cdk/assert";
import * as sst from "@serverless-stack/resources";
import DynamoDBStack from "../lib/DynamoDBStack";

test("Test Stack", () => {
  const app = new sst.App();
  // When
  const stack = new DynamoDBStack(app, "test-stack");
  // Then
  expect(stack).to(
    haveResource("AWS::DynamoDB::Table", {
      BillingMode: "PAY_PER_REQUEST",
    })
  );
});
