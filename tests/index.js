import EasyDownloader from 'easy-downloader';
import TanzilDownloader from '../src';

/* eslint-disable no-undef */
jest.mock('easy-downloader');

test('can get default options', () => {
  expect(TanzilDownloader.DEFAULT_OPTIONS).toEqual({
    type: 'uthmani',
    includePauseMarks: true,
    includeSajdahSigns: true,
    includeRubElHizbSigns: true,
    output: 'txt-2'
  });
});

test('can get default request options', () => {
  expect(TanzilDownloader.DEFAULT_REQUEST_OPTIONS).toEqual({
    uri: 'http://tanzil.net/pub/download/download.php',
    method: 'POST',
    encoding: 'utf8'
  });
});

test('can get list of types', () => {
  expect(TanzilDownloader.TYPES).toEqual({
    SIMPLE: 'simple',
    SIMPLE_ENHANCED: 'simple-enhanced',
    SIMPLE_MINIMAL: 'simple-min',
    SIMPLE_CLEAN: 'simple-clean',
    UTHMANI: 'uthmani',
    UTHMANI_MINIMAL: 'uthmani-min'
  });
});

test('can get list of output types', () => {
  expect(TanzilDownloader.OUTPUT).toEqual({
    TEXT: 'txt',
    TEXT_WITH_VERSE_NUMBERS: 'txt-2',
    XML: 'xml',
    SQL: 'sql'
  });
});

test('can download quran text with default options', () => {
  const destination = 'test.txt';
  const mockDownload = EasyDownloader.download.mockResolvedValue(destination);

  TanzilDownloader.download({ destination }).then(dest =>
    expect(dest).toEqual(destination)
  );

  const {
    type: quranType,
    includePauseMarks: marks,
    includeSajdahSigns: sajdah,
    includeRubElHizbSigns: rub,
    output: outType
  } = TanzilDownloader.DEFAULT_OPTIONS;

  const { uri, method, encoding } = TanzilDownloader.DEFAULT_REQUEST_OPTIONS;

  expect(mockDownload).toHaveBeenCalledWith({
    destination,
    uri,
    method,
    encoding,
    formData: {
      quranType,
      marks,
      sajdah,
      rub,
      outType
    }
  });
});

test('can download quran text with custom options', () => {
  const destination = 'test.txt';
  const mockDownload = EasyDownloader.download.mockResolvedValue(destination);

  const options = {
    type: 'simple',
    includePauseMarks: false,
    includeSajdahSigns: false,
    includeRubElHizbSigns: false,
    output: 'sql'
  };

  const requestOptions = {
    uri: 'http://example.foo',
    method: 'GET',
    encoding: 'foo'
  };

  TanzilDownloader.download({ destination, options, requestOptions }).then(
    dest => expect(dest).toEqual(destination)
  );

  expect(mockDownload).toHaveBeenCalledWith({
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
});
/* eslint-enable no-undef */
