/* global expect:false, jest:false, test:false */
const easyDownload = require("easy-downloader");
const tanzilDownload = require("../src");

jest.mock("easy-downloader");

test("it can download quran text with default options", async () => {
  const downloadMock = easyDownload.mockResolvedValue(true);

  await tanzilDownload("text.txt");

  expect(downloadMock).toHaveBeenCalledTimes(1);

  const args = downloadMock.mock.calls[0];

  expect(args[0]).toMatch(/tanzil\.net/);
  expect(args[1]).toBe("text.txt");
  expect(args[2]).toEqual({
    method: "POST",
    body: {
      quranType: "uthmani",
      outType: "txt-2",
      agree: true,
      marks: true,
      sajdah: true,
      rub: true,
      alef: true
    }
  });
});

test("it can download quran text with custom options", async () => {
  const downloadMock = easyDownload.mockResolvedValue(true);

  await tanzilDownload("text.txt", {
    type: "simple",
    output: "sql",
    pauseMarks: true,
    sajdahSigns: false,
    rubElHizbSigns: true,
    superscriptAlif: false,
    differentTanweenShapes: true
  });

  expect(downloadMock).toHaveBeenCalledTimes(1);

  const args = downloadMock.mock.calls[0];

  expect(args[0]).toMatch(/tanzil\.net/);
  expect(args[1]).toBe("text.txt");
  expect(args[2]).toEqual({
    method: "POST",
    body: {
      quranType: "simple",
      outType: "sql",
      agree: true,
      marks: true,
      rub: true,
      me_quran: true
    }
  });
});
