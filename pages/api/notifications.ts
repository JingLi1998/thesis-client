import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    await fetch("http://localhost:8000/notifications", {
      method: "POST",
    });
    console.log("[notification]: Notification received");
    res.status(200).json({ message: "OK" });
  } else {
    res.redirect("https://www.trackntrace.network");
  }
};
