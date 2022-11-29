import * as fs from "fs";
export default async function handler(
  req: { method: string; body: any },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: string[]): void; new (): any };
    };
  }
) {
  if (req.method === "POST") {
    // Process a POST request
    let data = await fs.promises.readdir("contactdata");
    fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json(req);
    console.log(req);
  } else {
    res.status(200).json(["allBlogs"]);
  }
}
