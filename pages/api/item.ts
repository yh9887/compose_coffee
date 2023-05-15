import prisma from "@lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { image, title, description, categoryId } = req.body;
    const result = await prisma.item.create({
      data: {
        image,
        title,
        description,
        categoryId,
      },
    });
    return res.status(200).json(result);
  }
}
