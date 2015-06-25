console.log('Loading event');
//Required for SQS

var QUEUE_URL = 'https://sqs.us-east-1.amazonaws.com/441807460849/lambda-processing-s3';
var AWS = require('aws-sdk');
var sqs = new AWS.SQS({region : 'us-east-1'});

exports.handler = function(event, context) {
  if (event.subject === 'todo') {
    if (event.verb === 'create') {
      // create todo on firebase
      // sqs with ok
      // set context to done.
      context.done()
      return
    }
    if (event.verb === 'all') {
      // get all todos
      // send via sqs
      // set context to done
    }
  }

  //Send SQS message with details of file uploaded to S3.
  var params = {
    MessageBody: JSON.stringify(event),
    QueueUrl: QUEUE_URL
  };

  sqs.sendMessage(params, function(err,data){

    if(err) {
      console.log('error:',"Fail Send Message" + err);
      context.done('error', "ERROR Put SQS");  // ERROR with message

    }else{

      console.log('data:',data.MessageId);
      context.done(null,'');  // SUCCESS
    }
  });