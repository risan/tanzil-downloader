import EasyDownloader from 'easy-downloader';

export default class TanzilDownloader {
  static get DEFAULT_OPTIONS() {
    return {
      type: TanzilDownloader.TYPES.UTHMANI,
      includePauseMarks: true,
      includeSajdahSigns: true,
      includeRubElHizbSigns: true,
      output: TanzilDownloader.OUTPUT.TEXT_WITH_VERSE_NUMBERS
    };
  }

  static get DEFAULT_REQUEST_OPTIONS() {
    return {
      uri: 'http://tanzil.net/pub/download/download.php',
      method: 'POST',
      encoding: 'utf8'
    };
  }

  static get TYPES() {
    return {
      SIMPLE: 'simple',
      SIMPLE_ENHANCED: 'simple-enhanced',
      SIMPLE_MINIMAL: 'simple-min',
      SIMPLE_CLEAN: 'simple-clean',
      UTHMANI: 'uthmani',
      UTHMANI_MINIMAL: 'uthmani-min'
    };
  }

  static get OUTPUT() {
    return {
      TEXT: 'txt',
      TEXT_WITH_VERSE_NUMBERS: 'txt-2',
      XML: 'xml',
      SQL: 'sql'
    };
  }

  static download({
    destination,
    options = TanzilDownloader.DEFAULT_OPTIONS,
    requestOptions = TanzilDownloader.DEFAULT_REQUEST_OPTIONS
  }) {
    return EasyDownloader.download({
      destination,
      uri: requestOptions.uri,
      method: requestOptions.method,
      encoding: requestOptions.encoding,
      formData: {
        quranType: options.type,
        marks: options.includePauseMarks,
        sajdah: options.includeSajdahSigns,
        rub: options.includeRubElHizbSigns,
        outType: options.output
      }
    });
  }
}
