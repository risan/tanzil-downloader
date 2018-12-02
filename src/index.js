const easyDownload = require("easy-downloader");
const filterObj = require("@risan/filter-obj");

const { UTHMANI } = require("./quran-types");
const { TEXT_WITH_VERSE_NUMBERS } = require("./output-types");

/**
 * Download the quran text.
 *
 * @param {String} destination
 * @param {String} options.type
 * @param {String} options.output
 * @param {Boolean} options.pauseMarks
 * @param {Boolean} options.sajdahSigns
 * @param {Boolean} options.rubElHizbSigns
 * @param {Boolean} options.superscriptAlif
 * @param {Boolean} options.differentTanweenShapes
 * @return {Promise}
 */
const tanzilDownload = async (
  destination,
  {
    type = UTHMANI,
    output = TEXT_WITH_VERSE_NUMBERS,
    pauseMarks = true,
    sajdahSigns = true,
    rubElHizbSigns = true,
    superscriptAlif = true,
    differentTanweenShapes = false
  } = {}
) => {
  const boolOptions = {
    marks: pauseMarks,
    sajdah: sajdahSigns,
    rub: rubElHizbSigns,
    alef: superscriptAlif,
    me_quran: differentTanweenShapes
  };

  const url = "http://tanzil.net/pub/download/download.php";

  return easyDownload(url, destination, {
    method: "POST",
    body: {
      quranType: type,
      outType: output,
      agree: true,
      ...filterObj(boolOptions)
    }
  });
};

module.exports = tanzilDownload;
