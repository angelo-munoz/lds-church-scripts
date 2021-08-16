# Send new member report email
This script compiles a new member report for a google sheet, and emails the report to a configurable list of recipients (ward council). 

## Development Approach
This script uses TDD with Google App script. 

## Getting started
1. Create a new google script
2. Add Service > `Google Sheets API`
3. Add trigger. Choose time-based and configure interval. Weekly will work in most cases but adjust to your needs. 
3. Populate your google sheet with the reminder content. Columns: Recipient Email Address, Email subject, Email body. 

