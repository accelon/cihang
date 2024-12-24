var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// cli/colors.cjs
var require_colors = __commonJS({
  "cli/colors.cjs"(exports2) {
    var FORCE_COLOR;
    var NODE_DISABLE_COLORS;
    var NO_COLOR;
    var TERM;
    var isTTY = true;
    if (typeof process !== "undefined") {
      ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
      isTTY = process.stdout && process.stdout.isTTY;
    }
    var $ = exports2.$ = {
      enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
    };
    function init(x, y) {
      let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
      let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
      return function(txt) {
        if (!$.enabled || txt == null) return txt;
        return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
      };
    }
    exports2.reset = init(0, 0);
    exports2.bold = init(1, 22);
    exports2.dim = init(2, 22);
    exports2.italic = init(3, 23);
    exports2.underline = init(4, 24);
    exports2.inverse = init(7, 27);
    exports2.hidden = init(8, 28);
    exports2.strikethrough = init(9, 29);
    exports2.black = init(30, 39);
    exports2.red = init(31, 39);
    exports2.green = init(32, 39);
    exports2.yellow = init(33, 39);
    exports2.blue = init(34, 39);
    exports2.magenta = init(35, 39);
    exports2.cyan = init(36, 39);
    exports2.white = init(37, 39);
    exports2.gray = init(90, 39);
    exports2.grey = init(90, 39);
    exports2.bgBlack = init(40, 49);
    exports2.bgRed = init(41, 49);
    exports2.bgGreen = init(42, 49);
    exports2.bgYellow = init(43, 49);
    exports2.bgBlue = init(44, 49);
    exports2.bgMagenta = init(45, 49);
    exports2.bgCyan = init(46, 49);
    exports2.bgWhite = init(47, 49);
  }
});

// node.ts
var node_exports = {};
__export(node_exports, {
  ALWAYS_EMPTY: () => ALWAYS_EMPTY,
  AUTO_TILL_END: () => AUTO_TILL_END,
  Action: () => Action,
  BRANCH_SEP: () => BRANCH_SEP,
  BYTE1_MAX: () => BYTE1_MAX,
  BYTE2_MAX: () => BYTE2_MAX,
  BYTE2_START: () => BYTE2_START,
  BYTE3_MAX: () => BYTE3_MAX,
  BYTE3_START: () => BYTE3_START,
  BYTE4_MAX: () => BYTE4_MAX,
  BYTE4_START: () => BYTE4_START,
  BYTE5_MAX: () => BYTE5_MAX,
  BYTE5_START: () => BYTE5_START,
  BYTE_MAX: () => BYTE_MAX,
  CJKRangeName: () => CJKRangeName,
  CJKRanges: () => CJKRanges,
  CJKWordBegin_Reg: () => CJKWordBegin_Reg,
  CJKWordEnd_Reg: () => CJKWordEnd_Reg,
  CJKWord_Reg: () => CJKWord_Reg,
  COLUMNFIELDSEP: () => COLUMNFIELDSEP,
  CodeStart: () => CodeStart,
  Column: () => Column,
  CompiledFile: () => CompiledFile,
  Compiler: () => Compiler,
  DOMFromString: () => DOMFromString,
  EXCERPTACTIONPREFIX: () => EXCERPTACTIONPREFIX,
  EXCERPT_PAGESIZE: () => EXCERPT_PAGESIZE,
  Element: () => Element,
  FROMTILL: () => FROMTILL,
  FolioText: () => FolioText,
  Formula: () => Formula,
  GUIDEACTIONPREFIX: () => GUIDEACTIONPREFIX,
  HTMLTAG_REGEX_G: () => HTMLTAG_REGEX_G,
  Indexer: () => Indexer,
  Inverted: () => Inverted,
  JSONParse: () => JSONParse,
  JSONify: () => JSONify,
  LEMMA_DELIMITER: () => LEMMA_DELIMITER,
  LVA: () => LVA2,
  LineBase: () => LineBase,
  LineBaser: () => LineBaser,
  MAXDIVISIONLINE: () => MAXDIVISIONLINE,
  MAXFOLIOCHAR: () => MAXFOLIOCHAR,
  MAXFOLIOLINE: () => MAXFOLIOLINE,
  MAXPHRASELEN: () => MAXPHRASELEN,
  MAX_PHRASE: () => MAX_PHRASE,
  MAX_VERROR: () => MAX_VERROR,
  MIN_ABRIDGE: () => MIN_ABRIDGE,
  OFFTAG_ATTRS: () => OFFTAG_ATTRS,
  OFFTAG_COMPACT_ATTR: () => OFFTAG_COMPACT_ATTR,
  OFFTAG_COMPACT_ID: () => OFFTAG_COMPACT_ID,
  OFFTAG_LEADBYTE: () => OFFTAG_LEADBYTE,
  OFFTAG_NAME_ATTR: () => OFFTAG_NAME_ATTR,
  OFFTAG_REGEX: () => OFFTAG_REGEX,
  OFFTAG_REGEX_G: () => OFFTAG_REGEX_G,
  OFFTAG_REGEX_SPLIT: () => OFFTAG_REGEX_SPLIT,
  OFFTAG_REGEX_TOKENIZE: () => OFFTAG_REGEX_TOKENIZE,
  OWNERDRAWPREFIX: () => OWNERDRAWPREFIX,
  Offtext: () => Offtext,
  PGDEXT: () => PGDEXT,
  PTK_ACTION_FROMTILL: () => PTK_ACTION_FROMTILL,
  PTK_FROMTILL: () => PTK_FROMTILL,
  Paged: () => Paged,
  PagedGroup: () => PagedGroup,
  Pitaka: () => Pitaka,
  PtkFromPagedGroup: () => PtkFromPagedGroup,
  QSTRING_REGEX_G: () => QSTRING_REGEX_G,
  QUOTEPAT: () => QUOTEPAT,
  QUOTEPREFIX: () => QUOTEPREFIX,
  REGEX_CJK_PHRASE: () => REGEX_CJK_PHRASE,
  REGEX_IRE: () => REGEX_IRE,
  REG_PALI_SPACE_SPLIT: () => REG_PALI_SPACE_SPLIT,
  RemainingErrata: () => RemainingErrata,
  RemoteZipStore: () => RemoteZipStore,
  RenderUnit: () => RenderUnit,
  SA_MATCH_ANY: () => SA_MATCH_ANY2,
  SA_MATCH_END: () => SA_MATCH_END2,
  SA_MATCH_MIDDLE: () => SA_MATCH_MIDDLE2,
  SA_MATCH_START: () => SA_MATCH_START2,
  SEP2DITEM: () => SEP2DITEM,
  SEPARATOR2D: () => SEPARATOR2D,
  Sax: () => Sax,
  SickCauses: () => SickCauses,
  SickFactors: () => SickFactors,
  SickLocations: () => SickLocations,
  SickSigns: () => SickSigns,
  StringArray: () => StringArray,
  StringByteLength: () => StringByteLength,
  TDenList: () => TDenList,
  TITLECOUNTACTIONPREFIX: () => TITLECOUNTACTIONPREFIX,
  TOFIND_MAXLEN: () => TOFIND_MAXLEN,
  TOKENIZE_REGEX: () => TOKENIZE_REGEX,
  TableOfContent: () => TableOfContent,
  TaishoJuanFromPage: () => TaishoJuanFromPage,
  TaishoPageFromJuan: () => TaishoPageFromJuan,
  TaishoSutraCode: () => TaishoSutraCode,
  TaishoVolSutra: () => TaishoVolSutra,
  Token: () => Token,
  TokenType: () => TokenType,
  URL_REGEX: () => URL_REGEX,
  UnicodeBlock: () => UnicodeBlock,
  VALIDPUNCS: () => VALIDPUNCS,
  VError: () => VError2,
  Word_tailspace_Reg: () => Word_tailspace_Reg,
  ZipStore: () => ZipStore,
  abridgeRenderUnits: () => abridgeRenderUnits,
  addressFromUrl: () => addressFromUrl,
  addtag_x: () => addtag_x,
  addtag_y: () => addtag_y,
  afterPN: () => afterPN,
  alignParagraph: () => alignParagraph,
  alignParagraphLinecount: () => alignParagraphLinecount,
  alignable: () => alignable,
  aligncrlf: () => aligncrlf,
  alphabetically: () => alphabetically,
  alphabetically0: () => alphabetically0,
  alphabetically1: () => alphabetically1,
  alphabetically2: () => alphabetically2,
  arrDelta: () => arrDelta,
  arraydiff: () => arraydiff,
  autoAlign: () => autoAlign,
  autoBreak: () => autoBreak,
  autoChineseBreak: () => autoChineseBreak,
  autoENBreak: () => autoENBreak,
  beforePN: () => beforePN,
  breakByPin: () => breakByPin,
  breakChineseSentence: () => breakChineseSentence,
  breakLine: () => breakLine,
  breakSentence: () => breakSentence,
  brokenTransclusions: () => brokenTransclusions,
  bsearch: () => bsearch,
  bsearchGetter: () => bsearchGetter,
  bsearchNumber: () => bsearchNumber,
  buildTocTag: () => buildTocTag,
  buildYToc: () => buildYToc,
  caesura: () => caesura,
  calApprox: () => calApprox,
  calOriginalOffset: () => calOriginalOffset,
  captionOf: () => captionOf,
  captionOfPage: () => captionOfPage,
  chineseDigit: () => chineseDigit,
  cjkPhrases: () => cjkPhrases,
  cjkSplitPuncs: () => cjkSplitPuncs,
  closeBracketOf: () => closeBracketOf,
  codePointLength: () => codePointLength,
  columnTextByKey: () => columnTextByKey,
  combineHeaders: () => combineHeaders,
  compareText: () => compareText,
  compoundSimilarity: () => compoundSimilarity,
  countFolioChar: () => countFolioChar,
  countMembers: () => countMembers,
  createAction: () => createAction,
  createBrowserDownload: () => createBrowserDownload,
  createField: () => createField,
  createNestingAction: () => createNestingAction,
  cssSkeleton: () => cssSkeleton,
  debounce: () => debounce,
  decodeFactor: () => decodeFactor,
  dedup: () => dedup,
  deepReadDir: () => deepReadDir,
  depthOfId: () => depthOfId,
  diffBreak: () => diffBreak,
  diffList: () => diffList,
  diffParanum: () => diffParanum,
  eatbracket: () => eatbracket,
  eatofftag: () => eatofftag,
  enableAccelon23Features: () => enableAccelon23Features,
  enableFeature: () => enableFeature,
  enableFeatures: () => enableFeatures,
  enableFootnoteFeature: () => enableFootnoteFeature,
  encodeFactor: () => encodeFactor,
  encodeFactors: () => encodeFactors,
  ensureArrayLength: () => ensureArrayLength,
  ensureChunkHasPN: () => ensureChunkHasPN,
  ensurefirstLineHasPN: () => ensurefirstLineHasPN,
  entity2unicode: () => entity2unicode,
  entriesOfKey: () => entriesOfKey,
  enumBases: () => enumBases,
  enumCJKRangeNames: () => enumCJKRangeNames,
  enumEntries: () => enumEntries,
  errorMessage: () => errorMessage,
  escapeHTML: () => escapeHTML,
  escapePackedStr: () => escapePackedStr,
  escapeStrWithQuote: () => escapeStrWithQuote,
  escapeTemplateString: () => escapeTemplateString,
  extractAuthor: () => extractAuthor,
  extractBook: () => extractBook,
  extractChineseNumber: () => extractChineseNumber,
  extractIDS: () => extractIDS,
  extractJSON: () => extractJSON,
  extractObject: () => extractObject,
  extractPuncPos: () => extractPuncPos,
  factorizeText: () => factorizeText,
  fetchAddress: () => fetchAddress,
  fetchAddressExtra: () => fetchAddressExtra,
  fetchFile: () => fetchFile,
  fetchTag: () => fetchTag,
  filesFromPattern: () => filesFromPattern,
  fillGap: () => fillGap,
  findClosestTag: () => findClosestTag,
  folioPosFromAddress: () => folioPosFromAddress,
  forEachUTF32: () => forEachUTF32,
  foreignNumber: () => foreignNumber,
  fromBase26: () => fromBase26,
  fromCBETA: () => fromCBETA,
  fromChineseNumber: () => fromChineseNumber,
  fromObj: () => fromObj,
  getAnyColumnText: () => getAnyColumnText,
  getApprox: () => getApprox,
  getBookColumnText: () => getBookColumnText,
  getCJKRange: () => getCJKRange,
  getColumnText: () => getColumnText,
  getCounter: () => getCounter,
  getFactors: () => getFactors,
  getInserts: () => getInserts,
  getMultiStateFilters: () => getMultiStateFilters,
  getOfftextLineClass: () => getOfftextLineClass,
  getOrthograph: () => getOrthograph,
  getParallelLines: () => getParallelLines,
  getPostings: () => getPostings,
  getRenderUnitClasses: () => getRenderUnitClasses,
  getSliceText: () => getSliceText,
  getSpeed: () => getSpeed,
  getSutraInfo: () => getSutraInfo,
  getTagById: () => getTagById,
  getTagFields: () => getTagFields,
  getWordInfo: () => getWordInfo,
  gini: () => gini,
  glob: () => glob,
  groupArr: () => groupArr,
  groupNumArray: () => groupNumArray,
  guessEntry: () => guessEntry,
  guidedBreakLines: () => guidedBreakLines,
  hasLang: () => hasLang,
  headerWithNumber: () => headerWithNumber,
  hitsOfLine: () => hitsOfLine,
  hookFromParaLines: () => hookFromParaLines,
  humanBytes: () => humanBytes,
  humanChoice: () => humanChoice,
  inMemory: () => inMemory,
  incObj: () => incObj,
  indexOfs: () => indexOfs,
  innertext: () => innertext,
  insertBuf: () => insertBuf,
  insertText: () => insertText,
  intersect: () => intersect,
  intersects: () => intersects,
  isCJKChar: () => isCJKChar,
  isChineseChapter: () => isChineseChapter,
  isChineseNumber: () => isChineseNumber,
  isIASTToken: () => isIASTToken,
  isPunc: () => isPunc,
  isSurrogate: () => isSurrogate,
  isWordChar: () => isWordChar,
  jsonify: () => jsonify,
  keyOfEntry: () => keyOfEntry,
  langSplitChar: () => langSplitChar,
  length_alphabetically: () => length_alphabetically,
  length_alphabetically0: () => length_alphabetically0,
  length_alphabetically1: () => length_alphabetically1,
  lexiconIntersect: () => lexiconIntersect,
  lexiconUnion: () => lexiconUnion,
  lexiconXor: () => lexiconXor,
  lineBreaksOffset: () => lineBreaksOffset,
  linePN: () => linePN,
  listExcerpts: () => listExcerpts,
  listwords: () => listwords,
  loadPostings: () => loadPostings,
  loadPostingsSync: () => loadPostingsSync,
  loadScript: () => loadScript,
  loadUrl: () => loadUrl,
  lookupKeyColumn: () => lookupKeyColumn,
  makeAddress: () => makeAddress,
  makeChunkAddress: () => makeChunkAddress,
  makeElementId: () => makeElementId,
  makeExcerptAddress: () => makeExcerptAddress,
  makeHook: () => makeHook,
  makeInMemoryPtk: () => makeInMemoryPtk,
  makeLineBaser: () => makeLineBaser,
  makePitakaZip: () => makePitakaZip,
  maxlen1: () => maxlen1,
  maxlen2: () => maxlen2,
  maxlen3: () => maxlen3,
  meta_cbeta: () => meta_cbeta,
  meta_cm: () => meta_cm,
  meta_cs: () => meta_cs,
  meta_sc: () => meta_sc,
  moveFootnoteToTail: () => moveFootnoteToTail,
  nearestTag: () => nearestTag,
  nextColumn: () => nextColumn,
  nodefs: () => nodefs,
  normalizeQianziwen: () => normalizeQianziwen,
  offTagType: () => offTagType,
  onChunkCaption: () => onChunkCaption,
  onClose: () => onClose,
  onLineText: () => onLineText,
  onOfftext: () => onOfftext,
  onOpen: () => onOpen,
  onTextWithInserts: () => onTextWithInserts,
  openComOption: () => openComOption,
  openInMemoryPtk: () => openInMemoryPtk,
  openPtk: () => openPtk,
  openPtkOption: () => openPtkOption,
  openSourceOption: () => openSourceOption,
  pack1: () => pack1,
  pack2: () => pack2,
  pack3: () => pack3,
  pack3_2d: () => pack3_2d,
  packBoolean: () => packBoolean,
  packInt: () => packInt,
  packInt2d: () => packInt2d,
  packIntDelta: () => packIntDelta,
  packIntDelta2d: () => packIntDelta2d,
  packOfftagAttrs: () => packOfftagAttrs,
  packStrings: () => packStrings,
  pageBookLineOfAnchor: () => pageBookLineOfAnchor,
  pageFromPtk: () => pageFromPtk,
  pagejsonpfn: () => pagejsonpfn,
  paragraphSimilarity: () => paragraphSimilarity,
  parallelWithDiff: () => parallelWithDiff,
  parseAction: () => parseAction,
  parseAddress: () => parseAddress,
  parseAttributes: () => parseAttributes,
  parseChoice: () => parseChoice,
  parseCriteria: () => parseCriteria,
  parseHook: () => parseHook,
  parseJsonp: () => parseJsonp,
  parseOfftag: () => parseOfftag,
  parseOfftext: () => parseOfftext,
  parsePageBookLine: () => parsePageBookLine,
  parseQianziwen: () => parseQianziwen,
  parseQuery: () => parseQuery,
  parseTransclusion: () => parseTransclusion,
  parseXMLAttribute: () => parseXMLAttribute,
  patchBuf: () => patchBuf,
  peelXML: () => peelXML,
  phraseQuery: () => phraseQuery,
  phraseQuerySync: () => phraseQuerySync,
  pinNotes: () => pinNotes,
  pinPos: () => pinPos,
  plAnd: () => plAnd,
  plContain: () => plContain,
  plCount: () => plCount,
  plFind: () => plFind,
  plRanges: () => plRanges,
  plTrim: () => plTrim,
  poolAdd: () => poolAdd,
  poolDel: () => poolDel,
  poolGet: () => poolGet,
  poolGetAll: () => poolGetAll,
  poolHas: () => poolHas,
  poolParallelPitakas: () => poolParallelPitakas,
  posBackwardPin: () => posBackwardPin,
  posPin: () => posPin,
  predefines: () => predefines,
  ptkFromString: () => ptkFromString,
  ptk_version: () => ptk_version,
  pulse: () => pulse,
  qianziwen: () => qianziwen,
  queryTagFields: () => queryTagFields,
  rangeOfAddress: () => rangeOfAddress,
  rangeOfElementId: () => rangeOfElementId,
  readTextContent: () => readTextContent,
  readTextLines: () => readTextLines,
  regPtkName: () => regPtkName,
  removeBold: () => removeBold,
  removeBracket: () => removeBracket,
  removeHeader: () => removeHeader,
  removePunc: () => removePunc,
  removeSentenceBreak: () => removeSentenceBreak,
  removeSubPara: () => removeSubPara,
  removeSubstring: () => removeSubstring,
  renderOfftext: () => renderOfftext,
  replaceAuthor: () => replaceAuthor,
  replaceBook: () => replaceBook,
  replaceZhuyin: () => replaceZhuyin,
  resetCounter: () => resetCounter,
  runCriterion: () => runCriterion,
  runFilter: () => runFilter,
  runTest: () => runTest,
  sameAddress: () => sameAddress,
  saveComOption: () => saveComOption,
  savePtkOption: () => savePtkOption,
  saveSourceOption: () => saveSourceOption,
  scanText: () => scanText,
  scoreLine: () => scoreLine,
  searchSentence: () => searchSentence,
  searchSentenceSync: () => searchSentenceSync,
  sentenceFromRange: () => sentenceFromRange,
  sentencePosfromSelection: () => sentencePosfromSelection,
  sentenceRatio: () => sentenceRatio,
  sentencize: () => sentencize,
  serializeBackTransclusion: () => serializeBackTransclusion,
  serializeToc: () => serializeToc,
  setPtkFileLength: () => setPtkFileLength,
  showMemory: () => showMemory,
  similarFactors: () => similarFactors,
  similarSentence: () => similarSentence,
  similarSet: () => similarSet,
  sleep: () => sleep,
  sortNumberArray: () => sortNumberArray,
  sortObj: () => sortObj,
  sourceType: () => sourceType,
  spacify: () => spacify,
  splitUTF32: () => splitUTF32,
  splitUTF32Char: () => splitUTF32Char,
  statStrIntobject: () => statStrIntobject,
  storeZip: () => storeZip,
  string2codePoint: () => string2codePoint,
  stringifyChoice: () => stringifyChoice,
  stripLinesNote: () => stripLinesNote,
  stripOfftag: () => stripOfftag,
  styledNumber: () => styledNumber,
  substrUTF32: () => substrUTF32,
  supprtedBrowser: () => supprtedBrowser,
  symtom: () => symtom,
  tagAtAction: () => tagAtAction,
  tagCount: () => tagCount,
  tagInRange: () => tagInRange,
  tidyFolioText: () => tidyFolioText,
  toBase26: () => toBase26,
  toCBETA: () => toCBETA,
  toChineseNumber: () => toChineseNumber,
  toFolioText: () => toFolioText,
  toObj: () => toObj,
  toParagraphs: () => toParagraphs,
  toPinyin: () => toPinyin,
  toVerticalPunc: () => toVerticalPunc,
  tokenize: () => tokenize,
  tokenizeIAST: () => tokenizeIAST,
  tokenizeIASTPunc: () => tokenizeIASTPunc,
  tokenizeOfftext: () => tokenizeOfftext,
  tounge: () => tounge,
  translatePointer: () => translatePointer,
  trimPunc: () => trimPunc,
  union: () => union,
  unique: () => unique,
  unique0: () => unique0,
  unique1: () => unique1,
  unitize: () => unitize,
  unloadScript: () => unloadScript,
  unpack1: () => unpack1,
  unpack2: () => unpack2,
  unpack3: () => unpack3,
  unpack3_2d: () => unpack3_2d,
  unpackBoolean: () => unpackBoolean,
  unpackInt: () => unpackInt,
  unpackInt2d: () => unpackInt2d,
  unpackIntDelta: () => unpackIntDelta,
  unpackIntDelta2d: () => unpackIntDelta2d,
  unpackStrings: () => unpackStrings,
  updateOfftext: () => updateOfftext,
  updateUrl: () => updateUrl,
  urlPrefix: () => urlPrefix,
  usePtk: () => usePtk,
  validId: () => validId,
  validPtkName: () => validPtkName,
  validateTofind: () => validateTofind,
  validate_z: () => validate_z,
  verifyPermission: () => verifyPermission,
  walkDOM: () => walkDOM,
  walkDOMOfftext: () => walkDOMOfftext,
  writeChanged: () => writeChanged,
  writeIncObj: () => writeIncObj,
  writePitaka: () => writePitaka,
  xorStrings: () => xorStrings,
  xpath: () => xpath,
  yidarrInRange: () => yidarrInRange
});
module.exports = __toCommonJS(node_exports);

// offtext/constants.ts
var ALWAYS_EMPTY = { br: true, r: true };
var AUTO_TILL_END = { e: true };
var OFFTAG_REGEX_G = /\^([#@\/\.\:a-z_\-\d~]*)([<\{\[](?:\\.|.)*?[>\}\]])?/g;
var OFFTAG_REGEX = /\^([#@\/\.\:a-z_\-\d~]+)([<{](?:\\.|.)*?>)?/;
var OFFTAG_REGEX_TOKENIZE = /(\^[#@\/\.\:a-z_\-\d~]+)([<{](?:\\.|.)*?[>}])?/g;
var OFFTAG_REGEX_SPLIT = /(\^[#@\/\.\:a-z_\-\d~]+)([<{](?:\\.|.)*?[>}])?/;
var HTMLTAG_REGEX_G = /(<(?:\\.|.)*?>)/g;
var QUOTEPREFIX = "";
var QUOTEPAT = /\u001a(\d+)/g;
var OFFTAG_COMPACT_ATTR = /^([\da-z_:\-\.~]*)$/;
var OFFTAG_NAME_ATTR = /([a-z_\:]+)(.*)/;
var OFFTAG_ATTRS = "(\\[(?:\\\\.|.)*?\\])?";
var OFFTAG_COMPACT_ID = /^([a-z\d]+[_a-z\d\-~\.]*)/;
var QSTRING_REGEX_G = /"((?:\\.|.)*?)"/g;
var OFFTAG_LEADBYTE = "^";
var FROMTILL = /^(>\d+)?(<\d+)?(:[\-\d]+)?$/;
var PTK_FROMTILL = /^([a-z\.\d\-_]+\:)(>\d+)?(<\d+)?(:[\-\d]+)?$/;
var PTK_ACTION_FROMTILL = /^([a-z\.\d\-_]+\:)?([^<>\d:]+[^:<>]*)(>\d+)?(<\d+)?(:[\-\d]+)?$/;
var MIN_ABRIDGE = 8;

// utils/cjk.ts
var REGEX_IRE = /‵([\u3400-\u9FFF\uD800-\uDFFF\uE000-\ufadf]+)′/g;
var REGEX_CJK_PHRASE = /([\u3400-\u9FFF\uD800-\uDFFF\uE000-\ufadf]+)/g;
var isSurrogate = (s) => (s.codePointAt(0) || 0) > 65535;
var isCJKChar = (u) => {
  if (typeof u == "string") u = u.charCodeAt(0);
  return u >= 11904 && u <= 12245 || u >= 12353 && u <= 12438 || u >= 12449 && u <= 12703 || u >= 13312 && u <= 40959 || u >= 54272 && u <= 57343 || u >= 57344 && u <= 64223 || u >= 49152 && u <= 55295;
};
var CJKRanges = {
  "BMP": [19968, 40869],
  "SurrogageLeft": [55296, 56319],
  "SurrogageRight": [56320, 57343],
  "ExtA": [13312, 19967],
  "ExtB": [131072, 173823],
  "ExtC": [173824, 177983],
  "ExtD": [177984, 178207],
  "ExtE": [178208, 183983],
  "ExtF": [183984, 191456],
  "ExtG": [196608, 201551],
  "ExtH": [201552, 205743],
  "ExtZ": [655360, 870399]
};
var enumCJKRangeNames = () => Object.keys(CJKRanges);
var getCJKRange = (name2) => CJKRanges[name2] || [0, 0];
var CJKRangeName = (s) => {
  let cp = 0;
  if (typeof s === "string") {
    const code = parseInt(s, 16);
    if (!isNaN(code)) {
      cp = code;
    } else {
      cp = s.codePointAt(0) || 0;
    }
  }
  for (let rangename in CJKRanges) {
    const [from, to] = CJKRanges[rangename];
    if (cp >= from && cp <= to) return rangename;
  }
};
var string2codePoint = (str, snap) => {
  if (!str) return 0;
  const cp = str.codePointAt(0) || 0;
  let n;
  if (cp >= 13312 && cp < 196607) {
    n = cp;
  } else {
    n = parseInt(str, 16) || 19968;
  }
  return snap ? n & 262016 : n;
};
var isPunc = (str) => {
  if (!str) return false;
  const cp = str.charCodeAt(0);
  return cp >= 12289 && cp <= 12319 || cp > 65280 || cp >= 65040 && cp <= 65131;
};
var trimPunc = (str) => {
  return str.replace(/^[『「！。，：？]+/, "").replace(/[」？』。！：）｝〕；，]+$/, "");
};
var removePunc = (str) => {
  return str.replace(/[！。、：；，？！（）《》｛｝〔〕『』「」]/g, "");
};
var openBrackets = "<{[(\uFF5B\u300C\u300E\u3014\uFF08\uFE39\uFE35\uFE37\u3010\uFE3B\u300A\u3008\uFE3D\uFE3F\uFE41\uFE43\uFE59\uFE5D\uFE5B\u2018\u201C\u301D\u2035";
var closeBrackets = ">}])\uFF5D\u300D\u300F\u3015\uFF09\uFE3A\uFE36\uFE38\u3011\uFE3C\u300B\u3009\uFE3E\uFE40\uFE42\uFE44\uFE5A\uFE5E\uFE5C\u2019\u201D\u301E\u2032";
var closeBracketOf = (ch) => {
  if (!ch) return "";
  const at = openBrackets.indexOf(ch.slice(0, 1));
  if (~at) return closeBrackets[at];
  return "";
};
var removeBracket = (str) => {
  const closebracket = closeBracketOf(str);
  if (closebracket && str.slice(str.length - 1) == closebracket) {
    return str.slice(1, str.length - 1);
  }
  return str;
};
var cjkPhrases = (str) => {
  const out2 = [];
  str.replace(/([\u2e80-\u2fd5\u3400-\u9fff\ud800-\udfff\ue000-\ufad9]+)/g, (m4, m1) => {
    out2.push(m1);
  });
  return out2;
};
var cjkSplitPuncs = (str) => {
  const out2 = [];
  let prev = 0;
  str.replace(/([\u3001-\u301f\uff00-\ufffc]+)/g, (m4, m1, idx2) => {
    out2.push(str.slice(prev, idx2));
    out2.push(m1);
    prev = idx2 + m1.length;
  });
  out2.push(str.slice(prev));
  return out2;
};
var extractAuthor = (arr) => {
  const out2 = [];
  if (typeof arr == "string") arr = [arr];
  arr.forEach((str) => str.replace(/．([\u3400-\u9fff\ud800-\udfff]{2,10})[〈《]/g, (m4, m1) => out2.push(m1)));
  return out2;
};
var extractBook = (arr) => {
  const out2 = [];
  if (typeof arr == "string") arr = [arr];
  arr.forEach((str) => str.replace(/[〈《]([\u3400-\u9fff\ud800-\udfff]{2,30})/g, (m4, m1) => out2.push(m1)));
  return out2;
};
var replaceAuthor = (str, cb) => str.replace(/(．)([\u3400-\u9fff\ud800-\udfff]{2,10})([〈《])/g, (m4, m1, m22, m32) => cb(m1, m22, m32));
var replaceBook = (str, cb) => str.replace(/([〈《])([\u3400-\u9fff\ud800-\udfff]{2,30})/g, (m4, m1, m22, m32) => cb(m1, m22, ""));
var textlength = (str) => {
  return str.replace(/\^[a-z:\d\.\-@#]+/g, "").replace(/<[^>]+/g, "").length;
};
var VerticalPuncs = {
  "\u300C": "\uFE41",
  "\u300D": "\uFE42",
  "\u300E": "\uFE43",
  "\u300F": "\uFE44"
};
var toVerticalPunc = (punc) => {
  return VerticalPuncs[punc] || punc;
};
var breakChineseSentence = (line, opts = {}) => {
  const max = opts.threshold || 22;
  const mid = opts.threshold || 14;
  const min = opts.threshold || 6;
  let thres = 0, t = "";
  const phrases = cjkSplitPuncs(line);
  const out2 = [];
  for (let i = 0; i < phrases.length / 2; i++) {
    const nonpunc = phrases[i * 2];
    let punc = phrases[i * 2 + 1] || "";
    const strongbreak = punc.match(/[。！？]/) || nonpunc.slice(0, 2) == "^k";
    const nextstrongbreak = (phrases[(i + 1) * 2 + 1] || "").match(/[。！？]/);
    thres += textlength(nonpunc);
    t += nonpunc + punc;
    if (t && (thres > max || thres > mid && !nextstrongbreak || thres > min && strongbreak)) {
      out2.push(t);
      t = "";
      thres = 0;
    }
  }
  t && out2.push(t);
  const out22 = [];
  let lead = "";
  for (let i = 0; i < out2.length; i++) {
    const m4 = out2[i].match(/([（《「『︵｛︷〔︹【︻︽〈︿﹃﹙﹛﹝‘“〝‵]+)$/);
    if (m4) {
      out22.push(lead + out2[i].slice(0, out2[i].length - m4[1].length));
      lead = m4[1];
    } else {
      out22.push(lead + out2[i]);
      lead = "";
    }
  }
  if (lead && out22.length) out22[out22.length - 1] += lead;
  return out22.join("\n").replace(/\n(\^[jkf][#a-z\d@:\-]+)([：；，、。！？」』）〕】》]*)/g, (m4, m1, punc) => m1 + (punc || "") + "\n").replace(/\n+/g, "\n").trimEnd();
};
var extractIDS = (line) => {
  const out2 = [];
  line.replace(/([\u2ff0-\u2fff][\u2ff0-\u2fff\u3400-\u9fff\ud800-\udfff]{2,7})/g, (m4, m1) => {
    out2.push(m1);
  });
  return out2;
};
var isWordChar = (cp) => {
  return cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp >= 192 && cp <= 687 || cp >= 880 && cp < 4351 || cp >= 7680 && cp < 8191;
};
var sentenceFromRange = (str, pos, func = isCJKChar) => {
  let start = pos, end = pos;
  while (start > 0) {
    let cp = str.charCodeAt(start);
    if (!func(cp)) {
      start++;
      break;
    } else start--;
  }
  while (end < str.length) {
    let cp = str.charCodeAt(end);
    if (func(cp)) end++;
    else break;
  }
  let s = str.slice(start, end);
  while (s.charAt(0) == " ") {
    s = s.slice(start + 1);
    start++;
  }
  const p3 = pos - start >= 0 ? pos - start : 0;
  return [s, p3];
};
var sentencePosfromSelection = (oritext) => {
  const sel = document.getSelection();
  const range = sel.getRangeAt(0);
  let [sentence, pos] = sentenceFromRange(oritext || sel.anchorNode.data, range.startOffset);
  if (!sentence) {
    [sentence, pos] = sentenceFromRange(oritext || sel.anchorNode.data, range.startOffset, isWordChar);
  }
  return [sentence, pos, range.endOffset - range.startOffset];
};

// utils/unicode.ts
var forEachUTF32 = (str, cb) => {
  let i = 0;
  while (i < str.length) {
    const code = str.codePointAt(i) || 0;
    const ch = String.fromCodePoint(code);
    cb(ch, i, str);
    i++;
    if (code > 65535) i++;
  }
};
var substrUTF32 = (str, from, n) => {
  if (!str || !n || n < 0) return "";
  let i = from;
  while (n > 0 && i < str.length) {
    if (str.codePointAt(i) > 65535) {
      i++;
    }
    n--;
    i++;
  }
  return str.slice(from, i);
};
var splitUTF32 = (str) => {
  if (!str) {
    const empty = [];
    return empty;
  }
  let i = 0;
  const out2 = [];
  while (i < str.length) {
    const code = str.codePointAt(i) || 0;
    out2.push(code);
    i++;
    if (code > 65535) i++;
  }
  return out2;
};
var splitUTF32Char = (str) => splitUTF32(str).map((cp) => String.fromCodePoint(cp));
var codePointLength = (str) => splitUTF32(str).length;
var StringByteLength = (str) => new Blob([str]).size;
var UnicodeBlock = (n) => {
  if (!n) return "";
  const cp = typeof n == "string" ? n.codePointAt(0) : n;
  if (cp < 128) return "\u534A\u5F62 ascii";
  else if (cp < 1024) return "2\u4F4D\u5143\u62C9\u4E01\u5B57\u6BCD 2b Latin";
  else if (cp < 2304) return "\u5176\u4ED6 Miscellaneous";
  else if (cp < 3456) return "\u5370\u5EA6 Indic scripts";
  else if (cp < 3568) return "\u65AF\u91CC\u5170\u5361Sinhala";
  else if (cp < 3712) return "\u6CF0 Thai";
  else if (cp < 3840) return "\u8001\u631D Lao";
  else if (cp < 4096) return "\u85CF Tibet";
  else if (cp < 4352) return "\u7F05 Myanmar";
  else if (cp < 4608) return "\u97E9 Korean";
  else if (cp < 6016) return "\u5176\u4ED6 Miscellaneous";
  else if (cp < 6144) return "\u67EC\u57D4\u5BE8 Khemar";
  else if (cp < 6352) return "\u8499 Mongolian";
  else if (cp < 8192) return "\u5176\u4ED6\u5B57\u6BCD Alphabets";
  else if (cp < 8288) return "\u6807\u70B9 Puncuations";
  else if (cp < 11904) return "\u5176\u4ED6 Miscellaneous";
  else if (cp < 12272) return "\u90E8\u9996 Radical";
  else if (cp < 12288) return "\u7EC4\u5B57\u7B26 IDC";
  else if (cp < 12352) return "\u65E5\u5F0F\u6807\u70B9 Japanese Puncuation";
  else if (cp < 12544) return "\u65E5\u6587 Japanese";
  else if (cp < 12608) return "\u6CE8\u97F3 Bopomofo";
  else if (cp < 12752) return "\u97E9 Korean";
  else if (cp < 12784) return "\u7B14\u5212 Strokes";
  else if (cp < 13312) return "\u673A\u79CD\u4F9D\u5B58\u6587\u5B57 Kisyu-izon-moji";
  else if (cp < 19968) return "\u6269A";
  else if (cp < 40960) return "\u57FA\u672C\u6C49\u5B57";
  else if (cp < 42192) return "\u5F5D Yi";
  else if (cp < 44032) return "\u5176\u4ED6 Miscellaneous";
  else if (cp < 57344) return "\u97E9 Korean";
  else if (cp < 64224) return "\u9020\u5B57\u533A Private Use Area";
  else if (cp < 65280) return "\u5176\u4ED6 Miscellaneous";
  else if (cp < 65536) return "\u5168\u5F62 Full Width";
  else if (cp < 131072) return "\u5176\u4ED6 Miscellaneous";
  else if (cp < 174032) return "\u6269B";
  else if (cp < 178080) return "\u6269C";
  else if (cp < 178304) return "\u6269D";
  else if (cp < 184080) return "\u6269E";
  else if (cp < 196607) return "\u6269F";
  else if (cp < 262144) return "\u6269G";
};

// fts/constants.ts
var TOKENIZE_REGEX = /(([\u0021-\u1fff]+)|([\u2000-\u2fff\u3001-\uffff]+))/g;
var CJKWord_Reg = /([\u2e80-\u2fd5\u3400-\u9fff\ud400-\udfff\ue000\uffff]+)/g;
var CJKWordEnd_Reg = /([\u2e80-\u2fd5\u3400-\u9fff\ud400-\udfff\ue000\ufadf]+$)/;
var CJKWordBegin_Reg = /(^[\u2e80-\u2fd5\u3400-\u9fff\ud400-\udfff\ue000\uffff]+)/;
var Word_tailspace_Reg = /([\dA-Za-z\u1000-\u1049\u0900-\u0963\u96f\u00c0-\u02af\u1e00-\u1faf][\dA-Za-z\u1000-\u1049\u0900-\u0963\u96f\u00c0-\u02af\u1e00-\u1faf\d]* ?)/g;
var MAXPHRASELEN = 16;
var EXCERPT_PAGESIZE = 5;

// fts/tokenize.ts
var TokenType = /* @__PURE__ */ ((TokenType2) => {
  TokenType2[TokenType2["UNSEARCHABLE"] = 1] = "UNSEARCHABLE";
  TokenType2[TokenType2["OFFTAG"] = 3] = "OFFTAG";
  TokenType2[TokenType2["SEARCHABLE"] = 16] = "SEARCHABLE";
  TokenType2[TokenType2["ROMANIZE"] = 32] = "ROMANIZE";
  TokenType2[TokenType2["MYANMAR"] = 33] = "MYANMAR";
  TokenType2[TokenType2["CJK"] = 48] = "CJK";
  TokenType2[TokenType2["CJK_BMP"] = 49] = "CJK_BMP";
  TokenType2[TokenType2["CJK_SURROGATE"] = 50] = "CJK_SURROGATE";
  return TokenType2;
})(TokenType || {});
function Token(text, choff, tkoff, type, line = 0) {
  return { text, choff, tkoff, type };
}
var tokenize = (text) => {
  const out2 = [];
  let i = 0, tkoff = 0;
  if (typeof text !== "string") return [];
  while (i < text.length) {
    let code = text.codePointAt(i) || 0;
    if (code > 65535) {
      const sur = String.fromCodePoint(code);
      out2.push(Token(sur, i, tkoff, 50 /* CJK_SURROGATE */));
      tkoff++;
      i += 2;
      continue;
    } else if (code >= 8192 && code <= 65535) {
      const tt = code >= 2e80 && code <= 12287 || code >= 12353 && code <= 40959 || code >= 54272 && code < 57343 || code >= 57344 && code < 64223 ? 49 /* CJK_BMP */ : 1 /* UNSEARCHABLE */;
      out2.push(Token(text[i], i, tkoff, tt));
      if (tt !== 1 /* UNSEARCHABLE */) tkoff++;
      i++;
      continue;
    }
    let s = "", prev = 0;
    let j2 = i;
    while (j2 < text.length && code < 8192) {
      s += text[j2];
      code = text.codePointAt(++j2) || 0;
    }
    s.replace(Word_tailspace_Reg, (m4, m1, offset) => {
      if (offset > prev) {
        out2.push(Token(s.substring(prev, offset), prev + i, tkoff, 1 /* UNSEARCHABLE */));
      }
      while (s[offset] == " ") offset++;
      out2.push(Token(m1, i + offset, tkoff, 32 /* ROMANIZE */));
      tkoff++;
      prev = offset + m4.length;
      return "";
    });
    if (prev < s.length) out2.push(Token(s.substring(prev), prev + i, tkoff, 1 /* UNSEARCHABLE */));
    i = j2;
  }
  return out2;
};

// utils/json.ts
var jsonify = (almostJson) => {
  try {
    return JSON.parse(almostJson);
  } catch (e) {
    almostJson = almostJson.replace(/([a-zA-Z0-9_$]+\s*):/g, '"$1":').replace(/'([^']+?)'([\s,\]\}])/g, '"$1"$2');
    return JSON.parse(almostJson);
  }
};
var chars = {
  "[": "]",
  "{": "}"
};
var any = (iteree, iterator) => {
  let result;
  for (let i = 0; i < iteree.length; i++) {
    result = iterator(iteree[i], i, iteree);
    if (result) {
      break;
    }
  }
  return result;
};
var extractObject = (str) => {
  if (str.charAt(0) !== "{") return ["", 0];
  let startIndex = 0;
  let openingChar = str[startIndex];
  let closingChar = chars[openingChar];
  let endIndex = -1;
  let count = 0;
  str = str.substring(startIndex);
  any(str, (letter, i) => {
    if (letter === openingChar) {
      count++;
    } else if (letter === closingChar) {
      count--;
    }
    if (!count) {
      endIndex = i;
      return true;
    }
  });
  if (endIndex === -1) {
    return ["", 0];
  }
  let obj = str.substring(0, endIndex + 1);
  return [obj, endIndex + 1];
};
var extract = (str) => {
  let startIndex = str.search(/[\{\[]/);
  if (startIndex === -1) {
    return null;
  }
  let openingChar = str[startIndex];
  let closingChar = chars[openingChar];
  let endIndex = -1;
  let count = 0;
  str = str.substring(startIndex);
  any(str, (letter, i) => {
    if (letter === openingChar) {
      count++;
    } else if (letter === closingChar) {
      count--;
    }
    if (!count) {
      endIndex = i;
      return true;
    }
  });
  if (endIndex === -1) {
    return null;
  }
  let obj = str.substring(0, endIndex + 1);
  return obj;
};
var extractJSON = (str) => {
  let result;
  const objects = [];
  while ((result = extract(str)) !== null) {
    try {
      let obj = jsonify(result);
      objects.push(obj);
    } catch (e) {
    }
    str = str.replace(result, "");
  }
  return objects;
};

// offtext/parser.ts
var parseCompactAttr = (str) => {
  const out2 = {}, arr = str.split(/([@#~])/);
  while (arr.length) {
    let v = arr.shift();
    if (v === "~") out2["to"] = arr.shift();
    else if (v === "@") out2["ln"] = arr.shift();
    else if (v === "#") {
      v = arr.shift() || "";
      const m4 = v.match(OFFTAG_COMPACT_ID);
      if (m4) out2.id = m4[1];
    } else {
      out2.id = v;
    }
  }
  return out2;
};
var parseAttributes = (rawAttrs, compactAttr) => {
  let quotes = Array();
  const getqstr = (str, withq = false) => str.replace(QUOTEPAT, (m4, qc) => {
    return (withq ? '"' : "") + quotes[parseInt(qc)] + (withq ? '"' : "");
  });
  let rawattr = rawAttrs ? rawAttrs.slice(1, rawAttrs.length - 1).replace(QSTRING_REGEX_G, (m4, m1) => {
    quotes.push(m1);
    return QUOTEPREFIX + (quotes.length - 1);
  }) : "";
  const attrarr = rawattr.split(/( +)/), attrs = {};
  let i = 0;
  if (compactAttr) Object.assign(attrs, parseCompactAttr(compactAttr));
  while (attrarr.length) {
    const it = attrarr.shift() || "";
    let eq = -1, key = "";
    if (it[0] == "~" || it[0] == "#" || it[0] == "@") {
      key = it[0];
      if (key == "#") key = "id";
      if (key == "@") key = "ln";
      if (key == "~") key = "to";
      eq = it[1] == "=" ? 1 : 0;
    } else {
      eq = it.indexOf("=");
      if (eq > 0) key = it.slice(0, eq);
    }
    if (eq > -1) {
      attrs[key] = getqstr(it.slice(eq + 1));
      if (attrarr.length && !attrarr[0].trim()) attrarr.shift();
    } else {
      if (it) attrs[it] = true;
    }
    i++;
  }
  return attrs;
};
var parseOfftag = (raw, rawAttrs) => {
  let attrs = {};
  if (raw[0] == OFFTAG_LEADBYTE) raw = raw.slice(1);
  if (rawAttrs) {
    if (rawAttrs[0] !== "<" && rawAttrs[0] !== "{") {
      rawAttrs = "";
    } else {
      const at = raw.indexOf("<");
      const at2 = raw.indexOf("{");
      if (at2 > 0) {
        rawAttrs = raw.slice(at);
        raw = raw.slice(0, at);
      } else if (at > 0) {
        rawAttrs = raw.slice(at);
        raw = raw.slice(0, at);
      }
    }
  }
  const o = raw.match(OFFTAG_NAME_ATTR);
  if (!o) {
    console.log("\ninvalid tag, raw", raw, "attr", rawAttrs);
    return [raw, {}];
  } else {
    let [m22, tagName, compactAttr] = o;
    if (rawAttrs && rawAttrs.charAt(0) == "{") {
      const attrs2 = jsonify(rawAttrs);
      attrs = parseAttributes("", compactAttr);
      for (let key in attrs2) {
        attrs[key] = attrs2[key];
      }
    } else {
      if (compactAttr || rawAttrs) attrs = parseAttributes(rawAttrs, compactAttr);
    }
    return [tagName, attrs];
  }
};
var resolveEnd = (raw, plain, tags) => {
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    let j2 = i;
    if (tag.end > tag.start && !tag.width) {
      while (j2 < tags.length && tag.end > tags[j2].start) j2++;
      if (j2 < tags.length && tags[j2].start > tag.end || j2 == tags.length) j2--;
      const closest = j2 < tags.length ? tags[j2] : tag;
      tag.width = tag.end - closest.start;
      tag.width += closest.choff - tag.choff;
    }
  }
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    if (tag.width && tag.end == tag.start) {
      tag.width = substrUTF32(plain, tag.choff, tag.width).length;
      let j2 = i + 1;
      while (j2 < tags.length && tag.choff + tag.width > tags[j2].choff) j2++;
      if (j2 < tags.length && tags[j2].choff > tag.choff + tag.width || j2 == tags.length) j2--;
      const closest = j2 < tags.length ? tags[j2] : tag;
      if (closest === tag) {
        tag.end += tag.width;
      } else {
        tag.end = closest.start + (tag.choff + tag.width - closest.choff);
      }
    }
  }
};
var stripOfftag = (str) => str.replace(OFFTAG_REGEX_G, "");
var parseOfftext = (str, line = 0) => {
  if (!str || str.indexOf("^") == -1) return [str || "", []];
  let tags = Array();
  let choff = 0, prevoff = 0;
  let text = str.replace(OFFTAG_REGEX_G, (m4, rawName, rawAttrs, offset) => {
    if (!rawName) {
      if (rawAttrs && rawAttrs.startsWith("[")) {
        const transclusiontag = {
          name: "",
          offset,
          aoffset: offset + 1,
          attrs: {},
          line,
          choff,
          width: 0,
          start: offset + 2,
          end: offset + rawAttrs.length,
          active: false
        };
        tags.push(transclusiontag);
        const innertext2 = removeBracket(rawAttrs);
        return innertext2;
      }
      return "";
    }
    let [tagName, attrs] = parseOfftag(rawName, rawAttrs);
    let width = 0;
    let start = offset + m4.length, end = start;
    let endch = attrs["~"];
    if (endch) {
      if (isNaN(parseInt(endch))) {
        width = 0;
        let repeat = 0;
        const m5 = endch.match(/\+(\d+)$/);
        if (m5) {
          endch = endch.slice(0, endch.length - m5.length);
          repeat = parseInt(m5[1]);
        }
        let at = str.indexOf(endch, start);
        while (~at && repeat) {
          at = str.indexOf(endch, at + 1);
          repeat--;
        }
        if (~at) {
          end = at + endch.length;
          delete attrs["~"];
        }
      } else {
        width = parseInt(endch);
      }
    } else {
      const closebracket = closeBracketOf(str.charAt(start));
      if (closebracket) {
        const at = str.indexOf(closebracket, start + 1);
        if (~at) end = at + closebracket.length;
      }
    }
    const aoffset = offset + rawName.length + 1;
    choff += offset - prevoff;
    let offtag = {
      name: tagName,
      offset,
      aoffset,
      attrs,
      line,
      choff,
      width,
      start,
      end,
      active: false
    };
    tags.push(offtag);
    choff -= m4.length;
    prevoff = offset;
    return "";
  });
  resolveEnd(str, text, tags);
  if (tags.length && tags[tags.length - 1].choff >= text.length) {
    text += " ";
  }
  return [text, tags];
};
var updateOfftext = (rawtext, tag, newtag) => {
  for (let n in newtag.attrs) {
    if (newtag.attrs[n] != tag.attrs[n]) {
      let newvalue = typeof newtag.attrs[n] !== "string" ? JSON.stringify(newtag.attrs[n]) : newtag.attrs[n];
      if (newvalue.indexOf(" ") > 0) {
        newvalue = '"' + newvalue + '"';
      }
      const regex = new RegExp("\\b" + n + ' *= *"?' + tag.attrs[n] + '"?');
      rawtext = rawtext.replace(regex, n + "=" + newvalue);
    }
  }
  return rawtext;
};
var Offtext = class {
  raw;
  plain;
  tags;
  constructor(raw, line = 0) {
    this.raw = raw;
    let [plain, tags] = parseOfftext(raw, line);
    this.plain = plain;
    this.tags = tags;
  }
  getTag(ntag) {
    return this.tags[ntag];
  }
  tagText(tag, raw = false) {
    if (typeof tag == "number") tag = this.tags[tag];
    if (!tag) return "";
    return raw ? this.raw.slice(tag.start, tag.end) : this.plain.slice(tag.choff, tag.choff + tag.width);
  }
  tagRawText(tag) {
    return this.tagText(tag, true);
  }
};
var packOfftagAttrs = (attrs, opts = { omit: Boolean, allowEmpty: Boolean }) => {
  let out2 = "";
  const omit = opts.omit || false;
  const allowEmpty = opts.allowEmpty || false;
  for (let key in attrs) {
    if (omit && omit[key]) continue;
    let v = attrs[key];
    if (v.indexOf(" ") > -1 || !v && opts?.allowEmpty) {
      v = '"' + v.replace(/\"/g, '\\"') + '"';
    }
    if (out2) out2 += " ";
    if (attrs[key] && !allowEmpty) out2 += key + "=" + v;
  }
  return out2.trim();
};
var tokenizeOfftext = (str) => {
  let out2 = Array();
  let tkoff = 0, choff = 0;
  const addSnippet = (snippet) => {
    if (!snippet) return;
    const tokens = tokenize(snippet) || [];
    out2 = out2.concat(tokens);
    if (tokens.length) {
      const tkcount = out2[out2.length - 1].tkoff + (out2[out2.length - 1].type >= 16 /* SEARCHABLE */ ? 1 : 0);
      tokens.forEach((it) => {
        it.choff += choff;
        it.tkoff += tkoff;
      });
      tkoff += tkcount;
    }
  };
  str.replace(OFFTAG_REGEX_TOKENIZE, (m4, rawName, rawAttrs, offset) => {
    const prevtext = str.slice(choff, offset);
    addSnippet(prevtext);
    const thetag = str.slice(offset, offset + m4.length);
    const tk = new Token(thetag, offset, tkoff, 3 /* OFFTAG */);
    out2.push(tk);
    choff = offset + m4.length;
  });
  addSnippet(str.slice(choff));
  return out2;
};
var sentencize = (linetext = "", line) => {
  const tokens = tokenizeOfftext(linetext);
  const sentences = Array();
  let prevcjk = -1;
  for (let i = 0; i < tokens.length; i++) {
    const tk = tokens[i];
    if (tk.type > 16 /* SEARCHABLE */) {
      if (i && sentences.length && tk.type & 48 /* CJK */ && prevcjk > -1) {
        tokens[prevcjk].text += tk.text;
      } else {
        tk.line = line;
        sentences.push(tk);
        if (tk.type & 48 /* CJK */) prevcjk = i;
        else prevcjk = -1;
      }
    } else {
      if (!tk.text.match(OFFTAG_REGEX)) prevcjk = -1;
      sentences.push(tk);
    }
  }
  return sentences;
};
var eatofftag = (str) => {
  let thetag = "", p3 = 0;
  let ch = str.charAt(0);
  if (ch == "{") {
    const [obj, len] = extractObject(str);
    return str.slice(0, len);
  }
  while (thetag.length < 128 && ch && p3 < str.length) {
    const cp = str.charCodeAt(p3) || 0;
    if (cp > 45 && cp <= 59 || cp >= 97 && cp <= 122 || cp == 64 || cp == 35 || cp == 95 || cp == 126) {
      thetag += ch;
      p3++;
    } else {
      break;
    }
    ch = str.charAt(p3);
  }
  return thetag;
};
var eatbracket = (str, breaker = "	", stop = null) => {
  let out2 = "", p3 = 0;
  let ch = str.charAt(p3);
  let closebracket = closeBracketOf(ch);
  if (!stop) stop = [];
  while (closebracket) {
    const at2 = str.indexOf(closebracket, p3 + 1);
    if (at2 == -1) {
      break;
    }
    out2 += str.slice(p3, at2 + 1);
    if (breaker) out2 += breaker;
    p3 = at2 + 1;
    if (~stop.indexOf(ch)) break;
    ch = str.charAt(p3);
    closebracket = closeBracketOf(ch);
  }
  return out2.slice(0, out2.length - breaker.length);
};
var unitize = (str) => {
  if (!str) return [];
  const out2 = "".split("");
  let prev = 0;
  let at = str.indexOf("^", prev);
  while (~at) {
    let p3 = at + 1;
    let ch = str.charAt(p3);
    if (ch == "^") {
      at = str.indexOf("^", p3 + 1);
      continue;
    }
    let prevtext = "";
    const offtag = eatofftag(str.slice(p3));
    prevtext = str.slice(prev, p3 - 1);
    if (prevtext) out2.push(prevtext);
    const brackets = eatbracket(str.slice(p3 + offtag.length), "", ["[", "{", "<"]);
    out2.push("^" + str.slice(p3, p3 + brackets.length + offtag.length));
    p3 += offtag.length;
    prev = brackets.length + p3;
    at = str.indexOf("^", prev);
  }
  if (str.length > prev) {
    let s = str.slice(prev);
    if (s) out2.push(s);
  }
  return out2;
};
var offTagType = (str) => {
  const offtag = eatofftag(str);
  str = str.slice(offtag.length);
  const ch = str.charAt(0);
  if (closeBracketOf(ch)) {
    if (ch === "[") {
      return [str.slice(1, str.length - 1), "transclusion", offtag];
    } else if (ch === "<" && !offtag.length) {
      return [str, "html", offtag];
    } else {
      if (offtag.charAt(0) == "{") {
        try {
          const r = jsonify(offtag);
          return [offtag, "offtext", ""];
        } catch (e) {
          return [str, "unknown", offtag];
        }
      }
      return [str, "offtext", offtag];
    }
  } else {
    if (!str) return ["", "offtext", offtag];
    try {
      const r = jsonify(offtag);
      return [str, "offtext", offtag];
    } catch (e) {
      return [str, "unknown", offtag];
    }
  }
};
var parsePageBookLine = (addr) => {
  let lineoff = 0;
  const m4 = addr.match(/\.(\d+)/);
  if (m4) {
    lineoff = parseInt(m4[1]);
    addr = addr.replace(m4[0], "");
  }
  let [page, book] = addr.split("@");
  return [page, book, lineoff];
};
var parseTransclusion = (str) => {
  if (str.startsWith("^")) str = str.slice(1);
  let tag = "", innertext2 = str;
  if (!str.indexOf("[")) {
    tag = eatofftag(str);
    innertext2 = removeBracket(str.slice(tag.length));
  }
  const at = innertext2.indexOf("|");
  let caption2 = innertext2;
  if (at > 0) {
    caption2 = innertext2.slice(0, at);
    innertext2 = innertext2.slice(at + 1);
  }
  return [tag, innertext2, caption2];
};

// fts/criteria.ts
var runCriterion = (ptk, name2, c2) => {
  console.log("run", name2);
};
var parseCriteria = (cstr) => {
  const query = [];
  const criteria = cstr.split(";");
  for (let i = 0; i < criteria.length; i++) {
    const [name2, tofind] = criteria[i].split("=");
    query.push({ name: name2, tofind });
  }
  return query;
};

// utils/bsearch.ts
var bsearchNumber = (arr, obj) => {
  let low = 0, high = arr.length - 1, mid;
  while (low < high) {
    mid = low + high >> 1;
    if (arr[mid] === obj) {
      while (mid > -1 && arr[mid - 1] === obj) mid--;
      return mid;
    }
    arr[mid] < obj ? low = mid + 1 : high = mid;
  }
  return low;
};
var bsearch = (arr, obj) => {
  let low = 0, high = arr.length - 1, mid;
  while (low < high) {
    mid = low + high >> 1;
    if (arr[mid] === obj) {
      while (mid > -1 && arr[mid - 1] === obj) mid--;
      return mid;
    }
    arr[mid] < obj ? low = mid + 1 : high = mid;
  }
  return low;
};
var bsearchGetter = (getter, obj) => {
  const len = parseInt(getter(-1));
  let low = 0, high = len - 1;
  while (low < high) {
    let mid = low + high >> 1;
    if (getter(mid) === obj) {
      while (mid > -1 && getter(mid - 1) === obj) mid--;
      return mid;
    }
    getter(mid) < obj ? low = mid + 1 : high = mid;
  }
  return low;
};

// utils/sortedarray.ts
var alphabetically = (a, b) => a > b ? 1 : a < b ? -1 : 0;
var alphabetically0 = (a, b) => a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
var alphabetically1 = (a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
var alphabetically2 = (a, b) => a[2] > b[2] ? 1 : a[2] < b[2] ? -1 : 0;
var length_alphabetically = (a, b) => a.length == b.length ? a > b ? 1 : a < b ? -1 : 0 : a.length - b.length;
var length_alphabetically0 = (a, b) => a[0].length == b[0].length ? a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0 : a[0].length - b[0].length;
var length_alphabetically1 = (a, b) => a[1].length == b[1].length ? a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0 : a[1].length - b[1].length;
var dedup = (arr, sorted = false) => {
  if (!arr || !arr.length) return [];
  if (!sorted) arr.sort(typeof arr == "string" ? alphabetically : (a, b) => a - b);
  const out2 = [];
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === prev) {
      out2.push([i, arr[i]]);
    }
    prev = arr[i];
  }
  return out2;
};
var unique = (arr, sorted = false) => {
  if (!arr || !arr.length) return [];
  if (!sorted) {
    arr.sort(typeof arr[0] == "string" ? alphabetically : (a, b) => a - b);
  }
  let prev, out2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) out2.push(arr[i]);
    prev = arr[i];
  }
  return out2;
};
var unique1 = (arr, sorted = false) => {
  if (!arr || !arr.length) return [];
  if (!sorted) {
    arr.sort(typeof arr[1] == "string" ? alphabetically1 : (a, b) => a[1] - b[1]);
  }
  const out2 = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1] !== arr[i - 1][1]) {
      out2.push(arr[i]);
    }
  }
  return out2;
};
var unique0 = (arr, sorted = false) => {
  if (!arr || !arr.length) return [];
  if (!sorted) {
    arr.sort(typeof arr[0] == "string" ? alphabetically0 : (a, b) => a[0] - b[0]);
  }
  const out2 = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] !== arr[i - 1][0]) {
      out2.push(arr[i]);
    }
  }
  return out2;
};
var statStrIntobject = (o) => {
  const out2 = [];
  for (const key in o) {
    out2.push([o[key], key]);
  }
  out2.sort((a, b) => b[0] - a[0]);
  return out2;
};
var fromObj = (obj, cb) => {
  const arr = [];
  for (let key in obj) {
    if (!cb) {
      arr.push(key + "	" + obj[key]);
    } else {
      if (typeof cb == "function") {
        arr.push(cb(key, obj[key]));
      } else {
        arr.push([key, obj[key]]);
      }
    }
  }
  if (cb && typeof cb !== "function") {
    arr.sort((a, b) => b[1] - a[1]);
  }
  return arr;
};
var sortObj = (obj, func) => {
  const arr = [];
  for (let key in obj) {
    arr.push([key, obj[key]]);
  }
  if (func) arr.sort(func);
  else arr.sort((a, b) => {
    return +b[1] - a[1];
  });
  return arr;
};
var toObj = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 0;
    obj[arr[i]]++;
  }
  return obj;
};
var incObj = (obj, key) => {
  if (!obj[key]) obj[key] = 0;
  obj[key]++;
};
var groupArr = (arr) => {
  return sortObj(toObj(arr));
};
var fillGap = (sorted_int_array) => {
  let prev = sorted_int_array[0] || 0;
  for (let i = 1; i < sorted_int_array.length; i++) {
    if (isNaN(sorted_int_array[i])) sorted_int_array[i] = prev;
    prev = sorted_int_array[i];
  }
  return sorted_int_array;
};
var sortNumberArray = (arr) => {
  const value_id = arr.map((v, idx2) => [v, idx2]);
  value_id.sort((a, b) => a[0] - b[0]);
  const indexes = value_id.map(([v, idx2]) => idx2);
  const newarr = value_id.map(([v, idx2]) => v);
  return [newarr, indexes];
};
var gini = (sorted_arr) => {
  let sum1 = 0, sum2 = 0;
  for (let i = 0; i < sorted_arr.length; i++) {
    let value = sorted_arr[i];
    sum1 += (2 * (i + 1) - sorted_arr.length - 1) * value;
    sum2 += value;
  }
  const perfect = Math.pow(sorted_arr.length, 2) * (sum2 / sorted_arr.length);
  const g2 = sum1 / perfect;
  return g2;
};

// utils/array.ts
var union = (arr1, arr2, hasdup = false) => {
  if (!arr2 || !arr1) return arr1 || arr2;
  const extra = [];
  let a1 = hasdup ? unique(arr1) : arr1;
  let a2 = hasdup ? unique(arr2) : arr2;
  if (a1.length > a2.length) {
    const a = a2;
    a2 = a1;
    a1 = a;
  }
  for (let i = 0; i < a1.length; i++) {
    const at1 = bsearchNumber(a2, a1[i]);
    if (at1 == -1) extra.push(a1[i]);
  }
  return a2.concat(extra).sort();
};
var xorStrings = (arr1, arr2, index) => {
  const out2 = [];
  for (let i = 0; i < arr1.length; i++) {
    const item = typeof index == "number" ? arr1[i][index] : arr1[i];
    const at = bsearch(arr2, item);
    if (item !== arr2[at]) {
      out2.push(arr1[i]);
    }
  }
  return out2;
};
var intersect = (arr1, arr2) => {
  const out2 = [];
  let j2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    let v = arr1[i];
    while (j2 < arr2.length) {
      if (arr2[j2] >= v) break;
      j2++;
    }
    if (v == arr2[j2] && out2[out2.length - 1] !== v) out2.push(v);
    if (j2 == arr2.length) break;
  }
  return out2;
};
var intersects = (arr) => {
  if (!arr || !arr.length) return [];
  let out2 = arr.shift();
  while (arr.length) {
    out2 = intersect(out2, arr.shift());
  }
  return out2;
};
var arraydiff = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x)).concat(arr2.filter((x) => !arr1.includes(x)));
var removeSubstring = (arr) => {
  const markdelete = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j2 = 0; j2 < arr.length; j2++) {
      if (i == j2) continue;
      if (arr[i].indexOf(arr[j2]) > -1 && arr[j2].length < arr[i].length) {
        if (markdelete.indexOf(j2) == -1) markdelete.push(j2);
      }
    }
  }
  return arr.filter((it, idx2) => markdelete.indexOf(idx2) == -1);
};
var similarSet = (arr, basearr) => {
  const I = intersect(arr, basearr);
  const U = union(arr, basearr);
  return I.length / U.length;
};
var indexOfs = (arr, tofind) => {
  const out2 = [];
  for (let j2 = 0; j2 < arr.length; j2++) {
    if (~arr[j2].indexOf(tofind)) {
      out2.push(j2);
    }
  }
  return out2;
};
var groupNumArray = (arr, int) => {
  let items = [];
  const out2 = [items];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == int) {
      items = [];
      out2.push(items);
    } else {
      items.push(arr[i]);
    }
  }
  return out2;
};

// utils/unpackintarray.ts
var maxlen1 = 113;
var maxlen2 = 113 * 113;
var maxlen3 = 113 * 113 * 113;
var CodeStart = 14;
var BYTE_MAX = 113;
var BYTE1_MAX = 45;
var BYTE2_MAX = 44 * BYTE_MAX + BYTE1_MAX;
var BYTE2_START = 45;
var BYTE3_START = 89;
var BYTE4_START = 105;
var BYTE5_START = 112;
var BYTE3_MAX = 16 * BYTE_MAX * BYTE_MAX + BYTE2_MAX;
var BYTE4_MAX = 6 * BYTE_MAX * BYTE_MAX * BYTE_MAX + BYTE3_MAX;
var BYTE5_MAX = 2 * BYTE_MAX * BYTE_MAX * BYTE_MAX * BYTE_MAX + BYTE4_MAX;
var SEP2DITEM = 127;
var SEPARATOR2D = "\x7F";
var unpack3 = (str) => {
  const arr = [];
  let i1, i2, i3;
  const count = Math.floor(str.length / 3);
  for (let i = 0; i < count; i++) {
    i3 = str.charCodeAt(i * 3) - CodeStart;
    i2 = str.charCodeAt(i * 3 + 1) - CodeStart;
    i1 = str.charCodeAt(i * 3 + 2) - CodeStart;
    arr.push(maxlen1 * maxlen1 * i3 + maxlen1 * i2 + i1 - 1);
  }
  return arr;
};
var unpack2 = (str) => {
  const arr = [];
  let i1, i2;
  const count = Math.floor(str.length / 2);
  for (let i = 0; i < count; i++) {
    i2 = str.charCodeAt(i * 2) - CodeStart;
    i1 = str.charCodeAt(i * 2 + 1) - CodeStart;
    arr.push(maxlen1 * i2 + i1 - 1);
  }
  return arr;
};
var unpack1 = (str) => {
  const arr = [];
  let i1;
  const count = Math.floor(str.length);
  for (let i = 0; i < count; i++) {
    i1 = str.charCodeAt(i * 3) - CodeStart;
    arr.push(i1 - 1);
  }
  return arr;
};
var unpackInt = (s, delta = false) => {
  let arr = [];
  if (!s) return [];
  let o, i = 0, c2 = 0, prev = 0;
  while (i < s.length) {
    o = s.charCodeAt(i) - CodeStart;
    if (o < BYTE2_START) {
    } else if (o < BYTE3_START) {
      const i1 = s.charCodeAt(++i) - CodeStart;
      o -= BYTE2_START;
      o = o * BYTE_MAX + i1 + BYTE1_MAX;
    } else if (o < BYTE4_START) {
      const i2 = s.charCodeAt(++i) - CodeStart;
      const i1 = s.charCodeAt(++i) - CodeStart;
      o -= BYTE3_START;
      o = o * BYTE_MAX * BYTE_MAX + i2 * BYTE_MAX + i1 + BYTE2_MAX;
    } else if (o < BYTE5_START) {
      const i3 = s.charCodeAt(++i) - CodeStart;
      const i2 = s.charCodeAt(++i) - CodeStart;
      const i1 = s.charCodeAt(++i) - CodeStart;
      o -= BYTE4_START;
      o = o * BYTE_MAX * BYTE_MAX * BYTE_MAX + i3 * BYTE_MAX * BYTE_MAX + i2 * BYTE_MAX + i1 + BYTE3_MAX;
    } else if (o < SEP2DITEM) {
      const i4 = s.charCodeAt(++i) - CodeStart;
      const i3 = s.charCodeAt(++i) - CodeStart;
      const i2 = s.charCodeAt(++i) - CodeStart;
      const i1 = s.charCodeAt(++i) - CodeStart;
      o -= BYTE5_START;
      o = o * BYTE_MAX * BYTE_MAX * BYTE_MAX * BYTE_MAX + i4 * BYTE_MAX * BYTE_MAX * BYTE_MAX + i3 * BYTE_MAX * BYTE_MAX + i2 * BYTE_MAX + i1 + BYTE3_MAX;
    } else {
      throw new Error("exit max integer 0x7f," + o);
    }
    arr[c2] = o + (delta ? prev : 0) - 1;
    prev = arr[c2];
    c2++;
    i++;
  }
  return arr;
};
var unpackIntDelta = (str) => {
  return unpackInt(str, true);
};
var unpackIntDelta2d = (str) => {
  if (!str) return [];
  return unpackInt2d(str, true);
};
var unpackInt2d = (str, delta = false) => {
  if (!str) return [];
  const arr = str.split(SEPARATOR2D);
  if (arr.length == 1) return [unpackInt(arr[0])];
  return arr.map((it) => unpackInt(it, delta));
};
var unpack3_2d = (str) => {
  if (!str) return [];
  const arr = str.split(SEPARATOR2D);
  if (arr.length == 1) return [unpack3(arr[0])];
  return arr.map((it) => unpack3(it));
};
var unpackBoolean = (str, index = false) => {
  const barr = unpackInt(str);
  const out2 = [];
  let idx2 = 0;
  for (let i = 0; i < barr.length; i++) {
    for (j = 0; j < barr[i]; j++) {
      if (i % 2 == 0) {
        out2.push(index ? 0 : false);
      } else {
        out2.push(index ? ++idx2 : true);
      }
    }
  }
  return out2;
};

// utils/packintarray.ts
var pack1 = (arr) => {
  let s = new Uint8Array(arr.length);
  let idx2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= maxlen1) throw new Error("exit boundary " + arr[i]);
    let int = arr[i] + 1;
    if (isNaN(int)) int = 0;
    s[idx2++] = int + CodeStart;
  }
  return new TextDecoder().decode(s);
};
var pack2 = (arr) => {
  let s = Uint8Array(arr.length * 2);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= maxlen2) {
      throw new Error("exit boundary " + arr[i]);
    }
    let int = arr[i] + 1;
    if (isNaN(int)) int = 0;
    let i1, i2;
    i1 = int % maxlen1;
    int = Math.floor(int / maxlen1);
    i2 = int % maxlen1;
    s[idx++] = i2 + CodeStart;
    s[idx++] = i1 + CodeStart;
  }
  return new TextDecoder().decode(s);
};
var pack3 = (arr) => {
  let s = Uint8Array(arr.length * 3);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= maxlen3) throw "exit boundary " + arr[i];
    let int = arr[i] + 1;
    if (isNaN(int)) int = 0;
    let i1, i2, i3;
    i1 = int % maxlen1;
    int = Math.floor(int / maxlen1);
    i2 = int % maxlen1;
    i3 = Math.floor(int / maxlen1);
    s[idx++] = i3 + CodeStart;
    s[idx++] = i2 + CodeStart;
    s[idx++] = i1 + CodeStart;
  }
  return new TextDecoder().decode(s);
};
var packInt2d = (arr, delta = false) => {
  const o = [];
  for (let i = 0; i < arr.length; i++) {
    o.push(packInt(arr[i], delta));
  }
  return o.join(SEPARATOR2D);
};
var pack3_2d = (arr, esc = false) => {
  const o = [];
  for (let i = 0; i < arr.length; i++) {
    o.push(pack3(arr[i], esc));
  }
  return o.join(SEPARATOR2D);
};
var packInt = (arr, delta = false) => {
  if (arr.length == 0) return "";
  const sz = arr.length * 5;
  let s = new Uint8Array(sz), int = arr[0] + 1, prev = arr[0], idx2 = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (isNaN(int)) new Error("not an integer at" + i);
    if (int < 0) new Error("negative value at" + i + " value" + int);
    if (int < BYTE1_MAX) {
      s[idx2++] = int + CodeStart;
    } else if (int < BYTE2_MAX) {
      int -= BYTE1_MAX;
      let i1, i2;
      i1 = int % BYTE_MAX;
      i2 = Math.floor(int / BYTE_MAX);
      s[idx2++] = i2 + BYTE2_START + CodeStart;
      s[idx2++] = i1 + CodeStart;
    } else if (int < BYTE3_MAX) {
      int -= BYTE2_MAX;
      let i1, i2, i3;
      i1 = int % BYTE_MAX;
      int = Math.floor(int / BYTE_MAX);
      i2 = int % BYTE_MAX;
      i3 = Math.floor(int / BYTE_MAX);
      s[idx2++] = i3 + BYTE3_START + CodeStart;
      s[idx2++] = i2 + CodeStart;
      s[idx2++] = i1 + CodeStart;
    } else if (int < BYTE4_MAX) {
      int -= BYTE3_MAX;
      let i1, i2, i3, i4;
      i1 = int % BYTE_MAX;
      int = Math.floor(int / BYTE_MAX);
      i2 = int % BYTE_MAX;
      int = Math.floor(int / BYTE_MAX);
      i3 = int % BYTE_MAX;
      i4 = Math.floor(int / BYTE_MAX);
      s[idx2++] = i4 + BYTE4_START + CodeStart;
      s[idx2++] = i3 + CodeStart;
      s[idx2++] = i2 + CodeStart;
      s[idx2++] = i1 + CodeStart;
    } else if (int < BYTE5_MAX) {
      int -= BYTE4_MAX;
      let i1, i2, i3, i4, i5;
      i1 = int % BYTE_MAX;
      int = Math.floor(int / BYTE_MAX);
      i2 = int % BYTE_MAX;
      int = Math.floor(int / BYTE_MAX);
      i3 = int % BYTE_MAX;
      int = Math.floor(int / BYTE_MAX);
      i4 = int % BYTE_MAX;
      i5 = Math.floor(int / BYTE_MAX);
      s[idx2++] = i5 + BYTE5_START + CodeStart;
      s[idx2++] = i4 + CodeStart;
      s[idx2++] = i3 + CodeStart;
      s[idx2++] = i2 + CodeStart;
      s[idx2++] = i1 + CodeStart;
    } else {
      throw new Error("exist max int boundary " + BYTE5_MAX + " i" + i + ",val:" + arr[i] + " int" + int);
    }
    int = (delta ? arr[i] - prev : arr[i]) + 1;
    if (int < 0 && delta) {
      console.log("arr length", arr.length, "now", arr[i], "prev", prev);
      throw new Error("negative delta");
    }
    prev = arr[i] || 0;
  }
  return new TextDecoder().decode(s.subarray(0, idx2));
};
var packBoolean = (arr) => {
  const out2 = [];
  let prev = false, count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (prev != !!arr[i]) {
      out2.push(count);
      count = 1;
    } else {
      count++;
    }
    prev = !!arr[i];
  }
  out2.push(count);
  return packInt(out2);
};
var packIntDelta = (arr) => packInt(arr, true);
var packIntDelta2d = (arr2d) => packInt2d(arr2d, true);
var arrDelta = (arr) => {
  if (!arr) return [];
  if (arr.length === 1) return [arr[0]];
  const out2 = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const v = arr[i] - arr[i - 1];
    out2.push(v);
  }
  return out2;
};
var escapeStrWithQuote = (str) => str.replace(/"/g, '\\"');
var escapePackedStr = (str) => str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "$\\{");

// utils/packstr.ts
var CodeStart2 = 14;
var CodeEnd = 31;
var MaxShared = CodeEnd - CodeStart2;
var SEP = String.fromCharCode(CodeStart2);
var packStrings = (sl) => {
  if (sl.length < 2) return sl.join(SEP);
  let out2 = sl[0];
  let prevhw = sl[0] || "";
  for (let i = 1; i < sl.length; i++) {
    const hw = sl[i];
    let shared = 0;
    while (shared < MaxShared && shared < hw.length && shared < prevhw.length && hw[shared] === prevhw[shared]) {
      shared++;
    }
    prevhw = sl[i] || "";
    if (shared && (prevhw?.codePointAt(0) || 0) < 65536) {
      out2 += String.fromCharCode(CodeStart2 + shared) + prevhw.substr(shared);
    } else {
      out2 += SEP + sl[i];
    }
  }
  return out2;
};

// utils/unpackstr.ts
var CodeStart3 = 14;
var CodeEnd2 = 31;
var unpackStrings = (str) => {
  let p3 = 0, s = "", prevstr = "", shared = 0;
  const out2 = [];
  while (p3 < str.length) {
    const code = str.charCodeAt(p3);
    if (code >= CodeStart3 && code <= CodeEnd2) {
      if (shared || s) {
        prevstr = prevstr.substr(0, shared) + s;
        out2.push(prevstr);
      }
      shared = code - CodeStart3;
      s = "";
    } else {
      s += str[p3];
    }
    p3++;
  }
  if (s) out2.push(prevstr.substr(0, shared) + s);
  return out2;
};

// utils/stringarray.ts
var LEMMA_DELIMITER = "\x7F";
var SA_MATCH_ANY2 = 3;
var SA_MATCH_START2 = 0;
var SA_MATCH_MIDDLE2 = 1;
var SA_MATCH_END2 = 2;
var StringArray = class {
  buf = "";
  sep = "";
  charpos = [];
  middleCache = {};
  endCache = {};
  now;
  sequencial;
  delimiter;
  constructor(buf, opts = {}) {
    this.sequencial = opts.sequencial;
    this.delimiter = opts.delimiter || "";
    this.buf = buf;
    this.sep = opts.sep || "\n";
    this.now = 0;
    if (!this.sequencial) this.buildcharpos();
  }
  buildcharpos() {
    let prev = -1, p3 = 0;
    while (p3 < this.buf.length) {
      const at = this.buf.indexOf(this.sep, prev);
      if (at == -1) {
        this.charpos.push(this.buf.length);
        break;
      } else {
        this.charpos.push(at + 1);
        prev = at + 1;
      }
    }
  }
  len() {
    return this.charpos.length;
  }
  reset() {
    this.now = 0;
  }
  first() {
    this.reset();
    return this.next();
  }
  next() {
    if (this.now == -1) return;
    const at = this.buf.indexOf(this.sep, this.now);
    if (at == -1) {
      if (this.now >= 0) {
        const lastline = this.buf.slice(this.now);
        this.now = -1;
        return lastline;
      } else {
        this.now = -1;
        return;
      }
    }
    const s = this.buf.slice(this.now, at);
    this.now = at + 1;
    return s;
  }
  get(idx2) {
    if (idx2 == -1) return this.charpos.length.toString();
    if (this.sequencial || idx2 < 0) return "";
    const from = idx2 == 0 ? 0 : this.charpos[idx2 - 1];
    const to = this.charpos[idx2] - (idx2 == this.charpos.length - 1 ? 0 : 1);
    return this.buf.slice(from, to);
  }
  at(offset) {
    return bsearchNumber(this.charpos, offset);
  }
  //assuming sorted
  find(pat) {
    const getter = this.get.bind(this);
    if (this.delimiter) pat += this.delimiter;
    const at = bsearchGetter(getter, pat);
    const found = getter(at);
    return found.endsWith(pat) ? at : -1;
  }
  indexOf(pat) {
    let at;
    at = this.buf.indexOf(pat);
    while (at > -1) {
      if (at == 0 && this.buf.charAt(pat.length) == this.sep) return 0;
      if (this.buf.length == pat.length + at && this.buf.charAt(at - 1) == this.sep) return this.len() - 1;
      if (this.buf.charAt(at - 1) == this.sep && this.buf.charAt(at + pat.length) == this.sep) {
        return bsearchNumber(this.charpos, at) + 1;
      } else {
        at = this.buf.indexOf(pat, at + pat.length);
      }
    }
    return -1;
  }
  enumMiddle(infix, max = 999) {
    if (this.middleCache.hasOwnProperty(infix)) {
      return this.middleCache[infix];
    }
    let idx2 = this.buf.indexOf(infix);
    const out2 = Array();
    while (idx2 > -1) {
      const at = this.at(idx2);
      const lp = at ? this.charpos[at - 1] : 0;
      const lp2 = this.charpos[at] - 1 - infix.length;
      if (idx2 > lp && idx2 < lp2) {
        out2.push(at);
        if (out2.length > max) break;
      }
      idx2 = this.buf.indexOf(infix, this.charpos[at] + this.sep.length);
    }
    this.middleCache[infix] = out2;
    return out2;
  }
  enumStart(prefix, max = 999) {
    const getter = this.get.bind(this);
    let at = bsearchGetter(getter, prefix);
    if (at == -1) return [];
    const out2 = Array();
    const len = this.len();
    while (at < len) {
      const found = this.get(at);
      if (found.startsWith(prefix)) {
        out2.push(at);
        if (out2.length > max) break;
      } else break;
      at++;
    }
    return out2;
  }
  enumEnd(suffix, max = 999) {
    if (this.endCache.hasOwnProperty(suffix)) {
      console.log("cache");
      return this.endCache[suffix];
    }
    if (suffix[suffix.length - 1] !== this.sep) suffix = suffix + this.sep;
    let idx2 = this.buf.indexOf(suffix);
    const out2 = Array();
    while (idx2 > -1 && this.buf.charAt(idx2 - 1) !== this.sep) {
      const at = this.at(idx2);
      out2.push(at);
      if (out2.length > max) break;
      idx2 = this.buf.indexOf(suffix, idx2 + this.sep.length);
    }
    this.endCache[suffix] = out2;
    return out2;
  }
  enumAny(infix, max = 999) {
    if (this.middleCache.hasOwnProperty(infix)) {
      return this.middleCache[infix];
    }
    let idx2 = this.buf.indexOf(infix);
    const out2 = Array();
    while (idx2 > -1) {
      const at = this.at(idx2);
      const lp = at ? this.charpos[at - 1] : 0;
      const lp2 = this.charpos[at] - 1 - infix.length;
      if (idx2 >= lp && idx2 <= lp2) {
        out2.push(at);
        if (out2.length > max) break;
      }
      idx2 = this.buf.indexOf(infix, this.charpos[at] + this.sep.length);
    }
    this.middleCache[infix] = out2;
    return out2;
  }
  enumMode(s, mode = 0, max) {
    if (mode == SA_MATCH_ANY2) return this.enumAny(s, max);
    else if (mode == SA_MATCH_START2) return this.enumStart(s, max);
    else if (mode == SA_MATCH_MIDDLE2) return this.enumMiddle(s, max);
    else if (mode == SA_MATCH_END2) return this.enumEnd(s, max);
    return [];
  }
  matchLongest(text) {
    const getter = this.get.bind(this);
    const at = bsearchGetter(getter, text) - 1;
    const out2 = [];
    let upper = at - 1;
    if (text.startsWith(this.get(at))) out2.push([this.get(at), at]);
    let lower = at + 1;
    while (upper > 0) {
      const found = this.get(upper);
      if (text.startsWith(found)) out2.push([found, upper]);
      else if (text.codePointAt(0) < 256 || text[0] !== found[0]) break;
      upper--;
    }
    while (lower < this.len()) {
      const found = this.get(lower);
      if (text.startsWith(found)) out2.push([found, lower]);
      else if (text.codePointAt(0) < 256 || text[0] !== found[0]) break;
      lower++;
    }
    out2.sort((a, b) => b[0].length - a[0].length);
    return out2;
  }
  /* if delimiter is missing, value is the text after key, ie , a fixed with key */
  getValue(key) {
    const at = this.find(key);
    return ~at ? this.get(at).slice(key.length + this.delimiter.length) : "";
  }
  findMatches = (rawtext) => {
    let i = 0;
    const out2 = [];
    while (i < rawtext.length) {
      const tf = rawtext.slice(i);
      const m4 = this.matchLongest(tf);
      if (m4.length) {
        i += m4.length;
        out2.push([i, m4[0][0], m4[0][1]]);
      } else {
        i++;
      }
    }
    return out2;
  };
};

// utils/errata.ts
var patchBuf = (buf, errata, fn = "") => {
  if (!errata || !errata.length) return buf;
  let outbuf = buf;
  for (let i = 0; i < errata.length; i++) {
    const [from, to] = errata[i];
    let n = errata[i][3] || 0;
    let occur = errata[i][2] || 1;
    const unlimited = occur == -1;
    let newoutbuf = outbuf;
    if (typeof to === "function") {
      if (typeof from === "string") {
        while (occur > 0) {
          newoutbuf = newoutbuf.replace(from, (m4, m1, m22) => {
            occur--;
            return to(m4, m1, m22, m3);
          });
          occur--;
        }
      } else {
        newoutbuf = newoutbuf.replace(from, (m4, m1, m22, m32) => {
          occur--;
          return to(m4, m1, m22, m32);
        });
      }
    } else {
      if (typeof from === "string") {
        while (occur > 0) {
          let torepl = to.replace(/\$\$/g, n);
          newoutbuf = newoutbuf.replace(from, torepl);
          n++;
          occur--;
        }
      } else {
        newoutbuf = newoutbuf.replace(from, (m4, m1, m22) => {
          let torepl = to.replace(/\$1/g, m1).replace(/\$2/g, m22).replace(/\$\$/g, n);
          n++;
          occur--;
          return torepl;
        });
      }
    }
    if (newoutbuf === outbuf && !unlimited) {
      console.log(fn, "cannot replace", errata[i]);
    } else {
      if (typeof errata[i][2] !== "undefined") errata[i][2] = occur;
    }
    outbuf = newoutbuf;
    if (occur !== 0 && !unlimited) {
      console.log(fn, "errata is not cleared!", occur, "left", errata[i]);
    }
  }
  return outbuf;
};
var RemainingErrata = (Erratas) => {
  let count = 0;
  for (let key in Erratas) {
    let arr = Erratas[key];
    if (!Array.isArray(arr)) arr = [arr];
    arr.forEach(([from, to, remain]) => {
      if (remain) {
        count++;
        console.log(key, "remain", remain, "from", from);
      }
    });
  }
  return count;
};
var insertBuf = (buf, inserts, fn = "") => {
  if (!inserts || !inserts.length) return buf;
  let outbuf = "", prev = 0;
  for (let i = 0; i < inserts.length; i++) {
    let [tofind, insert, offset] = inserts[i];
    let insertbefore = false;
    if (~tofind.indexOf(">", 1) || ~tofind.indexOf("<", 1)) {
      let at2 = tofind.indexOf(">", 1);
      if (at2 == -1) {
        at2 = tofind.indexOf("<", 1);
        insertbefore = true;
      }
      offset = tofind.slice(at2 + 1);
      tofind = tofind.slice(0, at2);
    }
    let at = buf.indexOf(tofind, prev);
    if (at == -1) {
      console.log("cannot find", tofind, "#" + i, fn);
      outbuf += buf.slice(prev);
      return outbuf;
    }
    at += tofind.length;
    if (typeof offset == "number" && offset) {
      at += offset;
    } else if (typeof offset == "string") {
      const at2 = buf.indexOf(offset, at);
      if (at2 == -1) {
        console.log("cannot find offset", tofind, "offset", offset, "#" + i, fn);
        outbuf += buf.slice(prev);
        return outbuf;
      } else {
        at = at2;
      }
      if (!insertbefore) {
        at += offset.length;
      }
    }
    outbuf += buf.slice(prev, at);
    outbuf += insert;
    prev = at;
  }
  outbuf += buf.slice(prev);
  return outbuf;
};

// utils/misc.ts
var escapeTemplateString = (str) => str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "$\\{");
function pagejsonpfn(nchunk, folder = "") {
  const jsfn = nchunk.toString().padStart(3, "0") + ".js";
  return folder ? folder + "/" + jsfn : jsfn;
}
var lineBreaksOffset = (str) => {
  let i = 0;
  const out2 = Array();
  while (i < str.length) {
    const at = str.indexOf("\n", i);
    if (at == -1) break;
    out2.push(at);
    i = at + 1;
  }
  return out2;
};
var JSONParse = (str) => {
  const at1 = str.indexOf("{");
  const at2 = str.lastIndexOf("}");
  if (at1 > -1 && at2 > at1) {
    str = str.slice(at1, at2 + 1);
  }
  str = str.replace(/['"]?([a-zA-Z\d]+)['"]? *\:/g, '"$1":');
  return JSON.parse(str);
};
var humanBytes = (n) => {
  if (n < 1024) {
    return [n, "B"];
  }
  if (n < 1024 * 1024) {
    return [parseFloat((n / 1024).toFixed(2)), "KB"];
  } else {
    return [parseFloat((n / (1024 * 1024)).toFixed(2)), "MB"];
  }
};
function debounce(f, ms) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(f.bind(this, ...args), ms);
  };
}

// utils/css.ts
var cssSkeleton = (typedefs, ptkname) => {
  const out2 = [];
  for (let n in typedefs) {
    out2.push("." + ptkname + " ." + n + " \n{ \n}");
  }
  return out2.join("\n");
};

// utils/loadscript.ts
var parseJsonp = (str) => {
  const start = str.indexOf("{");
  const end = str.indexOf("},`") + 1;
  let payload = str.substring(end + 2, str.length - 1);
  if (payload[payload.length - 1] == "`") payload = payload.slice(0, payload.length - 1);
  if (payload.indexOf("\\\\") > -1) payload = payload.replace(/\\\\/g, "\\");
  if (payload.indexOf("\\`") > -1) payload = payload.replace(/\\`/g, "`");
  if (payload.indexOf("$\\{") > -1) payload = payload.replace(/\$\\\{/g, "${");
  return [JSON.parse(str.substring(start, end)), payload];
};
var unloadScript = (src) => {
  if (src.slice(0, 2) == "./") src = src.slice(2);
  const css = src.endsWith(".css");
  const children = document.head.children;
  for (let i = 0; i < children.length; i++) {
    const ele = children[i];
    if (css && ele.tagName == "LINK" && ele.href.endsWith("/" + src) || ele.tagName == "SCRIPT" && ele.src.endsWith("/" + src)) {
      document.head.removeChild(ele);
    }
  }
};
var loadScript = async (src, cb) => {
  if (cb && cb()) {
    return true;
  }
  if (src.slice(0, 2) == "./") src = src.slice(2);
  const css = src.endsWith(".css");
  const children = document.head.children;
  for (let i = 0; i < children.length; i++) {
    const ele = children[i];
    if (css && ele.tagName == "LINK" && ele.href.endsWith("/" + src)) {
      if (i < children.length - 1) {
        document.head.removeChild(ele);
        document.head.appendChild(ele);
      }
      return true;
    } else if (ele.tagName == "SCRIPT" && ele.src.endsWith("/" + src)) return true;
  }
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement(css ? "link" : "script");
    script.type = css ? "text/css" : "text/javascript";
    if (css) {
      script.rel = "stylesheet";
      script.href = src;
    } else {
      script.src = src;
    }
    script.onerror = reject;
    script.async = true;
    script.onload = resolve;
    document.head.appendChild(script);
  });
  return promise;
};

// utils/bopomofo.ts
var consonants = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s".split(",");
var vowels = "a,o,e,e,ai,ei,ao,ou,an,en,ang,eng,er,i,u,v".split(",");
var toPinyin = (bopomofo) => {
  let tone = "", out2 = "", vowel = false;
  const tonecp = bopomofo.charCodeAt(bopomofo.length - 1);
  if (tonecp == 714) tone = 2;
  else if (tonecp == 715) tone = 4;
  else if (tonecp == 711) tone = 3;
  for (let i = 0; i < bopomofo.length; i++) {
    const cp = bopomofo.charCodeAt(i);
    if (cp >= 12549 && cp <= 12569) {
      out2 += consonants[cp - 12549];
    } else if (cp >= 12570 && cp <= 12585) {
      out2 += vowels[cp - 12570];
      vowel = true;
    }
  }
  if (out2.length == 1 && out2 == "u") out2 = "wu";
  out2 = out2.replace(/^i/, "yi").replace(/^v/, "yu").replace(/^u/, "w").replace("qv", "qu").replace("xv", "xu").replace("jv", "ju").replace("ieng", "ing").replace("xiu", "xu").replace("niu", "nu").replace("ien", "in").replace("iou", "iu").replace("iuan", "uan").replace("ueng", "ong").replace("uen", "un").replace("uei", "ui").replace("qo", "qio").replace("xo", "xio").replace("jo", "jio").replace("yia", "ya").replace("yie", "ye").replace("yio", "yo").replace("yiu", "you") + (vowel ? "" : "i") + tone;
  return out2;
};
var replaceZhuyin = (str) => {
  return str.replace(/([\u3105-\u3129]+[ˇˋˊ]?)/g, (m4, m1) => toPinyin(m1));
};

// utils/base26.ts
var toBase26 = (num) => {
  const str = num.toString(26).toLowerCase();
  let out2 = "";
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 48 && code < 64) {
      out2 += String.fromCharCode(code - 48 + 97);
    } else {
      out2 += String.fromCharCode(code + 10);
    }
  }
  return out2;
};
var fromBase26 = (str) => {
  let out2 = "";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i) - 97;
    if (code < 10) {
      out2 += String.fromCharCode(code + 48);
    } else {
      out2 += String.fromCharCode(code - 10 + 65);
    }
  }
  return parseInt(out2, 26);
};

// utils/textinsert.ts
var getInserts = (milestones, msid) => {
  if (!milestones) return null;
  const out2 = [];
  let n = 0;
  let id = msid;
  let m4 = milestones[id];
  while (m4) {
    out2.push(m4);
    id = msid + "+" + ++n;
    m4 = milestones[id];
  }
  if (!out2.length) return null;
  else return out2;
};
var insertAtOccur = (text, ins) => {
  const [toinsert, tofind] = ins;
  if (typeof tofind === "number") {
    if (text.length > tofind) {
      return text.substr(0, tofind) + toinsert + text.substr(tofind);
    } else {
      ins[1] = tofind - text.length;
      return text;
    }
  } else {
    let at = text.indexOf(tofind);
    while (at > -1 && ins[2] > 0) {
      at = text.indexOf(tofind, at + tofind.length);
      ins[2]--;
    }
    return at === -1 ? text : text.substr(0, at) + toinsert + text.substr(at);
  }
};
var insertText = (text, inserts) => {
  if (!inserts || !inserts.length) return text;
  let t = text;
  while (inserts.length) {
    const ins = inserts.shift();
    const newtext = insertAtOccur(t, ins);
    if (newtext === text) {
      inserts.unshift(ins);
      break;
    } else {
      t = newtext;
    }
  }
  return t;
};

// utils/cnumber.ts
var headerWithNumber = [
  /第([一二三四五六七八九十百千○〇零]+)[回章卷品節]*/,
  /卷([一二三四五六七八九十百千○〇零]+)/,
  /卷第([一二三四五六七八九十百千○〇零]+)/
];
var isChineseNumber = (str, pat) => {
  pat = pat || /[一二三四五六七八九十百千○〇]+/;
  return str.replace(pat, "") == "";
};
var fromChineseNumber = (str) => {
  return parseInt(str.trim().replace(/百([二三四五六七八九])十/, "$1\u5341").replace(/百十$/, "10").replace(/百十/, "1").replace(/百$/, "00").replace(/百/, "0").replace(/一/g, "1").replace(/二/g, "2").replace(/三/g, "3").replace(/四/g, "4").replace(/五/g, "5").replace(/六/g, "6").replace(/七/g, "7").replace(/八/g, "8").replace(/九/g, "9").replace(/^十$/, "10").replace(/^十/, "1").replace(/十$/, "0").replace(/十/, "").replace(/[○〇O零]/g, "0"));
};
var chineseDigit = (n) => {
  return;
};
var toChineseNumber = (n) => {
  let out2 = "";
  while (n) {
    const digit = ["\u3007", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"][n % 10];
    out2 = digit + out2;
    n = Math.floor(n / 10);
  }
  return out2;
};
var isChineseChapter = (str) => {
  for (let i = 0; i < headerWithNumber.length; i++) {
    const pat = headerWithNumber[i];
    const m4 = str.match(pat);
    if (m4) {
      return fromChineseNumber(m4[1]);
    }
  }
  return null;
  ;
};
var extractChineseNumber = (str, begining = false) => {
  let cn = -1;
  for (let i = 0; i < headerWithNumber.length; i++) {
    const pat = headerWithNumber[i];
    const m4 = str.match(pat);
    if (m4) cn = fromChineseNumber(m4[1]);
  }
  if (!cn) {
    const m4 = begining ? str.match(/^[　 ]?([一二三四五六七八九十○百零]+)/) : str.match(/([一二三四五六七八九十○百零]+)/);
    if (m4) cn = fromChineseNumber(m4[1]);
  }
  return cn;
};
var StyledNumber1 = {
  "\u2160": 10,
  "\u2170": 10,
  "\u249C": 26,
  "\u24B6": 26,
  "\u24D0": 26,
  "\u24EB": 10,
  "\u3251": 15,
  "\u3358": 25,
  "\u3359": 24,
  "\u3220": 10,
  "\u3280": 10,
  "\u32C0": 12,
  "\u33E0": 31,
  "\u2460": 50,
  "\u2474": 20,
  "\u2488": 20,
  "\u24F5": 10,
  "\u2776": 10,
  "\u2780": 10,
  "\u278A": 10,
  "\u2081": 9
};
var styledNumber = (n, style = "\u2460", offset = 1) => {
  let max = StyledNumber1[style];
  if (typeof n !== "number") n = parseInt(n) || 0;
  if (!max) {
    return n.toString();
  } else {
    if (n - offset >= max) {
      return n.toString();
    }
    if (style == "\u2460") {
      if (n > 35) {
        style = "\u32B1";
        n -= 35;
      } else if (n > 20) {
        style = "\u3251";
        n -= 20;
      }
      if (n == 0) return "\u24EA";
    }
    let code = style.charCodeAt(0) + n - offset;
    return String.fromCharCode(code);
  }
};
var ForeignNumbers = { "\u1040": true, "\u0966": true, "\u0E50": true, "\u0ED0": true, "\u17E0": true, "\u0F20": true };
var foreignNumber = (n, style) => {
  const s = n.toString();
  const zero = ForeignNumbers[style];
  if (!zero) return s;
  const base = style.charCodeAt(0);
  let out2 = "";
  for (let i = 0; i < s.length; i++) {
    out2 += String.fromCharCode(s.charCodeAt(i) - 48 + base);
  }
  return out2;
};
var qianziwen = "\u5929\u5730\u7384\u9EC3\u5B87\u5B99\u6D2A\u8352\u65E5\u6708\u76C8\u6603\u8FB0\u5BBF\u5217\u5F35\u5BD2\u4F86\u6691\u5F80\u79CB\u6536\u51AC\u85CF\u958F\u9918\u6210\u6B72\u5F8B\u5442\u8ABF\u967D\u96F2\u9A30\u81F4\u96E8\u9732\u7D50\u70BA\u971C\u91D1\u751F\u9E97\u6C34\u7389\u51FA\u5D11\u5D17\u528D\u865F\u5DE8\u95D5\u73E0\u7A31\u591C\u5149\u679C\u73CD\u674E\u5948\u83DC\u91CD\u82A5\u8591\u6D77\u54B8\u6CB3\u6DE1\u9C57\u6F5B\u7FBD\u7FD4\u9F8D\u5E2B\u706B\u5E1D\u9CE5\u5B98\u4EBA\u7687\u59CB\u5236\u6587\u5B57\u4E43\u670D\u8863\u88F3\u63A8\u4F4D\u8B93\u570B\u6709\u865E\u9676\u5510\u5F14\u6C11\u4F10\u7F6A\u5468\u767C\u6BB7\u6E6F\u5750\u671D\u554F\u9053\u5782\u62F1\u5E73\u7AE0\u611B\u80B2\u9ECE\u9996\u81E3\u4F0F\u620E\u7F8C\u9050\u9087\u58F9\u9AD4\u7387\u8CD3\u6B78\u738B\u9CF4\u9CF3\u5728\u6A39\u767D\u99D2\u98DF\u5834\u5316\u88AB\u8349\u6728\u8CF4\u53CA\u842C\u65B9\u84CB\u6B64\u8EAB\u9AEE\u56DB\u5927\u4E94\u5E38\u606D\u60DF\u97A0\u990A\u8C48\u6562\u6BC0\u50B7\u5973\u6155\u8C9E\u7D5C\u7537\u6548\u624D\u826F\u77E5\u904E\u5FC5\u6539\u5F97\u80FD\u83AB\u5FD8\u7F54\u8AC7\u5F7C\u77ED\u9761\u6043\u5DF1\u9577\u4FE1\u4F7F\u53EF\u8986\u5668\u6B32\u96E3\u91CF\u58A8\u60B2\u7D72\u67D3\u8A69\u8B9A\u7F94\u7F8A\u666F\u884C\u7DAD\u8CE2\u524B\u5FF5\u4F5C\u8056\u5FB7\u5EFA\u540D\u7ACB\u5F62\u7AEF\u8868\u6B63\u7A7A\u8C37\u50B3\u8072\u865B\u5802\u7FD2\u807D\u798D\u56E0\u60E1\u7A4D\u798F\u7DE3\u5584\u6176\u5C3A\u74A7\u975E\u5BF6\u5BF8\u9670\u662F\u7AF6\u8CC7\u7236\u4E8B\u541B\u66F0\u56B4\u8207\u656C\u5B5D\u7576\u7AED\u529B\u5FE0\u5247\u76E1\u547D\u81E8\u6DF1\u5C65\u8584\u5919\u8208\u6EAB\u6E05\u4F3C\u862D\u65AF\u99A8\u5982\u677E\u4E4B\u76DB\u5DDD\u6D41\u4E0D\u606F\u6DF5\u6F84\u53D6\u6620\u5BB9\u6B62\u82E5\u601D\u8A00\u8FAD\u5B89\u5B9A\u7BE4\u521D\u8AA0\u7F8E\u614E\u7D42\u5B9C\u4EE4\u69AE\u696D\u6240\u57FA\u85C9\u751A\u7121\u7ADF\u5B78\u512A\u767B\u4ED5\u651D\u8077\u5F9E\u653F\u5B58\u4EE5\u7518\u68E0\u53BB\u800C\u76CA\u8A60\u6A02\u6B8A\u8CB4\u8CE4\u79AE\u5225\u5C0A\u5351\u4E0A\u548C\u4E0B\u7766\u592B\u5531\u5A66\u96A8\u5916\u53D7\u5085\u8A13\u5165\u5949\u6BCD\u5100\u8AF8\u59D1\u4F2F\u53D4\u7336\u5B50\u6BD4\u5152\u5B54\u61F7\u5144\u5F1F\u540C\u6C23\u9023\u679D\u4EA4\u53CB\u6295\u5206\u5207\u78E8\u7BB4\u898F\u4EC1\u6148\u96B1\u60FB\u9020\u6B21\u5F17\u96E2\u7BC0\u7FA9\u5EC9\u9000\u985B\u6C9B\u532A\u8667\u6027\u975C\u60C5\u9038\u5FC3\u52D5\u795E\u75B2\u5B88\u771F\u5FD7\u6EFF\u9010\u7269\u610F\u79FB\u5805\u6301\u96C5\u64CD\u597D\u7235\u81EA\u7E3B\u90FD\u9091\u83EF\u590F\u6771\u897F\u4E8C\u4EAC\u80CC\u9099\u9762\u6D1B\u6D6E\u6E2D\u64DA\u6D87\u5BAE\u6BBF\u76E4\u9B31\u6A13\u89C0\u98DB\u9A5A\u5716\u5BEB\u79BD\u7378\u756B\u5F69\u4ED9\u9748\u4E19\u820D\u508D\u555F\u7532\u5E33\u5C0D\u6979\u8086\u7B75\u8A2D\u5E2D\u9F13\u745F\u5439\u7B19\u5347\u968E\u7D0D\u965B\u5F01\u8F49\u7591\u661F\u53F3\u901A\u5EE3\u5167\u5DE6\u9054\u627F\u660E\u65E2\u96C6\u58B3\u5178\u4EA6\u805A\u7FA4\u82F1\u675C\u7A3F\u937E\u96B8\u6F06\u66F8\u58C1\u7D93\u5E9C\u7F85\u5C07\u76F8\u8DEF\u4FE0\u69D0\u537F\u6236\u5C01\u516B\u7E23\u5BB6\u7D66\u5343\u5175\u9AD8\u51A0\u966A\u8F26\u9A45\u8F42\u632F\u7E93\u4E16\u797F\u4F88\u5BCC\u8ECA\u99D5\u80A5\u8F15\u7B56\u529F\u8302\u5BE6\u52D2\u7891\u523B\u9298\u78FB\u6EAA\u4F0A\u5C39\u4F50\u6642\u963F\u8861\u5944\u5B85\u66F2\u961C\u5FAE\u65E6\u5B70\u71DF\u6853\u516C\u8F14\u5408\u6FDF\u5F31\u6276\u50BE\u7DBA\u56DE\u6F22\u60E0\u8AAA\u611F\u6B66\u4E01\u4FCA\u4E42\u5BC6\u52FF\u591A\u58EB\u5BD4\u5BE7\u6649\u695A\u66F4\u9738\u8D99\u9B4F\u56F0\u6A6B\u5047\u9014\u6EC5\u8662\u8E10\u571F\u6703\u76DF\u4F55\u9075\u7D04\u6CD5\u97D3\u5F0A\u7169\u5211\u8D77\u7FE6\u9817\u7267\u7528\u8ECD\u6700\u7CBE\u5BA3\u5A01\u6C99\u6F20\u99B3\u8B7D\u4E39\u9752\u4E5D\u5DDE\u79B9\u8DE1\u767E\u90E1\u79E6\u5E76\u5CB3\u5B97\u6CF0\u5CB1\u79AA\u4E3B\u4E91\u4EAD\u96C1\u9580\u7D2B\u585E\u96DE\u7530\u8D64\u57CE\u6606\u6C60\u78A3\u77F3\u9245\u91CE\u6D1E\u5EAD\u66E0\u9060\u7DBF\u9088\u5CA9\u5CAB\u6773\u51A5\u6CBB\u672C\u65BC\u8FB2\u52D9\u8332\u7A3C\u7A61\u4FF6\u8F09\u5357\u755D\u6211\u85DD\u9ECD\u7A37\u7A05\u719F\u8CA2\u65B0\u52F8\u8CDE\u9EDC\u965F\u5B5F\u8EFB\u6566\u7D20\u53F2\u9B5A\u79C9\u76F4\u5EB6\u5E7E\u4E2D\u5EB8\u52DE\u8B19\u8B39\u6555\u8046\u97F3\u5BDF\u7406\u9452\u8C8C\u8FA8\u8272\u8CBD\u53A5\u5609\u7337\u52C9\u5176\u7957\u690D\u7701\u8EAC\u8B4F\u8AA1\u5BF5\u589E\u6297\u6975\u6B86\u8FB1\u8FD1\u6065\u6797\u768B\u5E78\u5373\u5169\u758F\u898B\u6A5F\u89E3\u7D44\u8AB0\u903C\u7D22\u5C45\u9592\u8655\u6C89\u9ED8\u5BC2\u5BE5\u6C42\u53E4\u5C0B\u8AD6\u6563\u616E\u900D\u9059\u6B23\u594F\u7D2F\u9063\u617C\u8B1D\u6B61\u62DB\u6E20\u8377\u7684\u6B77\u5712\u83BD\u62BD\u689D\u6787\u6777\u665A\u7FE0\u68A7\u6850\u65E9\u51CB\u9673\u6839\u59D4\u7FF3\u843D\u8449\u98C4\u98BB\u904A\u9D7E\u7368\u904B\u51CC\u6469\u7D73\u9704\u803D\u8B80\u7FEB\u5E02\u5BD3\u76EE\u56CA\u7BB1\u6613\u8F36\u6538\u754F\u5C6C\u8033\u57A3\u7246\u5177\u81B3\u9910\u98EF\u9069\u53E3\u5145\u8178\u98FD\u98EB\u70F9\u5BB0\u98E2\u53AD\u7CDF\u7CE0\u89AA\u621A\u6545\u820A\u8001\u5C11\u7570\u7CE7\u59BE\u5FA1\u7E3E\u7D21\u4F8D\u5DFE\u5E37\u623F\u7D08\u6247\u5713\u6F54\u9280\u71ED\u7152\u714C\u665D\u7720\u5915\u5BD0\u85CD\u7B4D\u8C61\u5E8A\u5F26\u6B4C\u9152\u5BB4\u63A5\u676F\u8209\u89F4\u77EF\u624B\u9813\u8DB3\u6085\u8C6B\u4E14\u5EB7\u5AE1\u5F8C\u55E3\u7E8C\u796D\u7940\u70DD\u5617\u7A3D\u9859\u518D\u62DC\u609A\u61FC\u6050\u60F6\u724B\u7252\u7C21\u8981\u9867\u7B54\u5BE9\u8A73\u9AB8\u57A2\u60F3\u6D74\u57F7\u71B1\u9858\u6DBC\u9A62\u9A3E\u72A2\u7279\u99ED\u8E8D\u8D85\u9A64\u8A85\u65AC\u8CCA\u76DC\u6355\u7372\u53DB\u4EA1\u5E03\u5C04\u907C\u4E38\u5D47\u7434\u962E\u562F\u606C\u7B46\u502B\u7D19\u921E\u5DE7\u4EFB\u91E3\u91CB\u7D1B\u5229\u4FD7\u4E26\u7686\u4F73\u5999\u6BDB\u65BD\u6DD1\u59FF\u5DE5\u9870\u598D\u7B11\u5E74\u77E2\u6BCF\u50AC\u66E6\u6689\u6717\u66DC\u7487\u74A3\u61F8\u65A1\u6666\u9B44\u74B0\u7167\u6307\u85AA\u4FEE\u795C\u6C38\u7D8F\u5409\u52AD\u77E9\u6B65\u5F15\u9818\u4FEF\u4EF0\u5ECA\u5EDF\u675F\u5E36\u77DC\u838A\u5F98\u5F8A\u77BB\u773A\u5B64\u964B\u5BE1\u805E\u611A\u8499\u7B49\u8A9A\u8B02\u8A9E\u52A9\u8005\u7109\u54C9\u4E4E\u4E5F";
var normalizeQianziwen = (s) => {
  return s.replace("\u5DD6", "\u5CA9").replace("\u51CA", "\u6E05").replace("\u5DBD", "\u5CB3").replace("\u514B", "\u524B").replace("\u540A", "\u5F14").replace("\u67F0", "\u5948").replace("\u9E79", "\u54B8").replace("\u8D0A", "\u8B9A").replace("\u548F", "\u8A60");
};
var parseQianziwen = (s = "", juancount = 10) => {
  s = normalizeQianziwen(s);
  const at = qianziwen.indexOf(s.charAt(0));
  if (~at) {
    const follow = s.length > 1 ? parseInt(s.slice(1), 10) - 1 : 0;
    if (isNaN(follow)) {
      return -1;
    }
    return at * juancount + follow;
  }
  return -1;
};

// utils/html.ts
var escapeHTML = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var Entities = {
  lt: "<",
  gt: ">",
  "amp": "&",
  "eacute": "\xE9",
  "agrave": "\xE0",
  "hellip": "\u2026",
  "igrave": "\xEC",
  "ugrave": "\xF9",
  "ntilde": "\xF1",
  "Ntilde": "\xD1",
  "nbsp": " ",
  "quot": '"',
  "ucirc": "\xFB",
  "acirc": "\xE2",
  "icirc": "\xEE"
};
var entity2unicode = (s) => {
  s = s.replace(/&#x([\dABCDEF]+);/g, (m4, m1) => {
    return String.fromCodePoint(parseInt(m1, 16));
  }).replace(/&#(\d+);/g, (m4, m1) => {
    return String.fromCodePoint(parseInt(m1, 10));
  }).replace(/&([^;]+);/g, (m4, m1) => {
    const rep = Entities[m1];
    if (!rep) {
      console.log("cannot parse", "&" + m1 + ";");
      throw "wrong entity";
    }
    return rep;
  });
  return s;
};

// utils/helper.ts
var sleep = (time) => new Promise((r) => {
  setTimeout(() => r(), time);
});
var updateUrl = (address) => {
  window.location.hash = "#" + address;
};
var addressFromUrl = () => {
  let hash = window.location.hash;
  if (hash[0] == "#") hash = hash.slice(1);
  let address = decodeURI(hash);
  if (~address.indexOf("%")) address = decodeURIComponent(address);
  if (!~address.indexOf("bk") && !~address.indexOf("ak")) address = "";
  return address;
};
var loadUrl = async (url) => {
  let text = "";
  const response = await fetch(url);
  if (response.status >= 200 && response.status < 300) {
    text = await response.text();
  }
  return text;
};
var urlPrefix = () => {
  return location.href.slice(0, location.href.length - location.search.length).replace(/index.html$/, "");
};

// utils/constants.ts
var URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

// fts/indexer.ts
var Indexer = class {
  wordscount;
  words;
  postingcount;
  bmp;
  tokenlist;
  postings;
  tokenlinepos;
  bmppostings;
  bmptokencount;
  tokencount;
  finalized;
  constructor() {
    this.wordscount = 0;
    this.words = new Object();
    this.postingcount = [];
    this.bmp = new Int32Array(65536);
    this.tokenlist = [];
    this.postings = [];
    this.tokenlinepos = [];
    this.bmppostings = new Array(65536);
    this.bmptokencount = new Int32Array(65536);
    this.tokencount = new Int32Array(0);
    this.finalized = false;
    this.wordcount = 0;
  }
  addLine(line) {
    if (!line || line.startsWith("iVBO") || ~line.indexOf(".png	") || ~line.indexOf(".jpg	")) {
      this.tokenlist.push(0);
      return;
    }
    const tokens = tokenize(line);
    for (let j2 = 0; j2 < tokens.length; j2++) {
      const { text, type } = tokens[j2];
      const cp = text.codePointAt(0) || 0;
      if (type == 49 /* CJK_BMP */) {
        this.bmp[cp]++;
        this.tokenlist.push(cp);
        this.wordcount++;
      } else if (type >= 16 /* SEARCHABLE */) {
        let at = this.words[text];
        if (typeof at == "undefined") {
          at = this.wordscount;
          this.postingcount.push(0);
          this.words[text] = at;
          this.wordscount++;
        }
        this.postingcount[at]++;
        this.tokenlist.push(at + 65536);
        this.wordcount++;
      } else {
        this.tokenlist.push(-1);
      }
    }
    this.tokenlist.push(0);
  }
  add(lines) {
    if (this.finalized) {
      throw "already finalized";
    }
    lines.reset();
    let line = lines.next();
    while (line || line === "") {
      this.addLine(line);
      line = lines.next();
    }
  }
  finalize() {
    this.finalized = true;
    this.postings = new Array(this.wordscount);
    this.tokencount = new Int32Array(this.wordscount);
    for (let i = 0; i < this.wordscount; i++) {
      this.postings[i] = new Int32Array(this.postingcount[i]);
    }
    for (let i = 0; i < this.bmp.length; i++) {
      if (this.bmp[i]) {
        this.bmppostings[i] = new Int32Array(this.bmp[i]);
      }
    }
    let lasti = 0;
    for (let i = 0; i < this.tokenlist.length; i++) {
      let code = this.tokenlist[i];
      if (code == -1) continue;
      if (code == 0) {
        this.tokenlinepos.push(i);
      } else if (code < 65536) {
        if (this.bmppostings[code]) {
          this.bmppostings[code][this.bmptokencount[code]] = i;
          this.bmptokencount[code]++;
        }
      } else if (!isNaN(code)) {
        const at = code - 65536;
        this.postings[at][this.tokencount[at]] = i;
        this.tokencount[at]++;
      }
    }
    this.tokenlinepos.push(this.tokenlist.length);
  }
  serialize() {
    if (!this.finalized) {
      throw "not finalized";
    }
    const tokens = [], postings = [];
    const tokentable = fromObj(this.words, (word, nposting) => [word, nposting]);
    tokentable.sort(alphabetically0);
    const words = tokentable.map(([word]) => word);
    tokens.push(words.join(LEMMA_DELIMITER));
    const bmpWithPosting = [];
    for (let i = 0; i < this.bmppostings.length; i++) {
      if (this.bmppostings[i]) bmpWithPosting.push(i);
    }
    tokens.push(packIntDelta(bmpWithPosting));
    tokens.push(packIntDelta(this.tokenlinepos));
    for (let i = 0; i < this.bmppostings.length; i++) {
      if (!this.bmppostings[i]) continue;
      const s = packIntDelta(this.bmppostings[i]);
      postings.push(s);
    }
    for (let i = 0; i < tokentable.length; i++) {
      const nposting = tokentable[i][1];
      if (!this.postings[nposting]) continue;
      const s = packIntDelta(this.postings[nposting]);
      postings.push(s);
    }
    return [tokens, postings, this.wordcount];
  }
};

// ../lossless-simplified-chinese/sc-tc-map.js
var sc2tc = `\u3454\u346F
\u3447\u3473
\u3439\u3476
\u523E\u34E8
\u360E\u361A
\u36AF\u3704
\u36E3\u370F
\u37C6\u380F
\u3918\u396E
\u3A2B\u3A5C
\u39D0\u3A73
\u64DC\u3A75
\u3EEA\u3EFD
\u4025\u407B
\u9FCE\u40EE
\u4336\u42B7
\u433A\u42D9
\u433B\u42DA
\u433F\u42F9
\u433E\u42FB
\u43AC\u43B1
\u464C\u4661
\u4727\u4700
\u478D\u477C
\u4982\u4947
\u9FCF\u4951
\u497E\u4971
\u49B6\u499B
\u49B7\u499F
\u4BC5\u4BC0
\u9C83\u4C3E
\u4CA3\u4C77
\u4C9D\u4C7D
\u9CDA\u4C81
\u9CE4\u4C98
\u9E6E\u4D09
\u4E22\u4E1F
\u5E76<\u4F75\u4E26
\u5E72<\u5E79>\u4E7E
\u4E71\u4E82
\u4E9A\u4E9E
\u4F2B\u4F47
\u6765\u4F86
\u4ED1\u4F96
\u4FA3\u4FB6
\u4FE3\u4FC1
\u7CFB<\u7E6B\u4FC2
\u4F23\u4FD4
\u4FA0\u4FE0
\u4F21\u4FE5
\u4F25\u5000
\u4FE9\u5006
\u4FEB\u5008
\u4ED3\u5009
\u4E2A\u500B
\u4EEC\u5011
\u4F26\u502B
\u3448\u5032
\u4F1F\u5049
\u343D\u5051
\u4FA7\u5074
\u4FA6\u5075
\u4F2A\u50DE\u507D
\u3437\u508C
\u6770<\u5091
\u4F27\u5096
\u4F1E\u5098
\u5907\u5099
\u4F63<\u50AD
\u506C\u50AF
\u4F20\u50B3
\u4F1B\u50B4
\u503A\u50B5
\u4F24\u50B7
\u503E\u50BE
\u507B\u50C2
\u4EC5\u50C5
\u4F65\u50C9
\u4FA8\u50D1
\u4EC6<\u50D5
\u4FA5\u50E5
\u507E\u50E8
\u4EF7<\u50F9
\u4EEA\u5100
\u347A\u5101
\u4FAC\u5102
\u4EBF\u5104
\u4FA9\u5108
\u4FED\u5109
\u50A7\u5110
\u4FE6\u5114
\u4FAA\u5115
\u5C3D\u76E1\u5118
\u507F\u511F
\u4F18<\u512A
\u50A8\u5132
\u4FEA\u5137
\u3469\u5138
\u50A9\u513A
\u50A5\u513B
\u4FE8\u513C
\u5151\u514C
\u513F<\u5152
\u5156\u5157
\u5185\u5167
\u4E24\u5169
\u518C\u518A
\u5E42\u51AA
\u51C0\u51C8
\u51BB\u51CD
\u51DB\u51DC
\u51EF\u51F1
\u522B\u5225
\u5220\u522A
\u522D\u5244
\u5219\u5247
\u514B<\u524B
\u5239\u524E
\u522C\u5257
\u521A\u525B
\u5265\u525D
\u5250\u526E
\u5240\u5274
\u521B\u5275
\u5212<\u5283
\u5267\u5287
\u5218\u5289
\u523D\u528A
\u523F\u528C
\u5251\u528D
\u34E5\u528F
\u5242\u5291
\u3509\u529A
\u52B2\u52C1
\u52A8\u52D5
\u52A1\u52D9
\u52CB\u52DB
\u80DC<\u52DD
\u52B3\u52DE
\u52BF\u52E2
\u52DA\u52E9
\u52A2\u52F1
\u52B1\u52F5
\u529D\u52F8
\u5300\u52FB
\u5326\u532D
\u6C47\u5F59\u532F
\u532E\u5331
\u533A\u5340
\u534F\u5354
\u5374\u537B
\u538D\u5399
\u538C\u53AD
\u5389\u53B2
\u53A3\u53B4
\u53C2\u53C3
\u53C1\u53C4
\u4E1B\u53E2
\u54A4>\u5412
\u5434\u5433
\u5450\u5436
\u5415\u5442
\u5459\u54BC
\u5458\u54E1
\u5457\u5504
\u5423\u551A
\u95EE\u554F
\u54D1\u555E
\u542F\u555F
\u5521\u5562
\u359E\u558E
\u5524\u559A
\u4E27\u55AA
\u4E54\u55AC
\u5355\u55AE
\u54DF\u55B2
\u545B\u55C6
\u556C\u55C7
\u551D\u55CA
\u5417\u55CE
\u545C\u55DA
\u5522\u55E9
\u54D4\u55F6
\u53F9\u5606
\u55BD\u560D
\u556F\u5613
\u5455\u5614
\u5567\u5616
\u5C1D\u5617
\u551B\u561C
\u54D7\u5629
\u5520\u562E
\u5578\u562F
\u53FD\u5630
\u54D3\u5635
\u5452\u5638
\u5574\u563D
\u5618\u5653
\u358A\u565A
\u549D\u565D
\u54D2\u5660
\u54DD\u5665
\u54D5\u5666
\u55F3\u566F
\u54D9\u5672
\u55B7\u5674
\u5428<\u5678
\u5F53\u7576\u5679
\u549B\u5680
\u5413\u5687
\u54DC\u568C
\u565C\u5695
\u556E\u5699
\u5456\u56A6
\u5499\u56A8
\u4EB8\u56B2
\u55BE\u56B3
\u4E25\u56B4
\u5624\u56B6
\u556D\u56C0
\u55EB\u56C1
\u56A3\u56C2
\u5181\u56C5
\u5453\u56C8
\u5570\u56C9
\u5631\u56D1
\u56F1\u56EA
\u56F5\u5707
\u56FD\u570B
\u56F4\u570D
\u56ED\u5712
\u5706\u5713
\u56FE\u5716
\u56E2\u5718
\u57EF\u57B5
\u57AD\u57E1
\u91C7<\u63A1\u57F0
\u6267\u57F7
\u575A\u5805
\u57A9\u580A
\u57B4\u5816
\u57DA\u581D
\u5C27\u582F
\u62A5\u5831
\u573A\u5834
\u5757\u584A
\u8314\u584B
\u57B2\u584F
\u57D8\u5852
\u6D82<\u5857
\u575E\u5862
\u57D9\u5864
\u5C18\u5875
\u5811\u5879
\u57AB\u588A
\u5760\u589C
\u5815\u58AE
\u575F\u58B3
\u57AF\u58B6
\u57A6\u58BE
\u575B\u7F48\u58C7
\u57B1\u58CB
\u538B\u58D3
\u5792\u58D8
\u5739\u58D9
\u5786\u58DA
\u574F<\u58DE
\u5784\u58DF
\u5785\u58E0
\u575C\u58E2
\u575D\u58E9
\u5846\u58EA
\u58EE\u58EF
\u58F6\u58FA
\u58F8\u58FC
\u5BFF\u58FD
\u591F\u5920
\u68A6\u5922
\u5939\u593E
\u5942\u5950
\u5965\u5967
\u5941\u5969
\u593A\u596A
\u5968\u596C
\u594B\u596E
\u59F9\u597C
\u5986\u599D
\u59D7\u59CD
\u5978<\u59E6
\u5A31\u5A1B
\u5A04\u5A41
\u5987\u5A66
\u5A05\u5A6D
\u5A32\u5AA7
\u59AB\u5AAF
\u36C0\u5AB0
\u5AAA\u5ABC
\u5988\u5ABD
\u59AA\u5AD7
\u59A9\u5AF5
\u5A34\u5AFB
\u5A73\u5AFF
\u5AAD\u5B03
\u5A06\u5B08
\u5A75\u5B0B
\u5A07\u5B0C
\u5AF1\u5B19
\u5AD2\u5B21
\u5B37\u5B24
\u5AD4\u5B2A
\u5A74\u5B30
\u5A76\u5B38
\u36E4\u5B4B
\u5A08\u5B4C
\u5B59\u5B6B
\u5B66\u5B78
\u5B6A\u5B7F
\u5BAB\u5BAE
\u5BDD\u5BE2
\u5B9E\u5BE6
\u5B81<\u5BE7
\u5BA1\u5BE9
\u5199\u5BEB
\u5BBD\u5BEC
\u3766\u5BEF
\u5BA0\u5BF5
\u5B9D\u5BF6
\u5C06\u5C07
\u4E13\u5C08
\u5BFB\u5C0B
\u5BF9\u5C0D
\u5BFC\u5C0E
\u5C34\u5C37
\u5C4A\u5C46
\u5C38<\u5C4D
\u5C43\u5C53
\u5C49\u5C5C
\u5C61\u5C62
\u5C42\u5C64
\u5C66\u5C68
\u5C5E\u5C6C
\u5188\u5CA1
\u5C98\u5CF4
\u5C9B\u5CF6
\u5CE1\u5CFD
\u5D03\u5D0D
\u5C97\u5D17
\u5CE5\u5D22
\u5CBD\u5D2C
\u5C9A\u5D50
\u37E5\u5D7E
\u5D5D\u5D81
\u5D2D\u5D84
\u5C96\u5D87
\u5D5A\u5D94
\u5D02\u5D97
\u5CE4\u5DA0
\u5CE3\u5DA2
\u5CC4\u5DA7
\u5D04\u5DAE
\u5C99\u5DB4
\u5D58\u5DB8
\u5CAD<\u5DBA
\u5C7F\u5DBC
\u5CBF\u5DCB
\u5CE6\u5DD2
\u5DC5\u5DD4
\u5DEF\u5DF0
\u5E05\u5E25
\u5E08\u5E2B
\u5E10\u5E33
\u5E26\u5E36
\u5E27\u5E40
\u5E0F\u5E43
\u384E\u5E53
\u5E3C\u5E57
\u5E3B\u5E58
\u5E1C\u5E5F
\u5E01\u5E63
\u5E2E\u5E6B
\u5E31\u5E6C
\u4E48<\u9EBC>\u5E7A>\u9EBD
\u51E0<\u5E7E
\u5E93\u5EAB
\u5395\u5EC1
\u53A2\u5EC2
\u53A9\u5EC4
\u53A6\u5EC8
\u53A8\u5EDA
\u53AE\u5EDD
\u5E99\u5EDF
\u5382<\u5EE0
\u5E91\u5EE1
\u5E9F\u5EE2
\u5E7F\u5EE3
\u5EEA\u5EE9
\u5E90\u5EEC
\u5385\u5EF3
\u5F11\u5F12
\u5F2A\u5F33
\u5F20\u5F35
\u5F3A\u5F37
\u5F39\u5F48
\u5F25\u5F4C
\u5F2F\u5F4E
\u5F5D<\u5F5E
\u5F5F\u5F60
\u5F66\u5F65
\u5F68\u5F72
\u540E<>\u5F8C
\u5F84\u5F91
\u4ECE\u5F9E
\u5F95\u5FA0
\u590D<\u8907\u5FA9>\u8986
\u5F81<>\u5FB5
\u5F7B\u5FB9
\u6052\u6046
\u803B\u6065
\u60A6\u6085
\u60AE\u609E
\u6005\u60B5
\u95F7\u60B6
\u6076\u60E1
\u607C\u60F1
\u607D\u60F2
\u607B\u60FB
\u7231\u611B
\u60EC\u611C
\u60AB\u6128
\u6006\u6134
\u607A\u6137
\u5FFE\u613E
\u6817<\u6144
\u6001\u614B
\u6120\u614D
\u60E8\u6158
\u60ED\u615A
\u6078\u615F
\u60EF\u6163
\u6004\u616A
\u6002\u616B
\u8651\u616E
\u60AD\u6173
\u5E86\u6176
\u396A\u617A
\u5FE7\u6182
\u60EB\u618A
\u392D\u618D
\u601C<\u6190
\u51ED\u6191
\u6126\u6192
\u616D\u6196
\u60EE\u619A
\u6124\u61A4
\u60AF\u61AB
\u6003\u61AE
\u5BAA\u61B2
\u5FC6\u61B6
\u6073\u61C7
\u5E94\u61C9
\u603F\u61CC
\u61D4\u61CD
\u603C\u61DF
\u61D1\u61E3
\u393D\u61E4
\u3916\u61E7
\u6079\u61E8
\u60E9\u61F2
\u61D2\u61F6
\u6000<\u61F7
\u60AC\u61F8
\u5FCF<\u61FA
\u60E7\u61FC
\u6151\u61FE
\u604B\u6200
\u6206\u6207
\u620B\u6214
\u6217\u6227
\u622C\u6229
\u6218\u6230
\u622F\u6231
\u620F\u6232
\u6237\u6236
\u629B\u62CB
\u635D\u6329
\u631F\u633E
\u820D<\u6368
\u626A\u636B
\u626B\u6383
\u62A1\u6384
\u39CF\u6386
\u631C\u6397
\u6323\u6399
\u6302<\u639B
\u62E3\u63C0
\u626C\u63DA
\u6362\u63DB
\u6325\u63EE
\u635F\u640D
\u6447\u6416
\u6363\u6417
\u63FE\u6435
\u62A2\u6436
\u63B4\u6451
\u63BC\u645C
\u6402\u645F
\u631A\u646F
\u62A0\u6473
\u629F\u6476
\u63BA\u647B
\u635E\u6488
\u6326\u648F
\u6491\u6490
\u6320\u6493
\u39D1\u649D
\u6322\u649F
\u63B8\u64A3
\u62E8\u64A5
\u629A\u64AB
\u6251<\u64B2
\u63FF\u64B3
\u631E\u64BB
\u631D\u64BE
\u6361\u64BF
\u62E5\u64C1
\u63B3\u64C4
\u62E9\u64C7
\u51FB\u64CA
\u6321\u64CB
\u39DF\u64D3
\u62C5\u64D4
\u636E<\u64DA
\u6324\u64E0
\u39DB\u64E5
\u62DF\u64EC
\u6448\u64EF
\u62E7\u64F0
\u6401\u64F1
\u63B7\u64F2
\u6269\u64F4
\u64B7\u64F7
\u6446\u64FA
\u64DE\u64FB
\u64B8\u64FC
\u39F0\u64FD
\u6270<\u64FE
\u6445\u6504
\u64B5\u6506
\u62E2\u650F
\u62E6\u6514
\u6484\u6516
\u6400\u6519
\u64BA\u651B
\u643A\u651C
\u6444\u651D
\u6512\u6522
\u631B\u6523
\u644A\u6524
\u6405\u652A
\u63FD\u652C
\u8D25\u6557
\u53D9\u6558
\u654C\u6575
\u6570\u6578
\u655B\u6582
\u6BD9\u6583
\u6569\u6586
\u6593\u6595
\u65A9\u65AC
\u65AD\u65B7
\u4E8E<>\u65BC
\u65F6\u6642
\u664B\u6649
\u663C\u665D
\u6655\u6688
\u6656\u6689
\u65F8\u6698
\u7545\u66A2
\u6682\u66AB
\u6654\u66C4
\u5386\u6B77\u66C6
\u6619\u66C7
\u6653\u66C9
\u5411<\u66CF
\u66A7\u66D6
\u65F7\u66E0
\u663D\u66E8
\u6652<\u66EC
\u4E66\u66F8
\u4F1A\u6703
\u80E7\u6727
\u4E1C\u6771
\u6805\u67F5
\u6746<\u687F
\u6800\u6894
\u67A7\u6898
\u6761\u689D
\u67AD\u689F
\u68C1\u68B2
\u5F03\u68C4
\u67A8\u68D6
\u67A3\u68D7
\u680B\u68DF
\u3B4E\u68E1
\u6808\u68E7
\u6816<\u68F2
\u68BE\u68F6
\u6860\u690F
\u3B4F\u6932
\u6768\u694A
\u67AB\u6953
\u6862\u6968
\u4E1A\u696D
\u6781<\u6975
\u6769\u69AA
\u8363\u69AE
\u6985\u69B2
\u6864\u69BF
\u6784<\u69CB
\u67AA\u69CD
\u68BF\u69E4
\u6920\u69E7
\u6901\u69E8
\u692E\u69EE
\u6868\u69F3
\u6922\u69F6
\u691D\u69FC
\u6869\u6A01
\u4E50\u6A02
\u679E\u6A05
\u697C\u6A13
\u6807\u6A19
\u67A2\u6A1E
\u3B64\u6A22
\u6837\u6A23
\u3B74\u6A2B
\u686A\u6A33
\u6734<\u6A38
\u6811\u6A39
\u6866\u6A3A
\u692B\u6A3F
\u6861\u6A48
\u6865\u6A4B
\u673A<\u6A5F
\u692D\u6A62
\u6A2A\u6A6B
\u6AA9\u6A81
\u67FD\u6A89
\u6863\u6A94
\u6867\u6A9C
\u69DA\u6A9F
\u68C0\u6AA2
\u6A2F\u6AA3
\u68BC\u6AAE
\u53F0<\u98B1\u81FA\u6AAF
\u69DF\u6AB3
\u67E0\u6AB8
\u69DB\u6ABB
\u67DC<\u6AC3
\u6A79\u6AD3
\u6988\u6ADA
\u6809\u6ADB
\u691F\u6ADD
\u6A7C\u6ADE
\u680E\u6ADF
\u6A71\u6AE5
\u69E0\u6AE7
\u680C\u6AE8
\u67A5\u6AEA
\u6A65\u6AEB
\u6987\u6AEC
\u8616\u6AF1
\u680A\u6AF3
\u6989\u6AF8
\u6A31\u6AFB
\u680F\u6B04
\u6743\u6B0A
\u6924\u6B0F
\u683E\u6B12
\u6984\u6B16
\u68C2\u6B1E
\u94A6\u6B3D
\u6B27\u6B50
\u6B24\u6B5F
\u6B22\u6B61
\u5C81\u6B72
\u5F52\u6B78
\u6B81\u6B7F
\u6B8B\u6B98
\u6B92\u6B9E
\u6B87\u6BA4
\u3C6E\u6BA8
\u6B9A\u6BAB
\u6B93\u6BAE
\u6BA1\u6BAF
\u3C69\u6BB0
\u6B7C\u6BB2
\u6740\u6BBA
\u58F3\u6BBC
\u6BC1\u6BC0
\u6BB4\u6BC6
\u6BF5\u6BFF
\u7266\u6C02
\u6BE1\u6C08
\u6C07\u6C0C
\u6C14<\u6C23
\u6C22\u6C2B
\u6C29\u6C2C
\u6C32\u6C33
\u51B3\u6C7A
\u6CA1\u6C92
\u51B2\u885D\u6C96
\u51B5\u6CC1
\u6C79\u6D36
\u6D43\u6D79
\u6CFE\u6D87
\u51C9\u6DBC
\u6CEA\u6DDA
\u6E0C\u6DE5
\u6CA6\u6DEA
\u6E0A\u6DF5
\u6D9E\u6DF6
\u6D45\u6DFA
\u6DA3\u6E19
\u51CF\u6E1B
\u6CA8\u6E22
\u6DA1\u6E26
\u6D4B\u6E2C
\u6D51\u6E3E
\u51D1\u6E4A
\u6D48\u6E5E
\u6C64\u6E6F
\u6CA9\u6E88
\u51C6<\u6E96
\u6C9F\u6E9D
\u6E29\u6EAB
\u6D49\u6EAE
\u6DA2\u6EB3
\u6CA7\u6EC4
\u706D\u6EC5
\u6DA4\u6ECC
\u8365\u6ECE
\u6CAA\u6EEC
\u6EDE\u6EEF
\u6E17\u6EF2
\u6D52\u6EF8
\u6D50\u6EFB
\u6EDA\u6EFE
\u6EE1\u6EFF
\u6E14\u6F01
\u6E87\u6F0A
\u6CA4\u6F1A
\u6C49\u6F22
\u6D9F\u6F23
\u6E0D\u6F2C
\u6DA8\u6F32
\u6E86\u6F35
\u6E10\u6F38
\u6D46\u6F3F
\u988D\u6F41
\u6CFC\u6F51
\u6D01<\u6F54
\u3D0B\u6F5A
\u6F5C\u6F5B
\u6DA6\u6F64
\u6D54\u6F6F
\u6E83\u6F70
\u6ED7\u6F77
\u6DA0\u6F7F
\u6DA9\u6F80
\u6D47\u6F86
\u6D9D\u6F87
\u6DA7\u6F97
\u6E11\u6FA0
\u6CFD\u6FA4
\u6EEA\u6FA6
\u6CF6\u6FA9
\u6D4D\u6FAE
\u6DC0<\u6FB1
\u3CE0\u6FBE
\u6D4A\u6FC1
\u6D53\u6FC3
\u3CE1\u6FC4
\u6E7F\u6FD5
\u6CDE<\u6FD8
\u6E81\u6FDA
\u6D55\u6FDC
\u6D4E\u6FDF
\u6D9B\u6FE4
\u3CD4\u6FE7
\u6EE5\u6FEB
\u6F4D\u6FF0
\u6EE8\u6FF1
\u6E85\u6FFA
\u6CFA\u6FFC
\u6EE4\u6FFE
\u6F9B\u7002
\u6EE2\u7005
\u6E0E\u7006
\u3CBF\u7007
\u6CFB\u7009
\u6C88<\u700B
\u6D4F\u700F
\u6FD2\u7015
\u6CF8\u7018
\u6CA5\u701D
\u6F47\u701F
\u6F46\u7020
\u6F74\u7026
\u6CF7\u7027
\u6FD1\u7028
\u3CFD\u7030
\u6F4B\u7032
\u6F9C\u703E
\u6CA3\u7043
\u6EE0\u7044
\u6D12<\u7051
\u6F13<\u7055
\u6EE9\u7058
\u704F\u705D
\u6F24\u7060
\u3CD5\u7061
\u6E7E\u7063
\u6EE6\u7064
\u6EDF\u7067
\u707E\u707D
\u4E3A\u70BA
\u4E4C\u70CF
\u70C3\u70F4
\u65E0\u7121
\u70BC\u7149
\u709C\u7152
\u70DF\u7159
\u8315\u7162
\u7115\u7165
\u70E6\u7169
\u7080\u716C
\u3DBD\u7171
\u7174\u7185
\u8367\u7192
\u709D\u7197
\u70ED\u71B1
\u988E\u71B2
\u70BD\u71BE
\u70E8\u71C1
\u706F\u71C8
\u70E7\u71D2
\u70EB\u71D9
\u7116\u71DC
\u8425\u71DF
\u707F\u71E6
\u70DB\u71ED
\u70E9\u71F4
\u3DB6\u71F6
\u70EC\u71FC
\u7118\u71FE
\u70C1\u720D
\u7089\u7210
\u70C2\u721B
\u4E89\u722D
\u7237\u723A
\u5C14\u723E
\u5899\u7246
\u724D\u7258
\u7275\u727D
\u8366\u7296
\u728A\u72A2
\u727A\u72A7
\u72B6\u72C0
\u72ED\u72F9
\u72C8\u72FD
\u72F0\u7319
\u72B9\u7336
\u72F2\u733B
\u72B8\u7341
\u72F1\u7344
\u72EE\u7345
\u5956\u734E
\u72EC\u7368
\u72EF\u736A
\u7303\u736B
\u72DD\u736E
\u72DE\u7370
\u3E8D\u7371
\u83B7\u7A6B\u7372
\u730E\u7375
\u72B7\u7377
\u517D\u7378
\u736D\u737A
\u732E\u737B
\u7315\u737C
\u7321\u7380
\u73B0\u73FE
\u73D0\u743A
\u73F2\u743F
\u73AE\u744B
\u739A\u7452
\u7410\u7463
\u7476\u7464
\u83B9\u7469
\u739B\u746A
\u73B1\u7472
\u740F\u7489
\u740E\u74A1
\u7391\u74A3
\u7477\u74A6
\u73F0\u74AB
\u3EC5\u74AF
\u73AF\u74B0
\u7399\u74B5
\u7478\u74B8
\u73BA\u74BD
\u743C\u74CA
\u73D1\u74CF
\u748E\u74D4
\u74D2\u74DA
\u74EF\u750C
\u4EA7\u7522
\u4EA9\u755D
\u6BD5\u7562
\u753B\u756B
\u5F02<\u7570
\u7574\u7587
\u53E0\u758A
\u75C9\u75D9
\u75B4\u75FE
\u75D6\u7602
\u75AF\u760B
\u75A1\u760D
\u75EA\u7613
\u7617\u761E
\u75AE\u7621
\u759F\u7627
\u7606\u762E
\u75AD\u7632
\u7618\u763A
\u7597\u7642
\u75E8\u7646
\u75EB\u7647
\u7605\u7649
\u75A0\u7658
\u762A\u765F
\u75D2<\u7662
\u7596\u7664
\u75C7<\u7665
\u75AC\u7667
\u765E\u7669
\u7663\u766C
\u763F\u766D
\u763E\u766E
\u75C8\u7670
\u762B\u7671
\u766B\u7672
\u53D1\u9AEE\u767C
\u7691\u769A
\u75B1\u76B0
\u76B2\u76B8
\u76B1\u76BA
\u76D7\u76DC
\u76CF\u76DE
\u76D1\u76E3
\u76D8\u76E4
\u5362\u76E7
\u8361\u8569\u76EA
\u7726\u7725
\u4F17\u773E
\u56F0<\u774F
\u7741\u775C
\u7750\u775E
\u770D\u7798
\u4056\u779C
\u7792\u779E
\u7786\u77B6
\u7751\u77BC
\u772C\u77D3
\u77A9\u77DA
\u77EB\u77EF
\u7841\u785C
\u7856\u7864
\u7817\u7868
\u781A\u786F
\u7855\u78A9
\u7800\u78AD
\u781C\u78B8
\u786E<\u78BA
\u7801\u78BC
\u40B5\u78BD
\u7859\u78D1
\u7816\u78DA
\u7875\u78E0
\u789C\u78E3
\u789B\u78E7
\u77F6\u78EF
\u7857\u78FD
\u40C5\u78FE
\u785A\u7904
\u7877\u9E7C\u7906
\u7840\u790E
\u788D\u7919
\u77FF\u7926
\u783A\u792A
\u783E\u792B
\u77FE\u792C
\u783B\u7931
\u7984\u797F
\u7978\u798D
\u796F\u798E
\u794E\u7995
\u7943\u79A1
\u5FA1<\u79A6
\u7985\u79AA
\u793C\u79AE
\u7962\u79B0
\u7977\u79B1
\u79C3\u79BF
\u7C7C\u79C8
\u7A0E\u7A05
\u79C6\u7A08
\u4149\u7A0F
\u7980\u7A1F
\u79CD<\u7A2E
\u79F0\u7A31
\u8C37<\u7A40
\u415F\u7A47
\u7A23\u7A4C
\u79EF\u7A4D
\u9896\u7A4E
\u79FE\u7A60
\u7A51\u7A61
\u79FD\u7A62
\u7A33\u7A69
\u7A06\u7A6D
\u7A9D\u7AA9
\u6D3C<\u7AAA
\u7A77\u7AAE
\u7A91\u7AAF
\u7A8E\u7AB5
\u7AAD\u7AB6
\u7AA5\u7ABA
\u7A9C\u7AC4
\u7A8D\u7AC5
\u7AA6\u7AC7
\u7A83\u7ACA
\u7ADE\u7AF6
\u7B14\u7B46
\u7B0B\u7B4D
\u7B15\u7B67
\u41F2\u7B74
\u7B3A\u7B8B
\u7B5D\u7B8F
\u8282\u7BC0
\u8303<\u7BC4
\u7B51<\u7BC9
\u7BA7\u7BCB
\u7B7C\u7BD4
\u7B03\u7BE4
\u7B5B\u7BE9
\u7B5A\u7BF3
\u7BA6\u7C00
\u7BD3\u7C0D
\u7BAA\u7C1E
\u7B80\u7C21
\u7BD1\u7C23
\u7BAB\u7C2B
\u7B5C\u7C39
\u7B7E\u7C3D
\u5E18<\u7C3E
\u7BEE\u7C43
\u7B79\u7C4C
\u4264\u7C54
\u7B93\u7C59
\u7BEF\u7C5B
\u7BA8\u7C5C
\u7C41\u7C5F
\u7B3C\u7C60
\u7B3E\u7C69
\u7C16\u7C6A
\u7BF1<\u7C6C
\u7BA9\u7C6E
\u7CA4\u7CB5
\u7CC1\u7CDD
\u7CAA\u7CDE
\u7CAE\u7CE7
\u7C9D\u7CF2
\u7C74\u7CF4
\u7C9C\u7CF6
\u7E9F\u7CF9
\u7EA0\u7CFE
\u7EAA\u7D00
\u7EA3\u7D02
\u7EA6\u7D04
\u7EA2\u7D05
\u7EA1\u7D06
\u7EA5\u7D07
\u7EA8\u7D08
\u7EAB\u7D09
\u7EB9\u7D0B
\u7EB3\u7D0D
\u7EBD\u7D10
\u7EBE\u7D13
\u7EAF\u7D14
\u7EB0\u7D15
\u7EBC\u7D16
\u7EB1\u7D17
\u7EAE\u7D18
\u7EB8\u7D19
\u7EA7\u7D1A
\u7EB7\u7D1B
\u7EAD\u7D1C
\u7EB4\u7D1D
\u7EBA\u7D21
\u4337\u7D2C
\u7EC6\u7D30
\u7EC2\u7D31
\u7EC1\u7D32
\u7EC5\u7D33
\u7EBB\u7D35
\u7ECD\u7D39
\u7EC0\u7D3A
\u7ECB\u7D3C
\u7ED0\u7D3F
\u7ECC\u7D40
\u7EC8\u7D42
\u7EC4\u7D44
\u4339\u7D45
\u7ECA\u7D46
\u7ED7\u7D4E
\u7ED3\u7D50
\u7EDD\u7D55
\u7EE6\u7E27\u7D5B
\u7ED4\u7D5D
\u7EDE\u7D5E
\u7EDC\u7D61
\u7EDA\u7D62
\u7ED9\u7D66
\u7ED2\u7D68
\u7ED6\u7D70
\u7EDF\u7D71
\u4E1D\u7D72
\u7EDB\u7D73
\u7EE2\u7D79
\u7ED1\u7D81
\u7EE1\u7D83
\u7EE0\u7D86
\u7EE8\u7D88
\u7EE4\u7D8C
\u7EE5\u7D8F
\u433C\u7D90
\u7ECF\u7D93
\u7EFC\u7D9C
\u7F0D\u7D9E
\u7EFF\u7DA0
\u7EF8\u7DA2
\u7EFB\u7DA3
\u7EF6\u7DAC
\u7EF4\u7DAD
\u7EF9\u7DAF
\u7EFE\u7DB0
\u7EB2\u7DB1
\u7F51<\u7DB2
\u7F00\u7DB4
\u433D\u7DB5
\u7EB6\u7DB8
\u7EFA\u7DB9
\u7EEE\u7DBA
\u7EFD\u7DBB
\u7EF0\u7DBD
\u7EEB\u7DBE
\u7EF5\u7DBF
\u7EF2\u7DC4
\u7F01\u7DC7
\u7D27\u7DCA
\u7EEF\u7DCB
\u7EEA\u7DD2
\u7EEC\u7DD3
\u7EF1\u979D\u7DD4
\u7F03\u7DD7
\u7F04\u7DD8
\u7F02\u7DD9
\u7EBF\u7DDA
\u7F09\u7DDD
\u7F0E\u7DDE
\u7F14\u7DE0
\u7F17\u7DE1
\u7F18\u7DE3
\u7F0C\u7DE6
\u7F16\u7DE8
\u7F13\u7DE9
\u7F05\u7DEC
\u7EAC\u7DEF
\u7F11\u7DF1
\u7F08\u7DF2
\u7EC3\u7DF4
\u7F0F\u7DF6
\u7F07\u7DF9
\u81F4<\u7DFB
\u8426\u7E08
\u7F19\u7E09
\u7F22\u7E0A
\u7F12\u7E0B
\u7EC9\u7E10
\u7F23\u7E11
\u7F0A\u7E15
\u7F1E\u7E17
\u7F1A\u7E1B
\u7F1C\u7E1D
\u7F1F\u7E1E
\u7F1B\u7E1F
\u53BF\u7E23
\u7F1D\u7E2B
\u7F21\u7E2D
\u7F29\u7E2E
\u7EB5\u7E31
\u7F27\u7E32
\u4338\u7E33
\u7F26\u7E35
\u7D77\u7E36
\u7F15\u7E37
\u7F25\u7E39
\u603B\u7E3D
\u7EE9\u7E3E
\u7EF7\u7E43
\u7F2B\u7E45
\u7F2A\u7E46
\u7F2F\u7E52
\u7EC7\u7E54
\u7F2E\u7E55
\u7F2D\u7E5A
\u7ED5\u7E5E
\u7EE3\u7E61
\u7F0B\u7E62
\u7EF3\u7E69
\u7ED8\u7E6A
\u8327<\u7E6D
\u7F30\u97C1\u7E6E
\u7F33\u7E6F
\u7F32\u7E70
\u7F34\u7E73
\u4341\u7E78
\u7ECE\u7E79
\u7EE7\u7E7C
\u7F24\u7E7D
\u7F31\u7E7E
\u4340\u7E7F
\u98A3\u7E87
\u7F2C\u7E88
\u7EA9\u7E8A
\u7EED\u7E8C
\u7D2F<\u7E8D
\u7F20\u7E8F
\u7F28\u7E93
\u7EA4\u7E96
\u7F35\u7E98
\u7F06\u7E9C
\u94B5\u7F3D
\u7F42\u7F4C
\u7F5A\u7F70
\u9A82\u7F75
\u7F62\u7F77
\u7F57\u7F85
\u7F74\u7F86
\u7F81\u7F88
\u8288\u7F8B
\u7F9F\u7FA5
\u4E49\u7FA9
\u4E60\u7FD2
\u7FDA\u7FEC
\u7FD8\u7FF9
\u7FD9\u7FFD
\u8027\u802C
\u8022\u802E
\u5723<\u8056
\u95FB\u805E
\u8054\u806F
\u806A\u8070
\u58F0\u8072
\u8038\u8073
\u8069\u8075
\u8042\u8076
\u804C\u8077
\u804D\u8079
\u542C<\u807D
\u804B\u807E
\u8083\u8085
\u80C1\u8105
\u8109\u8108
\u80EB\u811B
\u8131\u812B
\u80C0\u8139
\u80BE\u814E
\u80E8\u8156
\u8136\u8161
\u8111\u8166
\u80BF\u816B
\u811A\u8173
\u80A0\u8178
\u817D\u8183
\u8158\u8195
\u80A4\u819A
\u43DD\u819E
\u80F6\u81A0
\u817B\u81A9
\u80C6\u81BD
\u810D\u81BE
\u8113\u81BF
\u442A\u81C7
\u8138\u81C9
\u8110\u81CD
\u8191\u81CF
\u814A<\u81D8
\u80EA\u81DA
\u810F\u9AD2\u81DF
\u8114\u81E0
\u81DC\u81E2
\u4E34\u81E8
\u4E0E<\u8207
\u5174\u8208
\u4E3E\u8209
\u65E7\u820A
\u8231\u8259
\u8223\u8264
\u8230\u8266
\u823B\u826B
\u8270\u8271
\u8273\u8277
\u520D\u82BB
\u82CE\u82E7
\u5179\u8332
\u8346\u834A
\u5E84<\u838A
\u830E\u8396
\u835A\u83A2
\u82CB\u83A7
\u534E\u83EF
\u82CC\u8407
\u83B1\u840A
\u4E07<\u842C
\u835D\u8434
\u83B4\u8435
\u53F6\u8449
\u836D\u8452
\u7740>\u8457
\u836E\u8464
\u82C7\u8466
\u8364\u8477
\u83B3\u8494
\u8385\u849E
\u82CD\u84BC
\u836A\u84C0
\u76D6\u84CB
\u83B2\u84EE
\u82C1\u84EF
\u83BC\u84F4
\u835C\u84FD
\u848C\u851E
\u848B\u8523
\u8471\u8525
\u8311\u8526
\u836B\u852D
\u8368\u8541
\u8487\u8546
\u835E\u854E
\u836C\u8552
\u82B8<\u8553
\u83B8\u8555
\u835B\u8558
\u8489\u8562
\u829C\u856A
\u8427\u856D
\u84E3\u8577
\u8570\u8580
\u835F\u8588
\u84DF\u858A
\u8297\u858C
\u8537\u8594
\u8359\u8598
\u83B6\u859F
\u8350<\u85A6
\u8428\u85A9
\u44D5\u85B3
\u82E7<\u85B4
\u44D3\u85B5
\u8360\u85BA
\u84DD\u85CD
\u8369\u85CE
\u827A\u85DD
\u836F\u85E5
\u85AE\u85EA
\u82C8\u85F6
\u853C\u85F9
\u853A\u85FA
\u841A\u8600
\u8572\u8604
\u82A6\u8606
\u82CF\u8607
\u8574\u860A
\u82F9<\u860B
\u85D3\u861A
\u8539\u861E
\u830F\u8622
\u5170\u862D
\u84E0\u863A
\u841D\u863F
\u8502<\u8646
\u5904\u8655
\u865A\u865B
\u864F\u865C
\u53F7\u865F
\u4E8F\u8667
\u866C\u866F
\u86F1\u86FA
\u8715\u86FB
\u86AC\u8706
\u8680\u8755
\u732C\u875F
\u867E\u8766
\u8717\u8778
\u86F3\u8784
\u8682\u879E
\u8424\u87A2
\u45D6\u87AE
\u877C\u87BB
\u8780\u87BF
\u86F0\u87C4
\u8748\u87C8
\u87A8\u87CE
\u866E<\u87E3
\u8749\u87EC
\u86F2\u87EF
\u866B<\u87F2
\u86CF\u87F6
\u8681\u87FB
\u8683\u8801
\u8747\u8805
\u867F\u8806
\u86F4\u8810
\u877E\u8811
\u8721<\u881F
\u86CE\u8823
\u87CF\u8828
\u86CA\u8831
\u8695<\u8836
\u86EE\u883B
\u672F\u8853
\u540C<\u8855
\u80E1<\u9B0D\u885A
\u536B\u885B
\u886E\u889E
\u8885\u88CA
\u8865\u88DC
\u88C5\u88DD
\u91CC<\u88E1
\u5236<\u88FD
\u88C8\u890C
\u8886\u8918
\u88E4\u8932
\u88E2\u8933
\u891B\u8938
\u4EB5\u893B
\u88E5\u8947
\u891D\u894C
\u88AF\u894F
\u8884\u8956
\u88E3\u895D
\u88C6\u8960
\u8934\u8964
\u889C\u896A
\u4653\u896C
\u886C\u896F
\u88AD\u8972
\u8955\u8974
\u89C1\u898B
\u89C3\u898E
\u89C4\u898F
\u89C5\u8993
\u89C6\u8996
\u89C7\u8998
\u89CB\u89A1
\u89CD\u89A5
\u89CE\u89A6
\u4EB2\u89AA
\u89CA\u89AC
\u89CF\u89AF
\u89D0\u89B2
\u89D1\u89B7
\u89C9\u89BA
\u89C8\u89BD
\u89CC\u89BF
\u89C2\u89C0
\u89DE\u89F4
\u89EF\u89F6
\u89E6<\u89F8
\u8BA0\u8A01
\u8BA2\u8A02
\u8BA3\u8A03
\u8BA1\u8A08
\u8BAF\u8A0A
\u8BA7\u8A0C
\u8BA8\u8A0E
\u8BA6\u8A10
\u8BB1\u8A12
\u8BAD\u8A13
\u8BAA\u8A15
\u8BAB\u8A16
\u8BAC\u8A17
\u8BB0\u8A18
\u8BB9\u8A1B
\u8BB6\u8A1D
\u8BBC\u8A1F
\u4723\u8A22
\u8BC0\u8A23
\u8BB7\u8A25
\u8BBB\u8A29
\u8BBF\u8A2A
\u8BBE\u8A2D
\u8BB8\u8A31
\u8BC9\u8A34
\u8BC3\u8A36
\u8BCA\u8A3A
\u6CE8<\u8A3B
\u8BC2\u8A41
\u8BCB\u8A46
\u8BB5\u8A4E
\u8BC8\u8A50
\u8BD2\u8A52
\u8BCF\u8A54
\u8BC4\u8A55
\u8BD0\u8A56
\u8BC7\u8A57
\u8BCE\u8A58
\u8BC5\u8A5B
\u8BCD\u8A5E
\u548F\u8A60
\u8BE9\u8A61
\u8BE2\u8A62
\u8BE3\u8A63
\u8BD5\u8A66
\u8BD7\u8A69
\u8BE7\u8A6B
\u8BDF\u8A6C
\u8BE1\u8A6D
\u8BE0\u8A6E
\u8BD8\u8A70
\u8BDD\u8A71
\u8BE5\u8A72
\u8BE6\u8A73
\u8BDC\u8A75
\u8BD9\u8A7C
\u8BD6\u8A7F
\u8BD4\u8A84
\u8BDB\u8A85
\u8BD3\u8A86
\u5938<\u8A87
\u5FD7<\u8A8C
\u8BA4\u8A8D
\u8BF3\u8A91
\u8BF6\u8A92
\u8BDE\u8A95
\u8BF1\u8A98
\u8BEE\u8A9A
\u8BED\u8A9E
\u8BDA\u8AA0
\u8BEB\u8AA1
\u8BEC\u8AA3
\u8BEF\u8AA4
\u8BF0\u8AA5
\u8BF5\u8AA6
\u8BF2\u8AA8
\u8BF4\u8AAA
\u8C01\u8AB0
\u8BFE\u8AB2
\u8C07\u8AB6
\u8BFD\u8AB9
\u8C0A\u8ABC
\u8A1A\u8ABE
\u8C03\u8ABF
\u8C04\u8AC2
\u8C06\u8AC4
\u8C08\u8AC7
\u8BFF\u8AC9
\u8BF7\u8ACB
\u8BE4\u8ACD
\u8BF9\u8ACF
\u8BFC\u8AD1
\u8C05\u8AD2
\u8BBA\u8AD6
\u8C02\u8AD7
\u8C00\u8ADB
\u8C0D\u8ADC
\u8C1E\u8ADD
\u8C1D\u8ADE
\u8BE8\u8AE2
\u8C14\u8AE4
\u8C1B\u8AE6
\u8C10\u8AE7
\u8C0F\u8AEB
\u8C15\u8AED
\u8C18\u8AEE
\u8BB3\u8AF1
\u8C19\u8AF3
\u8C0C\u8AF6
\u8BBD\u8AF7
\u8BF8\u8AF8
\u8C1A\u8AFA
\u8C16\u8AFC
\u8BFA\u8AFE
\u8C0B\u8B00
\u8C12\u8B01
\u8C13\u8B02
\u8A8A\u8B04
\u8BCC\u8B05
\u8C0E\u8B0A
\u8C1C\u8B0E
\u8C27\u8B10
\u8C11\u8B14
\u8C21\u8B16
\u8C24\u8B17
\u8C26\u8B19
\u8C25\u8B1A
\u8BB2\u8B1B
\u8C22\u8B1D
\u8C23\u8B20
\u8C1F\u8B28
\u8C2A\u8B2B
\u8C2C\u8B2C
\u8C2B\u8B7E\u8B2D
\u8BB4\u8B33
\u8C28\u8B39
\u8C29\u8B3E
\u8BC1\u8B49
\u8C32\u8B4E
\u8BA5\u8B4F
\u8C2E\u8B56
\u8BC6\u8B58
\u8C2F\u8B59
\u8C2D\u8B5A
\u8C31\u8B5C
\u8C35\u8B6B
\u8BD1\u8B6F
\u8BAE\u8B70
\u8C34\u8B74
\u62A4\u8B77
\u8BEA\u8B78
\u46D3\u8B7C
\u8A89\u8B7D
\u8BFB\u8B80
\u8C09\u8B85
\u53D8\u8B8A
\u8A5F\u8B8B
\u4729\u8B8C
\u96E0\u8B8E
\u8C17\u8B92
\u8BA9\u8B93
\u8C30\u8B95
\u8C36\u8B96
\u8C20\u8B9C
\u8C33\u8B9E
\u5C82\u8C48
\u7AD6\u8C4E
\u4E30<\u8C50
\u732A\u8C6C
\u8C6E\u8C76
\u732B\u8C93
\u4759\u8C99
\u8D1D\u8C9D
\u8D1E\u8C9E
\u8D20\u8C9F
\u8D1F\u8CA0
\u8D22\u8CA1
\u8D21\u8CA2
\u8D2B\u8CA7
\u8D27\u8CA8
\u8D29\u8CA9
\u8D2A\u8CAA
\u8D2F\u8CAB
\u8D23\u8CAC
\u8D2E\u8CAF
\u8D33\u8CB0
\u8D40\u8CB2
\u8D30\u8CB3
\u8D35\u8CB4
\u8D2C\u8CB6
\u4E70\u8CB7
\u8D37\u8CB8
\u8D36\u8CBA
\u8D39\u8CBB
\u8D34\u8CBC
\u8D3B\u8CBD
\u8D38\u8CBF
\u8D3A\u8CC0
\u8D32\u8CC1
\u8D42\u8CC2
\u8D41\u8CC3
\u8D3F\u8CC4
\u8D45\u8CC5
\u8D44\u8CC7
\u8D3E\u8CC8
\u8D3C\u8CCA
\u8D48\u8CD1
\u8D4A\u8CD2
\u5BBE\u8CD3
\u8D47\u8CD5
\u8D52\u8CD9
\u8D49\u8CDA
\u8D50\u8CDC
\u8D4F\u8CDE
\u8D54\u8CE0
\u8D53\u8CE1
\u8D24\u8CE2
\u5356\u8CE3
\u8D31\u8CE4
\u8D4B\u8CE6
\u8D55\u8CE7
\u8D28\u8CEA
\u8D26\u8CEC
\u8D4C\u8CED
\u4790\u8CF0
\u8D56\u8CF4
\u8D57\u8CF5
\u8D5A\u8CFA
\u8D59\u8CFB
\u8D2D\u8CFC
\u8D5B\u8CFD
\u8D5C\u8CFE
\u8D3D\u8D04
\u8D58\u8D05
\u8D5F\u8D07
\u8D60\u8D08
\u8D5E\u8D0A
\u8D5D\u8D17\u8D0B
\u8D61\u8D0D
\u8D62\u8D0F
\u8D46\u8D10
\u8D43\u8D13
\u8D51\u8D14
\u8D4E\u8D16
\u8D63\u8D1B
\u8D6A\u8D6C
\u8D76<\u8D95
\u8D75\u8D99
\u8D8B\u8DA8
\u8DB1\u8DB2
\u8FF9\u8DE1
\u8DF5\u8E10
\u8E0A<\u8E34
\u8DC4\u8E4C
\u8DF8\u8E55
\u8E52\u8E63
\u8E2A\u8E64
\u8DF7\u8E7A
\u8DF6\u8E82
\u8DB8\u8E89
\u8E0C\u8E8A
\u8DFB\u8E8B
\u8DC3\u8E8D
\u47E2\u8E8E
\u8E2F\u8E91
\u8DDE\u8E92
\u8E2C\u8E93
\u8E70\u8E95
\u8DF9\u8E9A
\u8E51\u8EA1
\u8E7F\u8EA5
\u8E9C\u8EA6
\u8E8F\u8EAA
\u8EAF\u8EC0
\u8F66\u8ECA
\u8F67\u8ECB
\u8F68\u8ECC
\u519B\u8ECD
\u8F6A\u8ED1
\u8F69\u8ED2
\u8F6B\u8ED4
\u8F6D\u8EDB
\u8F6F\u8EDF
\u8F77\u8EE4
\u8F78\u8EEB
\u8F71\u8EF2
\u8F74\u8EF8
\u8F75\u8EF9
\u8F7A\u8EFA
\u8F72\u8EFB
\u8F76\u8EFC
\u8F7C\u8EFE
\u8F83\u8F03
\u8F82\u8F05
\u8F81\u8F07
\u8F80\u8F08
\u8F7D\u8F09
\u8F7E\u8F0A
\u8F84\u8F12
\u633D<\u8F13
\u8F85\u8F14
\u8F7B\u8F15
\u8F86\u8F1B
\u8F8E\u8F1C
\u8F89\u8F1D
\u8F8B\u8F1E
\u8F8D\u8F1F
\u8F8A\u8F25
\u8F87\u8F26
\u8F88\u8F29
\u8F6E\u8F2A
\u8F8C\u8F2C
\u8F91\u8F2F
\u8F8F\u8F33
\u8F93\u8F38
\u8F90\u8F3B
\u8F97\u8F3E
\u8206\u8F3F
\u8F92\u8F40
\u6BC2\u8F42
\u8F96\u8F44
\u8F95\u8F45
\u8F98\u8F46
\u8F6C\u8F49
\u8F99\u8F4D
\u8F7F\u8F4E
\u8F9A\u8F54
\u8F70\u8F5F
\u8F94\u8F61
\u8F79\u8F62
\u8F73\u8F64
\u529E\u8FA6
\u8F9E\u8FAD
\u8FAB\u8FAE
\u8FA9\u8FAF
\u519C\u8FB2
\u8FF3\u9015
\u8FD9\u9019
\u8FDE\u9023
\u8FDB\u9032
\u8FD0\u904B
\u8FC7\u904E
\u8FBE\u9054
\u8FDD\u9055
\u9065\u9059
\u900A\u905C
\u9012\u905E
\u8FDC\u9060
\u9002<\u9069
\u8FDF\u9072
\u8FC1\u9077
\u9009\u9078
\u9057\u907A
\u8FBD\u907C
\u8FC8\u9081
\u8FD8\u9084
\u8FE9\u9087
\u8FB9\u908A
\u903B\u908F
\u9026\u9090
\u90CF\u90DF
\u90AE\u90F5
\u90D3\u9106
\u4E61\u9109
\u90B9\u9112
\u90AC\u9114
\u90E7\u9116
\u9093\u9127
\u90D1\u912D
\u90BB\u9130
\u90F8\u9132
\u90BA\u9134
\u90D0\u9136
\u909D\u913A
\u9142\u9147
\u90E6\u9148
\u4E11<\u919C
\u915D\u919E
\u533B\u91AB
\u9171\u91AC
\u9166\u91B1
\u917F\u91C0
\u8845\u91C1
\u917E\u91C3
\u917D\u91C5
\u91CA\u91CB
\u5398<\u91D0
\u9485\u91D2
\u9486\u91D3
\u9487\u91D4
\u948C\u91D5
\u948A\u91D7
\u9489\u91D8
\u948B\u91D9
\u9488\u91DD
\u9493\u91E3
\u9490\u91E4
\u948F\u91E7
\u9492\u91E9
\u9497\u91F5
\u948D\u91F7
\u9495\u91F9
\u948E\u91FA
\u497A\u91FE
\u94AF\u9200
\u94AB\u9201
\u9498\u9203
\u94AD\u9204
\u949A\u9208
\u94A0\u9209
\u949D\u920D
\u94A9\u9264\u920E
\u94A4\u9210
\u94A3\u9211
\u9491\u9212
\u949E\u9214
\u94AE\u9215
\u94A7\u921E
\u9499\u9223
\u94AC\u9225
\u949B\u9226
\u94AA\u9227
\u94CC\u922E
\u94C8\u9230
\u94B6\u9233
\u94C3\u9234
\u94B4\u9237
\u94B9\u9238
\u94CD\u9239
\u94B0\u923A
\u94B8\u923D
\u94C0\u923E
\u94BF\u923F
\u94BE\u9240
\u949C\u9245
\u94CA\u9248
\u94C9\u9249
\u94C7\u924B
\u94CB\u924D
\u94C2\u9251
\u94B7\u9255
\u94B3\u9257
\u94C6\u925A
\u94C5\u925B
\u94BA\u925E
\u94B2\u9266
\u9FED\u9448\u9268
\u94BC\u926C
\u94BD\u926D
\u94CF\u9276
\u94F0\u9278
\u94D2\u927A
\u94EC\u927B
\u94EA\u927F
\u94F6\u9280
\u94F3\u9283
\u94DC\u9285
\u94DA\u928D
\u94E3\u9291
\u94E8\u9293
\u94E2\u9296
\u94ED\u9298
\u94EB\u929A
\u94E6\u929B
\u8854\u929C
\u94D1\u92A0
\u94F7\u92A3
\u94F1\u92A5
\u94DF\u92A6
\u94F5\u92A8
\u94E5\u92A9
\u94D5\u92AA
\u94EF\u92AB
\u94D0\u92AC
\u94DE\u92B1
\u9510\u92B3
\u9500\u92B7
\u9508\u93FD\u92B9
\u9511\u92BB
\u9509\u92BC
\u94DD\u92C1
\u9512\u92C3
\u950C\u92C5
\u94A1\u92C7
\u94E4\u92CC
\u94D7\u92CF
\u950B\u92D2
\u94FB\u92D9
\u950A\u92DD
\u9513\u92DF
\u94D8\u92E3
\u9504\u92E4
\u9503\u92E5
\u9514\u92E6
\u9507\u92E8
\u94D3\u92E9
\u94FA\u92EA
\u94D6\u92EE
\u9506\u92EF
\u9502\u92F0
\u94FD\u92F1
\u950D\u92F6
\u952F\u92F8
\u94A2\u92FC
\u951E\u9301
\u5F55\u9304
\u9516\u9306
\u952B\u9307
\u9529\u9308
\u94D4\u930F
\u9525\u9310
\u9515\u9312
\u951F\u9315
\u9524\u9318
\u9531\u9319
\u94EE\u931A
\u951B\u931B
\u952C\u931F
\u952D\u9320
\u951C\u9321
\u94B1\u9322
\u9526\u9326
\u951A\u9328
\u9520\u9329
\u9521\u932B
\u9522\u932E
\u9519\u932F
\u9530\u9333
\u8868<\u9336
\u94FC\u9338
\u951D\u9340
\u9528\u9341
\u952A\u9343
\u9494\u9346
\u9534\u9347
\u9533\u9348
\u9505\u934B
\u9540\u934D
\u9537\u9354
\u94E1\u9358
\u9496\u935A
\u953B\u935B
\u953D\u9360
\u9538\u9364
\u9532\u9365
\u9518\u9369
\u9539\u936C
\u953E\u9370
\u952E\u9375
\u9536\u9376
\u9517\u937A
\u949F\u9418\u937E
\u9541\u9382
\u953F\u9384
\u9545\u9387
\u9551\u938A
\u9555\u9394
\u9501\u9396
\u9549\u9398
\u9548\u939B
\u9543\u93A1
\u94A8\u93A2
\u84E5\u93A3
\u954F\u93A6
\u94E0\u93A7
\u94E9\u93A9
\u953C\u93AA
\u9550\u93AC
\u9547\u93AE
\u9552\u93B0
\u954B\u93B2
\u954D\u93B3
\u9553\u93B5
\u9FD4\u93B6
\u954E\u93BF
\u955E\u93C3
\u955F\u93C7
\u94FE\u93C8
\u9546\u93CC
\u9559\u93CD
\u9560\u93D0
\u955D\u93D1
\u94FF\u93D7
\u9535\u93D8
\u9557\u93DC
\u9558\u93DD
\u955B\u93DE
\u94F2\u93DF
\u955C\u93E1
\u9556\u93E2
\u9542\u93E4
\u933E\u93E8
\u955A\u93F0
\u94E7\u93F5
\u9564\u93F7
\u956A\u93F9
\u497D\u93FA
\u94D9\u9403
\u94F4\u940B
\u9563\u9410
\u94F9\u9412
\u9566\u9413
\u9561\u9414
\u956B\u9419
\u9562\u941D
\u9568\u9420
\u4985\u9425
\u950E\u9426
\u950F\u9427
\u9544\u9428
\u954C\u942B
\u9570\u942E
\u4983\u942F
\u956F\u9432
\u956D\u9433
\u94C1\u9435
\u956E\u9436
\u94CE\u9438
\u94DB\u943A
\u9571\u943F
\u94F8\u9444
\u956C\u944A
\u9554\u944C
\u9274\u9452
\u9572\u9454
\u9527\u9455
\u9574\u945E
\u94C4\u9460
\u9573\u9463
\u9565\u9465
\u9567\u946D
\u94A5\u9470
\u9575\u9471
\u9576\u9472
\u954A\u9477
\u9569\u9479
\u9523\u947C
\u94BB\u947D
\u92AE\u947E
\u51FF\u947F
\u4986\u9481
\u957F\u9577
\u95E8\u9580
\u95E9\u9582
\u95EA\u9583
\u95EB\u9586
\u95EC\u9588
\u95ED\u9589
\u5F00\u958B
\u95F6\u958C
\u95F3\u958E
\u95F0\u958F
\u95F2\u9592\u9591
\u95F4\u9593
\u95F5\u9594
\u95F8\u9598
\u9602\u95A1
\u9601\u95A3
\u9600\u95A5
\u95FA\u95A8
\u95FD\u95A9
\u9603\u95AB
\u9606\u95AC
\u95FE\u95AD
\u9605\u95B1
\u960A\u95B6
\u9609\u95B9
\u960E\u95BB
\u960F\u95BC
\u960D\u95BD
\u9608\u95BE
\u960C\u95BF
\u9612\u95C3
\u677F<\u95C6
\u95F1\u95C8
\u9614\u95CA
\u9615\u95CB
\u9611\u95CC
\u9607\u95CD
\u9617\u95D0
\u9618\u95D2
\u95FF\u95D3
\u9616\u95D4
\u9619\u95D5
\u95EF\u95D6
\u5173\u95DC
\u961A\u95DE
\u9613\u95E0
\u9610\u95E1
\u8F9F<\u95E2
\u961B\u95E4
\u95FC\u95E5
\u5742>\u962A
\u9649\u9658
\u9655\u965D
\u9635\u9663
\u9634\u9670
\u9648\u9673
\u9646\u9678
\u9633\u967D
\u9667\u9689
\u961F\u968A
\u9636\u968E
\u9668\u9695
\u9645\u969B
\u968F\u96A8
\u9669\u96AA
\u9666\u96AF
\u9690\u96B1
\u9647\u96B4
\u96B6\u96B8
\u53EA<\u96BB
\u96BD\u96CB
\u867D\u96D6
\u53CC\u96D9
\u96CF\u96DB
\u6742\u96DC
\u9E21\u96DE
\u79BB<\u96E2
\u96BE\u96E3
\u4E91<\u96F2
\u7535\u96FB
\u9721\u9722
\u96FE\u9727
\u9701\u973D
\u96F3\u9742
\u972D\u9744
\u53C7\u9746
\u7075\u9748
\u53C6\u9749
\u9753\u975A
\u9759\u975C
\u4A44\u9766
\u9765\u9768
\u9F17\u9780
\u5DE9\u978F
\u9792\u97BD
\u9791\u97C3
\u97AF\u97C9
\u97E6\u97CB
\u97E7\u97CC
\u97E8\u97CD
\u97E9\u97D3
\u97EA\u97D9
\u97EC\u97DC
\u97EB\u97DE
\u97F5\u97FB
\u54CD\u97FF
\u9875\u9801
\u9876\u9802
\u9877\u9803
\u9879\u9805
\u987A\u9806
\u9878\u9807
\u987B\u9B1A\u9808
\u987C\u980A
\u9882\u980C
\u9880\u980E
\u9883\u980F
\u9884\u9810
\u987D\u9811
\u9881\u9812
\u987F\u9813
\u9887\u9817
\u9886\u9818
\u988C\u981C
\u9889\u9821
\u9890\u9824
\u988F\u9826
\u5934\u982D
\u9892\u982E
\u988A\u9830
\u988B\u9832
\u9895\u9834
\u9894\u9837
\u9888\u9838
\u9893\u9839
\u9891\u983B
\u9897\u9846
\u9898\u984C
\u989D\u984D
\u989A\u984E
\u989C\u984F
\u9899\u9852
\u989B\u9853
\u613F<\u9858
\u98A1\u9859
\u98A0\u985B
\u7C7B\u985E
\u989F\u9862
\u98A2\u9865
\u987E\u9867
\u98A4\u986B
\u98A5\u986C
\u663E\u986F
\u98A6\u9870
\u9885\u9871
\u989E\u9873
\u98A7\u9874
\u98CE\u98A8
\u98D0\u98AD
\u98D1\u98AE
\u98D2\u98AF
\u522E<\u98B3
\u98D3\u98B6
\u98D4\u98B8
\u98CF\u98BA
\u98D6\u98BB
\u98D5\u98BC
\u98D7\u98C0
\u98D8\u98C4
\u98D9\u98C6
\u98DA\u98C8
\u98DE\u98DB
\u9963\u98E0
\u9965\u98E2
\u9964\u98E3
\u9966\u98E5
\u9968\u98E9
\u996A\u98EA
\u996B\u98EB
\u996C\u98ED
\u996D\u98EF
\u996E\u98F2
\u9974\u98F4
\u9972\u98FC
\u9971\u98FD
\u9970\u98FE
\u9973\u98FF
\u997A\u9903
\u9978\u9904
\u997C\u9905
\u9977\u9909
\u517B\u990A
\u9975\u990C
\u9979\u990E
\u997B\u990F
\u997D\u9911
\u9981\u9912
\u997F\u9913
\u9982\u9915
\u997E\u9916
\u4F59<\u9918
\u80B4<\u991A
\u9984\u991B
\u9983\u991C
\u996F\u991E
\u9985\u9921
\u9986\u9928
\u7CC7\u9931
\u9967\u9933
\u9989\u9936
\u9987\u9937
\u998E\u993A
\u9969\u993C
\u998F\u993E
\u998A\u993F
\u998C\u9941
\u998D\u9943
\u9992\u9945
\u9990\u9948
\u9991\u9949
\u9993\u994A
\u9988\u994B
\u9994\u994C
\u9976\u9952
\u98E8\u9957
\u990D\u995C
\u998B\u995E
\u9995\u9962
\u9A6C\u99AC
\u9A6D\u99AD
\u51AF\u99AE
\u9A6E\u99B1
\u9A70\u99B3
\u9A6F\u99B4
\u9A72\u99B9
\u9A73\u99C1
\u9A7B\u99D0
\u9A7D\u99D1
\u9A79\u99D2
\u9A75\u99D4
\u9A7E\u99D5
\u9A80\u99D8
\u9A78\u99D9
\u9A76\u99DB
\u9A7C\u99DD
\u9A77\u99DF
\u9A88\u99E2
\u9A87\u99ED
\u9A83\u99F0
\u9A86\u99F1
\u9A8E\u99F8
\u9A8F\u99FF
\u9A8B\u9A01
\u9A8D\u9A02
\u9A93\u9A05
\u9A94\u9A0C
\u9A92\u9A0D
\u9A91\u9A0E
\u9A90\u9A0F
\u9A9B\u9A16
\u9A97\u9A19
\u9A99\u9A24
\u4BC4\u9A27
\u9A9E\u9A2B
\u9A98\u9A2D
\u9A9D\u9A2E
\u817E\u9A30
\u9A7A\u9A36
\u9A9A\u9A37
\u9A9F\u9A38
\u9AA1\u9A3E
\u84E6\u9A40
\u9A9C\u9A41
\u9A96\u9A42
\u9AA0\u9A43
\u9AA2\u9A44
\u9A71\u9A45
\u9A85\u9A4A
\u9A95\u9A4C
\u9A81\u9A4D
\u9AA3\u9A4F
\u9A84\u9A55
\u9A8C\u9A57
\u60CA<\u9A5A
\u9A7F\u9A5B
\u9AA4\u9A5F
\u9A74\u9A62
\u9AA7\u9A64
\u9AA5\u9A65
\u9AA6\u9A66
\u9A8A\u9A6A
\u9A89\u9A6B
\u80AE<\u9AAF
\u9AC5\u9ACF
\u4F53<\u9AD4
\u9ACC\u9AD5
\u9ACB\u9AD6
\u677E<\u9B06
\u9B13\u9B22
\u6597<\u9B25
\u95F9\u9B27
\u960B\u9B29
\u9604\u9B2E
\u90C1<\u9B31
\u9B36\u9B39
\u9B49\u9B4E
\u9B47\u9B58
\u9C7C\u9B5A
\u9C7D\u9B5B
\u9C7E\u9B62
\u9C80\u9B68
\u9C81\u9B6F
\u9C82\u9B74
\u9C7F\u9B77
\u9C84\u9B7A
\u9C85\u9B81
\u9C86\u9B83
\u9C8C\u9B8A
\u9C89\u9B8B
\u9C8F\u9B8D
\u9C87\u9B8E
\u9C90\u9B90
\u9C8D\u9B91
\u9C8B\u9B92
\u9C8A\u9B93
\u9C92\u9B9A
\u9C98\u9B9C
\u9C95\u9B9E
\u4C9F\u9BA3
\u9C96\u9BA6
\u9C94\u9BAA
\u9C9B\u9BAB
\u9C91\u9BAD
\u9C9C\u9BAE
\u9C93\u9BB3
\u9CAA\u9BB6
\u9C9D\u9BBA
\u9CA7\u9BC0
\u9CA0\u9BC1
\u9CA9\u9BC7
\u9CA4\u9BC9
\u9CA8\u9BCA
\u9CAC\u9BD2
\u9CBB\u9BD4
\u9CAF\u9BD5
\u9CAD\u9BD6
\u9C9E\u9BD7
\u9CB7\u9BDB
\u9CB4\u9BDD
\u9CB1\u9BE1
\u9CB5\u9BE2
\u9CB2\u9BE4
\u9CB3\u9BE7
\u9CB8\u9BE8
\u9CAE\u9BEA
\u9CB0\u9BEB
\u9CB6\u9BF0
\u9CBA\u9BF4
\u9CC0\u9BF7
\u9CAB\u9BFD
\u9CCA\u9BFF
\u9CC8\u9C01
\u9C97\u9C02
\u9CC2\u9C03
\u4CA0\u9C06
\u9CBD\u9C08
\u9CC7\u9C09
\u4CA1\u9C0C
\u9CC5\u9C0D
\u9CBE\u9C0F
\u9CC4\u9C77\u9C10
\u9CC6\u9C12
\u9CC3\u9C13
\u9CD2\u9C1C
\u9CD1\u9C1F
\u9CCB\u9C20
\u9CA5\u9C23
\u9CCF\u9C25
\u4CA2\u9C27
\u9CCE\u9C28
\u9CD0\u9C29
\u9CCD\u9C2D
\u9CC1\u9C2E
\u9CA2\u9C31
\u9CCC\u9C32
\u9CD3\u9C33
\u9CD8\u9C35
\u9CA6\u9C37
\u9CA3\u9C39
\u9CB9\u9C3A
\u9CD7\u9C3B
\u9CDB\u9C3C
\u9CD4\u9C3E
\u9CC9\u9C42
\u9CD9\u9C45
\u9CD5\u9C48
\u9CD6\u9C49
\u9CDF\u9C52
\u9CDD\u9C54
\u9CDC\u9C56
\u9CDE\u9C57
\u9C9F\u9C58
\u9CBC\u9C5D
\u9C8E\u9C5F
\u9C99\u9C60
\u9CE3\u9C63
\u9CE1\u9C64
\u9CE2\u9C67
\u9CBF\u9C68
\u9C9A\u9C6D
\u9CE0\u9C6F
\u9C88\u9C78
\u9CA1\u9C7A
\u9E1F\u9CE5
\u51EB\u9CE7
\u9E20\u9CE9
\u9E24\u9CF2
\u51E4\u9CF3
\u9E23\u9CF4
\u9E22\u9CF6
\u4D13\u9CFE
\u9E29\u9D06
\u9E28\u9D07
\u9E26\u9D09
\u9E30\u9D12
\u9E35\u9D15
\u9E33\u9D1B
\u9E32\u9D1D
\u9E2E\u9D1E
\u9E31\u9D1F
\u9E2A\u9D23
\u9E2F\u9D26
\u9E2D\u9D28
\u9E38\u9D2F
\u9E39\u9D30
\u9E3B\u9D34
\u4D15\u9D37
\u9E3F\u9D3B
\u9E3D\u9D3F
\u4D14\u9D41
\u9E3A\u9D42
\u9E3C\u9D43
\u9E40\u9D50
\u9E43\u9D51
\u9E46\u9D52
\u9E41\u9D53
\u9E48\u9D5C
\u9E45\u9D5D
\u9E44\u9D60
\u9E49\u9D61
\u9E4C\u9D6A
\u9E4F\u9D6C
\u9E50\u9D6E
\u9E4E\u9D6F
\u9E4A\u9D72
\u9E53\u9D77
\u9E4D\u9D7E
\u4D16\u9D84
\u9E2B\u9D87
\u9E51\u9D89
\u9E52\u9D8A
\u9E4B\u9D93
\u9E59\u9D96
\u9E55\u9D98
\u9E57\u9D9A
\u9E56\u9DA1
\u9E5B\u9DA5
\u9E5C\u9DA9
\u4D17\u9DAA
\u9E27\u9DAC
\u83BA\u9DAF
\u9E5F\u9DB2
\u9E64\u9DB4
\u9E60\u9DB9
\u9E61\u9DBA
\u9E58\u9DBB
\u9E63\u9DBC
\u9E5A\u9DC0
\u9E62\u9DC1
\u9E5E\u9DC2
\u4D18\u9DC9\u9DC8
\u9E5D\u9DCA
\u9E67\u9DD3
\u9E65\u9DD6
\u9E25\u9DD7
\u9E37\u9DD9
\u9E68\u9DDA
\u9E36\u9DE5
\u9E6A\u9DE6
\u9E54\u9DEB
\u9E69\u9DEF
\u9E6B\u9DF2
\u9E47\u9DF3
\u9E6C\u9DF8
\u9E70\u9DF9
\u9E6D\u9DFA
\u9E34\u9DFD
\u4D19\u9E0A\u9DFF
\u3D89\u9E02
\u9E6F\u9E07
\u9E71\u9E0C
\u9E72\u9E0F
\u9E2C\u9E15
\u9E74\u9E18
\u9E66\u9E1A
\u9E73\u9E1B
\u9E42\u9E1D
\u9E3E\u9E1E
\u5364\u9E75
\u54B8<\u9E79
\u9E7E\u9E7A
\u76D0\u9E7D
\u4E3D\u9E97
\u9EA6\u9EA5
\u9EB8\u9EA9
\u66F2<\u9EAF
\u9EB9>\u9EB4
\u9762<\u9EB5
\u9EC4\u9EC3
\u9EC9\u9ECC
\u70B9\u9EDE
\u515A<\u9EE8
\u9EEA\u9EF2
\u9EE1\u9EF6
\u9EE9\u9EF7
\u9EFE\u9EFD
\u9F0B\u9EFF
\u9F0D\u9F09
\u9F39\u9F34
\u9F50\u9F4A
\u658B\u9F4B
\u8D4D\u9F4E
\u9F51\u9F4F
\u9F7F\u9F52
\u9F80\u9F54
\u9F81\u9F55
\u9F82\u9F57
\u9F85\u9F59
\u9F87\u9F5C
\u9F83\u9F5F
\u9F86\u9F60
\u9F84\u9F61
\u51FA<\u9F63
\u9F88\u9F66
\u9F8A\u9F6A
\u9F89\u9F6C
\u9F8B\u9F72
\u816D\u9F76
\u9F8C\u9F77
\u9F99\u9F8D
\u5390\u9F8E
\u5E9E\u9F90
\u4DAE\u9F91
\u9F9A\u9F94
\u9F9B\u9F95
\u9F9F\u9F9C
\u4724\u9FC1
\u4CA4\u9FD0
\u9FD3\u9FD2`;

// ../lossless-simplified-chinese/index.js
var mapping = sc2tc.split(/\r?\n/);
mapping.push("\u201C\u300C");
mapping.push("\u2018\u300E");
mapping.push("\u201D\u300D");
mapping.push("\u2019\u300F");
var overwrite = {
  "\u83B7": "\u7372\u7A6B",
  "\u7F30": "\u7E6E\u97C1",
  "\u8D5D": "\u8D0B\u8D17",
  "\u4F2A": "\u50DE\u507D",
  "\u6C47": "\u532F\u5F59",
  "\u575B": "\u58C7\u7F48",
  "\u53F0": "\u81FA\u98B1\u6AAF",
  "\u51B2": "\u6C96\u885D",
  "\u7877": "\u7906\u9E7C",
  "\u7EF1": "\u7DD4\u979D",
  "\u810F": "\u81DF\u9AD2",
  "\u8C2B": "\u8B2D\u8B7E",
  "\u94A9": "\u920E\u9264",
  "\u9FED": "\u9268\u9448",
  "\u9508": "\u92B9\u93FD",
  "\u95F2": "\u9591\u9592",
  "\u987B": "\u9808\u9B1A",
  "\u9CC4": "\u9C10\u9C77"
};
var t2s = {};
var t2s_unsafe1 = {};
var s2t = {};
mapping.forEach((line, idx2) => {
  const r = line.match(/(.)(<?)(.+)/u);
  if (!r) throw "wrong data format " + idx2;
  let [m4, sc, op, tc] = r;
  let oldtc = tc;
  if (overwrite[sc]) tc = overwrite[sc];
  if (op == "") {
    if (tc.length == 1) {
      t2s[tc] = sc;
    } else {
      if (tc[0] == ">") {
        t2s_unsafe1[tc.substring(1)] = sc;
      } else {
        t2s[tc[0]] = sc;
        tc = tc.substring(1);
        for (let i = 0; i < tc.length; i++) {
          const cp = tc.codePointAt(i);
          if (!cp) break;
          t2s_unsafe1[String.fromCodePoint(cp)] = sc;
        }
      }
    }
  } else {
    if (tc.length == 1) {
      t2s_unsafe1[tc] = sc;
    } else {
      while (tc && tc[0] !== ">") {
        const ch = String.fromCodePoint(tc.codePointAt(0));
        t2s_unsafe1[ch] = sc;
        tc = tc.substring(ch.length);
      }
    }
  }
  tc = oldtc.replace(/\>/g, "");
  if (op == "<") {
    s2t[sc] = tc.replace(sc, "") + sc;
  } else s2t[sc] = tc;
});
var toSim = (s, mode = 1) => {
  if (!s) return s;
  let out2 = "", i = 0;
  if (!mode) return s;
  while (i < s.length) {
    const cp = s.codePointAt(i);
    const ucs4 = String.fromCodePoint(cp);
    if (!ucs4) break;
    let sc = t2s[ucs4];
    if (mode == 2 && !sc) sc = t2s_unsafe1[ucs4];
    out2 += sc || ucs4;
    i++;
    if (cp > 65535) i++;
  }
  return out2;
};
var fromSim = (s, mode = 1) => {
  let out2 = "", i = 0;
  if (!mode || !s) return s;
  while (i < s.length && s[i]) {
    const cp = s.codePointAt(i);
    const ucs4 = String.fromCodePoint(cp);
    if (!ucs4) break;
    let tc = s2t[ucs4];
    if (!tc) {
      out2 += ucs4;
    } else if (mode == 1 && !tc.codePointAt(1)) {
      out2 += tc;
    } else if (mode == 2) {
      out2 += String.fromCodePoint(tc.codePointAt(0));
    } else if (mode == 3) {
      if (tc.codePointAt(1)) out2 += "(" + tc + ")";
      else out2 += tc;
    } else out2 += ucs4;
    i++;
    if (cp > 65535) i++;
  }
  return out2;
};

// fts/inverted.ts
var Inverted = class {
  constructor(section, postingStart) {
    this.words = new StringArray(section.shift(), { sep: LEMMA_DELIMITER });
    this.bmpwithposting = unpackIntDelta(section.shift());
    this.tokenlinepos = unpackIntDelta(section.shift());
    this.postings = [];
    this.postingStart = postingStart;
    this.bmppostingcount = 0;
    for (let i = 1; i < 65536; i++) {
      if (this.bmpwithposting[i]) this.bmppostingcount++;
    }
  }
  nPostingOf(s) {
    const out2 = [];
    const tokens = tokenize(s);
    for (let i = 0; i < tokens.length; i++) {
      const { type, text } = tokens[i];
      let at = -1;
      if (type == 49 /* CJK_BMP */) {
        const cp = text.charCodeAt(0);
        at = bsearchNumber(this.bmpwithposting, cp);
        if (this.bmpwithposting[at] !== cp) {
          const cpsim = fromSim(text).charCodeAt(0);
          at = bsearchNumber(this.bmpwithposting, cpsim);
          if (this.bmpwithposting[at] !== cpsim) continue;
        }
      } else if (type >= 16 /* SEARCHABLE */) {
        if (~at) at += this.bmppostingcount;
        else {
          let at2 = this.words.find(s);
          if (~at2) at = at2 + this.bmppostingcount;
        }
        ;
      }
      out2.push(at);
    }
    return out2;
  }
};

// fts/posting.ts
var counter = 0;
var maxspeed = 0;
var plFind = (arr, v, p3 = 0) => {
  let speed = 1;
  let p22 = p3;
  while (p22 < arr.length) {
    if (v > arr[p22]) {
      speed++;
      if (speed > maxspeed) maxspeed = speed;
    } else {
      if (speed <= 1) break;
      p22 -= speed;
      speed = 1;
    }
    p22 += speed;
    counter++;
  }
  return p22;
};
var plAnd = (pl1, pl2, dist = 1) => {
  let p22 = 0, c2 = 0;
  if (!pl1 || !pl2 || pl1.length == 0 || pl2.length == 0) return [];
  const sz = Math.min(pl1.length, pl2.length);
  let out2 = [];
  for (let p1 = 0; p1 < pl1.length; p1++) {
    let v1 = pl1[p1] + dist;
    let v2 = pl2[p22];
    while (v1 > v2 && p22 < pl2.length) v2 = pl2[++p22];
    if (v1 === v2) {
      out2[c2++] = v1 - dist;
    }
  }
  return out2.slice(0, c2);
};
var plCount = (pl, plgroup) => {
  let p3 = 0, start = 0, end = 0;
  const out2 = [];
  for (let i = 0; i < plgroup.length; i++) {
    const [from, to] = plgroup[i];
    start = p3;
    if (from > pl[p3]) start = plFind(pl, from, p3);
    end = start;
    while (pl[end] < to && end < pl.length) end++;
    if (end > start) {
      out2[i] = end - start;
    } else out2[i] = 0;
    p3 = end;
  }
  for (let i = 0; i < out2.length; i++) {
    if (typeof out2[i] !== "number") out2[i] = 0;
  }
  return out2;
};
var plTrim = (pl, from, to) => {
  const at1 = bsearchNumber(pl, from);
  let at2 = bsearchNumber(pl, to) + 1;
  const out2 = pl.slice(at1, at2);
  while (out2[0] < from) out2.shift();
  while (out2[out2.length - 1] > to) out2.pop();
  return out2;
};
var plRanges = (posting, ranges) => {
  if (!ranges || !ranges.length) return posting;
  const out2 = [];
  let j2 = 0, r = ranges[j2];
  for (let i = 0; i < posting.length; i++) {
    const p3 = posting[i];
    if (p3 >= r[0] && r[1] >= p3) out2.push(p3);
    while (p3 > r[0] && j2 < ranges.length - 1) {
      r = ranges[++j2];
    }
    if (j2 >= ranges.length) break;
  }
  return out2;
};
var plContain = (posting, ltp, withHits = false) => {
  let p3, i = 0, j2 = 0;
  const lines = [], hits = [];
  while (i < posting.length) {
    let p4 = posting[i];
    let at = bsearchNumber(ltp, p4);
    if (at >= 0 && at < ltp.length) {
      if (lines[lines.length - 1] !== at) {
        lines.push(at);
      }
      if (withHits) {
        if (!hits[lines.length - 1]) hits[lines.length - 1] = [];
        hits[lines.length - 1].push(p4 - ltp[at - 1]);
      }
      p4 = posting[i];
    }
    i++;
  }
  return [lines, hits];
};
var getCounter = () => counter;
var getSpeed = () => maxspeed;
var resetCounter = () => counter = 0;

// fts/postings.ts
function loadPostingsSync(s) {
  const ptk = this;
  const nPostings = ptk.inverted.nPostingOf(s);
  for (let i = 0; i < nPostings.length; i++) {
    const at = nPostings[i];
    if (at == -1) continue;
    const line = ptk.inverted.postingStart + nPostings[i];
    if (!ptk.inverted.postings[at]) {
      const packedline = ptk.getLine(line);
      ptk.inverted.postings[at] = unpackIntDelta(packedline);
    }
  }
  return this.getPostings(s);
}
function getPostings(s) {
  const nPostings = this.inverted.nPostingOf(s);
  const postings = this.inverted.postings;
  return nPostings.map((np) => postings[np]);
}
var loadPostinglines = async (ptk, s) => {
  if (!ptk.inverted) return;
  const nPostings = ptk.inverted.nPostingOf(s);
  const postinglines = [];
  for (let i = 0; i < nPostings.length; i++) {
    if (nPostings[i] < 0) continue;
    const line = ptk.inverted.postingStart + nPostings[i];
    postinglines.push([line, line + 1]);
  }
  postinglines.sort((a, b) => a[0] - b[0]);
  await ptk.loadLines(postinglines);
  return postinglines;
};
async function loadPostings(s) {
  const ptk = this;
  await loadPostinglines(ptk, s);
  return ptk.loadPostingsSync.call(ptk, s);
}

// ../node_modules/diff/lib/index.mjs
function Diff() {
}
Diff.prototype = {
  diff: function diff(oldString, newString) {
    var _options$timeout;
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var callback = options.callback;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    this.options = options;
    var self = this;
    function done(value) {
      if (callback) {
        setTimeout(function() {
          callback(void 0, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    }
    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length, oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    if (options.maxEditLength) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }
    var maxExecutionTime = (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : Infinity;
    var abortAfterTimestamp = Date.now() + maxExecutionTime;
    var bestPath = [{
      oldPos: -1,
      lastComponent: void 0
    }];
    var newPos = this.extractCommon(bestPath[0], newString, oldString, 0);
    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    }
    var minDiagonalToConsider = -Infinity, maxDiagonalToConsider = Infinity;
    function execEditLength() {
      for (var diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        var basePath = void 0;
        var removePath = bestPath[diagonalPath - 1], addPath = bestPath[diagonalPath + 1];
        if (removePath) {
          bestPath[diagonalPath - 1] = void 0;
        }
        var canAdd = false;
        if (addPath) {
          var addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }
        var canRemove = removePath && removePath.oldPos + 1 < oldLen;
        if (!canAdd && !canRemove) {
          bestPath[diagonalPath] = void 0;
          continue;
        }
        if (!canRemove || canAdd && removePath.oldPos + 1 < addPath.oldPos) {
          basePath = self.addToPath(addPath, true, void 0, 0);
        } else {
          basePath = self.addToPath(removePath, void 0, true, 1);
        }
        newPos = self.extractCommon(basePath, newString, oldString, diagonalPath);
        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          return done(buildValues(self, basePath.lastComponent, newString, oldString, self.useLongestToken));
        } else {
          bestPath[diagonalPath] = basePath;
          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }
          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }
      editLength++;
    }
    if (callback) {
      (function exec() {
        setTimeout(function() {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback();
          }
          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        var ret = execEditLength();
        if (ret) {
          return ret;
        }
      }
    }
  },
  addToPath: function addToPath(path, added, removed, oldPosInc) {
    var last = path.lastComponent;
    if (last && last.added === added && last.removed === removed) {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: last.count + 1,
          added,
          removed,
          previousComponent: last.previousComponent
        }
      };
    } else {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: 1,
          added,
          removed,
          previousComponent: last
        }
      };
    }
  },
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length, oldLen = oldString.length, oldPos = basePath.oldPos, newPos = oldPos - diagonalPath, commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }
    if (commonCount) {
      basePath.lastComponent = {
        count: commonCount,
        previousComponent: basePath.lastComponent
      };
    }
    basePath.oldPos = oldPos;
    return newPos;
  },
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },
  removeEmpty: function removeEmpty(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  },
  castInput: function castInput(value) {
    return value;
  },
  tokenize: function tokenize2(value) {
    return value.split("");
  },
  join: function join(chars2) {
    return chars2.join("");
  }
};
function buildValues(diff2, lastComponent, newString, oldString, useLongestToken) {
  var components = [];
  var nextComponent;
  while (lastComponent) {
    components.push(lastComponent);
    nextComponent = lastComponent.previousComponent;
    delete lastComponent.previousComponent;
    lastComponent = nextComponent;
  }
  components.reverse();
  var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];
    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function(value2, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value2.length ? oldValue : value2;
        });
        component.value = diff2.join(value);
      } else {
        component.value = diff2.join(newString.slice(newPos, newPos + component.count));
      }
      newPos += component.count;
      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff2.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count;
      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  }
  var finalComponent = components[componentLen - 1];
  if (componentLen > 1 && typeof finalComponent.value === "string" && (finalComponent.added || finalComponent.removed) && diff2.equals("", finalComponent.value)) {
    components[componentLen - 2].value += finalComponent.value;
    components.pop();
  }
  return components;
}
var characterDiff = new Diff();
function diffChars(oldStr, newStr, options) {
  return characterDiff.diff(oldStr, newStr, options);
}
var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new Diff();
wordDiff.equals = function(left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }
  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};
wordDiff.tokenize = function(value) {
  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/);
  for (var i = 0; i < tokens.length - 1; i++) {
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }
  return tokens;
};
var lineDiff = new Diff();
lineDiff.tokenize = function(value) {
  if (this.options.stripTrailingCr) {
    value = value.replace(/\r\n/g, "\n");
  }
  var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  }
  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];
    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }
      retLines.push(line);
    }
  }
  return retLines;
};
var sentenceDiff = new Diff();
sentenceDiff.tokenize = function(value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var cssDiff = new Diff();
cssDiff.tokenize = function(value) {
  return value.split(/([{}:;,]|\s+)/);
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new Diff();
jsonDiff.useLongestToken = true;
jsonDiff.tokenize = lineDiff.tokenize;
jsonDiff.castInput = function(value) {
  var _this$options = this.options, undefinedReplacement = _this$options.undefinedReplacement, _this$options$stringi = _this$options.stringifyReplacer, stringifyReplacer = _this$options$stringi === void 0 ? function(k, v) {
    return typeof v === "undefined" ? undefinedReplacement : v;
  } : _this$options$stringi;
  return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
};
jsonDiff.equals = function(left, right) {
  return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"));
};
function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];
  if (replacer) {
    obj = replacer(key, obj);
  }
  var i;
  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }
  var canonicalizedObj;
  if ("[object Array]" === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);
    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }
    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }
  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }
  if (_typeof(obj) === "object" && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);
    var sortedKeys = [], _key;
    for (_key in obj) {
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }
    sortedKeys.sort();
    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }
    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }
  return canonicalizedObj;
}
var arrayDiff = new Diff();
arrayDiff.tokenize = function(value) {
  return value.slice();
};
arrayDiff.join = arrayDiff.removeEmpty = function(value) {
  return value;
};

// fts/similarity.ts
var similarSentence = (s1, s2) => {
  let differ = 0, equal = 0;
  const d = diffChars(s1, s2);
  d.forEach((v) => {
    if (v.added || v.removed) {
      differ += v.value.replace(/[^\u3400-\u9fff]/g, "").length;
    } else {
      equal += v.value.length;
    }
  });
  const sim = equal * 2 / (s1.length + s2.length);
  return sim;
};

// fts/excerpt.ts
var listExcerpts = async (ptk, tofind, opts = {}) => {
  if (!ptk) return {};
  const tlp = ptk.inverted?.tokenlinepos;
  if (!tlp) return {};
  let sectionfrom = 0, sectionto = 0;
  if (opts.range) {
    const [first, last] = ptk.rangeOfAddress(opts.range);
    sectionfrom = tlp[first];
    sectionto = tlp[last];
  } else {
    sectionfrom = tlp[0];
    sectionto = tlp[ptk.header.eot];
  }
  const [phrases, postings] = await ptk.parseQuery(tofind, { tosim: ptk.attributes.lang == "zh" });
  let chunkobj = {}, lineobj = {}, hitcount2 = 0;
  const chunklinepos = (ptk.defines.ck || ptk.defines.dk).linepos;
  const chunktag = ptk.defines.ck ? "ck" : "dk";
  for (let i = 0; i < postings.length; i++) {
    const pl = plTrim(postings[i], sectionfrom, sectionto);
    const [pllines, lineshits] = plContain(pl, ptk.inverted.tokenlinepos, true);
    const phraselen = phrases[i].length;
    hitcount2 += pl.length;
    for (let j2 = 0; j2 < pllines.length; j2++) {
      const line = pllines[j2];
      let removed = false;
      if (opts.includelines) {
        const at2 = bsearchNumber(opts.includelines, line);
        if (opts.includelines[at2] !== line) removed = true;
      }
      if (opts.excludelines) {
        const at2 = bsearchNumber(opts.excludelines, line);
        if (opts.excludelines[at2] == line) removed = true;
      }
      if (removed) continue;
      if (!lineobj[line]) lineobj[line] = [];
      lineobj[line].push(...lineshits[j2].map((it) => it * MAXPHRASELEN + phraselen));
      const at = bsearchNumber(chunklinepos, line + 1) - 1;
      if (!chunkobj[at]) {
        chunkobj[at] = 0;
      }
      chunkobj[at]++;
    }
  }
  const lines = fromObj(lineobj, (a, b) => [parseInt(a), b.sort()]).sort((a, b) => a[0] - b[0]);
  const chunks = fromObj(chunkobj, (a, b) => [parseInt(a), b]).sort((a, b) => b[1] - a[1]);
  return { lines, chunks, phrases, postings, chunktag };
};

// fts/query.ts
var TOFIND_MAXLEN = 50;
var MAX_PHRASE = 5;
var scoreMatch = (matching, weights) => {
  if (matching.length == 0) return 0;
  let score = 0, matchcount = 0;
  for (let j2 = 0; j2 < weights.length; j2++) {
    if (matching[j2]) {
      matchcount++;
      score += weights[j2] * (matching[j2] > 1 ? Math.sqrt(matching[j2]) : 1);
    }
  }
  let boost = matchcount / weights.length;
  boost *= boost;
  return score * boost;
};
function scoreLine(postings, chunklinepos, tlp) {
  tlp = tlp || this.inverted.tokenlinepos, tlplast = tlp[tlp.length - 1];
  chunklinepos = chunklinepos || this.defines.ck.linepos;
  const averagelinelen = tlplast / tlp.length;
  const allhits = postings.reduce((acc, i2) => i2.length + acc, 0);
  const weights = postings.map((pl) => Math.sqrt(allhits / pl.length));
  let i = 0, scoredLine = [];
  const ptr = new Array(postings.length);
  ptr.fill(0);
  let prev = 0;
  while (i < tlp.length - 1) {
    let nearest = tlplast;
    const from = tlp[i], to = tlp[i + 1];
    let matching = [];
    prev = 0;
    for (let j2 = 0; j2 < postings.length; j2++) {
      const pl = postings[j2];
      let v = pl[ptr[j2]];
      while (v < from && ptr[j2] < pl.length) {
        ptr[j2]++;
        v = pl[ptr[j2]];
      }
      while (v >= from && v < to) {
        if (!matching[j2]) matching[j2] = 0;
        matching[j2]++;
        if (j2 == 0) prev = v;
        else {
          const dist = v - prev - j2;
          if (dist == 0) {
            matching[j2] += 3;
          } else {
            matching[j2] += 1 / dist;
          }
        }
        ptr[j2]++;
        v = pl[ptr[j2]];
      }
      if (nearest > v) nearest = v;
    }
    const score = scoreMatch(matching, weights);
    let shortpara = 10 * (averagelinelen / (to - from + 1));
    if (shortpara < 10) shortpara = 10;
    const boost = Math.log(shortpara);
    if (score > 0) {
      const chunk = bsearchNumber(chunklinepos, i) - 1;
      scoredLine.push([i + 1, score * boost, chunk]);
    }
    i++;
    while (nearest > tlp[i + 1]) i++;
  }
  scoredLine = scoredLine.sort((a, b) => b[1] - a[1]);
  return scoredLine;
}
function phraseQuerySync(phrase, tokens = null) {
  tokens = tokens || this.loadPostingsSync(phrase);
  if (!tokens) return [];
  phrase = phrase.trim();
  const qkey = this.name + "@" + phrase;
  let out2 = this.queryCache[qkey];
  if (out2) return out2;
  out2 = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    let pl1 = out2;
    out2 = plAnd(pl1, tokens[i], i);
  }
  this.queryCache[qkey] = out2 || [];
  return this.queryCache[qkey];
}
async function phraseQuery(phrase) {
  const tokens = await this.loadPostings(phrase);
  if (!tokens) return [];
  return phraseQuerySync.call(this, phrase, tokens);
}
async function parseQuery(tofind, opts) {
  opts = opts || {};
  const phrases = tofind.split(/[, 　]/);
  if (phrases.length > MAX_PHRASE) phrases.length = MAX_PHRASE;
  const outphrases = [], postings = [];
  for (let i = 0; i < phrases.length; i++) {
    if (!phrases[i].trim()) continue;
    let posting = await phraseQuery.call(this, phrases[i]);
    if ((!posting || !posting.length) && this.attributes.lang == "zh") {
      posting = await phraseQuery.call(this, fromSim(phrases[i]));
    }
    if (opts.ranges && opts.ranges.length) {
      posting = plRanges(posting, opts.ranges);
    }
    outphrases.push(phrases[i]);
    postings.push(posting || []);
  }
  return [outphrases, postings];
}
async function scanText(tofind, opts) {
  const ptk = this;
  const [phrases, postings] = await ptk.parseQuery(tofind, opts);
  if (!postings.length || !ptk.inverted) return [];
  const tagname = opts?.groupby || "ak";
  const groupby = ptk.defines[tagname];
  const tlp = [], TLP = ptk.inverted.tokenlinepos;
  if (groupby) {
    for (let i = 0; i < groupby.linepos.length; i++) {
      const nextstart = TLP[groupby.linepos[i + 1]] || TLP[TLP.length - 1];
      tlp.push([TLP[groupby.linepos[i]], nextstart]);
    }
    const res = new Array(tlp.length);
    res.fill(0);
    for (let i = 0; i < postings.length; i++) {
      const res1 = plCount(postings[i], tlp);
      for (let j2 = 0; j2 < tlp.length; j2++) {
        res[j2] += res1[j2];
      }
    }
    const out2 = res.map((count, idx2) => {
      const id = groupby.fields.id.values[idx2];
      return {
        count,
        caption: groupby.getInnertext(idx2),
        scope: tagname + (parseInt(id) ? id : "#" + id)
      };
    });
    return out2;
  } else {
    return [{ count: postings.length, caption: "-", name: "-" }];
  }
}
var validateTofind = (str) => {
  return (str || "").replace(/[\[\]&%$#@\/\^]/g, "").trim();
};
function hitsOfLine(line, allpostings) {
  const tlp = this.inverted.tokenlinepos;
  const hits = [];
  for (let i = 0; i < allpostings.length; i++) {
    const from = tlp[line - 1], till = tlp[line];
    const hit = plTrim(allpostings[i], from, till).map((it) => it - from);
    hits.push(hit);
  }
  return hits;
}
var tofindInSentence = (sentence, pos = 0, len = 0) => {
  if (pos == -1) {
    return [sentence];
  }
  let tofinds = Array();
  if (len > 0) {
    return [sentence.slice(pos, pos + len)];
  }
  if (sentence.length < 4) tofinds.push(sentence);
  for (let i = pos; i <= sentence.length; i++) {
    let t = sentence.slice(pos, i);
    if (t.length > 1) tofinds.push(t.trim());
    t = sentence.slice(pos - 1, i);
    if (t.length > 1) tofinds.push(t.trim());
    t = sentence.slice(pos + 1, i);
    if (t.length > 1) tofinds.push(t.trim());
    if (t.length > 5) continue;
  }
  return unique(tofinds);
};
var statSentencePhrase = (tofinds, postings) => {
  const out2 = {};
  if (tofinds.length == 0) {
    return [];
  } else if (tofinds.length == 1) {
    return [[tofinds[0], postings[0]]];
  }
  const total = postings.reduce((p3, n, i) => p3 + Math.log(tofinds[i].length * n.length), 0);
  const avg = total / postings.length;
  for (let i = 0; i < postings.length; i++) {
    if (Math.log(postings[i].length * tofinds[i].length) > avg && postings[i].length > 1) {
      out2[tofinds[i]] = postings[i];
    }
  }
  if (!Object.keys(out2).length) {
    for (let i = 0; i < postings.length; i++) {
      out2[tofinds[i]] = postings[i];
    }
  }
  for (let key in out2) {
    for (let shortkey in out2) {
      if (key == shortkey || !out2[shortkey].length) continue;
      if ((key.startsWith(shortkey) || key.endsWith(shortkey)) && out2[key].length * 1.1 >= out2[shortkey].length) {
        out2[shortkey] = [];
      }
    }
  }
  for (let key in out2) {
    if (out2[key].length == 0) delete out2[key];
  }
  return sortObj(out2, (a, b) => b[1].length - a[1].length).slice(0, 3);
};
async function searchSentence(sentence, pos = 0, len = 0) {
  const out2 = [];
  const tofinds = tofindInSentence(sentence.trim(), pos);
  for (let i = 0; i < tofinds.length; i++) {
    const tf = tofinds[i];
    out2.push(await phraseQuery.call(this, tf));
  }
  return statSentencePhrase(tofinds, out2);
}
function searchSentenceSync(sentence, pos = 0, len = 0) {
  if (!sentence.trim()) return [];
  const tofinds = tofindInSentence(sentence, pos, len);
  const out2 = tofinds.map((it) => phraseQuerySync.call(this, it));
  return statSentencePhrase(tofinds, out2);
}

// offtext/render.ts
var RenderUnit = class {
  token;
  //raw token from tokenize
  open;
  //tag open at this token
  close;
  //tag close at this token
  text;
  //the text to display
  css;
  //the classes of css
  hide;
  //hide the text
  postingoffset;
  choff;
  ntoken;
  tags;
  luminate;
  highlight;
  offtext;
  extra;
  constructor(token, ntoken, offtext, postingoffset) {
    this.token = token;
    this.postingoffset = postingoffset;
    this.choff = token.choff;
    this.text = token.text;
    this.ntoken = ntoken;
    this.offtext = offtext;
    this.tags = [];
    this.hide = false;
    this.luminate = 0;
    this.highlight = false;
    this.css = "";
  }
  tagsOf(closing = false) {
    const out2 = [];
    if (!this.tags || !this.tags.length) return "";
    for (let i = 0; i < this.tags.length; i++) {
      const tag = this.offtext.getTag(this.tags[i]);
      if (this.choff == tag.choff + (closing ? tag.width - 1 : 0)) {
        out2.push(this.tags[i]);
      }
    }
    return out2;
  }
  closestTag() {
    return this.offtext.getTag(this.tags[this.tags.length - 1]);
  }
};
var findUnitText = (runits, text, from = 0) => {
  for (let i = from; i < runits.length; i++) {
    if (runits[i].token.text === text) return runits[i];
  }
};
var getRenderUnitClasses = (ru, prepend = "", append = "") => {
  const css = [];
  css.push(prepend);
  const ot = ru.offtext;
  for (let j2 = 0; j2 < ru.tags.length; j2++) {
    const tag = ot.tags[ru.tags[j2]];
    css.push(tag.name);
    if (tag.active) css.push(tag.name + "_active");
    const hasbracket = closeBracketOf(ru.offtext.tagRawText(tag)) ? 1 : 0;
    if (ru.choff == tag.choff + hasbracket) css.push(tag.name + "_start");
    if (ru.choff == tag.choff + tag.width - 1 - hasbracket) css.push(tag.name + "_end");
  }
  if (ru.highlight) css.push("highlight");
  css.push(append);
  ru.hide && css.push("hide");
  return css.join(" ");
};
var renderOfftext = (linetext = "", opts = {}) => {
  const extra = opts.extra || [];
  const hits = opts.hits || [];
  const phraselength = opts.phraselength || [];
  const ot = new Offtext(linetext, opts.line || 0);
  let postingoffset = 0;
  const runits = tokenize(ot.plain).map((tk, idx2) => {
    postingoffset++;
    const ru = new RenderUnit(tk, idx2, ot, postingoffset);
    return ru;
  });
  const tagsAt = [];
  let phit = 0, pextra = 0;
  for (let i = 0; i < ot.tags.length; i++) {
    const tag = ot.tags[i];
    const width = tag.width ? tag.width : 1;
    for (let j2 = tag.choff; j2 < tag.choff + width; j2++) {
      if (!tagsAt[j2]) tagsAt[j2] = [];
      tagsAt[j2].push(i);
    }
  }
  for (let i = 0; i < runits.length; i++) {
    const ru = runits[i];
    ru.tags = tagsAt[ru.token.choff] || [];
    if (extra.length && pextra < extra.length) {
      if (ru.choff == extra[pextra].choff) {
        ru.extra = extra[pextra];
        pextra++;
      }
    }
    if (hits && hits.length && phit < hits.length) {
      if (ru.postingoffset >= hits[phit] && ru.postingoffset < hits[phit] + phraselength[phit] && ru.token.type >= 16 /* SEARCHABLE */) {
        ru.highlight = true;
      }
      if (hits[phit] + phraselength[phit] <= ru.postingoffset) phit++;
      if (ru.highlight) {
        ru.luminate++;
        let j2 = i + 1;
        while (j2 < runits.length) {
          if (runits[j2].token.type >= 16 /* SEARCHABLE */ || j2 - i < MIN_ABRIDGE) j2++;
          else break;
          if (j2 < runits.length) runits[j2].luminate++;
        }
        j2 = i - 1;
        while (j2 > 0) {
          if (runits[j2].token.type >= 16 /* SEARCHABLE */ || i - j2 < MIN_ABRIDGE) j2--;
          else break;
          if (j2 >= 0) runits[j2].luminate++;
        }
      }
    }
    const bracket = closeBracketOf(ru.text);
    if (ru.hide || ru.tags.length && bracket) {
      ru.hide = true;
      const closeAt = findUnitText(runits, bracket, i + 1);
      if (closeAt) closeAt.hide = true;
    }
  }
  return [runits, ot];
};
var abridgeRenderUnits = (runits, minwidth = 10) => {
  const out2 = [];
  let abridged = [];
  const addAbridge = (final = false) => {
    if (abridged.length > MIN_ABRIDGE) {
      out2.push([abridged.length, abridged[0], final]);
    } else {
      for (let j2 = 0; j2 < abridged.length; j2++) {
        out2.push(runits[abridged[j2]]);
      }
    }
    abridged = [];
  };
  if (runits.length < minwidth) return runits;
  for (let i = 0; i < runits.length; i++) {
    const ru = runits[i];
    if (ru.luminate) {
      addAbridge();
      out2.push(ru);
    } else {
      abridged.push(i);
    }
  }
  addAbridge(true);
  return out2;
};

// platform/chromefs.ts
var m = typeof navigator !== "undefined" && navigator.userAgent.match(/Chrome\/(\d+)/);
var supprtedBrowser = m && parseInt(m[1]) >= 86;
var createBrowserDownload = (filename2, buf) => {
  let file = new Blob([buf], { type: "application/octet-binary" });
  let a = document.createElement("a"), url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename2;
  document.body.appendChild(a);
  a.click();
};
async function verifyPermission(fileHandle, readWrite = false) {
  const options = {};
  if (readWrite) {
    options.mode = "readwrite";
  }
  if (await fileHandle.queryPermission(options) === "granted") {
    return true;
  }
  if (await fileHandle.requestPermission(options) === "granted") {
    return true;
  }
  return false;
}
var openSourceOption = {
  id: "inputfile",
  startIn: "desktop",
  multiple: true,
  types: [
    {
      description: "Source Files",
      accept: {
        "text/plain": [".off", ".txt", ".tsv", ".css", ".xml"]
      }
    }
  ]
};
var savePtkOption = {
  id: "ptkfile",
  startIn: "desktop",
  types: [
    {
      description: "Ptk File",
      accept: {
        "application/zip": [".ptk"]
      }
    }
  ]
};
var openPtkOption = {
  id: "ptkfile",
  startIn: "desktop",
  types: [
    {
      description: "Ptk File",
      accept: {
        "application/zip": [".ptk"]
      }
    }
  ]
};
var openComOption = {
  id: "comfile",
  startIn: "desktop",
  types: [
    {
      description: "Com File",
      accept: {
        "application/zip": [".com"]
      }
    }
  ]
};
var saveComOption = {
  id: "comfile",
  startIn: "desktop",
  types: [
    {
      description: "Com File",
      accept: {
        "application/zip": [".com"]
      }
    }
  ]
};
var saveSourceOption = {
  id: "savesource",
  startIn: "desktop",
  types: [
    {
      description: "Source Files",
      accept: {
        "text/plain": [".off", ".txt"]
      }
    }
  ]
};

// platform/fsutils.ts
var hasWildcard = (s) => {
  return s.indexOf("?") > -1 || s.indexOf("[") > -1 || s.indexOf("*") > -1 || s.indexOf("$") > -1 || s.indexOf("{") > -1;
};
var expandWildcard = (folder, pat, isDir) => {
  let files = [];
  if (hasWildcard(pat)) {
    const folderfiles = fs.readdirSync(folder);
    files = glob(folderfiles, pat);
  } else if (fs.existsSync(folder + pat)) {
    files = [pat];
  }
  if (isDir) files = files.filter((fn) => fs.statSync(folder + fn).isDirectory());
  return files;
};
var glob = (files, filepat) => {
  if (typeof files == "string") {
    files = fs.readdirSync(files);
  }
  let start, end;
  if (!filepat) return files;
  const m4 = filepat.match(/\{(\d+)\-(\d+)\}/);
  if (m4) {
    start = parseInt(m4[1]);
    end = parseInt(m4[2]);
    filepat = filepat.replace(/\{\d+\-\d+\}/, "(\\d+)");
  }
  const pat = filepat.replace(/\*/g, "[^\\.]+").replace(/\./g, "\\.").replace(/\?/g, ".");
  const reg = new RegExp(pat);
  if (start && end) {
    return files.filter((f) => {
      const m5 = f.match(reg);
      return m5 && (parseInt(m5[1]) >= start && parseInt(m5[1]) <= end);
    });
  } else {
    return files.filter((f) => f.match(reg));
  }
};
var filesFromPattern = (pat, rootdir = "./") => {
  const outfiles = {};
  const patterns = typeof pat === "string" ? pat.split(/[;,]/) : pat;
  if (rootdir && rootdir.slice(rootdir.length - 1) !== "/") rootdir += "/";
  patterns.forEach((pat2) => {
    const at = pat2.lastIndexOf("/");
    let dir = "";
    let subfolders = [""];
    if (at > -1) {
      dir = pat2.slice(0, at);
      pat2 = pat2.slice(at + 1);
      subfolders = expandWildcard(rootdir, dir, true);
    } else {
      subfolders = [""];
    }
    subfolders.forEach((subfolder) => {
      const files = expandWildcard(rootdir + subfolder, pat2);
      files.forEach((f) => {
        outfiles[(subfolder ? subfolder + "/" : "") + f] = true;
      });
    });
  });
  const out2 = [];
  for (let fn in outfiles) {
    if (fs.statSync(rootdir + fn).isDirectory()) {
      const files = fs.readdirSync(rootdir + fn).map((f) => fn + (fn.endsWith("/") ? "" : "/") + f);
      out2.push(...files);
    } else {
      out2.push(fn);
    }
  }
  return out2;
};

// basket/pool.ts
var _pool = {};
var poolHas = (name2) => !!_pool[name2];
var poolGet = (name2) => _pool[name2];
var poolAdd = (name2, inst) => _pool[name2] = inst;
var poolDel = (name2) => delete _pool[name2];
var poolGetAll = () => {
  const out2 = Array();
  for (const name2 in _pool) {
    out2.push(_pool[name2]);
  }
  return out2;
};
var hasLang = (lang) => {
  for (const name2 in _pool) {
    const ptk = _pool[name2];
    if (ptk.lang === lang) return true;
  }
};
var poolParallelPitakas = (ptk) => {
  let align = ptk.attributes?.align;
  if (!align) align = ptk.name.replace(/\-[^-]+$/, "");
  const out2 = Array();
  for (const n in _pool) {
    if (_pool[n].attributes.align == align || n.replace(/\-[^-]+$/, "") == align) {
      if (ptk.name !== _pool[n].name) out2.push(n);
    }
  }
  return out2;
};

// linebase/loadpage.ts
var pagefilename = (page) => page.toString().padStart(3, "0") + ".js";
var makePageURI = (folder, page) => {
  const fn = folder + "/" + pagefilename(page);
  return fn;
};
async function loadNodeJs(page) {
  let fn = makePageURI(this.name, page);
  if (!fs.existsSync(fn) && fs.existsSync("../" + this.name + "/" + this.name)) {
    fn = makePageURI("../" + this.name + "/" + this.name, page);
  }
  try {
    const data = await fs.promises.readFile(fn, "utf8");
    this.setPage(page, ...parseJsonp(data));
  } catch (e) {
    console.error("readFile failed,", fn, e);
  }
}
async function loadRemoteZip(page) {
  throw "not implement yet";
}
async function loadInMemoryZipStore(page) {
  let content;
  const fn = this.name + "/" + pagefilename(page);
  for (let i = 0; i < this.zipstore.files.length; i++) {
    if (this.zipstore.files[i].name == fn) {
      content = new TextDecoder().decode(this.zipstore.files[i].content);
    }
  }
  content && this.setPage(page, ...parseJsonp(content));
}
async function loadFetch(page) {
  if (this.zip) {
    const data = await this.zip.readTextFile(this.name + "/" + pagefilename(page));
    this.setPage(page, ...parseJsonp(data));
    return;
  }
  const uri = makePageURI(this.name, page);
  try {
    const res = await fetch(uri);
    const text = await res.text();
    const arr = parseJsonp(text);
    this.setPage(page, ...arr);
  } catch (e) {
    this.failed = true;
  }
}
var jsonp = (page, header, _payload) => {
  const ptk = poolGet(header.name);
  ptk.setPage(page, header, _payload);
};
function isLoaded(page) {
  return page == 0 ? this.pagestarts.length : this._pages[page - 1];
}
async function loadJSONP(page) {
  if (isLoaded.call(this, page)) return;
  if (!typeof window.jsonp !== "function") {
    window.jsonp = jsonp;
  }
  let tried = 0, timer;
  const that = this;
  try {
    const status = await loadScript(makePageURI(that.name, page), () => {
      if (isLoaded.call(that, page)) return true;
      timer = setInterval(() => {
        tried++;
        if (tried > 10 || isLoaded.call(that, page)) {
          if (tried > 10) console.error("failed loading page", page, that.name);
          clearInterval(timer);
        }
      }, 10);
    });
  } catch (e) {
    this.failed = true;
  }
}

// linebase/linebase.ts
var instancecount = 0;
var combineRange = (range) => {
  const combined = Array();
  let from = 0;
  range = range.filter((it) => !!it);
  if (Array.isArray(range[0]) && range.length) {
    range.sort((a, b) => a - b);
    from = range[0][0];
    for (let i = 1; i < range.length; i++) {
      if (range[i][0] > range[i - 1][1]) {
        combined.push([from, range[i - 1][1]]);
        from = range[i][0];
      }
    }
    if (range[range.length - 1][1] > from) combined.push([from, range[range.length - 1][1]]);
  } else {
    return range;
  }
  return combined;
};
var LineBase = class {
  _pages;
  _lineoffsets;
  stamp;
  pagestarts;
  header;
  name;
  zip;
  zipstore;
  payload;
  _loader;
  failed;
  inmemory;
  opened;
  constructor(opts) {
    this.stamp = ++instancecount;
    this._pages = [];
    this._lineoffsets = [];
    this.pagestarts = [];
    this.header = {
      starts: Array(),
      sectionnames: Array(),
      sectionstarts: Array(),
      sectiontypes: Array(),
      preload: Array(),
      name: ""
    };
    this.name = opts.name || "";
    this.zip = opts.zip;
    this.zipstore = opts.zipstore;
    this.payload;
    let protocol = typeof chrome !== "undefined" ? "chrome-extension:" : "";
    if (typeof window !== "undefined") {
      protocol = window.location.protocol;
    }
    if (this.zipstore) {
      this._loader = loadInMemoryZipStore;
    } else if (protocol === "http:" || protocol === "https:" || protocol === "chrome-extension:") {
      this._loader = loadFetch;
    } else if (protocol == "file:") {
      this._loader = loadJSONP;
    } else {
      this._loader = this.zip ? loadRemoteZip : loadNodeJs;
    }
    this.failed = false;
    if (opts.contentString) {
      const [headerstr, len] = extractObject(opts.contentString);
      const header = JSON.parse(headerstr);
      const lines = opts.contentString.slice(len).split("\n");
      const payload = (lines.shift() || "").replace(/\\n/g, "\n");
      this.setPage(0, header, payload);
      for (let i = 0; i < header.starts.length; i++) {
        const pagedata = lines.slice(i > 0 ? header.starts[i - 1] : 0, header.starts[i]);
        this.setPage(i + 1, {}, pagedata.join("\n"));
      }
      this.inmemory = true;
    } else if (!opts.inmemory) {
      this._loader.call(this, 0);
    }
  }
  async loadAll() {
    await this.loadLines([[0, this.pagestarts[this.pagestarts.length - 1]]]);
    return this.slice(0, this.pagestarts[this.pagestarts.length - 1]);
  }
  inMem() {
    return this.inmemory || this.zipstore;
  }
  pageOfLine = (line) => {
    if (line >= this.pagestarts[this.pagestarts.length - 1]) return this.pagestarts.length - 1;
    return bsearchNumber(this.pagestarts, line);
  };
  pageOfRange([from, to]) {
    if (from < 0) return [];
    if (from > to) to += from;
    let cstart = this.pageOfLine(from);
    const cend = this.pageOfLine(to);
    const notloaded = Array();
    if (cstart > 1) cstart--;
    for (let i = cstart; i < cend + 1; i++) {
      if (!this._pages[i]) notloaded.push(i);
    }
    return notloaded;
  }
  async loadLines(_range) {
    const that = this;
    let toload = Array(), range = combineRange(_range);
    const notincache = {};
    for (let i = 0; i < range.length; i++) {
      if (Array.isArray(range[i])) {
        const [from, to] = range[i];
        toload.push(...this.pageOfRange([from, to]));
      } else {
        notincache[this.pageOfLine(range[i])] = true;
      }
    }
    toload.push(...Object.keys(notincache).map((it) => parseInt(it)));
    toload = unique(toload.filter((it) => !that._pages[it]));
    const jobs = Array();
    for (let i = 0; i < toload.length; i++) {
      jobs.push(this._loader.call(this, toload[i] + 1));
    }
    await Promise.all(jobs);
  }
  lineCount() {
    return this.header.starts[this.header.starts.length - 1];
  }
  getPageLineOffset(page, line) {
    if (page > this._pages.length) return 0;
    if (line == 0) return 0;
    if (line > this._lineoffsets[page].length) return this._pages[page].length;
    return this._lineoffsets[page][line - 1];
  }
  getLines(nlines) {
    if (!nlines.length) return [];
    let out2 = Array();
    let pline = nlines[0];
    let start = pline;
    for (let i = 1; i < nlines.length; i++) {
      if (pline + 1 !== nlines[i]) {
        out2 = out2.concat(this.slice(start, i));
        start = nlines[i];
      }
      pline = nlines[i];
    }
    out2 = out2.concat(this.slice(start, pline + 1));
    return out2;
  }
  getLine(nline) {
    return this.slice(nline, nline + 1)[0];
  }
  slice(nline, to) {
    if (!to) to = nline + 1;
    const p1 = this.pageOfLine(nline);
    const p22 = this.pageOfLine(to);
    let out2 = "";
    for (let i = p1; i <= p22; i++) {
      if (!this._pages[i]) return out2.split("\n");
      if (i == p1 || i == p22) {
        let slicefrom = this.getPageLineOffset(i, nline - (p1 > 0 ? this.pagestarts[p1 - 1] : 0));
        if (nline) slicefrom++;
        const sliceto = this.getPageLineOffset(i, to - (p22 > 0 ? this.pagestarts[p22 - 1] : 0));
        if (p22 > p1) {
          const append = this._pages[i].slice(0, sliceto);
          if (i == p1) out2 = this._pages[i].slice(slicefrom);
          else out2 += (out2 && append ? "\n" : "") + append;
        } else {
          out2 += this._pages[i].slice(slicefrom, sliceto);
        }
      } else out2 += (out2.length ? "\n" : "") + this._pages[i];
    }
    return out2.split("\n");
  }
  setPage(page, header, payload) {
    if (page == 0) {
      this.header = header;
      this.name = this.header.name;
      this.pagestarts = header.starts;
      this.payload = payload || "nopayload";
      this.opened = true;
    } else if (page > 0) {
      this._pages[page - 1] = payload;
      this._lineoffsets[page - 1] = lineBreaksOffset(payload);
    }
  }
  isReady() {
    if (this.payload) return true;
    const that = this;
    let timer;
    return new Promise((resolve) => {
      timer = setInterval(() => {
        if (that.failed) resolve(false);
        else if (that.payload) {
          clearInterval(timer);
          resolve(true);
        }
      }, 50);
    });
  }
  getSection(name2) {
    const [from, to] = this.sectionRange(name2);
    if (from == to) return [];
    return this.slice(from, to);
  }
  sectionRange(sname) {
    const { sectionnames, sectionstarts } = this.header;
    if (!sectionnames || !sectionnames.length) return [0, 0];
    for (let i = 0; i < sectionnames.length; i++) {
      const name2 = sectionnames[i];
      if (sname && name2 == sname) {
        const endoflastsection = i < sectionstarts.length - 1 ? sectionstarts[i + 1] : this.pagestarts[this.pagestarts.length - 1];
        return [sectionstarts[i], endoflastsection];
      }
    }
    return [0, 0];
  }
};

// linebase/linebaser.ts
var makePageJsonp = (name2, page, start, payload) => {
  return "jsonp(" + page + ',{"name":"' + name2 + '","start":' + start + "},`" + payload + "`)";
};
var makeHeader = (name2, header, pagestarts) => {
  const meta = Object.assign({}, header, { name: name2, starts: pagestarts, buildtime: /* @__PURE__ */ new Date() });
  return JSON.stringify(meta);
};
var LineBaser = class {
  _data;
  _accsize;
  pagesize;
  pagestarts;
  payload;
  header;
  name;
  onAddLine;
  sealed;
  zip;
  constructor(opts = {}) {
    this._data = [];
    this._accsize = 0;
    this.pagesize = opts.pagesize || 1024 * 64;
    this.pagestarts = [];
    this.payload = "";
    this.sealed = false;
    this.header = {
      starts: [],
      sectionnames: [],
      sectionstarts: [],
      sectiontypes: [],
      preload: [],
      fulltext: [],
      fulltextcaption: [],
      eot: 0
    };
    this.name = opts.name || "";
    this.zip = opts.zip;
  }
  setName(name2) {
    this.name = name2;
  }
  asString(escape = false) {
    const header = makeHeader(this.name, this.header || {}, this.pagestarts);
    const text = escape ? escapeTemplateString(this._data.join("\n")) : this._data.join("\n");
    return header + this.payload.replace(/\n/g, "\\n") + "\n" + text;
  }
  dumpJs(cb) {
    if (!this.name) {
      throw "need a name before dumping";
    }
    this.newPage();
    let start = 0;
    const jsonpfn = pagejsonpfn(0);
    const headerstring = "jsonp(0," + makeHeader(this.name, this.header || {}, this.pagestarts) + ",`" + escapeTemplateString(this.payload) + "`";
    cb(jsonpfn, headerstring, 0);
    for (let i = 0; i < this.pagestarts.length; i++) {
      const lines = this._data.slice(start, this.pagestarts[i]);
      const towrite = makePageJsonp(this.name, i + 1, start, escapeTemplateString(lines.join("\n")));
      const done = cb(pagejsonpfn(i + 1), towrite, i + 1);
      if (done) break;
      start = this.pagestarts[i];
    }
    this._data = [];
    this._accsize = 0;
    this.pagestarts = [];
  }
  newPage() {
    this.pagestarts.push(this._data.length);
    this._accsize = 0;
  }
  addLine(line, samepage = false) {
    if (this.sealed) throw "sealed";
    this._data.push(line);
    this._accsize += line.length;
    if (this._accsize > this.pagesize && !samepage) this.newPage();
  }
  addSection(name2, type) {
    if (!name2) name2 = (this.header.sectionnames.length + 1).toString();
    if (!this.header.sectionnames) {
      this.header.sectionnames = [];
      this.header.sectionstarts = [];
      this.header.sectiontypes = [];
    }
    ;
    this.header.sectionnames.push(name2);
    this.header.sectionstarts.push(this._data.length);
    if (name2.startsWith("_") && !type) type = name2.slice(1);
    this.header.sectiontypes.push(type);
  }
  append(buffer, opts = {}) {
    const name2 = opts.name || "";
    const newpage = opts.newpage;
    const samepage = opts.samepage;
    const type = opts.sourcetype || opts.type;
    if ((buffer.length + this._accsize > this.pagesize || newpage) && this._data.length) {
      this.newPage();
    }
    if (name2) this.addSection(name2, type);
    const lines = Array.isArray(buffer) ? buffer : buffer.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      if (this.onAddLine) {
        const text = this.onAddLine(lines[i], i, name2);
        if (typeof text === "string") this.addLine(text, samepage);
      } else {
        this.addLine(lines[i] || "", samepage);
      }
    }
  }
};

// compiler/error.ts
var MAX_VERROR = 3;
var VError2 = /* @__PURE__ */ ((VError3) => {
  VError3["NoKeys"] = "NO_KEYS";
  VError3["NoKey"] = "NO_KEY";
  VError3["NotANumber"] = "NOT_NUMBER";
  VError3["Empty"] = "EMPTY_BUFFER";
  VError3["Pattern"] = "PATTERN_MISMATCH";
  VError3["NotUnique"] = "NOT_UNIQUE";
  VError3["Mandatory"] = "MANDANTORY";
  VError3["TypeRedef"] = "TYPE_REDEF";
  VError3["MissingTagName"] = "MISSING_TAGNAME";
  VError3["UnknownType"] = "UNKNOWN_TYPE";
  VError3["ExcessiveField"] = "EXCESSIVE_FIELD";
  VError3["PtkNamed"] = "PTK_NAMED";
  VError3["PtkNoName"] = "PTK_NONAME";
  VError3["RedefineChunkTag"] = "REDEFINE_CHUNK_CHUNK_TAG";
  VError3["InvalidLinkAddress"] = "INVALID_LINK_ADDRESS";
  return VError3;
})(VError2 || {});
var VErrorMessage = {
  ["NO_KEYS" /* NoKeys */]: "missing keys $1",
  ["NO_KEY" /* NoKey */]: "missing key $1 for string",
  ["NOT_NUMBER" /* NotANumber */]: "not a number",
  ["PATTERN_MISMATCH" /* Pattern */]: "pattern mismatch",
  ["NOT_UNIQUE" /* NotUnique */]: "not unique",
  ["MANDANTORY" /* Mandatory */]: "mandatory field",
  ["TYPE_REDEF" /* TypeRedef */]: "redefine type",
  [VError2.MissingTypedef]: "mssing typedef",
  ["EXCESSIVE_FIELD" /* ExcessiveField */]: "excessive field",
  ["UNKNOWN_TYPE" /* UnknownType */]: "unknown type",
  ["PTK_NAMED" /* PtkNamed */]: "ptk already named",
  ["PTK_NONAME" /* PtkNoName */]: "ptk not named",
  ["EMPTY_BUFFER" /* Empty */]: "Empty buffer"
};
var errorMessage = (code, arg) => {
  return (VErrorMessage[code] || "").replace("$1", arg || "");
};

// compiler/basefield.ts
var Field = class {
  type;
  name;
  foreign;
  optional;
  unique;
  caption;
  constructor(name2, def) {
    this.name = name2;
    this.foreign = def.foreign || "";
    this.pattern = def.pattern || null;
    this.keys = def.keys || [];
    this.unique = null;
    this.optional = true;
    this.caption = "";
    this.type = def.type || "string";
    this.values = [];
    this.sortedIndex;
    for (let n in def) {
      if (!this.hasOwnProperty(n)) {
        console.log("unknown defining attr", n, "of", name2, def);
      }
      this[n] = def[n];
    }
    if (def.unique) this.unique = {};
  }
  resetUnique() {
    if (this.unique) this.unique = {};
  }
  validate(value, line) {
    if (this.unique) {
      if (this.unique[value]) {
        return ["NOT_UNIQUE" /* NotUnique */, "tag:" + this.name + ", value:" + value, this.unique[value]];
      } else {
        this.unique[value] = line;
      }
    }
    return [0, value];
  }
  find() {
    return -1;
  }
};

// lineview/interfaces.ts
var ACTIONPAGESIZE = 5;
var MAXDIVISIONLINE = 30;

// basket/address.ts
var BRANCH_SEP = ".";
var parseAction = (action, objform = false) => {
  if (!action) return [];
  const branches = action.split(BRANCH_SEP);
  const out2 = Array();
  for (let i = 0; i < branches.length; i++) {
    const m1 = branches[i].match(/^([a-z_\-]+)#([a-z\d_-]+)$/);
    const m22 = branches[i].match(/^([a-z_\-]+)(\d+[a-z\d_-]+)$/);
    const m32 = branches[i].match(/^([a-z_\-]+)(\d*)$/);
    if (m1) {
      out2.push([m1[1], m1[2]]);
    } else if (m22) {
      out2.push([m22[1], m22[2]]);
    } else if (m32) {
      out2.push([m32[1], m32[2]]);
    } else {
      const at = branches[i].indexOf("#");
      if (at > 0) {
        out2.push([branches[i].slice(0, at), branches[i].slice(at + 1)]);
      } else {
        out2.push(["ck", branches[i]]);
      }
    }
  }
  if (objform) {
    const obj = {};
    for (let i = 0; i < out2.length; i++) {
      const [tag, value] = out2[i];
      obj[tag] = value;
    }
    return obj;
  } else {
    return out2;
  }
};
var sameAddress = (addr1, addr2) => {
  if (typeof addr1 == "string") addr1 = parseAddress(addr1);
  if (typeof addr2 == "string") addr2 = parseAddress(addr2);
  if (!addr1 || !addr2) return;
  return addr1.action == addr2.action && addr1.ptkname == addr2.ptkname;
};
var makeAddress = (ptkname = "", action = "", from = 0, till = 0, lineoff = 0, choff = 0) => {
  if (typeof ptkname == "object") {
    const obj = ptkname;
    ptkname = obj.ptkname;
    action = obj.action || "";
    from = obj.from || 0;
    till = obj.till || 0;
    lineoff = obj.highlightline || obj.lineoff || 0;
    choff = obj.choff || 0;
  }
  let linechoff = "";
  if (choff > 0) {
    linechoff = lineoff + "-" + choff;
  } else if (lineoff > 0) {
    linechoff = lineoff.toString();
  }
  return (ptkname ? ptkname + ":" : "") + action + (from ? ">" + from : "") + (till ? "<" + till : "") + (linechoff ? ":" + linechoff : "");
};
var parseAddress = (address) => {
  let m0, ptkname = "", action = "", from = "", till = "", linechoff = "";
  let m4 = address.match(PTK_ACTION_FROMTILL);
  if (m4) {
    [m0, ptkname, action, from, till, linechoff] = m4;
  } else {
    m4 = address.match(PTK_FROMTILL);
    if (m4) {
      [m0, ptkname, from, till, linechoff] = m4;
    } else {
      m4 = address.match(FROMTILL);
      if (m4) [m0, from, till, linechoff] = m4;
      else return null;
    }
  }
  from = (from || "").slice(1);
  till = (till || "").slice(1);
  linechoff = (linechoff || "").slice(1);
  if (!from && !till && linechoff) {
    if (parseInt(linechoff) > ACTIONPAGESIZE) {
      from = parseInt(linechoff) - Math.floor(ACTIONPAGESIZE / 2);
      till = from + ACTIONPAGESIZE;
    }
  }
  let choff = 0;
  const at = linechoff.indexOf("-");
  if (~at) choff = parseInt(linechoff.slice(at + 1));
  ptkname = ptkname || "";
  ptkname = ptkname.slice(0, ptkname.length - 1);
  return {
    ptkname,
    action,
    from: Math.abs(parseInt(from)) || 0,
    till: Math.abs(parseInt(till)) || 0,
    highlightline: linechoff ? parseInt(linechoff) : -1,
    lineoff: parseInt(linechoff),
    choff
  };
};
function rangeOfElementId(eleidarr) {
  const out2 = Array(), ptk = this;
  let from = 0, to = ptk.header.eot;
  for (let i = 0; i < eleidarr.length; i++) {
    const [ele, id] = eleidarr[i];
    if (ptk.defines[ele]) {
      const idtype = ptk.defines[ele]?.fields.id;
      const _id = idtype?.type == "number" ? parseInt(id) : id;
      const startfrom = bsearchNumber(ptk.defines[ele].linepos, from);
      const at = idtype.values.indexOf(_id, startfrom);
      const first = ptk.defines[ele].linepos[at] || ptk.defines[ele].linepos[0];
      let last = ptk.defines[ele].linepos[at + 1] || ptk.header.eot;
      if (first >= from && idtype.values[at] == _id) {
        from = first;
        if (last > to && to !== ptk.header.eot) last = to;
        else to = last;
        out2.push([first, last]);
      } else {
        return [];
      }
    } else {
      const at = ptk.defines.bk?.fields.id.values.indexOf(ele);
      const at2 = at == -1 ? ptk.defines.ak?.fields.id.values.indexOf(ele) : -1;
      if (i == 0 && (~at || ~at2)) {
        const first = ptk.defines.bk?.linepos[at] || ptk.defines.ak?.linepos[at2];
        let last = ptk.defines.bk?.linepos[at + 1] || ptk.defines.ak?.linepos[at2 + 1];
        if (!last) last = ptk.header.eot;
        out2.push([first, last]);
        from = first;
      }
    }
  }
  if (eleidarr.length > 1) {
    const sstarts = ptk.header.sectionstarts;
    for (let i = 0; i < out2.length; i++) {
      let [first, last] = out2[i];
      const at = bsearchNumber(sstarts, first + 1);
      if (last > sstarts[at]) {
        out2[i][1] = sstarts[at];
      }
    }
  }
  return out2;
}
function rangeOfAddress(address) {
  let addr = address;
  if (typeof address == "string") {
    addr = parseAddress(address);
  }
  const { from, till, action, highlightline } = addr;
  const eleid = parseAction(action);
  const ranges = rangeOfElementId.call(this, eleid);
  if (ranges.length) {
    const [first, last] = ranges[ranges.length - 1];
    return [first, last, from, till, highlightline];
  } else {
    const end = till ? till : from + 1;
    return [0, 0, from, till, highlightline];
  }
}
async function fetchAddress(address) {
  const r = rangeOfAddress.call(this, address);
  if (!r || r[0] == r[1]) return [];
  await this.loadLines([r]);
  const lines = this.slice(r[0], r[1]);
  return lines;
}
async function fetchAddressExtra(address, ext = "num") {
  const r = rangeOfAddress.call(this, address);
  if (!r || r[0] == r[1]) return [];
  const sectionname = this.getSectionName(r[0]);
  const parsectionname = sectionname.replace("off", ext);
  const start = this.getSectionStart(sectionname);
  const parstart = this.getSectionStart(parsectionname);
  if (~parstart) {
    const r0 = r[0] - start + parstart;
    const r1 = r[1] - start + parstart;
    await this.loadLines([r0, r1]);
    let lines = this.slice(r0, r1);
    if (ext == "num") {
      lines = lines.map((it) => unpackInt(it));
    }
    return lines;
  }
  return [];
}
function innertext(address) {
  let addr = address;
  if (typeof address == "string") {
    addr = parseAddress(address);
  }
  const { action } = addr;
  const defines = this.defines;
  const eleidarr = parseAction(action);
  const out2 = [];
  for (let i = 0; i < eleidarr.length; i++) {
    const [ele, id] = eleidarr[i];
    if (!defines[ele] || !defines[ele].fields.id) return "";
    const at = defines[ele].fields.id.values.indexOf(id);
    out2.push(defines[ele]?.innertext?.get(at));
  }
  return out2.join("/");
}
function makeElementId(ele, id) {
  return ele + (!isNaN(parseInt(id)) ? "" : "#") + id;
}
function makeChunkAddress(ck, lineoff = -1) {
  const scrollto = lineoff ? (lineoff >= 5 ? ">" + (lineoff - 1) : "") + (lineoff ? ":" + lineoff : "") : "";
  return "bk" + (parseInt(ck.bk?.id).toString() == ck.bk?.id ? "" : "#") + ck.bk?.id + ".ck" + (!isNaN(parseInt(ck.id)) ? "" : "#") + ck.id + scrollto;
}
function tagAtAction(action) {
  const arr = parseAction(action);
  const out2 = Array();
  let parentlinepos = 0;
  for (let i = 0; i < arr.length; i++) {
    let [tagname, id] = arr[i];
    if (!this.defines[tagname]) continue;
    const taglinepos = this.defines[tagname].linepos;
    const tagidarr = this.defines[tagname].fields.id.values;
    const searchfrom = bsearchNumber(taglinepos, parentlinepos);
    if (typeof tagidarr[0] == "number") id = parseInt(id);
    let at = tagidarr.indexOf(id, searchfrom);
    let rel = at - searchfrom;
    if (at < 0) at = 0;
    if (rel < 0) rel = 0;
    out2.push({ tagname, at, rel });
    parentlinepos = taglinepos[at];
  }
  return out2;
}
function getTagById(ele, id) {
  const E = this.defines[ele];
  if (!this.defines[ele]) return null;
  const at = E.fields.id.values.indexOf(id);
  if (!~at) return null;
  return this.getTagFields(ele, [at])[0];
}
async function fetchTag(ele, id) {
  const range = rangeOfElementId.call(this, [[ele, id]]);
  if (range.length) {
    const [start, end] = range[0];
    await this.loadLines([start, start + 1]);
    const line = this.getLine(start);
    const [text, tags] = parseOfftext(line);
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].name == ele && tags[i].attrs.id == id) {
        return tags[i];
      }
    }
  }
  return null;
}
function tagInRange(ele, from = 0, to = 0) {
  if (!to) {
    to = this.header.eot;
  }
  const linepos = this.defines[ele]?.linepos;
  if (!linepos) return [];
  const at = bsearchNumber(linepos, from);
  let at2 = bsearchNumber(linepos, to);
  if (linepos[at2] > to) at2--;
  return [at, at2];
}
function tagCount(address, tag) {
  const [s, e] = this.rangeOfAddress(address);
  const [first, last] = this.tagInRange(tag, s, e);
  return last - first;
}
function nearestTag(line, tag, fieldname = "") {
  if (typeof tag == "string") tag = this.defines[tag];
  if (!tag) return -1;
  const linepos = tag.linepos;
  if (!linepos) return null;
  const at = bsearchNumber(linepos, line) - 1;
  const adjustat = line < linepos[linepos.length - 1] ? at : at + 1;
  if (!fieldname) return adjustat;
  else return tag.fields[fieldname].values[adjustat];
}
function findClosestTag(typedef, key, value, from = 0) {
  let at = typedef.fields[key].values.indexOf(value);
  while (at >= 0 && typedef.linepos[at] < from) {
    at = typedef.fields[key].values.indexOf(value, at + 1);
  }
  return at;
}
function validId(tagname, id) {
  const V = this.defines[tagname]?.fields;
  if (!V || !V.id) return false;
  if (V.id.type == "number" && typeof id !== "number") id = parseInt(id);
  return !!~V.id.values.indexOf(id);
}
function queryTagFields(tagname, q, fields = []) {
  const tag = this.defines[tagname];
  if (!tag) return [];
  let [qfield, qvalue] = q.split("=");
  if (!qvalue) {
    qvalue = qfield;
    qfield = "id";
  }
  const atarr = Array();
  const tagfield = tag.fields[qfield];
  if (!tagfield) return [];
  let at = tagfield.values.indexOf(qvalue);
  while (~at) {
    atarr.push(at);
    at = tagfield.values.indexOf(qvalue, at + 1);
  }
  return this.getTagFields(tagname, atarr, fields);
}
function getTagFields(tagname, atarr = null, fields = null) {
  const tag = this.defines[tagname];
  if (!tag) return [];
  const res = Array();
  const emitFields = (at) => {
    const out2 = { at };
    if (fields) {
      for (let i = 0; i < fields.length; i++) {
        const f = tag.fields[fields[i]];
        if (f) out2[fields[i]] = f.values[at];
      }
    } else {
      for (let field in tag.fields) {
        if (tag.fields[field].values[at]) out2[field] = tag.fields[field].values[at];
      }
      out2["innertext"] = tag.getInnertext(at);
    }
    return out2;
  };
  if (!atarr) {
    for (let i = 0; i < tag.count; i++) {
      res.push(emitFields(i));
    }
  } else {
    for (let i = 0; i < atarr.length; i++) {
      res.push(emitFields(atarr[i]));
    }
  }
  return res;
}
function alignable(fn) {
  const out2 = Array();
  if (!fn) return out2;
  if (!fn.endsWith(".off")) fn += ".off";
  const H = this.header;
  const at = H.sectionnames.indexOf(fn);
  if (!~at) return out2;
  const length = H.sectionstarts[at + 1] - H.sectionstarts[at];
  for (let i = 0; i < H.sectionnames.length; i++) {
    const n = H.sectionnames[i];
    if (i == at) continue;
    const len = H.sectionstarts[i + 1] - H.sectionstarts[i];
    if (len == length && n.match(/^[a-z]/) && n.endsWith(".off") && n !== H.sectionnames[at]) {
      out2.push(n.replace(".off", ""));
    }
  }
  return out2;
}

// compiler/linkfield.ts
var LinkField = class extends Field {
  constructor(name2, def) {
    super(name2, def);
    this.invertlinks = {};
    this.type = "link";
    this.count = 0;
  }
  validate(value, line) {
    const addr = parseAddress(value);
    const act = parseAction(addr.action);
    if (!this.invertlinks[addr.ptkname]) this.invertlinks[addr.ptkname] = {};
    let invertlinks = this.invertlinks[addr.ptkname];
    if (act.length !== 2) {
    }
    for (let i = 0; i < act.length; i++) {
      let [ele, id] = act[i];
      if (i == 0 && !act[i][1]) {
        ele = "bk";
        id = act[i][0];
      }
      const eleid = makeElementId(ele, id);
      if (i == act.length - 1) {
        if (!invertlinks[ele]) invertlinks[ele] = {};
        if (!invertlinks[ele][id]) invertlinks[ele][id] = [];
        invertlinks[ele][id].push(this.count);
        this.count++;
      } else {
        if (!invertlinks[eleid]) {
          invertlinks[eleid] = {};
        }
        invertlinks = invertlinks[eleid];
      }
    }
    return [0, value];
  }
  serializeLinks(bklinks) {
    const out2 = [];
    for (let bk in bklinks) {
      const links = bklinks[bk];
      for (let targettag in links) {
        const arr = [];
        for (let id in links[targettag]) {
          arr.push([id, links[targettag][id]]);
        }
        arr.sort(alphabetically0);
        const chunks = arr.map((it) => it[0]);
        const idxarr = arr.map((it) => it[1]);
        out2.push(bk);
        out2.push(targettag);
        out2.push(chunks.join(LEMMA_DELIMITER));
        out2.push(packInt2d(idxarr));
      }
    }
    return out2;
  }
  serialize() {
    const attrs = {};
    let section = [].concat(this.values);
    for (let ptkname in this.invertlinks) {
      const out2 = this.serializeLinks(this.invertlinks[ptkname]);
      attrs[ptkname] = out2.length;
      section = section.concat(out2);
    }
    attrs["*"] = this.values.length;
    section.push(JSON.stringify(attrs));
    return section;
  }
  deserialize(section, ptk) {
    const attrs = JSON.parse(section.pop());
    const valuelen = attrs["*"];
    let offset = 0;
    for (let db in attrs) {
      if (db == "*") continue;
      const datalen = attrs[db];
      while (offset < datalen) {
        const bk = section[valuelen + offset];
        const targettagname = section[valuelen + offset + 1];
        const chunks = new StringArray(section[valuelen + offset + 2], { sep: LEMMA_DELIMITER });
        const idxarr = unpackInt2d(section[valuelen + offset + 3]);
        ptk.addBacklinks(this.name, db, bk, targettagname, chunks, idxarr);
        offset += 4;
      }
    }
    const values = section.slice(0, valuelen);
    section.length = 0;
    return values;
  }
};

// compiler/keyfield.ts
var KeyField = class extends Field {
  constructor(name2, def) {
    super(name2, def);
    this.type = "key";
  }
  validate(value, line) {
    const keys = this.keys;
    if (!keys) return ["NO_KEYS" /* NoKeys */, value];
    if (!value) {
      return [this.optional ? 0 : "MANDANTORY" /* Mandatory */, []];
    }
    const at = bsearch(keys, value);
    if (keys[at] !== value) {
      return ["NO_KEY" /* NoKey */, []];
    } else {
      return [0, at];
    }
  }
};

// compiler/keysfield.ts
var KeysField = class extends Field {
  constructor(name2, def) {
    super(name2, def);
    this.type = "keys";
  }
  validate(value, line) {
    const keys = this.keys;
    if (!keys) return ["NO_KEYS" /* NoKeys */, value];
    if (!value) {
      return [this.optional ? 0 : "MANDANTORY" /* Mandatory */, []];
    }
    const items = value.split(",").map((it) => {
      if (!it) return 0;
      const at = bsearch(keys, it);
      if (keys[at] === it) {
        return at;
      } else {
        return -1;
      }
    }).filter((it) => !!it).sort((a, b) => a - b);
    if (items.filter((it) => it === -1).length) {
      return ["NO_KEY" /* NoKey */, []];
    } else {
      return [0, items];
    }
  }
};

// compiler/textfield.ts
var TextField = class extends Field {
  //multiline 
  constructor(name2, def) {
    super(name2, def);
    this.type = "text";
  }
};

// compiler/numberfield.ts
var NumberField = class extends Field {
  constructor(name2, def) {
    super(name2, def);
    this.type = "number";
    this.name = name2;
    this.sortedIndex = null;
  }
  _sort() {
    [this.values, this.sortedIndex] = sortNumberArray(this.values);
  }
  find(value) {
    if (!this.values.length) return -1;
    if (!this.sortedIndex) this._sort();
    const at = bsearch(this.values, value);
    return this.values[at] == value ? this.sortedIndex[at] : -1;
  }
  validate(value, line) {
    const n = parseInt(value);
    if (n.toString() !== value && value?.length) {
      return ["NOT_NUMBER" /* NotANumber */, line];
    }
    if (this.pattern && !value.match(this.pattern)) {
      return ["PATTERN_MISMATCH" /* Pattern */, 0];
    }
    if (this.unique && n >= 0) {
      if (this.unique[value]) {
        return ["NOT_UNIQUE" /* NotUnique */, "tag:" + this.name + ", value:" + value, this.unique[value]];
      } else {
        this.unique[value] = line;
      }
    }
    return [0, parseInt(value)];
  }
};

// compiler/numbersfield.ts
var NumbersField = class extends Field {
  constructor(name2, def) {
    super(name2, def);
    this.type = "numbers";
  }
  validate(value, line) {
    if (typeof value == "undefined") {
      console.log("undefined", line);
    }
    const items = value.split(",").filter((it) => !!it);
    const out2 = [];
    for (let i = 0; i < items.length; i++) {
      const v = items[i];
      const n = parseInt(items[i]);
      if (n.toString() !== v && v.length) {
        return ["NOT_NUMBER" /* NotANumber */, line];
      }
      if (this.pattern && !v.match(this.pattern)) {
        return ["PATTERN_MISMATCH" /* Pattern */, line];
      }
      out2.push(n);
    }
    return [0, out2];
  }
};

// compiler/filelineposfield.ts
var FileLinePosField = class extends Field {
  constructor(name2, def) {
    super(name2, def);
    this.type = "filelinepos";
    this.prevfn = "";
  }
  validate(value, line, compiledFiles) {
    const arr = value.split(",");
    const out2 = [];
    let linestart = 0;
    for (let i = 0; i < arr.length; i++) {
      const v = parseInt(arr[i]);
      if (isNaN(v)) {
        const f = compiledFiles[arr[i]];
        if (!f) {
          throw "no such file " + arr[i];
        }
        linestart = f.linestart;
      } else {
        out2.push(linestart + v);
      }
    }
    return [0, out2];
  }
};

// compiler/groupfield.ts
var GroupField = class extends Field {
  //multiline 
  constructor(name2, def) {
    super(name2, def);
    this.type = def.type || "range";
    this.ranges = {};
  }
  validate(value, line) {
    if (!value) {
      return [this.optional ? 0 : VError.Mandatory, []];
    }
    if (!this.ranges[value]) this.ranges[value] = [];
    this.ranges[value].push(line);
    if (isNaN(value)) {
      throw "group index should be numeric";
    }
    return [0, parseInt(value)];
  }
  serialize(out2) {
    const keys = Object.keys(this.ranges);
    keys.sort(alphabetically);
    out2.push(keys.join(LEMMA_DELIMITER));
    const delta2d = [];
    for (let i = 0; i < keys.length; i++) {
      delta2d.push(this.ranges[keys[i]]);
    }
    out2.push(packIntDelta2d(delta2d));
    out2.push();
  }
  deserialize(section) {
    const keys = (section.shift() || "").split(LEMMA_DELIMITER);
    const arr = unpackIntDelta2d(section.shift());
    for (let i = 0; i < keys.length; i++) {
      this.ranges[keys[i]] = arr[i];
    }
  }
};

// compiler/fielder.ts
function createField(name2, def, primarykeys, ownkeys = false) {
  if (typeof def !== "string") {
    return new Field(name2, def);
  }
  let v;
  const m4 = def.match(/([a-z_]+):?([a-z_]*)\/?(.*)/);
  if (!m4) {
    return;
  }
  const typename = m4[1], foreign = m4[2];
  let pat = m4[3], pattern;
  if (pat) {
    const at2 = pat.lastIndexOf("/");
    let regopts = "";
    if (at2 > 0) {
      regopts = pat.slice(at2 + 1);
      pat = pat.slice(0, at2);
    }
    pattern = new RegExp(pat, regopts);
  }
  if (typename === "number") v = new NumberField(name2, { pattern, foreign });
  else if (typename === "numbers") v = new NumbersField(name2, { pattern, foreign });
  else if (typename === "filelinepos") v = new FileLinePosField(name2, { pattern, foreign });
  else if (typename === "unique_number") v = new NumberField(name2, { pattern, unique: true, optional: false, foreign });
  else if (typename === "unique") v = new TextField(name2, { pattern, unique: true, optional: false, foreign });
  else if (typename === "string") v = new Field(name2, { pattern, foreign });
  else if (typename === "link") v = new LinkField(name2, { pattern, foreign });
  else if (typename === "text") v = new TextField(name2, { pattern });
  else if (typename === "key") {
    const keys = primarykeys && primarykeys[foreign] || ownkeys;
    v = new KeyField(name2, { keys, pattern, foreign, optional: false });
  } else if (typename === "keys") {
    const keys = primarykeys && primarykeys[foreign] || ownkeys;
    v = new KeysField(name2, { keys, pattern, foreign });
  } else if (typename === "group") {
    v = new GroupField(name2, { type: typename });
  } else if (typename === "note") {
    const keys = primarykeys && primarykeys[foreign] || ownkeys;
    v = new Field(name2, { type: typename, keys, pattern, foreign });
  } else if (typename === "confer") {
    v = new Field(name2, { type: typename, foreign });
  }
  if (!v) v = new Field(name2, {});
  return v;
}
function validate_z(offtext, tag) {
  const depth = parseInt(tag.name.slice(1, 2), 36) - 10;
  if (isNaN(depth)) return;
  if (!(depth == this.prevdepth || depth == this.prevdepth + 1 || depth < this.prevdepth)) {
    const msg = "\u76EE\u5F54\u6DF1\u5EA6\u9519\u8BEF " + this.prevdepth + "+1!=" + depth;
    this.errors.push({ msg, offset: tag.offset, prev: this.prevzline });
  }
  let text = offtext.tagText(tag);
  const closebracket = closeBracketOf(text);
  if (text.slice(text.length - 1) == closebracket) text = text.slice(1, text.length - 1);
  const line = this.compiledLine + this.line;
  this.toc.push({ depth, text, key: this.zcount, line });
  this.zcount++;
  this.prevzline = line;
  this.prevdepth = depth;
}
function addtag_y(offtext, tag) {
  const typedef = this.typedefs.y;
  typedef.linepos.push(this.compiledLine + this.line);
  const V = typedef.fields.id;
  V.values.push(tag.name.slice(1) + (tag.attrs.id || ""));
  let text = removeBracket(offtext.tagText(tag));
  typedef.innertext.push(text);
  typedef.count++;
}
function addtag_x(offtext, tag) {
  const typedef = this.typedefs.x;
  typedef.linepos.push(this.compiledLine + this.line);
  const V = typedef.fields.id;
  const id = tag.attrs.id + (tag.attrs.ln ? "@" + tag.attrs.ln : "") || "";
  V.values.push(tag.name.slice(1) + id);
  let text = removeBracket(offtext.tagText(tag));
  typedef.innertext.push(text);
  typedef.count++;
}

// linebase/column.ts
var Column = class {
  fieldvalues;
  fieldnames;
  fieldsdef;
  name;
  attrs;
  caption;
  keys;
  primarykeys;
  onError;
  tokenfield;
  tokentable;
  runtimetokentable;
  typedef;
  constructor(opts = {}) {
    this.fieldvalues = [];
    this.fieldnames = [];
    this.fieldsdef = [];
    this.name = "";
    this.keys = null;
    this.primarykeys = opts.primarykeys || {};
    this.onError = opts.onError;
    this.typedef = opts.typedef;
    this.tokenfield = -1;
    this.tokentable = {};
    this.runtimetokentable = Array();
  }
  //lexicon :: key(sorted primary key) = payload
  addColumn(name2) {
    this.fieldnames.push(name2);
    this.fieldvalues.push([]);
  }
  tokenizeField(value) {
    const tokenized = tokenize(value);
    for (let i = 0; i < tokenized.length; i++) {
      const { text, type } = tokenized[i];
      if (type > 16 /* SEARCHABLE */ && !this.tokentable[text]) {
        this.tokentable[text] = true;
      }
    }
  }
  addRow(fields, nrow, skipFirstField, compiledFiles) {
    let i = 0;
    if (skipFirstField) i++;
    for (; i < this.fieldsdef.length; i++) {
      const F = this.fieldsdef[i];
      const [err, value] = F.validate(fields[i], nrow, compiledFiles);
      if (err) {
        this.onError && this.onError(err, this.fieldnames[i] + " " + fields[i], -1, nrow);
      }
      this.fieldvalues[i].push(value || "");
      if (i + 1 == this.tokenfield) this.tokenizeField(value);
    }
  }
  createFields(typedef) {
    if (typedef) for (let idx2 in typedef) {
      const fieldtype = typedef[idx2] || "key=string";
      const [name2, def] = fieldtype.split("=");
      this.addColumn(name2);
      const field = createField(name2, def || {}, this.primarykeys, this.keys);
      this.fieldsdef.push(field);
    }
  }
  deserialize(section) {
    if (!section.length) return;
    const firstline = section.shift();
    const [text, tags] = parseOfftext(firstline);
    if (!section.length) return;
    this.attrs = tags[0]?.attrs;
    this.name = this.attrs.name;
    this.caption = this.attrs.caption;
    const typedef = text.split("	");
    this.createFields(typedef);
    if (this.attrs.keytype == "serial") {
      this.keys = null;
    } else {
      this.keys = new StringArray(section.shift(), { sep: LEMMA_DELIMITER });
    }
    if (this.attrs.tokenfield) {
      this.tokenfield = parseInt(this.attrs.tokenfield);
      this.runtimetokentable = (section.shift() || "").split(LEMMA_DELIMITER);
      this.runtimetokentable.sort(alphabetically);
    }
    let idx2 = 0, usesection = false;
    for (let fieldname in this.fieldsdef) {
      const field = this.fieldsdef[fieldname];
      if (field.type === "number") {
        this.fieldvalues[idx2] = unpackInt(section.shift());
      } else if (field.type === "numbers") {
        this.fieldvalues[idx2] = unpackIntDelta2d(section.shift());
      } else if (field.type === "filelinepos") {
        this.fieldvalues[idx2] = unpackIntDelta2d(section.shift());
      } else if (field.type === "keys") {
        this.fieldvalues[idx2] = unpackIntDelta2d(section.shift());
      } else if (field.type === "key") {
        this.fieldvalues[idx2] = unpackInt(section.shift());
      } else if (field.type === "string") {
        this.fieldvalues[idx2] = section.shift().split(LEMMA_DELIMITER);
      } else if (field.type === "group") {
        field.deserialize(section);
        this.fieldvalues[idx2] = unpackInt(section.shift());
      } else if (field.type === "text") {
        usesection = true;
        this.fieldvalues[idx2] = section;
      }
      if (!this[field.name]) {
        this[field.name] = this.fieldvalues[idx2];
      }
      idx2++;
    }
    if (!usesection && section.length) {
      console.log("section not consumed");
    }
  }
  fromStringArray(sa, attrs = {}, from = 1, compiledFiles) {
    const allfields = Array();
    let line = sa.first();
    let textstart = 0;
    let skipFirstField = false;
    while (from > 0) {
      line = sa.next();
      from--;
    }
    while (line || line === "") {
      const fields = line.split("	");
      allfields.push(fields);
      line = sa.next();
    }
    if (attrs.keytype !== "serial") {
      allfields.sort(alphabetically0);
      skipFirstField = true;
      this.keys = allfields.map((it) => it[0]);
    }
    this.createFields(this.typedef);
    if (attrs.tokenfield) {
      this.tokenfield = parseInt(attrs.tokenfield || -1);
      this.tokentable = {};
      if (this.tokenfield === 0) this.tokenizeField(this.keys.join(LEMMA_DELIMITER));
    }
    if (!this.fieldnames.length) {
      throw "missing typedef";
    }
    for (let i = 0; i < allfields.length; i++) {
      this.addRow(allfields[i], i + 1, skipFirstField, compiledFiles);
    }
    const out2 = Array();
    if (this.keys) out2.push(this.keys.join(LEMMA_DELIMITER));
    if (this.tokenfield > -1) {
      out2.push(Object.keys(this.tokentable).join(LEMMA_DELIMITER));
    }
    for (let i = 0; i < this.fieldnames.length; i++) {
      const V = this.fieldsdef[i];
      if (V.type == "number" || V.type == "line") {
        const numbers = this.fieldvalues[i].map((it) => parseInt(it) || 0) || [];
        out2.push(packInt(numbers));
      } else if (V.type == "numbers" || V.type == "filelinepos") {
        const numbers = this.fieldvalues[i] || [];
        if (numbers.length == 1) {
          throw "must have more than one array";
        }
        out2.push(packIntDelta2d(numbers));
      } else if (V.type == "keys") {
        const numnums = this.fieldvalues[i] || [];
        out2.push(packIntDelta2d(numnums));
      } else if (V.type == "key") {
        const nums = this.fieldvalues[i] || [];
        out2.push(packInt(nums));
      } else if (V.type == "string") {
        out2.push(this.fieldvalues[i].join(LEMMA_DELIMITER));
      } else if (V.type == "group") {
        V.serialize(out2);
        out2.push(packInt(this.fieldvalues[i]));
      } else if (V.type == "text") {
        if (i !== this.fieldnames.length - 1) {
          throw "multiline text fieldtype must be the last, " + this.fieldnames[i];
        }
        textstart = out2.length;
        for (let j2 = 0; j2 < this.fieldvalues[i].length; j2++) {
          out2.push(this.fieldvalues[i][j2]);
        }
      } else if (V.type) {
        this.onError && this.onError("UNKNOWN_TYPE" /* UnknownType */, V.type);
      }
    }
    if (textstart == 0) textstart = out2.length;
    return [out2, textstart];
  }
  fromTSV(buffer, attrs, from = 1) {
    const sa = new StringArray(buffer, { sequencial: true });
    return this.fromStringArray(sa, attrs, from, this.compiledFiles);
  }
  toTSV() {
    if (!this.keys) return "";
    let key = this.keys.first();
    let at = 0;
    const out2 = Array();
    while (key) {
      const rows = [key];
      for (let i = 1; i < this.fieldvalues.length; i++) {
        rows.push(this.fieldvalues[i][at]);
      }
      key = this.keys.next();
      at++;
      out2.push(rows.join("	"));
    }
    return out2.join("\n");
  }
  findKey(key) {
    if (this.keys) {
      return this.keys.find(key.toString());
    } else {
      return parseInt(key) - 1;
    }
  }
  fieldsByKey(key) {
    const at = this.findKey(key);
    if (!key) return null;
    if (~at) {
      const out2 = { key };
      for (let i = 0; i < this.fieldvalues.length; i++) {
        out2[this.fieldnames[i]] = this.fieldvalues[i][at];
      }
      return out2;
    } else return null;
  }
  fieldByKey(key, fieldname) {
    const at = this.findKey(key);
    if (!key) return null;
    if (~at) {
      const out2 = { key };
      const at2 = this.fieldnames.indexOf(fieldname);
      if (~at2) {
        return this.fieldvalues[at2][at];
      } else {
        return this.fieldvalues[1][at];
      }
    } else return null;
  }
  getKey(i) {
    if (this.keys) {
      return this.keys.get(i);
    } else {
      return (i + 1).toString();
    }
  }
};

// compiler/typedef.ts
var reservedAttributes = {
  //是指令不是屬性名, 
  caption: true,
  lazy: false,
  key: true,
  field: true,
  text: true,
  type: true
  //name of painter
};
var Typedef = class {
  count;
  fields;
  mandatory;
  tagname;
  linepos;
  innertext;
  //this is not good, runtime and 
  _innertext;
  typedefs;
  column;
  attrs;
  constructor(attrs, tagname, primarykeys, typedefs) {
    this.fields = {};
    this.mandatory = {};
    this.tagname = tagname;
    this.linepos = [];
    this.typedefs = typedefs;
    this.innertext = [];
    for (let aname in attrs) {
      const def = attrs[aname];
      const opts = typeof def == "string" ? def : { optional: false };
      const V = createField(tagname, opts, primarykeys);
      if (V) this.fields[aname] = V;
      if (V && !V.optional && !reservedAttributes[aname]) this.mandatory[aname] = true;
    }
    this.attrs = attrs;
    this.column = "";
    this.count = 0;
    if (this.attrs.resetby) {
      const resettingparents = this.attrs.resetby.split(",");
      for (let i = 0; i < resettingparents.length; i++) {
        const parent = this.typedefs[resettingparents[i]];
        if (parent) {
          if (!parent.attrs.reset) {
            parent.attrs.reset = tagname;
          } else {
            const arr = parent.attrs.reset.split(",");
            arr.push(tagname);
            parent.attrs.reset = unique(arr).join(",");
          }
        } else {
          console.log("not such parent tag", resettingparents[i]);
        }
      }
    }
  }
  resetChildTag() {
    if (this.attrs.reset) {
      const resetting = this.attrs.reset.split(",");
      for (let i = 0; i < resetting.length; i++) {
        const childtypedef = this.typedefs[resetting[i]];
        if (childtypedef) {
          for (let fieldname in childtypedef.fields) {
            const field = childtypedef.fields[fieldname];
            if (field.unique) {
              field.resetUnique();
            }
          }
        }
      }
    }
  }
  validateFields(tag, line, onError, compiledFiles) {
    let touched = false, newtag;
    this.count++;
    for (let aname in this.attrs) {
      const V = this.fields[aname];
      let value = tag.attrs[aname];
      if (V && !V.foreign) V.values.push(tag.attrs[aname]);
      let [err, newvalue, refline] = V && V.validate(tag.attrs[aname], line, compiledFiles) || [0, value, -1];
      if (err) {
        onError(err, newvalue, refline);
      } else {
        if (!touched) {
          newtag = Object.assign({}, tag);
          newtag.attrs = Object.assign({}, tag.attrs);
        }
        if (Array.isArray(newvalue)) newvalue = newvalue.join(",");
        newtag.attrs[aname] = newvalue;
        touched = true;
      }
    }
    return newtag;
  }
  validateTag(offtext, tag, line, compiledLine, compiledFiles, onError) {
    if (this.fields.id || this.fields["@"] || this.fields.ln || this.attrs.savelinepos) {
      this.linepos.push(compiledLine + line);
    }
    if (this.attrs.bracket) {
      let tagtext = offtext.tagText(tag);
      if (!tagtext) {
        tagtext = offtext.plain.trim();
      }
      if (this.attrs.bracket !== "true") tagtext = removeBracket(tagtext);
      this.innertext.push(tagtext.slice(0, 15));
    }
    for (let aname in this.mandatory) {
      if (!tag.attrs.hasOwnProperty(aname) && this.mandatory[aname]) {
        onError("MANDANTORY" /* Mandatory */, tag.name + " " + aname);
      }
    }
    this.resetChildTag();
    const newtag = this.validateFields(tag, line, onError, compiledFiles);
    return newtag;
  }
  deserialize(section, ptk, sectionmame) {
    const attrline = section.shift();
    const attrs = attrline ? attrline.split(LEMMA_DELIMITER) : [];
    if (section.length > attrs.length) {
      this.linepos = unpackIntDelta(section.shift());
      this.count = this.linepos.length;
    }
    if (!section.length) return;
    if (this.fields.bracket) {
      this._innertext = new StringArray(section.shift() || "", { sep: LEMMA_DELIMITER });
    }
    for (let i = 0; i < attrs.length; i++) {
      const aname = attrs[i];
      const V = this.fields[aname];
      if (!V) {
        console.error("unknown type " + aname);
        continue;
      }
      if (V?.type === "number") {
        V.values = unpackInt(section.shift());
      } else if (V?.type === "text") {
        V.values = section.length ? (section.shift() || "").split("	") : [];
      } else if (V?.deserialize) {
        V.values = V.deserialize(section, ptk);
      }
    }
    if (section.length) {
      console.log("unconsumed section lines", section.length, sectionmame);
    }
  }
  serialize() {
    const attrs = Array(), out2 = Array();
    if (!this.count) return null;
    if (this.linepos.length || this.fields.bracket) {
      out2.push(packIntDelta(this.linepos));
    }
    if (this.fields.bracket) {
      out2.push((this.innertext || []).join(LEMMA_DELIMITER));
    }
    for (let aname in this.fields) {
      const V = this.fields[aname];
      if (V.foreign) continue;
      if (V.type == "number") {
        attrs.push(aname);
        out2.push(packInt(V.values.map((it) => parseInt(it) || 0)));
      } else if (V.type == "text") {
        attrs.push(aname);
        out2.push(V.values.join("	"));
      } else if (V.serialize) {
        attrs.push(aname);
        const arr = V.serialize();
        for (let i = 0; i < arr.length; i++) {
          out2.push(arr[i]);
        }
      }
    }
    out2.unshift(attrs.join(LEMMA_DELIMITER));
    return out2.length ? out2.join("\n") : null;
  }
  getInnertext(i) {
    return this._innertext?.get(i) || "";
  }
};

// compiler/predefines.ts
var predefines = {
  generic: `^:ak<id=unique bracket=false reset=n>
^:bk<id=unique heading=text bracket=false reset=ck,dk,juan aligncaption=text>
^:ck<id=unique heading=text bracket=false>
^:dk<id=unique>
^:p<id=text>
^:n<id=number>
^:m<id=text>
^:juan<id=number>
^:o<@=link>
^:j<@=link>
^:k<id=text>
^:wiki
^:png<id=text src=text>
^:svg<id=text>
^:uiicon<id=text>
^:jpg<src=text>
^:ad
^:bc
^:gatha
^:au
^:cut
^:paste
^:notranslation
^:ver<savelinepos=true>
^:f<id=text>
^:i<bracket=false @=text savelinepos=true>
^:sponsor<savelinepos=true>
^:https<bracket=false onclick=gourl>
^:fn<id=text>
^:t
^:x<id=text @=text bracket=false savelinepos=true>
^:y<id=unique bracket=false savelinepos=true>
^:connect<source=text target=text book=text>
^:ln<from=text to=text pin=text>
^:bb
^:audio
^:clip
^:img
^:sz
^:sc
^:missing
^:misalign
^:ff
^:part
^:vaggo
^:errorpunc
^:puncerror
^:error
^:doubt
^:tofix
^:add
^:pg
^:swap
^:move
^:baidu
^:note
^:miss
^:person
^:diff
^:corr`,
  cbeta: `^:ak<id=unique bracket=false>
^:bk<id=unique heading=text bracket=false reset=ck,p>
^:ck<id=unique heading=text bracket=false>
^:https<bracket=false onclick=gourl>
^:p<id=text>
^:f<id=text>
^:ver<savelinepos=true>
^:fn<id=number>
^:fm<id=text>
^:k<id=text>
^:j<@=link>
^:v
^:h
^:mc
^:l`,
  cs: `^:ak<id=unique bracket=false>
^:bk<id=unique heading=text bracket=false>
^:ck<id=unique heading=text bracket=false>
^:n<id=unique resetby=bk>
^:f<id=number>
^:h
^:sz
^:ckan
^:cksn
^:https<bracket=false onclick=gourl>
^:t`,
  zidian: `^:ak<id=unique bracket=false reset=ck>
^:bk<id=unique heading=text bracket=false reset=n>
^:ck<id=unique heading=text bracket=false>
^:f<id=number>
^:https<bracket=false onclick=gourl>
^:j<@=link>
^:o<@=link>
`,
  subtitle: `^:ak<id=unique bracket=false reset=n>
^:bk<id=unique heading=text bracket=false reset=ck>
^:ck<id=unique heading=text bracket=false>
^:mpeg<id=text savelinepos=true>
^:ts<id=range>
^:ver<savelinepos=true>`
};

// compiler/footnotes.ts
var groupnotes = (notekeys) => {
  const Notes = {};
  for (let i = 0; i < notekeys.length; i++) {
    const m4 = notekeys[i].match(/(\d+)\.(.+)/);
    if (!m4) throw "invalid note " + notekeys[i] + " filename:" + filename;
    if (!Notes[m4[1]]) Notes[m4[1]] = {};
    if (Notes[m4[1]][m4[2]]) {
      throw "repeat note " + notekeys[i];
    }
    Notes[m4[1]][m4[2]] = 0;
  }
  return Notes;
};
function checkInlineFootnote(attrs, notekeys) {
  const Notes = groupnotes(notekeys);
  const tagname = attrs.footnote || "bk";
  const tag = this.typedefs[tagname];
  const itag = this.typedefs.i;
  for (let i = 0; i < tag.fields.id.values.length; i++) {
    const groupid = tag.fields.id.values[i];
    const from = tag.linepos[i];
    const to = tag.linepos[i + 1];
    const start = bsearchNumber(itag.linepos, from);
    let end = bsearchNumber(itag.linepos, to);
    if (itag.linepos[start] < from) continue;
    if (!end || itag.linepos[end] < to) end = itag.linepos.length;
    const offtextfootnote = itag.innertext.slice(start, end);
    for (let j2 = start; j2 < end; j2++) {
      if (itag.fields.ln && itag.fields.ln.values[j2]) {
        offtextfootnote[j2 - start] = itag.fields.ln.values[j2];
      }
    }
    for (let j2 = 0; j2 < offtextfootnote.length; j2++) {
      let gid = groupid;
      let f = offtextfootnote[j2];
      let at = f.indexOf(".");
      if (at > 0) {
        gid = f.slice(0, at);
        f = f.slice(at + 1);
        if (!f) {
          f = itag.innertext[j2 + start];
        }
      }
      if (!Notes[gid]) {
        console.log("no such id", gid, f, tagname, tag.fields.id.values);
        continue;
      }
      if (Notes[gid].hasOwnProperty(f)) {
        Notes[gid][f]++;
      } else {
        console.log(tagname + "#" + groupid, "not found", offtextfootnote[j2], j2);
      }
    }
  }
}
function checkFootnote(attrs, notekeys, filename2) {
  if (!attrs.footnote) return;
  const tagname = attrs.footnote || "bk";
  const tag = this.typedefs[tagname];
  const ftag = this.typedefs.f;
  if (!tag) {
    console.log("unknown tag", tag, "checkfootnote");
    return;
  }
  if (this.typedefs.i) {
    checkInlineFootnote.call(this, attrs, notekeys);
  }
  if (!ftag) {
    console.log("no f tag in source");
    return;
  }
  if (tagname == "bk") {
    const at = tag.fields.id.values.indexOf(attrs.name);
    const from = tag.linepos[at];
    const to = tag.linepos[at + 1] || this.compiledLine;
    const start = bsearchNumber(ftag.linepos, from);
    let end = bsearchNumber(ftag.linepos, to);
    if (ftag.linepos[start] > from) {
      if (!end || ftag.linepos[end] < to) end = ftag.linepos.length;
      const offtextfootnote = ftag.fields.id.values.slice(start, end).sort(alphabetically);
      if (offtextfootnote.join() !== notekeys.join()) {
        console.log(filename2, "footnote missing match", arraydiff(notekeys, offtextfootnote), notekeys.join());
      }
    }
  } else {
    const Notes = groupnotes(notekeys);
    for (let key in Notes) {
      const notes = Notes[key];
      const at = tag.fields.id.values.indexOf(key);
      const from = tag.linepos[at];
      const to = tag.linepos[at + 1] || this.compiledLine;
      const start = bsearchNumber(ftag.linepos, from);
      let end = bsearchNumber(ftag.linepos, to);
      const offtextfootnote = ftag.fields.id.values.slice(start, end).sort(alphabetically);
      for (let i = 0; i < offtextfootnote.length; i++) {
        const id = offtextfootnote[i];
        if (!notes.hasOwnProperty(id)) {
          console.log("no note for ^f" + id, "in ^" + tagname + key);
        } else notes[id]++;
      }
    }
  }
}

// compiler/compiler.ts
var sourceType = (firstline, filename2 = "") => {
  const at = firstline.indexOf("\n");
  let lazy = true, name2 = "", caption2 = "", tag;
  let consumed = false;
  let sourcetype = "unknown" /* Unknown */;
  if (filename2) {
    if (filename2.endsWith(".tsv")) sourcetype = "tsv" /* TSV */;
    if (filename2.endsWith(".off")) sourcetype = "txt" /* Offtext */;
  }
  firstline = at > -1 ? firstline.slice(0, at) : firstline;
  const [text, tags] = parseOfftext(firstline);
  if (tags.length && tags[0].name == ":") {
    const attrs = tags[0].attrs;
    if (attrs.hasOwnProperty("lazy")) lazy = !!attrs.lazy;
    sourcetype = tags[0].attrs.type?.toLowerCase() || sourcetype;
    name2 = attrs.name;
    caption2 = attrs.caption;
    consumed = true;
    if (sourcetype == "tsv") {
      consumed = false;
      lazy = false;
    }
    tag = tags[0];
  }
  return { sourcetype, tag, lazy, name: name2, caption: caption2, consumed };
};
var CompiledFile = class {
  errors;
  tagdefs;
  processed;
  sourcetype;
  constructor() {
    this.errors = [];
    this.tagdefs = [];
    this.processed;
    this.sourcetype = "";
  }
};
var Compiler = class {
  typedefs;
  ptkname;
  compilingname;
  line;
  compiledLine;
  compiledFiles;
  primarykeys;
  errors;
  stopcompile;
  toc;
  zcount;
  prevzline;
  prevdepth;
  tagdefs;
  backtransclusions;
  constructor(opts = {}) {
    this.reset(opts);
  }
  reset(opts = {}) {
    this.ptkname = "";
    this.compilingname = "";
    this.line = 0;
    this.compiledLine = 0;
    this.compiledFiles = {};
    this.primarykeys = {};
    this.errors = [];
    this.typedefs = {};
    this.stopcompile = false;
    this.tagdefs = [];
    this.backtransclusions = {};
    this.toc = [];
    this.zcount = 0;
    this.prevzline = 0;
    this.prevdepth = 0;
  }
  onError(code, msg, refline = -1, line) {
    this.errors.push({ name: this.compilingname, line: line || this.line, code, msg, refline });
    if (this.errors.length >= MAX_VERROR) this.stopcompile = true;
  }
  setPredefine(name2 = "generic") {
    const predefine = predefines[name2] || "";
    this.compileOfftext(predefine, this.tagdefs);
  }
  compileOfftext(str, tagdefs) {
    const at = str.indexOf("^");
    if (at == -1) return str;
    const ot = new Offtext(str);
    for (let i = 0; i < ot.tags.length; i++) {
      const tag = ot.tags[i];
      let tagstr = str.slice(tag.offset, tag.end);
      if (tag.name[0] == ":" && tag.name.length > 1) {
        const newtagname = tag.name.slice(1);
        this.typedefs[newtagname] = new Typedef(tag.attrs, newtagname, this.primarykeys, this.typedefs);
        tagdefs.push(tagstr);
      } else {
        if (tag.name[0] == "z") {
          validate_z.call(this, ot, tag);
        } else if (tag.name[0] == "y") {
          addtag_y.call(this, ot, tag);
        } else if (tag.name[0] == "x") {
          addtag_x.call(this, ot, tag);
        } else if (tag.name !== ":") {
          if (!tag.name) {
            const innertext2 = ot.tagText(tag, true);
            const [t, link] = parseTransclusion("^[" + innertext2 + "]");
            if (!this.backtransclusions[link]) {
              this.backtransclusions[link] = new Array();
            }
            this.backtransclusions[link].push(this.compiledLine + this.line);
          } else {
            const typedef = this.typedefs[tag.name];
            if (!typedef) {
              console.error("unknown tag\n", str, tag.name);
            } else {
              const newtag = typedef.validateTag(ot, tag, this.line, this.compiledLine, this.compiledFiles, this.onError.bind(this));
              if (newtag) {
                str = updateOfftext(str, tag, newtag);
              }
            }
          }
        }
      }
    }
    return str;
  }
  clearCompiled(filename2) {
    delete this.compiledFiles[filename2];
  }
  compileBuffer(buffer, filename2) {
    if (!buffer) return this.onError("EMPTY_BUFFER" /* Empty */);
    if (!filename2) return this.onError("PTK_NONAME" /* PtkNoName */);
    let samepage = false, tagdefs = Array(), attributes = {};
    const sa = new StringArray(buffer, { sequencial: true });
    const firstline = sa.first() || "";
    const { sourcetype, tag, lazy, name: name2, caption: caption2, consumed } = sourceType(firstline, filename2);
    if (sourcetype == "txt" && consumed) tagdefs.push(firstline);
    let compiledname = name2 || filename2;
    let textstart = 0;
    this.compilingname = filename2;
    this.stopcompile = false;
    let processed = Array();
    if (tag?.name == ":") {
      if (tag.attrs.ptk) {
        if (this.ptkname && this.ptkname !== tag.attrs.ptk) {
          this.onError("PTK_NAMED" /* PtkNamed */, this.ptkname);
        } else {
          this.ptkname = tag.attrs.ptk;
        }
      }
      if (tag.attrs.type === "txt" || filename2 == "0.off") {
        this.setPredefine(tag.attrs.define || tag.attrs.template);
      }
      attributes = tag.attrs;
    }
    const linestart = this.compiledLine;
    if (sourcetype === "tsv" /* TSV */) {
      const [text, tags] = parseOfftext(firstline);
      const attrs = tags[0]?.attrs || {};
      const typedef = text.split("	");
      const columns = new Column({ typedef, primarykeys: this.primarykeys, onError: this.onError.bind(this) });
      const [serialized, _textstart] = columns.fromStringArray(sa, attrs, 1, this.compiledFiles);
      if (!attrs.hasOwnProperty("nocheck")) {
        checkFootnote.call(this, attrs, columns.keys, filename2);
      }
      textstart = _textstart;
      if (serialized) {
        compiledname = attrs?.name || filename2;
        serialized.unshift(firstline);
        if (attrs?.name) this.primarykeys[attrs.name] = columns.keys;
        this.compiledLine += serialized.length;
        processed = serialized;
        textstart++;
        samepage = true;
      } else {
        processed = [];
      }
    } else if (sourcetype === "txt" /* Offtext */) {
      const out2 = Array();
      let linetext = sa.first();
      if (consumed) linetext = sa.next();
      this.line = 0;
      while (linetext || linetext === "") {
        const o = this.compileOfftext(linetext, tagdefs);
        if (o || o == "") {
          out2.push(o);
          this.line++;
        }
        linetext = sa.next();
        if (this.stopcompile) break;
      }
      this.compiledLine += out2.length;
      processed = out2;
    } else {
      if (compiledname.endsWith(".num")) {
        let linetext = sa.first();
        const out2 = Array();
        while (linetext || linetext === "") {
          const o = packInt(linetext.split(",").map((it) => parseInt(it || "0")));
          out2.push(o);
          linetext = sa.next();
          if (this.stopcompile) break;
        }
        this.compiledLine += out2.length;
        textstart = out2.length;
        processed = out2;
      } else {
        throw "unknown extension " + compiledname;
      }
    }
    this.compiledFiles[filename2] = {
      name: compiledname,
      caption: caption2,
      lazy,
      sourcetype,
      processed,
      textstart,
      errors: this.errors,
      samepage,
      tagdefs,
      attributes,
      linestart
    };
    return this.compiledFiles[filename2];
  }
};
var serializeBackTransclusion = (backtransclusions) => {
  const keys = Object.keys(backtransclusions);
  const out2 = [];
  if (!keys.length) return [];
  out2.push(keys.join(LEMMA_DELIMITER));
  for (let i = 0; i < keys.length; i++) {
    const pos = backtransclusions[keys[i]];
    out2.push(packIntDelta(pos));
  }
  return out2;
};

// compiler/toc.ts
var serializeToc = (toc) => {
  const out2 = Array(), texts = Array(), lines = Array(), depths = Array();
  for (let i = 0; i < toc.length; i++) {
    const { depth, line, text } = toc[i];
    depths.push(depth);
    lines.push(line);
    texts.push(text.replace(/\t/g, " "));
  }
  out2.push("^:<type=toc>");
  out2.push(packIntDelta(lines));
  out2.push(packInt(depths));
  out2.push(texts.join("	"));
  return out2;
};
var TableOfContent = class {
  lines;
  depths;
  texts;
  constructor(section) {
    this.lines = unpackIntDelta(section.shift());
    this.depths = unpackInt(section.shift());
    this.texts = new StringArray(section.shift());
  }
};
var depthOfId = (str) => {
  return str.split(/(\d+)/).filter((it) => !!it).length;
};
function buildTocTag(toctags) {
  for (let i = 0; i < toctags.length; i++) {
    const toctag = toctags[i];
    const out2 = Array();
    if (!this.defines[toctag]) {
      console.log("not such tag", toctag);
      continue;
    }
    const values = this.defines[toctag].fields.id.values;
    for (let j2 = 0; j2 < values.length; j2++) {
      out2.push(depthOfId(values[j2]));
    }
    this.defines[toctag].depths = out2;
  }
}

// compiler/linker.ts
var writeTypedefs = (lbaser, typedefs) => {
  for (let tag in typedefs) {
    const typedef = typedefs[tag];
    const serialized = typedef.serialize();
    if (tag == "ak" && !typedef.linepos.length) {
      console.log("missing ^ak");
    }
    if (serialized) {
      lbaser.append(serialized, { name: "^" + tag, newpage: true, samepage: true, type: "tag" });
    }
  }
};
var makeLineBaser = async (sourcebuffers, compiler, contentGetter = null) => {
  const lbaser = new LineBaser();
  if (compiler) compiler.reset();
  else compiler = new Compiler();
  const indexer = new Indexer();
  const alltagdefs = compiler.tagdefs.concat([]);
  for (let i = 0; i < sourcebuffers.length; i++) {
    const buf = sourcebuffers[i];
    if (!buf) {
      console.log("empty");
      continue;
    }
    let text = buf.text || "";
    if (!text && contentGetter) {
      const content = await contentGetter(i);
      text = content.text || "";
    }
    if (buf.name.endsWith(".css")) continue;
    compiler.compileBuffer(text, buf.name);
    if (!compiler.compiledFiles[buf.name]) {
      continue;
    }
    const {
      name: name2,
      caption: caption2,
      errors,
      processed,
      samepage,
      lazy,
      tagdefs,
      textstart,
      sourcetype
    } = compiler.compiledFiles[buf.name];
    alltagdefs.push(...tagdefs);
    if (!lazy) lbaser.header.preload.push(name2);
    lbaser.append(processed, { name: name2.replace("*", ""), samepage, sourcetype });
    if (errors.length) {
      console.table(errors);
      errors.length = 0;
    }
    let unindexablelines = textstart;
    while (unindexablelines > 0) {
      indexer.addLine("");
      unindexablelines--;
    }
    if (textstart < processed.length) {
      lbaser.header.fulltext.push(name2);
      lbaser.header.fulltextcaption.push(caption2 || name2);
      const toindex = textstart ? processed.slice(textstart) : processed;
      for (let j2 = 0; j2 < toindex.length; j2++) {
        const [text2] = parseOfftext(toindex[j2]);
        indexer.addLine(text2);
      }
    }
  }
  const backtransclusions = serializeBackTransclusion(compiler.backtransclusions);
  indexer.finalize();
  const [tokens, postings, wordcount] = indexer.serialize();
  lbaser.header.eot = lbaser._data.length;
  lbaser.header.preload.push("_tokens", "_toc");
  lbaser.header.wordcount = wordcount;
  tokens.unshift('^:<type="tokens">');
  lbaser.append(tokens, { newpage: true, name: "_tokens" });
  lbaser.append(postings, { newpage: true, name: "_postings" });
  if (compiler.toc.length) lbaser.append(serializeToc(compiler.toc), { newpage: true, name: "_toc" });
  if (backtransclusions.length) {
    lbaser.header.preload.push("_backtransclusions");
    lbaser.append(backtransclusions, { newpage: true, name: "_backtransclusions" });
  }
  lbaser.payload = alltagdefs.filter((it) => !!it).join("\n");
  if (!compiler.ptkname) {
    compiler.ptkname = /* @__PURE__ */ new Date();
    return { err: "missing ptk name" };
  }
  writeTypedefs(lbaser, compiler.typedefs);
  lbaser.setName(compiler.ptkname);
  lbaser.newPage();
  return lbaser;
};

// compiler/template.ts
var nop = () => {
  return [];
};
var addTemplate = (name2, template) => {
  Templates[name2] = template;
  if (!template.getFilters) template.getFilters = nop;
  if (!template.runFilter) template.runFilter = nop;
  if (!template.getCorrespondence) template.getCorrespondence = nop;
};
var Templates = {};
addTemplate("generic", {});

// basket/pitaka.ts
var regPtkName = /^[a-z\-_]{2,16}$/;
var validPtkName = (name2) => !!name2.match(regPtkName);
var Pitaka = class extends LineBase {
  defines;
  primarykeys;
  columns;
  attributes;
  tocs;
  rangeOfAddress;
  tagAtAction;
  innertext;
  inverted;
  lang;
  template;
  constructor(opts) {
    super(opts);
    this.defines = {};
    this.attributes = {};
    this.primarykeys = {};
    this.columns = {};
    this.inverted = null;
    this.lang = "";
  }
  async init() {
    if (!this.payload) return;
    const compiler = new Compiler();
    compiler.compileBuffer(this.payload, "0.off");
    this.defines = compiler.typedefs;
    this.attributes = compiler.compiledFiles["0.off"]?.attributes;
    this.lang = this.attributes.lang || "zh";
    this.template = Templates[this.attributes.template] || Templates.generic;
    const ranges = Array();
    for (let i = 0; i < this.header.preload.length; i++) {
      const r = this.sectionRange(this.header.preload[i]);
      if (r && r[1] > r[0]) ranges.push(r);
    }
    for (let n in this.defines) {
      if (!this.defines[n].fields.lazy) {
        const r = this.sectionRange("^" + n);
        if (r && r[1] > r[0]) ranges.push(r);
      }
    }
    if (!this.inmemory) await this.loadLines(ranges);
    for (let i = 0; i < this.header.preload.length; i++) {
      const section = this.getSection(this.header.preload[i]);
      if (section.length) this.deserialize(section, this.header.preload[i]);
    }
    for (const n in this.defines) {
      if (!this.defines[n].fields.lazy) {
        const section = this.getSection("^" + n);
        if (section && section.length) {
          this.defines[n].deserialize(section, this, n);
        } else {
          this.defines[n].empty = true;
        }
      }
      for (let attr in this.defines[n].fields) {
        const A = this.defines[n].fields[attr];
        if (A.foreign && this.primarykeys[A.foreign]) {
          A.keys = this.primarykeys[A.foreign];
        }
      }
    }
    for (const n in this.defines) {
      if (this.defines[n].empty) delete this.defines[n];
    }
    for (const n in this.columns) {
      const tagname = this.columns[n].attrs?.tagname;
      if (tagname && this.defines[tagname]) {
        this.defines[tagname].column = n;
      }
    }
  }
  deserialize(section, sectionname) {
    if (!section.length) return;
    if (!section[0]) section.shift();
    if (!section.length) return;
    const firstline = section[0];
    const { name: name2 } = sourceType(firstline);
    const at = this.header.sectionnames.indexOf(sectionname);
    const sourcetype = this.header.sectiontypes[at];
    if (sourcetype === "tsv") {
      const column = new Column();
      column.deserialize(section);
      this.columns[column.name] = column;
      this.primarykeys[column.name] = column.keys;
    }
  }
  typedefOf(tagname) {
    return this.defines[tagname];
  }
  getSectionStart(name2) {
    const at = this.header.sectionnames.indexOf(name2);
    if (~at) {
      return this.header.sectionstarts[at];
    }
    return -1;
  }
  getSectionName(line) {
    const at = bsearchNumber(this.header.sectionstarts, line + 1) - 1;
    return this.header.sectionnames[at];
  }
};

// zip/utils.ts
var makeBuffer = (size) => new DataView(new ArrayBuffer(size));
var makeUint8Array = (thing) => new Uint8Array(thing.buffer || thing);
var encodeString = (whatever) => new TextEncoder().encode(String(whatever));
var clampInt32 = (n) => Math.min(4294967295, Number(n));
var clampInt16 = (n) => Math.min(65535, Number(n));
function formatDOSDateTime(date, into, offset = 0) {
  const dosTime = date.getSeconds() >> 1 | date.getMinutes() << 5 | date.getHours() << 11;
  const dosDate = date.getDate() | date.getMonth() + 1 << 5 | date.getFullYear() - 1980 << 9;
  into.setUint16(offset, dosTime, true);
  into.setUint16(offset + 2, dosDate, true);
}
var wasm = "AGFzbQEAAAABCgJgAABgAn9/AXwDAwIAAQUDAQACBwkCAW0CAAFjAAEIAQAKlQECSQEDfwNAIAEhAEEAIQIDQCAAQQF2IABBAXFBoIbi7X5scyEAIAJBAWoiAkEIRw0ACyABQQJ0IAA2AgAgAUEBaiIBQYACRw0ACwtJAQF/IAFBf3MhAUGAgAQhAkGAgAQgAGohAANAIAFB/wFxIAItAABzQQJ0KAIAIAFBCHZzIQEgAkEBaiICIABJDQALIAFBf3O4Cw";
var instance = new WebAssembly.Instance(
  new WebAssembly.Module(Uint8Array.from(atob(wasm), (c2) => c2.charCodeAt(0)))
);
var { c, m: m2 } = instance.exports;
var pageSize = 65536;
var crcBuffer = makeUint8Array(m2).subarray(pageSize);
function crc32(data, crc = 0) {
  for (const part of splitBuffer(data)) {
    crcBuffer.set(part);
    crc = c(part.length, crc);
  }
  return crc;
}
function* splitBuffer(data) {
  while (data.length > pageSize) {
    yield data.subarray(0, pageSize);
    data = data.subarray(pageSize);
  }
  if (data.length) yield data;
}

// zip/format.ts
function fileHeader(encodedname, size, modDate, crc) {
  const header = makeBuffer(30 /* fileHeaderLength */);
  header.setUint32(0, 1347093252 /* fileHeaderSignature */);
  header.setUint32(4, 167772168);
  formatDOSDateTime(modDate || /* @__PURE__ */ new Date(), header, 10);
  header.setUint32(14, crc, true);
  header.setUint32(18, size, true);
  header.setUint32(22, size, true);
  header.setUint16(26, encodedname.length, true);
  return makeUint8Array(header);
}
function centralHeader(encodedname, size, modDate, crc, offset) {
  const header = makeBuffer(46 /* centralHeaderLength */);
  header.setUint32(0, 1347092738 /* centralHeaderSignature */);
  header.setUint32(4, 335546880);
  header.setUint16(8, 8);
  formatDOSDateTime(modDate, header, 12);
  header.setUint32(16, crc, true);
  header.setUint32(20, clampInt32(size), true);
  header.setUint32(24, clampInt32(size), true);
  header.setUint16(28, encodedname.length, true);
  header.setUint16(30, 0, true);
  header.setUint16(40, 0);
  header.setUint32(42, clampInt32(offset), true);
  return makeUint8Array(header);
}

// zip/zipstore.ts
var ZipStore = class {
  //zipbuf should at least include the Central records.
  zipbuf;
  files;
  zipStart;
  constructor(zipbuf) {
    if (zipbuf instanceof ArrayBuffer) {
      zipbuf = new Uint8Array(zipbuf);
    }
    this.zipbuf = zipbuf instanceof Uint8Array ? zipbuf : new Uint8Array(zipbuf.buffer);
    this.files = [];
    this.zipStart = 0;
    const { fileCount, centralSize, centralOffset } = this.loadEndRecord();
    if (fileCount) {
      this.loadFiles(fileCount, centralSize, centralOffset);
    }
  }
  loadFiles(fileCount, centralSize, centralOffset) {
    const coffset = this.zipbuf.length - 22 /* endLength */ - centralSize;
    const buf = new DataView(this.zipbuf.buffer);
    let p3 = coffset;
    for (let i = 0; i < fileCount; i++) {
      const signature = buf.getUint32(p3);
      if (signature !== 1347092738 /* centralHeaderSignature */) {
        break;
      }
      const size = buf.getUint32(p3 + 20, true);
      const namelen = buf.getUint16(p3 + 28, true);
      const extra = buf.getUint16(p3 + 30, true);
      const commentlen = buf.getUint16(p3 + 32, true);
      let offset = buf.getUint32(p3 + 42, true);
      p3 += 46 /* centralHeaderLength */;
      const encodedName = this.zipbuf.subarray(p3, p3 + namelen);
      const name2 = new TextDecoder().decode(encodedName);
      p3 += namelen;
      p3 += extra + commentlen;
      if (i === 0) this.zipStart = offset;
      offset += 30 /* fileHeaderLength */ + namelen;
      let content = new Uint8Array();
      const inbuf = centralOffset - coffset;
      if (offset - inbuf >= 0) {
        content = this.zipbuf.subarray(offset - inbuf, offset - inbuf + size);
      }
      this.files.push({ name: name2, offset, size, content });
    }
  }
  loadEndRecord() {
    const endRecord = { signature: 0, fileCount: 0, centralSize: 0, centralOffset: 0 };
    const buf = new DataView(this.zipbuf.buffer);
    const endpos = this.zipbuf.length - 22 /* endLength */;
    endRecord.signature = buf.getUint32(endpos);
    if (endRecord.signature !== 1347093766 /* endSignature */) {
      console.log("endrecord signature", endRecord.signature, "zipbuf length", this.zipbuf.length);
      throw "wrong endRecord signature";
      return endRecord;
    }
    endRecord.fileCount = buf.getUint16(endpos + 8, true);
    endRecord.centralSize = buf.getUint32(endpos + 12, true);
    endRecord.centralOffset = buf.getUint32(endpos + 16, true);
    return endRecord;
  }
};

// zip/storezip.ts
var MAX_FILENAME = 256;
var storeZip = (inputs, opts = {}) => {
  let estimatesize = 0;
  for (let i = 0; i < inputs.length; i++) {
    let len = inputs[i].content.length;
    estimatesize += len + 30 /* fileHeaderLength */ + MAX_FILENAME;
  }
  estimatesize += (46 /* centralHeaderLength */ + MAX_FILENAME) * inputs.length + 22 /* endLength */;
  const datenow = /* @__PURE__ */ new Date();
  let offset = opts.reserve || 0, centralSize = 0;
  const zipbuf = new Uint8Array(offset + estimatesize);
  const centralRecords = [];
  for (let i = 0; i < inputs.length; i++) {
    const { name: name2, date, content } = inputs[i];
    const contentarr = content;
    const encodedname = encodeString(name2);
    let crc = crc32(contentarr);
    const fileoffset = offset;
    const header = fileHeader(encodedname, contentarr.length, date || datenow, crc);
    zipbuf.set(header, offset);
    offset += header.length;
    zipbuf.set(encodedname, offset);
    offset += encodedname.length;
    zipbuf.set(contentarr, offset);
    offset += contentarr.length;
    const rec = centralHeader(encodedname, contentarr.length, date || datenow, crc, fileoffset);
    centralRecords.push(rec);
    centralRecords.push(encodedname);
    centralSize += rec.length + encodedname.length;
  }
  const centralOffset = offset;
  for (const record of centralRecords) {
    zipbuf.set(record, offset);
    offset += record.length;
  }
  const end = makeBuffer(22 /* endLength */);
  end.setUint32(0, 1347093766 /* endSignature */);
  end.setUint16(8, clampInt16(inputs.length), true);
  end.setUint16(10, clampInt16(inputs.length), true);
  end.setUint32(12, clampInt32(centralSize), true);
  end.setUint32(16, clampInt32(centralOffset), true);
  const endarr = makeUint8Array(end);
  zipbuf.set(endarr, offset);
  offset += endarr.length;
  return zipbuf.subarray(0, offset);
};

// zip/remote.ts
var readBlob = async (file, zipbuf, fileoffset, end, bufferoffset) => {
  const blob = file.slice(fileoffset, end);
  const buf = await blob.arrayBuffer();
  const arr = new Uint8Array(buf);
  if (typeof bufferoffset == "undefined") bufferoffset = fileoffset;
  zipbuf.set(arr, bufferoffset);
  return true;
};
var fetchBuf = async (url, zipbuf, fileoffset, end, bufferoffset) => {
  if (url.name && url.size) {
    return await readBlob(url, zipbuf, fileoffset, end, bufferoffset);
  }
  const res = await fetch(url, { headers: {
    "content-type": "multipart/byteranges",
    "range": "bytes=" + fileoffset + "-" + end
  } });
  if (typeof bufferoffset == "undefined") bufferoffset = fileoffset;
  if (res.ok) {
    const lastpart = new Uint8Array(await res.arrayBuffer());
    zipbuf.set(lastpart, bufferoffset);
    return true;
  }
  return false;
};
var RemoteZipStore = class {
  constructor() {
    this.zipstore = null;
    this.url = "";
    this.filenames = {};
    this.files;
  }
  content(name_idx) {
    let fileinfo = typeof name_idx == "string" ? this.filenames[name_idx] : this.files[name_idx];
    if (!fileinfo) return null;
    return fileinfo.content;
  }
  async load(files, binary = false) {
    if (typeof files == "string") files = [files];
    const jobs = [];
    for (let i = 0; i < files.length; i++) {
      jobs.push(this.fetchFile(files[i], binary));
    }
    return Promise.all(jobs);
  }
  async fetchFile(name_idx, binary = false) {
    let fileinfo = typeof name_idx == "string" ? this.filenames[name_idx] : this.files[name_idx];
    if (!fileinfo) return null;
    if (typeof fileinfo.content !== "undefined") {
      if (!binary && typeof fileinfo.content !== "string") {
        fileinfo.content = new TextDecoder().decode(fileinfo.content);
      }
      return fileinfo.content;
    } else {
      const { offset, size } = fileinfo;
      const buf = new Uint8Array(size);
      const ok = await fetchBuf(this.url, buf, offset, offset + size - 1, 0);
      if (ok) {
        fileinfo.content = binary ? buf : new TextDecoder().decode(buf);
        return fileinfo.content;
      }
    }
  }
  async open(url, opts = {}) {
    this.url = url;
    const headbuf = new Uint8Array(16);
    const dv = new DataView(headbuf.buffer);
    const ok = await fetchBuf(url, headbuf, 0, 15);
    const full = opts.full;
    if (!ok) return null;
    let filesize;
    if ((headbuf[0] !== 80 || headbuf[1] !== 75) && (headbuf[0] !== 77 || headbuf[1] !== 90)) {
      return false;
    }
    if (headbuf[0] == 80 && headbuf[7] & 128) {
      filesize = dv.getUint32(10, true);
    } else {
      let res = await fetch(url, { method: "HEAD" });
      filesize = parseInt(res.headers.get("Content-Length"));
    }
    if (isNaN(filesize)) return false;
    let bufsize = full ? filesize : 1024 * 1024;
    if (bufsize > filesize) bufsize = filesize;
    const zipbuf = new Uint8Array(bufsize);
    if (!await fetchBuf(url, zipbuf, filesize - bufsize, filesize - 1, 0)) {
      return;
    }
    this.zipstore = new ZipStore(zipbuf);
    this.files = this.zipstore.files;
    for (let i = 0; i < this.files.length; i++) {
      this.filenames[this.files[i].name] = this.files[i];
    }
    return true;
  }
};

// basket/openptk.ts
var openPtk = async (name2, cachedimage = null) => {
  let ptk = usePtk(name2);
  if (ptk) return ptk;
  if (!name2) return null;
  const opts = { name: name2 };
  if (cachedimage) {
    opts["zipstore"] = new ZipStore(cachedimage);
  }
  ptk = new Pitaka(opts);
  poolAdd(name2, ptk);
  if (await ptk.isReady()) {
    await ptk.init();
    return ptk;
  } else {
    poolDel(name2);
  }
};
var openInMemoryPtk = async (name2, ptkimage) => {
  const zipstore = new ZipStore(ptkimage);
  const ptk = new Pitaka({ name: name2, zipstore });
  if (ptk.isReady()) {
    await ptk.init();
    poolAdd(name2, ptk);
    return ptk;
  }
};
var ptkFromString = (name2, contentString) => {
  const ptk = new Pitaka({ name: name2, contentString });
  ptk.init();
  poolAdd(name2, ptk);
  return ptk;
};
var usePtk = (name2) => {
  if (!name2) return null;
  return poolGet(name2);
};

// basket/inmemory.ts
var inMemory = (lbaser) => {
  if (!lbaser.name) lbaser.setName("inmemory");
  const ptk = new Pitaka({ inmemory: true });
  lbaser.dumpJs((fn, buf, page) => ptk.setPage(page, ...parseJsonp(buf)));
  poolAdd(lbaser.name, ptk);
  return ptk;
};

// basket/ptkfile.ts
var move000js = (sources) => {
  const out2 = sources.filter((it) => !it.name.endsWith("/000.js"));
  const js000 = sources.filter((it) => it.name.endsWith("/000.js"));
  out2.push(...js000);
  return out2;
};
var makeInMemoryPtk = (lbaser, css = "", comimage = null) => {
  let sources = Array(), locals = Array();
  let zip, redbeanbuf;
  lbaser.dumpJs((pagefn, buf) => {
    sources.push({ name: lbaser.name + "/" + pagefn, content: new TextEncoder().encode(buf) });
  });
  if (css) sources.push({ name: lbaser.name + "/accelon22.css", content: new TextEncoder().encode(css) });
  if (comimage) {
    zip = new ZipStore(comimage);
    redbeanbuf = new Uint8Array(comimage.subarray(0, zip.zipStart || 0));
    for (let i = 0; i < zip.files.length; i++) {
      const item = zip.files[i];
    }
  }
  sources.forEach((it) => {
    if (it.name.endsWith("/000.js")) {
      const ptkname = it.name.slice(0, it.name.length - 7);
      locals.push(ptkname);
    }
  });
  sources = move000js(sources);
  const newzipbuf = storeZip(sources, { reserve: zip?.zipStart || 0 });
  if (redbeanbuf) newzipbuf.set(redbeanbuf);
  else setPtkFileLength(newzipbuf);
  return newzipbuf;
};
var setPtkFileLength = (buf) => {
  buf[7] |= 128;
  const sizebuf = new Uint32Array([buf.length]);
  const sizebuf8 = new Uint8Array(sizebuf.buffer);
  buf[10] = sizebuf8[0];
  buf[11] = sizebuf8[1];
  buf[12] = sizebuf8[2];
  buf[13] = sizebuf8[3];
};

// basket/folio.ts
var MAXFOLIOLINE = 8;
var MAXFOLIOCHAR = 32;
var VALIDPUNCS = "\u300C\u300D\u300E\u300F\u3002\uFF0C\uFF1B\uFF1A\u3001\uFF01\uFF1F";
var tidyFolioText = (text) => {
  return text.replace(/【([^】]*)】/g, (m4, m1) => "\u3010" + "-".repeat(m1.length) + "\u3011");
};
var toFolioText = (lines) => {
  if (!lines || !lines.length) return [];
  let firstline = lines[0];
  let m4 = firstline.match(/(\^pb\d+)/);
  if (!m4) {
  }
  const text = tidyFolioText(lines.join("	")).replace(/(..)\^pb/g, "$1^lb^pb").split("^lb");
  return text;
};
var countFolioChar = (linetext) => {
  let prev = 0, textlen = 0, textsnip = "", count = 0;
  const consumeChar = () => {
    if (prev && textsnip[0] == "\u3010") {
      textsnip = textsnip.replace(/【([^】]*)】/, (m4, m1) => "\u3010" + "-".repeat(m1.length) + "\u3011");
    }
    const chars2 = splitUTF32Char(textsnip);
    let i = 0;
    while (i < chars2.length) {
      const r = CJKRangeName(chars2[i]);
      if (r || chars2[i] == "\u3000") {
        count++;
      }
      i++;
    }
  };
  linetext.replace(OFFTAG_REGEX_G, (m4, rawName, rawAttrs, offset) => {
    textsnip = linetext.slice(prev, offset);
    consumeChar();
    prev = offset + m4.length;
  });
  textsnip = linetext.slice(prev);
  consumeChar();
  return count;
};
var folioPosFromAddress = async (ptk, address) => {
  const { choff, lineoff, action } = parseAddress(address);
  const [start, end] = ptk.rangeOfAddress(action);
  if (!end) return {};
  const folio = ptk.defines.folio;
  let folioat = bsearchNumber(ptk.defines.folio.linepos, start + 1) - 1;
  if (folioat == -1) folioat = 0;
  const ckat = bsearchNumber(ptk.defines.ck.linepos, start + 1) - 1;
  const id = folio.fields.id.values[folioat];
  if (!id) return {};
  const ck = ptk.defines.ck.fields.id.values[ckat];
  const ft = new FolioText(ptk);
  await ft.load(id);
  const [pb2, line, ch] = ft.toFolioPos(ck, lineoff, choff);
  return { id, pb: pb2, line, ch };
};
var FolioText = class {
  constructor(ptk) {
    this.ptk = ptk;
    this.offtext = "";
    this.pbs = [];
    this.pbpos = [];
    this.chunks = [];
    this.chunkpos = [];
    this.chunklinepos = [];
    this.ck = ptk.defines.ck;
  }
  toFolioPos(ck = "1", lineoff = 0, choff = 0) {
    const [ckstart, ckend] = this.chunkRange(ck);
    const str = this.offtext.slice(ckstart, ckend);
    let p3 = 0;
    while (lineoff > 0 && p3 < str.length) {
      if (str.charAt(p3) == "\n") lineoff--;
      p3++;
    }
    const start = ckstart + p3 + choff;
    const pbat = bsearchNumber(this.pbpos, start + choff + 1) - 1;
    const [pbstart, pbend] = this.pbRange(this.pbs[pbat]);
    const end = Math.min(start, pbend);
    let pbstr = this.offtext.slice(pbstart, end);
    if (this.offtext.slice(end, end + 3) == "^lb") {
      pbstr += "^lb";
    }
    const pblines = pbstr.split("^lb");
    const line = pblines.length;
    const ch = this.countFolioChar(pblines[pblines.length - 1]);
    return [this.pbs[pbat], line - 1, ch];
  }
  folioPageText(pb2) {
    const [start, end] = this.pbRange(pb2);
    return toFolioText(this.offtext.slice(start, end).split("\n"));
  }
  countFolioChar(linetext) {
    return countFolioChar(linetext);
  }
  skipFolioChar(linetext, ch) {
    if (!linetext) return 0;
    let prev = 0, textlen = 0, textsnip = "";
    const consumeChar = () => {
      if (prev && textsnip[0] == "\u3010") {
        textsnip = textsnip.replace(/【([^】]*)】/, (m4, m1) => "\u3010" + "-".repeat(m1.length) + "\u3011");
      }
      const chars2 = splitUTF32Char(textsnip);
      let i = 0;
      while (ch > -1 && i < chars2.length) {
        const r = CJKRangeName(chars2[i]);
        if (r || chars2[i] == "\u3000") {
          ch--;
        }
        if (ch >= 0) textlen += chars2[i].codePointAt(0) >= 131072 ? 2 : 1;
        i++;
      }
    };
    let taglens = 0;
    linetext.replace(OFFTAG_REGEX_G, (m4, rawName, rawAttrs, offset) => {
      textsnip = linetext.slice(prev, offset);
      consumeChar();
      if (ch <= 0) return;
      prev = offset + m4.length;
      taglens += m4.length;
    });
    textsnip = linetext.slice(prev);
    consumeChar();
    return textlen + taglens;
  }
  fromFolioPos(foliopos, line = 0, ch = 0) {
    let pbid = foliopos;
    if (typeof foliopos == "object") {
      [pbid, line, ch] = foliopos;
    }
    const [pbstart, pbend] = this.pbRange(pbid);
    const pbstr = tidyFolioText(this.offtext.slice(pbstart, pbend));
    const pblines = pbstr.split("^lb");
    let start = pbstart || 0;
    for (let i2 = 0; i2 < line; i2++) {
      start += (pblines[i2]?.length || 0) + (i2 > 0 ? 3 : 0);
    }
    const pbchoff = this.skipFolioChar(pbstr.slice(start - pbstart), ch);
    start += pbchoff;
    let ckat = bsearchNumber(this.chunkpos, start + 1) - 1;
    const ckid = this.chunks[ckat < 0 ? 0 : ckat];
    const [ckstart, ckend] = this.chunkRange(ckid);
    const str = this.offtext.slice(ckstart, ckend);
    const cklines = str.split("\n");
    let p3 = ckstart || 0;
    let lineoff = 0, choff = 0, i = 0;
    for (i = 0; i < cklines.length; i++) {
      if (p3 + cklines[i].length >= start) {
        choff = start - p3;
        break;
      }
      lineoff++;
      p3 += cklines[i].length + 1;
    }
    const ptkline = this.from + this.chunklinepos[ckat] + lineoff;
    const linecount = this.chunklinepos[ckat + 1] - this.chunklinepos[ckat];
    const at = bsearchNumber(this.ptk.defines.ck.linepos, ptkline + 1) - 1;
    const chunk = this.ptk.getChunk(at + 1);
    return { ckid, lineoff, choff, linetext: cklines[i] || "", ptkline, linecount, at, ck: chunk };
  }
  chunkRange(ckid) {
    const at = this.chunks.indexOf(ckid);
    if (at == -1) return [0, 0];
    return [this.chunkpos[at], this.chunkpos[at + 1]];
  }
  chunkText(ckid) {
    const [s, e] = this.chunkRange(ckid);
    return this.offtext.slice(s, e);
  }
  pbRange(pb2) {
    if (typeof pb2 == "number") pb2 = pb2.toString();
    const at = this.pbs.indexOf(pb2);
    if (at == -1) return [0, 0];
    return [this.pbpos[at], this.pbpos[at + 1]];
  }
  async load(bkfolio) {
    const ptk = this.ptk;
    let bk = "", folio = bkfolio;
    if (bkfolio.match(/\d$/)) {
      bk = bkfolio.replace(/\d+$/g, "");
    } else {
      folio = "";
      bk = bkfolio;
    }
    let from, to;
    const addr = (bk ? "bk#" + bk : "") + (folio ? "." : "") + (folio ? "folio#" + folio : "");
    [from, to] = ptk.rangeOfAddress(addr);
    if (from == to) {
      return ["", from, to];
    }
    await ptk.loadLines([from, to]);
    this.folio = folio;
    this.offtext = ptk.slice(from, to).join("\n");
    this.from = from;
    this.to = to;
    let p3 = 0, linecount = 0;
    while (p3 < this.offtext.length) {
      const ch3 = this.offtext.slice(p3, p3 + 3);
      if (ch3 == "^pb") {
        this.pbpos.push(p3);
        p3 += 3;
        const m4 = this.offtext.slice(p3).match(/([\d]+)/);
        this.pbs.push(m4[1]);
        p3 += m4[1].length;
      } else if (ch3 == "^ck") {
        this.chunkpos.push(p3);
        p3 += 3;
        if (this.offtext.charAt(p3) == "#") p3++;
        const m4 = this.offtext.slice(p3).match(/([a-z\d]+)/);
        this.chunks.push(m4[1]);
        this.chunklinepos.push(linecount);
        p3 += m4[1].length;
      } else {
        if (ch3[0] == "\n") linecount++;
        p3++;
      }
    }
    this.pbpos.push(this.offtext.length - 1);
    this.chunkpos.push(this.offtext.length - 1);
    this.chunklinepos.push(linecount + 1);
  }
};
var extractPuncPos = (foliopagetext, foliolines = 5, validpuncs = VALIDPUNCS) => {
  const puncs = [];
  for (let i = 0; i < foliopagetext.length; i++) {
    let ch = 0, ntag = 0, textsum = 0;
    let [text, tags] = parseOfftext(foliopagetext[i]);
    const isgatha = !!tags.filter((it) => it.name == "gatha").length;
    if (i >= foliolines) break;
    if (isgatha) {
      text = text.replace(/[？；，。．]/g, "\u3000");
    }
    ;
    const chars2 = splitUTF32Char(text);
    for (let j2 = 0; j2 < chars2.length; j2++) {
      while (ntag < tags.length && textsum > tags[ntag].choff) {
        if (tags[ntag].name == "ck") {
          puncs.push({ line: i, ch, text: styledNumber(parseInt(tags[ntag].attrs.id), "\u2460") });
        } else if (tags[ntag].name == "n") {
          puncs.push({ line: i, ch, text: "n" + parseInt(tags[ntag].attrs.id) });
        }
        ntag++;
      }
      textsum += chars2[j2].length;
      if (~validpuncs.indexOf(chars2[j2])) {
        let text2 = toVerticalPunc(chars2[j2]);
        puncs.push({ line: i, ch, text: text2 });
      }
      const r = CJKRangeName(chars2[j2]);
      if (r || chars2[j2] == "\u3000") {
        ch++;
      }
    }
  }
  return puncs;
};

// basket/topaged.ts
var PtkFromPagedGroup = async (sources, img = false, escape = false) => {
  const compiler = new Compiler();
  for (let i = 0; i < sources.length; i++) {
    const fn = sources[i].name.replace(/\.[^.]*$/g, "");
    const header = sources[i].header;
    if (fn == "0") continue;
    let prolog = "";
    if (~sources[i].name.indexOf(".tsv")) {
      if (!sources[i].text.startsWith("^:")) {
        prolog = "^:<name=" + fn + " preload=true >	val\n";
      }
    }
    sources[i].text = prolog + sources[i].text;
  }
  const lbaser = await makeLineBaser(sources, compiler);
  if (img) {
    const ptkimage = makeInMemoryPtk(lbaser);
    return ptkimage;
  } else {
    return lbaser.asString(escape);
  }
};

// basket/entries.ts
var buildYToc = (ptk, book) => {
  const Y = ptk?.defines.y;
  if (!Y) return [];
  const ID = Y.fields.id;
  const out2 = [];
  const [from, to] = ptk.rangeOfAddress("bk#" + book);
  const DK = ptk.defines.dk;
  for (let i = 0; i < ID.values.length; i++) {
    const linepos = Y.linepos[i];
    if (linepos < from || linepos > to) continue;
    const at = ptk.nearestTag(linepos + 1, "dk");
    const page = parseInt(DK.fields.id.values[at]);
    const line = linepos - DK.linepos[at];
    const t = Y.getInnertext(i) || captionOfPage(ptk, book, page, line);
    let caption2 = "^y" + ID.values[i] + "\u300A" + t + "\u300B";
    out2.push({ caption: caption2, page, line });
  }
  return out2;
};
var captionOf = (ptk, addr) => {
  if (!addr) return "";
  const [p3, b, l] = parsePageBookLine(addr);
  return captionOfPage(ptk, b, p3, l);
};
var captionOfPage = (ptk, bk, page, line = 0, bookname = false) => {
  if (!ptk) return "";
  const COL = ptk.columns[bk];
  let caption2 = "";
  if (COL && parseInt(page).toString() == page) {
    const at = COL.dkat.indexOf(parseInt(page));
    caption2 = COL.keys.get(at) || "";
  }
  if (!caption2) {
    const [s, e] = ptk.rangeOfAddress("bk#" + bk + ".dk#" + page);
    let tagat = ptk.nearestTag(s + 1 + parseInt(line), "y");
    if (~tagat) {
      while (tagat >= 0 && !caption2) {
        caption2 = ptk.defines.y.getInnertext(tagat);
        tagat--;
      }
    }
  }
  return (bookname ? ptk.BookNameById[bk] + "\uFF0E" : "") + caption2;
};
var pageBookLineOfAnchor = (anchor, ptk) => {
  const [xyidline, book] = anchor.split("@");
  let [xyid, loff] = xyidline.split(".");
  loff = parseInt(loff) || 0;
  const [bookstart] = ptk.rangeOfAddress("bk#" + book);
  const [s, e] = ptk.rangeOfAddress("bk#" + book + ".y#" + xyid.slice(1));
  let bookat = ptk.nearestTag(bookstart, "dk");
  if (bookat < 0) bookat = 0;
  const numberpage = ptk.nearestTag(s, "dk") - bookat;
  const lineoff = s - ptk.defines.dk.linepos[numberpage] + loff;
  return numberpage + "@" + book + (lineoff ? "." + lineoff : "");
};
var yidarrInRange = (ptk, s, e) => {
  const [first, last] = ptk.tagInRange("y", s, e);
  const idarr = ptk.defines.y?.fields.id.values;
  const linepos = ptk.defines.y?.linepos;
  const out2 = [];
  if (!idarr || !linepos) return [];
  for (let i = first; i <= last; i++) {
    out2[linepos[i] - s] = "y" + idarr[i];
  }
  let prev = "", lineoff = 0;
  for (let i = 0; i < e - s; i++) {
    if (out2[i]) {
      prev = out2[i];
      lineoff = 0;
    } else if (prev) {
      lineoff++;
      out2[i] = prev + "." + lineoff;
    }
  }
  return out2;
};
var enumEntries = (ptk, fn, tofind, max = 100) => {
  const keys = ptk.columns[fn]?.keys;
  if (!keys) return [];
  let tf = tofind, mode = SA_MATCH_ANY;
  if (tofind.startsWith("^")) {
    tf = tofind.slice(1);
    mode = SA_MATCH_START;
  } else if (tofind.endsWith("$")) {
    tf = tofind.slice(0, tofind.length - 1);
    mode = SA_MATCH_END;
  } else if (tofind.startsWith(".") && tofind.endsWith(".")) {
    tf = tofind.slice(1, tofind.length - 1);
    mode = SA_MATCH_MIDDLE;
  }
  if (!tf) {
    const atarr = keys.enumMode(tf, mode, max);
    return atarr.map((it) => keys.get(it));
  } else {
    for (let i = 0; i < max; i++) {
      const t = keys.get(i);
      if (!t) break;
      out.push(t);
    }
    return out;
  }
};
var getBookColumnText = (ptk, bk, key) => {
  const col = ptk.columns[bk];
  if (!col || !col.keys) return [-1, ""];
  const at = col.keys.indexOf(key);
  if (at == -1) return [-1, ""];
  const dk = col.dkat[at];
  const [s, e] = ptk.rangeOfAddress("bk#" + bk + ".dk#" + dk);
  return [at, ptk.slice(s, e).join("\n"), bk];
};
var getAnyColumnText = (ptk, book, key) => {
  if (!key) return [-1, ""];
  if (book) {
    return getBookColumnText(ptk, book, key);
  } else {
    let at, text;
    for (let bk of Object.keys(ptk.columns)) {
      [at, text] = getBookColumnText(ptk, bk, key);
      if (at > -1) return [at, text, bk];
    }
    return [-1, ""];
  }
};
var TRANSCLUSION_INDIRECT_REGEX = /@(.+)$/;
var getColumnText = (ptk, bk, key) => {
  let [at, content, book] = getAnyColumnText(ptk, bk, key);
  let m4 = content.match(TRANSCLUSION_INDIRECT_REGEX);
  while (m4) {
    content = "";
    key = m4[1];
    if (m4) {
      [at, content] = getAnyColumnText(ptk, bk, m4[1]);
    } else break;
    m4 = content.match(/@([^ <>\[\]\{\}]+)$/);
  }
  return [content, [{ key }], at, 0];
};
var columnTextByKey = (ptk, key, bk = "") => {
  return getColumnText(ptk, bk, key);
};
var pageFromPtk = (ptk, book, page) => {
  const [s, e] = ptk.rangeOfAddress("bk#" + book + ".dk#" + page);
  const lineinfo = [];
  let yidarr = [];
  if (ptk.defines.y) {
    yidarr = yidarrInRange(ptk, s, e);
  }
  const lines = ptk.slice(s, e);
  const text = lines.join("\n");
  const locallinks = ptk.LocalBackLinks && ptk.LocalBackLinks[book] || [];
  for (let i = 0; i < e - s; i++) {
    lineinfo[i] = { yid: yidarr[i], locallinks: locallinks[s + i] };
  }
  return [text, lineinfo, page, s];
};
var getSliceText = (bk, pg, ptk, getPageText) => {
  if (parseInt(pg).toString() == pg) {
    return ptk ? pageFromPtk(ptk, bk, pg) : getPageText(pg, bk);
  } else if (ptk) {
    if (pg.startsWith("x") || pg.startsWith("y")) {
      const [page, unused, line] = parsePageBookLine(pg);
      const [s, e] = ptk.rangeOfAddress("bk#" + bk + ".y#" + page.slice(1));
      const lines = ptk.slice(s, e);
      const yidarr = yidarrInRange(ptk, s, e);
      const numberpage = ptk.nearestTag(s, "dk");
      const lineoff = s - ptk.defines.dk.linepos[numberpage];
      const lineinfo = [];
      const book = ptk.nearestTag(s + 1, "bk", "id");
      const locallinks = ptk.LocalBackLinks && ptk.LocalBackLinks[book] || [];
      for (let i = 0; i < lines.length; i++) {
        lineinfo[i] = { yid: yidarr[i], locallinks: locallinks[s + i] };
      }
      return [lines.join("\n"), lineinfo, numberpage, lineoff];
    } else {
      return columnTextByKey(ptk, pg, bk);
    }
  }
  return ["", [], 0, 0];
};
var brokenTransclusions = async (ptk, dictptk) => {
  if (!ptk) return [];
  await ptk.loadAll();
  const notfound = {};
  if (!dictptk) dictptk = ptk;
  for (let i = 1; i < ptk.header.eot; i++) {
    const line = ptk.getLine(i);
    const units = unitize(line);
    for (let j2 = 0; j2 < units.length; j2++) {
      const u = units[j2];
      if (u.startsWith("^[")) {
        const [tag, innertext2] = parseTransclusion(u);
        const [t, obj] = columnTextByKey(dictptk, innertext2);
        if (!t) {
          const key = obj[0].key || innertext2;
          if (!notfound[key]) notfound[key] = 0;
          notfound[key]++;
        }
      }
    }
  }
  const notfoundarr = fromObj(notfound, true);
  if (notfoundarr.length) console.log(notfoundarr);
  return [];
};
function keyOfEntry(entry) {
  let [at, text] = getAnyColumnText(this, "", entry);
  let key = entry, m4;
  while (m4 = text.match(TRANSCLUSION_INDIRECT_REGEX)) {
    key = m4[1];
    [at, text] = getAnyColumnText(this, "", key);
  }
  return key;
}
var entriesOfKey = (ptk, key, firstonly = false) => {
  const out2 = [];
  for (let bk of Object.keys(ptk.columns)) {
    const col = ptk.columns[bk];
    if (!col.dkat) continue;
    for (let j2 = 0; j2 < col.dkat.length; j2++) {
      const [s, e] = ptk.rangeOfAddress("bk#" + bk + ".dk#" + col.dkat[j2]);
      const text = ptk.slice(s, e).join("\n");
      if (text.endsWith("@" + key)) {
        out2.push(col.keys.get(j2));
      }
    }
  }
  if (out2.length == 0) {
    return key;
  } else return firstonly ? out2[0] || "" : out2;
};

// basket/columns.ts
function columnField(name2, field, idx2) {
  const column = this.columns[name2];
  const at = column.fieldnames.indexOf(field);
  return column.fieldvalues[at][idx2];
}
async function inlineNote(tagname, noteid) {
  const typedef = this.defines[tagname];
  const col = this.columns[typedef.fields.type.foreign];
  if (!col) return;
  const at = col.findKey(noteid);
  const textfield = typedef.attrs.text;
  const at2 = col.fieldnames.indexOf(textfield);
  const values = col.fieldvalues[at2];
  return values && values[at] || "";
}
function rowOf(rowname, idx2, field = -1) {
  const column = this.columns[rowname];
  if (typeof field == "string") {
    field = column.fieldnames.indexOf(field);
  }
  const out2 = [];
  if (field > 0) {
    out2.push({ name, typedef: column.fieldsdef[field], value: column.fieldvalues[field][idx2] });
  } else {
    for (let i = 0; i < column.fieldnames.length; i++) {
      const name2 = column.fieldnames[i];
      out2.push({ name: name2, typedef: column.fieldsdef[i], value: column.fieldvalues[i][idx2] });
    }
  }
  return out2;
}
var getCacheKey = (name2, field, tofind) => {
  return name2 + ":" + field + "=" + tofind;
};
function searchColumnField(name2, field, tofind) {
  const simtofind = fromSim(tofind);
  let cachekey = getCacheKey(name2, field, tofind);
  let cache = this.scanCache[cachekey];
  if (!cache && simtofind !== tofind) {
    cache = this.scanCache[getCacheKey(name2, field, simtofind)];
  }
  if (!cache) {
    const array = this.columns[name2][field];
    if (!array) {
      console.log("missing field", field, "in column", name2);
      return null;
    }
    let contain = indexOfs(array, tofind);
    if (!contain.length && simtofind !== tofind) {
      contain = indexOfs(array, simtofind);
      if (contain.length) {
        cachekey = getCacheKey(name2, field, simtofind);
      }
    }
    const caption2 = this.columns[name2].caption || name2;
    cache = { name: name2, field, caption: caption2, contain };
    this.scanCache[cachekey] = cache;
  }
  return cache;
}
function scanColumnFields(tofind) {
  const out2 = [];
  if (!tofind) return [];
  for (let name2 in this.columns) {
    if (!this.columns[name2].attrs.scan) continue;
    const scans = this.columns[name2].attrs.scan.split(",");
    for (let i = 0; i < scans.length; i++) {
      const cache = searchColumnField.call(this, name2, scans[i], tofind);
      out2.push(cache);
    }
  }
  for (let name2 in this.primarykeys) {
    if (!this.columns[name2].attrs.bme) continue;
    const cachekey = name2 + "=" + tofind;
    let cache = this.scanCache[cachekey];
    if (!cache) {
      const sa = this.primarykeys[name2];
      const start = sa.enumStart(tofind);
      const middle = sa.enumMiddle(tofind);
      const end = sa.enumEnd(tofind);
      const caption2 = this.columns[name2].caption || name2;
      cache = { name: name2, caption: caption2, start, middle, end };
      this.scanCache[cachekey] = cache;
    }
    out2.push(cache);
  }
  return out2;
}

// basket/footnote.ts
function findFootmarkInBook(ptk, id, line) {
  const ck = ptk.nearestChunk(line);
  const fntag = ptk.defines.fn;
  const closestfn = ptk.findClosestTag(fntag, "id", id, line);
  if (~closestfn) {
    return ptk.name + ":bk#" + ck.bk.id + ".fm" + id;
  }
}
function footNoteAddress(id, line) {
  const ptk = this;
  const fnaddr = findFootmarkInBook(ptk, id, line);
  if (fnaddr) return fnaddr;
  const ck = ptk.nearestChunk(line);
  const chunktag = ptk.defines.ck;
  const bktag = ptk.defines.bk;
  const footbk = "fn_" + ck.bkid;
  const at = bktag.fields.id.values.indexOf(footbk);
  if (at == -1) return ptk.name + ":" + ck.bk.id + ".fm" + id;
  const booknotebkline = bktag.linepos[at];
  const closestchunk = ptk.findClosestTag(chunktag, "id", ck.id, booknotebkline);
  const chunk = chunktag.fields.id.values[closestchunk];
  const address = ptk.name + ":" + footbk + ".ck" + (parseInt(chunk) ? chunk : "#" + chunk) + ".fn" + id;
  return address;
}
function footNoteInTSV(id, line) {
  const ptk = this;
  let ck = "", hasck = false;
  if (!id) return "";
  if (id && ~id.indexOf(".")) {
    ck = ptk.getChunk(id.slice(0, id.indexOf(".")));
    hasck = true;
  } else {
    ck = ptk.nearestChunk(line);
  }
  if (!ck) return "";
  let bkid = ck.bkid + "-note";
  let footnotecol = ptk.columns[bkid];
  if (!footnotecol) {
    bkid = ck.bkid;
    footnotecol = ptk.columns[bkid];
  }
  if (!footnotecol) return "--no note--";
  if (footnotecol.attrs.footnote == "ck" && !hasck) {
    id = ck.id + "." + id;
  }
  let o = footnotecol.fieldByKey(id, "note") || "";
  if (!o) {
    const key = ck.id + "." + id;
    const r = getBookColumnText(ptk, bkid, key);
    o = r[1];
  }
  return o;
}
function footNoteByAddress(id, line) {
  const ptk = this;
  const ck = ptk.nearestChunk(line);
  const chunktag = ptk.defines.ck;
  const bktag = ptk.defines.ck;
  const footnotetag = ptk.defines.f;
  let footbk = ck.bkid.replace("_fn", "");
  const at = bktag.fields.id.values.indexOf(footbk);
  if (at == 0) footbk = "";
  else footbk += ".";
  const booknotebkline = bktag.linepos[at];
  const closestchunk = ptk.findClosestTag(chunktag, "id", ck.id, booknotebkline);
  const chunk = chunktag.fields.id.values[closestchunk];
  const footnoteat = ptk.findClosestTag(footnotetag, "id", parseInt(id), chunktag.linepos[closestchunk]);
  const footnoteline = footnotetag.linepos[footnoteat];
  const highlightline = footnoteline - chunktag.linepos[closestchunk];
  const address = footbk + "ck" + chunk + (highlightline ? ":" + highlightline : "");
  return address;
}

// basket/parallel.ts
var bookPrefix = (bookname) => {
  let prefix = bookname;
  const at = bookname.lastIndexOf("_");
  if (~at) prefix = bookname.slice(0, at);
  return prefix;
};
function getParallelLine(sourceptk, line, remote = false) {
  const chunk = sourceptk.nearestChunk(line + 1);
  if (!chunk) return [];
  const bk = this.defines.bk;
  const books = this.getParallelBook(chunk.bkid, remote);
  const bookats = books.map((id) => bk.fields.id.values.indexOf(id));
  const bookstart = sourceptk.defines.bk.linepos[chunk.bkat];
  const sourcelineoff = line - bookstart;
  const out2 = [];
  for (let i = 0; i < bookats.length; i++) {
    const bkid = bk.fields.id.values[bookats[i]];
    const [start, end] = this.rangeOfAddress("bk#" + bkid + ".ck#" + chunk.id);
    const bookstart2 = bk.linepos[bookats[i]];
    const theline = bookstart2 + sourcelineoff;
    if (theline <= end) {
      out2.push([this, start - bookstart2, theline]);
    }
  }
  return out2;
}
function getParallelBook(bookname, remote) {
  if (typeof bookname == "number") {
    bookname = this.defines.bk.fields.id.values[bookname];
  }
  if (!bookname) return [];
  const prefix = bookPrefix(bookname);
  const books = this.defines.bk.fields.id.values.filter((it) => bookPrefix(it) == prefix && (remote || bookname !== it));
  return books;
}
function foreignLinksAtTag(tagname, line) {
  const tag = this.defines[tagname];
  const linepos = tag?.linepos;
  if (!tag || !linepos) return [];
  const at = bsearchNumber(linepos, line);
  const val = tag.fields.id.values[at].toString();
  const out2 = [];
  for (let sptkname in this.foreignlinks) {
    const sptk = poolGet(sptkname);
    const linkarr = this.foreignlinks[sptkname];
    for (let i = 0; i < linkarr.length; i++) {
      const [srctag, bk, targettagname, idStrArr, idxarr] = linkarr[i];
      if (targettagname !== tagname) continue;
      const srclinepos = sptk.defines[srctag].linepos;
      const at2 = idStrArr.find(val);
      const tagvalues = this.defines[srctag].fields["@"].values;
      const arr = idxarr[at2];
      for (let j2 = 0; j2 < arr?.length; j2++) {
        const address = tagvalues[arr[j2]];
        const line2 = srclinepos[arr[j2]];
        const ck = sptk.nearestChunk(line2 + 1);
        out2.push({ text: address, line: line2, ck, basket: sptkname });
      }
    }
  }
  return out2;
}
function enumParallelsPtk(address) {
  const ptk = this;
  const range = ptk.rangeOfAddress(address);
  const ck = ptk.nearestChunk(range[0] + 1);
  if (!ck) return [];
  const paralleladdress = "bk#" + ck.bkid + ".ck#" + ck.id;
  const ptks = poolParallelPitakas(ptk);
  const out2 = [ptk.header.name];
  for (let i = 0; i < ptks.length; i++) {
    const ptk2 = poolGet(ptks[i]);
    const [start, end] = ptk2.rangeOfAddress(paralleladdress);
    if (end > 0) {
      out2.push(ptks[i]);
    }
  }
  return out2;
}

// basket/links.ts
function addBacklinks(tagname, tptk, bk, targettagname, chunks, nlinks) {
  if (!tptk) tptk = "*";
  if (!this.backlinks[tptk]) this.backlinks[tptk] = {};
  if (!this.backlinks[tptk][this.name]) {
    this.backlinks[tptk][this.name] = [];
  }
  this.backlinks[tptk][this.name].push([tagname, bk, targettagname, chunks, nlinks]);
}
function addForeignLinks(fptk) {
  for (let tptk in fptk.backlinks) {
    if (tptk == this.name || tptk === "*") {
      for (let sptk in fptk.backlinks[tptk]) {
        this.foreignlinks[sptk] = fptk.backlinks[tptk][sptk];
      }
    }
  }
}

// basket/backlinks.ts
function backLinksOf(bk, line) {
  const BK = this.LocalBackLinks[bk];
  if (!BK) return [];
  return BK[line] || [];
}
function backTransclusionOf(entry) {
  const ptk = this;
  if (!ptk.backtransclusions) return [];
  const key = ptk.keyOfEntry(entry);
  const items = ptk.backtransclusions[key] || [];
  return items.map((it) => entriesOfKey(ptk, it, true)).filter((it) => !!it);
}
function guessBookId(t) {
  t = removeBracket(t);
  const m4 = t.match(CJKWordBegin_Reg);
  if (m4) {
    return this.BookIdByName[m4[1]];
  }
}
var buildBookNames = (ptk) => {
  for (let i = 0; i < ptk.defines.bk?.linepos.length; i++) {
    const id = ptk.defines.bk.fields.id.values[i];
    const t = ptk.defines.bk.getInnertext(i);
    if (!t) continue;
    ptk.BookIdByName[t] = id;
    ptk.BookIdByName[toSim(t)] = id;
    ptk.BookNameById[id] = t;
  }
};
function bookNameById(id) {
  const tag = this.getTagById("bk", id);
  return this.defines.bk.getInnertext(tag?.at);
}
var findEntryByDk = (ptk, dkid, bk) => {
  const cols = Object.keys(ptk.columns);
  if (bk && ptk.columns[bk]) {
    const at = ptk.columns[bk].dkat.indexOf(parseInt(dkid));
    if (~at) return ptk.columns[bk].keys.get(at);
  } else {
    for (let col in ptk.columns) {
      const at = ptk.columns[col].dkat?.indexOf(dkid);
      if (~at) return ptk.columns[col].keys.get(at);
    }
  }
  return "";
};
function buildBackTransclusions(ptk) {
  const section = ptk.getSection("_backtransclusions");
  if (!section.length) return {};
  const out2 = {};
  const keys = new StringArray(section.shift(), { sep: LEMMA_DELIMITER });
  const dk = ptk.defines.dk;
  if (!dk) return out2;
  for (let i = 0; i < keys.len(); i++) {
    const linepos = unpackIntDelta(section.shift());
    const entries = [];
    for (let j2 = 0; j2 < linepos.length; j2++) {
      const dkat = dk.linepos.indexOf(linepos[j2]);
      if (~dkat) {
        const bk = ptk.nearestTag(linepos[j2], "bk", "id");
        const dkid = dk.fields.id.values[dkat];
        const e = findEntryByDk(ptk, dkid, bk);
        if (e) entries.push(e);
      }
    }
    const [content, objarr] = columnTextByKey(ptk, keys.get(i));
    const key = objarr[0].key;
    if (!out2[key]) out2[key] = entries;
    else {
      out2[key].concat(entries);
      out2[key].sort();
    }
  }
  return out2;
}
function buildLocalBacklinks(ptk) {
  const X = ptk.defines.x;
  const Y = ptk.defines.y;
  const L = {};
  if (!X || !Y) return;
  const XID = X.fields.id.values;
  const Xlinepos = ptk.defines.x.linepos;
  for (let i = 0; i < XID.length; i++) {
    let [page, book, line] = parsePageBookLine(XID[i]);
    if (!book) {
      const innertext2 = X.getInnertext(i);
      book = guessBookId.call(ptk, innertext2);
    }
    const sbook = ptk.nearestTag(Xlinepos[i], "bk", "id");
    if (!book) book = sbook;
    const addr = "bk#" + book + ".y#" + page;
    const [s, e] = ptk.rangeOfAddress(addr);
    if (!L[book]) L[book] = {};
    if (!L[book][s + line]) L[book][s + line] = [];
    L[book][s + line].push(Xlinepos[i]);
  }
  return L;
}
var enableBacklinkFeature = (ptk) => {
  ptk.BookIdByName = {};
  ptk.BookNameById = {};
  ptk.guessBookId = guessBookId;
  ptk.bookNameById = bookNameById;
  ptk.backLinksOf = backLinksOf;
  ptk.backTransclusionOf = backTransclusionOf;
  ptk.keyOfEntry = keyOfEntry;
  buildBookNames(ptk);
  ptk.LocalBackLinks = buildLocalBacklinks(ptk);
  ptk.backtransclusions = buildBackTransclusions(ptk);
};

// basket/postings.ts
function postingLine(posting) {
  return plContain(posting, this.inverted.tokenlinepos)[0];
}
var enableFTSFeature = (ptk) => {
  const section = ptk.getSection("_tokens");
  if (!ptk.inverted && section && section.length) {
    section.shift();
    const postingstart = ptk.sectionRange("_postings")[0];
    ptk.queryCache = {};
    ptk.inverted = new Inverted(section, postingstart);
    ptk.loadPostings = loadPostings;
    ptk.loadPostingsSync = loadPostingsSync;
    ptk.getPostings = getPostings;
    ptk.postingline = postingLine;
    ptk.searchSentenceSync = searchSentenceSync;
    ptk.searchSentence = searchSentence;
    ptk.parseQuery = parseQuery;
    ptk.scanText = scanText;
    ptk.hitsOfLine = hitsOfLine;
    ptk.scoreLine = scoreLine;
  }
};

// basket/toc.ts
var enableTOCFeature = (ptk) => {
  const section = ptk.getSection("toc");
  if (ptk.attributes.toctag && section && section.length > 1) {
    const firstline = section.shift();
    const { name: name2 } = sourceType(firstline);
    if (!ptk.tocs) ptk.tocs = {};
    ptk.tocs[name2 || "*"] = new TableOfContent(section, name2);
    const toctags = ptk.attributes.toctag.split(",");
    buildTocTag.call(ptk, toctags);
  }
};

// basket/chunk.ts
function getCaption(at, short = false) {
  const chunktag = this.defines.ck;
  let caption2 = chunktag?.getInnertext(at);
  const id = chunktag?.fields?.id?.values[at];
  const onChunkCaption2 = this.template.onChunkCaption;
  if (!caption2) {
    caption2 = this.columns[chunktag?.column]?.keys?.get(at) || "";
    if (!caption2 && onChunkCaption2) caption2 = onChunkCaption2(id);
  }
  const at2 = caption2?.indexOf(";");
  let shortcaption = caption2 || "";
  if (~at2) {
    shortcaption = caption2.slice(at2);
    caption2 = caption2.slice(0, at2);
  }
  return short ? shortcaption : caption2;
}
function caption(at) {
  let caption2 = this.getCaption(at);
  let depth = 0;
  while (caption2 && caption2.endsWith("-")) {
    depth++;
    caption2 = caption2.slice(0, caption2.length - 1);
  }
  let at2 = at, parents = [];
  while (at2 > 0 && depth) {
    at2--;
    const par = this.getCaption(at2).split(/[- ]+/);
    const pdepth = par.length;
    while (!par[par.length - 1]) par.pop();
    if (pdepth - 1 > depth) {
    } else if (par.length > 1 || pdepth == 1) {
      while (par.length && depth) {
        parents.unshift("-" + par.pop());
        depth--;
      }
    }
  }
  return caption2 + parents.join("");
}
function nearestChunk(line) {
  const chunktag = this.defines.ck || this.defines.dk;
  const at = this.nearestTag(line, chunktag);
  return this.getChunk(at);
}
function getBookInfo(at) {
  const booktag = this.defines.bk;
  const bkid = booktag.fields.id.values[at];
  let bkcaption = booktag?.getInnertext(at);
  let short = bkcaption.slice(0, 2);
  const bkheading = booktag?.fields.heading?.values[at] || booktag?.getInnertext(at);
  const at2 = bkcaption.indexOf(";");
  if (~at2) {
    short = bkcaption.slice(at2 + 1);
    bkcaption = bkcaption.slice(0, at2);
  }
  return { id: bkid, caption: bkcaption, short, heading: bkheading, at };
}
function getChunk(at) {
  at = parseInt(at);
  const chunktag = this.defines.ck || this.defines.dk;
  const booktag = this.defines.bk;
  if (at < 0) return null;
  if (at >= chunktag.fields.id.values.length) return null;
  const line = chunktag.linepos[at];
  const bkat = this.nearestTag(line + 1, booktag);
  const bk = getBookInfo.call(this, bkat);
  const bkid = bk.id;
  const id = chunktag.fields.id.values[at];
  const innertext2 = chunktag.getInnertext(at);
  const caption2 = this.caption(at);
  const depth = chunktag.depths ? chunktag.depths[at] || 1 : 1;
  return {
    bk,
    bkid,
    bkat,
    caption: caption2,
    at,
    id,
    depth,
    line: chunktag.linepos[at],
    lineend: chunktag.linepos[at + 1] || -1,
    innertext: innertext2
  };
}
var resetBy = (ptk, tagname) => {
  for (let t in ptk.defines) {
    const tag = ptk.defines[t];
    if (tag.attrs.reset?.split(",").indexOf(tagname) > -1) {
      return t;
    }
  }
  return null;
};
function ancestorChunks(at, start) {
  const chunktag = this.defines.ck;
  if (!chunktag.depths) return [];
  let line = chunktag.linepos[at];
  let depth = chunktag.depths[at];
  const out2 = [];
  while (line > start && depth > 1) {
    if (depth > chunktag.depths[at]) {
      out2.unshift(at);
      depth--;
    }
    at--;
    line = chunktag.linepos[at];
  }
  return out2;
}
function prevsiblingChunk(at, start) {
  let p3 = at - 1;
  const chunktag = this.defines.ck;
  if (!chunktag.depths && at > 0) return at - 1;
  while (p3 > 0) {
    if (chunktag.depths[p3] == chunktag.depths[at]) return p3;
    else if (chunktag.depths[p3] < chunktag.depths[at]) break;
    p3--;
    if (start < chunktag.linepos[p3]) break;
  }
  return -1;
}
function nextsiblingChunk(at, end) {
  let p3 = at + 1;
  const chunktag = this.defines.ck;
  if (!chunktag.depths && at < end) return at + 1;
  while (p3 < chunktag.linepos.length) {
    if (chunktag.depths[p3] == chunktag.depths[at]) return p3;
    else if (chunktag.depths[p3] < chunktag.depths[at]) break;
    p3++;
    if (chunktag.linepos[p3] >= end) break;
  }
  return -1;
}
function firstChildChunk(at) {
  const chunktag = this.defines.ck;
  if (!chunktag.depths) return -1;
  if (chunktag.depths[at + 1] == chunktag.depths[at] + 1) return at + 1;
  return -1;
}
function neighborChunks(at) {
  const ptk = this;
  const resettag = this.defines[resetBy(this, "ck")];
  const nearest = resettag ? this.nearestTag(at, resettag) - 1 : 0;
  const start = resettag ? resettag.linepos[nearest] : 0;
  const end = resettag ? resettag.linepos[nearest + 1] || ptk.header.eot : ptk.header.eot;
  const ancestors = ancestorChunks.call(this, at, start);
  const out2 = ancestors.map((it) => ptk.getChunk.call(ptk, it));
  const prev = prevsiblingChunk.call(this, at);
  if (prev > -1 && (!ancestors.length || ancestors[ancestors.length - 1] < prev)) {
    out2.push(this.getChunk(prev));
  }
  out2.push(this.getChunk(at));
  const first = firstChildChunk.call(this, at, start);
  if (first > -1) out2.push(this.getChunk(first));
  const next = nextsiblingChunk.call(this, at, end);
  if (next > -1) out2.push(this.getChunk(next));
  return out2;
}

// basket/tagfeature.ts
function humanName(short, lang = "zh") {
  let n = this.attributes[lang] || this.name;
  const at = n.indexOf("|");
  if (at == -1) return n;
  return short ? n.slice(0, at) : n.slice(at + 1);
}
var enableTagFeature = (ptk) => {
  ptk.innertext = innertext;
  ptk.humanName = humanName;
  ptk.fetchAddress = fetchAddress;
  ptk.fetchAddressExtra = fetchAddressExtra;
  ptk.findClosestTag = findClosestTag;
  ptk.validId = validId;
  ptk.nearestTag = nearestTag;
  ptk.getTagFields = getTagFields;
  ptk.queryTagFields = queryTagFields;
  ptk.tagInRange = tagInRange;
  ptk.tagCount = tagCount;
  ptk.fetchTag = fetchTag;
  ptk.getTagById = getTagById;
  ptk.rangeOfAddress = rangeOfAddress;
  ptk.rangeOfElementId = rangeOfElementId;
  ptk.nearestChunk = nearestChunk;
  ptk.getChunk = getChunk;
  ptk.neighborChunks = neighborChunks;
  ptk.getCaption = getCaption;
  ptk.caption = caption;
  ptk.alignable = alignable;
};

// basket/features.ts
var enableFeature = (ptk, feature) => {
  if (feature == "tag") {
    enableTagFeature(ptk);
  } else if (feature == "toc") {
    enableTOCFeature(ptk);
  } else if (feature == "fts") {
    enableFTSFeature(ptk);
  } else if (feature == "backlink") {
    enableBacklinkFeature(ptk);
  } else if (feature == "footnote") {
    enableFootnoteFeature(ptk);
  }
};
var enableFeatures = (ptk, features) => {
  if (!Array.isArray(features)) features = [features];
  features.forEach((f) => enableFeature(ptk, f));
};
var enableFootnoteFeature = (ptk) => {
  ptk.inlineNote = inlineNote;
  ptk.footNoteAddress = footNoteAddress;
  ptk.footNoteByAddress = footNoteByAddress;
  ptk.footNoteInTSV = footNoteInTSV;
};
var enableAccelon23Features = (ptk) => {
  enableTagFeature(ptk);
  enableTOCFeature(ptk);
  enableFTSFeature(ptk);
  enableBacklinkFeature(ptk);
  enableFootnoteFeature(ptk);
  ptk.scanColumnFields = scanColumnFields;
  ptk.searchColumnField = searchColumnField;
  ptk.tagAtAction = tagAtAction;
  ptk.scanCache = {};
  ptk.queryCache = {};
  ptk.columnField = columnField;
  ptk.foreignLinksAtTag = foreignLinksAtTag;
  ptk.getParallelBook = getParallelBook;
  ptk.getParallelLine = getParallelLine;
  ptk.enumParallelsPtk = enumParallelsPtk;
  ptk.taggedLines = {};
  ptk.foreignlinks = {};
  ptk.addForeignLinks = addForeignLinks;
  ptk.addBacklinks = addBacklinks;
  ptk.backlinks = {};
  ptk.rowOf = rowOf;
  ptk.parallels = {};
};

// lineview/lisp.ts
function readToken(token) {
  if (token === "(") {
    return { type: 1 /* Opening */, value: null };
  } else if (token === ")") {
    return { type: 2 /* Closing */, value: null };
  } else {
    return { type: 3 /* Action */, value: token };
  }
}
function tokenize3(expression) {
  return expression.replace(/\(/g, "^(^").replace(/\)/g, "^)^").trim().split(/\^/).map(readToken);
}
function buildAST(tokens) {
  let depth = 0;
  const out2 = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type == 1 /* Opening */) {
      depth++;
    } else if (token.type == 2 /* Closing */) {
      if (depth > 0) depth--;
    } else {
      out2.push([depth, token.value]);
    }
  }
  return out2;
}
function parseLisp(expression) {
  return buildAST(tokenize3(expression));
}

// lineview/loadline.ts
async function loadLines(lva, noparallel = false) {
  const jobs = [], out2 = [];
  const divisions = lva.divisions();
  const pitaka_lines = {};
  for (let i = 0; i < divisions.length; i++) {
    if (!pitaka_lines[divisions[i].ptkname]) pitaka_lines[divisions[i].ptkname] = [];
    pitaka_lines[divisions[i].ptkname].push(...divisions[i].getLines());
    const parallels = divisions[i].ownerdraw ? [] : divisions[i].getParallelWithDiff();
    const ptk = usePtk(divisions[i].ptkname);
    if (!noparallel) {
      for (let j2 = 0; j2 < parallels.length; j2++) {
        const [pptk, linediff] = parallels[j2];
        if (!ptk.parallels[pptk.name]) continue;
        let lines = divisions[i].getLines();
        if (linediff) lines = lines.map((it) => it + linediff);
        if (!pitaka_lines[pptk.name]) pitaka_lines[pptk.name] = [];
        pitaka_lines[pptk.name].push(...lines);
      }
    }
  }
  for (const ptkname in pitaka_lines) {
    const ptk = usePtk(ptkname);
    if (!ptk) continue;
    pitaka_lines[ptkname].sort((a, b) => a - b);
    jobs.push(ptk.loadLines(pitaka_lines[ptkname]));
  }
  await Promise.all(jobs);
  let seq = 0;
  for (let i = 0; i < divisions.length; i++) {
    const { action, ptkname, depth, ownerdraw, highlightline, first, from, closable } = divisions[i];
    const ptk = usePtk(ptkname);
    if (ownerdraw) {
      out2.push({ seq, idx: i, ownerdraw, depth, ptkname, key: ptkname + ":" + action, closable });
      seq++;
      continue;
    }
    if (!ptk) continue;
    const segment = [];
    const lines = divisions[i].getLines();
    const linetexts = ptk.getLines(lines);
    const prevdepth = i ? divisions[i - 1].depth : 0;
    const onLineText2 = ptk.template?.onLineText;
    for (let j2 = 0; j2 < linetexts.length; j2++) {
      const text = onLineText2 ? onLineText2(linetexts[j2], lines[j2]) : linetexts[j2];
      let edge = 0;
      if (j2 === 0) edge |= 1;
      if (j2 === linetexts.length - 1) edge |= 2;
      if (depth > prevdepth && edge & true && out2.length) out2[out2.length - 1].edge ^= 2;
      if (prevdepth > depth && edge & true) edge ^= 1;
      const closable2 = edge == 1 || edge == 3 || !divisions[i].diggable;
      const sponsor = "";
      const correspondences = from == 0 && j2 == 0 ? ptk.template?.getCorrespondence(ptk, lines[j2]) : [];
      const highlight = highlightline - divisions[i].from == j2;
      segment.push({
        seq,
        idx: j2 == 0 ? i : -1,
        ptkname,
        key: ptkname + ":" + lines[j2],
        line: lines[j2],
        highlight,
        text,
        depth,
        edge,
        closable: closable2,
        sponsor,
        correspondences
      });
      seq++;
    }
    out2.push(...segment);
  }
  lva.loadedItems = out2;
  return out2;
}
async function load(lva) {
  if (typeof lva == "undefined") lva = this;
  else if (typeof lva == "string") lva = new LVA(lva);
  const divisions = lva.divisions();
  let pitakas = {};
  for (let i = 0; i < divisions.length; i++) {
    const ptkname = divisions[i].ptkname;
    if (!pitakas[ptkname]) pitakas[ptkname] = [];
    pitakas[ptkname].push(divisions[i]);
  }
  const jobs = [];
  for (let ptkname in pitakas) {
    const ptk = await openPtk(ptkname);
    if (!ptk) {
    }
  }
  await Promise.all(jobs);
  for (let i = 0; i < divisions.length; i++) {
    await divisions[i].run();
  }
  const out2 = await loadLines(lva);
  return out2;
}

// align/parallels.ts
var parallelWithDiff = (ptk, line, includeself = false, local = true, remote = false) => {
  const out2 = [];
  if (!ptk) return out2;
  const bkat = ptk.nearestTag(line + 1, "bk");
  const bookstart = ptk.defines.bk.linepos[bkat];
  if (includeself) {
    out2.push([ptk, bookstart, line]);
  }
  const lineoff = line - bookstart;
  const bkid = ptk.defines.bk.fields.id.values[bkat];
  const books = ptk.getParallelBook(bkid);
  const [bkstart, bkend] = ptk.rangeOfAddress("bk#" + bkid);
  if (local) {
    for (let i = 0; i < books.length; i++) {
      const [start, end] = ptk.rangeOfAddress("bk#" + books[i]);
      if (lineoff <= end - start) {
        out2.push([ptk, start - bookstart, start + lineoff]);
      }
    }
  }
  if (remote) {
    const parallelPitakas = poolParallelPitakas(ptk);
    for (let i = 0; i < parallelPitakas.length; i++) {
      const pptk = usePtk(parallelPitakas[i]);
      const lines = pptk.getParallelLine(ptk, line, true);
      lines.forEach((it) => out2.push([...it]));
    }
  }
  return out2;
};
var getParallelLines = async (ptk, line, _out, opts = {}) => {
  const lines = parallelWithDiff(ptk, line, true, opts.local, opts.remote);
  const out2 = [];
  for (let i = 0; i < lines.length; i++) {
    const [ptk2, bookstart, line2] = lines[i];
    await ptk2.loadLines([line2]);
    const linetext = ptk2.getLine(line2);
    const heading = ptk2.getHeading(line2);
    out2.push({ ptk: ptk2, heading, linetext, line: line2 });
  }
  if (_out) _out.push(...out2);
  return out2;
};

// lineview/baseaction.ts
var ACTIONPAGESIZE2 = 5;
var EXCERPTACTIONPREFIX = "*";
var GUIDEACTIONPREFIX = "!";
var TITLECOUNTACTIONPREFIX = "~";
var OWNERDRAWPREFIX = "@";
var COLUMNFIELDSEP = ".";
var Action = class _Action {
  constructor(addr, depth = 0, dividx = 0) {
    this.act = _Action.parse(addr.action);
    this.action = addr.action;
    this.depth = depth;
    this.first = 0;
    this.last = 0;
    this.highlightline = addr.highlightline || -1;
    this.from = addr.from;
    this.till = addr.till || -1;
    this.res = [];
    this.text = "";
    this.lines = [];
    this.diggable = false;
    this.closable = true;
    this.ptkname = addr.ptkname;
    this.opts = {};
    this.dividx = dividx;
    this.pagable = true;
  }
  async run() {
  }
  lineOf(idx2) {
    return this.first + idx2;
  }
  getLines() {
    const out2 = [];
    let till = this.till;
    if (till == -1) till = this.from + ACTIONPAGESIZE2;
    for (let i = this.from; i < till; i++) {
      const line = this.lineOf(i);
      if (line < this.first || line >= this.last) continue;
      out2.push(line);
    }
    return out2;
  }
  getParallelWithDiff() {
    const ptk = usePtk(this.ptkname);
    return parallelWithDiff(ptk, this.first + this.from);
  }
  static parse(action) {
    return parseCriteria(action);
  }
};

// lineview/rangeaction.ts
var RangeAction = class extends Action {
  constructor(addr, depth = 0) {
    super(addr, depth);
    this.eleid = this.action;
    this.address = addr;
    this.diggable = true;
  }
  async run() {
    const ptk = usePtk(this.ptkname);
    [this.first, this.last] = ptk.rangeOfAddress(this.address);
  }
};

// lineview/guideaction.ts
var GuideAction = class extends Action {
  constructor(addr, depth = 0) {
    super(addr, depth);
    this.address = addr;
  }
  async run() {
    const ptk = usePtk(this.ptkname);
    const caption2 = ptk.innertext(this.address);
    let { name: name2 } = this.act[0];
    let out2 = [];
    const action = this.address.action.slice(1);
    const idx2 = this.dividx;
    const actionprefix = GUIDEACTIONPREFIX;
    if (ptk.template.guidedrawer) {
      this.ownerdraw = { painter: ptk.template.guidedrawer, data: {
        from: this.from,
        actionprefix,
        idx: idx2,
        name: name2,
        action,
        caption: caption2,
        ptk
      } };
      return;
    }
    if (ptk.template.parseChoice) {
      const [choices, groupby, groupfilter] = ptk.template.parseChoice(action);
      const col = ptk.columns[ptk.template.filterColumn];
      const master = ptk.defines[col.attrs.master];
      let { items, groups } = ptk.template.runFilter(ptk, col, { choices, groupby, groupfilter });
      out2 = items.map((idx3) => {
        const line = master.linepos[idx3];
        const ck = ptk.nearestChunk(line);
        const size = (master.linepos[idx3 + 1] ? master.linepos[idx3 + 1] : ptk.header.eot) - line;
        const lineoff = line - ck.line;
        const record = [];
        const recordend = master.linepos[idx3 + 1];
        for (let i = 0; i < col.fieldnames.length; i++) {
          const def = ptk.defines[col.fieldnames[i]];
          if (!def) continue;
          const at = bsearchNumber(def.linepos, line);
          if (def.linepos[at] < recordend) {
            record.push(def.linepos[at]);
          }
        }
        if (!ck) return null;
        return { chunkname: ck.name, line, size, ck, lineoff, record };
      }).filter((it) => !!it);
    }
    this.ownerdraw = { painter: "guide", data: {
      from: this.from,
      actionprefix,
      idx: idx2,
      items: out2,
      name: name2,
      action,
      caption: caption2,
      ptk
    } };
  }
};

// lineview/customaction.ts
var CustomAction = class extends Action {
  constructor(addr, depth = 0) {
    super(addr, depth);
    this.painter = addr.action.slice(1);
    this.ptkname = addr.ptkname;
    this.diggable = true;
  }
  async run() {
    let items;
    const ptk = await usePtk(this.ptkname);
    if (this.painter == "systeminfo") {
      items = [];
    }
    this.ownerdraw = { painter: this.painter, data: { ptk, items, name: this.address, ptkname: this.ptkname } };
    this.last = 1;
  }
};

// lineview/excerptaction.ts
var ExcerptAction = class extends Action {
  constructor(addr, depth = 0) {
    super(addr, depth);
  }
  lineOf(idx2) {
    return this.lines[idx2];
  }
  async run() {
    const ptk = usePtk(this.ptkname);
    let { name: name2, tofind } = this.act[0];
    const section = name2.slice(1);
    const { lines, chunks } = listExcerpts(ptk, tofind, { range: section });
    let till = this.till;
    let from = this.from;
    if (till == -1) till = this.from + ACTIONPAGESIZE;
    let arr = lines;
    this.first = 0;
    this.last = arr.length;
    if (till >= arr.length) till = arr.length;
    arr = arr.slice(from, till);
    const lines2 = arr.map((it) => parseInt(it[0]));
    const hits = arr.map((it) => it[1].map((n) => Math.floor(n / MAXPHRASELEN)));
    const phraselength = arr.map((it) => it[1].map((n) => n % MAXPHRASELEN));
    const cobj = fromObj(chunks, (a, b) => a);
    const samechunkline = cobj.length == 1 ? cobj[0] : -1;
    const at = ptk.header.fulltext.indexOf(section);
    const caption2 = ptk.header.fulltextcaption[at];
    this.ownerdraw = { painter: "excerpt", data: {
      last: this.last,
      samechunkline,
      section,
      from: this.from,
      name: name2,
      hitcount,
      caption: caption2,
      ptk,
      tofind,
      lines: lines2,
      hits,
      phraselength
    } };
  }
};

// lexicon/backref.ts
var lookupKeyColumn = (ptk, name2, key, keycolname) => {
  const column = ptk.columns[name2];
  let at = column.findKey(key);
  if (keycolname) {
    const keycolumn = ptk.columns[keycolname];
    const norm_at = keycolumn.fieldnames.indexOf("norm");
    const at2 = keycolumn.findKey(key);
    if (~norm_at) {
      const norm = keycolumn.fieldvalues[norm_at][at2];
      if (norm) {
        key = norm;
        at = column.findKey(key);
      }
    }
  }
  if (!~at) return [];
  const out2 = column.fieldvalues[1][at];
  return out2;
};
var countMembers = (items, foreigncol, tofind, col) => {
  const members = {};
  const tofinds = tofind.split(",");
  for (let i = 0; i < items.length; i++) {
    const at = foreigncol.findKey(items[i]);
    const list = foreigncol.fieldvalues[0][at];
    for (let i2 = 0; i2 < list?.length; i2++) {
      if (!members[list[i2]]) members[list[i2]] = 0;
      members[list[i2]]++;
    }
  }
  let arr = fromObj(members, true);
  if (tofind && arr.length) {
    if (col.findKey(tofinds[0]) == arr[0][0]) {
      arr.shift();
    }
    const avg = arr.reduce((acc, it) => it[1] + acc, 0) / arr.length;
    arr = arr.filter((it) => it[1] >= avg / 2);
    let drop = tofinds.length - 1;
    while (drop) {
      arr.shift();
      drop--;
    }
  }
  return arr;
};
var threshold = 0.7;
var calApprox = (col, members) => {
  let idx2 = 0;
  if (col.attrs.keytype !== "serial") idx2++;
  const out2 = [];
  const values = col.fieldvalues[idx2];
  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    const similarity = similarSet(v, members);
    if (similarity > threshold) {
      out2.push([i, similarity]);
    }
  }
  return out2;
};

// lineview/booleanexcerptaction.ts
var BooleanExcerptAction = class extends Action {
  constructor(addr, depth = 0) {
    super(addr, depth);
  }
  async run() {
    let hitcount2 = 0, caption2, lines = [], hits = [], phraselength = [], samechunkline;
    const ptk = usePtk(this.ptkname);
    let { name: name2, tofind } = this.act[0];
    const [colname, members] = name2.slice(1).split("@");
    const tofinds = tofind.split(",");
    const refcolname = colname.replace(/s$/, "");
    const items = intersects(tofinds.map((it) => lookupKeyColumn(ptk, refcolname, it, members)));
    const linepos = ptk.defines[colname].linepos;
    lines = items.map((it) => linepos[it]);
    let till = this.till;
    let from = this.from;
    if (till == -1) till = this.from + ACTIONPAGESIZE;
    this.first = 0;
    this.last = lines.length;
    if (till >= lines.length) till = lines.length;
    lines = lines.slice(from, till);
    this.ownerdraw = { painter: "excerpt", data: {
      last: this.last,
      samechunkline,
      from: this.from,
      name: name2,
      hitcount: hitcount2,
      caption: caption2,
      ptk,
      tofind,
      lines,
      hits,
      phraselength
    } };
  }
};

// lineview/approxaction.ts
var ApproxAction = class extends Action {
  constructor(addr, depth = 0) {
    super(addr, depth);
  }
  lineOf(idx2) {
    return this.lines[idx2];
  }
  getApprox(ptk, tagname, id) {
    if (ptk.template.getApprox) {
      return ptk.template.getApprox(ptk, tagname, id);
    }
    const col = ptk.columns[tagname];
    const at = col.findKey(id);
    const members = col.fieldvalues[0][at];
    const approx = calApprox(col, members);
    const out2 = approx.map(([at2, similarity]) => {
      const _id = col.keys ? col.keys.get(at2) : at2 + 1;
      const linepos = ptk.defines[tagname].linepos;
      return id == _id ? null : { id: _id, similarity, line: linepos[at2] };
    }).filter((it) => !!it).sort((a, b) => b.similarity - a.similarity);
    return out2;
  }
  async run() {
    let hitcount2 = 0, caption2, samechunkline;
    const ptk = usePtk(this.ptkname);
    let { name: name2, tofind } = this.act[0];
    const tagname = name2.slice(1);
    const id = tofind.slice(tofind.indexOf("~") + 1);
    const items = this.getApprox(ptk, tagname, id);
    const similarity = items.map((it) => it.similarity);
    let lines = items.map((it) => it.line);
    let till = this.till || items.length;
    let from = this.from || 0;
    if (till == -1) till = from + ACTIONPAGESIZE;
    this.first = 0;
    this.last = lines.length;
    if (till >= lines.length) till = lines.length;
    this.ownerdraw = { painter: "approx", data: {
      last: this.last,
      samechunkline,
      from: this.from,
      name: name2,
      hitcount: hitcount2,
      caption: caption2,
      ptk,
      tofind,
      lines,
      similarity
    } };
  }
};

// lineview/titlecountaction.ts
var TitleCountAction = class extends Action {
  constructor(addr, depth = 0) {
    super(addr, depth);
  }
  lineOf(idx2) {
    return this.lines[idx2];
  }
  async run() {
    const ptk = usePtk(this.ptkname);
    let { name: name2, tofind } = this.act[0];
    const address = name2.slice(1);
    const sectionrange = address ? ptk.rangeOfAddress(address) : [0, ptk.header.eot + 1];
    const caption2 = ptk.innertext(address);
    const [sectionfrom, sectionto] = sectionrange.map((it) => ptk.inverted.tokenlinepos[it]);
    let chunkcountobj = {}, hitcount2 = 0, items = [];
    const chunktag = ptk.defines.ck;
    const bktag = ptk.defines.bk;
    if (!tofind) {
      const at1 = chunktag ? bsearchNumber(chunktag.linepos, sectionrange[0]) : 0;
      const at2 = chunktag ? bsearchNumber(chunktag.linepos, sectionrange[1]) + 1 : 0;
      let pagesize = this.till - this.from;
      if (pagesize < ACTIONPAGESIZE) pagesize = ACTIONPAGESIZE;
      for (let j2 = at1 + this.from; j2 < at2; j2++) {
        const title = chunktag.getInnertext(j2);
        const line = chunktag.linepos[j2];
        const ck = ptk.nearestChunk(line + 1);
        const address2 = makeChunkAddress(ck);
        const caption3 = ck.caption;
        if (items.length >= pagesize) break;
        items.push({ id: ck.id, bkid: ck.bkid, caption: caption3, title, count: -1, address: address2, line });
      }
      this.ownerdraw = { painter: "titlecount", data: {
        last: at2 - at1,
        from: this.from,
        name: name2,
        hitcount: hitcount2,
        caption: caption2,
        ptk,
        tofind,
        items
      } };
      return;
    }
    const [phrases, postings] = await ptk.parseQuery(tofind);
    for (let i = 0; i < postings.length; i++) {
      const pl = plTrim(postings[i], sectionfrom, sectionto);
      const [pllines] = plContain(pl, ptk.inverted.tokenlinepos);
      for (let j2 = 0; j2 < pllines.length; j2++) {
        const at = bsearchNumber(chunktag.linepos, pllines[j2]);
        if (!chunkcountobj[at]) chunkcountobj[at] = 0;
        chunkcountobj[at]++;
        hitcount2++;
      }
    }
    let till = this.till;
    let from = this.from;
    if (till == -1) till = this.from + ACTIONPAGESIZE;
    let arr = fromObj(chunkcountobj, (a, b) => [parseInt(a), b]).sort((a, b) => b[1] - a[1]);
    this.last = arr.length;
    if (till >= arr.length) till = arr.length;
    arr = arr.slice(from, till);
    items = arr.map((it) => {
      const count = it[1];
      const chunk = it[0];
      const ck = ptk.nearestChunk(chunktag.linepos[chunk]);
      const address2 = makeChunkAddress(ck);
      return { id: ck.id, count, address: address2, caption: ck.caption, title: ck.caption };
    });
    this.first = 0;
    this.ownerdraw = { painter: "titlecount", data: {
      last: this.last,
      from: this.from,
      name: name2,
      hitcount: hitcount2,
      caption: caption2,
      ptk,
      tofind,
      items
    } };
  }
};

// lineview/queryaction.ts
var QueryAction = class extends Action {
  constructor(addr, depth = 0) {
    super(addr, depth);
  }
  lineOf(idx2) {
    if (idx2 >= this.res.length) return -1;
    return this.res[idx2].line;
  }
  searchLexicon(ptk, name2, tofind) {
    const lexicon = ptk.primarykeys[name2];
    let matcher = lexicon.enumMiddle;
    let enummode = 1;
    if (tofind[0] == "$") {
      enummode = 0;
      matcher = lexicon.enumStart;
      tofind = tofind.slice(1);
    } else if (tofind[tofind.length - 1] == "$") {
      enummode = 2;
      matcher = lexicon.enumEnd;
      tofind = tofind.slice(0, tofind.length - 1);
    }
    const items = matcher.call(lexicon, tofind);
    const tagname = ptk.columns[name2]?.attrs?.tagname;
    const foreign = ptk.columns[name2]?.attrs?.foreign || ptk.columns[name2]?.fieldnames[0];
    const backref = ptk.columns[name2]?.attrs?.backref;
    this.last = 1;
    this.till = 1;
    const caption2 = ptk.columns[name2]?.caption;
    this.ownerdraw = {
      painter: "queryresult",
      data: { querytype: "BME", name: name2, caption: caption2, ptk, tagname, foreign, tofind, items, backref, lexicon }
    };
  }
  async run() {
    const ptk = usePtk(this.ptkname);
    for (let i = 0; i < this.act.length; i++) {
      let { name: name2, tofind } = this.act[i];
      if (ptk.primarykeys[name2]) return this.searchLexicon(ptk, name2, tofind);
      else if (name2.indexOf(COLUMNFIELDSEP)) {
        const [column, field] = name2.split(COLUMNFIELDSEP);
        const out2 = ptk.searchColumnField(column, field, tofind);
        this.last = out2.contain.length;
        this.till = this.from + 5;
        if (this.till + 1 >= this.last) this.till = this.last - 1;
        const items = out2.contain.slice(this.from, this.till).map((it) => {
          return it;
        });
        const caption2 = field;
        this.ownerdraw = { painter: "queryresult", data: { ptk, caption: caption2, column, field, tofind, items, from: this.from, last: this.last } };
      }
    }
  }
};

// lineview/action.ts
var makeExcerptAddress = (ptkname, section, tofind, chunk = "") => {
  return EXCERPTACTIONPREFIX + section + (chunk ? "." + chunk : "") + "=" + tofind;
};
var createAction = (addr, depth = 0) => {
  const at = addr.action.indexOf("=");
  const atype = addr.action.slice(0, 1);
  if (at > 0) {
    if (atype == EXCERPTACTIONPREFIX) {
      if (~addr.action.indexOf(OWNERDRAWPREFIX)) {
        return new BooleanExcerptAction(addr, depth);
      } else if (~addr.action.indexOf(TITLECOUNTACTIONPREFIX)) {
        return new ApproxAction(addr, depth);
      } else {
        return new ExcerptAction(addr, depth);
      }
    } else if (atype == TITLECOUNTACTIONPREFIX) {
      return new TitleCountAction(addr, depth);
    } else {
      return new QueryAction(addr, depth);
    }
  } else {
    if (atype == OWNERDRAWPREFIX) {
      return new CustomAction(addr, depth);
    } else if (atype == GUIDEACTIONPREFIX) {
      return new GuideAction(addr, depth);
    } else {
      return new RangeAction(addr, depth);
    }
  }
};
var createNestingAction = (address, ctx) => {
  const addr = parseAddress(address);
  if (!addr) return null;
  if (addr.action) ctx.actions[ctx.depth] = addr.action;
  if (addr.ptkname) ctx.ptknames[ctx.depth] = addr.ptkname;
  addr.action = addr.action || ctx.actions[ctx.depth] || ctx.same_level_action;
  addr.ptkname = addr.ptkname || ctx.ptknames[ctx.depth] || ctx.same_level_ptkname;
  ctx.same_level_ptkname = addr.ptkname;
  ctx.same_level_action = addr.action;
  if (addr.from && addr.till && addr.till < addr.from) addr.till = addr.from;
  return createAction(addr, ctx.depth);
};

// lineview/lva.ts
var LVA2 = class _LVA {
  loadedItems;
  _divisions;
  constructor(addresses = "") {
    this._divisions = _LVA.parse(addresses);
    this.load = load;
    this.loadedItems = [];
  }
  divisions() {
    return this._divisions;
  }
  getNode(idx2) {
    return this._divisions[idx2];
  }
  remove(idx2) {
    if (typeof idx2 !== "number") {
      idx2 = this._divisions.indexOf(idx2);
    }
    if (!this._divisions.length) return;
    if (this._divisions.length == 1) {
      this._divisions = [];
      return this;
    }
    const depth = this._divisions[idx2]?.depth;
    let next = idx2 + 1;
    let nextdepth = this._divisions[next]?.depth;
    while (next < this._divisions.length && nextdepth > depth) {
      next++;
      nextdepth = this._divisions[next]?.depth;
    }
    if (next - idx2 > 1) {
      this._divisions.splice(idx2 + 1, next - idx2);
      this._combine();
    }
    this._divisions.splice(idx2, 1);
    this._combine();
    return this;
  }
  static stringify(lvnode, hideptkname = false, hideaction = false) {
    const { depth, action, from, till, highlightline, ptkname } = lvnode;
    return (ptkname && (!action || !hideptkname) ? ptkname + ":" : "") + (hideaction ? "" : action) + (from ? ">" + from : "") + (till > 0 ? "<" + till : "") + (highlightline > -1 ? ":" + highlightline : "");
  }
  stringify(lvnode, hideptkname = false, hideaction = false) {
    if (typeof lvnode == "number") lvnode = this.divisions(lvnode);
    if (!lvnode) return this.serialize();
    return _LVA.stringify(lvnode, hideptkname, hideaction);
  }
  firstChild(idx2) {
    if (idx2 < this._divisions.length - 1) return;
    const firstchild = this._divisions[idx2 + 1];
    if (firstchild && firstchild.depth == this._divisions[idx2].depth + 1) {
      return firstchild;
    }
  }
  serialize() {
    if (!this._divisions && !this._divisions.length) return "";
    let prevdepth = 0, same_level_ptkname = "", activeptkname;
    const firstdepth = this._divisions[0]?.depth || 0;
    const out2 = [], ptknames = [], actions = [];
    for (let i = 0; i < this._divisions.length; i++) {
      const { depth, from, till, ptkname, action } = this._divisions[i];
      if (depth > prevdepth) out2.push("(");
      else if (prevdepth > depth) out2.push(")");
      if (ptkname) {
        activeptkname = ptkname;
        ptknames[depth] = ptkname;
      }
      activeptkname = activeptkname || ptknames[depth] || same_level_ptkname;
      out2.push(_LVA.stringify(this._divisions[i], activeptkname == same_level_ptkname, action == actions[depth]));
      if (action) actions[depth] = action;
      same_level_ptkname = activeptkname;
      prevdepth = depth;
    }
    while (prevdepth > firstdepth) {
      prevdepth--;
      out2.push(")");
    }
    return out2.join("^").replace(/\^?([\(\)])\^?/g, "$1").replace(/\++/g, "^");
  }
  removeSameAction(newaddr, from = 0, depth = -1) {
    let p3 = from;
    while (p3 < this._divisions.length && this._divisions[p3].depth > depth) {
      if (sameAddress(this._divisions[p3], newaddr) && newaddr.action) {
        this._divisions.splice(p3, 1);
        return p3;
        break;
      }
      p3++;
    }
    return -1;
  }
  findAction(action) {
    for (let i = 0; i < this._divisions.length; i++) {
      if (this._divisions[i].action == action) return i;
    }
    return -1;
  }
  canless(idx2) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return;
    return division.till - division.from > ACTIONPAGESIZE;
  }
  canmore(idx2) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return;
    const pagesize = this.getViewPageSize(division);
    return (division.till > 0 ? division.till : 0) < division.last - division.first;
  }
  cannext(idx2) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return;
    if (!division.pagable && !division.ownerdraw?.pagable) return;
    const pagesize = this.getViewPageSize(division);
    return division.last - division.first > pagesize;
  }
  canprev(idx2) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return;
    if (!division.pagable && !division.ownerdraw?.pagable) return;
    return division.from > 0;
  }
  canpromote(idx2) {
    if (idx2 < 1) return;
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return;
    if (division.depth > 0) return true;
  }
  promote(idx2) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return this;
    if (!this.canpromote(idx2)) return this;
    division.depth = 0;
    this._divisions.splice(idx2, 1);
    this._divisions.unshift(division);
    this._combine();
    return this;
  }
  less(idx2) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return this;
    division.till -= ACTIONPAGESIZE;
    if (division.till - ACTIONPAGESIZE < division.from) division.till = division.from + ACTIONPAGESIZE;
    return this;
  }
  more(idx2) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return this;
    let linecount = division.last - division.first;
    const till = division.till;
    if (till == -1) division.till = division.from + ACTIONPAGESIZE;
    else division.till += ACTIONPAGESIZE;
    if (division.till > linecount) division.till = linecount;
    return this;
  }
  getViewPageSize(division) {
    let pagesize = division.till - division.from;
    const linecount = division.last - division.first;
    if (pagesize < ACTIONPAGESIZE) {
      pagesize = ACTIONPAGESIZE;
      if (pagesize > linecount) {
        pagesize = division.last - division.first;
      }
    }
    return pagesize;
  }
  removeChildren(idx2) {
    const depth = this._divisions[idx2]?.depth;
    const action = this._divisions[idx2]?.action;
    const ptkname = this._divisions[idx2]?.ptkname;
    for (let i = idx2 + 1; i < this._divisions.length; i++) {
      if (this._divisions[i].depth > depth) {
        this._divisions[i] = null;
      } else if (this._divisions[i].action !== action || this._divisions[i].ptkname !== ptkname) break;
    }
    this._divisions = this._divisions.filter((it) => !!it);
    this._combine();
  }
  next(idx2, nline) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return;
    this.removeChildren(idx2);
    const linecount = division.last - division.first;
    const pagesize = this.getViewPageSize(division);
    if (linecount <= pagesize || linecount <= ACTIONPAGESIZE) return this;
    if (division.till == -1) division.till = division.from + ACTIONPAGESIZE;
    division.from += nline || pagesize;
    if (division.from < 0) division.from = 0;
    division.till = division.from + pagesize;
    if (division.from + 1 > linecount) division.from = linecount - 1;
    if (division.till > linecount) division.till = linecount;
    return this;
  }
  end(idx2) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return;
    const linecount = division.last - division.first;
    const pagesize = this.getViewPageSize(division);
    division.till = linecount;
    if (linecount > pagesize) {
      division.from = division.till - pagesize;
    } else {
      division.from = 0;
    }
    return this;
  }
  start(idx2) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return;
    this.removeChildren(idx2);
    const linecount = division.last - division.first;
    const pagesize = this.getViewPageSize(division);
    if (linecount <= pagesize || linecount <= ACTIONPAGESIZE) return this;
    division.from = 0;
    division.till = pagesize;
    if (division.till > linecount) division.till = linecount;
    return this;
  }
  prev(idx2, pgsize) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return;
    const pagesize = this.getViewPageSize(division);
    division.from -= pgsize || pagesize;
    if (division.from < 0) division.from = 0;
    division.till = division.from + pagesize;
    return this;
  }
  top(idx2) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return;
    const pagesize = division.till - division.from;
    division.from = 0;
    division.till = pagesize;
    return this;
  }
  setFrom(idx2, from) {
    const division = this._divisions[idx2];
    if (!division) return;
    division.from = from;
    if (division.till !== -1) division.till = division.from + ACTIONPAGESIZE;
    if (division.till > division.last - division.first) division.till = division.last - division.first;
    return this;
  }
  insert(addr, idx2 = 0) {
    const newaddr = parseAddress(addr);
    if (!newaddr) return this;
    newaddr.ptkname = newaddr.ptkname || this._divisions[idx2]?.ptkname || this._divisions[idx2 - 1]?.ptkname;
    const removeat = this.removeSameAction(newaddr);
    if (removeat > -1) {
      if (removeat !== idx2) this._divisions.splice(idx2, 0, newaddr);
    } else {
      this._divisions.splice(idx2, 0, newaddr);
    }
    return this;
  }
  changeAction(newaction, idx2 = 0, reset = false) {
    const division = typeof idx2 == "number" ? this._divisions[idx2] : idx2;
    if (!division) return this;
    if (reset) {
      division.from = 0;
      division.till = ACTIONPAGESIZE;
    }
    division.action = newaction;
    return this;
  }
  dig(digaddr, idx2 = 0, nline = 0) {
    const newaddr = parseAddress(digaddr);
    if (!newaddr) return this;
    newaddr.ptkname = newaddr.ptkname || this._divisions[idx2].ptkname;
    const newaction = createAction(newaddr, 0, idx2);
    if (!this._divisions || !this._divisions.length) {
      this._divisions.push(newaddr);
      return this;
    }
    if (sameAddress(this._divisions[idx2], newaddr)) return this;
    if (!this._divisions[idx2].diggable) {
      const removeat = this.removeSameAction(newaddr);
      if (removeat == -1 || removeat > idx2) {
        this._divisions.splice(idx2, 0, newaddr);
      }
      return;
    }
    let depth = this._divisions[idx2].depth;
    if (this._divisions.length > 1 && idx2 < this._divisions.length - 1 && this._divisions[idx2 + 1].depth == depth + 1) {
      const removeat = this.removeSameAction(newaddr, idx2 + 1, depth);
      if (~removeat && idx2 + 1 == removeat) {
        this._combine();
        return this;
      }
      newaddr.depth = this._divisions[idx2].depth + 1;
      this._divisions.splice(idx2 + 1, 0, newaddr);
      return this;
    }
    const addr = this._divisions[idx2];
    const splitat = addr.from + (nline || 0);
    let breakleft, breakright;
    const toinsert = parseAddress(digaddr);
    if (addr.from && addr.till && addr.till == addr.from || splitat + 1 >= addr.last - addr.first) {
      breakleft = addr;
      if (addr.action == toinsert.action) {
        this._divisions.splice(idx2, 1);
        return this;
      }
    } else {
      breakleft = Object.assign({}, addr, { till: splitat + 1 });
      breakright = Object.assign({}, addr, { from: splitat + 1 });
    }
    toinsert.depth = breakleft.depth + 1;
    const out2 = [breakleft, toinsert];
    if (breakright) out2.push(breakright);
    this._divisions.splice(idx2, 1, ...out2);
    return this;
  }
  _combine() {
    const out2 = [];
    let i = 0;
    while (i < this._divisions.length) {
      const { ptkname, from, till, action, depth } = this._divisions[i];
      let next = this._divisions[i + 1];
      out2.push(this._divisions[i]);
      while (i < this._divisions.length && next && next.ptkname == ptkname && next.action == action && next.depth == depth && next.from == till) {
        this._divisions[i].till = next.till;
        i++;
        next = this._divisions[i + 1];
      }
      i++;
    }
    this._divisions = out2;
    return this;
  }
  static parse(addresses) {
    if (!addresses) return [];
    const expr = parseLisp(addresses);
    const ctx = { same_level_ptkname: "", same_level_action: "", ptknames: [], actions: [] };
    const divisions = expr.map(([depth, action]) => {
      ctx.depth = depth;
      return createNestingAction(action, ctx);
    }).filter((it) => !!it);
    return divisions;
  }
};

// lineview/lineviewmenu.ts
var getOfftextLineClass = (ptk, offtext, attr) => {
  const out2 = [];
  if (!offtext?.tags?.length) return [];
  const tags = offtext.tags;
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    const def = ptk.defines[tag.name];
    if (!def) continue;
    const value = def.attrs[attr];
    if (typeof value !== "undefined") {
      const backref = def.attrs.backref;
      out2.push({
        tagname: tag.name,
        attrs: tag.attrs,
        defattrs: def.attrs,
        id: tag.attrs.id,
        ptk,
        backref,
        attr,
        value,
        choff: tag.choff
      });
    }
  }
  return out2;
};

// lexicon/listwords.ts
var listwords = (text, lexicon) => {
  let line = text.first(), linecount = 0;
  const patterns = {};
  while (line || line == "") {
    let i = 0;
    while (i < line.length) {
      const cp = line.charCodeAt(i);
      if (cp >= 903168 && cp <= 57343) i++;
      const matches = lexicon.matchLongest(line.slice(i));
      if (matches.length) {
        matches.forEach((m4) => incObj(patterns, m4[0]));
      }
      i++;
    }
    line = text.next();
    linecount++;
    if (linecount % 1024 == 0) process.stdout.write("\r" + linecount + "/" + text.len() + "   ");
  }
  const arr = fromObj(patterns, true).filter((it) => !!it[0]);
  return arr;
};

// lexicon/boolean.ts
var lexiconUnion = (lexicons) => {
  if (!lexicons || lexicons.length < 2) return lexicons;
  let out2 = lexicons[0];
  for (let i = 1; i < lexicons.length; i++) {
    out2 = out2.concat(lexicons[i]);
  }
  return unique(out2);
};
var lexiconIntersect = (lexicons) => {
  if (!lexicons || lexicons.length < 2) return lexicons;
  lexicons.sort((a, b) => b.length - a.length);
  let out2 = unique(lexicons[0]);
  for (let i = 1; i < lexicons.length; i++) {
    const arr = unique(lexicons[i]);
    const res = [];
    for (let j2 = 0; j2 < arr.length; j2++) {
      const at = bsearch(out2, arr[j2]);
      if (out2[at] == arr[j2]) res.push(arr[j2]);
    }
    out2 = res;
  }
  return out2.sort(alphabetically);
};
var lexiconXor = (lexicons) => {
  if (!lexicons || lexicons.length < 2) return lexicons;
  const intersect2 = lexiconIntersect(lexicons);
  let out2 = [];
  for (let i = 0; i < lexicons.length; i++) {
    const arr = unique(lexicons[i]);
    const res = [];
    for (let j2 = 0; j2 < arr.length; j2++) {
      const at = bsearch(intersect2, arr[j2]);
      if (intersect2[at] !== arr[j2]) {
        res.push(arr[j2]);
      }
    }
    out2 = out2.concat(res);
  }
  return out2.sort(alphabetically);
};

// lexicon/entry.ts
var guessEntry = (sentence, values) => {
  const at = sentence.indexOf("^");
  let textbefore = "";
  if (~at) {
    textbefore = sentence.slice(0, at);
    sentence = sentence.slice(at + 1);
  }
  for (let j2 = 0; j2 <= textbefore.length; j2++) {
    for (let i = 0; i < values.length; i++) {
      const tf = (textbefore.slice(textbefore.length - j2) + sentence).slice(0, values[i].length);
      if (tf == values[i] && j2 < values[i].length) {
        return values[i];
      }
    }
  }
  const chars2 = splitUTF32Char(sentence);
  return chars2[0];
};

// align/pinpos.ts
var PINSEP = ">";
var BACKPINSEP = "<";
var posBackwardPin = (linetext, x, { wholeword, cjk }) => {
  if (x < 1) return "";
  let len = 2, occur = 0;
  if (cjk) len = 1;
  if (wholeword) {
    while (x > len && linetext.substr(x - len, 1).match(/[\dA-Za-z]/)) len++;
    if (len > 2) len--;
  }
  let at = linetext.indexOf(linetext.substr(x - len, len));
  while (at !== x - len && at > -1) {
    occur++;
    at = linetext.indexOf(linetext.substr(x - len, len), at + 1);
  }
  const pin = linetext.substring(x - len, x);
  let pass = at === x - len && linetext[x - len] !== BACKPINSEP && linetext.charCodeAt(x - len) >= 32;
  return pass ? pin + (occur ? BACKPINSEP + occur : "") : null;
};
var pinPos = (_linetext, x, opts = {}) => {
  const backward = opts.backward;
  const wholeword = opts.wholeword;
  const offtext = opts.offtext;
  let linetext = _linetext;
  const marker = opts.marker || "\u2693";
  if (offtext) {
    linetext = linetext.substring(0, x) + marker + linetext.substring(x);
    linetext = parseOfftext(linetext)[0];
    x = linetext.indexOf(marker);
    linetext = linetext.substring(0, x) + linetext.substring(x + 1);
  }
  const cjk = opts.cjk;
  let pin = "";
  if (linetext.charCodeAt(x) < 32 || linetext[x] === PINSEP) {
    return null;
  }
  if (x > linetext.length) {
    return null;
  }
  if (backward) {
    pin = posBackwardPin(linetext, x, { wholeword, cjk });
  }
  if (pin) return pin;
  let len = 4, occur = 0;
  if (cjk) len = 1;
  let at = linetext.indexOf(linetext.substr(x, len));
  while (x + len < linetext.length && x > at) {
    if (!wholeword && linetext.substring(x, len).trim().length > 2) break;
    if (wholeword && len > 2 && !linetext.substr(x + len, 1).match(/[\dA-Za-zñṅḍṭṃṇāūḷī]/)) break;
    len++;
    at = linetext.indexOf(linetext.substr(x, len));
  }
  if (at !== x && linetext.charCodeAt(x) > 255 && linetext.charCodeAt(x + 1) > 255 && cjk) {
    len = 2;
    at = linetext.indexOf(linetext.substr(x, len));
  }
  while (at !== x && at > -1 && at < linetext.length) {
    occur++;
    const newat = linetext.indexOf(linetext.substr(x, len), at + len - 1);
    if (at == -1 || newat == at) break;
    at = newat;
  }
  return at === x ? linetext.substr(x, len) + (occur ? PINSEP + occur : "") : null;
};
var posPin = (linetext, pin) => {
  if (typeof pin === "number") {
    if (pin < 0 || pin > linetext.length) {
      console.error("error pin", pin, linetext);
      return 0;
    }
    return pin;
  }
  if (pin[0] === PINSEP) {
    pin = pin.substr(1);
    return linetext.indexOf(pin) + pin.length;
  }
  const m4 = pin.match(/:(\d+)$/);
  const mb = pin.match(/^(\d+):/);
  let occur = 0, backward = 0;
  if (mb) {
    occur = parseInt(mb[1]);
    pin = pin.substr(PINSEP.length + mb[1].length);
    backward = pin.length;
  } else if (m4) {
    occur = parseInt(pin.substr(pin.length - m4[1].length));
    pin = pin.substr(0, pin.length - m4[1].length - 1);
  }
  let at = linetext.indexOf(pin);
  while (occur) {
    at = linetext.indexOf(pin, at + pin.length - 1);
    occur--;
  }
  if (at == -1) return -1;
  return at + backward;
};
var makeHook = (linetext, x, w2) => {
  if (w2 < 0) return "";
  let lead = linetext.substr(x, 2);
  let end = "";
  let occur = 0;
  let eoccur = 0;
  if (w2 > 2) {
    end = linetext.substr(x + w2 - 2, 2);
  }
  let at = linetext.indexOf(lead);
  while (at > -1 && at < x) {
    at = linetext.indexOf(lead, at + 1);
    occur++;
  }
  if (occur == 0) {
    at = linetext.indexOf(lead.substr(0, 1));
    if (at == x) {
      lead = lead.substr(0, 1);
      if (!end) end = linetext.substr(x + w2 - 1, 1);
    }
  }
  let hook = lead + (occur ? PINSEP + occur : "");
  if (end) {
    let at2 = linetext.indexOf(end, x);
    while (at2 > -1 && at2 < x) {
      at2 = linetext.indexOf(end, at2 + 1);
      eoccur++;
    }
    if (at2 > -1) {
      if (eoccur == 0 && linetext.indexOf(end.substr(1), x) == at2 + 1) end = end.substr(1);
      hook += "/" + end + (eoccur ? PINSEP + eoccur : "");
    } else {
      end = "";
    }
  }
  return hook;
};
var parseHook = (str_arr, linetext, y = 0) => {
  if (!str_arr) return null;
  const [L, E] = Array.isArray(str_arr) ? str_arr : str_arr.split(PATHSEP);
  let [s, nos] = (L || "").split(PINSEP);
  let [e, noe] = (E || "").split(PINSEP);
  nos = parseInt(nos) || 0;
  noe = parseInt(noe) || 0;
  let x = 0;
  x = linetext.indexOf(s);
  let n = nos;
  while (n) {
    x = linetext.indexOf(s, x + 1);
    n--;
  }
  let x2 = linetext.indexOf(e, x);
  n = noe;
  while (n) {
    x2 = linetext.indexOf(s, x2 + 1);
    n--;
  }
  return { y, x, w: x2 - x + e.length, s, nos, e, noe };
};

// align/breaker.ts
var spacify = (str) => {
  return str.replace(OFFTAG_REGEX_G, (m4, tagname, attr) => {
    return " ".repeat(tagname.length + (attr ? attr.length : 0) + 1);
  }).replace(/[^a-zA-Z\u3400-\u9FFF\uD800-\uDFFF]/g, " ");
};
var removeHeader = (str) => {
  return str.replace(/^(.+)(\^n[\-\d]+)/, (m4, rm, n) => " ".repeat(rm.length) + n).replace(/(\([^\)]+\))/g, (m4, m1) => " ".repeat(m1.length)).replace(/^sz/g, "   ").replace(/^\^n/g, "  ");
};
var removeBold = (str) => {
  return str.replace(/\^b([^\]]+?)\]/g, "  $1 ");
};
var breakLine = (str, breaker) => {
  const substrings = [], breakpos = [];
  let prev = 0;
  str.replace(breaker, (m4, m1, idx2) => {
    if (prev) breakpos.push(prev);
    substrings.push(str.substring(prev, idx2 + m1.length));
    prev = idx2 + m1.length;
  });
  if (prev < str.length) {
    if (prev) breakpos.push(prev);
    substrings.push(str.substr(prev));
  }
  return { substrings, breakpos };
};
var moveFootnoteToTail = (str) => str.replace(/\n( *\^f\d+ *)/g, "$1\n");
var autoENBreak = (line) => {
  line = line.replace(/([^\dA-Z])([:\!\?\.”]+[:\!\?\.”’〕\)]* ?)/g, (m4, alpha, m1) => alpha + m1 + "\n").replace(/([^\dA-Z])([:\?\.”〕\)]+)(\^f\d+)/g, (m4, alpha, m1, m22) => alpha + m1 + m22 + "\n");
  line = moveFootnoteToTail(line);
  line = line.replace(/\n\]/g, "]\n");
  return line.split("\n");
};
var autoBreak = (lines, breaker = "([?!\u0964\u0965;\u2013\u2014] +)") => {
  if (typeof lines === "string") lines = [lines];
  const sentences = [], breakpos = [];
  if (typeof breaker === "string") {
    breaker = new RegExp(breaker, "g");
  }
  for (let i = 0; i < lines.length; i++) {
    const res = breakLine(lines[i], breaker);
    sentences.push(...res.substrings);
    breakpos.push(res.breakpos);
  }
  return { sentences, breakpos };
};
var paragraphSimilarity = (p1, p22) => {
  const P1 = p1.map((l) => l.replace(/ +/g, "").trim()).filter((it) => !!it);
  const P2 = p22.map((l) => l.replace(/ +/g, "").trim()).filter((it) => !!it);
  const p1len = P1.reduce((p3, v) => p3 + v.length, 0);
  const p2len = P2.reduce((p3, v) => p3 + v.length, 0);
  const ratio1 = P1.map((l) => l.length / p1len || 0);
  const ratio2 = P2.map((l) => l.length / p2len || 0);
  const accdiff = P1.reduce((p3, v, i) => p3 += Math.abs(ratio1[i] - ratio2[i]) || 0, 0);
  return accdiff;
};
var breakSentence = (arr, breakpos, paraprefix = "") => {
  const out2 = [];
  for (let i = 0; i < breakpos.length; i++) {
    const str = arr[i];
    let prev = 0;
    let prefix = paraprefix;
    for (let j2 = 0; j2 < breakpos[i].length; j2++) {
      let bp = breakpos[i][j2];
      let sub = str.substring(prev, bp);
      out2.push((i ? prefix : "") + sub);
      prev = bp;
      prefix = "";
    }
    if (prev < str.length - 1) {
      out2.push(str.substr(prev));
    }
  }
  return out2;
};
var SENTENCESEP = String.fromCodePoint(12287);
var SENTENCESEP1 = String.fromCodePoint(12286);
var diffBreak = (p1, p22, id, marker = "<>") => {
  let out2 = "";
  const s1 = p1.join(SENTENCESEP1), s2 = p22.join(SENTENCESEP);
  const D = diffChars(s1, s2);
  for (let i = 0; i < D.length; i++) {
    const d = D[i];
    let at = d.value.indexOf(SENTENCESEP);
    while (at > -1) {
      out2 += "\n";
      at = d.value.indexOf(SENTENCESEP, at + 1);
    }
    if (!d.added && !d.removed || d.removed) out2 += d.value;
  }
  out2 = out2.replace(/\n( *)\u2ffe/g, "$1\n" + marker).replace(/\u2ffe([ “‘]*)\n/g, "\n" + marker + "$1");
  if (out2.indexOf(SENTENCESEP1) > 0) {
    out2 = out2.replace(/\u2ffe/g, "\n" + marker);
  }
  const breaklines = out2.split("\n"), breakpos = [];
  let linepos = [], offset = 0, ln = 0;
  const regmarker = new RegExp(marker, "g");
  for (let i = 0; i < breaklines.length; i++) {
    if (breaklines[i].substring(0, marker.length) === marker) {
      breakpos.push(linepos);
      offset = 0;
      ln++;
      linepos = [];
    }
    let len = breaklines[i].replace(regmarker, "").length;
    if (offset > 0) linepos.push(offset + (p1[ln][offset - 1] === " " ? -1 : 0));
    offset += len;
  }
  breakpos.push(linepos);
  while (p1.length > breakpos.length) breakpos.push([]);
  return breakpos;
};
var ensureArrayLength = (arr, length, marker = "<>") => {
  if (length > arr.length) {
    while (length > arr.length) {
      arr.push(marker);
    }
  } else if (length < arr.length) {
    while (arr.length && length < arr.length) {
      const last = arr.pop();
      arr[arr.length - 1] += marker + last;
    }
  }
  return arr;
};
var ensureChunkHasPN = (lines) => {
  let join2 = "";
  const out2 = [];
  for (let i = 0; i < lines.length; i++) {
    let t = lines[i];
    if (t.indexOf("^n") == -1) {
      join2 += t;
    } else {
      if (join2) console.log(join2.length, join2.substr(0, 29));
      out2.push(join2 + t);
      join2 = "";
    }
  }
  return out2;
};
var MAXWIDTH = 5;
var shortestLead = (line, pos, from) => {
  let lead, at, width = 2;
  while (at !== pos) {
    lead = line.substr(pos, width);
    at = line.indexOf(lead, from);
    if (at == -1) {
      throw "cannot find lead at " + pos + "lead " + lead;
    }
    if (at === pos) return lead;
    const ch = line.charAt(pos + width);
    if (width > MAXWIDTH || ch === "," || ch === "^") {
      let occur = 0;
      while (at !== pos) {
        at = line.indexOf(lead, at + 1);
        occur++;
      }
      lead += "+" + occur;
      break;
    } else {
      width++;
    }
  }
  return lead;
};
var hookFromParaLines = (paralines) => {
  let bp = [], breakpos = [], out2 = [];
  let p3 = 0;
  for (let i = 0; i < paralines.length; i++) {
    const l = paralines[i];
    if (l.substr(0, 3) === "^n ") {
      breakpos.push(bp);
      bp = [];
      p3 = 0;
    } else {
      if (p3) bp.push(p3);
    }
    p3 += l.length;
  }
  breakpos.push(bp);
  const orilines = paralines.join("").replace(/\^n /g, "\n^n ").split("\n");
  for (let i = 0; i < orilines.length; i++) {
    let from = 0, leads = [];
    for (let j2 = 0; j2 < breakpos[i].length; j2++) {
      const leadword = shortestLead(orilines[i], breakpos[i][j2], from);
      from = breakpos[i][j2] + 1;
      leads.push(leadword);
    }
    out2.push(leads);
  }
  return out2;
};
var breakByPin = (line, pins, id) => {
  let prev = 0, out2 = [], extrabr = 0;
  for (let i = 0; i < pins.length; i++) {
    let pos = 0, pin = pins[i];
    if (!pin) {
      extrabr++;
      continue;
    }
    pos = posPin(line, pin);
    if (pos == -1) {
      console.log("pin error", id, "pin", pin, "\nline", line);
      pos = prev;
    }
    out2.push(line.substring(prev, pos));
    while (extrabr > 0) {
      extrabr--;
      out2.push("");
    }
    if (pos < prev) {
      console.log(
        "id",
        id,
        "\npin",
        pin,
        "pos",
        pos,
        "text",
        line.substring(pos, pos + 10),
        "\nprev",
        prev,
        "text",
        line.substring(prev, prev + 10),
        "\npins",
        pins
      );
      throw "pin pos not in order";
    }
    prev = pos;
  }
  out2.push(line.substring(prev));
  if (pins.filter((it) => !!it) == 0) extrabr--;
  while (extrabr > 0) {
    extrabr--;
    out2.push("");
  }
  return out2;
};
var removeSentenceBreak = (paralines) => {
  const combined = paralines.join("").replace(/\^n /g, "\n^n ").split("\n");
  return combined;
};
var removeSubPara = (paralines) => {
  let joined = "";
  const out2 = [];
  for (let i = 0; i < paralines.length; i++) {
    if (paralines[i].match(/\^n[\d\-]+/)) {
      if (joined && joined.match(/\^n[\-\d]+/)) {
        out2.push(joined);
        joined = "";
      }
    }
    joined += paralines[i];
  }
  if (joined) out2.push(joined);
  return out2;
};
var autoChineseBreak = (line) => {
  return line.replace(/([！。？][』」”’〕]+)/g, "$1\n").replace(/([^。？；：\d]{4,15})([？；：])/g, "$1$2\n").replace(/([^。？；：\d]{6,})：([〔『「“‘])/g, "$1\uFF1A\n$2").replace(/([^。？；：\d]{5,15})……乃至……([^。？；：\d]{5,15})/g, "$1\u2026\u2026\u4E43\u81F3\u2026\u2026\n$2").replace(/([^。？；：\d]{5,15})，例如/g, "$1\uFF0C\n\u4F8B\u5982").replace(/(\u3400-\u9fff\ud800-\udfff) ([一二三四五六七八九十○]+)§/g, "$1\n $2\xA7").replace(/\n([”’』」〕）｝】》〉]+)/g, "$1").replace(/([」』”’])([『「“‘])/g, "$1\n$2").replace(/\n([^a-zA-Z\d]{1,8}$)/, "$1").replace(/([？。])([^』」”’〕])/g, "$1\n$2").replace(/([^ \d\n\]])(\^n\d)/g, "$1\n$2").replace(/\n+/g, "\n").trimRight();
};
var sentenceRatio = (lines) => {
  if (typeof lines == "string") {
    lines = lines.split(/\r?\n/);
  }
  const total = lines.reduce((p3, v) => p3 + v.length, 0);
  const ratio = lines.map((v) => v.length / total);
  for (let i = 1; i < ratio.length; i++) {
    ratio[i] += ratio[i - 1];
  }
  return ratio;
};
var afterPN = (str) => {
  const first2 = str.substr(0, 2);
  if (first2 === "^n") {
    if (str.substr(0, 3) === "^n ") return str.substr(3);
    else {
      const m5 = str.match(/^\n[\d\-]/);
      if (m5) {
        return str.substr(m5.length);
      }
    }
  }
  const m4 = str.match(/\^n([\d\-]+ ?)/);
  if (m4) return str.substr(m4.index + m4[0].length);
  return str;
};
var beforePN = (str) => {
  const t = afterPN(str);
  return str.substr(0, str.length - t.length);
};
var ensurefirstLineHasPN = (str) => {
  let at = str.indexOf("^n");
  let remain = str.substr(at);
  let headers = str.substr(0, at).replace(/\n/g, "");
  if (headers && headers.indexOf("^h") == -1 && headers.indexOf("^z") == -1) {
    headers = "^h[" + headers + "]";
  }
  return headers + remain;
};
var diffParanum = (para, gpara) => {
  const GPN = {}, PN = {};
  gpara.map((id) => {
    if (GPN[id]) console.log("guided repeated id " + id);
    GPN[id] = true;
  });
  para.map((id) => {
    if (PN[id]) console.log("repeated id " + id);
    PN[id] = true;
  });
  const missing = gpara.filter((pn) => !PN[pn]);
  const extra = para.filter((pn) => !GPN[pn]);
  return { missing, extra };
};
var guidedBreakLines = (buf, pins, fn = "") => {
  if (!pins) return buf;
  const lines = buf.split("\n");
  const out2 = [];
  let pn = "";
  for (let i = 0; i < lines.length && i < pins.length; i++) {
    const m4 = lines[i].match(/\^n([\d\-]+)/);
    if (m4) {
      pn = m4[1];
    }
    const id = fn.replace(".xml", "") + "." + pn;
    if (!pins[i].length) {
      throw `empty pin entry of ${id}, #${i + 1}`;
    }
    const Pins = pins[i].split("	");
    const pinpn = Pins.shift();
    if (m4 && pn !== pinpn && pinpn[0] !== ":") {
      throw `pin paranum missmatch  ${pn} != ${pinpn}, #${i + 1}`;
    }
    const before = beforePN(lines[i]);
    let sentences = breakByPin(afterPN(lines[i]), Pins, id);
    sentences[0] = before + sentences[0];
    out2.push(...sentences);
  }
  return out2.join("\n");
};

// utils/diff.ts
var import_colors = __toESM(require_colors(), 1);
var diffSim = (D) => {
  let same = 0, total = 0;
  for (let i = 0; i < D.length; i++) {
    const d = D[i];
    if (!d.added && !d.removed) {
      same += d.value.length * 2;
      total += d.value.length * 2;
    } else total += d.value.length;
  }
  return same / total;
};

// align/compare.ts
var compareText = (F1, F2, opts) => {
  const out2 = [];
  const ignoreBlank = opts.ignoreBlank || false;
  const ignorePeyyala = opts.ignorePeyyala || false;
  let min = opts.min || 0.9;
  const longLength = opts.longLength || 20;
  const longMin = opts.min * 0.93;
  if (F1.length !== F2.length) {
    throw `line count unmatch f1:${F1.length} f2:${F2.length}`;
  }
  for (let i = 0; i < F1.length; i++) {
    const l1 = spacify(removeBold(removeHeader(F1[i]))).replace(/ +/g, "");
    const l2 = spacify(removeBold(removeHeader(F2[i]))).replace(/ +/g, "");
    if (l1.length > longLength || l2.length > longLength) min = longMin;
    const D = diffChars(l1, l2);
    const sim = diffSim(D);
    if (min > sim) {
      if (ignoreBlank && (!l1.trim().length || !l2.trim().length)) continue;
      if (ignorePeyyala && (F1[i].includes("\u2026") || F2[i].includes("\u2026"))) continue;
      out2.push([i, sim, F1[i], F2[i]]);
    }
    if (out2.length > 50) break;
  }
  return out2;
};

// align/align.ts
var linePN = (str) => str.match(/\^n([\d\.\-_]* ?)/);
var toParagraphs = (L, opts = {}) => {
  const out2 = [];
  let lines = [], pid = "";
  const unbreak = opts.unbreak || false;
  const bkpf = (opts.bkid || "").replace(/\..+$/, "");
  for (let i = 0; i < L.length; i++) {
    if (L[i].indexOf("^n") > -1 && L[i].substr(0, 3) !== "^n ") {
      const id = L[i].match(/\^n([\d\-\.]+)/);
      if (!id) {
        console.log("no id", L[i], i);
      }
      if (pid) {
        out2.push([pid, unbreak ? removeSentenceBreak(lines) : lines]);
        lines = [];
      }
      pid = (bkpf ? bkpf + "." : "") + id[1];
    }
    lines.push(L[i]);
  }
  out2.push([pid, unbreak ? removeSentenceBreak(lines) : lines]);
  return out2;
};
var fixLoneN = (lines) => {
  const lonen = lines[0].match(/\^n([\d\-]+)$/);
  if (lonen) {
    const n = lines.shift();
    lines[0] = n + lines[0];
  }
  return lines;
};
var autoAlign = (f1, guide, fn) => {
  const gpara = toParagraphs(guide);
  const para = toParagraphs(f1);
  if (para.length !== gpara.length) {
    console.log(fn, "para.length unmatch,", para.length, "< guided", gpara.length);
    console.log(diffParanum(para.map((it) => it[0]), gpara.map((it) => it[0])));
    return f1;
  }
  const res = [];
  for (let i = 0; i < gpara.length; i++) {
    const rgpara = sentenceRatio(gpara[i][1]);
    let rpara = sentenceRatio(para[i][1]);
    if (gpara[i][0] !== para[i][0]) {
      console.log("paranum diff", gpara[i][0], para[i][0]);
    }
    const aligned = alignParagraph(rpara, rgpara, para[i][0]);
    if (rpara.length < rgpara.length) {
      while (para[i][1].length < rgpara.length) {
        para[i][1].push("");
      }
      fixLoneN(para[i][1]);
      while (para[i][1].length < gpara[i][1].length) {
        para[i][1].push("");
      }
      res.push(...para[i][1]);
      continue;
    }
    for (let j2 = 0; j2 < aligned.length; j2++) {
      const t = para[i][1][aligned[j2]] || "";
      if (t) para[i][1][aligned[j2]] = "\n" + t;
    }
    const newpara = para[i][1].join("").split("\n");
    fixLoneN(newpara);
    while (newpara.length < gpara[i][1].length) {
      newpara.push("");
    }
    res.push(...newpara);
  }
  return res;
};
var combineHeaders = (str) => {
  let headers = "", pncount = 0;
  const lines = str.split("\n"), out2 = [];
  for (let i = 0; i < lines.length; i++) {
    let l = lines[i] || "";
    if (linePN(l)) {
      pncount++;
      out2.push(headers + l);
      headers = "";
    } else {
      const m4 = l.match(/\^[zh][\d\[]/);
      if (m4 || !pncount) {
        if (!m4) l = "^h[" + l + "]";
        headers += l;
      } else {
        out2.push(l);
      }
    }
  }
  let s = out2.join("\n");
  return s;
};
var alignParagraph = (para, guide, id) => {
  if (para.length < guide.length) return null;
  let i = 0, prev = 0, gi = 0;
  const out2 = [];
  for (let gi2 = 0; gi2 < guide.length; gi2++) {
    while (i < para.length && para[i] < guide[gi2]) i++;
    if (out2.length + 1 >= guide.length) break;
    if (i > prev) {
      out2.push(i);
    }
    prev = i;
  }
  return out2;
};
var alignParagraphLinecount = (para, paralinecount, id) => {
  let out2 = [];
  if (para[0].match(/\^n(\d+ ?)$/) && para.length > 1) para[0] = para.shift() + para[0];
  if (para.length == paralinecount) {
    return para;
  }
  if (para.length > paralinecount) {
    out2.push(...para);
  } else if (para.length < paralinecount) {
    for (let i = 0; i < para.length; i++) {
      const broken = autoENBreak(para[i]);
      out2.push(...broken);
    }
  }
  out2 = out2.filter((it) => !!it);
  while (out2.length < paralinecount) {
    out2.push("");
  }
  while (out2.length > paralinecount) {
    const first = out2.shift();
    out2[0] = first + out2[0];
  }
  if (out2[0].match(/\^n(\d+ ?)$/) && out2.length > 1) {
    out2[0] = out2.shift() + out2[0];
    out2.push("");
  }
  return out2;
};

// align/crlf.ts
var leadN = (lines) => {
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (!~line.indexOf("^n")) continue;
    const m4 = line.match(/(.)(\^n\d+…*)$/);
    if (m4) {
      lines[i] = m4[2] + line.replace(/(.)(\^n\d+…*)$/, "$1");
    }
  }
};
var aligncrlf = (c1, c2) => {
  if (~c1.indexOf("\u25D2") || ~c1.indexOf("\u25D3")) throw "cannot consist \u25D2\u25D3 in f1";
  if (~c2.indexOf("\u25D2") || ~c2.indexOf("\u25D3")) throw "cannot consist \u25D2\u25D3 in f2";
  const F1 = c1.replace(/\r?\n/g, "\u25D2").split(/(\^n\d+)/);
  const F2 = c2.replace(/\r?\n/g, "\u25D3").split(/(\^n\d+)/);
  if (F1.length !== F2.length) {
    throw "cannot align,  ^n unmatch";
  }
  const out2 = [];
  let n = "";
  const needcheck = {};
  for (let i = 0; i < F1.length; i++) {
    if (F2[i].slice(0, 2) == "^n") {
      n = F2[i].slice(2);
    } else {
      const lead1 = F1[i].replace(/[◒◓]/g, "").replace(/\^[a-z]+\d*/g, "").slice(0, 2);
      const lead2 = F2[i].replace(/[◒◓]/g, "").replace(/\^[a-z]+\d*/g, "").slice(0, 2);
      if (lead1 !== lead2) {
        if (!needcheck[n]) needcheck[n] = 0;
        needcheck[n] += 100;
      }
    }
    const D = diffChars(F2[i], F1[i]);
    for (let j2 = 0; j2 < D.length; j2++) {
      const d = D[j2];
      if (!d.added && !d.removed) out2.push(d.value);
      else if (d.added) out2.push(d.value);
      else if (d.removed) {
        if (~d.value.indexOf("\u25D3")) {
          out2.push(d.value.replace(/[^◓]/g, ""));
        } else if (d.value.length) {
          if (!needcheck[n]) needcheck[n] = 0;
          needcheck[n]++;
        }
      }
    }
  }
  const outlines = out2.join("").replace(/◒/g, "").split("\u25D3");
  leadN(outlines);
  return outlines;
};

// align/pinnotes.ts
var pinNotes = (lines, notes, opts = {}) => {
  const out2 = [];
  const NoteIdx = {};
  const pat = opts.pat || /⚓(\d+)( ?)/g;
  const keepmarker = opts.keepmarker;
  console.log(keepmarker, "keepmarker");
  notes.forEach((note) => NoteIdx[note.id] = note);
  let nnote = 0;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i], accwidth = 0;
    const nline = line.replace(pat, (m4, nid, space, off) => {
      const note = NoteIdx[nid];
      if (note) {
        note.y = i;
        note.pin = off - accwidth;
        NoteIdx[nid] = note;
      } else {
        console.log("note not found", nid);
      }
      accwidth += m4.length;
      nnote++;
      return keepmarker ? "^f" + nnote + space : "";
    });
    if (nline !== line) lines[i] = nline;
  }
  nnote = 0;
  for (let nid in notes) {
    const note = notes[nid];
    nnote++;
    if (typeof note.y == "undefined") continue;
    let item = [];
    if (keepmarker) {
      item = nnote + "	" + note.val.replace(/\n/g, "\\n");
    } else {
      const pin = pinPos(lines[note.y], note.pin, { wholeword: true, backward: true, offtext: true });
      item = [note.y, pin, note.val.replace(/\n/g, "\\n")];
      if (!opts.removeId) item.push(note.id);
    }
    out2.push(item);
  }
  return out2;
};
var stripLinesNote = (lines, notes, opts = {}) => {
  const marker = opts.marker || "\u2693";
  const regex = new RegExp(marker + "([0-9]+)", "g");
  const notemark = opts.notemark;
  let counter2 = opts.counter || 0;
  lines = lines.map((line, y) => {
    let accwidth = 0;
    let nline = line.replace(regex, (m4, m1, offset) => {
      counter2++;
      const note = notes[m1];
      if (note) {
        note[0] = y;
        note[1] = offset - accwidth;
      } else {
        if (y) console.log("note not found", m1, y, line);
      }
      accwidth += m4.length;
      return notemark ? "^" + notemark + counter2 + "<>" : "";
    });
    nline = nline.replace(/<>[ \da-zA-Z#_@~]/g, " ").replace(/<>/g, "");
    return nline;
  });
  opts.counter = counter2;
  return lines;
};

// index.ts
var ptk_version = 20230203;

// platform/nodefs.ts
var import_colors2 = __toESM(require_colors(), 1);
var makePitakaZip = async (arr, writer) => {
  arr[7] |= 128;
  const sizebuf = new Uint32Array([arr.length]);
  const sizebuf8 = new Uint8Array(sizebuf.buffer);
  arr[10] = sizebuf8[0];
  arr[11] = sizebuf8[1];
  arr[12] = sizebuf8[2];
  arr[13] = sizebuf8[3];
  if (writer) await writer(arr);
  return arr;
};
var samecontent = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return a == b;
  }
  if (a instanceof Buffer && b instanceof Buffer) {
    return Buffer.compare(a, b);
  }
  return false;
};
var writeChanged = (fn, buf, verbose = false, enc = "utf8") => {
  const oldbuf = fs.existsSync(fn) && (enc ? fs.readFileSync(fn, enc) : fs.readFileSync(fn));
  if (!samecontent(oldbuf, buf)) {
    enc ? fs.writeFileSync(fn, buf, enc) : fs.writeFileSync(fn, buf);
    if (verbose) console.log((0, import_colors2.green)("written"), fn, ...humanBytes(buf.length));
    return true;
  }
  if (verbose) console.log((0, import_colors2.grey)("no diff"), fn, ...humanBytes(buf.length));
  return false;
};
var writeIncObj = (obj, outfn, verbose) => {
  let arr = Array.isArray(obj) ? obj : fromObj(obj, true);
  writeChanged(outfn, arr.join("\n"), verbose);
  return arr;
};
var nodefs = new Promise((resolve) => {
  if (typeof process !== "undefined" && parseInt(process.version.substr(1)) > 12) {
    import("fs").then((fs2) => {
      global.fs = fs2;
      import("path").then((p3) => {
        global.Path = p3;
      });
      resolve();
    });
  } else {
    resolve(null);
  }
});
var readTextContent = (fn) => {
  let raw = fs.readFileSync(fn);
  const dv = new DataView(raw.buffer);
  const encoding = dv.getUint16(0) == 65534 ? "utf-16le" : "utf-8";
  const decoder = new TextDecoder(encoding);
  let s = decoder.decode(raw);
  if (s.charCodeAt(0) === 65279) s = s.slice(1);
  if (s.indexOf("\r") > -1) s = s.replace(/\r?\n/g, "\n");
  return s;
};
var readTextLines = (fn, format = "") => {
  let files = fn;
  if (typeof fn == "string") {
    files = [fn];
  }
  let out2 = [];
  for (let i = 0; i < files.length; i++) {
    const arr = readTextContent(files[i]).split("\n");
    if (format == "tsv") {
      out2 = out2.concat(arr.map((it) => it.split("	")));
    } else out2 = out2.concat(arr);
  }
  return out2;
};
var writePitaka = async (lbase, opts = {}) => {
  const name2 = opts.name || lbase.name;
  const compression = opts.compress ? "DEFLATE" : "STORE";
  lbase.setName(name2);
  if (opts.jsonp) {
    const folder = opts.folder || name2;
    if (name2) lbase.setName(name2);
    if (!fs.existsSync(folder)) {
      try {
        fs.mkdirSync(folder);
      } catch (e) {
        console.log("cannot create folder", name2);
      }
    }
    lbase.dumpJs((pagefn, buf) => {
      const outfn = folder + "/" + pagefn;
      writeChanged(outfn, buf, true);
    });
  } else if (opts.JSZip) {
    const zip = new opts.JSZip();
    await lbase.writePages(async (pagefn, buf) => {
      const outfn = name2 + "/" + pagefn;
      await zip.file(outfn, buf, { compression });
    });
    console.log("writing", name2 + ".ptk");
    makePitakaZip(zip, async (buf) => {
      console.log("ptk length", buf.length);
      await fs.promises.writeFile(name2 + ".ptk", buf);
    });
  }
};
var deepReadDir = async (dirPath) => await Promise.all(
  (await fs.promises.readdir(dirPath)).map(async (entity) => {
    const path = dirPath + "/" + entity;
    const stat = await fs.promises.lstat(path);
    return stat.isDirectory() || stat.isSymbolicLink() ? await deepReadDir(path) : path;
  })
);
var fetchFile = async (url, fn) => {
  const at = url.lastIndexOf("/");
  fn = fn || url.slice(at + 1);
  let content;
  if (!fs.existsSync(fn)) {
    console.log("fetching", url);
    const k = await fetch(url);
    content = Buffer.from(await k.arrayBuffer(), "utf8").toString();
    writeChanged(fn, content, true);
  } else {
    content = readTextContent(fn);
  }
  return content;
};

// utils/testutils.ts
var { blue, yellow, green: green3, red: red2, bgWhite } = "../cli/colors.cjs";
var showMemory = (stage) => {
  console.log(
    green3(stage.padEnd(8, " ")),
    "v8",
    ...humanBytes(process.memoryUsage().heapTotal),
    ",C++",
    ...humanBytes(process.memoryUsage().external)
  );
};
var runTest = async (stage, cb) => {
  console.time(stage);
  await cb();
  console.timeEnd(stage);
  showMemory(stage);
};

// pali/compound.ts
var compoundSimilarity = (compound, parts, debug2 = false) => {
  let score = 0, prev = -1, partlen = 0;
  debug2 && console.log(compound, parts);
  for (let i = 0; i < parts.length; i++) {
    let p3 = parts[i];
    if (debug2 && prev + 2 > compound.length) {
      parts.length = i;
      break;
    }
    const at1 = compound.indexOf(p3, prev);
    const at2 = compound.indexOf(p3.slice(0, p3.length - 1), prev);
    const at3 = compound.indexOf(p3.slice(1), prev);
    if (debug2) console.log(p3, at1, at2, at3, prev);
    partlen += p3.length;
    if (at1 > -1 && at1 >> prev && at1 <= at2) {
      score += 1;
      prev = at1 + p3.length - 1;
      debug2 && console.log("+1", p3, at1);
    } else if (at2 > -1 && at2 >= prev) {
      prev = at2 + p3.length - 1;
      score += 1;
      debug2 && console.log("+1", p3);
    } else if (at2 > -1 && at3 >= prev) {
      prev = at3 + p3.length - 1;
      score += 1;
      debug2 && console.log("+1", p3);
    }
  }
  let partlenratio = partlen / compound.length;
  if (partlenratio > 1) partlenratio = 1;
  const sim = score / parts.length * partlenratio;
  debug2 && console.log(compound, "sim", sim, parts, score, partlen, compound.length);
  return { sim, partcount: parts.length };
};

// ../provident-pali/src/utils.js
var doParts = (parts, charpat, onPart) => {
  let out2 = "";
  if (typeof parts == "string") parts = [parts];
  for (let j2 = 0; j2 < parts.length; j2++) {
    if (!parts[j2]) continue;
    if (parts[j2][0] == "<" || parts[j2][0] == "^") {
      out2 += parts[j2];
      continue;
    }
    const units = parts[j2].split(charpat);
    units.forEach((s) => {
      const m4 = s.match(charpat);
      if (!m4) {
        out2 += s;
      } else {
        out2 += onPart(s);
      }
    });
  }
  return out2;
};

// ../provident-pali/src/iast.js
var isRomanized = (str) => {
  return !!str.match(romanized_charset);
};
var romanized_charset = /([aāiīuūenoṃcvkbdtphḍṭñṅṇsjgymrlḷ]+)/i;
var breakIASTSyllable = (str) => {
  str = str.toLowerCase();
  const words = str.split(romanized_charset);
  return words.map(
    (w2) => {
      const syl = [];
      let prev = 0;
      if (!w2.trim()) {
        syl.push(w2);
        return syl;
      }
      w2.replace(/([cvkbdtphḍṭṇñṅsnjgymrlḷ]*[āaiīuūeo][ṃ]?)/gi, (m4, m1, offset) => {
        if (offset > 0 && offset > prev) syl.push(w2.substr(prev, offset));
        syl.push(m1);
        prev = offset + m4.length;
      });
      if (prev < w2.length) syl.push(w2.substr(prev));
      return syl;
    }
  );
};
var Vowels = {
  "": "",
  "a": "",
  "\u0101": "A",
  "i": "I",
  "\u012B": "II",
  "u": "U",
  "\u016B": "UU",
  "e": "E",
  "o": "O"
};
var beginVowels = {
  "a": "a",
  "\u0101": "aA",
  "i": "i",
  "\u012B": "iI",
  "u": "u",
  "\u016B": "uU",
  "o": "o",
  "e": "e"
};
var i2p = {
  // '|':'|', //allow | in a word, convert from । ॥ and 
  "\u0964": "\u0964",
  "\u0965": "\u0965",
  //as it is
  "k": "k",
  "t": "t",
  "\xF1": "Y",
  "\u1E45": "N",
  "\u1E47": "N",
  "\u1E0D": "F",
  "\u1E6D": "W",
  "p": "p",
  "c": "c",
  "j": "j",
  "s": "s",
  "b": "b",
  "y": "y",
  "g": "g",
  "d": "d",
  "h": "h",
  "m": "m",
  "l": "l",
  "v": "v",
  "r": "r",
  "n": "n",
  "\u1E37": "L",
  "kh": "K",
  "gh": "G",
  "jh": "J",
  "ch": "C",
  "\u1E6Dh": "X",
  "\u1E0Dh": "Q",
  "th": "T",
  "dh": "D",
  "ph": "P",
  "bh": "B",
  "kk": "kVk",
  "kkh": "kVK",
  "gg": "gVg",
  "ggh": "gVG",
  "tt": "tVt",
  "tth": "tVT",
  "\u1E6D\u1E6D": "WVW",
  "\u1E6D\u1E6Dh": "WVX",
  "pp": "pVp",
  "pph": "pVP",
  "bb": "bVb",
  "bbh": "bVB",
  "jj": "jVj",
  "jjh": "jVJ",
  "cc": "cVc",
  "cch": "cVC",
  "ll": "lVl",
  "mm": "mVm",
  "nn": "nVn",
  "\xF1\xF1": "YVY",
  "dd": "dVd",
  "ddh": "dVD",
  "\u1E0D\u1E0D": "FVF",
  "\u1E0D\u1E0Dh": "FVQ",
  "ss": "sVs",
  "yy": "yVy",
  "\u1E47\u1E47": "NVN",
  "\u1E45gh": "NVG",
  "\u1E45g": "NVg",
  "\u1E45kh": "NVK",
  "\u1E45k": "NVk",
  "\u1E45khy": "NVKVy",
  "dr": "dVr",
  "dv": "dVv",
  "ndr": "nVdVr",
  "br": "bVr",
  "khv": "KVv",
  "hm": "hVm",
  "ly": "lVy",
  "mbh": "mVB",
  "mh": "mVh",
  "mp": "mVp",
  "mb": "mVb",
  "nd": "nVd",
  "ndh": "nVD",
  "\u1E47\u1E6Dh": "NVX",
  "\xF1c": "YVc",
  "\xF1j": "YVj",
  "\xF1jh": "YVJ",
  "\u1E47\u1E6D": "NVW",
  "nt": "nVt",
  "\u1E47\u1E0D": "NVF",
  "sv": "sVv",
  "sm": "sVm",
  "tv": "tVv",
  //not in font ligature
  "\u1E37h": "LVh",
  "nth": "nVT",
  "yh": "yVh",
  "tr": "tVr",
  "mph": "mVP",
  "nh": "nVh",
  "\xF1ch": "YVC",
  "vh": "vVh",
  "nv": "nVv",
  "ky": "kVy",
  "gy": "gVy",
  "ntv": "nVtVv",
  "my": "mVy",
  "ty": "tVy",
  "gr": "gVr",
  "kr": "kVr",
  "sn": "sVn",
  "kl": "kVl",
  "st": "sVt",
  "khy": "KVy",
  "pl": "pVl",
  "nty": "nVtVy",
  "hv": "hVv",
  "sy": "sVy",
  "dm": "dVm",
  "\u1E47y": "NVy",
  "kv": "kVv",
  "\u1E47h": "NVh",
  //newly added
  "\xF1h": "YVh",
  "vy": "vVy",
  "by": "bVy",
  "py": "pVy",
  "yv": "yVv",
  "\u1E6Dy": "WVy",
  "bhy": "BVy",
  "tthy": "tVTVy",
  //titthyā
  "tn": "tVn",
  //ratnapīṭha
  "dhv": "DVv",
  //Madhvāsava
  "dhy": "DVy",
  //sādhya
  "ny": "nVy",
  //Nyāsa
  "gv": "gVv",
  //gvākappa
  "nky": "nVkVy",
  //Mālunkyāputta
  "hy": "hVy",
  //corehyahāriya
  "\u1E47v": "NVv",
  //Ṇvarabhakkha
  "kkhy": "kVKVy",
  //alakkhyā
  "ntr": "nVtVr",
  //tantra 
  "bhm": "BVm",
  //Subhmā , only found in s0513m note of 442. Saṅkhajātakaṃ
  "dy": "dVy",
  //rare yadyāyaṃ only found in s0514  "ja534:43.3":
  "sp": "sVp"
  //rare Vanaspatīni only found in s0514 <note>वनस्पतीनि च (सी॰ पी॰), वनप्पतिञ्‍च (स्या॰ क॰)</note>
};
var p2i = {};
for (let key in i2p) p2i[i2p[key]] = key;
for (let key in beginVowels) p2i[beginVowels[key]] = key;
var convertIASTSyllable = (syl, begin) => {
  let out2 = "";
  if (isRomanized(syl)) {
    let m4 = syl.match(/^([kgṅcjñṭḍṇtdnpbylḷhsmrv]*)([aāiīuūeo])(ṃ?)$/);
    if (m4) {
      const [m0, c2, v, niggatha] = m4;
      const co = i2p[c2] || "";
      if (co) {
        out2 += co + Vowels[v] + (niggatha ? "M" : "");
      } else {
        out2 += beginVowels[v] + (niggatha ? "M" : "");
      }
    } else {
      m4 = syl.match(/^([kgṅcjñṭḍṇtdnpbylḷhsmrv]*)/);
      if (m4) {
        const co = i2p[m4[1]];
        if (co) out2 += co + "V";
        else out2 += "??" + syl;
      } else return "??" + syl;
    }
  } else {
    return syl;
  }
  return out2;
};
var fromIAST = (input, opts = {}) => {
  let parts = input;
  if (opts.format === "xml") parts = input.split(/(<[^<]+>)/);
  else if (typeof parts == "string") parts = [input];
  let out2 = "";
  for (let j2 = 0; j2 < parts.length; j2++) {
    if (parts[j2][0] === "<") {
      out2 += parts[j2];
      continue;
    }
    const str = parts[j2].replace(/ṁ/ig, "\u1E43");
    const words = breakIASTSyllable(str);
    let s = "";
    for (let i = 0; i < words.length; i++) {
      for (let j3 = 0; j3 < words[i].length; j3++) {
        const r = convertIASTSyllable(words[i][j3], j3 == 0);
        s += r;
      }
    }
    out2 += s;
  }
  return out2;
};
var toIASTWord = (p3) => {
  let ch = "", out2 = "", i = 0;
  ch = p3[0];
  const leadv = "aeiou".indexOf(ch);
  if (leadv > -1) {
    if (p3[0] == "a" && p3[1] == "A") {
      out2 += "\u0101";
      i++;
    } else if (p3[0] == "i" && p3[1] == "I") {
      out2 += "\u012B";
      i++;
    } else if (p3[0] == "u" && p3[1] == "U") {
      out2 += "\u016B";
      i++;
    } else out2 += ch;
    i++;
    ch = p3[i];
  }
  let needvowel = false, noEndingA = false;
  if (p3.charAt(p3.length - 1) == "V") {
    noEndingA = true;
    p3 = p3.slice(0, p3.length - 1);
  }
  while (i < p3.length) {
    ch = p3[i];
    const v = "MAEIOU".indexOf(ch);
    if (v > -1) {
      if (v == 0 && needvowel) out2 += "a";
      if (p3[i + 1] == "A" || p3[i + 1] == "I" || p3[i + 1] == "U") {
        i++;
        if (v == 1) out2 += "\u0101";
        else if (v == 2) out2 += "\u0113";
        else if (v == 3) out2 += "\u012B";
        else if (v == 4) out2 += "\u014D";
        else if (v == 5) out2 += "\u016B";
        else console.log("wrong vowel");
      } else out2 += "\u1E43\u0101eiou"[v] || "";
      i++;
      needvowel = false;
    } else {
      if (needvowel) out2 += "a";
      let cons = p3[i];
      if (cons == "V") return out2 + "??1" + p3;
      while (i < p3.length && p3[i + 1] == "V") {
        cons += "V" + p3[i + 2];
        needvowel = true;
        i += 2;
      }
      const c2 = p2i[cons];
      if (!c2) {
        if (isNaN(parseInt(cons))) {
          return out2 + "??2" + p3;
        } else {
          return out2 + cons;
        }
      } else {
        needvowel = "aeiou\u0964\u0965".indexOf(c2) == -1;
        if (c2 == "a" && p3[i + 1] == "A") {
          i++;
          out2 += "\u0101";
        } else {
          out2 += c2;
        }
        i++;
      }
    }
  }
  if (needvowel && !noEndingA) out2 += "a";
  return out2;
};
var toIAST = (parts) => {
  if (!parts) return "";
  if (typeof parts === "string") parts = parts.split(/(<[^<]+>)/);
  return doParts(parts, /([a-zA-Z]+)/, toIASTWord).replace(/।/g, ".").replace(/॥/g, ".");
};

// ../provident-pali/src/order.js
var CharOrder = [];
var Order = "aiueokKgGMcCjJYWXFQNtTdDnpPbBmhHyrRlLvsSZAIUEOV";
for (let i = 0; i < Order.length; i++) {
  CharOrder[Order.charCodeAt(i)] = i + 1;
}

// ../provident-pali/src/lexeme.js
var NormLexeme = {
  "bODI": "bOjVJ",
  "smVbODI": "smVbOjVJ"
  // 'vVyy':'bVby',
  // 'vVyyYV':'bVbyYV', //can be removed if smarter
};
var DeNormLexeme = {};
var samecount = (s1, s2) => {
  let c2 = 0, i1 = 0, i2 = 0;
  while (i1 < s1.length && i2 < s2.length) {
    if (s1[i1] == s2[i2]) c2++;
    else break;
    i1++;
    i2++;
  }
  return c2;
};
var sameendcount = (s1, s2) => {
  let c2 = 0, i1 = s1.length - 1, i2 = s2.length - 1;
  while (i1 > 0 && i2 > 0) {
    if (s1[i1] == s2[i2]) c2++;
    else break;
    i1--;
    i2--;
  }
  return c2;
};
for (let key in NormLexeme) {
  const rkey = NormLexeme[key];
  if (key.indexOf(">") > -1) continue;
  const cnt = samecount(rkey, key);
  if (cnt) {
    DeNormLexeme[rkey] = cnt ? key.slice(0, cnt) + "<" + key.slice(cnt) : key;
  } else {
    const cnt2 = sameendcount(rkey, key);
    DeNormLexeme[rkey] = cnt2 ? key.slice(0, key.length - cnt2) + ">" + key.slice(key.length - cnt2) : key;
  }
}

// ../provident-pali/src/sandhi.js
var InsertRules = { "65": "A" };
var InsertRuleReverse = {};
var Rules = {
  //規則號不得為 0,1,2
  // A+B=C    A<B=C   A>B=C    A-B=C
  //   C        AC     BC       ACB     替換結果
  //
  "a<A=A": "3",
  "a<A=m": "4",
  "a<A=Vv": "5",
  "a<A=d": "6",
  "a-A=r": "7",
  "a<A=t": "9",
  "a-AA=r": "3",
  "a<I=E": "3",
  "a<I=A": "4",
  "a<I=IA": "5",
  "a-I=y": "6",
  "a-I=m": "7",
  "a<E=E": "3",
  "a<E=A": "4",
  "a-E=d": "5",
  "a-E=m": "6",
  "a-E=y": "7",
  "a<E=": "8",
  "a<g=gVg": "3",
  //因為不是 gVG ，所以無法 autorule
  "a<g=NVg": "4",
  "a<p=pVp": "3",
  "a<U=O": "3",
  "a<U=A": "4",
  "a<U=U": "5",
  "a<U=UA": "6",
  "a<O=U": "3",
  "a<\u016A=UA": "3",
  //左邊的 UA 要用 Ū 表示，但sandhi 不用
  "a<\u012A=IA": "4",
  // IA 也是 ， 
  "a<\u012A=E": "5",
  "a<t=nVt": "4",
  "a<v=bVb": "5",
  "A<AA=": "3",
  //但 AA 不轉為 Ā
  "A+U=UA": "3",
  "A+I=IA": "3",
  "A+I=E": "4",
  "A-I=y": "5",
  "A-I=r": "6",
  "A-I=t": "7",
  "A-E=y": "4",
  "A<A=y": "3",
  "A<A=m": "4",
  "A+A=E": "5",
  "A+A=A": "6",
  "A+A=": "7",
  "M>AA=m": "3",
  //kImAnIsMs << kIM-aAnIsMs, remove left, keep right
  "M+A=A": "3",
  "M+A=m": "4",
  "M+A=d": "5",
  "M+A=": "6",
  "M+A=nA": "7",
  "M+E=A": "3",
  "M+b=bVb": "3",
  "M+U=UA": "3",
  "M+I=IA": "3",
  "M+I=I": "4",
  "M>I=y": "5",
  "M+I=": "6",
  "M+\u012A=A": "3",
  "M+g=NVg": "3",
  "M+p=pVp": "3",
  "M+k=NVk": "3",
  "M+J=jVJ": "3",
  "M+X=WVX": "3",
  "M+y=YVY": "3",
  //sukhaññeva=sukhaṃ-yeva
  "I+I=IA": "3",
  "I+I=E": "4",
  "I-I=y": "5",
  "I-I=r": "6",
  "I+A=jVJ": "2",
  //this is a special rule for bodhi+anga
  "I+A=IA": "3",
  "I+A=A": "4",
  "I+A=Vy": "6",
  "I<A=m": "7",
  "I<A=y": "8",
  "I<A=r": "9",
  "I+A=": "10",
  "I<d=nVd": "3",
  "I+U=UA": "3",
  // 'I>aA=':'3',  //use 1 instead
  "I+AA=I": "4",
  "I-AA=r": "5",
  "I<AA=": "6",
  //kucchisayā=kucchi-āsayā
  "I>E=Vv": "3",
  "I>E=Vp": "4",
  "I-E=d": "5",
  "I-E=m": "7",
  "I-E=r": "8",
  "I<D=nVD": "3",
  "I>t=IA": "3",
  //只有接 t可能長音化
  "I>k=IA": "3",
  //長音化
  "\u012A+A=A": "3",
  "\u012A+U=UA": "3",
  "U+A=UA": "3",
  //長音化
  "U+A=Vv": "4",
  "U+A=A": "5",
  "U+A=VvA": "6",
  "U+A=O": "7",
  "U+A=": "8",
  "U+I=U": "3",
  "U+I=O": "4",
  "U+I=UA": "5",
  "U+U=UA": "3",
  "U-U=h": "4",
  "U>E=Vv": "3",
  "U-E=d": "4",
  "U-E=r": "5",
  "U>AA=Vv": "3",
  "U<v=bVb": "3",
  "U<D=nVD": "3",
  "U>t=UA": "3",
  //長音化
  "U<t=tVt": "4",
  "U<tA=tVt": "4",
  "E+A=A": "3",
  "E+A=Vy": "4",
  "E+A=VyA": "5",
  "E>AA=Vy": "5",
  "E+A=": "6",
  "E+U=UA": "3",
  "E-I=r": "3",
  "O+A=": "3",
  "O+A=Vv": "4",
  "O+A=A": "5",
  "O+A=VvA": "6",
  "O>I=Vv": "3",
  "O-I=r": "4",
  "O>E=Vv": "3",
  "O-E=y": "4",
  "O-E=v": "5",
  "O>AA=Vv": "3",
  "O-U=v": "3",
  //vammikovupacīyati=vammiko-upacīyati
  "V+A=": "3",
  "V+A=A": "4",
  "V+U=UA": "3",
  // might be vri typo , need to fix original text
  "V+v=": "4",
  //sātaccamuccati=sātaccam-vuccati
  "M+v=m": "4",
  //nibbānamuccati [ 'nibbānaṃ', 'vuccati' ]
  "a<s=r": "9"
  //pahūtarattaratanāya [ 'pahūta', 'satta', 'ratanāya' ]
  //reserve rules
  //01 => A insert A
  // 'y+v=bVb':'2', //this is a special rule for udaya+vaya  ==>udayabbaya
};
var PAIRING = "|";
var EQUAL = "=";
var ELIDENONE = 0;
var ELIDELEFT = 1;
var ELIDERIGHT = 2;
var ELIDEBOTH = 3;
var RuleKeys = { [ELIDENONE]: "-", [ELIDELEFT]: ">", [ELIDERIGHT]: "<", [ELIDEBOTH]: "+" };
var RuleKeysRegEx = /([<>\-+])/;
var JoinTypes = {};
var BuildRules = () => {
  for (let rule in Rules) {
    const joiner = Rules[rule];
    if (!JoinTypes[joiner]) JoinTypes[joiner] = {};
    const at = rule.indexOf(EQUAL);
    const sandhi = rule.slice(at + 1);
    const [left, elision, right] = rule.slice(0, at).split(RuleKeysRegEx);
    const pair = left + PAIRING + right;
    if (JoinTypes[joiner][pair]) console.log("key ", pair, "exists");
    JoinTypes[joiner][pair] = elision + sandhi;
  }
  for (let joiner in InsertRules) {
    InsertRuleReverse[InsertRules[joiner]] = joiner;
  }
};
BuildRules();
var isAssimiliar = (right, sandhi) => {
  if (sandhi.length !== 3 || sandhi[1] !== "V" || right[0] !== sandhi[2]) return false;
  if (sandhi[0].match(/[ckgjbptdms]/) && (right[0] == sandhi[2] || right[0] == sandhi[2].toLowerCase())) return true;
  if (right[0] == "Q" || right[0] == "X" || right[0] == "F" || right[0] == "Q" || right[0] == "Y") return true;
};
var getRule = (left, right, leftconsumed, rightconsumed, sandhi, verbose) => {
  if (!leftconsumed && !rightconsumed) {
    if (!sandhi) return 0;
    const joiner = InsertRuleReverse[sandhi];
    if (joiner) return joiner;
  }
  let rulekey = RuleKeys[ELIDENONE];
  if (rightconsumed && !leftconsumed) rulekey = RuleKeys[ELIDERIGHT];
  else if (leftconsumed && !rightconsumed) rulekey = RuleKeys[ELIDELEFT];
  else if (rightconsumed && leftconsumed) rulekey = RuleKeys[ELIDEBOTH];
  let key = left + rulekey + right + EQUAL + sandhi;
  let r = Rules[key];
  if (!r && rulekey == RuleKeys[ELIDEBOTH]) {
    key = left + RuleKeys[ELIDELEFT] + right + EQUAL + sandhi;
    r = Rules[key];
    if (!r) {
      key = left + RuleKeys[ELIDENONE] + right + EQUAL + sandhi;
    }
  }
  if (!sandhi && !right && (!left || left === "a")) return ELIDENONE;
  if (!sandhi && right === "") return ELIDELEFT;
  if (!sandhi && (left === "" || left === "a") && !right) return ELIDERIGHT;
  verbose && console.log("RR ", right, sandhi, "assim", isAssimiliar(right, sandhi));
  if (!r && isAssimiliar(right, sandhi)) {
    if (isVowel(left)) r = ELIDEBOTH;
    else if (left.match(/[AIUOE]$/)) r = ELIDERIGHT;
  }
  return parseInt(r) || ELIDENONE;
};
var getLeft = (str) => {
  const at = str.lastIndexOf("<");
  return ~at ? str.slice(at + 1) : "";
};
var getRight = (str) => {
  const at = str.indexOf(">");
  return ~at ? str.slice(0, at) : "";
};
var getTailSyl = (str) => {
  const ch1 = str.slice(str.length - 1), ch2 = str.slice(str.length - 2);
  if (ch2 === "IA") return "\u012A";
  else if (ch2 === "UA") return "\u016A";
  else if (ch1 === "E") return "E";
  else if (ch1 === "O") return "O";
  else if (ch1 == "A") return "A";
  else if (ch1 == "I") return "I";
  else if (ch1 == "U") return "U";
  else if (ch1 == "V") return "V";
  else if (ch1 == "M") return "M";
  return "a";
};
var getHeadSyl = (str) => {
  const ch1 = str.slice(0, 1), ch2 = str.slice(0, 2);
  if (ch2 === "aA") return "aA";
  else if (ch2 === "AA") return "AA";
  else if (ch2 === "iA" || ch2 == "IA") return "\u012A";
  else if (ch2 === "uA" || ch2 == "UA") return "\u016A";
  else if (ch1 === "\u016B") return "\u016A";
  else if (ch1 === "\u012B") return "\u012A";
  else if (ch1.toLowerCase() === "a") return "A";
  else if (ch1.toLowerCase() === "u") return "U";
  else if (ch1.toLowerCase() === "i") return "I";
  else if (ch1.toLowerCase() === "o") return "O";
  else if (ch1.toLowerCase() === "e") return "E";
  else return ch1 + (ch2[1] == "A" ? "A" : "");
};
var sbProvident = (str) => {
  return str.replace(/UA/g, "\u016A").replace(/IA/g, "\u012A").replace(/iA/g, "\u012B").replace(/uA/g, "\u016B");
};
var mbProvident = (str) => {
  return str.replace(/Ū/g, "UA").replace(/Ī/g, "IA").replace(/ī/g, "iA").replace(/ū/g, "uA");
};
var getAssimiliar = (w2) => {
  let out2 = "";
  const m4 = w2.match(/^([KGCJPBTDkgcjpbmtds])/);
  if (m4) return m4[1].toLowerCase() + "V" + m4[1][0];
  else if (w2[0] == "Q") return "FVQ";
  else if (w2[0] == "F") return "FVF";
  else if (w2[0] == "W") return "WVW";
  else if (w2[0] == "X") return "WVX";
  else if (w2[0] == "Y") return "YVY";
};
var sameAlpha = (v1, v2) => {
  if (v1.match(/[aeiouAEIUO]/)) return v1.toUpperCase() === v2.toUpperCase();
  return v1 === v2;
};
var isVowel = (s) => !!s.match(/^[aeiouīūāŪĪĀAEIOU]/);
var isConsonant = (s) => !isVowel(s);
var getJoinType = (jt, left, right, verbose) => {
  let join2 = parseInt(jt);
  const jtypes = JoinTypes[join2];
  const L = getTailSyl(left), R = getHeadSyl(right);
  if (InsertRules[jt]) {
    return { keepRight: true, keepLeft: true, sandhi: InsertRules[jt], join: 0, rightconsumed: 0, leftconsumed: 0 };
  }
  let sandhi, keepLeft = join2 == ELIDERIGHT || join2 == ELIDENONE, keepRight = join2 == ELIDELEFT || join2 == ELIDENONE;
  let adv = 0, autorule = false;
  if (join2 >= ELIDEBOTH) {
    sandhi = jtypes[left + PAIRING + R];
    if (typeof sandhi === "undefined" && isConsonant(left)) {
      sandhi = jtypes[L + PAIRING + R];
    }
  }
  if (typeof sandhi == "undefined") {
    if (jt == ELIDEBOTH || jt == ELIDERIGHT) {
      const assim = getAssimiliar(right);
      verbose && console.log("assim", assim, right, jt);
      if (assim) {
        if (jt == ELIDERIGHT && sandhi) sandhi = "<" + sandhi;
        verbose && console.log("auto sandhi", sandhi);
        autorule = true;
        sandhi = assim;
      }
    }
  }
  if (!sandhi) sandhi = "";
  if (sandhi) {
    const elision = sandhi[0];
    if (elision == RuleKeys[ELIDENONE]) {
      keepLeft = true;
      keepRight = true;
    } else if (elision == RuleKeys[ELIDERIGHT]) keepLeft = true;
    else if (elision == RuleKeys[ELIDELEFT]) keepRight = true;
    if (elision.match(RuleKeysRegEx)) sandhi = sandhi.slice(1);
  }
  verbose && console.log("sandhi", sandhi, "keepLeft", keepLeft, "keepRight", keepRight);
  let leftconsumed = !autorule && (!keepLeft || join2 === ELIDELEFT) ? left.length : 0;
  if (leftconsumed > 1) leftconsumed = 1;
  const rightconsumed = !keepRight && (join2 === ELIDERIGHT || join2 >= ELIDEBOTH || !sameAlpha(right, R) || autorule) ? right.length : 0;
  verbose && console.log("rightconsumed", rightconsumed, "autorule", autorule);
  return { keepRight, keepLeft, sandhi, join: join2, rightconsumed, leftconsumed };
};

// ../provident-pali/src/lexification.js
var tryLexeme = (lx, i, orth, prev, final, verbose) => {
  let cap = false, alpha = false;
  if (i && lx.slice(0, 2) == "aA") {
    alpha = true;
    lx = lx.slice(1);
  }
  verbose && console.log(lx, orth);
  let at1 = orth.indexOf(lx.slice(0, lx.length - 1), prev);
  let at2 = -1;
  if (i) {
    at2 = orth.indexOf(lx.slice(1, lx.length - 1), prev);
  }
  if (at2 > -1 && orth.slice(at2)[1] == "V" && lx.length < 3) {
    const at3 = orth.indexOf(lx.slice(lx.length - 1), at2 + 1);
    if (at3 > -1 && lx.length < 3) {
      at2 = at3;
      at1 = -1;
    }
  }
  if (i && at1 == -1 && at2 > -1) {
    if (lx.charAt(0).match(/[eiuoūīā]/)) {
      lx = lx.charAt(0).toUpperCase() + lx.slice(1);
      cap = true;
      at1 = orth.indexOf(lx.slice(0, lx.length - 1), prev);
    }
  }
  verbose && console.log("try lexeme", lx, at1, at2, orth.slice(at2), alpha);
  return [at1, at2, cap, alpha, lx];
};
var lexify = (mborth, lexemes, verbose) => {
  let orth = sbProvident(mborth);
  let prev = 0, out2 = [], sandhi = "", cap = false, alpha = false, lexeme = "", extra = "", normed = false;
  for (let i = 0; i < lexemes.length; i++) {
    const final = lexemes.length - 1 == i;
    let lx = sbProvident(lexemes[i]);
    let at1, at2;
    [at1, at2, cap, alpha, lx] = tryLexeme(lx, i, orth, prev, final, verbose);
    if (at1 == -1 && at2 == -1) {
      if (NormLexeme[lexemes[i]]) {
        lx = sbProvident(NormLexeme[lexemes[i]]);
        normed = true;
        [at1, at2, cap, alpha, lx] = tryLexeme(lx, i, orth, prev, final, verbose);
      }
    }
    let at = -1;
    if (~at1) at = at1;
    else if (~at2 && i) at = at2;
    if (at == -1) {
      out2.push(-1);
      return out2;
    }
    const plast = lx[lx.length - 1];
    let samelast = false;
    verbose && console.log(i, "o", lx, "at", at, "at1/2", at1, at2, orth.slice(at), prev, orth.slice(prev));
    const orth_at_lexemefirst = orth.slice(at - 1, at);
    if (~at1) {
      let eaten = 0;
      let sandhi2 = orth.slice(prev, at1);
      if (sandhi2.charAt(sandhi2.length - 1) == "V") {
        sandhi2 += orth.charAt(at1);
        eaten = 1;
      }
      if (sandhi2 === "a") sandhi2 = "";
      i && out2.push(extra + sandhi2);
      let lastidx = at1 + lx.length - 1;
      if (lastidx >= orth.length) lastidx = orth.length - 1;
      const olast = orth[lastidx];
      lexeme = lx;
      if (eaten) {
        lexeme = lx.slice(0, eaten) + ">" + lx.slice(eaten);
      }
      if (olast === plast) {
        samelast = true;
      } else {
        verbose && console.log("plast", plast, "olast", olast, orth.slice(at1));
        lexeme = lexeme.slice(0, lexeme.length - 1) + "<" + plast;
      }
    } else if (~at2 && i) {
      const samehead = orth.slice(prev, at2 + 1) === lx.charAt(1);
      let sandhi2 = orth.slice(prev, at2);
      if (!sandhi2 && !samehead) {
        sandhi2 = orth.slice(prev, at2 + 1);
        verbose && console.log("empty sandhi, eat one more", sandhi2);
        at2++;
      }
      const lxch0 = lx.charAt(0);
      if (sandhi2.charAt(sandhi2.length - 1) == "V") {
        sandhi2 += orth.charAt(at2);
        at2--;
      }
      const olast = orth[at2 + lx.length - 2];
      let sdhi = sandhi2 !== lx.charAt(1) ? extra + sandhi2 : "";
      out2.push(sdhi);
      if (olast === plast) {
        samelast = true;
        lexeme = lx.charAt(0) + ">" + lx.slice(1);
      } else {
        lexeme = lx.charAt(0) + ">" + lx.slice(1, lx.length - 1) + "<" + plast;
      }
    }
    if (cap) lexeme = lexeme.charAt(0).toUpperCase() + lexeme.slice(1);
    if (alpha) {
      lexeme = (orth_at_lexemefirst == "a" ? "a" : "A") + lexeme;
      alpha = false;
    }
    if (extra) extra = "";
    if (normed && DeNormLexeme[lexeme] !== lexeme) {
      const dlexeme = DeNormLexeme[lexeme];
      out2.push(dlexeme || lexeme);
      if (dlexeme) {
        let at3 = dlexeme.indexOf("<");
        if (at3 > 0) extra = lexeme.slice(at3);
        at3 = dlexeme.indexOf(">");
        if (at3 > 0) {
          const e = lexeme.slice(0, at3);
          out2[out2.length - 2] += e;
        }
      }
      normed = false;
    } else {
      out2.push(lexeme);
    }
    prev = at + lx.length - 1;
    if (at !== at1 && at == at2) prev--;
    if (samelast) prev++;
  }
  return out2.map(mbProvident);
};

// ../provident-pali/src/formulation.js
var formulate = (lex, verbose) => {
  let out2 = "";
  if (lex.length < 3) return "";
  if (lex.length % 2 == 0) return "";
  for (let i = 0; i < lex.length; i++) {
    if (i % 2) {
      const sandhi = lex[i] || "";
      const leftconsumed = lex[i - 1].indexOf("<") > -1;
      const rightconsumed = lex[i + 1].indexOf(">") > -1;
      const leftv = getTailSyl(lex[i - 1].replace("<", ""));
      const rightv = getHeadSyl(lex[i + 1].replace(">", ""));
      let rule = getRule(leftv, rightv, leftconsumed, rightconsumed, sandhi, verbose);
      verbose && console.log("RULE", rule, leftv, "+", rightv, "=" + sandhi, verbose);
      if (rule === ELIDENONE) {
        const left = getLeft(lex[i - 1]);
        const right = getRight(lex[i + 1]);
        if (left && left !== "a" && !right) rule = ELIDELEFT;
        else if (right && !left) rule = ELIDERIGHT;
      }
      if (sandhi && rule == ELIDENONE) rule = ELIDEBOTH;
      verbose && console.log("formulate", leftv, rightv, "sandhi", sandhi, "rule", rule);
      out2 += rule;
    } else {
      let lexeme = lex[i].replace(">", "").replace("<", "");
      lexeme = DeNormLexeme[lexeme] || lexeme;
      out2 += lexeme;
    }
  }
  return out2;
};
var parseFormula = (_str, verbose) => {
  const out2 = [];
  let prev = 0, str = sbProvident(_str), consumedhead = "", extra = "";
  if (parseInt(_str).toString() == _str) return [];
  const addLexeme = (lexeme2) => {
    lexeme2 = lexeme2.replace(/^\d/, "").replace(/\d$/, "");
    if (lexeme2.match(/\d/)) {
      if (lexeme2.indexOf("<") > -1 || lexeme2.indexOf(">") > -1) {
        console.log("error single char lexeme", _str, lexeme2);
      } else {
        const p3 = parseFormula(lexeme2.replace());
        out2.push(...p3);
      }
    } else out2.push(lexeme2);
  };
  const prevLexeme = (idx2, last = "", join2) => {
    const len = consumedhead.length;
    consumedhead = "";
    let lexeme2 = len ? str.slice(prev, prev + len) + ">" + str.slice(prev + len, idx2) : str.slice(prev, idx2);
    lexeme2 += last;
    const nlexeme = NormLexeme[lexeme2.replace(">", "").replace("<", "")];
    if (nlexeme) {
      lexeme2 = lexeme2.replace("<", "");
      const cnt = samecount(nlexeme, lexeme2);
      if (cnt && join2) {
        lexeme2 = lexeme2.slice(0, cnt) + "<" + lexeme2.slice(cnt);
        extra = nlexeme.slice(cnt);
      } else {
        const cnt2 = sameendcount(nlexeme, lexeme2);
        if (cnt2) {
          lexeme2 = lexeme2.replace(">", "");
          lexeme2 = lexeme2.slice(0, lexeme2.length - cnt2) + ">" + lexeme2.slice(lexeme2.length - cnt2);
          out2[out2.length - 1] += nlexeme.slice(0, nlexeme.length - cnt2);
        }
      }
    }
    return lexeme2;
  };
  str.replace(/([a-zA-ZĪŪ])(\d+)([a-zA-ZĀĪŪāūī])/g, (m4, left, jt, right, idx2) => {
    let adv = 0;
    if ((right == "a" || right == "A") && str[idx2 + m4.length] === "A") {
      right += "A";
      adv = 1;
    }
    const { join: join2, sandhi, rightconsumed, leftconsumed } = getJoinType(jt, left, right, verbose);
    verbose && console.log("sandhi", sandhi, "join", join2, "left", left, "right", right, "consumed l", leftconsumed, "r", rightconsumed);
    let lexeme2 = leftconsumed ? prevLexeme(idx2, (idx2 && join2 ? "<" : "") + left, join2) : prevLexeme(idx2, left, join2);
    addLexeme(lexeme2);
    out2.push(extra + sandhi);
    extra = "";
    consumedhead = rightconsumed ? right : "";
    if (join2 === ELIDERIGHT) idx2 -= left.length;
    else if (!rightconsumed || join2 === ELIDELEFT || join2 === ELIDENONE) idx2 -= right.length;
    else {
      idx2 -= right.length;
      verbose && console.log("right", right, "prev", idx2 + m4.length, rightconsumed, left, sandhi);
    }
    prev = idx2 + m4.length + adv;
    verbose && console.log("prev", prev, str.slice(prev));
  });
  const lexeme = prevLexeme(str.length);
  addLexeme(lexeme);
  return out2.map(mbProvident);
};
var orthOf = (lex, verbose) => {
  if (typeof lex === "string") {
    lex = parseFormula(lex);
    if (lex.length < 3) return "";
  }
  if (lex.length == 1) return lex.join("");
  else if (lex.length == 2) {
    console.log("wrong lex", lex);
    return "";
  }
  let s = lex.map((it) => it !== -1 && it.replace(/<.+$/, "").replace(/^.+>/, "").replace(/^AA/, "A")).map((it, idx2, self) => self[idx2 + 1] && NormLexeme[it] || it).join("");
  if (s.match(/^[AEIOU]/)) s = s.charAt(0).toLowerCase() + s.slice(1);
  return s;
};
var LEXEME_SPLIT = "/";
var lexemeOf = (lex, splitchar = LEXEME_SPLIT) => {
  let s = "";
  if (typeof lex === "string") {
    s = lex.replace(/\d+/g, splitchar);
  } else {
    for (let i = 0; i < lex.length; i += 2) {
      if (i) s += splitchar;
      s += lex[i].replace(/[><]/g, "");
    }
  }
  s = s.replace(/(.)([AEIOU])/g, (m4, m1, m22) => m1 == splitchar ? m1 + m22.toLowerCase() : m1 + m22);
  return s;
};

// ../provident-pali/src/syllable.js
var syllablify = (w2) => {
  const syl = w2.split(/([kKgGbcCjJBpPtTdDFQWXhHlLmnsSvNyrY][EIOUA]{0,2}M?)/).filter((it) => !!it);
  const out2 = [];
  let i = 0, isV = false;
  while (i < syl.length) {
    if (syl[i] === "V") {
      out2[out2.length - 1] += syl[i] + syl[i + 1];
      i++;
    } else {
      out2.push(syl[i]);
    }
    i++;
  }
  return out2;
};

// ../provident-pali/src/tables.js
var devanagari = {
  "\u0915": "k",
  "\u0916": "K",
  "\u0917": "g",
  "\u0918": "G",
  "\u0919": "NG",
  "\u0939": "h",
  // NG 會變為 provident 的 N, 不能重覆故(做反向表時val 變key)
  "\u091A": "c",
  "\u091B": "C",
  "\u091C": "j",
  "\u091D": "J",
  "\u091E": "Y",
  "\u092F": "y",
  "\u0936": "Z",
  "\u091F": "W",
  "\u0920": "X",
  "\u0921": "F",
  "\u0922": "Q",
  "\u0923": "N",
  "\u0930": "r",
  "\u0937": "S",
  "\u0924": "t",
  "\u0925": "T",
  "\u0926": "d",
  "\u0927": "D",
  "\u0928": "n",
  "\u0932": "l",
  "\u0938": "s",
  "\u092A": "p",
  "\u092B": "P",
  "\u092C": "b",
  "\u092D": "B",
  "\u092E": "m",
  "\u0935": "v",
  "\u0933": "L",
  "\u0902": "M",
  "\u0970": "",
  //abbreviation use only by pe...and inside note (版本略符)
  "\u0905": "a",
  "\u0907": "i",
  "\u0909": "u",
  "\u090F": "e",
  "\u0913": "o",
  "\u0906": "aA",
  "\u0908": "iI",
  "\u090A": "uU",
  "\u0910": "ai",
  "\u0914": "au",
  "\u093E": "A",
  "\u093F": "I",
  "\u0940": "II",
  "\u0941": "U",
  "\u0942": "UU",
  "\u0947": "E",
  "\u094B": "O",
  "\u094D": "V",
  //virama , 連接下個輔音。
  "\u0966": "0",
  "\u0967": "1",
  "\u0968": "2",
  "\u0969": "3",
  "\u096A": "4",
  "\u096B": "5",
  "\u096C": "6",
  "\u096D": "7",
  "\u096E": "8",
  "\u096F": "9",
  // '।':'|','॥':'||',
  "\u0964": "\u0964",
  "\u0965": "\u0965",
  "\u094C": "aU",
  //invalid in pali
  "\u0948": "aI",
  //invalid in pali
  "\u090B": "R",
  "\u0903": "H"
  //visarga, rare
};
var sinhala = {
  "\u0D9A": "k",
  "\u0D9B": "K",
  "\u0D9C": "g",
  "\u0D9D": "G",
  "\u0D9E": "NG",
  "\u0DC4": "h",
  "\u0DA0": "c",
  "\u0DA1": "C",
  "\u0DA2": "j",
  "\u0DA3": "J",
  "\u0DA4": "Y",
  "\u0DBA": "y",
  "\u0936": "Z",
  "\u0DA7": "W",
  "\u0DA8": "X",
  "\u0DA9": "F",
  "\u0DAA": "Q",
  "\u0DAB": "N",
  "\u0DBB": "r",
  "\u0937": "S",
  "\u0DAD": "t",
  "\u0DAE": "T",
  "\u0DAF": "d",
  "\u0DB0": "D",
  "\u0DB1": "n",
  "\u0DBD": "l",
  "\u0DC3": "s",
  "\u0DB4": "p",
  "\u0DB5": "P",
  "\u0DB6": "b",
  "\u0DB7": "B",
  "\u0DB8": "m",
  "\u0DC0": "v",
  "\u0DC5": "L",
  "\u0D82": "M",
  "\u0D85": "a",
  "\u0D89": "i",
  "\u0D8B": "u",
  "\u0D91": "e",
  "\u0D94": "o",
  "\u0D86": "aA",
  "\u0D8A": "iI",
  "\u0D8C": "uU",
  "\u0DCF": "A",
  "\u0DD2": "I",
  "\u0DD3": "II",
  "\u0DD4": "U",
  "\u0DD6": "UU",
  "\u0DD9": "E",
  "\u0DDC": "O",
  "\u0DCA": "V"
};
var myanmar = {
  "\u1000": "k",
  "\u1001": "K",
  "\u1002": "g",
  "\u1003": "G",
  "\u1004": "NG",
  "\u101F": "h",
  "\u1005": "c",
  "\u1006": "C",
  "\u1007": "j",
  "\u1008": "J",
  "\u1009": "Y",
  "\u101A": "y",
  "\u0936": "Z",
  "\u100B": "W",
  "\u100C": "X",
  "\u100D": "F",
  "\u100E": "Q",
  "\u100F": "N",
  "\u101B": "r",
  "\u0937": "S",
  "\u1010": "t",
  "\u1011": "T",
  "\u1012": "d",
  "\u1013": "D",
  "\u1014": "n",
  "\u101C": "l",
  "\u101E": "s",
  "\u1015": "p",
  "\u1016": "P",
  "\u1017": "b",
  "\u1018": "B",
  "\u1019": "m",
  "\u101D": "v",
  "\u1020": "L",
  "\u1036": "M",
  "\u1021": "a",
  "\u1023": "i",
  "\u1025": "u",
  "\u1027": "e",
  "\u1029": "o",
  "\u1021\u102C": "aA",
  "\u1024": "iI",
  "\u1026": "uU",
  "\u102C": "A",
  "\u102D": "I",
  "\u102E": "II",
  "\u102F": "U",
  "\u1030": "UU",
  "\u1031": "E",
  "\u1031\u102C": "O",
  "\u1039": "V",
  "\u1040": "0",
  "\u1041": "1",
  "\u1042": "2",
  "\u1043": "3",
  "\u1044": "4",
  "\u1045": "5",
  "\u1046": "6",
  "\u1047": "7",
  "\u1048": "8",
  "\u1049": "9",
  " \u103A": "",
  //ASAT
  "\u104A": "\u0964",
  "\u104B": "\u0965"
};
var thai = {
  "\u0E01": "k",
  "\u0E02": "K",
  "\u0E04": "g",
  "\u0E06": "G",
  "\u0E07": "NG",
  "\u0E2B": "h",
  "\u0E08": "c",
  "\u0E09": "C",
  "\u0E0A": "j",
  "\u0E0C": "J",
  "\u0E0D": "Y",
  "\u0E22": "y",
  "\u0936": "Z",
  "\u0E0F": "W",
  "\u0E10": "X",
  "\u0E11": "F",
  "\u0E12": "Q",
  "\u0E13": "N",
  "\u0E23": "r",
  "\u0937": "S",
  "\u0E15": "t",
  "\u0E16": "T",
  "\u0E17": "d",
  "\u0E18": "D",
  "\u0E19": "n",
  "\u0E25": "l",
  "\u0E2A": "s",
  "\u0E1B": "p",
  "\u0E1C": "P",
  "\u0E1E": "b",
  "\u0E20": "B",
  "\u0E21": "m",
  "\u0E27": "v",
  "\u0E2C": "L",
  "\u0E4D": "M",
  "\u0E2D": "a",
  "\u0E2D\u0E34": "i",
  "\u0E2D\u0E38": "u",
  "\u0E40\u0E2D": "e",
  "\u0E42\u0E2D": "o",
  "\u0E2D\u0E32": "aA",
  "\u0E2D\u0E35": "iI",
  "\u0E2D\u0E39": "uU",
  "\u0E32": "A",
  "\u0E34": "I",
  "\u0E35": "II",
  "\u0E38": "U",
  "\u0E39": "UU",
  "\u0E40": "E",
  "\u0E42": "O",
  "\u0E3A": "V",
  "\u0E50": "0",
  "\u0E51": "1",
  "\u0E52": "2",
  "\u0E53": "3",
  "\u0E54": "4",
  "\u0E55": "5",
  "\u0E56": "6",
  "\u0E57": "7",
  "\u0E58": "8",
  "\u0E59": "9"
};
var khmer = {
  "\u1780": "k",
  "\u1781": "K",
  "\u1782": "g",
  "\u1783": "G",
  "\u1784": "NG",
  "\u17A0": "h",
  "\u1785": "c",
  "\u1786": "C",
  "\u1787": "j",
  "\u1788": "J",
  "\u1789": "Y",
  "\u1799": "y",
  "\u0936": "Z",
  "\u178A": "W",
  "\u178B": "X",
  "\u178C": "F",
  "\u178D": "Q",
  "\u178E": "N",
  "\u179A": "r",
  "\u0937": "S",
  "\u178F": "t",
  "\u1790": "T",
  "\u1791": "d",
  "\u1792": "D",
  "\u1793": "n",
  "\u179B": "l",
  "\u179F": "s",
  "\u1794": "p",
  "\u1795": "P",
  "\u1796": "b",
  "\u1797": "B",
  "\u1798": "m",
  "\u179C": "v",
  "\u17A1": "L",
  "\u17C6": "M",
  "\u17A2": "a",
  "\u17A5": "i",
  "\u17A7": "u",
  "\u17AF": "e",
  "\u17B1": "o",
  "\u17A2\u17B6": "aA",
  "\u17A6": "iI",
  "\u17A9": "uU",
  "\u17B6": "A",
  "\u17B7": "I",
  "\u17B8": "II",
  "\u17BB": "U",
  "\u17BC": "UU",
  "\u17C1": "E",
  "\u17C4": "O",
  "\u17D2": "V",
  "\u17E0": "0",
  "\u17E1": "1",
  "\u17E2": "2",
  "\u17E3": "3",
  "\u17E4": "4",
  "\u17E5": "5",
  "\u17E6": "6",
  "\u17E7": "7",
  "\u17E8": "8",
  "\u17E9": "9"
};
var laos = {
  "\u0E81": "k",
  "\u0E82": "K",
  "\u0E84": "g",
  "\u0E86": "G",
  "\u0E87": "NG",
  "\u0EAB": "h",
  "\u0E88": "c",
  "\u0E89": "C",
  "\u0E8A": "j",
  "\u0E8C": "J",
  "\u0E8E": "Y",
  "\u0E8D": "y",
  "\u0936": "Z",
  "\u0E8F": "W",
  "\u0E90": "X",
  "\u0E91": "F",
  "\u0E92": "Q",
  "\u0E93": "N",
  "\u0EA3": "r",
  "\u0937": "S",
  "\u0E95": "t",
  "\u0E96": "T",
  "\u0E97": "d",
  "\u0E98": "D",
  "\u0E99": "n",
  "\u0EA5": "l",
  "\u0EAA": "s",
  "\u0E9B": "p",
  "\u0E9C": "P",
  "\u0E9E": "b",
  "\u0EA0": "B",
  "\u0EA1": "m",
  "\u0EA7": "v",
  "\u0EAC": "L",
  "\u0ECD": "M",
  "\u0EAD": "a",
  "\u0EAD\u0EB4": "i",
  "\u0EAD\u0EB8": "u",
  "\u0EC0\u0EAD": "e",
  "\u0EC2\u0EAD": "o",
  "\u0EAD\u0EB2": "aA",
  "\u0EAD\u0EB5": "iI",
  "\u0EAD\u0EB9": "uU",
  "\u0EB2": "A",
  "\u0EB4": "I",
  "\u0EB5": "II",
  "\u0EB8": "U",
  "\u0EB9": "UU",
  "\u0EC0": "E",
  "\u0EC2": "O",
  "\u0EBA": "V",
  "\u0ED0": "0",
  "\u0ED1": "1",
  "\u0ED2": "2",
  "\u0ED3": "3",
  "\u0ED4": "4",
  "\u0ED5": "5",
  "\u0ED6": "6",
  "\u0ED7": "7",
  "\u0ED8": "8",
  "\u0ED9": "9"
};
var tibetan = {
  "\u0F40": "k",
  "\u0F41": "K",
  "\u0F42": "g",
  "\u0F43": "G",
  "\u0F44": "NG",
  "\u0F67": "h",
  "\u0F59": "c",
  "\u0F5A": "C",
  "\u0F5B": "j",
  "\u0F5C": "J",
  "\u0F49": "Y",
  "\u0F61": "y",
  "\u0936": "Z",
  "\u0F4A": "W",
  "\u0F4B": "X",
  "\u0F4C": "F",
  "\u0F4D": "Q",
  "\u0F4E": "N",
  "\u0F62": "r",
  "\u0937": "S",
  "\u0F4F": "t",
  "\u0F50": "T",
  "\u0F51": "d",
  "\u0F52": "D",
  "\u0F53": "n",
  "\u0F63": "l",
  "\u0F66": "s",
  "\u0F54": "p",
  "\u0F55": "P",
  "\u0F56": "b",
  "\u0F57": "B",
  "\u0F58": "m",
  "\u0F5D": "v",
  "\u0F63\u0F39": "L",
  "\u0F7E": "M",
  "\u0F68": "a",
  "\u0F68\u0F72": "i",
  "\u0F68\u0F74": "u",
  "\u0F68\u0F7A": "e",
  "\u0F68\u0F7C": "o",
  "\u0F68\u0F71": "aA",
  "\u0F68\u0F71\u0F72": "iI",
  "\u0F68\u0F71\u0F74": "uU",
  "\u0F71": "A",
  "\u0F72": "I",
  "\u0F71\u0F72": "II",
  "\u0F74": "U",
  "\u0F71\u0F74": "UU",
  "\u0F7A": "E",
  "\u0F7C": "O",
  "\u0F84": "V",
  "\u0F20": "0",
  "\u0F21": "1",
  "\u0F22": "2",
  "\u0F23": "3",
  "\u0F24": "4",
  "\u0F25": "5",
  "\u0F26": "6",
  "\u0F27": "7",
  "\u0F28": "8",
  "\u0F29": "9",
  //subjoin
  "\u0F90": "Vk",
  "\u0F91": "VK",
  "\u0F92": "Vg",
  "\u0F93": "VG",
  "\u0F94": "VN",
  "\u0F95\u0F96\u0F97": "Vc",
  "\u0F96": "VC",
  "\u0F97": "Vj",
  "\u0F99": "VY",
  "\u0F9A": "tVt",
  "\u0F9B": "tVT",
  "\u0F9C": "dVd",
  "\u0F9D": "dVD",
  "\u0F9E": "nVN",
  "\u0F9F": "Vt",
  "\u0FA0": "VT",
  "\u0FA1": "Vd",
  "\u0FA2": "VD",
  "\u0FA3": "Vn",
  "\u0FA4": "Vp",
  "\u0FA5": "VP",
  "\u0FA6": "Vb",
  "\u0FA7": "VB",
  "\u0FA8": "Vm",
  "\u0F0D": "\u0964",
  "\u0F0E": "\u0965"
};

// ../provident-pali/src/indic.js
var inverseTable = (tbl) => {
  const out2 = {};
  for (let key in tbl) out2[tbl[key]] = key;
  return out2;
};
var tables = {
  hi: inverseTable(devanagari),
  my: inverseTable(myanmar),
  th: inverseTable(thai),
  km: inverseTable(khmer),
  lo: inverseTable(laos),
  si: inverseTable(sinhala),
  tb: inverseTable(tibetan)
  //,    cy:inverseTable(cyrillic),
};

// ../provident-pali/index.js
var LEX_REG_G = /([a-zA-Z]+\d+[\dA-Za-z]+)/g;

// pali/factorizer.ts
var langSplitChar = (palitrans) => {
  return { "": "\u29D8", "iast": "\xB7", tb: "\u0FD2" }[palitrans] || "-";
};
var REG_PALI_SPACE_SPLIT = /([ ⧘\-࿒·])/;
var factorizeText = (str, mode, palitrans) => {
  if (!str) return str;
  const splitchar = langSplitChar(palitrans);
  return str.replace(LEX_REG_G, (m4, m1, idx2) => {
    if (m1.length < 4 || str[idx2 - 1] === "#" || str[idx2 - 1] === "^") return m1;
    const lex = parseFormula(m1);
    return mode ? lexemeOf(lex, splitchar) : orthOf(lex);
  });
};

// pali/tokenoffset.ts
var calOriginalOffset = (offset, screentext, oritext) => {
  if (!oritext || screentext === oritext) return offset;
  let acc1 = 0, acc2 = 0, i = 0;
  while (i < screentext.length && screentext[i] == " ") {
    i++;
    acc1++;
    screentext = screentext.slice(i);
  }
  i = 0;
  while (i < oritext.length && oritext[i] == " ") {
    i++;
    acc2++;
    oritext = oritext.slice(i);
  }
  const tokens1 = screentext.split(REG_PALI_SPACE_SPLIT);
  const tokens2 = oritext.split(REG_PALI_SPACE_SPLIT);
  if (tokens1.length !== tokens2.length) {
    console.warn("screen text is not converted from oritext", screentext, oritext);
    return offset;
  }
  i = 0;
  while (i < tokens1.length) {
    acc1 += tokens1[i].length;
    acc2 += tokens2[i].length;
    if (tokens1[i] && !tokens1[i].match(REG_PALI_SPACE_SPLIT) && acc1 > offset) {
      acc2 -= tokens2[i].length;
      return acc2;
    }
    i++;
  }
  return offset;
};

// pali/wordcard.ts
var getFactors = (pli) => {
};
var getOrthograph = (factored) => {
};
var getWordInfo = (pli) => {
  let root, partofspeech, stem, tense, gender, number, cas, person, meaning = "", derivations, samebase;
  return {
    root,
    //詞根
    partofspeech,
    //詞品
    stem,
    //詞幹尾 a , i 
    //活用		能, 能反
    tense,
    //時態
    gender,
    number,
    case: cas,
    person,
    //性,數,格|人稱
    meaning,
    derivations,
    //所有的延伸字 清單
    samebase
    //相同前綴的字 
  };
};

// pali/formula.ts
var Formula = class {
  constructor(fn, json) {
    const config = Object.assign(JSON.parse(readTextContent(fn).replace(/\/\/.*\n/g, "\n")), json);
    this.lexicon = readTextLines(config.lexicon);
    const isIAST = config.encoding === "iast";
    this.isIAST = isIAST;
    if (config.encoding === "iast") this.lexicon = this.lexicon.map(fromIAST);
    this.lexicon.sort(alphabetically);
    let decomposes = config.decomposes;
    if (typeof decomposes === "string") decomposes = decomposes.split(",");
    this.decomposes = decomposes.map((fn2) => {
      let entries = readTextLines(fn2);
      this.checkdup(entries, fn2);
      if (isIAST) entries = entries.map(fromIAST);
      entries = entries.sort(alphabetically);
      return entries;
    });
    this.patchLastDecompose();
  }
  checkdup(entries, fn) {
    let prev = this.getOrth(entries[0]);
    for (let i = 1; i < entries.length; i++) {
      if (this.getOrth(entries[i]) == prev) {
        console.log("warning duplicate items", entries[i], "at line " + (i + 1));
      }
      prev = this.getOrth(entries[i]);
    }
  }
  getOrth(raw) {
    if (!raw) return;
    const at = raw.indexOf("=");
    if (~at) return raw.slice(0, at);
  }
  patchLastDecompose() {
    const lastdecompose = this.decomposes[this.decomposes.length - 1];
    let patchcount = 0;
    for (let i = 0; i < this.decomposes.length - 1; i++) {
      const decomp = this.decomposes[i];
      for (let j2 = 0; j2 < decomp.length; j2++) {
        const entry = this.getOrth(decomp[j2]);
        const at = bsearch(lastdecompose, entry + "=", true);
        if (~at && lastdecompose[at].slice(0, entry.length) === entry) {
          lastdecompose[at] = "";
          patchcount++;
        }
      }
    }
    if (patchcount) {
      this.decomposes[this.decomposes.length - 1] = lastdecompose.filter((it) => !!it);
      console.log("patch ", patchcount, "entries");
    }
  }
  isLemma(w2) {
    const at = bsearch(this.lexicon, w2);
    return at > -1;
  }
  findPossible(w2, decompose) {
    const at = bsearch(decompose, w2 + "=", true);
    if (at > -1 && decompose[at].slice(0, w2.length) == w2 && decompose[at][w2.length] == "=") {
      let lex = decompose[at].slice(w2.length + 1), p3 = 0;
      if (parseInt(lex)) {
        const breaks = lex;
        lex = "";
        for (let i = 0; i < breaks.length; i += 2) {
          const to = parseInt(breaks.slice(i, i + 2), 10);
          if (i) lex += "0";
          lex += w2.slice(p3, to);
          p3 = to;
        }
        lex += "0" + w2.slice(p3);
      }
      return lex;
    }
  }
  expandLex(lex) {
    if (parseInt(lex)) {
      const breaks = lex;
      lex = "";
      for (let i = 0; i < breaks.length; i += 2) {
        const to = parseInt(breaks.slice(i, i + 2), 10);
        if (i) lex += "0";
        lex += w.slice(p, to);
        p = to;
      }
      lex += "0" + w.slice(p);
    }
    return lex;
  }
  findOrth(w2, decompose) {
    const at = bsearch(decompose, w2 + "=", true);
    if (at > -1 && decompose[at].slice(0, w2.length) == w2 && decompose[at][w2.length] == "=") {
      let lex = decompose[at].slice(w2.length + 1), p3 = 0;
      return this.expandLex(lex).split("-");
    }
  }
  factorize(w2) {
    if (this.isLemma(w2)) return w2;
    for (let i = 0; i < this.decomposes.length; i++) {
      const parts = this.findOrth(w2, this.decomposes[i]);
      if (parts) {
        if (parts.length == 1) return parts[0];
        const lex = lexify(w2, parts);
        const lexstr = formulate(lex);
        if (orthOf(lexstr) === w2) {
          return formulate(lex);
        } else {
          console.log("cannot lex ", this.isIAST ? toIAST(w2) : w2, this.isIAST ? parts.map(toIAST) : parts, this.isIAST ? w2 : "");
        }
      }
    }
    return null;
  }
  forEach(cb, I = -1) {
    if (I == -1) I = this.decomposes.length - 1;
    for (let i = 0; i < this.decomposes.length && i <= I; i++) {
      for (let j2 = 0; j2 < this.decomposes[i].length; j2++) {
        const raw = this.decomposes[i][j2];
        const at = raw.indexOf("=");
        if (~at) {
          const orth = raw.slice(0, at);
          const parts = raw.slice(at + 1).split("-");
          cb(orth, parts, raw);
        }
      }
    }
  }
  guess(w2) {
    let possible = [];
    const syls = syllablify(w2);
    for (let i = 0; i < syls.length; i++) {
      for (let j2 = 1; j2 <= syls.length; j2++) {
        const ww = syls.slice(i, j2).join("");
        if (!ww) continue;
        if (this.isLemma(ww) && possible.indexOf(ww) == -1) possible.push(ww);
        for (let k = 0; k < this.decomposes.length; k++) {
          const out2 = this.findOrth(ww, this.decomposes[k]);
          if (out2 && possible.indexOf(ww) == -1) possible.push(ww);
        }
      }
    }
    possible = possible.filter((it) => it.length > 1);
    possible = removeSubstring(possible, debug);
    debug && console.log(w2, possible);
    const lex = lexify(w2, possible);
    if (possible.length > 1 && !lex.filter((it) => it == -1).length && lex.length) {
      const fullmatch = lex.join("") == w2;
      if (fullmatch) return formulate(lex);
    }
    return possible;
  }
};

// pali/stem.ts
var Stems_ = `sUtVtM,vgVg,tIA,tI,pI,M,YVc,v,Mv,yEv`.split(/,/);
var Stems_verb = `nVtIyA,nVtAnM,nVtI,sI,sIA,mI,mIA,tIyA,eyVyAT,EyVyAm,eT,sVsAm,Imh,EyVyAT,EsVsnVtIA`.split(/,/);
var Stems_1 = `EhI,EsU,En,sVmIm,sVmIM,sVs,AnI,Iy,ETA,tbVb,EyVY,EyVYU,mVhI,mVhA`.split(/,/);
var Stems_2 = `A,O,E,I,U`.split(/,/);
var knownlist = ``.split(/\r?\n/).sort(alphabetically);
var enumBases = (s) => {
  const out2 = [];
  let p3 = s, verb = false;
  const at = bsearch(knownlist, s);
  if (at > -1) return s;
  if (s[1] == "V" && s[0].toLowerCase() === s[2].toLowerCase()) {
    s = s.slice(2);
  }
  if (s.length < 3) return out2;
  if (s.endsWith("V")) {
    p3 = s.slice(0, s.length - 1);
    out2.push(p3);
  }
  for (let i = 0; i < Stems_verb.length; i++) {
    if (p3.endsWith(Stems_verb[i])) {
      out2.push(p3.slice(0, p3.length - Stems_verb[i].length) + "tI");
      verb = true;
      break;
    }
  }
  if (!verb) for (let i = 0; i < Stems_.length; i++) {
    if (p3.endsWith(Stems_[i])) {
      p3 = p3.slice(0, p3.length - Stems_[i].length);
      if (p3.endsWith("V")) p3 = p3.slice(0, p3.length - 1);
      out2.push(p3);
      break;
    }
  }
  if (!verb) for (let i = 0; i < Stems_1.length; i++) {
    if (p3.endsWith(Stems_1[i])) {
      out2.push(p3.slice(0, p3.length - Stems_1[i].length));
      p3 = p3.slice(0, p3.length - Stems_1[i].length);
      break;
    }
  }
  if (!verb) for (let i = 0; i < Stems_2.length; i++) {
    if (p3.endsWith(Stems_2[i])) out2.push(p3.slice(0, p3.length - Stems_2[i].length));
  }
  if (p3.endsWith("m") || p3.endsWith("y")) out2.push(p3.slice(0, p3.length - 1));
  if (p3.endsWith("sI") || p3.endsWith("mI")) out2.push(p3.slice(0, p3.length - 2) + "tI");
  return out2;
};

// xml/escape.ts
var unescapeXMLTable = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'"
};
function unescapeXMLReplace(match) {
  if (match[1] === "#") {
    const num = match[2] === "x" ? parseInt(match.slice(3), 16) : parseInt(match.slice(2), 10);
    if (num === 9 || num === 10 || num === 13 || num >= 32 && num <= 55295 || num >= 57344 && num <= 65533 || num >= 65536 && num <= 1114111) {
      return String.fromCodePoint(num);
    }
    throw new Error("Illegal XML character 0x" + num.toString(16));
  }
  if (unescapeXMLTable[match]) {
    return unescapeXMLTable[match] || match;
  }
  throw new Error("Illegal XML entity " + match);
}
function unescapeXML(s) {
  let result = "";
  let start = -1;
  let end = -1;
  let previous = 0;
  while ((start = s.indexOf("&", previous)) !== -1 && (end = s.indexOf(";", start + 1)) !== -1) {
    result = result + s.slice(previous, start) + unescapeXMLReplace(s.slice(start, end + 1));
    previous = end + 1;
  }
  if (previous === 0) return s;
  result = result + s.substring(previous);
  return result;
}

// xml/sax.ts
var STATE_TEXT = 0;
var STATE_IGNORE_COMMENT = 1;
var STATE_IGNORE_INSTRUCTION = 2;
var STATE_TAG_NAME = 3;
var STATE_TAG = 4;
var STATE_ATTR_NAME = 5;
var STATE_ATTR_EQ = 6;
var STATE_ATTR_QUOT = 7;
var STATE_ATTR_VALUE = 8;
var STATE_CDATA = 9;
var STATE_IGNORE_CDATA = 10;
var Sax = class {
  constructor(opts) {
    let state = STATE_TEXT;
    let remainder;
    let parseRemainder;
    let tagName;
    let attrs;
    let endTag;
    let selfClosing;
    let attrQuote;
    let attrQuoteChar;
    let recordStart = 0;
    let attrName;
    this.startElement = opts.startElement || function(tagName2, attrs2) {
    };
    this.endElement = opts.endElement || function(tagName2) {
    };
    this.onText = opts.onText || function(t) {
    };
    this._handleTagOpening = function _handleTagOpening(endTag2, tagName2, attrs2) {
      if (!endTag2) {
        this.startElement(tagName2, attrs2);
        if (selfClosing) {
          this.endElement(tagName2);
        }
      } else {
        this.endElement(tagName2);
      }
    };
    this.write = function write(data) {
      if (typeof data !== "string") {
        data = data.toString();
      }
      let pos = 0;
      if (remainder) {
        data = remainder + data;
        pos += !parseRemainder ? remainder.length : 0;
        parseRemainder = false;
        remainder = null;
      }
      function endRecording() {
        if (typeof recordStart === "number") {
          const recorded = data.slice(recordStart, pos);
          recordStart = void 0;
          return recorded;
        }
      }
      for (; pos < data.length; pos++) {
        switch (state) {
          case STATE_TEXT: {
            const lt = data.indexOf("<", pos);
            if (lt !== -1 && pos !== lt) {
              pos = lt;
            }
            break;
          }
          case STATE_ATTR_VALUE: {
            const quot = data.indexOf(attrQuoteChar, pos);
            if (quot !== -1) {
              pos = quot;
            }
            break;
          }
          case STATE_IGNORE_COMMENT: {
            const endcomment = data.indexOf("-->", pos);
            if (endcomment !== -1) {
              pos = endcomment + 2;
            }
            break;
          }
          case STATE_IGNORE_CDATA: {
            const endCDATA = data.indexOf("]]>", pos);
            if (endCDATA !== -1) {
              pos = endCDATA + 2;
            }
            break;
          }
        }
        const c2 = data.charCodeAt(pos);
        switch (state) {
          case STATE_TEXT:
            if (c2 === 60) {
              const text = endRecording();
              if (text) {
                this.onText(unescapeXML(text));
              }
              state = STATE_TAG_NAME;
              recordStart = pos + 1;
              attrs = {};
            }
            break;
          case STATE_CDATA:
            if (c2 === 93) {
              if (data.substr(pos + 1, 2) === "]>") {
                const cData = endRecording();
                if (cData) {
                  this.onText(cData);
                }
                state = STATE_TEXT;
              } else if (data.length < pos + 2) {
                parseRemainder = true;
                pos = data.length;
              }
            }
            break;
          case STATE_TAG_NAME:
            if (c2 === 47 && recordStart === pos) {
              recordStart = pos + 1;
              endTag = true;
            } else if (c2 === 33) {
              if (data.substr(pos + 1, 7) === "[CDATA[") {
                recordStart = pos + 8;
                state = STATE_CDATA;
              } else if (data.length < pos + 8 && "[CDATA[".startsWith(data.slice(pos + 1))) {
                parseRemainder = true;
                pos = data.length;
              } else {
                recordStart = void 0;
                state = STATE_IGNORE_COMMENT;
              }
            } else if (c2 === 63) {
              recordStart = void 0;
              state = STATE_IGNORE_INSTRUCTION;
            } else if (c2 <= 32 || c2 === 47 || c2 === 62) {
              tagName = endRecording();
              pos--;
              state = STATE_TAG;
            }
            break;
          case STATE_IGNORE_COMMENT:
            if (c2 === 62) {
              const prevFirst = data.charCodeAt(pos - 1);
              const prevSecond = data.charCodeAt(pos - 2);
              if (prevFirst === 45 && prevSecond === 45 || prevFirst === 93 && prevSecond === 93) {
                state = STATE_TEXT;
              }
            }
            break;
          case STATE_IGNORE_INSTRUCTION:
            if (c2 === 62) {
              const prev = data.charCodeAt(pos - 1);
              if (prev === 63) {
                state = STATE_TEXT;
              }
            }
            break;
          case STATE_TAG:
            if (c2 === 62) {
              this._handleTagOpening(endTag, tagName, attrs);
              tagName = void 0;
              attrs = void 0;
              endTag = void 0;
              selfClosing = void 0;
              state = STATE_TEXT;
              recordStart = pos + 1;
            } else if (c2 === 47) {
              selfClosing = true;
            } else if (c2 > 32) {
              recordStart = pos;
              state = STATE_ATTR_NAME;
            }
            break;
          case STATE_ATTR_NAME:
            if (c2 <= 32 || c2 === 61) {
              attrName = endRecording();
              pos--;
              state = STATE_ATTR_EQ;
            }
            break;
          case STATE_ATTR_EQ:
            if (c2 === 61) {
              state = STATE_ATTR_QUOT;
            }
            break;
          case STATE_ATTR_QUOT:
            if (c2 === 34 || c2 === 39) {
              attrQuote = c2;
              attrQuoteChar = c2 === 34 ? '"' : "'";
              state = STATE_ATTR_VALUE;
              recordStart = pos + 1;
            }
            break;
          case STATE_ATTR_VALUE:
            if (c2 === attrQuote) {
              const value = unescapeXML(endRecording());
              attrs[attrName] = value;
              attrName = void 0;
              state = STATE_TAG;
            }
            break;
        }
      }
      if (typeof recordStart === "number" && recordStart <= data.length) {
        remainder = data.slice(recordStart);
        recordStart = 0;
      }
    };
  }
};

// xml/element.ts
var Element = class _Element {
  constructor(name2, attrs) {
    this.name = name2;
    this.parent = null;
    this.children = [];
    this.attrs = {};
    this.setAttrs(attrs);
  }
  setAttrs(attrs) {
    if (typeof attrs === "string") {
      this.attrs.xmlns = attrs;
    } else if (attrs) {
      Object.assign(this.attrs, attrs);
    }
  }
  c(name2, attrs) {
    return this.cnode(new _Element(name2, attrs));
  }
  cnode(child) {
    this.children.push(child);
    if (typeof child === "object") {
      child.parent = this;
    }
    return child;
  }
  t(text) {
    this.children.push(text);
    return this;
  }
  innerText(trim = false) {
    const out2 = [];
    for (let i = 0; i < this.children.length; i++) {
      if (typeof this.children[i] === "string") {
        const t = this.children[i];
        out2.push(trim ? t.trim() : t);
      } else {
        const t = this.children[i].innerText(trim);
        out2.push(trim ? t.trim() : t);
      }
    }
    out2.push(this.attrs.text || "");
    return out2.join("");
  }
};

// xml/dom.ts
var DOMFromString = (str) => {
  let tree;
  let el;
  const startElement = (name2, attrs) => {
    const child = new Element(name2, attrs);
    el = !el ? child : el.cnode(child);
  };
  const endElement = (name2) => {
    if (name2 === el.name) {
      if (el.parent) {
        el = el.parent;
      } else if (!tree) {
        tree = el;
        el = void 0;
      }
    }
  };
  const onText = (text) => {
    if (el) el.t(text);
  };
  const sax = new Sax({ startElement, endElement, onText });
  sax.write(str);
  return tree;
};
var walkDOM = (el, ctx, onOpen2 = {}, onClose2 = {}, onText = null) => {
  onText = onText || ctx.onText;
  ctx.out = ctx.out || "";
  if (typeof el === "string") {
    ctx.out += onText ? onText(el, ctx) : el;
  }
  if (!el) {
    return;
  }
  const openhandler = onOpen2[el.name] || onOpen2["*"];
  if (openhandler) {
    const out2 = openhandler(el, ctx) || "";
    if (typeof out2 === "string" && !ctx.hide) ctx.out += out2;
  }
  if (el.children && el.children.length) {
    for (let i = 0; i < el.children.length; i++) {
      walkDOM(el.children[i], ctx, onOpen2, onClose2, onText);
    }
  }
  const closehandler = onClose2[el.name] || onClose2["*"];
  if (closehandler) {
    const out2 = closehandler(el, ctx) || "";
    if (!ctx.hide) ctx.out += out2;
  }
};
function JSONify(el) {
  if (typeof el !== "object") return el;
  return {
    name: el.name,
    attrs: el.attrs,
    children: el.children.map(JSONify)
  };
}
var xpath = (root, p3) => {
  const paths = p3.split("/");
  if (!root || !root.children) return null;
  let found, el, children = root.children;
  for (let i = 0; i < paths.length; i++) {
    for (let j2 = 0; j2 < children.length; j2++) {
      found = false;
      if (children[j2].name === paths[i]) {
        el = children[j2];
        if (el) children = children[j2].children;
        found = true;
        break;
      }
    }
    if (!found) return null;
  }
  return el;
};
var onOfftext = (el, ctx, onText) => {
  onText = onText || ctx.onText;
  let s = el;
  if (ctx.hide || ctx.delete) {
    ctx.delete = false;
    return "";
  }
  if (ctx.compact && s.charCodeAt(0) < 127) {
    s = " " + s;
    ctx.compact = false;
  }
  if (onText) {
    return onText(el, ctx, ctx.started ? s : "");
  } else {
    return ctx.started ? s : "";
  }
};
var walkDOMOfftext = (el, ctx, onOpen2 = {}, onClose2 = {}) => {
  walkDOM(el, ctx, onOpen2, onClose2, onOfftext);
  return ctx.out;
};

// xml/tei.ts
var unhide = (ctx) => {
  ctx.hide ? ctx.hide-- : 0;
};
var onTextWithInserts = (el, ctx) => {
  if (ctx.inserts && ctx.inserts.length) {
    el = insertText(el, ctx.inserts);
  }
  return onOfftext(el, ctx);
};
var byline = (el, ctx) => {
  let s = "\n";
  const type = el.attrs["cb:type"];
  if (type) {
    ctx.compact = true;
    s += "^h<o=" + type.toLowerCase() + ">";
  }
  return s;
};
var onClose = {
  "cb:div": (el, ctx) => {
    ctx.div--;
  },
  "cb:tt": (el, ctx) => unhide(ctx),
  "cb:docNumber": (el, ctx) => unhide(ctx),
  "cb:mulu": (el, ctx) => {
    if (!ctx.started) return;
    unhide(ctx);
    if (ctx.mulu && ctx.started) {
      ctx.mulu = false;
      return '">';
    }
  },
  byline: (el, ctx) => "\n",
  note: (el, ctx) => unhide(ctx),
  // lem:(el,ctx)=>unhide(ctx),
  // l:(el,ctx)=>{ 
  //     if (ctx.snippet.substr(ctx.snippet.length-1)=='。') {
  //         ctx.compact=true;
  //         return '^r';    
  //     }
  // },
  lg: (el, ctx) => {
    return "\n";
  }
};
var corPrefix = (fn) => {
  const m4 = fn.match(/([A-Z]+)\d\d/);
  return m4 ? m4[1] : "";
};
var pb = (el, ctx) => {
  ctx.lbcount = 0;
  ctx.compact = true;
  let out2 = "", pn = el.attrs.n.replace(/^0+/, "");
  let voltag = "";
  ctx.vol = parseInt(el.attrs["xml:id"].substr(1, 2));
  if (el.attrs.n === "0001a") {
    ctx.compact = true;
    const ak = ctx.volumname[ctx.vol] ? "^ak" + ctx.vol + "\u3010" + ctx.volumname[ctx.vol] + "\u3011" : "";
    voltag = "^v" + ctx.vol + ak;
  }
  if (corPrefix(ctx.fn) === "N") {
    out2 = voltag + "^p" + pn.replace(/a$/, "");
    ctx.compact = true;
  } else if (corPrefix(ctx.fn) === "T" || corPrefix(ctx.fn) === "X") {
    ctx.pn = pn;
    if (voltag) out2 = voltag;
  }
  return out2;
};
var p2 = (el, ctx) => {
  if (ctx.prevpn == ctx.pn && ctx.prevlb == ctx.lbcount) {
    return "\n";
  }
  ctx.prevlb = ctx.lbcount;
  ctx.prevpn = ctx.pn;
  ctx.compact = true;
  return "\n^cb" + ctx.pn + ctx.lbcount;
};
var g = (el, ctx) => {
  if (ctx.hide) return "";
  const uni = ctx.charmap[el.attrs.ref.slice(1)];
  if (uni) {
    return uni;
  } else {
    ctx.compact = true;
    return "^mc" + el.attrs.ref.substr(3);
  }
};
var lb = (el, ctx) => {
  ctx.lbcount++;
  if (ctx.transclusion[ctx.fn] && el.attrs.type !== "old") {
    ctx.ptr = ctx.transclusion[ctx.fn][el.attrs.n];
  }
  const inserts = getInserts(ctx.milestones, ctx.vol + "p" + el.attrs.n);
  let out2 = "";
  if (inserts) {
    if (ctx.inserts && ctx.inserts.length) {
      console.log("unclear inserts", ctx.inserts);
    }
    ctx.inserts = null;
    inserts.forEach((ms) => {
      if (Array.isArray(ms)) {
        if (!ctx.inserts) ctx.inserts = [];
        ctx.inserts.push(ms);
      } else {
        ctx.compact = true;
        out2 += ms;
      }
    });
  }
  return out2;
};
var caesura = (el, ctx) => "\u3000";
var onOpen = {
  p: p2,
  pb,
  g,
  lb,
  caesura,
  byline,
  milestone: (el, ctx) => {
    ctx.started = true;
  },
  //skip the redundant mulu before milestone, see T30n1579_037
  note: (el, ctx) => {
    ctx.hide++;
    return "";
  },
  l: (el, ctx) => {
    ctx.compact = true;
    return "\n^gatha";
  },
  // lem:(el,ctx)=>{ ctx.hide+=1},//just keep the rdg
  quote: (el, ctx) => {
    if (ctx.ptr) {
      const ptr = ctx.ptr;
      ctx.ptr = "";
      return "^t@" + ptr;
    }
  },
  "cb:docNumber": (el, ctx) => {
    ctx.hide++;
  },
  // 經號 privided by from catalog.json
  "cb:mulu": (el, ctx) => {
    if (!ctx.started) return;
    const level = parseInt(el.attrs.level);
    if (level) {
      if (ctx.defs.mu && ctx.defs.mu.compact) {
        ctx.hide++;
        ctx.compact = true;
        return "^z" + toBase26(level - 1);
      } else {
        ctx.mulu = true;
        return "^z" + toBase26(level - 1) + '<t="';
      }
    }
  },
  "cb:div": (el, ctx) => {
    ctx.div++;
    return corPrefix(ctx.fn) === "Y" ? "\n" : "\n^h<o=" + el.attrs.type + ">";
  },
  "ref": (el, ctx) => {
    if (el.attrs.target && el.attrs.type) {
      const ty = el.attrs.type;
      if (ty === "taisho") {
        const m4 = el.attrs.target.match(/#vol:(\d+);page:p(\d+[abc])/);
        if (m4) {
          return "^q<loc=/cb-t/v#" + m4[1] + "/p#" + m4[2] + ">";
        }
      }
    }
  },
  t_rdg(el, ctx) {
    return "";
  }
  // deal with app inside cb:tt <app n="0002008">  t01n0001_001
  /*
  app:(el,ctx)=>{
      ctx.hide++;
      let s='';
      if (el.children[0].name==='lem' && el.children[1].name==='rdg') {
          let lem=el.children[0].innerText(true);
          let rdg=el.children[1].innerText(true);
          s='^ap[o='+lem+(rdg?' '+rdg:'') +']';
      }
      return s;
  }
  */
};

// xml/xmloff.ts
var peelXML = (content, ctx = {}) => {
  let offset = 0, txt = "", prevname = "", prevoffset = 0;
  const tree = DOMFromString(content);
  const tags = [];
  const elcount = {};
  const ele = ctx.ele || {};
  const nested = ctx.nested || [];
  const onOpen2 = {
    "*": function(el) {
      if (!el.name) return;
      if (!elcount[el.name]) elcount[el.name] = 0;
      let attrs = JSON.stringify(el.attrs);
      if (attrs == "{}") attrs = "";
      if (!ele[el.name]) ele[el.name] = { count: 0 };
      ele[el.name].count++;
      if (el.parent) {
        if (!ele[el.parent.name].child) ele[el.parent.name].child = {};
        if (!ele[el.parent.name].child[el.name]) ele[el.parent.name].child[el.name] = 0;
        ele[el.parent.name].child[el.name]++;
        if (el.parent.name == el.name) {
          nested.push([el.count, el.name, attrs, ctx.fn]);
        }
      }
      elcount[el.name]++;
      const count = elcount[el.name] ? elcount[el.name] : "";
      tags.push(["+", count, el.name, offset - prevoffset, attrs]);
      prevname = el.name;
      prevoffset = offset;
    }
  };
  const onClose2 = {
    "*": function(el) {
      if (!el.name) return;
      if (el.name == prevname && offset == prevoffset) {
        tags[tags.length - 1][0] = "";
      } else {
        const count = elcount[el.name] ? elcount[el.name] : "";
        tags.push(["-", count, el.name, offset - prevoffset]);
      }
      prevoffset = offset;
    }
  };
  const onText = (t) => {
    txt += t;
    offset += t.length;
  };
  walkDOM(tree, ctx, onOpen2, onClose2, onText);
  return [txt, tags, tree];
};

// xml/utils.ts
var parseXMLAttribute = (attrs) => {
  const arr = attrs.split(/([a-z\:\_]+=".+?")/).filter((it) => !!it.trim());
  const out2 = {};
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i].split(/=["＂]/);
    if (!value) {
      console.log("invalid attrs", arr[i], attrs);
    }
    ;
    out2[key] = value.slice(0, value.length - 1);
  }
  return out2;
};

// meta/cm.ts
var tounge = [
  { prefix: "l", caption: "\u2693", factors: ["\u5C16,\u908A", "\u4E2D", "\u6839"] },
  //location
  { prefix: "b", caption: "\u{1F505}", factors: ["\u6DE1", "\u6697,\u9EEF"] },
  //brightness*/
  { prefix: "c", caption: "\u{1F308}", factors: ["\u767D", "\u9EC3", "\u7D05,\u8D64", "\u7D2B,\u7D73", "\u9752", "\u9ED1,\u7070"] },
  //color
  { prefix: "t", caption: "\u{1F35E}", factors: ["\u8584,\u5C11", "\u539A,\u80D6,\u5AE9"] },
  //thickness
  { prefix: "o", caption: "\u{1F406}", factors: ["\u7D0B,\u88C2", "\u6591,\u75D5,\u5370", "\u523A", "\u7600"] },
  { prefix: "p", caption: "\u2618\uFE0F", factors: ["\u6E05,\u7121", "\u57A2", "\u81A9,\u9ECF", "\u525D,\u5149"] },
  //pattern
  { prefix: "h", caption: "\u{1F911}", factors: ["\u4E7E,\u71E5,\u7CD9,\u7126,\u5C11\u6D25,\u7121\u6D25", "\u6F64,\u6ED1,\u591A\u6D25,\u6709\u6D25,\u6D8E"] }
  // humidity
];
var pulse = [
  { prefix: "l", caption: "\u2693", factors: ["\u5BF8", "\u95DC", "\u5C3A"] },
  //location
  { prefix: "t", caption: "\u{1F476}", factors: ["\u7D30"] },
  //thickness
  { prefix: "g", caption: "\u{1F4AA}", factors: ["\u8EDF", "\u5F31,\u5FAE,\u7121\u529B", "\u6D2A,\u6709\u529B,\u5927", "\u5BE6,\u5805", "\u865B"] },
  //strength
  { prefix: "q", caption: "\u{1F422}", factors: ["\u6025,\u75BE,\u4FC3", "\u6578,\u983B", "\u7DE9", "\u9072"] },
  //frequency
  { prefix: "p", caption: "\u{1F418}", factors: ["\u6D6E", "\u6C89,\u4F0F", "\u6309"] },
  //pressure
  { prefix: "s", caption: "\u{1F3BF}", factors: ["\u6ED1", "\u6F80,\u6F81"] },
  //smoothness
  { prefix: "w", caption: "\u{1F30A}", factors: ["\u5F26", "\u7DCA", "\u7D50,\u7D50\u4EE3", "\u6FE1"] }
  //waveform
];
var symtom = [
  { prefix: "a", caption: "\u{1F9CD}", factors: ["\u80A9", "\u9838,\u9805", "\u7662", "\u9EBB"] },
  { prefix: "b", caption: "\u{1F9D1}", factors: ["\u982D\u75DB", "\u982D\u6688", "\u982D\u91CD", "\u982D\u8139"] },
  { prefix: "c", caption: "\u{1F610}", factors: ["\u767D", "\u9EC3"], include: "\u9762,\u81C9" },
  { prefix: "d", caption: "\u{1F9B5}", factors: ["\u51B7", "\u62BD\u6410", "\u986B,\u6296"], inluce: "\u624B,\u8DB3,\u80A2" },
  { prefix: "g", caption: "\u{1F930}", factors: ["\u8179\u75DB,\u8179\u75BC", "\u8179\u8139", "\u80F8\u60B6"] },
  { prefix: "h", caption: "\u{1F42A}", factors: ["\u8170\u9178,\u8170\u75E0", "\u8170\u75DB", "\u80CC\u75DB"] },
  { prefix: "e", caption: "\u2744\uFE0F", factors: ["\u5BD2,\u754F\u5BD2,\u60E1\u5BD2", "\u60E1\u98A8"] },
  { prefix: "f", caption: "\u2668\uFE0F", factors: ["\u767C\u71B1,\u58EF\u71B1", "\u5C11\u71B1", "\u5BD2\u71B1"] },
  { prefix: "i", caption: "\u{1F4A6}", factors: ["\u81EA\u6C57", "\u76DC\u6C57", "\u7121\u6C57"] },
  { prefix: "j", caption: "\u{1F440}", factors: ["\u754F\u5149,\u7F9E\u660E", "\u816B", "\u8D64,\u7D05", "\u6DDA", "\u4E0D\u6E05,\u7CCA"], include: "\u773C,\u76EE,\u8996" },
  { prefix: "k", caption: "\u{1F442}", factors: ["\u8033\u9CF4", "\u807E"] },
  { prefix: "l", caption: "\u{1F443}", factors: ["\u9F3B\u585E", "\u5598,\u54EE", "\u6D95", "\u9F3B\u8840,\u8842"] },
  { prefix: "m", caption: "\u{1F444}", factors: ["\u6E34,\u4E7E", "\u5614,\u5443", "\u53E3\u81ED", "\u53E3\u6DE1", "\u53E3\u82E6", "\u54B3\u8840"] },
  { prefix: "n", caption: "\u{1F4AC}", factors: ["\u54B3\u55FD", "\u75F0", "\u54BD\u75DB", "\u8B6B,\u8A9E"] },
  { prefix: "o", caption: "\u{1F9B7}", factors: ["\u9F66,\u7259\u5BA3", "\u7259\u75DB", "\u86C0"] },
  { prefix: "p", caption: "\u{1F494}", factors: ["\u60B8,\u75F5,\u6014,\u5FE1", "\u7D5E\u75DB"] },
  { prefix: "q", caption: "\u{1F61E}", factors: ["\u7169,\u8E81,\u4EA2", "\u6012,\u72C2", "\u9B30,\u4E0D\u6A02", "\u75B2,\u5026,\u6020,\u61F6,\u60F0"] },
  { prefix: "r", caption: "\u{1F6CC}", factors: ["\u5931\u7720,\u4E0D\u5BD0", "\u6613\u9192,\u6DFA\u7720", "\u591A\u5922"] },
  { prefix: "s", caption: "\u{1F4A9}", factors: ["\u4FBF\u79D8,\u79D8\u7D50,\u4FBF\u7D50", "\u4FBF\u6E8F,\u6E8F,\u62C9\u7A00", "\u4FBF\u8840,\u4E0B\u8840", "\u809B", "\u75D4"] },
  { prefix: "t", caption: "\u{1F6BD}", factors: ["\u4E0D\u901A,\u4E0D\u5229", "\u6FC1", "\u6E05\u9577", "\u591A\u5C3F,\u983B\u6578", "\u5931\u7981,\u591C\u5C3F", "\u8840\u5C3F,\u5C3F\u8840"] }
];
var expandFactor = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (~arr[i].indexOf(",")) {
      arr[i] = arr[i].split(",");
    }
  }
};
var splitFactors = (allFactors) => {
  for (let i = 0; i < allFactors.length; i++) {
    expandFactor(allFactors[i].factors);
    if (typeof allFactors[i].include == "string") {
      allFactors[i].include = allFactors[i].include.split(",");
    }
  }
};
splitFactors(tounge);
splitFactors(pulse);
splitFactors(symtom);
var SickFactors = { tounge, pulse, symtom };
var SickCauses = {
  //病因
  l01: "\u98A8\u5BD2",
  l02: "\u98A8\u71B1",
  l03: "\u98A8\u71E5",
  l04: "\u865B\u98A8",
  l05: "\u9670\u5BD2",
  l06: "\u5BD2\u71B1",
  l07: "\u865B\u5BD2",
  l08: "\u98A8\u6691",
  l09: "\u6691\u6FD5",
  l10: "\u98A8\u6FD5",
  l11: "\u5BD2\u6FD5",
  l12: "\u6FD5\u71B1",
  l13: "\u71E5\u706B",
  l14: "\u6EAB\u71E5",
  l15: "\u71E5\u71B1",
  l16: "\u71E5\u6FD5",
  l17: "\u865B\u71E5",
  l18: "\u98A8\u706B",
  l19: "\u5BD2\u706B",
  l20: "\u6FD5\u706B",
  l21: "\u71E5\u706B",
  l22: "\u9B30\u706B",
  l23: "\u865B\u706B",
  l24: "\u6C23\u9B30",
  l25: "\u6C23\u7600",
  l26: "\u6C23\u75F0",
  l27: "\u6C23\u706B",
  l28: "\u5BD2\u7600",
  l29: "\u7600\u71B1",
  l30: "\u75F0\u7600",
  l31: "\u75F0\u6FD5",
  l32: "\u71B1\u75F0",
  l33: "\u75F0\u706B",
  l34: "\u98A8\u75F0",
  l35: "\u865B\u75F0",
  l36: "\u6C34\u98F2",
  l37: "\u5BD2\u98F2",
  l38: "\u98F2\u71B1",
  l39: "\u98DF\u6EEF",
  l40: "\u7A4D\u71B1",
  l41: "\u87F2\u7A4D",
  l42: "\u6C23\u865B",
  l43: "\u8840\u865B",
  l44: "\u9670\u865B",
  l45: "\u967D\u865B"
};
var SickLocations = {
  //病位
  z01: "\u80BA\u885B",
  z02: "\u80BA\u813E",
  z03: "\u5FC3\u80BA",
  z04: "\u809D\u80BA",
  z05: "\u80BA\u814E",
  z06: "\u5FC3\u71DF",
  z07: "\u5FC3\u80C3",
  z08: "\u5FC3\u813E",
  z09: "\u5FC3\u81BD",
  z10: "\u5FC3\u809D",
  z11: "\u5FC3\u814E",
  z12: "\u80BA\u80C3",
  z13: "\u813E\u80C3",
  z14: "\u80C3\u8178",
  z15: "\u81BD\u80C3",
  z16: "\u809D\u80C3",
  z17: "\u814E\u80C3",
  z18: "\u809D\u813E",
  z19: "\u813E\u814E",
  z20: "\u809D\u81BD",
  z21: "\u809D\u814E"
};
var SickSigns = {
  //病候
  h001: "\u885B\u6C23\u5931\u5BA3",
  h002: "\u885B\u6C23\u9B30\u84B8",
  h003: "\u885B\u6C23\u4E0D\u632F",
  h004: "\u885B\u6C23\u865B\u9B30",
  h005: "\u885B\u967D\u5931\u5BA3",
  h006: "\u885B\u967D\u602B\u9B30",
  h007: "\u885B\u967D\u9B30\u9589",
  h008: "\u885B\u967D\u9B30\u84B8",
  h009: "\u885B\u967D\u4E0D\u632F",
  h010: "\u885B\u967D\u865B\u9B30",
  h011: "\u885B\u967D\u4E0D\u56FA",
  h012: "\u71DF\u885B\u9B30\u6EEF",
  h013: "\u71DF\u885B\u9B30\u84B8",
  h014: "\u71DF\u885B\u9B30\u71BE",
  h015: "\u71DF\u885B\u865B\u5F31",
  h016: "\u71DF\u885B\u865B\u9B30",
  h017: "\u71DF\u885B\u5931\u8ABF",
  h018: "\u71DF\u885B\u4E0D\u884C",
  h019: "\u71DF\u6C23\u5931\u5BA3",
  h020: "\u71DF\u6C23\u9B30\u84B8",
  h021: "\u6C23\u71DF\u860A\u84B8",
  h022: "\u6C23\u71DF\u84B8\u707C",
  h023: "\u6C23\u71DF\u860A\u9589",
  h024: "\u71DF\u8840\u5931\u5BA3",
  h025: "\u71DF\u8840\u9B30\u84B8",
  h026: "\u71DF\u8840\u9B30\u9589",
  h027: "\u71DF\u8840\u84B8\u707C",
  h028: "\u71DF\u8840\u860A\u9589",
  h029: "\u71DF\u8840\u5931\u990A",
  h030: "\u71DF\u6DB2\u84B8\u707C",
  h031: "\u71DF\u9670\u6D88\u707C",
  h032: "\u71DF\u9670\u5931\u990A",
  h033: "\u6E05\u6C23\u5931\u5BA3",
  h034: "\u6E05\u6C23\u9B30\u904F",
  h035: "\u6E05\u6C23\u9B30\u84B8",
  h036: "\u6E05\u6C23\u9B30\u71BE",
  h037: "\u6E05\u6C23\u9B30\u9589",
  h038: "\u6E05\u6C23\u9B30\u9677",
  h039: "\u6E05\u6C23\u602B\u9B30",
  h040: "\u6E05\u6C23\u860A\u84B8",
  h041: "\u6E05\u6C23\u860A\u71BE",
  h042: "\u6E05\u6C23\u5931\u5BE7",
  h043: "\u6E05\u6C23\u9B30\u6EEF",
  h044: "\u6E05\u6C23\u4E0D\u5316",
  h045: "\u6E05\u6C23\u9B30\u9006",
  h046: "\u6E05\u6C23\u9006\u4E82",
  h047: "\u6E05\u6C23\u9B30\u7D50",
  h048: "\u6E05\u6C23\u9589\u53A5",
  h049: "\u6E05\u6C23\u865B\u9B30",
  h050: "\u6E05\u6C23\u865B\u6EEF",
  h051: "\u6E05\u6C23\u53A5\u819A",
  h052: "\u6E05\u6C23\u865B\u84B8",
  h053: "\u6E05\u6C23\u865B\u9677",
  h054: "\u6E05\u6C23\u4E0D\u5347",
  h055: "\u6E05\u6C23\u4E0B\u9677",
  h056: "\u6E05\u967D\u5931\u5BA3",
  h057: "\u6E05\u967D\u9B30\u904F",
  h058: "\u6E05\u967D\u9B30\u6EEF",
  h059: "\u6E05\u967D\u602B\u9B30",
  h060: "\u6E05\u967D\u9B30\u84B8",
  h061: "\u6E05\u967D\u9B30\u71BE",
  h062: "\u6E05\u967D\u9B30\u9589",
  h063: "\u6E05\u967D\u9B30\u7D50",
  h064: "\u6E05\u967D\u9B30\u9006",
  h065: "\u6E05\u967D\u9006\u4E82",
  h066: "\u6E05\u967D\u9B30\u9677",
  h067: "\u6E05\u967D\u9B30\u75F9",
  h068: "\u6E05\u967D\u4E0D\u884C",
  h069: "\u6E05\u967D\u4E0D\u5316",
  h070: "\u6E05\u967D\u5931\u4F4D",
  h071: "\u6E05\u967D\u8499\u9589",
  h072: "\u6E05\u967D\u9589\u53A5",
  h073: "\u6E05\u967D\u865B\u9B30",
  h074: "\u6E05\u967D\u865B\u9677",
  h075: "\u6E05\u967D\u865B\u9589",
  h076: "\u6E05\u967D\u5931\u8ABF",
  h077: "\u6E05\u967D\u865B\u6EEF",
  h078: "\u6E05\u967D\u865B\u7D50",
  h079: "\u6E05\u967D\u865B\u71BE",
  h080: "\u6E05\u967D\u4E0D\u5347",
  h081: "\u6E05\u967D\u4E0B\u9677",
  h082: "\u6A1E\u6A5F\u9B30\u904F",
  h083: "\u6A1E\u6A5F\u9B30\u6EEF",
  h084: "\u6A1E\u6A5F\u9B30\u84B8",
  h085: "\u6A1E\u6A5F\u9B30\u71BE",
  h086: "\u6A1E\u6A5F\u9B30\u7D50",
  h087: "\u6A1E\u6A5F\u865B\u84B8",
  h088: "\u6A1E\u6A5F\u865B\u9B30",
  h089: "\u6D25\u6C23\u4E0D\u5316",
  h090: "\u6D25\u6C23\u9B30\u6EEF",
  h091: "\u6D25\u6C23\u9B30\u7D50",
  h092: "\u6C23\u865B\u4E0D\u5316",
  h093: "\u6D25\u6C23\u9B30\u84B8",
  h094: "\u6D25\u6C23\u9B30\u71BE",
  h095: "\u6D25\u6C23\u860A\u84B8",
  h096: "\u6D25\u6C23\u84B8\u707C",
  h097: "\u6D25\u6C23\u84B8\u9589",
  h098: "\u6D25\u6C23\u860A\u9589",
  h099: "\u6D25\u6C23\u84B8\u71BE",
  h100: "\u6D25\u6C23\u71E5\u7D50",
  h101: "\u6D25\u6C23\u714E\u8FEB",
  h102: "\u6D25\u6C23\u71BE\u9006",
  h103: "\u6D25\u6C23\u9677\u9589",
  h104: "\u6D25\u6C23\u71BE\u9589",
  h105: "\u6D25\u6C23\u9589\u53A5",
  h106: "\u6D25\u6C23\u865B\u707C",
  h107: "\u6D25\u6C23\u865B\u9589",
  h108: "\u6D25\u6C23\u9589\u812B",
  h109: "\u6D25\u6C23\u4E0D\u5E03",
  h110: "\u6D25\u6C23\u4E0D\u56FA",
  h111: "\u6C23\u6DB2\u6D88\u707C",
  h112: "\u6C23\u6DB2\u6D88\u6DB8",
  h113: "\u6C23\u6DB2\u812B\u7D55",
  h114: "\u6DB2\u7AED\u967D\u812B",
  h115: "\u6C23\u6DB2\u9B30\u84B8",
  h116: "\u6DB2\u7AED\u967D\u9B30",
  h117: "\u6C23\u6DB2\u9B30\u6EEF",
  h118: "\u6C23\u6DB2\u714E\u8FEB",
  h119: "\u6C23\u6DB2\u9589\u53A5",
  h120: "\u6C23\u6DB2\u865B\u9B30",
  h121: "\u6C23\u6DB2\u865B\u9006",
  h122: "\u6C23\u6DB2\u865B\u6EEF",
  h123: "\u6C23\u6DB2\u4E0D\u5316",
  h124: "\u6C23\u6DB2\u865B\u71E5",
  h125: "\u6C23\u6DB2\u865B\u9589",
  h126: "\u6C23\u6DB2\u4E0D\u56FA",
  h127: "\u6C23\u8840\u9B30\u6EEF",
  h128: "\u6C23\u8840\u9B30\u904F",
  h129: "\u6C23\u8840\u602B\u9B30",
  h130: "\u6C23\u8840\u9B30\u9006",
  h131: "\u6C23\u8840\u9B30\u7D50",
  h132: "\u6C23\u8840\u9B30\u84B8",
  h133: "\u6C23\u8840\u9B30\u71BE",
  h134: "\u6C23\u8840\u860A\u84B8",
  h135: "\u6C23\u8840\u860A\u71BE",
  h136: "\u6C23\u8840\u5169\u71D4",
  h137: "\u6C23\u8840\u84B8\u71BE",
  h138: "\u6C23\u8840\u71E5\u7D50",
  h139: "\u6C23\u8840\u714E\u8FEB",
  h140: "\u6C23\u8840\u71BE\u9589",
  h141: "\u6C23\u8840\u9589\u812B",
  h142: "\u6C23\u8840\u5931\u990A",
  h143: "\u6C23\u8840\u5931\u8ABF",
  h144: "\u6C23\u8840\u865B\u7D50",
  h145: "\u6C23\u8840\u865B\u9B30",
  h146: "\u6C23\u8840\u865B\u84B8",
  h147: "\u6C23\u8840\u865B\u71BE",
  h148: "\u6C23\u865B\u5931\u651D",
  h149: "\u8840\u865B\u967D\u6D6E",
  h150: "\u6C23\u8840\u53A5\u812B",
  h151: "\u6C23\u8840\u812B\u7D55",
  h152: "\u6C23\u9670\u9B30\u84B8",
  h153: "\u6C23\u9670\u860A\u84B8",
  h154: "\u6C23\u9670\u6D88\u707C",
  h155: "\u6C23\u9670\u5169\u865B",
  h156: "\u6C23\u9670\u865B\u9B30",
  h157: "\u6C23\u9670\u865B\u6EEF",
  h158: "\u6C23\u9670\u4E0D\u5316",
  h159: "\u6C23\u9670\u865B\u71E5",
  h160: "\u6C23\u9670\u865B\u84B8",
  h161: "\u6C23\u9670\u4E0D\u651D",
  h162: "\u6C23\u9670\u4E0D\u56FA",
  h163: "\u6C23\u9670\u9589\u812B",
  h164: "\u6C23\u9670\u7AED\u7D55",
  h165: "\u967D\u6C23\u4EA2\u9006",
  h166: "\u967D\u6C23\u53A5\u9006",
  h167: "\u967D\u9B30\u4E0D\u5316",
  h168: "\u967D\u6EEF\u4E0D\u5316",
  h169: "\u967D\u865B\u4E0D\u5316",
  h170: "\u967D\u6C23\u865B\u6EEF",
  h171: "\u967D\u6C23\u865B\u7D50",
  h172: "\u967D\u6C23\u865B\u9B30",
  h173: "\u967D\u6C23\u865B\u71BE",
  h174: "\u967D\u6C23\u865B\u9006",
  h175: "\u967D\u865B\u5931\u7D0D",
  h176: "\u967D\u865B\u5931\u56FA",
  h177: "\u967D\u865B\u5931\u651D",
  h178: "\u967D\u6C23\u865B\u640D",
  h179: "\u967D\u640D\u53CA\u9670",
  h180: "\u967D\u6C23\u9589\u812B",
  h181: "\u967D\u6C23\u53A5\u812B",
  h182: "\u865B\u967D\u6D6E\u8D8A",
  h183: "\u967D\u6C23\u865B\u812B",
  h184: "\u8840\u6DB2\u9B30\u7D50",
  h185: "\u8840\u6DB2\u860A\u84B8",
  h186: "\u8840\u6DB2\u9B30\u84B8",
  h187: "\u8840\u6DB2\u71D4\u707C",
  h188: "\u8840\u6DB2\u9589\u53A5",
  h189: "\u8840\u6DB2\u9589\u812B",
  h190: "\u8840\u6DB2\u9B30\u6EEF",
  h191: "\u8840\u6DB2\u865B\u71E5",
  h192: "\u8840\u6DB2\u6D88\u707C",
  h193: "\u8840\u6DB2\u6D88\u6DB8",
  h194: "\u9670\u8840\u860A\u71BE",
  h195: "\u9670\u8840\u714E\u8FEB",
  h196: "\u9670\u8840\u9589\u53A5",
  h197: "\u9670\u8840\u9589\u812B",
  h198: "\u9670\u8840\u5931\u990A",
  h199: "\u9670\u8840\u865B\u9B30",
  h200: "\u9670\u8840\u865B\u6EEF",
  h201: "\u9670\u8840\u865B\u84B8",
  h202: "\u9670\u8840\u6D88\u707C",
  h203: "\u9670\u8840\u865B\u71E5",
  h204: "\u9670\u8840\u865B\u640D",
  h205: "\u9670\u67AF\u706B\u71BE",
  h206: "\u9670\u6DB2\u714E\u8FEB",
  h207: "\u9670\u6DB2\u865B\u71E5",
  h208: "\u9670\u6DB2\u9589\u53A5",
  h209: "\u9670\u6DB2\u53A5\u812B",
  h210: "\u9670\u6DB2\u6D88\u707C",
  h211: "\u9670\u6DB2\u67AF\u6DB8",
  h212: "\u9670\u865B\u967D\u6D6E",
  h213: "\u9670\u7AED\u967D\u53A5",
  h214: "\u9670\u7AED\u967D\u8D8A",
  h215: "\u9670\u7AED\u967D\u812B",
  h216: "\u9670\u865B\u5931\u990A",
  h217: "\u9670\u865B\u967D\u5F31",
  h218: "\u9670\u865B\u967D\u9B30",
  h219: "\u9670\u865B\u4E0D\u5316",
  h220: "\u9670\u865B\u5931\u7D0D",
  h221: "\u9670\u865B\u5931\u651D",
  h222: "\u9670\u865B\u4E0D\u56FA",
  h223: "\u9670\u7CBE\u4E0D\u56FA",
  h224: "\u771F\u9670\u865B\u640D",
  h225: "\u9670\u640D\u53CA\u967D",
  h226: "\u80BA\u6C23\u5931\u5BA3",
  h227: "\u80BA\u5931\u5BA3\u964D",
  h228: "\u80BA\u6C23\u9B30\u9589",
  h229: "\u80BA\u6C23\u9B30\u75F9",
  h230: "\u80BA\u6C23\u5931\u5145",
  h231: "\u80BA\u967D\u5931\u5BA3",
  h232: "\u80BA\u967D\u4E0D\u5E03",
  h233: "\u80BA\u7D61\u5931\u5BA3",
  h234: "\u80BA\u5931\u6E05\u8085",
  h235: "\u80BA\u9670\u5931\u990A",
  h236: "\u5FC3\u795E\u5931\u5BE7",
  h237: "\u5FC3\u6C23\u4E0D\u632F",
  h238: "\u5FC3\u967D\u4EA2\u76DB",
  h239: "\u5FC3\u967D\u5931\u5BA3",
  h240: "\u5FC3\u967D\u9589\u585E",
  h241: "\u5FC3\u967D\u4E0D\u632F",
  h242: "\u5FC3\u7D61\u5931\u5BA3",
  h243: "\u5FC3\u8840\u5931\u990A",
  h244: "\u5FC3\u9670\u5931\u990A",
  h245: "\u5FC3\u9670\u865B\u6EEF",
  h246: "\u80C3\u6C23\u4E0D\u9192",
  h247: "\u80C3\u6C23\u5931\u548C",
  h248: "\u80C3\u5931\u548C\u964D",
  h249: "\u80C3\u6C23\u9B30\u7D50",
  h250: "\u80C3\u6C23\u4E0D\u632F",
  h251: "\u80C3\u967D\u5931\u548C",
  h252: "\u80C3\u967D\u865B\u9006",
  h253: "\u80C3\u967D\u4E0D\u632F",
  h254: "\u80C3\u7D61\u5931\u548C",
  h255: "\u80C3\u9670\u6D88\u6DB8",
  h256: "\u813E\u6C23\u5931\u904B",
  h257: "\u813E\u80C3\u9B30\u6EEF",
  h258: "\u4E2D\u6C23\u9B30\u7D50",
  h259: "\u4E2D\u6C23\u7A92\u9589",
  h260: "\u813E\u6C23\u4E0D\u5065",
  h261: "\u813E\u6C23\u865B\u6EEF",
  h262: "\u813E\u6C23\u865B\u7D50",
  h263: "\u813E\u80C3\u4E0D\u548C",
  h264: "\u813E\u967D\u5931\u904B",
  h265: "\u813E\u967D\u9B30\u9589",
  h266: "\u813E\u967D\u9B30\u7D50",
  h267: "\u4E2D\u967D\u9B30\u6EEF",
  h268: "\u4E2D\u967D\u9589\u585E",
  h269: "\u4E2D\u967D\u4E0D\u548C",
  h270: "\u813E\u967D\u865B\u6EEF",
  h271: "\u813E\u967D\u4E0D\u632F",
  h272: "\u813E\u9670\u6D88\u6DB8",
  h273: "\u81BD\u6C23\u9B30\u6EEF",
  h274: "\u81BD\u6C23\u9B30\u7D50",
  h275: "\u81BD\u6C23\u4E0D\u632F",
  h276: "\u6728\u706B\u9B30\u904F",
  h277: "\u6728\u706B\u9B30\u6EEF",
  h278: "\u6728\u706B\u9B30\u9589",
  h279: "\u6728\u706B\u9B30\u9006",
  h280: "\u6728\u706B\u9B30\u84B8",
  h281: "\u6728\u706B\u9B30\u71BE",
  h282: "\u6728\u706B\u860A\u71BE",
  h283: "\u6728\u706B\u5347\u9006",
  h284: "\u6728\u706B\u71BE\u9006",
  h285: "\u6728\u706B\u860A\u9589",
  h286: "\u6728\u706B\u9589\u53A5",
  h287: "\u6728\u706B\u865B\u84B8",
  h288: "\u6728\u706B\u865B\u71BE",
  h289: "\u6728\u706B\u865B\u9006",
  h290: "\u809D\u6C23\u5931\u758F",
  h291: "\u809D\u6C23\u9B30\u7D50",
  h292: "\u809D\u6C23\u6A6B\u9006",
  h293: "\u809D\u6C23\u4E0D\u632F",
  h294: "\u809D\u6C23\u5931\u8ABF",
  h295: "\u809D\u967D\u4EA2\u76DB",
  h296: "\u809D\u967D\u5931\u5BA3",
  h297: "\u809D\u967D\u9589\u585E",
  h298: "\u809D\u967D\u5931\u548C",
  h299: "\u809D\u967D\u4E0D\u632F",
  h300: "\u809D\u7D61\u5931\u5BA3",
  h301: "\u809D\u7D61\u5931\u548C",
  h302: "\u809D\u8840\u5931\u990A",
  h303: "\u809D\u9670\u865B\u6EEF",
  h304: "\u809D\u9670\u5931\u990A",
  h305: "\u814E\u6C23\u5931\u5BA3",
  h306: "\u814E\u6C23\u9B30\u7D50",
  h307: "\u814E\u6C23\u4E0D\u5145",
  h308: "\u814E\u967D\u5931\u5BA3",
  h309: "\u814E\u967D\u9589\u585E",
  h310: "\u814E\u967D\u4E0D\u632F",
  h311: "\u814E\u967D\u4E0D\u5316",
  h312: "\u814E\u967D\u865B\u7D50",
  h313: "\u814E\u967D\u865B\u9006",
  h314: "\u814E\u7D61\u5931\u5BA3",
  h315: "\u814E\u9670\u6D88\u707C",
  h316: "\u814E\u9670\u865B\u71BE",
  h317: "\u814E\u9670\u865B\u6EEF",
  h318: "\u814E\u9670\u5931\u990A",
  h319: "\u541B\u76F8\u5931\u5BE7",
  h320: "\u5FC3\u814E\u4E0D\u4EA4",
  h321: "\u9F8D\u96F7\u4E0D\u85CF",
  h322: "\u706B\u4E0D\u6B78\u5143"
};
var hasOneOf = (text, include) => {
  for (let i = 0; i < include.length; i++) {
    if (!text.indexOf(include[i])) return true;
  }
};
var encodeFactor = (text, keyfactors) => {
  const traits = [];
  for (let type in keyfactors) {
    const key = keyfactors[type].prefix;
    const factors = keyfactors[type].factors;
    const include = keyfactors[type].include;
    for (let j2 = 0; j2 < factors.length; j2++) {
      const factor = factors[j2];
      if (typeof factor == "string") {
        if (~text.indexOf(factor)) {
          if (include?.length && !hasOneOf(text, include)) continue;
          if (!~traits.indexOf(key + j2)) {
            traits.push(key + j2);
          }
        }
      } else {
        for (let k = 0; k < factors[j2].length; k++) {
          const factor2 = factors[j2][k];
          if (~text.indexOf(factor2)) {
            if (!~traits.indexOf(key + j2)) traits.push(key + j2);
          }
        }
      }
    }
  }
  return traits.sort(alphabetically);
};
var encodeFactors = (words, fieldname) => {
  let out2 = "";
  const factors = SickFactors[fieldname];
  for (let i = 0; i < words.length; i++) {
    const w2 = words[i];
    const traits = encodeFactor(w2, factors);
    if (traits.length) out2 += traits.join("");
  }
  const arr = unique(out2.split(/([a-z]\d+)/).sort(alphabetically).filter((it) => !!it));
  return arr;
};
var onLineText = (t, line) => {
  if (~t.indexOf("^ck")) {
    return t.replace(/\^ck(\d+)z(\d+)h(\d+)/, (m4, l, z, h) => {
      const caption2 = onChunkCaption(l + "z" + z + "h" + h);
      const [sick, sign] = caption2.split("|");
      return m4 + " ^sick\u3010" + sick + "\u3011^sign" + h + "\u3010" + sign + "\u3011";
    });
  }
  return t;
};
var parseChunkId = (chunkid) => {
  const l = chunkid.slice(0, 2);
  const z = chunkid.slice(3, 5);
  const h = chunkid.slice(6);
  return { l, z, h };
};
var onChunkCaption = (chunkid, part) => {
  const { l, z, h } = parseChunkId(chunkid);
  if (isNaN(parseInt(z)) || isNaN(parseInt(z)) || isNaN(parseInt(h))) {
    return "";
  }
  const part1 = SickCauses["l" + l] + SickLocations["z" + z] + "\u8B49";
  const part2 = SickSigns["h" + h] + "\u5019";
  if (part == 1) return part1;
  if (part == 2) return part2;
  return part1 + "|" + part2;
};
var findPrefix = (Factors, prefix) => {
  for (let i = 0; i < Factors.length; i++) {
    if (Factors[i].prefix == prefix) return Factors[i].factors;
  }
  return [];
};
var decodeFactor = (field, code) => {
  const [m0, prefix, n] = code.split(/([a-z])(\d+)/);
  const factors = findPrefix(SickFactors[field], prefix);
  let caption2 = factors[n];
  if (typeof caption2 !== "string") caption2 = caption2[0];
  return caption2;
};
var makeButtonStates = (Factors) => {
  const out2 = [];
  for (let i = 0; i < Factors.length; i++) {
    const states = [];
    const { caption: caption2, factors, prefix } = Factors[i];
    for (let j2 = 0; j2 < factors.length; j2++) {
      if (typeof factors[j2] !== "string") {
        states[factors[j2][0]] = prefix + j2;
      } else states[factors[j2]] = prefix + j2;
    }
    out2.push({ caption: caption2, states, prefix });
  }
  return out2;
};
var icons = { symtom: "\u26A0\uFE0F", tounge: "\u{1F445}", pulse: "\u270B\u{1F3FB}" };
var getMultiStateFilters = () => {
  return [
    { name: "symtom", caption: icons.symtom, states: makeButtonStates(symtom), newline: true },
    { name: "tounge", caption: icons.tounge, states: makeButtonStates(tounge) },
    { name: "pulse", caption: icons.pulse, states: makeButtonStates(pulse) }
  ];
};
var stringifyChoice = (choices, groupby = 0, groupfilter = "") => {
  let symtom2 = "", tounge2 = "", pulse2 = "";
  for (let key in choices) {
    if (key == "symtom") symtom2 = choices[key].join("");
    if (key == "tounge") tounge2 = choices[key].join("");
    if (key == "pulse") pulse2 = choices[key].join("");
  }
  return symtom2 + "_" + tounge2 + "_" + pulse2 + "_" + groupby + "_" + groupfilter;
};
var humanChoice = (choices) => {
  if (typeof choices == "string") [choices] = parseChoice(choices);
  let out2 = "";
  for (let field in choices) {
    if (choices[field].length) {
      out2 += icons[field];
      for (let i = 0; i < choices[field].length; i++) {
        out2 += " " + decodeFactor(field, choices[field][i]);
      }
    }
  }
  return out2;
};
var parseChoice = (str) => {
  const [_symtom, _tounge, _pulse, _groupby, _groupfilter] = str.split("_");
  const symtom2 = (_symtom || "").split(/([a-z]\d+)/).filter((it) => !!it) || [];
  const tounge2 = (_tounge || "").split(/([a-z]\d+)/).filter((it) => !!it) || [];
  const pulse2 = (_pulse || "").split(/([a-z]\d+)/).filter((it) => !!it) || [];
  const groupby = parseInt(_groupby) || 0;
  const groupfilter = _groupfilter;
  return [{ symtom: symtom2, tounge: tounge2, pulse: pulse2 }, groupby, groupfilter];
};
var factorString = (code, groupby) => {
  if (groupby == 1) {
    return SickLocations["z" + code];
  } else if (groupby == 2) {
    return SickCauses["l" + code];
  } else if (groupby == 3) {
    const [m0, z, l] = code.match(/(\d+)z(\d+)/);
    return SickLocations["z" + z] + SickCauses["l" + l];
  } else if (groupby == 4) {
    return SickSigns["h" + code];
  }
  return "";
};
var groupBy = (items, chunks, groupby = 1, groupfilter = "") => {
  const obj = {};
  for (let i = 0; i < items.length; i++) {
    const ck = chunks[i];
    const { l, z, h } = parseChunkId(ck.id);
    let gkey = "";
    if (groupby == 1) gkey = z;
    else if (groupby == 2) gkey = l;
    else if (groupby == 3) gkey = l + "z" + z;
    else if (groupby == 4) gkey = h;
    if (!obj[gkey]) obj[gkey] = 0;
    obj[gkey]++;
  }
  return fromObj(obj, (code, count) => [factorString(code, groupby), count, code]).sort((a, b) => b[1] - a[1]);
};
var matchGroup = (ck, groupby, groupfilter) => {
  if (groupby && groupfilter) {
    if (groupby == 1) {
      return ~ck.id.indexOf("z" + groupfilter);
    } else if (groupby == 2) {
      return ck.id.indexOf(groupfilter) == 0;
    } else if (groupby == 3) {
      return ~ck.id.indexOf(groupfilter);
    } else if (groupby == 4) {
      return ~ck.id.indexOf("h" + groupfilter);
    }
  }
  return true;
};
var runFilter = (ptk, col, opts = {}) => {
  const items = [], chunks = [];
  const choices = opts.choices;
  const groupby = opts.groupby;
  const groupfilter = opts.groupfilter;
  const tag = ptk.defines[col.attrs.master];
  let choicecount = 0;
  for (let field in choices) {
    choicecount += choices[field].length;
  }
  for (let i = 0; i < tag.linepos.length; i++) {
    let hit = 0;
    for (let field in choices) {
      if (choices[field].length == 0) continue;
      for (let j2 = 0; j2 < choices[field].length; j2++) {
        const key = choices[field][j2];
        if (typeof col[field][i] == "undefined") {
          console.log("wrong field", field, "iindex", i);
        } else {
          if (~col[field][i].indexOf(key)) hit++;
        }
      }
      if (hit * 1.1 < choicecount) continue;
      const line = tag.linepos[i];
      const ck = ptk.nearestChunk(line);
      if (groupby == 0 && groupfilter) {
        if (tag.innertext?.get(i) !== groupfilter) continue;
      } else {
        if (!matchGroup(ck, groupby, groupfilter)) continue;
      }
      items.push(i);
      chunks.push(ck);
    }
  }
  let groups = [], grouping = {};
  if (groupby) {
    groups = groupBy(items, chunks, groupby, groupfilter);
  } else {
    for (let i = 0; i < items.length; i++) {
      const t = tag.innertext?.get(items[i]);
      if (!grouping[t]) grouping[t] = 0;
      grouping[t]++;
    }
    groups = fromObj(grouping, (text, count) => [text, count, text]);
    groups.sort((a, b) => b[1] - a[1]);
  }
  return { items, groups, mastertag: tag };
};
var groupStates = (format) => {
  if (format == "statebutton") {
    return {};
  } else {
    return [];
  }
  if (format == "statebutton") {
    return { "\u540D": 0, "\u4F4D": 1, "\u56E0": 2, "\u8B49": 3, "\u5019": 4 };
  } else {
    return ["\u540D", "\u4F4D", "\u56E0", "\u8B49", "\u5019"];
  }
};
var factorSimilarity = (factors, str) => {
  const len = str.length / 2, count = factors.length;
  let match = 0;
  for (let i = 0; i < factors.length; i++) {
    if (~str.indexOf(factors[i])) match++;
  }
  const r = match * 2 / (len + count);
  return r;
};
var similarFactors = (ptk, tagname, factors) => {
  const out2 = [];
  for (let i = 0; i < ptk.columns.manifest[tagname].length; i++) {
    const str = ptk.columns.manifest[tagname][i];
    if (!str) continue;
    const similarity = factorSimilarity(factors, str);
    if (similarity > 0.5) {
      const illline = ptk.defines.ill.linepos[i];
      const at2 = bsearchNumber(ptk.defines[tagname].linepos, illline);
      const id = i;
      out2.push({ i, id, similarity, line: ptk.defines[tagname].linepos[at2] });
    }
    out2.sort((a, b) => b.similarity - a.similarity);
  }
  return out2;
};
var getApprox = (ptk, tagname, id) => {
  const at = bsearchNumber(ptk.defines.ill.linepos, id) - 1;
  if (!ptk.columns.manifest[tagname]) return [];
  const v = ptk.columns.manifest[tagname][at];
  const factors = v.split(/([a-z]\d)/).filter((it) => !!it);
  const out2 = similarFactors(ptk, tagname, factors).filter((it) => it.i !== at);
  return out2;
};
var meta_cm = {
  filterColumn: "manifest",
  getApprox,
  similarFactors,
  parseChoice,
  stringifyChoice,
  humanChoice,
  groupStates,
  onLineText,
  onChunkCaption,
  getMultiStateFilters,
  runFilter
};
addTemplate("cm", meta_cm);

// meta/cbeta-textlinks.ts
var CiteFormats = [/\(CBETA[ \d\.Q]*, ([A-Z]+)(\d+), no\. ([\da-z]+), p\. ([^\)]+)\)/g];
var RefTargetFormats = [
  /vol:(\d+);page:p(\d+), ([abcd])(\d+)/,
  // with col and line
  /vol:(\d+);page:p(\d+)/,
  // page only
  /no:([\d\.]+)/
  // sutra number
];
var parseVolNoPage = (str) => {
  const m4 = str.match(/([A-Z]{1,2})(\d\d)n(\d\d\d\d[A-Za-z]?)_?p(\d+)([a-z])(\d*)/);
  if (m4) {
    return {
      cor: m4[1],
      vol: parseInt(m4[2]),
      no: m4[3],
      page: parseInt(m4[4]),
      col: m4[5].charCodeAt(0) - 97,
      line: parseInt(m4[6])
    };
  }
};
var parseRefTarget = (str, reftype) => {
  for (let i = 0; i < RefTargetFormats.length; i++) {
    const m4 = str.match(RefTargetFormats[i]);
    if (m4) {
      if (str.startsWith("vol")) {
        return reftype + m4[1] + "p" + m4[2] + (m4[3] ? m4[3] + m4[4] : "");
      } else if (str.startsWith("no")) {
        return reftype + "n" + m4[1];
      }
    }
  }
  return str;
};
var convertCitationToTEIRef = (str) => {
  const out2 = [];
  for (let i = 0; i < CiteFormats.length; i++) {
    str = str.replace(CiteFormats[i], (m0, cor, vol, no, page) => {
      const target = "vol:" + vol + ";page:p" + page;
      const text = "^j#" + parseRefTarget(target, cor.toLowerCase());
      return '<ref text="' + text + '"/>';
    });
  }
  return str;
};

// meta/nullify_cbeta.ts
var escapeQuote = (t) => {
  return t.replace(/"/g, "\uFF02");
};
var nullify_note = (content) => {
  content = content.replace(/<note([^>]*?)>([^<]+?)<\/note>/g, (m4, _attrs, t) => {
    const attrs = parseXMLAttribute(_attrs);
    const { place, type, n, resp } = attrs;
    let note = "";
    if (place == "inline") note = "\u3014" + t + "\u3015";
    else if (place == "foot text" && type == "orig") {
      note = '<origfoot n="' + n + '" t="' + escapeQuote(t) + '"/>';
    } else if (type) {
      if (type.startsWith("cf")) {
        note = "<" + type + ' t="' + t + '" />';
      } else {
        note = "<" + type + "_note" + (n ? ' n="' + n + '"' : "") + (resp ? ' resp="' + resp + '"' : "") + ' t="' + escapeQuote(t) + '"/>';
      }
    } else if (!attrs["xml:id"]) {
      note = "<_note>" + convertCitationToTEIRef(t) + "</_note>";
    } else {
      note = m4;
    }
    return note;
  });
  return content;
};
var nullify_rdg = (content) => {
  content = content.replace(/<rdg([^>]*?)>(.*?)<\/rdg>/g, (m4, _attrs, t) => {
    const { resp, wit } = parseXMLAttribute(_attrs);
    if (resp == "Taisho" || typeof resp == "undefined") {
      return '<t_rdg t="' + t + '" wit="' + wit + '"/>';
    } else {
      return '<_rdg t="' + t + '" resp="' + resp + '" wit="' + wit + '"/>';
    }
  });
  return content;
};
var nullify_choice = (content) => {
  content = content.replace(/<orig([^>]*?)>([^<]*?)<\/orig>/g, (m4, _attrs, t) => {
    return '<_orig t="' + t + '"/>';
  }).replace(/<sic([^>]*?)>([^<]*?)<\/sic>/g, (m4, _attrs, t) => {
    return '<_sic t="' + t + '"/>';
  });
  return content;
};
var nullify_cbtt = (content) => {
  content = content.replace(/<cb:t ([^>]+)>([^<]+)<\/cb:t>/g, (m4, _attrs, t) => {
    const attrs = parseXMLAttribute(_attrs);
    const lang = attrs["xml:lang"];
    if (lang === "zh-Hant") {
      return t;
    } else {
      return "";
    }
  });
  return content;
};
var nullify_cbeta = (content) => {
  content = content.replace(/<g ref="#CB(\d+)"\/>/g, "#CB$1;");
  content = content.replace(/<figure><graphic url="([^>]+)"><\/graphic><\/figure>/g, "[fg_$1]");
  content = content.replace(/<space([^>]*?)\/>/g, (m4, attrs) => {
    const attributes = parseXMLAttribute(attrs);
    return " ".repeat(parseInt(attributes.quantity));
  });
  content = content.replace(/<unclear><\/unclear>/g, "[??]");
  content = nullify_cbtt(content);
  content = nullify_note(content);
  content = nullify_note(content);
  content = nullify_rdg(content);
  content = nullify_choice(content);
  content = nullify_note(content);
  return content;
};

// meta/offtag_cbeta.ts
var createChunkId_cbeta = (arr) => {
  const lb2 = {}, p3 = {};
  for (let i = 0; i < arr.length; i++) {
    const [id, tag, caption2] = arr[i];
    const insert = tag ? tag + (caption2 ? "\u3010" + caption2 + "\u3011" : "") : caption2;
    if (id.length > 11) {
      p3[id] = insert;
    } else {
      const at = id.indexOf("#");
      if (~at) {
        lb2[id.slice(0, at)] = [insert, id.slice(at + 1)];
      } else {
        lb2[id] = insert;
      }
    }
  }
  return { lb: lb2, p: p3 };
};
var insertTag_cbeta = (txt, tags, chunkidarr) => {
  const chunkid = createChunkId_cbeta(chunkidarr);
  let vol = "", offset = 0;
  let insertcount = 0, inserttag = "", insertoffset = 0;
  const out2 = [];
  for (let i = 0; i < tags.length; i++) {
    const [type, ntag, name2, dist, _attrs] = tags[i];
    offset += dist;
    if (inserttag && offset >= insertoffset) {
      out2.push(["^", insertcount++, inserttag, dist - offset + insertoffset]);
      out2.push([type, ntag, name2, offset - insertoffset, _attrs]);
      inserttag = "";
    } else {
      out2.push([type, ntag, name2, dist, _attrs]);
    }
    if (name2 === "TEI" && type == "+") {
      const attrs = JSON.parse(_attrs || "");
      vol = attrs["xml:id"]?.slice(0, 3);
    } else if (name2 === "p" && _attrs) {
      const attrs = JSON.parse(_attrs);
      const id = attrs["xml:id"] || "";
      const _ckid = chunkid.p[id.slice(1)];
      if (_ckid) {
        inserttag = _ckid;
        insertoffset = offset;
      }
    } else if (name2 === "lb") {
      const attrs = JSON.parse(_attrs);
      const id = attrs.n;
      if (!vol) {
        console.log(tags[i]);
        throw "no vol";
      }
      let _ckid = chunkid.lb[vol + "p" + id];
      if (_ckid) {
        if (_ckid && Array.isArray(_ckid)) {
          const pintext = _ckid[1];
          const at = txt.indexOf(pintext, offset);
          if (~at) {
            inserttag = _ckid[0];
            insertoffset = at;
          } else {
            console.error("\u67E5\u7121\u6B64\u91D8\u6587", pintext);
          }
        } else if (typeof _ckid == "string") {
          inserttag = _ckid;
          insertoffset = offset;
          const preveol = txt.charAt(offset - 1);
          if (preveol !== "\u3002" && preveol !== "\u300D") {
            let at = txt.indexOf("\u3002", offset);
            if (~at && at > offset && offset + 19 > at) {
              if (txt.charAt(at + 1) == "\u300D") at++;
              insertoffset = at + 1;
            }
          }
        }
      }
    }
  }
  return out2;
};
var offGen_cbeta = (txt, tags, charmaps) => {
  const out2 = [];
  let offset = 0, prevoff = 0, started = false, hide = false;
  for (let i = 0; i < tags.length; i++) {
    const [type, ntag, name2, dist, _attrs] = tags[i];
    offset += dist;
    if (started) {
      const t = txt.slice(prevoff, offset);
      if (!hide) out2.push(t);
      if (type == "^") {
        if (name2.match(/^[a-z]/)) out2.push("\n^ck#" + name2 + "\n");
        else out2.push(name2);
      }
    }
    if (name2 == "body") {
      started = true;
    } else if ((name2 == "p" || name2 == "l" || name2 == "lg") && type == "+") {
      out2.push("\n");
    } else if (name2 == "cb:docNumber" || name2 == "note") {
      hide = type == "+";
    }
    prevoff = offset;
  }
  return out2.join("").replace(/\[cf[A-Za-z\d_]+\]/g, "").replace(/\[mc_([A-Za-z\d_]+)\]/g, (m0, mc) => {
    const m4 = charmaps[mc];
    if (!m4) {
      console.log("cannot replace CBxxx", mc);
    }
    return m4;
  }).replace(/([！。？][」])/g, "$1\n").replace(/。([^』」])/g, "\u3002\n$1").replace(/([：；，])([一二三四五六七八九十])([，、])/g, "$1\n$2$3").replace(/ *\n+/g, "\n").trim();
};
var StockCharMap_cbeta = {
  "CB01647": "\uFE35\u{2E4BB}\u81F3\u58EC\uFE36",
  "CB01808": "\u64EA"
};
var buildCharMap_cbeta = (tree) => {
  const out2 = StockCharMap_cbeta;
  const charDecl = xpath(tree, "teiHeader/encodingDesc/charDecl");
  for (let i = 0; i < charDecl?.children.length; i++) {
    const item = charDecl.children[i];
    if (item.name == "char") {
      const id = item.attrs["xml:id"];
      for (let j2 = 0; j2 < item.children.length; j2++) {
        const m4 = item.children[j2];
        if (m4.name == "mapping" && (m4.attrs?.type == "unicode" || m4.attrs?.type == "normal_unicode")) {
          const code = parseInt("0x" + m4.children[0].slice(2), 16);
          const c2 = String.fromCodePoint(code);
          out2[id] = c2;
        }
      }
    }
  }
  return out2;
};

// meta/taishosutrajuan.ts
var TaishoJuanPagePacked = `-%#!! ###+" % %$&'$
>Q
>^
>l
>p&
?.&
?\\ 
@
@.
@6
@G
@U
@i
A
A
A,
A1
A9
AB
AG
AT
Ah
A{ !!
Bm!  
D0"  
Eg!!&'!#(&&'!%$"&#&&  $" " &'+! #"#! "%"%) ""\x1B$  #'
P\x1B
P
P
P 
P$
P(
P0
P3
P6
P8
P:
P<
P@
PE
PH
PM
PR
PU
PZ
Ph
Pl
Pn
Pr
P|
Q
Q
Q
Q
Q 
Q%
Q&
Q-
Q3
Q4
Q:
Q=
QD
QG
QJ
QM
QU
QZ
Qd
Qm
Qq
Qx
Qy
Q|
R
R
R
R!
R$
R,
R9
RK
RN
RQ
RT
R\\
Rg
Rk
Rn
Rp
Rt
Rw
Rz
R{
R~
S
S
S
"'$%'##('#&#&&'+$##%&+#*%$&"#%')*&+$%$"#$(&#('&
DK$#'%*'!*'!(#'+
G]
Gq
Gr
Gs
Gu
Gw
Gy
Gz
G|
G~
H
H
H
H
H
H
H
H
H 
H&,+"
I
I
I
I
I## %!#!(\x1B"(''*\x1B!\x1B $! "\x1B #&%
PZ
Pe
Ph
P~
Q
Q/
Q0
Q3
Q7
Q9
Q>
Q@
QC
QD
QF
QI
QK
QQ
QU
Q\\
Q\`
Qd
Qg
Qk
Qn
R
%'$
<"!
<C(%'$
=F
=t"!!" $
?%$%%"#$! 
@j(%$'' $
B4"
C=\x1B\x1B\x1B\x1B
Do
Du
D}
E
E
E;
EA
EF
EI
EL
E\`
Eq
E|
F$
F*
F:
FA
FF
FM
FS
FT
FY
Fd
Fn
G 
G?!'&* !
Hv# #%## !#(!
K
K&')
L!\x1B
S6\x1B
,(22
<(+#+-'
=Z(/
>E
>J(
>z#
?)%
?X
@\x1B "\x1B! 
A? !## " ##"
Cq()$$%/$%!#&
FD#"#\x1B
Gp
Gx\x1B
H "
HD
H_ 
I\x1B
IA'
Ir,%+
Jg!   !  !!!  !! " !!
O)!!
Om
Oo
Op
Or
Os
Ot
! !  !   ! ! "!""  !  !!"!" !!! !$!  !     "    !     " ""  "  !   
"($'%&)#$"$"#%%((%#
>H**!$#(!!
@8'&#(*-+$%$+#$&##'""#(#)(#)
Es % \x1B!
G1\x1B  
H""
Ho \x1B
J$\x1B\x1B\x1B
LO
Lg
Ln#$ 
Mr
N
N+
NE
NQ
Nm
N{
O
O&
O-
O7
O>
OE\x1B" #
PH
Pc!
Q
Q
Q
Q\x1B
Q
Q
Q 
Q"
Q#
Q%
Q)
Q*
Q.
Q0
QO! \x1B\x1B"
+)(,+)
<..#(!('$"
>"*(.+++
?m
?q+1
@S ("
A7# 
B$
B2
BP 
C$!
D2
DM
DZ
Dg
Dy
E!!$&("$"*&!""("!!""  "##)$$' !%$$" !*"$!$!!&$$''!&!
!#"\x1B$!&#\x1B#\x1B!" ! #\x1B #\x1B!"\x1B!&"!  !(&   "$!!$\x1B'!)"
F>
FB
FP
FZ
Fa
Fe. 1
Gk*%-
Hj\x1B\x1B
Ip
J2
J3
J5 #"
K"$"$#
L \x1B \x1B \x1B\x1B!
Q'*#
Qq
Qx
Q|
R
R\x1B\x1B\x1B
RV
Rb
Rk
R{
S
S,  !$
T
T
T#
T+$')(*')&'
#%  !"!!!%    \x1B\x1B& """%'$' !$%" """"""!" !\x1B $*\x1B"*$$&%(!\x1B!$\x1B *" ! .($ '&!
Ln\x1B!
M1
NM#
Ns
O
O5
R
R+ 
RN"
S
\x1B
;
;'
;?
;R
;b
;d
<
<
<0
<7
<E
<J
<V
<]
<f
<l
<}
=%
=D
=Z!"
>!.
>\\
>\`
>c
?
?6
?M
?N
?V
?d
?x
@8
@K
@k
@t
@z
A*
A5
AY#
B!
BO,
C
C."
CW
Ci
Co
Cy
Cz
C{
C~
D
D.
D0#%""!"$# "!  !"#" "%"#!""""#
JZ"%##")'(( !&&(#"#!#%!&"#"$+'$%$
Q+'$&$)
RG#
Rk*
S,!
S^ ! 
T@
To
U/
UM!" 
V_ 
W
W' 
X
X
X
X#
X$
X'
X)
X/
X1
''!#!"&$%*+$'"&$(".)" '%"&! '! $\x1B#" '$!5$&(/""#
EC"!
FS!"
G#
HE#
Ho"!\x1B
J\x1B\x1B
Jr
Ki
L
L#
L4
LQ
L\\! \x1B
Mc$#   
O+!
OP
OY#$''
PW\x1B\x1B\x1B
Qd!
R@
RO !
S
S 
S@#
Sh 
T
TK
.')#'&(
<6
<J
<M
<P
<R
<U
<Y
<[
<v" 
=<
=B
=F
=J
=R
=V!# #"%  
?I#\x1B#\x1B! 
Bs
C\x1B \x1B
D
D
D/
DQ
Du
E+
E6
EC
E_
Eg
Eo
Ev
E}
F
F!
F4
FG
FT#
F~
G7
G:
GA
GK
GS
G[)
H
H
H%
H-
H2
H:*
Hp$'
I=!"
J(
JB
J[
Jy
K%\x1B
KX# "
L1
L7
LD$  
M\x1B
M
M%
M1
NM
NO
NR
N]
Na
Nb
Ng
Nl
Np
O
O
O
O
O
O
O
O 
O!
O%
O)
O-
O/
O5
O<
OC
OF
OM
OS
OU
OX
OY
O\\
O^
Oa
Of
On
Op
Os
Ow
Oz
O~
P
P
P'
P*
P2
P7
P:
P<
P>
PH
PM
PT
PV
Pl
Pv\x1B
Q#
Q+
Q,
Q/
QO
R8
R:
R=
RN
RZ
R^
Rd
Rf
Rj
Rl
Rm
Ro
Rr
Ru
S
S2
SL
SP
ST
SW
SZ
S[
S^
Sb
Sg
Si
Sk
Sn
Sp 
T!
T(
T,
T.
T1
+'&
;E%#'
<+! "
="
=P
=b
=e
=u
=w
=}
>
>
>
>!##
>g
>h
>m
>x
?&
?<
?>
??&#*#%
@a
@s
@v
@z
@~
A
A*+
Ae&
B%
B&"
BH
BQ8
C+
CA
C_
Ca
Ci
Co# 
D7! 
Dx'
E;$&
E}\x1B
FJ
FQ
Ff
Fm
G
G&
GO 
H 
H8#
H_+
I#("/&)!!
K
K 
K2'
Kc " !\x1B 
M\x1B
M"
M6
ME\x1B
Mi
Mv\x1B 
NI"
Nk\x1B
O 
O:$%
O~
P
'51&(7.%%&&!'
=}$!(*)-01
@ !##
A!$##\x1B
B
C4
C:
CG  !
D!% \x1B
E1\x1B"#
Fb
Fl
F}
G 
G3-)&
H-$ #"#"!!/
J$%!$%&)
KT 
Ky"
L,
Lr 
MF
MP
MZ
Ma
Mj%'
NA(/
O)
O.
O/
O2
O3
O5
O8
O=
OB
OJ
OL
OP
Od
Og
Oj
Om
Op
Or
Ov
Oy
P
P
P#
P%
P&
P+
P/
P6
P=
PC
PL
PO
PT
PX
Pm
Q
Q
Q"
    !"" !" %# #   #!!! "#!""!"!"!"%" !!"!   ! ! "$ ""&!   
Ea\x1B\x1B
FB
FO
FU
F\\
Fd
Fe !! "!#
H3
HH
HV
H[
Hi
Hk
Hn
Hs
Hw
H|
I
I
I
I"
I&
I,
I<
IE
IK
IR
IU
Ii
Ik
Io
Iq
Ir"
J)
J.
J2
JL
JN
JZ
Jh! $&%
Kq
K|
L
L$  
M"
M&
M(
M4
M7
M;
M=
M>
M?
MG
MI
MN
MO
MR
MS
M\\
M_
Ma
Mf
Ml
Mr
Ms
Mu
Mw
M{
N 
N!
N"
N&
N*
N,
N3
N8
N9
N:
N;
N@
NF
NG
NJ
NL
NM
NU
NV
N\\#
O
O
O#
O7
OH
Om
P0
PH\x1B
Pb
Pc
Pm
Q
Q(
Q=
QU
QY
Q_
Q\`
Qe
Qj
Qp
Qw
Qz
R
R$
R*
R.
R=
RL
Rg
Rk
Rn
S
S3
S7
S<
S?,)
('#")!
<
<49
=(&
=F);
>>%&
>}\x1B
?#
?*
?.
?2
?3
?=
?R
?V
?a
?i
@
@K''&
A5!
Af 
B!
B*
B6
BH
BM
Bm$
C!
C.
C<
CI
CM
CQ
CS
CY\x1B\x1B\x1B
FA\x1B
Fu
G  &!
H#
H,\x1B\x1B\x1B
Ho
H~\x1B
IB \x1B
J
J&
JT+6;0;(
L~\x1B2
M]!/
N>
Ni
O
O(
O7
OA-,&7'%/*)''
RA
RC
RG
Rc
Rl
Rs
Rw
S
S 
S$
S-
S>
SC
SO
SS
SU


"
;
;
;&
;:
;E
;_
;s
<-
<8
<;
<K
<R
<_
<a
<b
<g
<p
<u
<y
=
=#
=%
='
=,
=<\x1B(
>a#
?:
?U
?Y
?a%!)
@M*#"/
AR  !
B$*#
Bf
Bw
B~
C\x1B
C/
C1
C8
C9
CG
CN
CQ
CS
C]
Cq
C}
D
D
D&
D.
D:+
Dh
E$
E+
E4
E>
EF
EG
EI
EU&/
F.
FB 
Fh%
G/
G3
G;
GD\x1B
G\\
G^
Gt
H
H*
H;
HC
HL\x1B"""
Iw
I{"
J9
JR
J^
J\`
K
K"
KG\x1B
L
L6
LL
LX
LZ
L\`
Lh
Lq
L}
M
M
M,
M;
M@
MA
MB
MQ
MY
Me
Mr
Mx
N/
N7


#
*
;
;
;
;
;"
;(
;>
;B
;E
;I
;T
;Y
;e
;f
;h
;m
;o\x1B
<1
<:
<=
<A
<E
<I
<k"
=!
=7
==
=P
=U
=X
=Z
=g
=|
>
>-
>2
>N
>W
>\`'
?
?!
?%
?6
?I
?M
?O
?S
?k
?n
?w
?}
@
@
@'
@4
@9
@A
@N
@V$    !#"!%$ "$" $#
E%
E/
E:
ED
Eh
F
F9
FD
FM
FY
Fc
G
G
G%
G+
G1
GB
GD
GQ
GU
Gk
Gu
Gy
G{
H
H
H
H*
HA
HH
HU
H^
Hk
Hv
H~
I
I" 
IO
Ia
Id
Iq
It
Iz
I}
J
J
J
J&
J-
JL
JL
JM
JP
JT
JY
J\`
J\`
Jg
Jk
Ju
J{"
KJ
K_
Kn
Kt
Kv
Kx
L
L
L1
L4
L:
LB
LI
LJ
LM
LQ\x1B
L|
M3
M?
MB
ML
MV
Mj
Mm#\x1B$"  
O,
O-
O0
O2
O5
O8
O?
OT
P
P
P)
P9
PK
Pf\x1B
RV (
S0
S<
SD
SH
SJ
SN

$
6\x1B
;'
;4
;?
;E
;S
;T
;V
;X
;]
;\`
;v
<J
<L
<U
<Y
<d\x1B\x1B
=
=$
=&
=+
=2"")\x1B
>
>
>&
>7
>:
>i
>m
>s
?
?
? 
?&
?.
?0
?4
?8
?P"
?}
?~
@
@
@2
@8
@?
@O
@Q
@X
@_
@h*"
A1
A4
A;
AF
AL
AN\x1B
B"
B$
B%
B/
B3
B6
B8
B=
BC
BG
BJ
BX
BY
B\`
Bb\x1B\x1B
C
C$
C&
C+
C6
C;
CU
CW
C]
C^
C\`
Cq
D
D
D
D\x1B
D7
DK
DR
DT
DW
DY
D]
De
Dh
Dm
Dr#
E' 
EG
Ed
Eg
Ek
Eo
Eq
Et
Ew;
FT
Fc
Fi
Ft
Fx
F|
G
G
G
G
G
G#
GC
GO
GS
GT
GU
GW
GX
GX
GX
GY
Gc\x1B
Hn%!
IH
IS
I\\
J $&!# 
KK
KR
KU \x1B
L \x1B
NX \x1B
Pr
Q
Q"
Q/
Q<
Q@
QB
QI
QL
QN
QP
QR
QY
Qe
Ql
Qn
Qp
Qs
Qv
Qw
R
R
R
R
R
R
R\x1B
R
R
R$
R'
R(
R*
R7
R:
RC
RL
RN
RO
RR
RS
RT
RU
RW
RX
RY
R[
R]
R]
R_
R\`
Rf
Rh
Rl
Rn
Rp
Rs
Rv
Rw
R{
R~
S
S
S
S
S
S
S
S#
S%
S&
S'
S*
S,
S4
S6
S:
SB
T 
!%(&$(()*  ! "$!%&$#"&
?f
@
@/
@V'%1(*--+.&"!##%'(*)+(+%%'()(%+(&!&%%#&#
I#
I8
IY) ##$"$#%&'&!&#&%$&#%$%%$&$#&&'(+**%&#%%'.*-,"'(&%%% $&&&#
UM
Ue
U|
V*
VI
Vs
""&(4 "+'" #%# '$"()-$("- #%$%(*!%%&(&%$##$-!,#((&."#))0%&
G
G3
GQ
Gf
G}#$$$%###
IR##"##%"!
K+!\x1B " !!" ## !!   "!# !!!"
R\\"  !   "\x1B!"!  "
U] 
V*
V5
VA
#$#'
=$
=) !   
@\x1B\x1B! !%$ " !#! 
EU\x1B\x1B\x1B
F^\x1B
Gs
H
H6
H?
HL $"" &! !$
K9;
L
L-
LE)%'(%#(%&%&%&&
Oq! !" (
Q%"!!
RF
RP
Rf
Ri
Rk
Rm#
S$
S7
S@
SE
SI
SM
S[
S^
S{
T
T
T%
T>;
U!
U?#
Ue
Uv
V!!"  !
W!
W1
WB
WL
WP
W\\
Wk
Wq
Wv
Ww
Wx
X
X
X(
X+
X9
&
;
;<#
<
<*,*+&"##!)*()" ",%)*"&!"!*&"!*0" !($## '$ "#$$"$# %"#"("%! *$!!$ $%,&$&%#* %#% "$&)+($ \x1B ## $ 
N^,
O6 
Oh"&(%)&''&
Qm\x1B
R
R 
RA
RI
Rm

/
;!# ""!!!" $&
=q&%%&"!$&
@'"!
@a
@i\x1B\x1B
Aq
A}
B
B
B5!
C2
CM
D
D
D/
D6\x1B\x1B\x1B\x1B\x1B
FW
H+
H^!   \x1B  
Jv
K+%\x1B ! 
L~\x1B
O\x1B,\x1B\x1B\x1B%\x1B#
R}"  ""!& !"
!      "  !      #"   ! \x1B\x1B\x1B\x1B\x1B\x1B\x1B#\x1B\x1B 
(&* &!!'.-%''& '!&*'%'"$% $%"*"&",)'"$1))+(*'# #\x1B
EX#&))"&)"#&,)$
HL+),%'%+#!"%#$% "#&&"!
Mc((')/"!8(
P"!
Pa"!"! 
Q]0%2'*$&0'*
T+'
TV
Tp
U
U
!" !"!   
>r')$$"#$##"#"($"#!$&
Bo
C)
C5!$!"!  ""$"## #$#$# "!# !##&  !! "  !   
O)\x1B!!! ! !
'/-
;Y
;z"%# $!#
>'
>l
?$
?@
?O !!!"&#"
A+
A3
A6
A7
A<
A>!
A\`
B "!%#"%!#$%!$! ""   &!$%"   ! $("'# !&" "\x1B! ! !% &!$"!!$&&##$"#""$%&$
R
R# "!"!+"9
T'!   "
UI
UW 
 !!!" ""
<%
<*
<0
<C
<P
<Y\x1B\x1B
=#%
=Q$"
>&
>W(%&!,&%#((+(&(
Ai\x1B 
C !""!%
D] #"$& '&)
FP$
Fx
G/
G7  ! ! 
J
J+!#"  #
L&\x1B 
M  \x1B"!\x1B
O 
O*
O5
OG$$ 
P$+ *
Q
Q$
Q2
Q3
QC
QV 
Qx
R
R
R
R
R"
R$
R&
R/
R6

!
0
7
;(
;8
;N#
;w
<S\x1B\x1B
>C
>Q
>\`
>e
>j
?
?"
?%$\x1B(!
@S 
@z(**#*'(*'),)%+%
DN( 
E' ! !"
Fq
G!
G8
G<
GI
GT
GX
G^
H
H
H\x1B
H5\x1B\x1B
H}
I
IJ
IM
Ii
Iq
J
J2.2++%#!$
L7
M/ 
M]
N;
NC
NL
NV
N\\
N^
N_
N\`
Nb
Nm
O
O
O\x1B
O
O
O%
O)
O?
O@
OH
OK

+)
;-36
<.
<>
<R
<m4)*
=t;
>_(
?+,*--
@Y
@z&
A3" !
B%,
Bz:;
D;3;#
F;3;A
HG-
I
I,
I6"
I_
Ih45929;8
L\\255::;754
P*&&''&%&$%&#$)#%$%#%
;9;;9;;:;
>T;";#;!;;!;;";;"
D$//"'*-(+,
FP;;;4;;;;;;\x1B*
K>
Ks; ;&;;";&;!; ;;!
Q0
Q\`
Qs&
R/&*"
S'
SB!
T4;

7;\x1B;;#;
=A;;#;;/;;(;";;9;;;;#; ;;$;*;
G[
G{"(*$%(%!*+*'+('!* &"*2%%%$1*$*-*'##!'"!$#,'%"*$ !('#++%$
*$&'")("''''*#$+(*&%&'#%!'$)$'('$)&%&)($'*()+',%)'+('''+(-).(*'+%%%%&'$#"# #!),'&!%'!"%
M(
MA
Mc"#!#"$!%$##$%$&%&&&$'"'%$&##%&$%$"&&*''
U:
UC+,,
VD&
Vq
;1;@
=7
=^
=x
>1;
?%
?M
?g#$"#
@i
A!,*
B#(
Ba
Be
Bo
C5(!
Cn
Cv
D
D,
DT"! \x1B\x1B% \x1B\x1B\x1B*\x1B " 
Jr;;;9;8;7;7;8;<;<;8
$
;$"#
;_!   ! %!,)   !  !!$
@_
@z
A?
AQ
Am9
BL
BX
C/2/0..+!#/
Eg;);0;-
H:''$$
IL;;2;;;;15
ME;858:673:
Q+-'%&$$
Ra;18;7
T|;;(;!;;
 
4"!!
;m#!$%
<k67;52
>o
?+;;2;E;I;A
C_;(;;
Eu
F\x1B&(&%''%%!
H
H'
H2
HG;3
I}:4/-/10,/11*-+-,*-/
OP)
P
PB;;7;34+;9
T1
TL" '
U-
UD;
;i<!
>f= =A
F77
Ft5
GZ,
H#,*
Ht)'
IM(
J,"
JQ2$*'&
L9
Lu/
M];';)
O;
OA;:
PK*
Q
;F;":;&;; ;364$';6; 74;;+9.9;2;8;1
FV;\`;5;;;-,0, $6/1(%+9)8-1.,200(
P$7%!'" !#!! 
;\x1B9;\x1B;;78;;
?;'$
@**
@e;6;4
Bp;-;(;;$;1;!;&;5;.;0;;);+;);$;#;(;0;8;&;(;&;!
;9;;;17-+,8;;!;;
@\\;S;b;S;\\;Y;V;S;N;G
J\`;2
L;%;1;;\x1B;-; 
P;';3;-;';;#
TQ7
:;
;l
<\x1B
<(
<X
=;;
><
>j
?+;
?|9
@S
A/;
B)
BF!!!!  ! ! ! 
ED
Ek"'&""
Fz;);%;:;!; ;;; ;;!; ;$; ;:;;.;;

;-.8:
<Y;3
=\\
=o%#
>=
>Q
>t6;
?y2;
A\x1B;';0;$;4;
DN)3
EA7+'
FK
G
G-&%$
H
H+
H:+
Ho13;
J,
JB
JF'
Jr#
K+
KI
KV
Kr
L
L&
L2
L>
LA
Lc
L~&
M;
ME;B
N~
O
O%
OY
P
P6$
Pc
Ps$
Q0%
Q[
Qj
R$
R=
RM
RO
RR
RV
Rk
Rt
R~
S
S \x1B\x1B\x1B
T0\x1B
-.:6;";;;;
>6;];J;L;.;};7;A;#;&
FD!
Fh
Fq
G')&,$(&"
I#
I7%\x1B"
J
J
J%% %$
K
K-
KU!" 
L*0-
M
M,
M2(
Mc\x1B\x1B
O
O
O5
OE
OY$''
PE
PZ1
Q4,*/3-,
S<
SD
SW
Si
S}
T
T
T
T
T$
T+
T1
T@
TP
T^
Tj
Tn
Tq,
U5

\x1B.
;%
;=##"#"$
<X
<f
<k#$
=8
=K
=h"
>!\x1B
>A
>K;;;;;3
A-"\x1B\x1B
B0
B7
BW#&'
D3
D\`
Dl%
Ec
Ef
Eq"
F*
FG
F\`,
G&%
GV
Gc
H
HP:
I*8
Iw
J
J'
J:72
K3
KR
Km%!
L8%*$ #
ML
P\x1B\x1B \x1B\x1B
T
Ta+.'&-#$/
;+%;%;;
=k!
>04.()$%$%'
@S223&1
B7
BO#$&\x1B
CM
Cf
D0
DR
DT
D[
Ds
E\x1B
E )
EU"#  "(! & "''! ,$  #!'"% !" #! $  \x1B  "\x1B "\x1B\x1B"!\x1B !\x1B\x1B 
T29
T~
U
U1
U=
UQ!"!
V)& "" "
Wc
X!'$!#!!


$
,
5
;
;
;
;&#;" $"&" %%!
>1!;))#)\x1B'/.*$($$,- 3"#,'"*!%%#  *
G-7"%)&-+.)4529;983;;;
N";Z;L;n
RP;;
Sw;9;)
;{0(
<n
=)
>\x1B\x1B
?
?"
?C
?F
?N
?R
?[
?p 
@/
@C %" #&
B
B1
B8
B?
BF\x1B
C"%%*"))(#( *
Es$&$6')$*)%##,$2/.'*;$/'1;(0& +
M? #"$)"  ""!)$"'''##$! !
RJ\x1B 
S<
Sg"#&%($)%
UM
 
4\x1B\x1B
;s
=#
=8
=E!"
={23
>Z 
?&
?7
?k: $2.!%+(&2'((),+%-+&,-11'1&
G'"!""  $/(,#&"#!(%)$+"$)%##,
MQ$"!#("
O
O\x1B
O=
OH
Ot2
PK12
Q7
QT
QV'$!! ($"$
Sf7
TF
U
U
U 
Uc
Uh
Uj%  
VK
VV45
WT
Wm(+
XJ
Xb
($ &'!")%,
=#\x1B ! #(*%(%2&9\x1B'.($!-+)21;98
D*)&'
E 
E4*-
F 
F8 ! 
G&(
GS% %/\x1B5
I)
IC
Ik$ )!%%#
KI
Kf& !%" #!"! 
NL!)
O5"
O]" 
P3
PM# "
!&$$! $! "$(\x1B%&\x1B'&!\x1B! %\x1B *
Ac)'%'-0//.3 -","'"$$.#'$$!+++5,1%4-'%#%#!&" )'%#:&%"+!1*-)!''%$'$""#" $ ) *1$+$%" '%'!
&0(/)/,1*;/*/+%/**
?g
@%$%
@k$$
A@;;
Bp# ! #"$""""(!#" '%(!*,0#"&$!$ $%&$)!!"()")!"(#&%!!%  %""%$" &#"&\x1B\x1B\x1B\x1B! 
S<\x1B\x1B
TX.-!"*!)"
VT;;;;;\x1B;
Z
Z%
Zt
[
[N
[Y" 
\\
\\'
\\4
\\P
\\d
\\j
\\l
-!;\x1B)(%!4$
=Y(  
>Q!!.
?<(&/ 
@>%;6:81".7
C\\
Cn
D8
DG& ! !&*$;)
G-.;*23+'.,+6;;270+)0
Ml!$
ND,(
O"%'$)2$&(*$#"$$ #!+17;6;5;(;
V?
VT
V^
Vd
Vu
V}
W
W
W#
W)
WE
WR
WT
W]
Wb
Wp
X
X
X!4
X[
Xc
Xi
Xl
Xr
Y
Y
YL&




































































































































































































































































































































































































































































































































































);
<
<9;$
=H
=h
>
>
>,
>6
>^
>e
>o
?
?
?
?
?:
?V
?f
?s
@
@
@9
@k
@m
@q
@|
A(
A4
AM
B
B9
B[
Ba
Bo
C5
CU
D
D.
DP;'
Eo
F
F
F)
F/;E
Gv;
Hm
Ho
Hy
I
I9
I=
IA
IL
IY\x1B;)
J}
K\`
Ky
K|
L
LB
Ld
Lz9
M]
Mu
N:
Nj*
O9
Oz;q;H5;
SG
Se
T"
T\\'
U
UA
Ud
V\x1B
V9
Vs
V{
WI;
X:;;
Yf
Yr
Z
Z
Z-
Z<
ZQ
ZT
ZW
[
[
[>
[R6
\\'
\\(
\\.
\\0
\\4
\\5
\\=
\\K
\\V
\\Z
\\r
\\t
\\x
\\z
\\~
]
]
]
]
]
]
]\x1B
]
]
]
] 
]&
])
]-
]/
]1
]G
]X
]Z
]\`
]a
]d
]g
]k
]m
]q
^
^
^"\x1B
^R
^S
^[
^]
^b
^c
^c
^g
^x\x1B
_+
_4
_8
_H
_K"
_k
_p
_r
_u
_u
_w
\`
\`
\`
\`!
\`%
\`8
\`A
\`C
\`T
\`V
\`\`
\`|
a
a
a
a"
a&
a*
a+
a.
a2
a5
a7
a=
a>
a>
a@
aA
aB
   !!$ !!   !  !! !"  #"       "        ! !!         #       
!   !!      !  ! "           $   !   !   ! !!  ! #! ! !   !#!! !"!   # !  !   !  # #         " !      !!!`;

// meta/cbeta.ts
var fixJuanT = (bkno, juan, sutraname) => {
  let bk = "";
  if (juan === 1) {
    bk = "^bk" + bkno + "\u3010" + sutraname;
  }
  if (bkno === "946") {
    if (juan >= 4) juan--;
  } else if (bkno === "2799" || bkno === "2825") {
    if (juan === 3) juan = 2;
  } else if (bkno === "2805") {
    if (juan === 5) {
      bk = "^bk#" + bkno + "\u3010" + sutraname;
      juan = 1;
    } else if (juan === 7) juan = 2;
  } else if (bkno === "2139") {
    if (juan === 10) juan = 2;
  } else if (bkno === "2772") {
    if (juan === 3) {
      bk = "^bk#" + bkno + "\u3010" + sutraname;
      juan = 1;
    } else if (juan === 6) juan = 2;
  } else if (bkno === "2748" || bkno === "2754" || bkno === "2757" || bkno === "2764b" || bkno === "2769" || bkno === "2803" || bkno == "2809" || bkno === "2820") {
    bk = "^bk<id=" + bkno + "\u3010" + sutraname;
    juan = 1;
  }
  return [bk, juan];
};
var parseBuffer = (buf, fn = "", ctx) => {
  buf = buf.replace(/\r?\n<lb/g, "<lb").replace(/\r?\n<pb/g, "<pb");
  ctx.rawContent = buf;
  const el = DOMFromString(buf);
  const body = xpath(el, "text/body");
  const charmap = buildCharMap_cbeta(el);
  let m4 = fn.match(/n([\dabcdefABCDEF]+)_(\d+)\.xml/);
  let bk = "", bkno = "", chunk = "";
  const sutraNo = m4[1].replace("_" + m4[2], "").toLowerCase();
  let sutraname = ctx.catalog && ctx.catalog[sutraNo] && ctx.catalog[sutraNo].trim() || "";
  bkno = sutraNo.replace(/^0+/, "");
  const at = sutraname.indexOf("^");
  if (at > -1) {
    sutraname = sutraname.substr(0, at) + "\u3011" + sutraname.substr(at);
  } else sutraname += "\u3011";
  let juan = parseInt(m4[2]);
  if (fn[0] == "T") {
    [bk, juan] = fixJuanT(bkno, juan, sutraname);
  } else if (juan === 1) {
    bk = "^bk" + bkno + "\u3010" + sutraname;
  }
  chunk = "^juan" + juan;
  if (!ctx.teictx) {
    ctx.teictx = {
      defs: ctx.labeldefs || {},
      lbcount: 0,
      hide: 0,
      snippet: "",
      volumname: ctx.volumname,
      div: 0,
      charmap,
      fn,
      started: false,
      transclusion: ctx.transclusion || {},
      milestones: ctx.milestones || {}
    };
  }
  ctx.teictx.sutraNo = sutraNo;
  ctx.teictx.started = false;
  const openhandler = Object.assign({}, onOpen, ctx.onOpen || {});
  const closehandler = Object.assign({}, onClose, ctx.onClose || {});
  let content = bk + chunk + walkDOMOfftext(body, ctx.teictx, openhandler, closehandler, onTextWithInserts);
  ctx.teictx.out = "";
  content = content.replace(/\^r\n/g, "\n").replace(/\n+/g, "\n");
  return content;
};
var tidy = (content) => {
  return content.replace(/([、，；]?)<caesura[^>]*\/>/g, (m4, m1) => m1 || "\u3000");
};
var parseFile = async (f, ctx) => {
  let fn = f;
  if (typeof f.name === "string") fn = f.name;
  const ext = fn.match(/(\.\w+)$/)[1];
  if (ext == ".xml") {
    const xmlcontent = tidy(await fs.promises.readFile(f, "utf8"));
    const nullified = nullify_cbeta(xmlcontent);
    const parsed = parseBuffer(nullified, fn, ctx);
    const lines = parsed.split("\n");
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      if (!(line.startsWith("^h") || line.startsWith("^bk"))) {
        lines[i] = breakChineseSentence(line);
      }
    }
    return lines.join("\n");
  } else {
    throw "unknown extension " + ext;
  }
};
var translatePointer = (str) => {
  const m4 = str.match(/([A-Z])(\d\d)n(\d{4}[abcde]*)_p(\d\d\d\d)([abcdef])/);
  if (m4) {
    const [mm, zj, vol, sutrano, page, col] = m4;
    return "/cb-" + zj.toLowerCase() + "/v#" + vol.replace(/^0/, "") + "/p#" + page.replace(/^0+/, "") + col;
  }
  return "";
};
var fromCBETA = (cbeta) => {
};
var toCBETA = (address) => {
};
var TaishoMaxPage = [
  0,
  //每一冊之頁數
  924,
  884,
  975,
  802,
  1074,
  1073,
  1110,
  917,
  788,
  //1
  1047,
  977,
  1119,
  998,
  968,
  807,
  857,
  963,
  946,
  744,
  //10
  940,
  968,
  1072,
  1057,
  1122,
  914,
  1031,
  1004,
  1001,
  977,
  //20
  1035,
  896,
  790,
  963,
  1008,
  963,
  1066,
  903,
  1114,
  1040,
  //30
  857,
  982,
  868,
  1009,
  875,
  978,
  1013,
  1064,
  1160,
  1019,
  //40
  1023,
  1140,
  860,
  1030,
  1290,
  1178,
  828,
  782,
  22,
  802,
  //50
  782,
  810,
  802,
  970,
  778,
  796,
  926,
  916,
  778,
  866,
  //60
  840,
  912,
  768,
  726,
  822,
  960,
  888,
  878,
  918,
  824,
  //70
  760,
  724,
  786,
  930,
  906,
  1464
];
var TaishoVolSutra = [
  //每一冊開頭的經號
  1,
  99,
  152,
  192,
  220,
  220,
  220,
  221,
  262,
  279,
  310,
  321,
  397,
  425,
  585,
  656,
  721,
  848,
  918,
  1030,
  1199,
  1421,
  1435,
  1448,
  1505,
  1519,
  1545,
  1546,
  1558,
  1564,
  1585,
  1628,
  1693,
  1718,
  1731,
  1736,
  1744,
  1765,
  1783,
  1804,
  1821,
  1824,
  1829,
  1835,
  1852,
  1911,
  1957,
  2001,
  2026,
  2040,
  2066,
  2102,
  2121,
  2123,
  2145,
  2185,
  2201,
  2211,
  2216,
  2218,
  // from sat
  2221,
  2246,
  2249,
  2251,
  2255,
  2263,
  2266,
  2267,
  2272,
  2291,
  2309,
  2326,
  2341,
  2347,
  2385,
  2409,
  2411,
  2461,
  2501,
  2543,
  2562,
  2580,
  2608,
  2680,
  2732,
  2921
  //terminator
];
var TaishoJuanPage = TaishoJuanPagePacked.split(/\n/).map(unpackIntDelta);
var TaishoPageFromJuan = (sutranumber, juan = 1) => {
  if (typeof sutranumber !== "number") sutranumber = parseInt(sutranumber) || 1;
  let vol = bsearchNumber(TaishoVolSutra, sutranumber + 1);
  if (sutranumber == 220) {
    if (juan > 400) {
      juan -= 400;
      sutranumber = 2922;
      vol = 7;
    } else if (juan > 200) {
      juan -= 200;
      sutranumber = 2921;
      vol = 6;
    } else {
      vol = 5;
    }
  }
  const jpage = TaishoJuanPage[sutranumber - 1];
  if (!jpage) return [0, 0, 0];
  const pgcol = jpage[juan - 1] || 0;
  return [vol, Math.floor(pgcol / 3), pgcol % 3];
};
var TaishoJuanFromPage = (volpage, page = 1, col = 0) => {
  let vol = volpage;
  if (typeof volpage == "string") {
    [vol, _page] = volpage.split("p");
    if (_page) page = _page;
  }
  if (typeof page == "string") {
    const m4 = page.match(/([bc])$/);
    if (m4) col = m4[1].charCodeAt(0) - 97;
    page = parseInt(page);
  }
  vol = parseInt(vol);
  if (isNaN(vol)) return [0, 0];
  const pn = page * 3 + col;
  let startsutra = TaishoVolSutra[vol - 1];
  let endsutra = TaishoVolSutra[vol];
  if (vol == 5) {
    startsutra = 220;
    endsutra = 221;
  } else if (vol == 6) {
    startsutra = 2921;
    endsutra = 2922;
  } else if (vol == 7) {
    startsutra = 2922;
    endsutra = 2923;
  }
  for (let i = startsutra; i < endsutra; i++) {
    const pages = TaishoJuanPage[i - 1];
    const at = bsearchNumber(pages, pn + 1);
    if (~at && pages[at] >= pn) {
      if (i == 2921) {
        return [220, at + 200];
      } else if (i == 2922) {
        return [220, at + 400];
      }
      if (i > 0 && at == 0) {
        return [i - 1, TaishoJuanPage[i - 2].length];
      } else {
        return [i, at];
      }
    }
  }
  return [0, 0];
};
var getSutraInfo = (ptk, no) => {
  const catalog = ptk.columns.catalog;
  if (typeof no == "number") no = no.toString().padStart(4, "0");
  const at = catalog.keys.indexOf(no);
  return { title: catalog.title[at], bulei: catalog.bulei[at], author: catalog.author[at], no };
};
var TaishoSutraCode = {
  1: "agmd",
  26: "agmm",
  99: "agms",
  100: "agmss",
  //shorter samyutta agama
  125: "agmu"
};
var nextColumn = (obj) => {
  if (obj.col === 2) {
    obj.col = 0;
    obj.page++;
  } else if (obj.col < 2) obj.col++;
  return obj;
};
var meta_cbeta = {
  translatePointer,
  parseFile,
  parseBuffer,
  onOpen,
  onClose,
  createChunkId: createChunkId_cbeta,
  insertTag: insertTag_cbeta,
  offGen: offGen_cbeta,
  buildCharMap: buildCharMap_cbeta,
  StockCharMap: StockCharMap_cbeta,
  parseRefTarget,
  TaishoMaxPage,
  TaishoVolSutra,
  TaishoJuanPage,
  TaishoSutraCode,
  tidy,
  getSutraInfo,
  TaishoJuanFromPage,
  TaishoPageFromJuan,
  fromCBETA,
  toCBETA,
  parseVolNoPage,
  //行首格式
  nextColumn,
  nullify: nullify_cbeta
};
addTemplate("cbeta", { TaishoMaxPage, guidedrawer: "cbeta" });

// meta/cs-first.ts
var FirstPN = {
  d1: 1,
  d2: 150,
  d3: 254,
  d4: 300,
  d5: 323,
  d6: 359,
  d7: 378,
  d8: 381,
  d9: 406,
  d10: 444,
  d11: 481,
  d12: 501,
  d13: 518,
  //dn1
  d14: 1,
  d15: 95,
  d16: 131,
  d17: 241,
  d18: 273,
  d19: 293,
  d20: 331,
  d21: 344,
  d22: 372,
  d23: 406,
  //dn2
  d24: 1,
  d25: 49,
  d26: 80,
  d27: 111,
  d28: 141,
  d29: 164,
  d30: 198,
  d31: 242,
  d32: 275,
  d33: 296,
  d34: 350,
  //dn3
  //mn1
  m1: 1,
  m2: 14,
  m3: 29,
  m4: 34,
  m5: 57,
  m6: 64,
  m7: 70,
  m8: 81,
  m9: 89,
  m10: 105,
  m11: 139,
  m12: 146,
  m13: 163,
  m14: 175,
  m15: 181,
  m16: 185,
  m17: 190,
  m18: 199,
  m19: 206,
  m20: 216,
  m21: 222,
  m22: 234,
  m23: 249,
  m24: 252,
  m25: 261,
  m26: 272,
  m27: 288,
  m28: 300,
  m29: 307,
  m30: 312,
  m31: 325,
  m32: 332,
  m33: 346,
  m34: 350,
  m35: 353,
  m36: 364,
  m37: 390,
  m38: 396,
  m39: 415,
  m40: 435,
  m41: 439,
  m42: 444,
  m43: 449,
  m44: 460,
  m45: 468,
  m46: 473,
  m47: 487,
  m48: 491,
  m49: 501,
  m50: 506,
  //mn2
  m51: 1,
  m52: 17,
  m53: 22,
  m54: 31,
  m55: 51,
  m56: 56,
  m57: 78,
  m58: 83,
  m59: 88,
  m60: 92,
  m61: 107,
  m62: 113,
  m63: 122,
  m64: 129,
  m65: 134,
  m66: 148,
  m67: 157,
  m68: 166,
  m69: 173,
  m70: 174,
  m71: 185,
  m72: 187,
  m73: 193,
  m74: 201,
  m75: 207,
  m76: 223,
  m77: 237,
  m78: 260,
  m79: 269,
  m80: 278,
  m81: 282,
  m82: 293,
  m83: 308,
  m84: 317,
  m85: 324,
  m86: 347,
  m87: 353,
  m88: 358,
  m89: 364,
  m90: 375,
  m91: 383,
  m92: 396,
  m93: 401,
  m94: 412,
  m95: 422,
  m96: 436,
  m97: 445,
  m98: 454,
  m99: 462,
  m100: 473,
  //mn3
  m101: 1,
  m102: 21,
  m103: 34,
  m104: 41,
  m105: 55,
  m106: 66,
  m107: 74,
  m108: 79,
  m109: 85,
  m110: 91,
  m111: 93,
  m112: 98,
  m113: 105,
  m114: 109,
  m115: 124,
  m116: 133,
  m117: 136,
  m118: 144,
  m119: 153,
  m120: 160,
  m121: 176,
  m122: 185,
  m123: 197,
  m124: 209,
  m125: 213,
  m126: 223,
  m127: 229,
  m128: 236,
  m129: 246,
  m130: 261,
  m131: 272,
  m132: 276,
  m133: 279,
  m134: 286,
  m135: 289,
  m136: 298,
  m137: 304,
  m138: 313,
  m139: 323,
  m140: 342,
  m141: 371,
  m142: 376,
  m143: 383,
  m144: 389,
  m145: 395,
  m146: 398,
  m147: 416,
  m148: 420,
  m149: 428,
  m150: 434,
  m151: 438,
  m152: 453,
  //sn1 , 最後一位一定是文字
  s1a: 1,
  s1b: 11,
  s1c: 21,
  s1d: 31,
  s1e: 41,
  s1f: 51,
  s1g: 61,
  s1h: 71,
  s2a: 82,
  s2b: 92,
  s2c: 102,
  s3a: 112,
  s3b: 122,
  s3c: 132,
  s4a: 137,
  s4b: 147,
  s4c: 157,
  s5a: 162,
  s6a: 172,
  s6b: 182,
  s7a: 187,
  s7b: 197,
  s8a: 209,
  s9a: 221,
  s10a: 235,
  s11a: 247,
  s11b: 257,
  s11c: 267,
  //sn2
  s12a: 1,
  s12b: 11,
  s12c: 21,
  s12d: 31,
  s12e: 41,
  s12f: 51,
  s12g: 61,
  s12h: 71,
  s12i: 73,
  s13a: 74,
  s14a: 85,
  s14b: 95,
  s14c: 107,
  s14d: 114,
  s15a: 124,
  s15b: 134,
  s16a: 144,
  s17a: 157,
  s17b: 167,
  s17c: 170,
  s17d: 180,
  s18a: 188,
  s18b: 198,
  s19a: 202,
  s19b: 212,
  s20a: 223,
  s21a: 235,
  //sn3
  s22a: 1,
  s22b: 12,
  s22c: 22,
  s22d: 33,
  s22e: 43,
  s22f: 53,
  s22g: 63,
  s22h: 73,
  s22i: 83,
  s22j: 93,
  s22k: 103,
  s22l: 113,
  s22m: 126,
  s22n: 136,
  s22o: 150,
  s23a: 160,
  s23b: 170,
  s23c: 182,
  s23d: 194,
  s24a: 206,
  s24b: 224,
  s24c: 250,
  s24d: 276,
  s25a: 302,
  s26a: 312,
  s27a: 322,
  s28a: 332,
  s29a: 342,
  s30a: 392,
  s31a: 438,
  s32a: 550,
  s33a: 607,
  s34a: 662,
  //sn4
  s35a: 1,
  s35b: 13,
  s35c: 23,
  s35d: 33,
  s35e: 43,
  s35f: 53,
  s35g: 63,
  s35h: 74,
  s35i: 84,
  s35j: 94,
  s35k: 104,
  s35l: 114,
  s35m: 124,
  s35n: 134,
  s35o: 146,
  s35p: 156,
  s35q: 168,
  s35r: 228,
  s35s: 238,
  s36a: 249,
  s36b: 259,
  s36c: 269,
  s37a: 280,
  s37b: 294,
  s37c: 304,
  s38a: 314,
  s39a: 330,
  s40a: 332,
  s41a: 343,
  s42a: 353,
  s43a: 366,
  s43b: 377,
  s44a: 410,
  //sn5
  s45a: 1,
  s45b: 11,
  s45c: 21,
  s45d: 31,
  s45e: 41,
  s45f: 49,
  s45g: 63,
  s45h: 77,
  s45i: 91,
  s45j: 103,
  s45k: 139,
  s45l: 149,
  s45m: 161,
  s45n: 172,
  s46a: 182,
  s46b: 192,
  s46c: 202,
  s46d: 212,
  s46e: 222,
  s46f: 232,
  s46g: 238,
  s46h: 248,
  s46i: "258-269",
  s46j: "270-279",
  s46k: "280-291",
  s46l: "292-301",
  s46m: "302-310",
  s46n: "312-323",
  s46o: "324-333",
  s46p: "334-345",
  s46q: "346-356",
  s46r: "357-366",
  s47a: 367,
  s47b: 377,
  s47c: 387,
  s47d: 397,
  s47e: 407,
  s47f: "417-428",
  s47g: "429-438",
  s47h: "439-450",
  s47i: "451-460",
  s47j: "461-470",
  s48a: 471,
  s48b: 481,
  s48c: 491,
  s48d: 501,
  s48e: 511,
  s48f: 521,
  s48g: 531,
  s48h: "541-552",
  s48i: "587-596",
  s48j: "597-608",
  s48k: "641-650",
  s49a: "651-662",
  s49b: "663-672",
  s49c: "673-684",
  s49d: "685-694",
  s49e: "695-704",
  // 663-672 missing markup in s0305m appamādavaggo 
  s50a: "705-716",
  s50b: "717-748",
  s50c: "749-758",
  s50d: "759-770",
  s50e: "792-802",
  s50f: "803-812",
  //717-748 , see cs/ro-errata.js:s0305m and sc/msdiv.js:sn5
  s51a: 813,
  s51b: 823,
  s51c: 833,
  s51d: "845-856",
  s51e: "889-898",
  s52a: 899,
  s52b: 909,
  s53a: "923-934",
  s53b: "967-976",
  s54a: 977,
  s54b: 987,
  s55a: 997,
  s55b: 1007,
  s55c: 1017,
  s55d: 1027,
  s55e: 1037,
  s55f: 1047,
  s55g: 1058,
  s56a: 1071,
  s56b: 1081,
  s56c: 1091,
  s56d: 1101,
  s56e: 1111,
  s56f: 1121,
  s56g: 1131,
  s56h: 1141,
  s56i: 1151,
  s56j: 1161,
  s56k: 1172,
  a1a: 1,
  a1b: 11,
  a1c: 21,
  a1d: 31,
  a1e: 41,
  a1f: 51,
  a1g: 61,
  a1h: 71,
  a1i: 82,
  a1j: 98,
  a1k: 140,
  a1l: 150,
  a1m: 170,
  a1n: 188,
  a1o: 268,
  a1p: 296,
  a1q: "366-381",
  a1r: 382,
  a1s: 563,
  a1t: 600,
  a2a: 1,
  a2b: 11,
  a2c: 22,
  a2d: 33,
  a2e: 43,
  a2f: 53,
  a2g: 65,
  a2h: 78,
  a2i: 88,
  a2j: 99,
  a2k: 119,
  a2l: 131,
  a2m: 142,
  a2n: 152,
  a2o: 164,
  a2p: 181,
  a2q: "191-200",
  a2r: 201,
  a2s: 231,
  a3a: 1,
  a3b: 11,
  a3c: 21,
  a3d: 31,
  a3e: 41,
  a3f: 52,
  a3g: 62,
  a3h: 72,
  a3i: 82,
  a3j: 93,
  a3k: 104,
  a3l: 114,
  a3m: 124,
  a3n: 134,
  a3o: 147,
  a3p: "157-163",
  a3q: "164-183",
  a3r: 184,
  a4a: 1,
  a4b: 11,
  a4c: 21,
  a4d: 31,
  a4e: 41,
  a4f: 51,
  a4g: 61,
  a4h: 71,
  a4i: 81,
  a4j: 91,
  a4k: 101,
  a4l: 111,
  a4m: 121,
  a4n: 131,
  a4o: 141,
  a4p: 151,
  a4q: 161,
  a4r: 171,
  a4s: 181,
  a4t: 191,
  a4u: 201,
  a4v: 211,
  a4w: 221,
  a4x: 232,
  a4y: 243,
  a4z: 254,
  a4ba: 264,
  a4bb: 274,
  a5a: 1,
  a5b: 11,
  a5c: 21,
  a5d: 31,
  a5e: 41,
  a5f: 51,
  a5g: 61,
  a5h: 71,
  a5i: 81,
  a5j: 91,
  a5k: 101,
  a5l: 111,
  a5m: 121,
  a5n: 131,
  a5o: 141,
  a5p: 151,
  a5q: 161,
  a5r: 171,
  a5s: 181,
  a5t: 191,
  a5u: 201,
  a5v: 211,
  a5w: 221,
  a5x: 231,
  a5y: 241,
  a5z: 251,
  a5ba: 272,
  a5bb: 286,
  a5bc: 303,
  a6a: 1,
  a6b: 11,
  a6c: 21,
  a6d: 31,
  a6e: 43,
  a6f: 55,
  a6g: 65,
  a6h: 75,
  a6i: 85,
  a6j: 96,
  a6k: 107,
  a6l: 117,
  a6m: 140,
  a7a: 1,
  a7b: 11,
  a7c: 21,
  a7d: 32,
  a7e: 44,
  a7f: 54,
  a7g: 65,
  a7h: 75,
  a7i: 85,
  a7j: 95,
  a7k: 623,
  a8a: 1,
  a8b: 11,
  a8c: 21,
  a8d: 31,
  a8e: 41,
  a8f: 51,
  a8g: 61,
  a8h: 71,
  a8i: 81,
  a8j: "91-116",
  a8k: 117,
  a9a: 1,
  a9b: 11,
  a9c: 21,
  a9d: 32,
  a9e: 42,
  a9f: 52,
  a9g: 63,
  a9h: 73,
  a9i: 83,
  a9j: 93,
  a10a: 1,
  a10b: 11,
  a10c: 21,
  a10d: 31,
  a10e: 41,
  a10f: 51,
  a10g: 61,
  a10h: 71,
  a10i: 81,
  a10j: 91,
  a10k: 101,
  a10l: 113,
  a10m: 123,
  a10n: 134,
  a10o: 145,
  a10p: 155,
  a10q: 167,
  a10r: 178,
  a10s: 189,
  a10t: 199,
  a10u: 211,
  a10v: 221,
  a10w: 237,
  a11a: 1,
  a11b: 11,
  a11c: "22-29",
  a11d: 503
};

// meta/cs-paranum.ts
var firstParanumOf = (chunkid) => {
  return FirstPN[chunkid];
};
var BKPN_C = null;
var buildReverse = () => {
  BKPN_C = {};
  for (let c2 in FirstPN) {
    let bk = "";
    const [m4, pf, seg] = c2.match(/([a-z]+)(\d+)/);
    const nseg = parseInt(seg);
    const pn = FirstPN[c2];
    if (pf === "d") {
      if (nseg > 0 && nseg <= 13) bk = "dn1";
      else if (nseg >= 14 && nseg <= 23) bk = "dn2";
      else if (nseg >= 24 && nseg <= 34) bk = "dn3";
    } else if (pf === "m") {
      if (nseg > 0 && nseg <= 50) bk = "mn1";
      else if (nseg >= 51 && nseg <= 100) bk = "mn2";
      else if (nseg >= 101 && nseg <= 152) bk = "mn3";
    } else if (pf === "s") {
      if (nseg > 0 && nseg <= 11) bk = "sn1";
      else if (nseg >= 12 && nseg <= 21) bk = "sn2";
      else if (nseg >= 22 && nseg <= 34) bk = "sn3";
      else if (nseg >= 35 && nseg <= 44) bk = "sn4";
      else if (nseg >= 45 && nseg <= 56) bk = "sn5";
    } else if (pf === "a") {
      bk = "an" + seg;
    } else if (pf === "k") {
      bk = "kn" + seg;
    }
    if (!bk) throw "error chunk " + c2;
    if (!BKPN_C[bk]) BKPN_C[bk] = {};
    BKPN_C[bk][pn] = c2;
  }
};
var bookParanumToChunk = (bkid, pn) => {
  if (!BKPN_C) buildReverse();
  return (BKPN_C[bkid] || {})[pn];
};

// meta/sc-code.ts
var BookPrefix = {
  vin: "pj,pc,mv,cv,pvr",
  dn: "dn1,dn2,dn3",
  mn: "mn1,mn2,mn3",
  sn: "sn1,sn2,sn3,sn4,sn5",
  //match subfolder 
  an: "an1,an2,an3,an4,an5,an6,an7,an8,an9,an10,an11",
  ab: "ds,dt,kv,pt,pp,vb,ya",
  kn: "kp,snp,dhp,iti,ud,vv"
};
var AB = "abhidhamma";
var VIN = "vinaya";
var booksOf = (id) => {
  const idarr = id.split(",");
  const out2 = [];
  idarr.forEach((id2) => {
    const s = BookPrefix[id2];
    if (typeof s === "string") {
      out2.push(...s.split(","));
    } else {
      out2.push(id2);
    }
  });
  return out2.filter((it) => !!it);
};
var sortFilenames = (filenames) => {
  return filenames.sort((f1, f2) => {
    const m2f1 = f1.match(/(\d+)\.(\d+)/);
    const mf1 = f1.match(/(\d+)/);
    const m2f2 = f2.match(/(\d+)\.(\d+)/);
    const mf2 = f2.match(/(\d+)/);
    if (!m2f1 || !m2f2) return parseInt(mf1[1]) - parseInt(mf2[1]);
    return m2f1[1] == m2f2[1] ? parseInt(m2f1[2]) - parseInt(m2f2[2]) : parseInt(m2f1[1]) > parseInt(m2f2[1]) ? 1 : -1;
  });
};
var getFilesOfBook = (pat, filesFolders, rootfolder) => {
  let folders = filesFolders[pat];
  if (!folders) return [];
  if (typeof folders === "string") {
    const out2 = [];
    folders.split(",").forEach((f) => {
      if (filesFolders[f]) out2.push(...filesFolders[f]);
      else out2.push(f);
    });
    folders = out2;
  }
  const files = [];
  folders.forEach((subfolder) => {
    const f = filesFromPattern(subfolder, rootfolder);
    files.push(...sortFilenames(f));
  });
  return files;
};
var pitakaOf = (id) => {
  const pf = id.replace(/\d+$/, "");
  return {
    pj: VIN,
    pc: VIN,
    mv: VIN,
    cv: VIN,
    pvr: VIN,
    vin: VIN,
    ab: AB,
    ds: AB,
    dt: AB,
    kv: AB,
    pt: AB,
    pp: AB,
    vb: AB,
    ya: AB
  }[pf] || "sutta";
};
var suttaOfBook = (bkid) => {
  const out2 = [];
  if (bkid === "dn") for (let i = 1; i <= 34; i++) out2.push("d" + i);
  else if (bkid === "dn1") for (let i = 1; i <= 13; i++) out2.push("d" + i);
  else if (bkid === "dn2") for (let i = 14; i <= 23; i++) out2.push("d" + i);
  else if (bkid === "dn3") for (let i = 24; i <= 34; i++) out2.push("d" + i);
  else if (bkid === "mn") for (let i = 1; i <= 152; i++) out2.push("m" + i);
  else if (bkid === "mn1") for (let i = 1; i <= 50; i++) out2.push("m" + i);
  else if (bkid === "mn2") for (let i = 51; i <= 100; i++) out2.push("m" + i);
  else if (bkid === "mn3") for (let i = 101; i <= 152; i++) out2.push("m" + i);
  else if (bkid === "sn") for (let i = 1; i <= 56; i++) out2.push("s" + i);
  else if (bkid === "sn1") for (let i = 1; i <= 11; i++) out2.push("s" + i);
  else if (bkid === "sn2") for (let i = 12; i <= 21; i++) out2.push("s" + i);
  else if (bkid === "sn3") for (let i = 22; i <= 34; i++) out2.push("s" + i);
  else if (bkid === "sn4") for (let i = 35; i <= 44; i++) out2.push("s" + i);
  else if (bkid === "sn5") for (let i = 45; i <= 56; i++) out2.push("s" + i);
  else if (bkid === "an") for (let i = 1; i <= 11; i++) out2.push("a" + i);
  else if (bkid.match(/an\d/)) out2.push("a" + bkid.substr(2));
  return out2;
};

// meta/cs.ts
var meta_cs = {
  firstParanumOf,
  bookParanumToChunk,
  FirstPN,
  suttaOfBook
};

// meta/sc.ts
var meta_sc = {
  getFilesOfBook,
  pitakaOf,
  booksOf,
  sortFilenames,
  suttaOfBook
};

// denote/tokenizers.ts
var isIASTToken = (w2) => w2.match(/^[a-zA-Zḍṭṇñḷṃṁṣśṅṛāīūâîû]+\d*$/);
var tokenizeIAST = (str, opts = {}) => {
  const pattern = opts.pattern || /([a-zA-Zḍṭṇñḷṃṁṣśṅṛāīūâîû]+\d*)/ig;
  let o = str.split(pattern).filter((it) => !!it);
  if (opts.removeBlank) o = o.filter(isIASTToken);
  if (opts.tokenOnly) return o;
  else return o.map((raw) => {
    return [raw, null];
  });
};
tokenizeIAST.splitPunc = (str) => str;
tokenizeIAST.isToken = isIASTToken;
var tokenizeIASTPunc = (str, opts = {}) => {
  opts.pattern = /([“‘]*[a-zA-Zḍṭṇñḷṃṁṣśṅṛāīūâîû]+\d*[’।॥\.,;?\!…”–]* *)/ig;
  return tokenizeIAST(str, opts);
};
tokenizeIASTPunc.splitPunc = (token) => {
  const mlead = token.match(/^([“‘]*)/);
  let lead, tail;
  if (mlead) {
    lead = mlead[1];
    token = token.slice(lead.length);
  }
  const mtail = token.match(/(\d*[’।॥\.,;?\!…”–]* *)$/);
  if (mtail) {
    tail = mtail[1];
    token = token.slice(0, token.length - tail.length);
  }
  return [lead, token, tail];
};
tokenizeIASTPunc.isToken = (w2) => w2.match(/^([“‘]*[a-zA-Zḍṭṇñḷṃṁṣśṅṛāīūâîû]+\d*[’।॥\.,;?\!…”–]* *)$/);
var tokenizers_default = { "iast": tokenizeIASTPunc };

// denote/markups.ts
var plainMarkup = (str) => {
  return [[str, {}]];
};
var offtextMarkup = (str) => {
  const tokens = str.split(OFFTAG_REGEX_SPLIT);
  let i = 0, open = "";
  const out2 = [];
  while (i < tokens.length) {
    const tk = tokens[i];
    i++;
    if (!tk) continue;
    if (tk[0] === OFFTAG_LEADBYTE) {
      const [tagName, attrs, putback] = parseOffTag(tk, tokens[i++]);
      let attr = packOfftagAttrs(attrs);
      if (putback) {
        attr = attr.slice(0, attr.length - 1);
        out2.push([putback, { open: open + tk + attr, close: "]" }]);
        open = "";
      } else {
        open += OFFTAG_LEADBYTE + tagName + attr;
      }
    } else {
      out2.push([tk, { open }]);
      open = "";
    }
  }
  return out2;
};
var XMLMarkup = (str) => {
  const out2 = [];
  const tokens = str.split(/(<[^>]+>)/);
  let open = "", attr;
  for (let i = 0; i < tokens.length; i++) {
    const tk = tokens[i];
    if (tk[0] == "<") {
      if (tk[1] == "/") {
        attr.close += tk;
      } else {
        open += tk;
      }
    } else if (tk) {
      attr = { open, close: "" };
      open = "";
      out2.push([tk, attr]);
    }
  }
  return out2;
};
var markups_default = { "plain": plainMarkup, offtext: offtextMarkup, "xml": XMLMarkup };

// denote/serializers.ts
var XMLSerializer = (den) => {
  let str = "";
  for (let i = 0; i < den.data.length; i++) {
    const it = den.data[i];
    const attr = it[den.akey] || {};
    str += (attr.open || "") + (it.lead ? it.lead : "") + it.tk + (it.tail ? it.tail : "") + (attr.close || "");
  }
  return str;
};
var offtextSerializer = (den) => {
  let str = "";
  for (let i = 0; i < den.data.length; i++) {
    const it = den.data[i];
    const attr = it[den.akey] || {};
    let space = "";
    if (attr.open && attr.close) {
      space = " ";
    }
    str += (attr.open || "") + space + it.tk + (attr.close || "");
  }
  return str;
};
var plainSerializer = (den) => {
};
var serializers_default = { plain: plainSerializer, xml: XMLSerializer, offtext: offtextSerializer };

// denote/denlist.ts
var TDenList = class {
  constructor(str, opts = {}) {
    this.data = [];
    this.akey = opts.akey || "attr";
    this.markup = opts.markup;
    this.lang = opts.lang;
    this.akey = this.akey;
    this.deserialize(str, opts);
  }
  deserialize(str, opts) {
    const markupParser = markups_default[opts.markup || "plain"];
    const tokenize4 = tokenizers_default[opts.lang || "iast"];
    if (!markupParser) throw "unknown data format " + opts.markup;
    if (!tokenize4) throw "unknown language " + opts.lang;
    const pieces = typeof str === "string" ? markupParser(str, opts) : str;
    this.data = [];
    for (let i = 0; i < pieces.length; i++) {
      const [phrase, attr] = pieces[i];
      const tokens = tokenize4(phrase, opts);
      if (attr.open) tokens[0][1] = { open: attr.open };
      if (tokens.length == 1) {
        if (!tokens[0][1]) tokens[0][1] = {};
        tokens[0][1].close = attr.close;
      } else if (attr.close) {
        tokens[tokens.length - 1][1] = { close: attr.close };
      }
      for (let j2 = 0; j2 < tokens.length; j2++) {
        const [lead, tk, tail] = tokenize4.splitPunc(tokens[j2][0]);
        if (!tk.length) continue;
        const o = { tk, ...attr };
        if (lead) o.lead = lead;
        if (tail) o.tail = tail;
        o[this.akey] = tokens[j2][1];
        this.data.push(o);
      }
    }
  }
  serialize(markup) {
    const m4 = markup || this.markup || "plain";
    const serializer = serializers_default[m4];
    let out2 = "";
    if (!serializer) {
      console.log("no serializer for markup", m4);
    } else {
      out2 = serializer(this);
    }
    return out2;
  }
  items() {
    return this.data;
  }
  add(tk, attr) {
    this.data.push({ tk, attr });
  }
  length() {
    return this.data.length;
  }
  token(i) {
    const o = this.data[i];
    if (o) return o.tk;
  }
  attr(i, akey) {
    const o = this.data[i];
    if (o) return o[akey || this.akey];
  }
};

// denote/operations.ts
var diffList = (IList, JList, opts = {}) => {
  const maxdiff = opts.maxdiff || 10;
  const out2 = [];
  const I = IList.items(), J = JList.items(), attrI = IList.akey, attrJ = JList.akey;
  const Ilen = I.length, Jlen = J.length;
  let i = 0, j2 = 0;
  const add = (m4, a = -1, b = -1) => {
    let obj;
    if (a > -1) obj = { m: m4, tk: I[a].tk, [attrI]: I[a][attrI], lead: I[a].lead, tail: I[a].tail };
    if (b > -1) {
      if (!obj) {
        obj = { m: m4, tk: J[b].tk, [attrJ]: J[b][attrJ], lead: J[b].lead, tail: J[b].tail };
      } else {
        obj[attrJ] = J[b][attrJ];
      }
    }
    if (obj) out2.push(obj);
  };
  while (i < Ilen && j2 < Jlen) {
    if (I[i].tk === J[j2].tk) {
      add(0, i, j2);
      i++, j2++;
      continue;
    } else {
      let pj = j2, pi = i, match = false;
      while (j2 < Jlen && j2 - pj < maxdiff) {
        j2++;
        if (j2 < Jlen && I[i].tk === J[j2].tk) {
          for (let j22 = pj; j22 < j2; j22++) add(-1, -1, j22);
          match = true;
          break;
        }
      }
      if (match) continue;
      j2 = pj;
      if (j2 < Jlen) while (i < Ilen && i - pi < maxdiff) {
        i++;
        if (i < Ilen && [i].tk === J[j2].tk) {
          for (let i2 = pi; i2 < i; i2++) add(1, i2, -1);
          match = true;
          break;
        }
      }
      if (match) continue;
      add(1, pi, -1);
      i = pi + 1;
    }
  }
  while (i < Ilen) add(1, i++, -1);
  while (j2 < Jlen) add(-1, -1, j2++);
  return out2;
};

// paged/constants.ts
var PGDEXT = ".pgd";

// paged/paged.ts
var Paged = class {
  handle;
  pagetexts;
  pagenames;
  header;
  dirty;
  name;
  log;
  constructor() {
    this.pagenames = Array();
    this.pagetexts = Array();
    this.header = {};
    this.log = [];
    this.dirty = 0;
  }
  get lastpage() {
    return this.pagetexts.length - 1;
  }
  get filehandle() {
    return this.handle;
  }
  async loadFromHandle(h, _name) {
    const workingfile = await h.getFile();
    const str = await workingfile.text();
    this.handle = h;
    this.name = _name;
    return this.loadFromString(str, _name);
  }
  setHandle(h) {
    this.handle = h;
  }
  async loadFromUrl(url, _name) {
    if (!~url.indexOf("http") && ~url.indexOf("/")) url = "https://" + url;
    else if (url.indexOf(PGDEXT) == -1) url += PGDEXT;
    url = url.replace("/jsbin/", "/output.jsbin.com/");
    const text = await loadUrl(url);
    if (!_name) _name = (url.match(/([A-Za-z\-_]+)\.pgd/) || ["", "noname"])[1];
    return this.loadFromString(text, _name);
  }
  loadFromString(str, _name) {
    const keys = {};
    const lines = str.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const at = lines[i].indexOf("	");
      if (~at) {
        const key = line.slice(0, at);
        if (!keys[key]) keys[key] = true;
        else if (key) {
          this.log.push(_name + " dup key:" + key);
        }
        this.pagenames.push(key);
        this.pagetexts.push(line.slice(at + 1));
      } else {
        if (!this.pagetexts.length) {
          this.pagetexts.push(line);
          this.pagenames.push("");
        } else this.pagetexts[this.pagetexts.length - 1] += "\n" + line;
      }
    }
    if (this.pagetexts.length < 2) {
      this.pagetexts.push("blank page");
    }
    this.header = this.parseHeader(this.pagetexts[0]);
    this.name = _name;
    return this;
  }
  parseHeader(text) {
    const out2 = {};
    const lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const ch = line.charAt(0);
      if (ch === "#") continue;
      if (ch === "{") {
        const [objstr] = extractObject(line);
        try {
          const obj = jsonify(objstr);
          for (let key in obj) {
            out2[key] = obj[key];
          }
        } catch {
          this.log.push("header error " + line);
        }
      }
    }
    return out2;
  }
  listEntries(tofind, max = 100) {
    const regex = new RegExp(tofind);
    const out2 = Array();
    const N = this.pagenames;
    for (let i = 1; i < N.length; i++) {
      if (N[i].match(regex)) {
        if (out2.length >= max) break;
        out2.push(i);
      }
    }
    return out2;
  }
  scanEntries(tofind, max = 100) {
    const regex = new RegExp(tofind);
    const out2 = Array();
    const N = this.pagenames;
    const T = this.pagetexts;
    for (let i = 1; i < N.length; i++) {
      if (!N[i]) continue;
      if (T[i].match(regex)) {
        if (out2.length >= max) break;
        out2.push(i);
      }
    }
    return out2;
  }
  dumpOffTsv(name2 = "") {
    name2 = name2 || this.name;
    let offtext = Array();
    let tsv = Array();
    for (let i = 0; i <= this.pagetexts.length - 1; i++) {
      const t = this.pagetexts[i];
      offtext.push("^dk" + i + " " + t);
      if (this.pagenames[i]) tsv.push(this.pagenames[i] + "	" + i);
    }
    if (tsv.length) {
      tsv.unshift("^:<name=" + name2 + ">	dkat=number");
    }
    let title = "";
    const H = Object.assign({}, this.header);
    if (!H.id) H.id = name2;
    if (H.title) {
      title = "\u300A" + H.title + "\u300B";
      delete H.title;
    }
    const bkattrs = JSON.stringify(H);
    const prolog = "^ak#" + H.id + "^bk" + bkattrs + title + "\n";
    return [prolog + offtext.join("\n"), tsv.join("\n")];
  }
  dump(escape = false) {
    const out2 = [this.pagetexts[0]];
    for (let i = 1; i <= this.pagetexts.length - 1; i++) {
      const t = this.pagetexts[i];
      out2.push(this.pagenames[i] + "	" + (escape ? escapeTemplateString(t) : t));
    }
    return out2.join("\n");
  }
  insertPage(thispage, newcontent = "") {
    if (!thispage) return 0;
    this.pagetexts.splice(thispage, 0, newcontent);
    this.pagenames.splice(thispage, 0, "");
    return thispage + 1;
  }
  deletePage(thispage) {
    if (!thispage) return this;
    this.pagetexts.splice(thispage, 1);
    this.pagenames.splice(thispage, 1);
    return this;
  }
  async browserSave(opts) {
    const out2 = this.dump();
    let handle = this.handle;
    if (!handle) {
      handle = await window.showSaveFilePicker(opts);
    }
    if (!handle) return;
    if (await verifyPermission(handle, true)) {
      const writable = await handle.createWritable();
      await writable.write(out2);
      await writable.close();
      this.clearDirty();
      this.handle = handle;
      return handle;
    }
  }
  pageText(n) {
    if (typeof n == "string" && parseInt(n).toString() !== n) {
      n = this.pagenames.indexOf(n);
    }
    return this.pagetexts[n];
  }
  pageName(n) {
    return this.pagenames[n];
  }
  setPageName(pagename, n) {
    this.pagenames[n] = pagename;
  }
  findPageName(pagename) {
    return this.pagenames.indexOf(pagename);
  }
  setPageText(n, value) {
    let m4 = -1;
    if (typeof n == "number") m4 = n;
    if (typeof n == "string" && parseInt(n).toString() !== n) {
      m4 = this.pagenames.indexOf(n);
    }
    if (!~m4) return;
    if (m4 == 0) {
      this.header = this.parseHeader(value);
    } else if (m4 >= 0 && m4 < this.pagetexts.length) {
      this.pagetexts[m4] = value;
    }
  }
  clearDirty() {
    this.dirty = 0;
  }
  markDirty() {
    this.dirty++;
  }
};

// paged/pagedgroup.ts
var PagedGroup = class {
  _pageds;
  _keeped = {};
  // name of keepText
  backlinks;
  constructor() {
    this.reset();
  }
  reset() {
    this._pageds = {};
    this.backlinks = {};
    this._keeped = {};
  }
  add(name2, content) {
    const paged = new Paged();
    paged.loadFromString(content, name2);
    this._pageds[name2] = paged;
    return paged;
  }
  async addHandle(name2, handle) {
    const paged = new Paged();
    await paged.loadFromHandle(handle, name2);
    this._pageds[name2] = paged;
    return paged;
  }
  async addUrl(name2, url) {
    const paged = new Paged();
    await paged.loadFromUrl(url, name2);
    this._pageds[name2] = paged;
    return paged;
  }
  get names() {
    return Object.keys(this._pageds);
  }
  markKeeped(name2) {
    this._keeped[name2] = true;
  }
  clearKeeped(name2) {
    this._keeped[name2] = false;
  }
  clearDirty(name2) {
    if (this._pageds[name2]) this._pageds[name2].clearDirty();
  }
  markDirty(name2) {
    if (this._pageds[name2]) this._pageds[name2].markDirty();
  }
  getDirty(name2) {
    return this._pageds[name2]?.dirty || 0;
  }
  keepCount() {
    return this.keeped;
  }
  getKeeped(name2) {
    return this._keeped[name2];
  }
  getItem(name2) {
    return this._pageds[name2];
  }
  remove(name2) {
    delete this._pageds[name2];
  }
  alignable = (name2) => {
    const out2 = Array();
    const paged = this._pageds[name2];
    if (!paged) return [];
    for (let key in this._pageds) {
      if (key == name2) continue;
      if (this._pageds[key].lastpage == paged.lastpage) {
        out2.push(key);
      }
    }
    return out2;
  };
  exists(key) {
    return !!this._pageds[key];
  }
  get first() {
    return this.names.length ? this.names[0] : "";
  }
  get keeped() {
    let keeped = 0;
    for (let name2 in this._keeped) {
      if (this._keeped[name2]) keeped++;
    }
    return keeped;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ALWAYS_EMPTY,
  AUTO_TILL_END,
  Action,
  BRANCH_SEP,
  BYTE1_MAX,
  BYTE2_MAX,
  BYTE2_START,
  BYTE3_MAX,
  BYTE3_START,
  BYTE4_MAX,
  BYTE4_START,
  BYTE5_MAX,
  BYTE5_START,
  BYTE_MAX,
  CJKRangeName,
  CJKRanges,
  CJKWordBegin_Reg,
  CJKWordEnd_Reg,
  CJKWord_Reg,
  COLUMNFIELDSEP,
  CodeStart,
  Column,
  CompiledFile,
  Compiler,
  DOMFromString,
  EXCERPTACTIONPREFIX,
  EXCERPT_PAGESIZE,
  Element,
  FROMTILL,
  FolioText,
  Formula,
  GUIDEACTIONPREFIX,
  HTMLTAG_REGEX_G,
  Indexer,
  Inverted,
  JSONParse,
  JSONify,
  LEMMA_DELIMITER,
  LVA,
  LineBase,
  LineBaser,
  MAXDIVISIONLINE,
  MAXFOLIOCHAR,
  MAXFOLIOLINE,
  MAXPHRASELEN,
  MAX_PHRASE,
  MAX_VERROR,
  MIN_ABRIDGE,
  OFFTAG_ATTRS,
  OFFTAG_COMPACT_ATTR,
  OFFTAG_COMPACT_ID,
  OFFTAG_LEADBYTE,
  OFFTAG_NAME_ATTR,
  OFFTAG_REGEX,
  OFFTAG_REGEX_G,
  OFFTAG_REGEX_SPLIT,
  OFFTAG_REGEX_TOKENIZE,
  OWNERDRAWPREFIX,
  Offtext,
  PGDEXT,
  PTK_ACTION_FROMTILL,
  PTK_FROMTILL,
  Paged,
  PagedGroup,
  Pitaka,
  PtkFromPagedGroup,
  QSTRING_REGEX_G,
  QUOTEPAT,
  QUOTEPREFIX,
  REGEX_CJK_PHRASE,
  REGEX_IRE,
  REG_PALI_SPACE_SPLIT,
  RemainingErrata,
  RemoteZipStore,
  RenderUnit,
  SA_MATCH_ANY,
  SA_MATCH_END,
  SA_MATCH_MIDDLE,
  SA_MATCH_START,
  SEP2DITEM,
  SEPARATOR2D,
  Sax,
  SickCauses,
  SickFactors,
  SickLocations,
  SickSigns,
  StringArray,
  StringByteLength,
  TDenList,
  TITLECOUNTACTIONPREFIX,
  TOFIND_MAXLEN,
  TOKENIZE_REGEX,
  TableOfContent,
  TaishoJuanFromPage,
  TaishoPageFromJuan,
  TaishoSutraCode,
  TaishoVolSutra,
  Token,
  TokenType,
  URL_REGEX,
  UnicodeBlock,
  VALIDPUNCS,
  VError,
  Word_tailspace_Reg,
  ZipStore,
  abridgeRenderUnits,
  addressFromUrl,
  addtag_x,
  addtag_y,
  afterPN,
  alignParagraph,
  alignParagraphLinecount,
  alignable,
  aligncrlf,
  alphabetically,
  alphabetically0,
  alphabetically1,
  alphabetically2,
  arrDelta,
  arraydiff,
  autoAlign,
  autoBreak,
  autoChineseBreak,
  autoENBreak,
  beforePN,
  breakByPin,
  breakChineseSentence,
  breakLine,
  breakSentence,
  brokenTransclusions,
  bsearch,
  bsearchGetter,
  bsearchNumber,
  buildTocTag,
  buildYToc,
  caesura,
  calApprox,
  calOriginalOffset,
  captionOf,
  captionOfPage,
  chineseDigit,
  cjkPhrases,
  cjkSplitPuncs,
  closeBracketOf,
  codePointLength,
  columnTextByKey,
  combineHeaders,
  compareText,
  compoundSimilarity,
  countFolioChar,
  countMembers,
  createAction,
  createBrowserDownload,
  createField,
  createNestingAction,
  cssSkeleton,
  debounce,
  decodeFactor,
  dedup,
  deepReadDir,
  depthOfId,
  diffBreak,
  diffList,
  diffParanum,
  eatbracket,
  eatofftag,
  enableAccelon23Features,
  enableFeature,
  enableFeatures,
  enableFootnoteFeature,
  encodeFactor,
  encodeFactors,
  ensureArrayLength,
  ensureChunkHasPN,
  ensurefirstLineHasPN,
  entity2unicode,
  entriesOfKey,
  enumBases,
  enumCJKRangeNames,
  enumEntries,
  errorMessage,
  escapeHTML,
  escapePackedStr,
  escapeStrWithQuote,
  escapeTemplateString,
  extractAuthor,
  extractBook,
  extractChineseNumber,
  extractIDS,
  extractJSON,
  extractObject,
  extractPuncPos,
  factorizeText,
  fetchAddress,
  fetchAddressExtra,
  fetchFile,
  fetchTag,
  filesFromPattern,
  fillGap,
  findClosestTag,
  folioPosFromAddress,
  forEachUTF32,
  foreignNumber,
  fromBase26,
  fromCBETA,
  fromChineseNumber,
  fromObj,
  getAnyColumnText,
  getApprox,
  getBookColumnText,
  getCJKRange,
  getColumnText,
  getCounter,
  getFactors,
  getInserts,
  getMultiStateFilters,
  getOfftextLineClass,
  getOrthograph,
  getParallelLines,
  getPostings,
  getRenderUnitClasses,
  getSliceText,
  getSpeed,
  getSutraInfo,
  getTagById,
  getTagFields,
  getWordInfo,
  gini,
  glob,
  groupArr,
  groupNumArray,
  guessEntry,
  guidedBreakLines,
  hasLang,
  headerWithNumber,
  hitsOfLine,
  hookFromParaLines,
  humanBytes,
  humanChoice,
  inMemory,
  incObj,
  indexOfs,
  innertext,
  insertBuf,
  insertText,
  intersect,
  intersects,
  isCJKChar,
  isChineseChapter,
  isChineseNumber,
  isIASTToken,
  isPunc,
  isSurrogate,
  isWordChar,
  jsonify,
  keyOfEntry,
  langSplitChar,
  length_alphabetically,
  length_alphabetically0,
  length_alphabetically1,
  lexiconIntersect,
  lexiconUnion,
  lexiconXor,
  lineBreaksOffset,
  linePN,
  listExcerpts,
  listwords,
  loadPostings,
  loadPostingsSync,
  loadScript,
  loadUrl,
  lookupKeyColumn,
  makeAddress,
  makeChunkAddress,
  makeElementId,
  makeExcerptAddress,
  makeHook,
  makeInMemoryPtk,
  makeLineBaser,
  makePitakaZip,
  maxlen1,
  maxlen2,
  maxlen3,
  meta_cbeta,
  meta_cm,
  meta_cs,
  meta_sc,
  moveFootnoteToTail,
  nearestTag,
  nextColumn,
  nodefs,
  normalizeQianziwen,
  offTagType,
  onChunkCaption,
  onClose,
  onLineText,
  onOfftext,
  onOpen,
  onTextWithInserts,
  openComOption,
  openInMemoryPtk,
  openPtk,
  openPtkOption,
  openSourceOption,
  pack1,
  pack2,
  pack3,
  pack3_2d,
  packBoolean,
  packInt,
  packInt2d,
  packIntDelta,
  packIntDelta2d,
  packOfftagAttrs,
  packStrings,
  pageBookLineOfAnchor,
  pageFromPtk,
  pagejsonpfn,
  paragraphSimilarity,
  parallelWithDiff,
  parseAction,
  parseAddress,
  parseAttributes,
  parseChoice,
  parseCriteria,
  parseHook,
  parseJsonp,
  parseOfftag,
  parseOfftext,
  parsePageBookLine,
  parseQianziwen,
  parseQuery,
  parseTransclusion,
  parseXMLAttribute,
  patchBuf,
  peelXML,
  phraseQuery,
  phraseQuerySync,
  pinNotes,
  pinPos,
  plAnd,
  plContain,
  plCount,
  plFind,
  plRanges,
  plTrim,
  poolAdd,
  poolDel,
  poolGet,
  poolGetAll,
  poolHas,
  poolParallelPitakas,
  posBackwardPin,
  posPin,
  predefines,
  ptkFromString,
  ptk_version,
  pulse,
  qianziwen,
  queryTagFields,
  rangeOfAddress,
  rangeOfElementId,
  readTextContent,
  readTextLines,
  regPtkName,
  removeBold,
  removeBracket,
  removeHeader,
  removePunc,
  removeSentenceBreak,
  removeSubPara,
  removeSubstring,
  renderOfftext,
  replaceAuthor,
  replaceBook,
  replaceZhuyin,
  resetCounter,
  runCriterion,
  runFilter,
  runTest,
  sameAddress,
  saveComOption,
  savePtkOption,
  saveSourceOption,
  scanText,
  scoreLine,
  searchSentence,
  searchSentenceSync,
  sentenceFromRange,
  sentencePosfromSelection,
  sentenceRatio,
  sentencize,
  serializeBackTransclusion,
  serializeToc,
  setPtkFileLength,
  showMemory,
  similarFactors,
  similarSentence,
  similarSet,
  sleep,
  sortNumberArray,
  sortObj,
  sourceType,
  spacify,
  splitUTF32,
  splitUTF32Char,
  statStrIntobject,
  storeZip,
  string2codePoint,
  stringifyChoice,
  stripLinesNote,
  stripOfftag,
  styledNumber,
  substrUTF32,
  supprtedBrowser,
  symtom,
  tagAtAction,
  tagCount,
  tagInRange,
  tidyFolioText,
  toBase26,
  toCBETA,
  toChineseNumber,
  toFolioText,
  toObj,
  toParagraphs,
  toPinyin,
  toVerticalPunc,
  tokenize,
  tokenizeIAST,
  tokenizeIASTPunc,
  tokenizeOfftext,
  tounge,
  translatePointer,
  trimPunc,
  union,
  unique,
  unique0,
  unique1,
  unitize,
  unloadScript,
  unpack1,
  unpack2,
  unpack3,
  unpack3_2d,
  unpackBoolean,
  unpackInt,
  unpackInt2d,
  unpackIntDelta,
  unpackIntDelta2d,
  unpackStrings,
  updateOfftext,
  updateUrl,
  urlPrefix,
  usePtk,
  validId,
  validPtkName,
  validateTofind,
  validate_z,
  verifyPermission,
  walkDOM,
  walkDOMOfftext,
  writeChanged,
  writeIncObj,
  writePitaka,
  xorStrings,
  xpath,
  yidarrInRange
});
