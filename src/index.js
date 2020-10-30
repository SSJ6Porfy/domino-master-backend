import AWS from 'aws-sdk';

AWS.config.setPromisesDependency(Promise);
AWS.config.update({ region: process.env.AWS_REGION });

async function consume(event, context) {
  return { message: 'Success is in the making!' };
}

exports.handler = async (event, context) => {
  try {
    return await consume(event, context);
  } catch (error) {
    throw new Error(`An error occurred in the Mission Life All Users Scheduler Lambda: ${error.message}`);
  }
};