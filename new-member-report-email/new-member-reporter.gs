/**
 * Compiles a report from a google sheet and sends an email to a configurable list of recipients
 */
function sendEmails() {
    /* 
        foreach sheet    
            - auth
            - get contents of report tab
            - create email message
            - get recipients
            - send email
    */

    //open issues
    //todo: design config storage: easily accessible
    
    //get reminder spreadsheet
    var sourceSheetId = "<your-google-sheet-id>", //the sheet Id with emails and messages
        sourceRange = "A2:C50"; //the range of all topics

    //get data 
    const allData = Sheets.Spreadsheets.Values.get(sourceSheetId, sourceRange).values;

    for (var i = 0; i < allData.length; i++) {
        var recipient = allData[i][0], //email address
            subject = allData[i][1], //message subject
            body = allData[i][2]; //message body 

        Logger.log(`recipient: %s, subject: %s, body: %s`, recipient, subject, body);

        //send email
        MailApp.sendEmail({
            to: recipient,
            subject: subject,
            htmlBody: body
        });
    }
}