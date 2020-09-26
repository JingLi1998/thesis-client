import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const response = await fetch("http://localhost:8000/notifications", {
      method: "POST",
    });
    console.log(req);
    console.log(response);
    res.status(200);
  } else {
    res.redirect("https://www.trackntrace.network");
  }
};
