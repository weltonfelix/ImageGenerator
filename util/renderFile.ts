import { puppeteer } from "chrome-aws-lambda";

export enum fileFormats {
  'jpeg',
  'png',
  'pdf',
}

interface renderFileProps {
  htmlContent: string;
  fileFormat: keyof typeof fileFormats;
}

export default async function({ htmlContent, fileFormat }: renderFileProps) {
  const fileFormatsHandlers = {
    'jpeg': async (page: puppeteer.Page) => {
      return await page.screenshot({ type: 'jpeg' })
    },
    'png': async (page: puppeteer.Page) => {
      return await page.screenshot({ type: 'png' })
    },
    'pdf': async (page: puppeteer.Page) => {
      return await page.pdf({
        format: 'a4',
        printBackground: true,
      });
    },
  }

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setJavaScriptEnabled(false);
  await page.setContent(htmlContent);
  
  const file = await fileFormatsHandlers[fileFormat](page);
  browser.close();

  return file;
}