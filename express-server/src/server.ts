import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";


const app = express();
app.use(cors());
const PORT = 80;

const readFile = async (file: string) => {
  let parsedData = (resolve: Function) => {
    fs.readFile(`api/${file}`, "utf8", async (err, data: string) => {
      if (err) return resolve(false)
      let dataFromFile: Object = JSON.parse(data);
      resolve(dataFromFile);
    });
  };
  return new Promise<any>(parsedData);
};

app.get("/data/:id", async (req, res) => {
  const response = await readFile(req.params.id);
  res.send(response);
});

app.get("/profile/:profileId", async (req, res) => {
  const response = await readFile(req.params.profileId);
  res.send(response);
});

app.use("/", express.static(path.join(__dirname,"web-app")));

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
