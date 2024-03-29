export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  database: {
    databaseUrl: process.env.DATABASE_URL,
  },
  AWS: {
    awsAccessKeyID: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAcceddKey: process.env.AWS_SECRET_ACCESS_KEY,
    awsRegion: process.env.AWS_REGION,
    awsSnsTopicCatalogArn: process.env.AWS_SNS_TOPIC_CATALOG_ARN,
    awsSqsQueueUrl: process.env.AWS_SQS_QUEUE_URL,
  },
});
