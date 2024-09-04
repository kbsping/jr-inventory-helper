

const { google } = require('googleapis');
const sheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getAuthToken() {
  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES
  });
  const authToken = await auth.getClient();
  return authToken;
}

async function getSpreadSheet({spreadsheetId, auth}) {
  const res = await sheets.spreadsheets.get({
    spreadsheetId,
    auth,
  });
  return res;
}

async function getSpreadSheetValues({spreadsheetId, auth, sheetName}) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    auth,
    range: sheetName
  });
  return res;
}


module.exports = {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues
}


// const { GoogleSpreadsheet } = require('google-spreadsheet');
// const { JWT } = require('google-auth-library');
// // import { JWT } from 'google-auth-library';

// async function accessSpreadsheet() {
//     const serviceAccountAuth = new JWT({
//         email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//         key: process.env.GOOGLE_PRIVATE_KEY,
//         scopes: [
//             'https://www.googleapis.com/auth/spreadsheets',
//         ],
//     });
    
//     const doc = new GoogleSpreadsheet('1rwQWU2P8-97AHKGgX9ohI9WlIpxjde75zPm3tpmDitI', serviceAccountAuth);

//     // Load the document properties and worksheets
//     await doc.loadInfo();
//     console.log(`Spreadsheet title: ${doc.title}`);

//     const sheet = doc.sheetsByIndex[0]; // Assuming you want the first sheet
//     await sheet.loadHeaderRow(); // Load header row to use headers in parsing

//     const rows = await sheet.getRows(); // Fetch rows

//     // Parse each row for certain items
//     rows.forEach((row, index) => {
//         console.log(`Row ${index + 1}:`);
//         // console.log(`Column1: ${row['Column1 Header Name']}`);
//         // console.log(`Column2: ${row['Column2 Header Name']}`);
//         // Add more columns as needed
//     });
// }

// accessSpreadsheet().catch(console.error);
