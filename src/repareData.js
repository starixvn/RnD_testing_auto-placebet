const csv = require('csvtojson')
const csvFilePath = 'setup.csv'


export const repareData = async() => {
    const array = await csv().fromFile(csvFilePath);
    return array[0]
}