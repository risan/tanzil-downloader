# Tanzil Downloader

[![Build Status](https://flat.badgen.net/travis/risan/tanzil-downloader)](https://travis-ci.org/risan/tanzil-downloader)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/tanzil-downloader)](https://codeclimate.com/github/risan/tanzil-downloader)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/tanzil-downloader)](https://codeclimate.com/github/risan/tanzil-downloader)
[![Latest Stable Version](https://flat.badgen.net/npm/v/tanzil-downloader)](https://www.npmjs.com/package/tanzil-downloader)
[![Node Version](https://flat.badgen.net/npm/node/tanzil-downloader)](https://www.npmjs.com/package/tanzil-downloader)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/tanzil-downloader)](https://github.com/risan/tanzil-downloader/blob/master/LICENSE)

Download Quran text from [tanzil.net](http://tanzil.net).

## Install

```bash
$ npm install tanzil-downloader

# Or if you use Yarn
$ yarn add tanzil-downloader
```

## Quick Start

Download Quran text and save it to `quran.txt`.

```js
const tanzilDownloader = require("tanzil-downloader");

(async () => {
  try {
    await tanzilDownloader("quran.txt");
  } catch(error) {
    console.error(error.message);
  }
})();
```

## API

```js
tanzilDownloader(destination, [options]);
```

### Parameters

* `destination` (`String`): Location to save the downloaded file to.
* `options` (optional `Object`): [tanzil.net](http://tanzil.net) Quran text download options
  * `type` (`String`): The [Quran type](#quran-type) to download, default to `uthmani`.
  * `output` (`String`): The [output type](#output-type), default to `txt-2` (text with verse numbers).
  * `pauseMarks` (`Boolean`): Includes the pause marks, default to `true`.
  * `sajdahSigns` (`Boolean`): Includes the sajdah signs (۩), default to `true`.
  * `rubElHizbSigns` (`Boolean`): Includes the rub-el-hizb signs (۞), default to `true`.
  * `superscriptAlif` (`Boolean`): Includes the [superscript alif](https://en.wikipedia.org/wiki/Dagger_alif), default to `true`. Only applicable to `type`: `simple`, `simple-enhanced`, and `simple-min`.
  * `differentTanweenShapes` (`Boolean`): Use different tanween shapes (only for [me_quran font](http://tanzil.net/docs/me_quran_font)), default to `false`. Only applicable to `type`: `uthmani`

### Quran Type

The following Quran types are available to download:

* `simple`: Quran text in Imlaaei script.
* `simple-enhanced`: Simple text without special demonstration of Ikhfas and Idghams.
* `simple-min`: Simple text with minimal number of diacritics and symbols.
* `simple-clean`: Simple text with no diacritics or symbols.
* `uthmani`: Uthmani text, according to Medina Mushaf.
* `uthmani-min`: Uthmani text with minimal number of diacritics and symbols.

### Output Type

The following output types are available:

* `txt`: Text file format.
* `txt-2`: Text filr format with verse numbers.
* `xml`: XML file format.
* `sql`: MySQL dump file.

## Related

* [Quran JSON](https://github.com/risan/quran-json): Quran text and translations in JSON format.

## License

MIT © [Risan Bagja Pradana](https://bagja.net)

## Legal

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by [Tanzil.net](http://tanzil.net) or any of its affiliates or subsidiaries. This is an independent and unofficial library.

By downloading the Quran text from [Tanzil.net](http://tanzil.net) you agree to Tanzil's terms of use:

```
#  - This quran text is distributed under the terms of a
#    Creative Commons Attribution 3.0 License.
#
#  - Permission is granted to copy and distribute verbatim copies
#    of this text, but CHANGING IT IS NOT ALLOWED.
#
#  - This quran text can be used in any website or application,
#    provided its source (Tanzil.net) is clearly indicated, and
#    a link is made to http://tanzil.net to enable users to keep
#    track of changes.
#
#  - This copyright notice shall be included in all verbatim copies
#    of the text, and shall be reproduced appropriately in all files
#    derived from or containing substantial portion of this text.
```
