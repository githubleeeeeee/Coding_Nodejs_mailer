var nodemailer = require('nodemailer');


 
var transporter = nodemailer.createTransport({


 
     service: 'Gmail',


 
     auth: {


 
       user: 'raspberrysmu@gmail.com',


 
       pass: 'abcde00000'


 
     }


 
   });


 



 
   var timerId;


 



 
   module.exports.sendEmail = function(file) {


 
     if (timerId) return;


 



 
     timerId = setTimeout(function() {


 
       clearTimeout(timerId);


 
       timerId = null;


 
     }, 10000);


 



 
     console.log('Sending an Email..');


 



 
     var mailOptions = {


 
       from: 'Smart Mirror <raspberrysmu@gmail.com>',


 
       to: 'raspberrysmu@gmail.com',


 
       subject: '[Smart mirror] Your video',


 
       html: '<b>Hi</b>,<br/><br/> Please check the your video<br/><br/> Smart Mirror : ' + Date() + '
 <br/><br/>Dear, <br/><i>Smart Mirror</i>',


 
        attachments: [{


 
         path: file


 
        }]


 
      };


 



 
      transporter.sendMail(mailOptions, function(error, info) {


 
        if (error) {


 
          console.log(error);


 
        } else {


 
          console.log('Message sent: ' +info.response);


 
        }


 
     });


 
} 