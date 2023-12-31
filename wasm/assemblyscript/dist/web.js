var ASSEMBLYSCRIPT_VERSION = "0.0.0";
var ASSEMBLYSCRIPT_IMPORTMAP = {
  "imports": {
    "assemblyscript": "./assemblyscript.js",
    "assemblyscript/asc": "./asc.js",
    "binaryen": "https://cdn.jsdelivr.net/npm/binaryen@112.0.0-nightly.20230411/index.js",
    "long": "https://cdn.jsdelivr.net/npm/long@5.2.1/index.js"
  }
};
if (!document.currentScript.src.includes("noinstall")) {
  let elem = document.createElement("script");
  elem.type = "importmap";
  elem.text = JSON.stringify(ASSEMBLYSCRIPT_IMPORTMAP);
  document.head.appendChild(elem);
}
if (!document.currentScript.src.includes("noshim")) {
  let elem = document.createElement("script");
  elem.async = true;
  elem.src = "https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.wasm.min.js";
  document.head.appendChild(elem);
}
