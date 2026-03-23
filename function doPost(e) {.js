 function doPost(e) {          
   const data = JSON.parse(e.postData.contents);                                                                                                                                                                                                   
                                                                                                                                                                                                                                                   
   const to = 'YOUR_EMAIL@example.com'; // ← change this                                                                                                                                                                                           
   const subject = 'New Blueprint Access Request — ' + data.name;                                                                                                                                                                                  
                                                                                                                                                                                                                                                   
   const body = `                                                                                                                                                                                                                                
 New access request submitted via ${data.source}                                                                                                                                                                                                   
                                                                                                                                                                                                                                                   
 Name:         ${data.name}
 Email:        ${data.email}                                                                                                                                                                                                                       
 Organization: ${data.organization || '—'}                                                                                                                                                                                                       
 Role:         ${data.role}
                                                                                                                                                                                                                                                   
 Notes:
 ${data.notes || '(none)'}                                                                                                                                                                                                                         
   `.trim();                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                   
   MailApp.sendEmail({ to, subject, body });
                                                                                                                                                                                                                                                   
   return ContentService                                                                                                                                                                                                                           
     .createTextOutput(JSON.stringify({ status: 'ok' }))
     .setMimeType(ContentService.MimeType.JSON);                                                                                                                                                                                                   
 }
