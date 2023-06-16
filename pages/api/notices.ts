import prisma from "@lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const result = await prisma.notice.findMany({
      select: {
        id: true,
        imageKey: true,
        title: true,
        body: true,
        viewCount: true,
        createdAt: true,
      },
      orderBy: {
        createdAt:'desc'
      }
    });
    return res.status(200).json(result);
  }
}
