import type { NextApiRequest, NextApiResponse } from 'next'

import generateHtml from "../../util/generateHtml";
import renderFile, { fileFormats } from '../../util/renderFile';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const text = req.query.text as string;
  const fontSize = req.query.fontSize as string;
  const foreground = req.query.foreground as string;
  const background = req.query.background as string;

  const fileFormat = req.query.fileFormat as keyof typeof fileFormats;

  if (!(['jpeg', 'png', 'pdf'].includes(fileFormat))) {
    console.log(fileFormat)
    return res.status(400).json({ error: 'Invalid file format' });
  }

  const html = generateHtml({ text, fontSize, foreground, background });
  
  const file = await renderFile({ htmlContent: html, fileFormat });
  
  const contentType = {
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'pdf': 'application/pdf',
  }

  res.setHeader('Content-Type', contentType[fileFormat]);
  res.send(file);
}
