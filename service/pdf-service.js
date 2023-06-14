const PDFDocument = require('pdfkit');
// import {title} from '../service/data.json'
// import {user} from '../service/data.json'
const use = require('./data.json')
function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });

  doc.on('data', dataCallback);
  doc.on('end', endCallback);

  doc.fontSize(20).text("dynamic pdf");
  doc.moveDown();
  for (let i = 0; i < use.user.length; i++) {
    const element = use.user[i];
  doc.fontSize(16).text(element.name);
  doc.fontSize(16).text(element['date of birth']);
  }
  doc
    .fontSize(12)
    .text(
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, saepe.`
    );
  doc.end();
}

module.exports = { buildPDF };
