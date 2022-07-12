var AWS = require("aws-sdk");
AWS.config.update({ region: "us-west-1" });

var dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

exports.handler = async (event) => {
  var params = {
    TableName: "GenericTemplateTable",
    Key: {
      ID: {
        S: "123213",
      },
    },
  };

  var result = await dynamodb.getItem(params).promise();
  return {
    statusCode: 200,
    headers: {
      my_header: "my_value",
    },
    body: JSON.stringify("get 2"),
    isBase64Encoded: false,
  };
};
