import * as fs from "fs";

export default function handler(
  req: { query: { slug: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { error: string }): void; new (): any };
    };
  }
) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "No such blog found" });
    }
    res.status(200).json(JSON.parse(data));
  });
}
