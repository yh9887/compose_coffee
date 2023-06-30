import prisma from "@lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;

    const result = await prisma.item.findFirst({
      where: {
        id,
      },
      select: {
        id : true,
        image : true,
        title : true,
        description : true,
        categoryId : true,
      },
    });
    return res.status(200).json(result);
  }
  if (req.method === "POST") {
    const { image, title, description, categoryId, id } = req.body;
    const result = await prisma.item.create({
      data: {
        id,
        image,
        title,
        description,
        categoryId,
      },
    });
    return res.status(200).json(result);
  }

  
  if (req.method === "DELETE") {
    const { id } = req.query;

    const result = await prisma.item.delete({
      where: {
        id,
      },
    });
    return res.status(200).json(result);
  }

}
