import prisma from "@lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const result = await prisma.category.findMany({
      select: {
        id: true,
        title: true,
        position: true,
      },
    });
    return res.status(200).json(result);
  }
}
