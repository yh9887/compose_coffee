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

  if (req.method === "PATCH") {
    const { id } = req.query;
    const { title, body } = req.body;
    const result = await prisma.notice.update({
      where: {
        id,
      },
      data: {
        title: title,
        body: body,
      },
    });
    return res.status(200).json(result);
  }
  if (req.method === "PUT") {
    const { id } = req.query;
    const notice = await prisma.notice.findFirst({
      where: {
        id,
      },
      select: {
        viewCount: true,
      },
    });
    const result = await prisma.notice.update({
      where: {
        id,
      },
      data: {
        viewCount: notice.viewCount + 1 || 1,
      },
    });
    return res.status(200).json(result);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;

    const result = await prisma.notice.delete({
      where: {
        id,
      },
    });
    return res.status(200).json(result);
  }
}
