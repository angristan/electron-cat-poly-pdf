const picture = require('cat-picture');
const image = require('lightning-image-poly');
const electron = require('electron');
const fs = require('fs');

picture.remove();
// Recreate image with polygons
new image('#visualization', null, [picture.src], { hullAlgorithm: 'convex' });

const savePdf = () => {
  electron.remote.getCurrentWebContents().printToPDF({
    portrait: true,
  }, (err, data) => {
    if (err) alert('Error setting PDF parameters ' + err.message);
    else {
      fs.writeFile('annotation.pdf', data, (err) => {
        if (err) alert('Error generating PDF! ' + err.message);
        else alert('PDF saved!');
      });
    }
  });
};

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 80) savePdf();
});
