### AWS Lambda

## AWS Charleston Meetup

---

! http://d0.awsstatic.com/events/new-reinvent/reinvent_launch-page_illustration_lambda.png

---

## A Compute Service that runs in response to events. Or can be invoked via user-defined applications.

---

### With AWS Lambda, you can easily create discrete, event-driven applications that execute only when needed and scale automatically from a few requests per day to thousands per second.

---

### You can currently write lambda functions in

---

! https://node-os.com/images/nodejs.png

---

! http://blog.newrelic.com/wp-content/uploads/javalogo.png

---

### Event Triggering

* S3
* SNS
* Kinesis
* Cognito

---

! http://bestprocesses.org/wp-content/uploads/2014/02/live-demo.png

---


# What does it cost?

---

### Example 1

* 512 MB Memory
* 3M invocations
* Avg run time 1sec

$18.74

---

### Example 2

* 128 MB Memory
* 30M invocations
* Avg run time 200ms

$11.63

---

### More Pricing Examples

http://aws.amazon.com/lambda/pricing/

---

# Usage Scenarios

---

### Imaging Processing

* upload an image to s3
* S3 PUT event fires lambda
* Create a thumbnail
* Add to thumbnail bucket
* Notify application

---

### Long running processes 
(report generation, search indexing)

* invoke a request for report
* stream the pdf to s3
* notify app for completion

---

### Scheduled Tasks

https://alestic.com/2015/05/aws-lambda-recurring-schedule/

---

! http://cdn.meme.am/instances/500x/54175628.jpg

--- 

! http://img.youtube.com/vi/INP1uuOYU3E/0.jpg

---

### Mad Science

* Your application posts a message on SNS!
* Triggers a Lambda Function that accesses data
* and pushes the response to SQS
* Which is listening via your application

---

### NodeJS Libraries

```
npm i node-lambda -g
# https://github.com/rebelmail/node-lambda
npm i aws-sdk 
# http://aws.amazon.com/sdk-for-node-js/

---

! http://www.brantfordvw.com/portals/709/dog_question.jpg

---

# Thank You

---

