import prisma from "@lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;

    const result = await prisma.notice.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        imageKey: true,
        title: true,
        body: true,
        viewCount: true,
        createdAt: true,
      },
    });
    return res.status(200).json(result);
  }
  if (req.method === "POST") {
    const { title, body } = req.body;
    const result = await prisma.notice.create({
      data: {
        title,
        body,
      },
    });
    return res.status(200).json(result);
  }
}
