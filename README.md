### Task
```
This assignment came to implement a FIFO queue service,
similar to the popular queue services such as AWS SQS or Beanstalkd.

Build a REST API of queue based on with memory storage.
The HTTP methods and data format is for you to define. 
```

### The queue has the following actions:
**Send Message**
- Params: message_type, category, content
- Returns: message_id and all its properties.
- Description: Adds a message to the queue 

**Reserve Message**
- Params: message_type(Optional), category(Optional), reserver_name(Required) 
- Returns: message_id and all its properties.
- Description: Reserves the first added message in queue that fits the filter of Message-Type and Category if provided.    

**Delete Message**
- Params: message_id 
- Returns: No return value

### Requirements
 1. Highest quality possible, OO and design patterns, extendable easily
    to similar feature
 2. You don’t have to implement all edge cases but if not, comment on how will you handle them.
 3. Deliver back the code, in anyway that you like.
