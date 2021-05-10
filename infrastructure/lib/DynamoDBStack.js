import { CfnOutput } from "@aws-cdk/core";
import * as dynamoDb from "@aws-cdk/aws-dynamodb";
import * as sst from "@serverless-stack/resources";

class DynamoDBStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const app = this.node.root;
    const table = new dynamoDb.Table(this, "Table", {
      billingMode: dynamoDb.BillingMode.PAY_PER_REQUEST, // Use on-demand billing mode
      sortKey: {
        name: "agendaId",
        type: dynamoDb.AttributeType.STRING,
      },
      partitionKey: { name: "userId", type: dynamoDb.AttributeType.STRING },
    });

    //  Output Values
    new CfnOutput(this, "TableName", {
      value: table.tableName,
      exportName: app.logicalPrefixedName("TableName"),
    });

    new CfnOutput(this, "TableArn", {
      value: table.tableArn,
      exportName: app.logicalPrefixedName("TableArn"),
    });
  }
}

export default DynamoDBStack;
