const csv = require('csvtojson')
const path = require('path')
const csvFilePath = path.join(__dirname) + path.sep +'setup.csv'


export const repareData = async() => {
    const array = await csv().fromFile(csvFilePath);
    return array[0]
}