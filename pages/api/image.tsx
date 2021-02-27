import type { NextApiRequest, NextApiResponse } from 'next'

import puppeteer from 'puppeteer';

import generateHtml from "../../util/generateHtml";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { text, background, bold } = req.query;

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  page.setContent(generateHtml(text, background));

  const image = await page.screenshot({type: 'png'});

  res.setHeader('Content-Type', 'image/png');
  res.send(image);

}
