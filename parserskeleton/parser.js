const moment = require('moment');
const cheerio = require('cheerio');
const url = require('url');
const querystring = require('querystring');
const path = require('path');
const sanitizeHtml = (x) => x;
//signature
function parsePage({ responseBody, URL, html, referer }) {
    console.log(`parsePage: parsing: ${responseBody.fileFormat} ${URL}`);
    const $ = cheerio.load(responseBody.content, { decodeEntities: false });
    const results = [];
    
    return results;
}

const parseTest = function () {
    const fs = require('fs');
    let buffer = fs.readFileSync(path.dirname(__filename) + "/../pdf/tribunal.html");
    buffer = parsePage({
        responseBody: {
            content: buffer.toString(),
            fileFormat: "text/html"
        },
        URL: "https://www.tse.jus.br/hotsites/consultas-jurisprudencia/jurisprudencia.html",
        referer: "https://www.tse.jus.br/hotsites/consultas-jurisprudencia/jurisprudencia.html",
        html: null
    });
    console.log(JSON.stringify(buffer, null, 4));
    console.log(buffer.length);
};

parseTest();
