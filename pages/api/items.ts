import prisma from "@lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const result = await prisma.item.findMany({
      select: {
        id: true,
        title: true,
        description: true,
      },
    });
    return res.status(200).json(result);
  }
}
