import data from "../../public/data.json";

const stringifyData =  JSON.stringify(data)
export const mockData: MiraData = JSON.parse(stringifyData)
