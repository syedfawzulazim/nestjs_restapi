import { readdir, readFile } from "fs";
import util from "util";

const readdirPromise = util.promisify(readdir);
const readFilePromise = util.promisify(readFile);

type TPerson = {
  firstName: string;
  lastName: string;
  address: string;
  dob: Date;
  phone: number;
};

//main directory
const dir = "./src/json";

const readJsonFiles = async (directory: string, file: string) => {
  return await readFilePromise(`${directory}/${file}`, "utf-8");
};

const person = [] as TPerson[];

const parseJsonData = async () => {
  const fileList = await readdirPromise(`${dir}`);

  for (const file of fileList) {
    try {
      const data = await readJsonFiles(dir, file);
      const user: TPerson = JSON.parse(data);
      person.push({
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        dob: new Date(user.dob),
        phone: user.phone,
      });
    } catch (error) {
      console.log(`Something is Wrong ${error}`);
    }
  }
  //console logs the parsed JSON data
  console.log(person);
};

parseJsonData();
