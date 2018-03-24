# Tanzil Downloader

[![Latest Stable Version](https://img.shields.io/npm/v/tanzil-downloader.svg)](https://www.npmjs.com/package/tanzil-downloader)
[![Node Version](https://img.shields.io/node/v/tanzil-downloader.svg)](https://www.npmjs.com/package/tanzil-downloader)
[![Build Status](https://travis-ci.org/risan/tanzil-downloader.svg?branch=master)](https://travis-ci.org/risan/tanzil-downloader)
[![Test Coverage](https://api.codeclimate.com/v1/badges/79340c0446feb214f3fe/test_coverage)](https://codeclimate.com/github/risan/tanzil-downloader/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/79340c0446feb214f3fe/maintainability)](https://codeclimate.com/github/risan/tanzil-downloader/maintainability)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/risan/tanzil-downloader)
[![License](https://img.shields.io/npm/l/tanzil-downloader.svg)](https://www.npmjs.com/package/tanzil-downloader)

A JavaScript library for downloading Quran text from [tanzil.net](http://tanzil.net).

## Install

```shell
$ npm install tanzil-downloader

# Or if you prefer to use Yarn
$ yan add tanzil-downloader
```

## Usage

Download Quran text and save it to `quran.txt` file.

```js
const TanzilDownloader = require('tanzil-downloader');

TanzilDownloader
  .download({ destination: 'quran.txt' })
  .then(destination => console.log(`Quran text is downloaded to: ${destination}`))
  .catch(e => console.error(e.message));
```

## API

```js
TanzilDownloader.download({ destination, [options, requestOptions]});
```

### Required Parameter:

- **`destination`** (*`String`*): The path where the downloaded Quran text will be stored.

### Optional Parameters:

- **`options`** (*`Object`*): The Quran text options.
- **`requestOptions`** (*`Object`*): The HTTP request options.

#### `options` Object:

`options` parameter is optional and the default value is:

```js
{
  type: TanzilDownloader.TYPES.UTHMANI,
  includePauseMarks: true,
  includeSajdahSigns: true,
  includeRubElHizbSigns: true,
  output: TanzilDownloader.OUTPUT.TEXT_WITH_VERSE_NUMBERS
}
```

- **`type`** (*`String`*): The Quran text type, check the [#quran-types] for all possible values.
- **`includePauseMarks`** (*`Boolean`*): Include the pause marks or not.
- **`includeSajdahSigns`** (*`Boolean`*): Include the sajdah signs or not.
- **`includeRubElHizbSigns`** (*`Boolean`*): Include the rub-el-hizb signs or not.
- **`output`** (*`String`*): The output type, check the [#output-types] for all possible values.

#### `requestOptions` Object:

`requestOptions` parameter is optional and the default value is:

```js
{
  uri: 'http://tanzil.net/pub/download/download.php',
  method: 'POST',
  encoding: 'utf8'
}
```

- **`uri`** (*`String`*): The URI to download the Quran text.
- **`method`** (*`String`*): The HTTP request method.
- **`encoding`** (*`String`*): Character encoding that will be used to interpret the response from the target URI. Check the Buffer [documentation](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings) for more information.

#### Example

```js
TanzilDownloader.download({
    destination: 'quran.txt',
    options: {
      type: TanzilDownloader.TYPES.UTHMANI,
      includePauseMarks: true,
      includeSajdahSigns: true,
      includeRubElHizbSigns: true,
      output: TanzilDownloader.OUTPUT.TEXT_WITH_VERSE_NUMBERS
    },
    requestOptions: {
      uri: 'http://tanzil.net/pub/download/download.php',
      method: 'POST',
      encoding: 'utf8'
    }
  })
  .then(destination => console.log(`File is downloaded to: ${destination}`))
  .catch(e => console.error(e.message));
```

### Quran Types

The following Quran types are available to download:

```js
// Quran text in Imlaaei script.
TanzilDownloader.TYPES.SIMPLE;

// Simple text without special demonstration of Ikhfas and Idghams.
TanzilDownloader.TYPES.SIMPLE_ENHANCED;

// Simple text with minimal number of diacritics and symbols.
TanzilDownloader.TYPES.SIMPLE_MINIMAL;

// Simple text with no diacritics or symbols.
TanzilDownloader.TYPES.SIMPLE_CLEAN;

// Uthmani text, according to Medina Mushaf.
TanzilDownloader.TYPES.UTHMANI;

// Uthmani text with minimal number of diacritics and symbols.
TanzilDownloader.TYPES.UTHMANI_MINIMAL;
```

### Output Types

The following output types are available:

```js
TanzilDownloader.OUTPUT.TEXT;
TanzilDownloader.OUTPUT.TEXT_WITH_VERSE_NUMBERS;
TanzilDownloader.OUTPUT.XML;
TanzilDownloader.OUTPUT.SQL;
```

## License

MIT © [Risan Bagja Pradana](https://risan.io)

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
