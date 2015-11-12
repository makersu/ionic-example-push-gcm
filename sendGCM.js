var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyBR4mTLRXG9TCtZbfuYYJDRRQYhjVmkYdo');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar when you drag it down by the time

//message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app - may not work
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id/token is required
registrationIds.push('APA91bFqmUDoD30AjfM7gapjIIZ9OU17PD28nUsfPZ6yLuyUQHH4n7s2D0cYCC8ZMz-jZJwSR7FaDLHB2Cqtb3s6W5kQGS6XgrZkfe-V0fEKwqzyqqMAfIkZST2slT2bW33aAWD6IEOJ');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result); //null is actually success
});
