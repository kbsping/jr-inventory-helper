const { parse } = require('dotenv');
const {
    getAuthToken,
    getSpreadSheetValues
  } = require('./googleSheetsService.js');
  
const spreadsheetId = '1rwQWU2P8-97AHKGgX9ohI9WlIpxjde75zPm3tpmDitI';
const sheetName = 'Sheet1';



async function getValues() {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId,
      sheetName,
      auth
    })
    return JSON.stringify(response.data, null, 2);
    // console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
  } catch(error) {
    console.log(error.message, error.stack);
  }
}



async function main() {
  const obj = await getValues(); // Await the getValues() call
  console.log(obj);
}

main()