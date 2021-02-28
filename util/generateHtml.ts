interface generateHtmlProps {
  text: string;
  fontSize: string;
  foreground: string;
  background: string;
}

export default function ({ text, fontSize, foreground, background }:generateHtmlProps) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          background: #${background};

          font-family: 'Open Sans', sans-serif;
          font-size: ${fontSize || '80px'};
          color: #${foreground};

          text-align: center;

          min-height: 100vh;
        }

        body {
          height: 100vh;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
    </head>
    <body>
      <p>${text || 'Usage: <br/> <code>?text=your_text</code>'}</p>
    </body>
    </html>
  `
}