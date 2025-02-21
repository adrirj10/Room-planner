// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lC3Ec":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe27fe52f5c48570";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8ZNvh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _interactjs = require("interactjs");
var _interactjsDefault = parcelHelpers.interopDefault(_interactjs);
var _tippyJs = require("tippy.js");
var _tippyJsDefault = parcelHelpers.interopDefault(_tippyJs);
var _tippyCss = require("tippy.js/dist/tippy.css");
document.addEventListener('DOMContentLoaded', ()=>{
    const lienzo = document.getElementById('lienzo');
    const botonCrear = document.getElementById('crear-rectangulo');
    const toggleEliminar = document.getElementById('modo-eliminar');
    toggleEliminar.addEventListener('click', (event)=>{
        event.preventDefault();
        const botonesEliminar = document.querySelectorAll('.boton-eliminar');
        botonesEliminar.forEach((boton)=>{
            boton.style.display = boton.style.display === 'none' ? 'block' : 'none';
        });
        console.log('Toggle eliminar clicked');
    });
    botonCrear.addEventListener('click', ()=>{
        const ancho = parseInt(document.getElementById('ancho').value);
        const alto = parseInt(document.getElementById('alto').value);
        const color = document.getElementById('color').value;
        if (!ancho || !alto || ancho <= 0 || alto <= 0) {
            alert("Por favor, introduce valores v\xe1lidos para el ancho y el alto.");
            return;
        }
        const rectangulo = document.createElement('div');
        rectangulo.className = 'rectangulo';
        rectangulo.style.width = `${ancho}px`;
        rectangulo.style.height = `${alto}px`;
        rectangulo.style.backgroundColor = color;
        rectangulo.style.left = `${Math.random() * (lienzo.offsetWidth - ancho)}px`;
        rectangulo.style.top = `${Math.random() * (lienzo.offsetHeight - alto)}px`;
        a\u00f1adirBotonEliminar(rectangulo);
        a\u00f1adirTooltip(rectangulo, ancho, alto);
        lienzo.appendChild(rectangulo);
        (0, _interactjsDefault.default)(rectangulo).draggable({
            onmove: dragMoveListener
        }).resizable({
            edges: {
                right: true,
                bottom: true,
                bottomRight: true
            },
            listeners: {
                move (event) {
                    const { target, rect, deltaRect } = event;
                    let x = (parseFloat(target.getAttribute('data-x')) || 0) + deltaRect.left;
                    let y = (parseFloat(target.getAttribute('data-y')) || 0) + deltaRect.top;
                    target.style.width = `${rect.width}px`;
                    target.style.height = `${rect.height}px`;
                    target.style.transform = `translate(${x}px, ${y}px)`;
                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                    if (target._tippy) target._tippy.setContent(`${Math.round(rect.width)} cm x ${Math.round(rect.height)} cm`);
                }
            },
            margin: 5
        });
    });
    function dragMoveListener(event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        target.style.transform = `translate(${x}px, ${y}px)`;
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }
    function a\u00f1adirTooltip(elemento, ancho, alto) {
        (0, _tippyJsDefault.default)(elemento, {
            content: `${ancho} cm x ${alto} cm`,
            placement: 'top',
            arrow: true,
            theme: 'light',
            offset: [
                0,
                5
            ] // Offset the tooltip by a couple of pixels
        });
    }
    function a\u00f1adirBotonEliminar(elemento) {
        const botonEliminar = document.createElement('div');
        botonEliminar.className = 'boton-eliminar';
        botonEliminar.textContent = 'X';
        botonEliminar.style.display = 'none';
        botonEliminar.addEventListener('click', ()=>{
            if (elemento._tippy) elemento._tippy.destroy();
            elemento.remove();
            console.log("Rect\xe1ngulo eliminado");
        });
        elemento.appendChild(botonEliminar);
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","interactjs":"fpa6e","tippy.js":"ccpCS","tippy.js/dist/tippy.css":"2hEyg"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fpa6e":[function(require,module,exports,__globalThis) {
/* interact.js 1.10.27 | https://raw.github.com/taye/interact.js/main/LICENSE */ !function(t1, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    function t1(t1, e) {
        var n = Object.keys(t1);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t1);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t1, e).enumerable;
            })), n.push.apply(n, r);
        }
        return n;
    }
    function e(e) {
        for(var n = 1; n < arguments.length; n++){
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2 ? t1(Object(r), !0).forEach(function(t1) {
                a(e, t1, r[t1]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t1(Object(r)).forEach(function(t1) {
                Object.defineProperty(e, t1, Object.getOwnPropertyDescriptor(r, t1));
            });
        }
        return e;
    }
    function n(t1) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t1) {
            return typeof t1;
        } : function(t1) {
            return t1 && "function" == typeof Symbol && t1.constructor === Symbol && t1 !== Symbol.prototype ? "symbol" : typeof t1;
        }, n(t1);
    }
    function r(t1, e) {
        if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t1, e) {
        for(var n = 0; n < e.length; n++){
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t1, d(r.key), r);
        }
    }
    function o(t1, e, n) {
        return e && i(t1.prototype, e), n && i(t1, n), Object.defineProperty(t1, "prototype", {
            writable: !1
        }), t1;
    }
    function a(t1, e, n) {
        return (e = d(e)) in t1 ? Object.defineProperty(t1, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t1[e] = n, t1;
    }
    function s(t1, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t1.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t1,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t1, "prototype", {
            writable: !1
        }), e && l(t1, e);
    }
    function c(t1) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t1) {
            return t1.__proto__ || Object.getPrototypeOf(t1);
        }, c(t1);
    }
    function l(t1, e) {
        return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t1, e) {
            return t1.__proto__ = e, t1;
        }, l(t1, e);
    }
    function u(t1) {
        if (void 0 === t1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t1;
    }
    function p(t1) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (t1) {
                return !1;
            }
        }();
        return function() {
            var n, r = c(t1);
            if (e) {
                var i = c(this).constructor;
                n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return function(t1, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return u(t1);
            }(this, n);
        };
    }
    function f() {
        return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t1, e, n) {
            var r = function(t1, e) {
                for(; !Object.prototype.hasOwnProperty.call(t1, e) && null !== (t1 = c(t1)););
                return t1;
            }(t1, e);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(arguments.length < 3 ? t1 : n) : i.value;
            }
        }, f.apply(this, arguments);
    }
    function d(t1) {
        var e = function(t1, e) {
            if ("object" != typeof t1 || null === t1) return t1;
            var n = t1[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(t1, e || "default");
                if ("object" != typeof r) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t1);
        }(t1, "string");
        return "symbol" == typeof e ? e : e + "";
    }
    var h = function(t1) {
        return !(!t1 || !t1.Window) && t1 instanceof t1.Window;
    }, v = void 0, g = void 0;
    function m(t1) {
        v = t1;
        var e = t1.document.createTextNode("");
        e.ownerDocument !== t1.document && "function" == typeof t1.wrap && t1.wrap(e) === e && (t1 = t1.wrap(t1)), g = t1;
    }
    function y(t1) {
        return h(t1) ? t1 : (t1.ownerDocument || t1).defaultView || g.window;
    }
    "undefined" != typeof window && window && m(window);
    var b = function(t1) {
        return !!t1 && "object" === n(t1);
    }, x = function(t1) {
        return "function" == typeof t1;
    }, w = {
        window: function(t1) {
            return t1 === g || h(t1);
        },
        docFrag: function(t1) {
            return b(t1) && 11 === t1.nodeType;
        },
        object: b,
        func: x,
        number: function(t1) {
            return "number" == typeof t1;
        },
        bool: function(t1) {
            return "boolean" == typeof t1;
        },
        string: function(t1) {
            return "string" == typeof t1;
        },
        element: function(t1) {
            if (!t1 || "object" !== n(t1)) return !1;
            var e = y(t1) || g;
            return /object|function/.test("undefined" == typeof Element ? "undefined" : n(Element)) ? t1 instanceof Element || t1 instanceof e.Element : 1 === t1.nodeType && "string" == typeof t1.nodeName;
        },
        plainObject: function(t1) {
            return b(t1) && !!t1.constructor && /function Object\b/.test(t1.constructor.toString());
        },
        array: function(t1) {
            return b(t1) && void 0 !== t1.length && x(t1.splice);
        }
    };
    function E(t1) {
        var e = t1.interaction;
        if ("drag" === e.prepared.name) {
            var n = e.prepared.axis;
            "x" === n ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : "y" === n && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
        }
    }
    function T(t1) {
        var e = t1.iEvent, n = t1.interaction;
        if ("drag" === n.prepared.name) {
            var r = n.prepared.axis;
            if ("x" === r || "y" === r) {
                var i = "x" === r ? "y" : "x";
                e.page[i] = n.coords.start.page[i], e.client[i] = n.coords.start.client[i], e.delta[i] = 0;
            }
        }
    }
    var S = {
        id: "actions/drag",
        install: function(t1) {
            var e = t1.actions, n = t1.Interactable, r = t1.defaults;
            n.prototype.draggable = S.draggable, e.map.drag = S, e.methodDict.drag = "draggable", r.actions.drag = S.defaults;
        },
        listeners: {
            "interactions:before-action-move": E,
            "interactions:action-resume": E,
            "interactions:action-move": T,
            "auto-start:check": function(t1) {
                var e = t1.interaction, n = t1.interactable, r = t1.buttons, i = n.options.drag;
                if (i && i.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || 0 != (r & n.options.drag.mouseButtons))) return t1.action = {
                    name: "drag",
                    axis: "start" === i.lockAxis ? i.startAxis : i.lockAxis
                }, !1;
            }
        },
        draggable: function(t1) {
            return w.object(t1) ? (this.options.drag.enabled = !1 !== t1.enabled, this.setPerAction("drag", t1), this.setOnEvents("drag", t1), /^(xy|x|y|start)$/.test(t1.lockAxis) && (this.options.drag.lockAxis = t1.lockAxis), /^(xy|x|y)$/.test(t1.startAxis) && (this.options.drag.startAxis = t1.startAxis), this) : w.bool(t1) ? (this.options.drag.enabled = t1, this) : this.options.drag;
        },
        beforeMove: E,
        move: T,
        defaults: {
            startAxis: "xy",
            lockAxis: "xy"
        },
        getCursor: function() {
            return "move";
        },
        filterEventType: function(t1) {
            return 0 === t1.search("drag");
        }
    }, _ = S, P = {
        init: function(t1) {
            var e = t1;
            P.document = e.document, P.DocumentFragment = e.DocumentFragment || O, P.SVGElement = e.SVGElement || O, P.SVGSVGElement = e.SVGSVGElement || O, P.SVGElementInstance = e.SVGElementInstance || O, P.Element = e.Element || O, P.HTMLElement = e.HTMLElement || P.Element, P.Event = e.Event, P.Touch = e.Touch || O, P.PointerEvent = e.PointerEvent || e.MSPointerEvent;
        },
        document: null,
        DocumentFragment: null,
        SVGElement: null,
        SVGSVGElement: null,
        SVGElementInstance: null,
        Element: null,
        HTMLElement: null,
        Event: null,
        Touch: null,
        PointerEvent: null
    };
    function O() {}
    var k = P;
    var D = {
        init: function(t1) {
            var e = k.Element, n = t1.navigator || {};
            D.supportsTouch = "ontouchstart" in t1 || w.func(t1.DocumentTouch) && k.document instanceof t1.DocumentTouch, D.supportsPointerEvent = !1 !== n.pointerEnabled && !!k.PointerEvent, D.isIOS = /iP(hone|od|ad)/.test(n.platform), D.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), D.isIe9 = /MSIE 9/.test(n.userAgent), D.isOperaMobile = "Opera" === n.appName && D.supportsTouch && /Presto/.test(n.userAgent), D.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", D.pEventTypes = D.supportsPointerEvent ? k.PointerEvent === t1.MSPointerEvent ? {
                up: "MSPointerUp",
                down: "MSPointerDown",
                over: "mouseover",
                out: "mouseout",
                move: "MSPointerMove",
                cancel: "MSPointerCancel"
            } : {
                up: "pointerup",
                down: "pointerdown",
                over: "pointerover",
                out: "pointerout",
                move: "pointermove",
                cancel: "pointercancel"
            } : null, D.wheelEvent = k.document && "onmousewheel" in k.document ? "mousewheel" : "wheel";
        },
        supportsTouch: null,
        supportsPointerEvent: null,
        isIOS7: null,
        isIOS: null,
        isIe9: null,
        isOperaMobile: null,
        prefixedMatchesSelector: null,
        pEventTypes: null,
        wheelEvent: null
    };
    var I = D;
    function M(t1, e) {
        if (t1.contains) return t1.contains(e);
        for(; e;){
            if (e === t1) return !0;
            e = e.parentNode;
        }
        return !1;
    }
    function z(t1, e) {
        for(; w.element(t1);){
            if (R(t1, e)) return t1;
            t1 = A(t1);
        }
        return null;
    }
    function A(t1) {
        var e = t1.parentNode;
        if (w.docFrag(e)) {
            for(; (e = e.host) && w.docFrag(e););
            return e;
        }
        return e;
    }
    function R(t1, e) {
        return g !== v && (e = e.replace(/\/deep\//g, " ")), t1[I.prefixedMatchesSelector](e);
    }
    var C = function(t1) {
        return t1.parentNode || t1.host;
    };
    function j(t1, e) {
        for(var n, r = [], i = t1; (n = C(i)) && i !== e && n !== i.ownerDocument;)r.unshift(i), i = n;
        return r;
    }
    function F(t1, e, n) {
        for(; w.element(t1);){
            if (R(t1, e)) return !0;
            if ((t1 = A(t1)) === n) return R(t1, e);
        }
        return !1;
    }
    function X(t1) {
        return t1.correspondingUseElement || t1;
    }
    function Y(t1) {
        var e = t1 instanceof k.SVGElement ? t1.getBoundingClientRect() : t1.getClientRects()[0];
        return e && {
            left: e.left,
            right: e.right,
            top: e.top,
            bottom: e.bottom,
            width: e.width || e.right - e.left,
            height: e.height || e.bottom - e.top
        };
    }
    function L(t1) {
        var e, n = Y(t1);
        if (!I.isIOS7 && n) {
            var r = {
                x: (e = (e = y(t1)) || g).scrollX || e.document.documentElement.scrollLeft,
                y: e.scrollY || e.document.documentElement.scrollTop
            };
            n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y;
        }
        return n;
    }
    function q(t1) {
        for(var e = []; t1;)e.push(t1), t1 = A(t1);
        return e;
    }
    function B(t1) {
        return !!w.string(t1) && (k.document.querySelector(t1), !0);
    }
    function V(t1, e) {
        for(var n in e)t1[n] = e[n];
        return t1;
    }
    function W(t1, e, n) {
        return "parent" === t1 ? A(n) : "self" === t1 ? e.getRect(n) : z(n, t1);
    }
    function G(t1, e, n, r) {
        var i = t1;
        return w.string(i) ? i = W(i, e, n) : w.func(i) && (i = i.apply(void 0, r)), w.element(i) && (i = L(i)), i;
    }
    function N(t1) {
        return t1 && {
            x: "x" in t1 ? t1.x : t1.left,
            y: "y" in t1 ? t1.y : t1.top
        };
    }
    function U(t1) {
        return !t1 || "x" in t1 && "y" in t1 || ((t1 = V({}, t1)).x = t1.left || 0, t1.y = t1.top || 0, t1.width = t1.width || (t1.right || 0) - t1.x, t1.height = t1.height || (t1.bottom || 0) - t1.y), t1;
    }
    function H(t1, e, n) {
        t1.left && (e.left += n.x), t1.right && (e.right += n.x), t1.top && (e.top += n.y), t1.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
    }
    function K(t1, e, n) {
        var r = n && t1.options[n];
        return N(G(r && r.origin || t1.options.origin, t1, e, [
            t1 && e
        ])) || {
            x: 0,
            y: 0
        };
    }
    function $(t1, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t1) {
            return !0;
        }, r = arguments.length > 3 ? arguments[3] : void 0;
        if (r = r || {}, w.string(t1) && -1 !== t1.search(" ") && (t1 = J(t1)), w.array(t1)) return t1.forEach(function(t1) {
            return $(t1, e, n, r);
        }), r;
        if (w.object(t1) && (e = t1, t1 = ""), w.func(e) && n(t1)) r[t1] = r[t1] || [], r[t1].push(e);
        else if (w.array(e)) for(var i = 0, o = e; i < o.length; i++){
            var a = o[i];
            $(t1, a, n, r);
        }
        else if (w.object(e)) for(var s in e)$(J(s).map(function(e) {
            return "".concat(t1).concat(e);
        }), e[s], n, r);
        return r;
    }
    function J(t1) {
        return t1.trim().split(/ +/);
    }
    var Q = function(t1, e) {
        return Math.sqrt(t1 * t1 + e * e);
    }, Z = [
        "webkit",
        "moz"
    ];
    function tt(t1, e) {
        t1.__set || (t1.__set = {});
        var n = function(n) {
            if (Z.some(function(t1) {
                return 0 === n.indexOf(t1);
            })) return 1;
            "function" != typeof t1[n] && "__set" !== n && Object.defineProperty(t1, n, {
                get: function() {
                    return n in t1.__set ? t1.__set[n] : t1.__set[n] = e[n];
                },
                set: function(e) {
                    t1.__set[n] = e;
                },
                configurable: !0
            });
        };
        for(var r in e)n(r);
        return t1;
    }
    function et(t1, e) {
        t1.page = t1.page || {}, t1.page.x = e.page.x, t1.page.y = e.page.y, t1.client = t1.client || {}, t1.client.x = e.client.x, t1.client.y = e.client.y, t1.timeStamp = e.timeStamp;
    }
    function nt(t1) {
        t1.page.x = 0, t1.page.y = 0, t1.client.x = 0, t1.client.y = 0;
    }
    function rt(t1) {
        return t1 instanceof k.Event || t1 instanceof k.Touch;
    }
    function it(t1, e, n) {
        return t1 = t1 || "page", (n = n || {}).x = e[t1 + "X"], n.y = e[t1 + "Y"], n;
    }
    function ot(t1, e) {
        return e = e || {
            x: 0,
            y: 0
        }, I.isOperaMobile && rt(t1) ? (it("screen", t1, e), e.x += window.scrollX, e.y += window.scrollY) : it("page", t1, e), e;
    }
    function at(t1) {
        return w.number(t1.pointerId) ? t1.pointerId : t1.identifier;
    }
    function st(t1, e, n) {
        var r = e.length > 1 ? lt(e) : e[0];
        ot(r, t1.page), function(t1, e) {
            e = e || {}, I.isOperaMobile && rt(t1) ? it("screen", t1, e) : it("client", t1, e);
        }(r, t1.client), t1.timeStamp = n;
    }
    function ct(t1) {
        var e = [];
        return w.array(t1) ? (e[0] = t1[0], e[1] = t1[1]) : "touchend" === t1.type ? 1 === t1.touches.length ? (e[0] = t1.touches[0], e[1] = t1.changedTouches[0]) : 0 === t1.touches.length && (e[0] = t1.changedTouches[0], e[1] = t1.changedTouches[1]) : (e[0] = t1.touches[0], e[1] = t1.touches[1]), e;
    }
    function lt(t1) {
        for(var e = {
            pageX: 0,
            pageY: 0,
            clientX: 0,
            clientY: 0,
            screenX: 0,
            screenY: 0
        }, n = 0; n < t1.length; n++){
            var r = t1[n];
            for(var i in e)e[i] += r[i];
        }
        for(var o in e)e[o] /= t1.length;
        return e;
    }
    function ut(t1) {
        if (!t1.length) return null;
        var e = ct(t1), n = Math.min(e[0].pageX, e[1].pageX), r = Math.min(e[0].pageY, e[1].pageY), i = Math.max(e[0].pageX, e[1].pageX), o = Math.max(e[0].pageY, e[1].pageY);
        return {
            x: n,
            y: r,
            left: n,
            top: r,
            right: i,
            bottom: o,
            width: i - n,
            height: o - r
        };
    }
    function pt(t1, e) {
        var n = e + "X", r = e + "Y", i = ct(t1), o = i[0][n] - i[1][n], a = i[0][r] - i[1][r];
        return Q(o, a);
    }
    function ft(t1, e) {
        var n = e + "X", r = e + "Y", i = ct(t1), o = i[1][n] - i[0][n], a = i[1][r] - i[0][r];
        return 180 * Math.atan2(a, o) / Math.PI;
    }
    function dt(t1) {
        return w.string(t1.pointerType) ? t1.pointerType : w.number(t1.pointerType) ? [
            void 0,
            void 0,
            "touch",
            "pen",
            "mouse"
        ][t1.pointerType] : /touch/.test(t1.type || "") || t1 instanceof k.Touch ? "touch" : "mouse";
    }
    function ht(t1) {
        var e = w.func(t1.composedPath) ? t1.composedPath() : t1.path;
        return [
            X(e ? e[0] : t1.target),
            X(t1.currentTarget)
        ];
    }
    var vt = function() {
        function t1(e) {
            r(this, t1), this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = e;
        }
        return o(t1, [
            {
                key: "preventDefault",
                value: function() {}
            },
            {
                key: "stopPropagation",
                value: function() {
                    this.propagationStopped = !0;
                }
            },
            {
                key: "stopImmediatePropagation",
                value: function() {
                    this.immediatePropagationStopped = this.propagationStopped = !0;
                }
            }
        ]), t1;
    }();
    Object.defineProperty(vt.prototype, "interaction", {
        get: function() {
            return this._interaction._proxy;
        },
        set: function() {}
    });
    var gt = function(t1, e) {
        for(var n = 0; n < e.length; n++){
            var r = e[n];
            t1.push(r);
        }
        return t1;
    }, mt = function(t1) {
        return gt([], t1);
    }, yt = function(t1, e) {
        for(var n = 0; n < t1.length; n++)if (e(t1[n], n, t1)) return n;
        return -1;
    }, bt = function(t1, e) {
        return t1[yt(t1, e)];
    }, xt = function(t1) {
        s(n, t1);
        var e = p(n);
        function n(t1, i, o) {
            var a;
            r(this, n), (a = e.call(this, i._interaction)).dropzone = void 0, a.dragEvent = void 0, a.relatedTarget = void 0, a.draggable = void 0, a.propagationStopped = !1, a.immediatePropagationStopped = !1;
            var s = "dragleave" === o ? t1.prev : t1.cur, c = s.element, l = s.dropzone;
            return a.type = o, a.target = c, a.currentTarget = c, a.dropzone = l, a.dragEvent = i, a.relatedTarget = i.target, a.draggable = i.interactable, a.timeStamp = i.timeStamp, a;
        }
        return o(n, [
            {
                key: "reject",
                value: function() {
                    var t1 = this, e = this._interaction.dropState;
                    if ("dropactivate" === this.type || this.dropzone && e.cur.dropzone === this.dropzone && e.cur.element === this.target) {
                        if (e.prev.dropzone = this.dropzone, e.prev.element = this.target, e.rejected = !0, e.events.enter = null, this.stopImmediatePropagation(), "dropactivate" === this.type) {
                            var r = e.activeDrops, i = yt(r, function(e) {
                                var n = e.dropzone, r = e.element;
                                return n === t1.dropzone && r === t1.target;
                            });
                            e.activeDrops.splice(i, 1);
                            var o = new n(e, this.dragEvent, "dropdeactivate");
                            o.dropzone = this.dropzone, o.target = this.target, this.dropzone.fire(o);
                        } else this.dropzone.fire(new n(e, this.dragEvent, "dragleave"));
                    }
                }
            },
            {
                key: "preventDefault",
                value: function() {}
            },
            {
                key: "stopPropagation",
                value: function() {
                    this.propagationStopped = !0;
                }
            },
            {
                key: "stopImmediatePropagation",
                value: function() {
                    this.immediatePropagationStopped = this.propagationStopped = !0;
                }
            }
        ]), n;
    }(vt);
    function wt(t1, e) {
        for(var n = 0, r = t1.slice(); n < r.length; n++){
            var i = r[n], o = i.dropzone, a = i.element;
            e.dropzone = o, e.target = a, o.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1;
        }
    }
    function Et(t1, e) {
        for(var n = function(t1, e) {
            for(var n = [], r = 0, i = t1.interactables.list; r < i.length; r++){
                var o = i[r];
                if (o.options.drop.enabled) {
                    var a = o.options.drop.accept;
                    if (!(w.element(a) && a !== e || w.string(a) && !R(e, a) || w.func(a) && !a({
                        dropzone: o,
                        draggableElement: e
                    }))) for(var s = 0, c = o.getAllElements(); s < c.length; s++){
                        var l = c[s];
                        l !== e && n.push({
                            dropzone: o,
                            element: l,
                            rect: o.getRect(l)
                        });
                    }
                }
            }
            return n;
        }(t1, e), r = 0; r < n.length; r++){
            var i = n[r];
            i.rect = i.dropzone.getRect(i.element);
        }
        return n;
    }
    function Tt(t1, e, n) {
        for(var r = t1.dropState, i = t1.interactable, o = t1.element, a = [], s = 0, c = r.activeDrops; s < c.length; s++){
            var l = c[s], u = l.dropzone, p = l.element, f = l.rect, d = u.dropCheck(e, n, i, o, p, f);
            a.push(d ? p : null);
        }
        var h = function(t1) {
            for(var e, n, r, i = [], o = 0; o < t1.length; o++){
                var a = t1[o], s = t1[e];
                if (a && o !== e) {
                    if (s) {
                        var c = C(a), l = C(s);
                        if (c !== a.ownerDocument) {
                            if (l !== a.ownerDocument) {
                                if (c !== l) {
                                    i = i.length ? i : j(s);
                                    var u = void 0;
                                    if (s instanceof k.HTMLElement && a instanceof k.SVGElement && !(a instanceof k.SVGSVGElement)) {
                                        if (a === l) continue;
                                        u = a.ownerSVGElement;
                                    } else u = a;
                                    for(var p = j(u, s.ownerDocument), f = 0; p[f] && p[f] === i[f];)f++;
                                    var d = [
                                        p[f - 1],
                                        p[f],
                                        i[f]
                                    ];
                                    if (d[0]) for(var h = d[0].lastChild; h;){
                                        if (h === d[1]) {
                                            e = o, i = p;
                                            break;
                                        }
                                        if (h === d[2]) break;
                                        h = h.previousSibling;
                                    }
                                } else r = s, (parseInt(y(n = a).getComputedStyle(n).zIndex, 10) || 0) >= (parseInt(y(r).getComputedStyle(r).zIndex, 10) || 0) && (e = o);
                            } else e = o;
                        }
                    } else e = o;
                }
            }
            return e;
        }(a);
        return r.activeDrops[h] || null;
    }
    function St(t1, e, n) {
        var r = t1.dropState, i = {
            enter: null,
            leave: null,
            activate: null,
            deactivate: null,
            move: null,
            drop: null
        };
        return "dragstart" === n.type && (i.activate = new xt(r, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), "dragend" === n.type && (i.deactivate = new xt(r, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new xt(r, n, "dragleave"), n.dragLeave = i.leave.target = r.prev.element, n.prevDropzone = i.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (i.enter = new xt(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), "dragend" === n.type && r.cur.dropzone && (i.drop = new xt(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), "dragmove" === n.type && r.cur.dropzone && (i.move = new xt(r, n, "dropmove"), n.dropzone = r.cur.dropzone)), i;
    }
    function _t(t1, e) {
        var n = t1.dropState, r = n.activeDrops, i = n.cur, o = n.prev;
        e.leave && o.dropzone.fire(e.leave), e.enter && i.dropzone.fire(e.enter), e.move && i.dropzone.fire(e.move), e.drop && i.dropzone.fire(e.drop), e.deactivate && wt(r, e.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
    }
    function Pt(t1, e) {
        var n = t1.interaction, r = t1.iEvent, i = t1.event;
        if ("dragmove" === r.type || "dragend" === r.type) {
            var o = n.dropState;
            e.dynamicDrop && (o.activeDrops = Et(e, n.element));
            var a = r, s = Tt(n, a, i);
            o.rejected = o.rejected && !!s && s.dropzone === o.cur.dropzone && s.element === o.cur.element, o.cur.dropzone = s && s.dropzone, o.cur.element = s && s.element, o.events = St(n, 0, a);
        }
    }
    var Ot = {
        id: "actions/drop",
        install: function(t1) {
            var e = t1.actions, n = t1.interactStatic, r = t1.Interactable, i = t1.defaults;
            t1.usePlugin(_), r.prototype.dropzone = function(t1) {
                return function(t1, e) {
                    if (w.object(e)) {
                        if (t1.options.drop.enabled = !1 !== e.enabled, e.listeners) {
                            var n = $(e.listeners), r = Object.keys(n).reduce(function(t1, e) {
                                return t1[/^(enter|leave)/.test(e) ? "drag".concat(e) : /^(activate|deactivate|move)/.test(e) ? "drop".concat(e) : e] = n[e], t1;
                            }, {}), i = t1.options.drop.listeners;
                            i && t1.off(i), t1.on(r), t1.options.drop.listeners = r;
                        }
                        return w.func(e.ondrop) && t1.on("drop", e.ondrop), w.func(e.ondropactivate) && t1.on("dropactivate", e.ondropactivate), w.func(e.ondropdeactivate) && t1.on("dropdeactivate", e.ondropdeactivate), w.func(e.ondragenter) && t1.on("dragenter", e.ondragenter), w.func(e.ondragleave) && t1.on("dragleave", e.ondragleave), w.func(e.ondropmove) && t1.on("dropmove", e.ondropmove), /^(pointer|center)$/.test(e.overlap) ? t1.options.drop.overlap = e.overlap : w.number(e.overlap) && (t1.options.drop.overlap = Math.max(Math.min(1, e.overlap), 0)), "accept" in e && (t1.options.drop.accept = e.accept), "checker" in e && (t1.options.drop.checker = e.checker), t1;
                    }
                    if (w.bool(e)) return t1.options.drop.enabled = e, t1;
                    return t1.options.drop;
                }(this, t1);
            }, r.prototype.dropCheck = function(t1, e, n, r, i, o) {
                return function(t1, e, n, r, i, o, a) {
                    var s = !1;
                    if (!(a = a || t1.getRect(o))) return !!t1.options.drop.checker && t1.options.drop.checker(e, n, s, t1, o, r, i);
                    var c = t1.options.drop.overlap;
                    if ("pointer" === c) {
                        var l = K(r, i, "drag"), u = ot(e);
                        u.x += l.x, u.y += l.y;
                        var p = u.x > a.left && u.x < a.right, f = u.y > a.top && u.y < a.bottom;
                        s = p && f;
                    }
                    var d = r.getRect(i);
                    if (d && "center" === c) {
                        var h = d.left + d.width / 2, v = d.top + d.height / 2;
                        s = h >= a.left && h <= a.right && v >= a.top && v <= a.bottom;
                    }
                    if (d && w.number(c)) s = Math.max(0, Math.min(a.right, d.right) - Math.max(a.left, d.left)) * Math.max(0, Math.min(a.bottom, d.bottom) - Math.max(a.top, d.top)) / (d.width * d.height) >= c;
                    t1.options.drop.checker && (s = t1.options.drop.checker(e, n, s, t1, o, r, i));
                    return s;
                }(this, t1, e, n, r, i, o);
            }, n.dynamicDrop = function(e) {
                return w.bool(e) ? (t1.dynamicDrop = e, n) : t1.dynamicDrop;
            }, V(e.phaselessTypes, {
                dragenter: !0,
                dragleave: !0,
                dropactivate: !0,
                dropdeactivate: !0,
                dropmove: !0,
                drop: !0
            }), e.methodDict.drop = "dropzone", t1.dynamicDrop = !1, i.actions.drop = Ot.defaults;
        },
        listeners: {
            "interactions:before-action-start": function(t1) {
                var e = t1.interaction;
                "drag" === e.prepared.name && (e.dropState = {
                    cur: {
                        dropzone: null,
                        element: null
                    },
                    prev: {
                        dropzone: null,
                        element: null
                    },
                    rejected: null,
                    events: null,
                    activeDrops: []
                });
            },
            "interactions:after-action-start": function(t1, e) {
                var n = t1.interaction, r = (t1.event, t1.iEvent);
                if ("drag" === n.prepared.name) {
                    var i = n.dropState;
                    i.activeDrops = [], i.events = {}, i.activeDrops = Et(e, n.element), i.events = St(n, 0, r), i.events.activate && (wt(i.activeDrops, i.events.activate), e.fire("actions/drop:start", {
                        interaction: n,
                        dragEvent: r
                    }));
                }
            },
            "interactions:action-move": Pt,
            "interactions:after-action-move": function(t1, e) {
                var n = t1.interaction, r = t1.iEvent;
                if ("drag" === n.prepared.name) {
                    var i = n.dropState;
                    _t(n, i.events), e.fire("actions/drop:move", {
                        interaction: n,
                        dragEvent: r
                    }), i.events = {};
                }
            },
            "interactions:action-end": function(t1, e) {
                if ("drag" === t1.interaction.prepared.name) {
                    var n = t1.interaction, r = t1.iEvent;
                    Pt(t1, e), _t(n, n.dropState.events), e.fire("actions/drop:end", {
                        interaction: n,
                        dragEvent: r
                    });
                }
            },
            "interactions:stop": function(t1) {
                var e = t1.interaction;
                if ("drag" === e.prepared.name) {
                    var n = e.dropState;
                    n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1);
                }
            }
        },
        getActiveDrops: Et,
        getDrop: Tt,
        getDropEvents: St,
        fireDropEvents: _t,
        filterEventType: function(t1) {
            return 0 === t1.search("drag") || 0 === t1.search("drop");
        },
        defaults: {
            enabled: !1,
            accept: null,
            overlap: "pointer"
        }
    }, kt = Ot;
    function Dt(t1) {
        var e = t1.interaction, n = t1.iEvent, r = t1.phase;
        if ("gesture" === e.prepared.name) {
            var i = e.pointers.map(function(t1) {
                return t1.pointer;
            }), o = "start" === r, a = "end" === r, s = e.interactable.options.deltaSource;
            if (n.touches = [
                i[0],
                i[1]
            ], o) n.distance = pt(i, s), n.box = ut(i), n.scale = 1, n.ds = 0, n.angle = ft(i, s), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle;
            else if (a || e.pointers.length < 2) {
                var c = e.prevEvent;
                n.distance = c.distance, n.box = c.box, n.scale = c.scale, n.ds = 0, n.angle = c.angle, n.da = 0;
            } else n.distance = pt(i, s), n.box = ut(i), n.scale = n.distance / e.gesture.startDistance, n.angle = ft(i, s), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
            e.gesture.distance = n.distance, e.gesture.angle = n.angle, w.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale);
        }
    }
    var It = {
        id: "actions/gesture",
        before: [
            "actions/drag",
            "actions/resize"
        ],
        install: function(t1) {
            var e = t1.actions, n = t1.Interactable, r = t1.defaults;
            n.prototype.gesturable = function(t1) {
                return w.object(t1) ? (this.options.gesture.enabled = !1 !== t1.enabled, this.setPerAction("gesture", t1), this.setOnEvents("gesture", t1), this) : w.bool(t1) ? (this.options.gesture.enabled = t1, this) : this.options.gesture;
            }, e.map.gesture = It, e.methodDict.gesture = "gesturable", r.actions.gesture = It.defaults;
        },
        listeners: {
            "interactions:action-start": Dt,
            "interactions:action-move": Dt,
            "interactions:action-end": Dt,
            "interactions:new": function(t1) {
                t1.interaction.gesture = {
                    angle: 0,
                    distance: 0,
                    scale: 1,
                    startAngle: 0,
                    startDistance: 0
                };
            },
            "auto-start:check": function(t1) {
                if (!(t1.interaction.pointers.length < 2)) {
                    var e = t1.interactable.options.gesture;
                    if (e && e.enabled) return t1.action = {
                        name: "gesture"
                    }, !1;
                }
            }
        },
        defaults: {},
        getCursor: function() {
            return "";
        },
        filterEventType: function(t1) {
            return 0 === t1.search("gesture");
        }
    }, Mt = It;
    function zt(t1, e, n, r, i, o, a) {
        if (!e) return !1;
        if (!0 === e) {
            var s = w.number(o.width) ? o.width : o.right - o.left, c = w.number(o.height) ? o.height : o.bottom - o.top;
            if (a = Math.min(a, Math.abs(("left" === t1 || "right" === t1 ? s : c) / 2)), s < 0 && ("left" === t1 ? t1 = "right" : "right" === t1 && (t1 = "left")), c < 0 && ("top" === t1 ? t1 = "bottom" : "bottom" === t1 && (t1 = "top")), "left" === t1) {
                var l = s >= 0 ? o.left : o.right;
                return n.x < l + a;
            }
            if ("top" === t1) {
                var u = c >= 0 ? o.top : o.bottom;
                return n.y < u + a;
            }
            if ("right" === t1) return n.x > (s >= 0 ? o.right : o.left) - a;
            if ("bottom" === t1) return n.y > (c >= 0 ? o.bottom : o.top) - a;
        }
        return !!w.element(r) && (w.element(e) ? e === r : F(r, e, i));
    }
    function At(t1) {
        var e = t1.iEvent, n = t1.interaction;
        if ("resize" === n.prepared.name && n.resizeAxes) {
            var r = e;
            n.interactable.options.resize.square ? ("y" === n.resizeAxes ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, "x" === n.resizeAxes ? r.delta.y = 0 : "y" === n.resizeAxes && (r.delta.x = 0));
        }
    }
    var Rt, Ct, jt = {
        id: "actions/resize",
        before: [
            "actions/drag"
        ],
        install: function(t1) {
            var e = t1.actions, n = t1.browser, r = t1.Interactable, i = t1.defaults;
            jt.cursors = function(t1) {
                return t1.isIe9 ? {
                    x: "e-resize",
                    y: "s-resize",
                    xy: "se-resize",
                    top: "n-resize",
                    left: "w-resize",
                    bottom: "s-resize",
                    right: "e-resize",
                    topleft: "se-resize",
                    bottomright: "se-resize",
                    topright: "ne-resize",
                    bottomleft: "ne-resize"
                } : {
                    x: "ew-resize",
                    y: "ns-resize",
                    xy: "nwse-resize",
                    top: "ns-resize",
                    left: "ew-resize",
                    bottom: "ns-resize",
                    right: "ew-resize",
                    topleft: "nwse-resize",
                    bottomright: "nwse-resize",
                    topright: "nesw-resize",
                    bottomleft: "nesw-resize"
                };
            }(n), jt.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function(e) {
                return function(t1, e, n) {
                    if (w.object(e)) return t1.options.resize.enabled = !1 !== e.enabled, t1.setPerAction("resize", e), t1.setOnEvents("resize", e), w.string(e.axis) && /^x$|^y$|^xy$/.test(e.axis) ? t1.options.resize.axis = e.axis : null === e.axis && (t1.options.resize.axis = n.defaults.actions.resize.axis), w.bool(e.preserveAspectRatio) ? t1.options.resize.preserveAspectRatio = e.preserveAspectRatio : w.bool(e.square) && (t1.options.resize.square = e.square), t1;
                    if (w.bool(e)) return t1.options.resize.enabled = e, t1;
                    return t1.options.resize;
                }(this, e, t1);
            }, e.map.resize = jt, e.methodDict.resize = "resizable", i.actions.resize = jt.defaults;
        },
        listeners: {
            "interactions:new": function(t1) {
                t1.interaction.resizeAxes = "xy";
            },
            "interactions:action-start": function(t1) {
                !function(t1) {
                    var e = t1.iEvent, n = t1.interaction;
                    if ("resize" === n.prepared.name && n.prepared.edges) {
                        var r = e, i = n.rect;
                        n._rects = {
                            start: V({}, i),
                            corrected: V({}, i),
                            previous: V({}, i),
                            delta: {
                                left: 0,
                                right: 0,
                                width: 0,
                                top: 0,
                                bottom: 0,
                                height: 0
                            }
                        }, r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
                    }
                }(t1), At(t1);
            },
            "interactions:action-move": function(t1) {
                !function(t1) {
                    var e = t1.iEvent, n = t1.interaction;
                    if ("resize" === n.prepared.name && n.prepared.edges) {
                        var r = e, i = n.interactable.options.resize.invert, o = "reposition" === i || "negate" === i, a = n.rect, s = n._rects, c = s.start, l = s.corrected, u = s.delta, p = s.previous;
                        if (V(p, l), o) {
                            if (V(l, a), "reposition" === i) {
                                if (l.top > l.bottom) {
                                    var f = l.top;
                                    l.top = l.bottom, l.bottom = f;
                                }
                                if (l.left > l.right) {
                                    var d = l.left;
                                    l.left = l.right, l.right = d;
                                }
                            }
                        } else l.top = Math.min(a.top, c.bottom), l.bottom = Math.max(a.bottom, c.top), l.left = Math.min(a.left, c.right), l.right = Math.max(a.right, c.left);
                        for(var h in l.width = l.right - l.left, l.height = l.bottom - l.top, l)u[h] = l[h] - p[h];
                        r.edges = n.prepared.edges, r.rect = l, r.deltaRect = u;
                    }
                }(t1), At(t1);
            },
            "interactions:action-end": function(t1) {
                var e = t1.iEvent, n = t1.interaction;
                if ("resize" === n.prepared.name && n.prepared.edges) {
                    var r = e;
                    r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
                }
            },
            "auto-start:check": function(t1) {
                var e = t1.interaction, n = t1.interactable, r = t1.element, i = t1.rect, o = t1.buttons;
                if (i) {
                    var a = V({}, e.coords.cur.page), s = n.options.resize;
                    if (s && s.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || 0 != (o & s.mouseButtons))) {
                        if (w.object(s.edges)) {
                            var c = {
                                left: !1,
                                right: !1,
                                top: !1,
                                bottom: !1
                            };
                            for(var l in c)c[l] = zt(l, s.edges[l], a, e._latestPointer.eventTarget, r, i, s.margin || jt.defaultMargin);
                            c.left = c.left && !c.right, c.top = c.top && !c.bottom, (c.left || c.right || c.top || c.bottom) && (t1.action = {
                                name: "resize",
                                edges: c
                            });
                        } else {
                            var u = "y" !== s.axis && a.x > i.right - jt.defaultMargin, p = "x" !== s.axis && a.y > i.bottom - jt.defaultMargin;
                            (u || p) && (t1.action = {
                                name: "resize",
                                axes: (u ? "x" : "") + (p ? "y" : "")
                            });
                        }
                        return !t1.action && void 0;
                    }
                }
            }
        },
        defaults: {
            square: !1,
            preserveAspectRatio: !1,
            axis: "xy",
            margin: NaN,
            edges: null,
            invert: "none"
        },
        cursors: null,
        getCursor: function(t1) {
            var e = t1.edges, n = t1.axis, r = t1.name, i = jt.cursors, o = null;
            if (n) o = i[r + n];
            else if (e) {
                for(var a = "", s = 0, c = [
                    "top",
                    "bottom",
                    "left",
                    "right"
                ]; s < c.length; s++){
                    var l = c[s];
                    e[l] && (a += l);
                }
                o = i[a];
            }
            return o;
        },
        filterEventType: function(t1) {
            return 0 === t1.search("resize");
        },
        defaultMargin: null
    }, Ft = jt, Xt = {
        id: "actions",
        install: function(t1) {
            t1.usePlugin(Mt), t1.usePlugin(Ft), t1.usePlugin(_), t1.usePlugin(kt);
        }
    }, Yt = 0;
    var Lt = {
        request: function(t1) {
            return Rt(t1);
        },
        cancel: function(t1) {
            return Ct(t1);
        },
        init: function(t1) {
            if (Rt = t1.requestAnimationFrame, Ct = t1.cancelAnimationFrame, !Rt) for(var e = [
                "ms",
                "moz",
                "webkit",
                "o"
            ], n = 0; n < e.length; n++){
                var r = e[n];
                Rt = t1["".concat(r, "RequestAnimationFrame")], Ct = t1["".concat(r, "CancelAnimationFrame")] || t1["".concat(r, "CancelRequestAnimationFrame")];
            }
            Rt = Rt && Rt.bind(t1), Ct = Ct && Ct.bind(t1), Rt || (Rt = function(e) {
                var n = Date.now(), r = Math.max(0, 16 - (n - Yt)), i = t1.setTimeout(function() {
                    e(n + r);
                }, r);
                return Yt = n + r, i;
            }, Ct = function(t1) {
                return clearTimeout(t1);
            });
        }
    };
    var qt = {
        defaults: {
            enabled: !1,
            margin: 60,
            container: null,
            speed: 300
        },
        now: Date.now,
        interaction: null,
        i: 0,
        x: 0,
        y: 0,
        isScrolling: !1,
        prevTime: 0,
        margin: 0,
        speed: 0,
        start: function(t1) {
            qt.isScrolling = !0, Lt.cancel(qt.i), t1.autoScroll = qt, qt.interaction = t1, qt.prevTime = qt.now(), qt.i = Lt.request(qt.scroll);
        },
        stop: function() {
            qt.isScrolling = !1, qt.interaction && (qt.interaction.autoScroll = null), Lt.cancel(qt.i);
        },
        scroll: function() {
            var t1 = qt.interaction, e = t1.interactable, n = t1.element, r = t1.prepared.name, i = e.options[r].autoScroll, o = Bt(i.container, e, n), a = qt.now(), s = (a - qt.prevTime) / 1e3, c = i.speed * s;
            if (c >= 1) {
                var l = {
                    x: qt.x * c,
                    y: qt.y * c
                };
                if (l.x || l.y) {
                    var u = Vt(o);
                    w.window(o) ? o.scrollBy(l.x, l.y) : o && (o.scrollLeft += l.x, o.scrollTop += l.y);
                    var p = Vt(o), f = {
                        x: p.x - u.x,
                        y: p.y - u.y
                    };
                    (f.x || f.y) && e.fire({
                        type: "autoscroll",
                        target: n,
                        interactable: e,
                        delta: f,
                        interaction: t1,
                        container: o
                    });
                }
                qt.prevTime = a;
            }
            qt.isScrolling && (Lt.cancel(qt.i), qt.i = Lt.request(qt.scroll));
        },
        check: function(t1, e) {
            var n;
            return null == (n = t1.options[e].autoScroll) ? void 0 : n.enabled;
        },
        onInteractionMove: function(t1) {
            var e = t1.interaction, n = t1.pointer;
            if (e.interacting() && qt.check(e.interactable, e.prepared.name)) {
                if (e.simulation) qt.x = qt.y = 0;
                else {
                    var r, i, o, a, s = e.interactable, c = e.element, l = e.prepared.name, u = s.options[l].autoScroll, p = Bt(u.container, s, c);
                    if (w.window(p)) a = n.clientX < qt.margin, r = n.clientY < qt.margin, i = n.clientX > p.innerWidth - qt.margin, o = n.clientY > p.innerHeight - qt.margin;
                    else {
                        var f = Y(p);
                        a = n.clientX < f.left + qt.margin, r = n.clientY < f.top + qt.margin, i = n.clientX > f.right - qt.margin, o = n.clientY > f.bottom - qt.margin;
                    }
                    qt.x = i ? 1 : a ? -1 : 0, qt.y = o ? 1 : r ? -1 : 0, qt.isScrolling || (qt.margin = u.margin, qt.speed = u.speed, qt.start(e));
                }
            }
        }
    };
    function Bt(t1, e, n) {
        return (w.string(t1) ? W(t1, e, n) : t1) || y(n);
    }
    function Vt(t1) {
        return w.window(t1) && (t1 = window.document.body), {
            x: t1.scrollLeft,
            y: t1.scrollTop
        };
    }
    var Wt = {
        id: "auto-scroll",
        install: function(t1) {
            var e = t1.defaults, n = t1.actions;
            t1.autoScroll = qt, qt.now = function() {
                return t1.now();
            }, n.phaselessTypes.autoscroll = !0, e.perAction.autoScroll = qt.defaults;
        },
        listeners: {
            "interactions:new": function(t1) {
                t1.interaction.autoScroll = null;
            },
            "interactions:destroy": function(t1) {
                t1.interaction.autoScroll = null, qt.stop(), qt.interaction && (qt.interaction = null);
            },
            "interactions:stop": qt.stop,
            "interactions:action-move": function(t1) {
                return qt.onInteractionMove(t1);
            }
        }
    }, Gt = Wt;
    function Nt(t1, e) {
        var n = !1;
        return function() {
            return n || (g.console.warn(e), n = !0), t1.apply(this, arguments);
        };
    }
    function Ut(t1, e) {
        return t1.name = e.name, t1.axis = e.axis, t1.edges = e.edges, t1;
    }
    function Ht(t1) {
        return w.bool(t1) ? (this.options.styleCursor = t1, this) : null === t1 ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    function Kt(t1) {
        return w.func(t1) ? (this.options.actionChecker = t1, this) : null === t1 ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    var $t = {
        id: "auto-start/interactableMethods",
        install: function(t1) {
            var e = t1.Interactable;
            e.prototype.getAction = function(e, n, r, i) {
                var o = function(t1, e, n, r, i) {
                    var o = t1.getRect(r), a = e.buttons || ({
                        0: 1,
                        1: 4,
                        3: 8,
                        4: 16
                    })[e.button], s = {
                        action: null,
                        interactable: t1,
                        interaction: n,
                        element: r,
                        rect: o,
                        buttons: a
                    };
                    return i.fire("auto-start:check", s), s.action;
                }(this, n, r, i, t1);
                return this.options.actionChecker ? this.options.actionChecker(e, n, o, this, i, r) : o;
            }, e.prototype.ignoreFrom = Nt(function(t1) {
                return this._backCompatOption("ignoreFrom", t1);
            }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = Nt(function(t1) {
                return this._backCompatOption("allowFrom", t1);
            }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = Kt, e.prototype.styleCursor = Ht;
        }
    };
    function Jt(t1, e, n, r, i) {
        return e.testIgnoreAllow(e.options[t1.name], n, r) && e.options[t1.name].enabled && ee(e, n, t1, i) ? t1 : null;
    }
    function Qt(t1, e, n, r, i, o, a) {
        for(var s = 0, c = r.length; s < c; s++){
            var l = r[s], u = i[s], p = l.getAction(e, n, t1, u);
            if (p) {
                var f = Jt(p, l, u, o, a);
                if (f) return {
                    action: f,
                    interactable: l,
                    element: u
                };
            }
        }
        return {
            action: null,
            interactable: null,
            element: null
        };
    }
    function Zt(t1, e, n, r, i) {
        var o = [], a = [], s = r;
        function c(t1) {
            o.push(t1), a.push(s);
        }
        for(; w.element(s);){
            o = [], a = [], i.interactables.forEachMatch(s, c);
            var l = Qt(t1, e, n, o, a, r, i);
            if (l.action && !l.interactable.options[l.action.name].manualStart) return l;
            s = A(s);
        }
        return {
            action: null,
            interactable: null,
            element: null
        };
    }
    function te(t1, e, n) {
        var r = e.action, i = e.interactable, o = e.element;
        r = r || {
            name: null
        }, t1.interactable = i, t1.element = o, Ut(t1.prepared, r), t1.rect = i && r.name ? i.getRect(o) : null, ie(t1, n), n.fire("autoStart:prepared", {
            interaction: t1
        });
    }
    function ee(t1, e, n, r) {
        var i = t1.options, o = i[n.name].max, a = i[n.name].maxPerElement, s = r.autoStart.maxInteractions, c = 0, l = 0, u = 0;
        if (!(o && a && s)) return !1;
        for(var p = 0, f = r.interactions.list; p < f.length; p++){
            var d = f[p], h = d.prepared.name;
            if (d.interacting()) {
                if (++c >= s) return !1;
                if (d.interactable === t1) {
                    if ((l += h === n.name ? 1 : 0) >= o) return !1;
                    if (d.element === e && (u++, h === n.name && u >= a)) return !1;
                }
            }
        }
        return s > 0;
    }
    function ne(t1, e) {
        return w.number(t1) ? (e.autoStart.maxInteractions = t1, this) : e.autoStart.maxInteractions;
    }
    function re(t1, e, n) {
        var r = n.autoStart.cursorElement;
        r && r !== t1 && (r.style.cursor = ""), t1.ownerDocument.documentElement.style.cursor = e, t1.style.cursor = e, n.autoStart.cursorElement = e ? t1 : null;
    }
    function ie(t1, e) {
        var n = t1.interactable, r = t1.element, i = t1.prepared;
        if ("mouse" === t1.pointerType && n && n.options.styleCursor) {
            var o = "";
            if (i.name) {
                var a = n.options[i.name].cursorChecker;
                o = w.func(a) ? a(i, n, r, t1._interacting) : e.actions.map[i.name].getCursor(i);
            }
            re(t1.element, o || "", e);
        } else e.autoStart.cursorElement && re(e.autoStart.cursorElement, "", e);
    }
    var oe = {
        id: "auto-start/base",
        before: [
            "actions"
        ],
        install: function(t1) {
            var e = t1.interactStatic, n = t1.defaults;
            t1.usePlugin($t), n.base.actionChecker = null, n.base.styleCursor = !0, V(n.perAction, {
                manualStart: !1,
                max: 1 / 0,
                maxPerElement: 1,
                allowFrom: null,
                ignoreFrom: null,
                mouseButtons: 1
            }), e.maxInteractions = function(e) {
                return ne(e, t1);
            }, t1.autoStart = {
                maxInteractions: 1 / 0,
                withinInteractionLimit: ee,
                cursorElement: null
            };
        },
        listeners: {
            "interactions:down": function(t1, e) {
                var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget;
                n.interacting() || te(n, Zt(n, r, i, o, e), e);
            },
            "interactions:move": function(t1, e) {
                !function(t1, e) {
                    var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget;
                    "mouse" !== n.pointerType || n.pointerIsDown || n.interacting() || te(n, Zt(n, r, i, o, e), e);
                }(t1, e), function(t1, e) {
                    var n = t1.interaction;
                    if (n.pointerIsDown && !n.interacting() && n.pointerWasMoved && n.prepared.name) {
                        e.fire("autoStart:before-start", t1);
                        var r = n.interactable, i = n.prepared.name;
                        i && r && (r.options[i].manualStart || !ee(r, n.element, n.prepared, e) ? n.stop() : (n.start(n.prepared, r, n.element), ie(n, e)));
                    }
                }(t1, e);
            },
            "interactions:stop": function(t1, e) {
                var n = t1.interaction, r = n.interactable;
                r && r.options.styleCursor && re(n.element, "", e);
            }
        },
        maxInteractions: ne,
        withinInteractionLimit: ee,
        validateAction: Jt
    }, ae = oe;
    var se = {
        id: "auto-start/dragAxis",
        listeners: {
            "autoStart:before-start": function(t1, e) {
                var n = t1.interaction, r = t1.eventTarget, i = t1.dx, o = t1.dy;
                if ("drag" === n.prepared.name) {
                    var a = Math.abs(i), s = Math.abs(o), c = n.interactable.options.drag, l = c.startAxis, u = a > s ? "x" : a < s ? "y" : "xy";
                    if (n.prepared.axis = "start" === c.lockAxis ? u[0] : c.lockAxis, "xy" !== u && "xy" !== l && l !== u) {
                        n.prepared.name = null;
                        for(var p = r, f = function(t1) {
                            if (t1 !== n.interactable) {
                                var i = n.interactable.options.drag;
                                if (!i.manualStart && t1.testIgnoreAllow(i, p, r)) {
                                    var o = t1.getAction(n.downPointer, n.downEvent, n, p);
                                    if (o && "drag" === o.name && function(t1, e) {
                                        if (!e) return !1;
                                        var n = e.options.drag.startAxis;
                                        return "xy" === t1 || "xy" === n || n === t1;
                                    }(u, t1) && ae.validateAction(o, t1, p, r, e)) return t1;
                                }
                            }
                        }; w.element(p);){
                            var d = e.interactables.forEachMatch(p, f);
                            if (d) {
                                n.prepared.name = "drag", n.interactable = d, n.element = p;
                                break;
                            }
                            p = A(p);
                        }
                    }
                }
            }
        }
    };
    function ce(t1) {
        var e = t1.prepared && t1.prepared.name;
        if (!e) return null;
        var n = t1.interactable.options;
        return n[e].hold || n[e].delay;
    }
    var le = {
        id: "auto-start/hold",
        install: function(t1) {
            var e = t1.defaults;
            t1.usePlugin(ae), e.perAction.hold = 0, e.perAction.delay = 0;
        },
        listeners: {
            "interactions:new": function(t1) {
                t1.interaction.autoStartHoldTimer = null;
            },
            "autoStart:prepared": function(t1) {
                var e = t1.interaction, n = ce(e);
                n > 0 && (e.autoStartHoldTimer = setTimeout(function() {
                    e.start(e.prepared, e.interactable, e.element);
                }, n));
            },
            "interactions:move": function(t1) {
                var e = t1.interaction, n = t1.duplicate;
                e.autoStartHoldTimer && e.pointerWasMoved && !n && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
            },
            "autoStart:before-start": function(t1) {
                var e = t1.interaction;
                ce(e) > 0 && (e.prepared.name = null);
            }
        },
        getHoldDuration: ce
    }, ue = le, pe = {
        id: "auto-start",
        install: function(t1) {
            t1.usePlugin(ae), t1.usePlugin(ue), t1.usePlugin(se);
        }
    }, fe = function(t1) {
        return /^(always|never|auto)$/.test(t1) ? (this.options.preventDefault = t1, this) : w.bool(t1) ? (this.options.preventDefault = t1 ? "always" : "never", this) : this.options.preventDefault;
    };
    function de(t1) {
        var e = t1.interaction, n = t1.event;
        e.interactable && e.interactable.checkAndPreventDefault(n);
    }
    var he = {
        id: "core/interactablePreventDefault",
        install: function(t1) {
            var e = t1.Interactable;
            e.prototype.preventDefault = fe, e.prototype.checkAndPreventDefault = function(e) {
                return function(t1, e, n) {
                    var r = t1.options.preventDefault;
                    if ("never" !== r) {
                        if ("always" !== r) {
                            if (e.events.supportsPassive && /^touch(start|move)$/.test(n.type)) {
                                var i = y(n.target).document, o = e.getDocOptions(i);
                                if (!o || !o.events || !1 !== o.events.passive) return;
                            }
                            /^(mouse|pointer|touch)*(down|start)/i.test(n.type) || w.element(n.target) && R(n.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n.preventDefault();
                        } else n.preventDefault();
                    }
                }(this, t1, e);
            }, t1.interactions.docEvents.push({
                type: "dragstart",
                listener: function(e) {
                    for(var n = 0, r = t1.interactions.list; n < r.length; n++){
                        var i = r[n];
                        if (i.element && (i.element === e.target || M(i.element, e.target))) return void i.interactable.checkAndPreventDefault(e);
                    }
                }
            });
        },
        listeners: [
            "down",
            "move",
            "up",
            "cancel"
        ].reduce(function(t1, e) {
            return t1["interactions:".concat(e)] = de, t1;
        }, {})
    };
    function ve(t1, e) {
        if (e.phaselessTypes[t1]) return !0;
        for(var n in e.map)if (0 === t1.indexOf(n) && t1.substr(n.length) in e.phases) return !0;
        return !1;
    }
    function ge(t1) {
        var e = {};
        for(var n in t1){
            var r = t1[n];
            w.plainObject(r) ? e[n] = ge(r) : w.array(r) ? e[n] = mt(r) : e[n] = r;
        }
        return e;
    }
    var me = function() {
        function t1(e) {
            r(this, t1), this.states = [], this.startOffset = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e, this.result = ye(), this.edges = {
                left: !1,
                right: !1,
                top: !1,
                bottom: !1
            };
        }
        return o(t1, [
            {
                key: "start",
                value: function(t1, e) {
                    var n, r, i = t1.phase, o = this.interaction, a = function(t1) {
                        var e = t1.interactable.options[t1.prepared.name], n = e.modifiers;
                        if (n && n.length) return n;
                        return [
                            "snap",
                            "snapSize",
                            "snapEdges",
                            "restrict",
                            "restrictEdges",
                            "restrictSize"
                        ].map(function(t1) {
                            var n = e[t1];
                            return n && n.enabled && {
                                options: n,
                                methods: n._methods
                            };
                        }).filter(function(t1) {
                            return !!t1;
                        });
                    }(o);
                    this.prepareStates(a), this.startEdges = V({}, o.edges), this.edges = V({}, this.startEdges), this.startOffset = (n = o.rect, r = e, n ? {
                        left: r.x - n.left,
                        top: r.y - n.top,
                        right: n.right - r.x,
                        bottom: n.bottom - r.y
                    } : {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }), this.startDelta = {
                        x: 0,
                        y: 0
                    };
                    var s = this.fillArg({
                        phase: i,
                        pageCoords: e,
                        preEnd: !1
                    });
                    return this.result = ye(), this.startAll(s), this.result = this.setAll(s);
                }
            },
            {
                key: "fillArg",
                value: function(t1) {
                    var e = this.interaction;
                    return t1.interaction = e, t1.interactable = e.interactable, t1.element = e.element, t1.rect || (t1.rect = e.rect), t1.edges || (t1.edges = this.startEdges), t1.startOffset = this.startOffset, t1;
                }
            },
            {
                key: "startAll",
                value: function(t1) {
                    for(var e = 0, n = this.states; e < n.length; e++){
                        var r = n[e];
                        r.methods.start && (t1.state = r, r.methods.start(t1));
                    }
                }
            },
            {
                key: "setAll",
                value: function(t1) {
                    var e = t1.phase, n = t1.preEnd, r = t1.skipModifiers, i = t1.rect, o = t1.edges;
                    t1.coords = V({}, t1.pageCoords), t1.rect = V({}, i), t1.edges = V({}, o);
                    for(var a = r ? this.states.slice(r) : this.states, s = ye(t1.coords, t1.rect), c = 0; c < a.length; c++){
                        var l, u = a[c], p = u.options, f = V({}, t1.coords), d = null;
                        null != (l = u.methods) && l.set && this.shouldDo(p, n, e) && (t1.state = u, d = u.methods.set(t1), H(t1.edges, t1.rect, {
                            x: t1.coords.x - f.x,
                            y: t1.coords.y - f.y
                        })), s.eventProps.push(d);
                    }
                    V(this.edges, t1.edges), s.delta.x = t1.coords.x - t1.pageCoords.x, s.delta.y = t1.coords.y - t1.pageCoords.y, s.rectDelta.left = t1.rect.left - i.left, s.rectDelta.right = t1.rect.right - i.right, s.rectDelta.top = t1.rect.top - i.top, s.rectDelta.bottom = t1.rect.bottom - i.bottom;
                    var h = this.result.coords, v = this.result.rect;
                    if (h && v) {
                        var g = s.rect.left !== v.left || s.rect.right !== v.right || s.rect.top !== v.top || s.rect.bottom !== v.bottom;
                        s.changed = g || h.x !== s.coords.x || h.y !== s.coords.y;
                    }
                    return s;
                }
            },
            {
                key: "applyToInteraction",
                value: function(t1) {
                    var e = this.interaction, n = t1.phase, r = e.coords.cur, i = e.coords.start, o = this.result, a = this.startDelta, s = o.delta;
                    "start" === n && V(this.startDelta, o.delta);
                    for(var c = 0, l = [
                        [
                            i,
                            a
                        ],
                        [
                            r,
                            s
                        ]
                    ]; c < l.length; c++){
                        var u = l[c], p = u[0], f = u[1];
                        p.page.x += f.x, p.page.y += f.y, p.client.x += f.x, p.client.y += f.y;
                    }
                    var d = this.result.rectDelta, h = t1.rect || e.rect;
                    h.left += d.left, h.right += d.right, h.top += d.top, h.bottom += d.bottom, h.width = h.right - h.left, h.height = h.bottom - h.top;
                }
            },
            {
                key: "setAndApply",
                value: function(t1) {
                    var e = this.interaction, n = t1.phase, r = t1.preEnd, i = t1.skipModifiers, o = this.setAll(this.fillArg({
                        preEnd: r,
                        phase: n,
                        pageCoords: t1.modifiedCoords || e.coords.cur.page
                    }));
                    if (this.result = o, !o.changed && (!i || i < this.states.length) && e.interacting()) return !1;
                    if (t1.modifiedCoords) {
                        var a = e.coords.cur.page, s = {
                            x: t1.modifiedCoords.x - a.x,
                            y: t1.modifiedCoords.y - a.y
                        };
                        o.coords.x += s.x, o.coords.y += s.y, o.delta.x += s.x, o.delta.y += s.y;
                    }
                    this.applyToInteraction(t1);
                }
            },
            {
                key: "beforeEnd",
                value: function(t1) {
                    var e = t1.interaction, n = t1.event, r = this.states;
                    if (r && r.length) {
                        for(var i = !1, o = 0; o < r.length; o++){
                            var a = r[o];
                            t1.state = a;
                            var s = a.options, c = a.methods, l = c.beforeEnd && c.beforeEnd(t1);
                            if (l) return this.endResult = l, !1;
                            i = i || !i && this.shouldDo(s, !0, t1.phase, !0);
                        }
                        i && e.move({
                            event: n,
                            preEnd: !0
                        });
                    }
                }
            },
            {
                key: "stop",
                value: function(t1) {
                    var e = t1.interaction;
                    if (this.states && this.states.length) {
                        var n = V({
                            states: this.states,
                            interactable: e.interactable,
                            element: e.element,
                            rect: null
                        }, t1);
                        this.fillArg(n);
                        for(var r = 0, i = this.states; r < i.length; r++){
                            var o = i[r];
                            n.state = o, o.methods.stop && o.methods.stop(n);
                        }
                        this.states = null, this.endResult = null;
                    }
                }
            },
            {
                key: "prepareStates",
                value: function(t1) {
                    this.states = [];
                    for(var e = 0; e < t1.length; e++){
                        var n = t1[e], r = n.options, i = n.methods, o = n.name;
                        this.states.push({
                            options: r,
                            methods: i,
                            index: e,
                            name: o
                        });
                    }
                    return this.states;
                }
            },
            {
                key: "restoreInteractionCoords",
                value: function(t1) {
                    var e = t1.interaction, n = e.coords, r = e.rect, i = e.modification;
                    if (i.result) {
                        for(var o = i.startDelta, a = i.result, s = a.delta, c = a.rectDelta, l = 0, u = [
                            [
                                n.start,
                                o
                            ],
                            [
                                n.cur,
                                s
                            ]
                        ]; l < u.length; l++){
                            var p = u[l], f = p[0], d = p[1];
                            f.page.x -= d.x, f.page.y -= d.y, f.client.x -= d.x, f.client.y -= d.y;
                        }
                        r.left -= c.left, r.right -= c.right, r.top -= c.top, r.bottom -= c.bottom;
                    }
                }
            },
            {
                key: "shouldDo",
                value: function(t1, e, n, r) {
                    return !(!t1 || !1 === t1.enabled || r && !t1.endOnly || t1.endOnly && !e || "start" === n && !t1.setStart);
                }
            },
            {
                key: "copyFrom",
                value: function(t1) {
                    this.startOffset = t1.startOffset, this.startDelta = t1.startDelta, this.startEdges = t1.startEdges, this.edges = t1.edges, this.states = t1.states.map(function(t1) {
                        return ge(t1);
                    }), this.result = ye(V({}, t1.result.coords), V({}, t1.result.rect));
                }
            },
            {
                key: "destroy",
                value: function() {
                    for(var t1 in this)this[t1] = null;
                }
            }
        ]), t1;
    }();
    function ye(t1, e) {
        return {
            rect: e,
            coords: t1,
            delta: {
                x: 0,
                y: 0
            },
            rectDelta: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            eventProps: [],
            changed: !0
        };
    }
    function be(t1, e) {
        var n = t1.defaults, r = {
            start: t1.start,
            set: t1.set,
            beforeEnd: t1.beforeEnd,
            stop: t1.stop
        }, i = function(t1) {
            var i = t1 || {};
            for(var o in i.enabled = !1 !== i.enabled, n)o in i || (i[o] = n[o]);
            var a = {
                options: i,
                methods: r,
                name: e,
                enable: function() {
                    return i.enabled = !0, a;
                },
                disable: function() {
                    return i.enabled = !1, a;
                }
            };
            return a;
        };
        return e && "string" == typeof e && (i._defaults = n, i._methods = r), i;
    }
    function xe(t1) {
        var e = t1.iEvent, n = t1.interaction.modification.result;
        n && (e.modifiers = n.eventProps);
    }
    var we = {
        id: "modifiers/base",
        before: [
            "actions"
        ],
        install: function(t1) {
            t1.defaults.perAction.modifiers = [];
        },
        listeners: {
            "interactions:new": function(t1) {
                var e = t1.interaction;
                e.modification = new me(e);
            },
            "interactions:before-action-start": function(t1) {
                var e = t1.interaction, n = t1.interaction.modification;
                n.start(t1, e.coords.start.page), e.edges = n.edges, n.applyToInteraction(t1);
            },
            "interactions:before-action-move": function(t1) {
                var e = t1.interaction, n = e.modification, r = n.setAndApply(t1);
                return e.edges = n.edges, r;
            },
            "interactions:before-action-end": function(t1) {
                var e = t1.interaction, n = e.modification, r = n.beforeEnd(t1);
                return e.edges = n.startEdges, r;
            },
            "interactions:action-start": xe,
            "interactions:action-move": xe,
            "interactions:action-end": xe,
            "interactions:after-action-start": function(t1) {
                return t1.interaction.modification.restoreInteractionCoords(t1);
            },
            "interactions:after-action-move": function(t1) {
                return t1.interaction.modification.restoreInteractionCoords(t1);
            },
            "interactions:stop": function(t1) {
                return t1.interaction.modification.stop(t1);
            }
        }
    }, Ee = we, Te = {
        base: {
            preventDefault: "auto",
            deltaSource: "page"
        },
        perAction: {
            enabled: !1,
            origin: {
                x: 0,
                y: 0
            }
        },
        actions: {}
    }, Se = function(t1) {
        s(n, t1);
        var e = p(n);
        function n(t1, i, o, a, s, c, l) {
            var p;
            r(this, n), (p = e.call(this, t1)).relatedTarget = null, p.screenX = void 0, p.screenY = void 0, p.button = void 0, p.buttons = void 0, p.ctrlKey = void 0, p.shiftKey = void 0, p.altKey = void 0, p.metaKey = void 0, p.page = void 0, p.client = void 0, p.delta = void 0, p.rect = void 0, p.x0 = void 0, p.y0 = void 0, p.t0 = void 0, p.dt = void 0, p.duration = void 0, p.clientX0 = void 0, p.clientY0 = void 0, p.velocity = void 0, p.speed = void 0, p.swipe = void 0, p.axes = void 0, p.preEnd = void 0, s = s || t1.element;
            var f = t1.interactable, d = (f && f.options || Te).deltaSource, h = K(f, s, o), v = "start" === a, g = "end" === a, m = v ? u(p) : t1.prevEvent, y = v ? t1.coords.start : g ? {
                page: m.page,
                client: m.client,
                timeStamp: t1.coords.cur.timeStamp
            } : t1.coords.cur;
            return p.page = V({}, y.page), p.client = V({}, y.client), p.rect = V({}, t1.rect), p.timeStamp = y.timeStamp, g || (p.page.x -= h.x, p.page.y -= h.y, p.client.x -= h.x, p.client.y -= h.y), p.ctrlKey = i.ctrlKey, p.altKey = i.altKey, p.shiftKey = i.shiftKey, p.metaKey = i.metaKey, p.button = i.button, p.buttons = i.buttons, p.target = s, p.currentTarget = s, p.preEnd = c, p.type = l || o + (a || ""), p.interactable = f, p.t0 = v ? t1.pointers[t1.pointers.length - 1].downTime : m.t0, p.x0 = t1.coords.start.page.x - h.x, p.y0 = t1.coords.start.page.y - h.y, p.clientX0 = t1.coords.start.client.x - h.x, p.clientY0 = t1.coords.start.client.y - h.y, p.delta = v || g ? {
                x: 0,
                y: 0
            } : {
                x: p[d].x - m[d].x,
                y: p[d].y - m[d].y
            }, p.dt = t1.coords.delta.timeStamp, p.duration = p.timeStamp - p.t0, p.velocity = V({}, t1.coords.velocity[d]), p.speed = Q(p.velocity.x, p.velocity.y), p.swipe = g || "inertiastart" === a ? p.getSwipe() : null, p;
        }
        return o(n, [
            {
                key: "getSwipe",
                value: function() {
                    var t1 = this._interaction;
                    if (t1.prevEvent.speed < 600 || this.timeStamp - t1.prevEvent.timeStamp > 150) return null;
                    var e = 180 * Math.atan2(t1.prevEvent.velocityY, t1.prevEvent.velocityX) / Math.PI;
                    e < 0 && (e += 360);
                    var n = 112.5 <= e && e < 247.5, r = 202.5 <= e && e < 337.5;
                    return {
                        up: r,
                        down: !r && 22.5 <= e && e < 157.5,
                        left: n,
                        right: !n && (292.5 <= e || e < 67.5),
                        angle: e,
                        speed: t1.prevEvent.speed,
                        velocity: {
                            x: t1.prevEvent.velocityX,
                            y: t1.prevEvent.velocityY
                        }
                    };
                }
            },
            {
                key: "preventDefault",
                value: function() {}
            },
            {
                key: "stopImmediatePropagation",
                value: function() {
                    this.immediatePropagationStopped = this.propagationStopped = !0;
                }
            },
            {
                key: "stopPropagation",
                value: function() {
                    this.propagationStopped = !0;
                }
            }
        ]), n;
    }(vt);
    Object.defineProperties(Se.prototype, {
        pageX: {
            get: function() {
                return this.page.x;
            },
            set: function(t1) {
                this.page.x = t1;
            }
        },
        pageY: {
            get: function() {
                return this.page.y;
            },
            set: function(t1) {
                this.page.y = t1;
            }
        },
        clientX: {
            get: function() {
                return this.client.x;
            },
            set: function(t1) {
                this.client.x = t1;
            }
        },
        clientY: {
            get: function() {
                return this.client.y;
            },
            set: function(t1) {
                this.client.y = t1;
            }
        },
        dx: {
            get: function() {
                return this.delta.x;
            },
            set: function(t1) {
                this.delta.x = t1;
            }
        },
        dy: {
            get: function() {
                return this.delta.y;
            },
            set: function(t1) {
                this.delta.y = t1;
            }
        },
        velocityX: {
            get: function() {
                return this.velocity.x;
            },
            set: function(t1) {
                this.velocity.x = t1;
            }
        },
        velocityY: {
            get: function() {
                return this.velocity.y;
            },
            set: function(t1) {
                this.velocity.y = t1;
            }
        }
    });
    var _e = o(function t1(e, n, i, o, a) {
        r(this, t1), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e, this.pointer = n, this.event = i, this.downTime = o, this.downTarget = a;
    }), Pe = function(t1) {
        return t1.interactable = "", t1.element = "", t1.prepared = "", t1.pointerIsDown = "", t1.pointerWasMoved = "", t1._proxy = "", t1;
    }({}), Oe = function(t1) {
        return t1.start = "", t1.move = "", t1.end = "", t1.stop = "", t1.interacting = "", t1;
    }({}), ke = 0, De = function() {
        function t1(e) {
            var n = this, i = e.pointerType, o = e.scopeFire;
            r(this, t1), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = {
                name: null,
                axis: null,
                edges: null
            }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = {
                pointer: null,
                event: null,
                eventTarget: null
            }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = Nt(function(t1) {
                this.move(t1);
            }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = {
                start: {
                    page: {
                        x: 0,
                        y: 0
                    },
                    client: {
                        x: 0,
                        y: 0
                    },
                    timeStamp: 0
                },
                prev: {
                    page: {
                        x: 0,
                        y: 0
                    },
                    client: {
                        x: 0,
                        y: 0
                    },
                    timeStamp: 0
                },
                cur: {
                    page: {
                        x: 0,
                        y: 0
                    },
                    client: {
                        x: 0,
                        y: 0
                    },
                    timeStamp: 0
                },
                delta: {
                    page: {
                        x: 0,
                        y: 0
                    },
                    client: {
                        x: 0,
                        y: 0
                    },
                    timeStamp: 0
                },
                velocity: {
                    page: {
                        x: 0,
                        y: 0
                    },
                    client: {
                        x: 0,
                        y: 0
                    },
                    timeStamp: 0
                }
            }, this._id = ke++, this._scopeFire = o, this.pointerType = i;
            var a = this;
            this._proxy = {};
            var s = function(t1) {
                Object.defineProperty(n._proxy, t1, {
                    get: function() {
                        return a[t1];
                    }
                });
            };
            for(var c in Pe)s(c);
            var l = function(t1) {
                Object.defineProperty(n._proxy, t1, {
                    value: function() {
                        return a[t1].apply(a, arguments);
                    }
                });
            };
            for(var u in Oe)l(u);
            this._scopeFire("interactions:new", {
                interaction: this
            });
        }
        return o(t1, [
            {
                key: "pointerMoveTolerance",
                get: function() {
                    return 1;
                }
            },
            {
                key: "pointerDown",
                value: function(t1, e, n) {
                    var r = this.updatePointer(t1, e, n, !0), i = this.pointers[r];
                    this._scopeFire("interactions:down", {
                        pointer: t1,
                        event: e,
                        eventTarget: n,
                        pointerIndex: r,
                        pointerInfo: i,
                        type: "down",
                        interaction: this
                    });
                }
            },
            {
                key: "start",
                value: function(t1, e, n) {
                    return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === t1.name ? 2 : 1) || !e.options[t1.name].enabled) && (Ut(this.prepared, t1), this.interactable = e, this.element = n, this.rect = e.getRect(n), this.edges = this.prepared.edges ? V({}, this.prepared.edges) : {
                        left: !0,
                        right: !0,
                        top: !0,
                        bottom: !0
                    }, this._stopped = !1, this._interacting = this._doPhase({
                        interaction: this,
                        event: this.downEvent,
                        phase: "start"
                    }) && !this._stopped, this._interacting);
                }
            },
            {
                key: "pointerMove",
                value: function(t1, e, n) {
                    this.simulation || this.modification && this.modification.endResult || this.updatePointer(t1, e, n, !1);
                    var r, i, o = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
                    this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x, i = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Q(r, i) > this.pointerMoveTolerance);
                    var a, s, c, l = this.getPointerIndex(t1), u = {
                        pointer: t1,
                        pointerIndex: l,
                        pointerInfo: this.pointers[l],
                        event: e,
                        type: "move",
                        eventTarget: n,
                        dx: r,
                        dy: i,
                        duplicate: o,
                        interaction: this
                    };
                    o || (a = this.coords.velocity, s = this.coords.delta, c = Math.max(s.timeStamp / 1e3, .001), a.page.x = s.page.x / c, a.page.y = s.page.y / c, a.client.x = s.client.x / c, a.client.y = s.client.y / c, a.timeStamp = c), this._scopeFire("interactions:move", u), o || this.simulation || (this.interacting() && (u.type = null, this.move(u)), this.pointerWasMoved && et(this.coords.prev, this.coords.cur));
                }
            },
            {
                key: "move",
                value: function(t1) {
                    t1 && t1.event || nt(this.coords.delta), (t1 = V({
                        pointer: this._latestPointer.pointer,
                        event: this._latestPointer.event,
                        eventTarget: this._latestPointer.eventTarget,
                        interaction: this
                    }, t1 || {})).phase = "move", this._doPhase(t1);
                }
            },
            {
                key: "pointerUp",
                value: function(t1, e, n, r) {
                    var i = this.getPointerIndex(t1);
                    -1 === i && (i = this.updatePointer(t1, e, n, !1));
                    var o = /cancel$/i.test(e.type) ? "cancel" : "up";
                    this._scopeFire("interactions:".concat(o), {
                        pointer: t1,
                        pointerIndex: i,
                        pointerInfo: this.pointers[i],
                        event: e,
                        eventTarget: n,
                        type: o,
                        curEventTarget: r,
                        interaction: this
                    }), this.simulation || this.end(e), this.removePointer(t1, e);
                }
            },
            {
                key: "documentBlur",
                value: function(t1) {
                    this.end(t1), this._scopeFire("interactions:blur", {
                        event: t1,
                        type: "blur",
                        interaction: this
                    });
                }
            },
            {
                key: "end",
                value: function(t1) {
                    var e;
                    this._ending = !0, t1 = t1 || this._latestPointer.event, this.interacting() && (e = this._doPhase({
                        event: t1,
                        interaction: this,
                        phase: "end"
                    })), this._ending = !1, !0 === e && this.stop();
                }
            },
            {
                key: "currentAction",
                value: function() {
                    return this._interacting ? this.prepared.name : null;
                }
            },
            {
                key: "interacting",
                value: function() {
                    return this._interacting;
                }
            },
            {
                key: "stop",
                value: function() {
                    this._scopeFire("interactions:stop", {
                        interaction: this
                    }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
                }
            },
            {
                key: "getPointerIndex",
                value: function(t1) {
                    var e = at(t1);
                    return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : yt(this.pointers, function(t1) {
                        return t1.id === e;
                    });
                }
            },
            {
                key: "getPointerInfo",
                value: function(t1) {
                    return this.pointers[this.getPointerIndex(t1)];
                }
            },
            {
                key: "updatePointer",
                value: function(t1, e, n, r) {
                    var i, o, a, s = at(t1), c = this.getPointerIndex(t1), l = this.pointers[c];
                    return r = !1 !== r && (r || /(down|start)$/i.test(e.type)), l ? l.pointer = t1 : (l = new _e(s, t1, e, null, null), c = this.pointers.length, this.pointers.push(l)), st(this.coords.cur, this.pointers.map(function(t1) {
                        return t1.pointer;
                    }), this._now()), i = this.coords.delta, o = this.coords.prev, a = this.coords.cur, i.page.x = a.page.x - o.page.x, i.page.y = a.page.y - o.page.y, i.client.x = a.client.x - o.client.x, i.client.y = a.client.y - o.client.y, i.timeStamp = a.timeStamp - o.timeStamp, r && (this.pointerIsDown = !0, l.downTime = this.coords.cur.timeStamp, l.downTarget = n, tt(this.downPointer, t1), this.interacting() || (et(this.coords.start, this.coords.cur), et(this.coords.prev, this.coords.cur), this.downEvent = e, this.pointerWasMoved = !1)), this._updateLatestPointer(t1, e, n), this._scopeFire("interactions:update-pointer", {
                        pointer: t1,
                        event: e,
                        eventTarget: n,
                        down: r,
                        pointerInfo: l,
                        pointerIndex: c,
                        interaction: this
                    }), c;
                }
            },
            {
                key: "removePointer",
                value: function(t1, e) {
                    var n = this.getPointerIndex(t1);
                    if (-1 !== n) {
                        var r = this.pointers[n];
                        this._scopeFire("interactions:remove-pointer", {
                            pointer: t1,
                            event: e,
                            eventTarget: null,
                            pointerIndex: n,
                            pointerInfo: r,
                            interaction: this
                        }), this.pointers.splice(n, 1), this.pointerIsDown = !1;
                    }
                }
            },
            {
                key: "_updateLatestPointer",
                value: function(t1, e, n) {
                    this._latestPointer.pointer = t1, this._latestPointer.event = e, this._latestPointer.eventTarget = n;
                }
            },
            {
                key: "destroy",
                value: function() {
                    this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
                }
            },
            {
                key: "_createPreparedEvent",
                value: function(t1, e, n, r) {
                    return new Se(this, t1, this.prepared.name, e, this.element, n, r);
                }
            },
            {
                key: "_fireEvent",
                value: function(t1) {
                    var e;
                    null == (e = this.interactable) || e.fire(t1), (!this.prevEvent || t1.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t1);
                }
            },
            {
                key: "_doPhase",
                value: function(t1) {
                    var e = t1.event, n = t1.phase, r = t1.preEnd, i = t1.type, o = this.rect;
                    if (o && "move" === n && (H(this.edges, o, this.coords.delta[this.interactable.options.deltaSource]), o.width = o.right - o.left, o.height = o.bottom - o.top), !1 === this._scopeFire("interactions:before-action-".concat(n), t1)) return !1;
                    var a = t1.iEvent = this._createPreparedEvent(e, n, r, i);
                    return this._scopeFire("interactions:action-".concat(n), t1), "start" === n && (this.prevEvent = a), this._fireEvent(a), this._scopeFire("interactions:after-action-".concat(n), t1), !0;
                }
            },
            {
                key: "_now",
                value: function() {
                    return Date.now();
                }
            }
        ]), t1;
    }();
    function Ie(t1) {
        Me(t1.interaction);
    }
    function Me(t1) {
        if (!function(t1) {
            return !(!t1.offset.pending.x && !t1.offset.pending.y);
        }(t1)) return !1;
        var e = t1.offset.pending;
        return Ae(t1.coords.cur, e), Ae(t1.coords.delta, e), H(t1.edges, t1.rect, e), e.x = 0, e.y = 0, !0;
    }
    function ze(t1) {
        var e = t1.x, n = t1.y;
        this.offset.pending.x += e, this.offset.pending.y += n, this.offset.total.x += e, this.offset.total.y += n;
    }
    function Ae(t1, e) {
        var n = t1.page, r = t1.client, i = e.x, o = e.y;
        n.x += i, n.y += o, r.x += i, r.y += o;
    }
    Oe.offsetBy = "";
    var Re = {
        id: "offset",
        before: [
            "modifiers",
            "pointer-events",
            "actions",
            "inertia"
        ],
        install: function(t1) {
            t1.Interaction.prototype.offsetBy = ze;
        },
        listeners: {
            "interactions:new": function(t1) {
                t1.interaction.offset = {
                    total: {
                        x: 0,
                        y: 0
                    },
                    pending: {
                        x: 0,
                        y: 0
                    }
                };
            },
            "interactions:update-pointer": function(t1) {
                return function(t1) {
                    t1.pointerIsDown && (Ae(t1.coords.cur, t1.offset.total), t1.offset.pending.x = 0, t1.offset.pending.y = 0);
                }(t1.interaction);
            },
            "interactions:before-action-start": Ie,
            "interactions:before-action-move": Ie,
            "interactions:before-action-end": function(t1) {
                var e = t1.interaction;
                if (Me(e)) return e.move({
                    offset: !0
                }), e.end(), !1;
            },
            "interactions:stop": function(t1) {
                var e = t1.interaction;
                e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
            }
        }
    }, Ce = Re;
    var je = function() {
        function t1(e) {
            r(this, t1), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e;
        }
        return o(t1, [
            {
                key: "start",
                value: function(t1) {
                    var e = this.interaction, n = Fe(e);
                    if (!n || !n.enabled) return !1;
                    var r = e.coords.velocity.client, i = Q(r.x, r.y), o = this.modification || (this.modification = new me(e));
                    if (o.copyFrom(e.modification), this.t0 = e._now(), this.allowResume = n.allowResume, this.v0 = i, this.currentOffset = {
                        x: 0,
                        y: 0
                    }, this.startCoords = e.coords.cur.page, this.modifierArg = o.fillArg({
                        pageCoords: this.startCoords,
                        preEnd: !0,
                        phase: "inertiastart"
                    }), this.t0 - e.coords.cur.timeStamp < 50 && i > n.minSpeed && i > n.endSpeed) this.startInertia();
                    else {
                        if (o.result = o.setAll(this.modifierArg), !o.result.changed) return !1;
                        this.startSmoothEnd();
                    }
                    return e.modification.result.rect = null, e.offsetBy(this.targetOffset), e._doPhase({
                        interaction: e,
                        event: t1,
                        phase: "inertiastart"
                    }), e.offsetBy({
                        x: -this.targetOffset.x,
                        y: -this.targetOffset.y
                    }), e.modification.result.rect = null, this.active = !0, e.simulation = this, !0;
                }
            },
            {
                key: "startInertia",
                value: function() {
                    var t1 = this, e = this.interaction.coords.velocity.client, n = Fe(this.interaction), r = n.resistance, i = -Math.log(n.endSpeed / this.v0) / r;
                    this.targetOffset = {
                        x: (e.x - i) / r,
                        y: (e.y - i) / r
                    }, this.te = i, this.lambda_v0 = r / this.v0, this.one_ve_v0 = 1 - n.endSpeed / this.v0;
                    var o = this.modification, a = this.modifierArg;
                    a.pageCoords = {
                        x: this.startCoords.x + this.targetOffset.x,
                        y: this.startCoords.y + this.targetOffset.y
                    }, o.result = o.setAll(a), o.result.changed && (this.isModified = !0, this.modifiedOffset = {
                        x: this.targetOffset.x + o.result.delta.x,
                        y: this.targetOffset.y + o.result.delta.y
                    }), this.onNextFrame(function() {
                        return t1.inertiaTick();
                    });
                }
            },
            {
                key: "startSmoothEnd",
                value: function() {
                    var t1 = this;
                    this.smoothEnd = !0, this.isModified = !0, this.targetOffset = {
                        x: this.modification.result.delta.x,
                        y: this.modification.result.delta.y
                    }, this.onNextFrame(function() {
                        return t1.smoothEndTick();
                    });
                }
            },
            {
                key: "onNextFrame",
                value: function(t1) {
                    var e = this;
                    this.timeout = Lt.request(function() {
                        e.active && t1();
                    });
                }
            },
            {
                key: "inertiaTick",
                value: function() {
                    var t1, e, n, r, i, o, a, s = this, c = this.interaction, l = Fe(c).resistance, u = (c._now() - this.t0) / 1e3;
                    if (u < this.te) {
                        var p, f = 1 - (Math.exp(-l * u) - this.lambda_v0) / this.one_ve_v0;
                        this.isModified ? (t1 = 0, e = 0, n = this.targetOffset.x, r = this.targetOffset.y, i = this.modifiedOffset.x, o = this.modifiedOffset.y, p = {
                            x: Ye(a = f, t1, n, i),
                            y: Ye(a, e, r, o)
                        }) : p = {
                            x: this.targetOffset.x * f,
                            y: this.targetOffset.y * f
                        };
                        var d = {
                            x: p.x - this.currentOffset.x,
                            y: p.y - this.currentOffset.y
                        };
                        this.currentOffset.x += d.x, this.currentOffset.y += d.y, c.offsetBy(d), c.move(), this.onNextFrame(function() {
                            return s.inertiaTick();
                        });
                    } else c.offsetBy({
                        x: this.modifiedOffset.x - this.currentOffset.x,
                        y: this.modifiedOffset.y - this.currentOffset.y
                    }), this.end();
                }
            },
            {
                key: "smoothEndTick",
                value: function() {
                    var t1 = this, e = this.interaction, n = e._now() - this.t0, r = Fe(e).smoothEndDuration;
                    if (n < r) {
                        var i = {
                            x: Le(n, 0, this.targetOffset.x, r),
                            y: Le(n, 0, this.targetOffset.y, r)
                        }, o = {
                            x: i.x - this.currentOffset.x,
                            y: i.y - this.currentOffset.y
                        };
                        this.currentOffset.x += o.x, this.currentOffset.y += o.y, e.offsetBy(o), e.move({
                            skipModifiers: this.modifierCount
                        }), this.onNextFrame(function() {
                            return t1.smoothEndTick();
                        });
                    } else e.offsetBy({
                        x: this.targetOffset.x - this.currentOffset.x,
                        y: this.targetOffset.y - this.currentOffset.y
                    }), this.end();
                }
            },
            {
                key: "resume",
                value: function(t1) {
                    var e = t1.pointer, n = t1.event, r = t1.eventTarget, i = this.interaction;
                    i.offsetBy({
                        x: -this.currentOffset.x,
                        y: -this.currentOffset.y
                    }), i.updatePointer(e, n, r, !0), i._doPhase({
                        interaction: i,
                        event: n,
                        phase: "resume"
                    }), et(i.coords.prev, i.coords.cur), this.stop();
                }
            },
            {
                key: "end",
                value: function() {
                    this.interaction.move(), this.interaction.end(), this.stop();
                }
            },
            {
                key: "stop",
                value: function() {
                    this.active = this.smoothEnd = !1, this.interaction.simulation = null, Lt.cancel(this.timeout);
                }
            }
        ]), t1;
    }();
    function Fe(t1) {
        var e = t1.interactable, n = t1.prepared;
        return e && e.options && n.name && e.options[n.name].inertia;
    }
    var Xe = {
        id: "inertia",
        before: [
            "modifiers",
            "actions"
        ],
        install: function(t1) {
            var e = t1.defaults;
            t1.usePlugin(Ce), t1.usePlugin(Ee), t1.actions.phases.inertiastart = !0, t1.actions.phases.resume = !0, e.perAction.inertia = {
                enabled: !1,
                resistance: 10,
                minSpeed: 100,
                endSpeed: 10,
                allowResume: !0,
                smoothEndDuration: 300
            };
        },
        listeners: {
            "interactions:new": function(t1) {
                var e = t1.interaction;
                e.inertia = new je(e);
            },
            "interactions:before-action-end": function(t1) {
                var e = t1.interaction, n = t1.event;
                return (!e._interacting || e.simulation || !e.inertia.start(n)) && null;
            },
            "interactions:down": function(t1) {
                var e = t1.interaction, n = t1.eventTarget, r = e.inertia;
                if (r.active) for(var i = n; w.element(i);){
                    if (i === e.element) {
                        r.resume(t1);
                        break;
                    }
                    i = A(i);
                }
            },
            "interactions:stop": function(t1) {
                var e = t1.interaction.inertia;
                e.active && e.stop();
            },
            "interactions:before-action-resume": function(t1) {
                var e = t1.interaction.modification;
                e.stop(t1), e.start(t1, t1.interaction.coords.cur.page), e.applyToInteraction(t1);
            },
            "interactions:before-action-inertiastart": function(t1) {
                return t1.interaction.modification.setAndApply(t1);
            },
            "interactions:action-resume": xe,
            "interactions:action-inertiastart": xe,
            "interactions:after-action-inertiastart": function(t1) {
                return t1.interaction.modification.restoreInteractionCoords(t1);
            },
            "interactions:after-action-resume": function(t1) {
                return t1.interaction.modification.restoreInteractionCoords(t1);
            }
        }
    };
    function Ye(t1, e, n, r) {
        var i = 1 - t1;
        return i * i * e + 2 * i * t1 * n + t1 * t1 * r;
    }
    function Le(t1, e, n, r) {
        return -n * (t1 /= r) * (t1 - 2) + e;
    }
    var qe = Xe;
    function Be(t1, e) {
        for(var n = 0; n < e.length; n++){
            var r = e[n];
            if (t1.immediatePropagationStopped) break;
            r(t1);
        }
    }
    var Ve = function() {
        function t1(e) {
            r(this, t1), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = V({}, e || {});
        }
        return o(t1, [
            {
                key: "fire",
                value: function(t1) {
                    var e, n = this.global;
                    (e = this.types[t1.type]) && Be(t1, e), !t1.propagationStopped && n && (e = n[t1.type]) && Be(t1, e);
                }
            },
            {
                key: "on",
                value: function(t1, e) {
                    var n = $(t1, e);
                    for(t1 in n)this.types[t1] = gt(this.types[t1] || [], n[t1]);
                }
            },
            {
                key: "off",
                value: function(t1, e) {
                    var n = $(t1, e);
                    for(t1 in n){
                        var r = this.types[t1];
                        if (r && r.length) for(var i = 0, o = n[t1]; i < o.length; i++){
                            var a = o[i], s = r.indexOf(a);
                            -1 !== s && r.splice(s, 1);
                        }
                    }
                }
            },
            {
                key: "getRect",
                value: function(t1) {
                    return null;
                }
            }
        ]), t1;
    }();
    var We = function() {
        function t1(e) {
            r(this, t1), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e, tt(this, e);
        }
        return o(t1, [
            {
                key: "preventOriginalDefault",
                value: function() {
                    this.originalEvent.preventDefault();
                }
            },
            {
                key: "stopPropagation",
                value: function() {
                    this.originalEvent.stopPropagation();
                }
            },
            {
                key: "stopImmediatePropagation",
                value: function() {
                    this.originalEvent.stopImmediatePropagation();
                }
            }
        ]), t1;
    }();
    function Ge(t1) {
        return w.object(t1) ? {
            capture: !!t1.capture,
            passive: !!t1.passive
        } : {
            capture: !!t1,
            passive: !1
        };
    }
    function Ne(t1, e) {
        return t1 === e || ("boolean" == typeof t1 ? !!e.capture === t1 && !1 == !!e.passive : !!t1.capture == !!e.capture && !!t1.passive == !!e.passive);
    }
    var Ue = {
        id: "events",
        install: function(t1) {
            var e, n = [], r = {}, i = [], o = {
                add: a,
                remove: s,
                addDelegate: function(t1, e, n, o, s) {
                    var u = Ge(s);
                    if (!r[n]) {
                        r[n] = [];
                        for(var p = 0; p < i.length; p++){
                            var f = i[p];
                            a(f, n, c), a(f, n, l, !0);
                        }
                    }
                    var d = r[n], h = bt(d, function(n) {
                        return n.selector === t1 && n.context === e;
                    });
                    h || (h = {
                        selector: t1,
                        context: e,
                        listeners: []
                    }, d.push(h));
                    h.listeners.push({
                        func: o,
                        options: u
                    });
                },
                removeDelegate: function(t1, e, n, i, o) {
                    var a, u = Ge(o), p = r[n], f = !1;
                    if (!p) return;
                    for(a = p.length - 1; a >= 0; a--){
                        var d = p[a];
                        if (d.selector === t1 && d.context === e) {
                            for(var h = d.listeners, v = h.length - 1; v >= 0; v--){
                                var g = h[v];
                                if (g.func === i && Ne(g.options, u)) {
                                    h.splice(v, 1), h.length || (p.splice(a, 1), s(e, n, c), s(e, n, l, !0)), f = !0;
                                    break;
                                }
                            }
                            if (f) break;
                        }
                    }
                },
                delegateListener: c,
                delegateUseCapture: l,
                delegatedEvents: r,
                documents: i,
                targets: n,
                supportsOptions: !1,
                supportsPassive: !1
            };
            function a(t1, e, r, i) {
                if (t1.addEventListener) {
                    var a = Ge(i), s = bt(n, function(e) {
                        return e.eventTarget === t1;
                    });
                    s || (s = {
                        eventTarget: t1,
                        events: {}
                    }, n.push(s)), s.events[e] || (s.events[e] = []), bt(s.events[e], function(t1) {
                        return t1.func === r && Ne(t1.options, a);
                    }) || (t1.addEventListener(e, r, o.supportsOptions ? a : a.capture), s.events[e].push({
                        func: r,
                        options: a
                    }));
                }
            }
            function s(t1, e, r, i) {
                if (t1.addEventListener && t1.removeEventListener) {
                    var a = yt(n, function(e) {
                        return e.eventTarget === t1;
                    }), c = n[a];
                    if (c && c.events) {
                        if ("all" !== e) {
                            var l = !1, u = c.events[e];
                            if (u) {
                                if ("all" === r) {
                                    for(var p = u.length - 1; p >= 0; p--){
                                        var f = u[p];
                                        s(t1, e, f.func, f.options);
                                    }
                                    return;
                                }
                                for(var d = Ge(i), h = 0; h < u.length; h++){
                                    var v = u[h];
                                    if (v.func === r && Ne(v.options, d)) {
                                        t1.removeEventListener(e, r, o.supportsOptions ? d : d.capture), u.splice(h, 1), 0 === u.length && (delete c.events[e], l = !0);
                                        break;
                                    }
                                }
                            }
                            l && !Object.keys(c.events).length && n.splice(a, 1);
                        } else for(e in c.events)c.events.hasOwnProperty(e) && s(t1, e, "all");
                    }
                }
            }
            function c(t1, e) {
                for(var n = Ge(e), i = new We(t1), o = r[t1.type], a = ht(t1)[0], s = a; w.element(s);){
                    for(var c = 0; c < o.length; c++){
                        var l = o[c], u = l.selector, p = l.context;
                        if (R(s, u) && M(p, a) && M(p, s)) {
                            var f = l.listeners;
                            i.currentTarget = s;
                            for(var d = 0; d < f.length; d++){
                                var h = f[d];
                                Ne(h.options, n) && h.func(i);
                            }
                        }
                    }
                    s = A(s);
                }
            }
            function l(t1) {
                return c(t1, !0);
            }
            return null == (e = t1.document) || e.createElement("div").addEventListener("test", null, {
                get capture () {
                    return o.supportsOptions = !0;
                },
                get passive () {
                    return o.supportsPassive = !0;
                }
            }), t1.events = o, o;
        }
    }, He = {
        methodOrder: [
            "simulationResume",
            "mouseOrPen",
            "hasPointer",
            "idle"
        ],
        search: function(t1) {
            for(var e = 0, n = He.methodOrder; e < n.length; e++){
                var r = n[e], i = He[r](t1);
                if (i) return i;
            }
            return null;
        },
        simulationResume: function(t1) {
            var e = t1.pointerType, n = t1.eventType, r = t1.eventTarget, i = t1.scope;
            if (!/down|start/i.test(n)) return null;
            for(var o = 0, a = i.interactions.list; o < a.length; o++){
                var s = a[o], c = r;
                if (s.simulation && s.simulation.allowResume && s.pointerType === e) for(; c;){
                    if (c === s.element) return s;
                    c = A(c);
                }
            }
            return null;
        },
        mouseOrPen: function(t1) {
            var e, n = t1.pointerId, r = t1.pointerType, i = t1.eventType, o = t1.scope;
            if ("mouse" !== r && "pen" !== r) return null;
            for(var a = 0, s = o.interactions.list; a < s.length; a++){
                var c = s[a];
                if (c.pointerType === r) {
                    if (c.simulation && !Ke(c, n)) continue;
                    if (c.interacting()) return c;
                    e || (e = c);
                }
            }
            if (e) return e;
            for(var l = 0, u = o.interactions.list; l < u.length; l++){
                var p = u[l];
                if (!(p.pointerType !== r || /down/i.test(i) && p.simulation)) return p;
            }
            return null;
        },
        hasPointer: function(t1) {
            for(var e = t1.pointerId, n = 0, r = t1.scope.interactions.list; n < r.length; n++){
                var i = r[n];
                if (Ke(i, e)) return i;
            }
            return null;
        },
        idle: function(t1) {
            for(var e = t1.pointerType, n = 0, r = t1.scope.interactions.list; n < r.length; n++){
                var i = r[n];
                if (1 === i.pointers.length) {
                    var o = i.interactable;
                    if (o && (!o.options.gesture || !o.options.gesture.enabled)) continue;
                } else if (i.pointers.length >= 2) continue;
                if (!i.interacting() && e === i.pointerType) return i;
            }
            return null;
        }
    };
    function Ke(t1, e) {
        return t1.pointers.some(function(t1) {
            return t1.id === e;
        });
    }
    var $e = He, Je = [
        "pointerDown",
        "pointerMove",
        "pointerUp",
        "updatePointer",
        "removePointer",
        "windowBlur"
    ];
    function Qe(t1, e) {
        return function(n) {
            var r = e.interactions.list, i = dt(n), o = ht(n), a = o[0], s = o[1], c = [];
            if (/^touch/.test(n.type)) {
                e.prevTouchTime = e.now();
                for(var l = 0, u = n.changedTouches; l < u.length; l++){
                    var p = u[l], f = {
                        pointer: p,
                        pointerId: at(p),
                        pointerType: i,
                        eventType: n.type,
                        eventTarget: a,
                        curEventTarget: s,
                        scope: e
                    }, d = Ze(f);
                    c.push([
                        f.pointer,
                        f.eventTarget,
                        f.curEventTarget,
                        d
                    ]);
                }
            } else {
                var h = !1;
                if (!I.supportsPointerEvent && /mouse/.test(n.type)) {
                    for(var v = 0; v < r.length && !h; v++)h = "mouse" !== r[v].pointerType && r[v].pointerIsDown;
                    h = h || e.now() - e.prevTouchTime < 500 || 0 === n.timeStamp;
                }
                if (!h) {
                    var g = {
                        pointer: n,
                        pointerId: at(n),
                        pointerType: i,
                        eventType: n.type,
                        curEventTarget: s,
                        eventTarget: a,
                        scope: e
                    }, m = Ze(g);
                    c.push([
                        g.pointer,
                        g.eventTarget,
                        g.curEventTarget,
                        m
                    ]);
                }
            }
            for(var y = 0; y < c.length; y++){
                var b = c[y], x = b[0], w = b[1], E = b[2];
                b[3][t1](x, n, w, E);
            }
        };
    }
    function Ze(t1) {
        var e = t1.pointerType, n = t1.scope, r = {
            interaction: $e.search(t1),
            searchDetails: t1
        };
        return n.fire("interactions:find", r), r.interaction || n.interactions.new({
            pointerType: e
        });
    }
    function tn(t1, e) {
        var n = t1.doc, r = t1.scope, i = t1.options, o = r.interactions.docEvents, a = r.events, s = a[e];
        for(var c in r.browser.isIOS && !i.events && (i.events = {
            passive: !1
        }), a.delegatedEvents)s(n, c, a.delegateListener), s(n, c, a.delegateUseCapture, !0);
        for(var l = i && i.events, u = 0; u < o.length; u++){
            var p = o[u];
            s(n, p.type, p.listener, l);
        }
    }
    var en = {
        id: "core/interactions",
        install: function(t1) {
            for(var e = {}, n = 0; n < Je.length; n++){
                var i = Je[n];
                e[i] = Qe(i, t1);
            }
            var a, c = I.pEventTypes;
            function l() {
                for(var e = 0, n = t1.interactions.list; e < n.length; e++){
                    var r = n[e];
                    if (r.pointerIsDown && "touch" === r.pointerType && !r._interacting) for(var i = function() {
                        var e = a[o];
                        t1.documents.some(function(t1) {
                            return M(t1.doc, e.downTarget);
                        }) || r.removePointer(e.pointer, e.event);
                    }, o = 0, a = r.pointers; o < a.length; o++)i();
                }
            }
            (a = k.PointerEvent ? [
                {
                    type: c.down,
                    listener: l
                },
                {
                    type: c.down,
                    listener: e.pointerDown
                },
                {
                    type: c.move,
                    listener: e.pointerMove
                },
                {
                    type: c.up,
                    listener: e.pointerUp
                },
                {
                    type: c.cancel,
                    listener: e.pointerUp
                }
            ] : [
                {
                    type: "mousedown",
                    listener: e.pointerDown
                },
                {
                    type: "mousemove",
                    listener: e.pointerMove
                },
                {
                    type: "mouseup",
                    listener: e.pointerUp
                },
                {
                    type: "touchstart",
                    listener: l
                },
                {
                    type: "touchstart",
                    listener: e.pointerDown
                },
                {
                    type: "touchmove",
                    listener: e.pointerMove
                },
                {
                    type: "touchend",
                    listener: e.pointerUp
                },
                {
                    type: "touchcancel",
                    listener: e.pointerUp
                }
            ]).push({
                type: "blur",
                listener: function(e) {
                    for(var n = 0, r = t1.interactions.list; n < r.length; n++)r[n].documentBlur(e);
                }
            }), t1.prevTouchTime = 0, t1.Interaction = function(e) {
                s(i, e);
                var n = p(i);
                function i() {
                    return r(this, i), n.apply(this, arguments);
                }
                return o(i, [
                    {
                        key: "pointerMoveTolerance",
                        get: function() {
                            return t1.interactions.pointerMoveTolerance;
                        },
                        set: function(e) {
                            t1.interactions.pointerMoveTolerance = e;
                        }
                    },
                    {
                        key: "_now",
                        value: function() {
                            return t1.now();
                        }
                    }
                ]), i;
            }(De), t1.interactions = {
                list: [],
                new: function(e) {
                    e.scopeFire = function(e, n) {
                        return t1.fire(e, n);
                    };
                    var n = new t1.Interaction(e);
                    return t1.interactions.list.push(n), n;
                },
                listeners: e,
                docEvents: a,
                pointerMoveTolerance: 1
            }, t1.usePlugin(he);
        },
        listeners: {
            "scope:add-document": function(t1) {
                return tn(t1, "add");
            },
            "scope:remove-document": function(t1) {
                return tn(t1, "remove");
            },
            "interactable:unset": function(t1, e) {
                for(var n = t1.interactable, r = e.interactions.list.length - 1; r >= 0; r--){
                    var i = e.interactions.list[r];
                    i.interactable === n && (i.stop(), e.fire("interactions:destroy", {
                        interaction: i
                    }), i.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(r, 1));
                }
            }
        },
        onDocSignal: tn,
        doOnInteractions: Qe,
        methodNames: Je
    }, nn = en, rn = function(t1) {
        return t1[t1.On = 0] = "On", t1[t1.Off = 1] = "Off", t1;
    }(rn || {}), on = function() {
        function t1(e, n, i, o) {
            r(this, t1), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new Ve, this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = e, this._context = n.context || i, this._win = y(B(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = o, this.set(n);
        }
        return o(t1, [
            {
                key: "_defaults",
                get: function() {
                    return {
                        base: {},
                        perAction: {},
                        actions: {}
                    };
                }
            },
            {
                key: "setOnEvents",
                value: function(t1, e) {
                    return w.func(e.onstart) && this.on("".concat(t1, "start"), e.onstart), w.func(e.onmove) && this.on("".concat(t1, "move"), e.onmove), w.func(e.onend) && this.on("".concat(t1, "end"), e.onend), w.func(e.oninertiastart) && this.on("".concat(t1, "inertiastart"), e.oninertiastart), this;
                }
            },
            {
                key: "updatePerActionListeners",
                value: function(t1, e, n) {
                    var r, i = this, o = null == (r = this._actions.map[t1]) ? void 0 : r.filterEventType, a = function(t1) {
                        return (null == o || o(t1)) && ve(t1, i._actions);
                    };
                    (w.array(e) || w.object(e)) && this._onOff(rn.Off, t1, e, void 0, a), (w.array(n) || w.object(n)) && this._onOff(rn.On, t1, n, void 0, a);
                }
            },
            {
                key: "setPerAction",
                value: function(t1, e) {
                    var n = this._defaults;
                    for(var r in e){
                        var i = r, o = this.options[t1], a = e[i];
                        "listeners" === i && this.updatePerActionListeners(t1, o.listeners, a), w.array(a) ? o[i] = mt(a) : w.plainObject(a) ? (o[i] = V(o[i] || {}, ge(a)), w.object(n.perAction[i]) && "enabled" in n.perAction[i] && (o[i].enabled = !1 !== a.enabled)) : w.bool(a) && w.object(n.perAction[i]) ? o[i].enabled = a : o[i] = a;
                    }
                }
            },
            {
                key: "getRect",
                value: function(t1) {
                    return t1 = t1 || (w.element(this.target) ? this.target : null), w.string(this.target) && (t1 = t1 || this._context.querySelector(this.target)), L(t1);
                }
            },
            {
                key: "rectChecker",
                value: function(t1) {
                    var e = this;
                    return w.func(t1) ? (this.getRect = function(n) {
                        var r = V({}, t1.apply(e, n));
                        return "width" in r || (r.width = r.right - r.left, r.height = r.bottom - r.top), r;
                    }, this) : null === t1 ? (delete this.getRect, this) : this.getRect;
                }
            },
            {
                key: "_backCompatOption",
                value: function(t1, e) {
                    if (B(e) || w.object(e)) {
                        for(var n in this.options[t1] = e, this._actions.map)this.options[n][t1] = e;
                        return this;
                    }
                    return this.options[t1];
                }
            },
            {
                key: "origin",
                value: function(t1) {
                    return this._backCompatOption("origin", t1);
                }
            },
            {
                key: "deltaSource",
                value: function(t1) {
                    return "page" === t1 || "client" === t1 ? (this.options.deltaSource = t1, this) : this.options.deltaSource;
                }
            },
            {
                key: "getAllElements",
                value: function() {
                    var t1 = this.target;
                    return w.string(t1) ? Array.from(this._context.querySelectorAll(t1)) : w.func(t1) && t1.getAllElements ? t1.getAllElements() : w.element(t1) ? [
                        t1
                    ] : [];
                }
            },
            {
                key: "context",
                value: function() {
                    return this._context;
                }
            },
            {
                key: "inContext",
                value: function(t1) {
                    return this._context === t1.ownerDocument || M(this._context, t1);
                }
            },
            {
                key: "testIgnoreAllow",
                value: function(t1, e, n) {
                    return !this.testIgnore(t1.ignoreFrom, e, n) && this.testAllow(t1.allowFrom, e, n);
                }
            },
            {
                key: "testAllow",
                value: function(t1, e, n) {
                    return !t1 || !!w.element(n) && (w.string(t1) ? F(n, t1, e) : !!w.element(t1) && M(t1, n));
                }
            },
            {
                key: "testIgnore",
                value: function(t1, e, n) {
                    return !(!t1 || !w.element(n)) && (w.string(t1) ? F(n, t1, e) : !!w.element(t1) && M(t1, n));
                }
            },
            {
                key: "fire",
                value: function(t1) {
                    return this.events.fire(t1), this;
                }
            },
            {
                key: "_onOff",
                value: function(t1, e, n, r, i) {
                    w.object(e) && !w.array(e) && (r = n, n = null);
                    var o = $(e, n, i);
                    for(var a in o){
                        "wheel" === a && (a = I.wheelEvent);
                        for(var s = 0, c = o[a]; s < c.length; s++){
                            var l = c[s];
                            ve(a, this._actions) ? this.events[t1 === rn.On ? "on" : "off"](a, l) : w.string(this.target) ? this._scopeEvents[t1 === rn.On ? "addDelegate" : "removeDelegate"](this.target, this._context, a, l, r) : this._scopeEvents[t1 === rn.On ? "add" : "remove"](this.target, a, l, r);
                        }
                    }
                    return this;
                }
            },
            {
                key: "on",
                value: function(t1, e, n) {
                    return this._onOff(rn.On, t1, e, n);
                }
            },
            {
                key: "off",
                value: function(t1, e, n) {
                    return this._onOff(rn.Off, t1, e, n);
                }
            },
            {
                key: "set",
                value: function(t1) {
                    var e = this._defaults;
                    for(var n in w.object(t1) || (t1 = {}), this.options = ge(e.base), this._actions.methodDict){
                        var r = n, i = this._actions.methodDict[r];
                        this.options[r] = {}, this.setPerAction(r, V(V({}, e.perAction), e.actions[r])), this[i](t1[r]);
                    }
                    for(var o in t1)"getRect" !== o ? w.func(this[o]) && this[o](t1[o]) : this.rectChecker(t1.getRect);
                    return this;
                }
            },
            {
                key: "unset",
                value: function() {
                    if (w.string(this.target)) for(var t1 in this._scopeEvents.delegatedEvents)for(var e = this._scopeEvents.delegatedEvents[t1], n = e.length - 1; n >= 0; n--){
                        var r = e[n], i = r.selector, o = r.context, a = r.listeners;
                        i === this.target && o === this._context && e.splice(n, 1);
                        for(var s = a.length - 1; s >= 0; s--)this._scopeEvents.removeDelegate(this.target, this._context, t1, a[s][0], a[s][1]);
                    }
                    else this._scopeEvents.remove(this.target, "all");
                }
            }
        ]), t1;
    }(), an = function() {
        function t1(e) {
            var n = this;
            r(this, t1), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e, e.addListeners({
                "interactable:unset": function(t1) {
                    var e = t1.interactable, r = e.target, i = w.string(r) ? n.selectorMap[r] : r[n.scope.id], o = yt(i, function(t1) {
                        return t1 === e;
                    });
                    i.splice(o, 1);
                }
            });
        }
        return o(t1, [
            {
                key: "new",
                value: function(t1, e) {
                    e = V(e || {}, {
                        actions: this.scope.actions
                    });
                    var n = new this.scope.Interactable(t1, e, this.scope.document, this.scope.events);
                    return this.scope.addDocument(n._doc), this.list.push(n), w.string(t1) ? (this.selectorMap[t1] || (this.selectorMap[t1] = []), this.selectorMap[t1].push(n)) : (n.target[this.scope.id] || Object.defineProperty(t1, this.scope.id, {
                        value: [],
                        configurable: !0
                    }), t1[this.scope.id].push(n)), this.scope.fire("interactable:new", {
                        target: t1,
                        options: e,
                        interactable: n,
                        win: this.scope._win
                    }), n;
                }
            },
            {
                key: "getExisting",
                value: function(t1, e) {
                    var n = e && e.context || this.scope.document, r = w.string(t1), i = r ? this.selectorMap[t1] : t1[this.scope.id];
                    if (i) return bt(i, function(e) {
                        return e._context === n && (r || e.inContext(t1));
                    });
                }
            },
            {
                key: "forEachMatch",
                value: function(t1, e) {
                    for(var n = 0, r = this.list; n < r.length; n++){
                        var i = r[n], o = void 0;
                        if ((w.string(i.target) ? w.element(t1) && R(t1, i.target) : t1 === i.target) && i.inContext(t1) && (o = e(i)), void 0 !== o) return o;
                    }
                }
            }
        ]), t1;
    }();
    var sn = function() {
        function t1() {
            var e = this;
            r(this, t1), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = I, this.defaults = ge(Te), this.Eventable = Ve, this.actions = {
                map: {},
                phases: {
                    start: !0,
                    move: !0,
                    end: !0
                },
                methodDict: {},
                phaselessTypes: {}
            }, this.interactStatic = function(t1) {
                var e = function e(n, r) {
                    var i = t1.interactables.getExisting(n, r);
                    return i || ((i = t1.interactables.new(n, r)).events.global = e.globalEvents), i;
                };
                return e.getPointerAverage = lt, e.getTouchBBox = ut, e.getTouchDistance = pt, e.getTouchAngle = ft, e.getElementRect = L, e.getElementClientRect = Y, e.matchesSelector = R, e.closest = z, e.globalEvents = {}, e.version = "1.10.27", e.scope = t1, e.use = function(t1, e) {
                    return this.scope.usePlugin(t1, e), this;
                }, e.isSet = function(t1, e) {
                    return !!this.scope.interactables.get(t1, e && e.context);
                }, e.on = Nt(function(t1, e, n) {
                    if (w.string(t1) && -1 !== t1.search(" ") && (t1 = t1.trim().split(/ +/)), w.array(t1)) {
                        for(var r = 0, i = t1; r < i.length; r++){
                            var o = i[r];
                            this.on(o, e, n);
                        }
                        return this;
                    }
                    if (w.object(t1)) {
                        for(var a in t1)this.on(a, t1[a], e);
                        return this;
                    }
                    return ve(t1, this.scope.actions) ? this.globalEvents[t1] ? this.globalEvents[t1].push(e) : this.globalEvents[t1] = [
                        e
                    ] : this.scope.events.add(this.scope.document, t1, e, {
                        options: n
                    }), this;
                }, "The interact.on() method is being deprecated"), e.off = Nt(function(t1, e, n) {
                    if (w.string(t1) && -1 !== t1.search(" ") && (t1 = t1.trim().split(/ +/)), w.array(t1)) {
                        for(var r = 0, i = t1; r < i.length; r++){
                            var o = i[r];
                            this.off(o, e, n);
                        }
                        return this;
                    }
                    if (w.object(t1)) {
                        for(var a in t1)this.off(a, t1[a], e);
                        return this;
                    }
                    var s;
                    return ve(t1, this.scope.actions) ? t1 in this.globalEvents && -1 !== (s = this.globalEvents[t1].indexOf(e)) && this.globalEvents[t1].splice(s, 1) : this.scope.events.remove(this.scope.document, t1, e, n), this;
                }, "The interact.off() method is being deprecated"), e.debug = function() {
                    return this.scope;
                }, e.supportsTouch = function() {
                    return I.supportsTouch;
                }, e.supportsPointerEvent = function() {
                    return I.supportsPointerEvent;
                }, e.stop = function() {
                    for(var t1 = 0, e = this.scope.interactions.list; t1 < e.length; t1++)e[t1].stop();
                    return this;
                }, e.pointerMoveTolerance = function(t1) {
                    return w.number(t1) ? (this.scope.interactions.pointerMoveTolerance = t1, this) : this.scope.interactions.pointerMoveTolerance;
                }, e.addDocument = function(t1, e) {
                    this.scope.addDocument(t1, e);
                }, e.removeDocument = function(t1) {
                    this.scope.removeDocument(t1);
                }, e;
            }(this), this.InteractEvent = Se, this.Interactable = void 0, this.interactables = new an(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = {
                list: [],
                map: {}
            }, this.onWindowUnload = function(t1) {
                return e.removeDocument(t1.target);
            };
            var n = this;
            this.Interactable = function(t1) {
                s(i, t1);
                var e = p(i);
                function i() {
                    return r(this, i), e.apply(this, arguments);
                }
                return o(i, [
                    {
                        key: "_defaults",
                        get: function() {
                            return n.defaults;
                        }
                    },
                    {
                        key: "set",
                        value: function(t1) {
                            return f(c(i.prototype), "set", this).call(this, t1), n.fire("interactable:set", {
                                options: t1,
                                interactable: this
                            }), this;
                        }
                    },
                    {
                        key: "unset",
                        value: function() {
                            f(c(i.prototype), "unset", this).call(this);
                            var t1 = n.interactables.list.indexOf(this);
                            t1 < 0 || (n.interactables.list.splice(t1, 1), n.fire("interactable:unset", {
                                interactable: this
                            }));
                        }
                    }
                ]), i;
            }(on);
        }
        return o(t1, [
            {
                key: "addListeners",
                value: function(t1, e) {
                    this.listenerMaps.push({
                        id: e,
                        map: t1
                    });
                }
            },
            {
                key: "fire",
                value: function(t1, e) {
                    for(var n = 0, r = this.listenerMaps; n < r.length; n++){
                        var i = r[n].map[t1];
                        if (i && !1 === i(e, this, t1)) return !1;
                    }
                }
            },
            {
                key: "init",
                value: function(t1) {
                    return this.isInitialized ? this : function(t1, e) {
                        t1.isInitialized = !0, w.window(e) && m(e);
                        return k.init(e), I.init(e), Lt.init(e), t1.window = e, t1.document = e.document, t1.usePlugin(nn), t1.usePlugin(Ue), t1;
                    }(this, t1);
                }
            },
            {
                key: "pluginIsInstalled",
                value: function(t1) {
                    var e = t1.id;
                    return e ? !!this._plugins.map[e] : -1 !== this._plugins.list.indexOf(t1);
                }
            },
            {
                key: "usePlugin",
                value: function(t1, e) {
                    if (!this.isInitialized) return this;
                    if (this.pluginIsInstalled(t1)) return this;
                    if (t1.id && (this._plugins.map[t1.id] = t1), this._plugins.list.push(t1), t1.install && t1.install(this, e), t1.listeners && t1.before) {
                        for(var n = 0, r = this.listenerMaps.length, i = t1.before.reduce(function(t1, e) {
                            return t1[e] = !0, t1[cn(e)] = !0, t1;
                        }, {}); n < r; n++){
                            var o = this.listenerMaps[n].id;
                            if (o && (i[o] || i[cn(o)])) break;
                        }
                        this.listenerMaps.splice(n, 0, {
                            id: t1.id,
                            map: t1.listeners
                        });
                    } else t1.listeners && this.listenerMaps.push({
                        id: t1.id,
                        map: t1.listeners
                    });
                    return this;
                }
            },
            {
                key: "addDocument",
                value: function(t1, e) {
                    if (-1 !== this.getDocIndex(t1)) return !1;
                    var n = y(t1);
                    e = e ? V({}, e) : {}, this.documents.push({
                        doc: t1,
                        options: e
                    }), this.events.documents.push(t1), t1 !== this.document && this.events.add(n, "unload", this.onWindowUnload), this.fire("scope:add-document", {
                        doc: t1,
                        window: n,
                        scope: this,
                        options: e
                    });
                }
            },
            {
                key: "removeDocument",
                value: function(t1) {
                    var e = this.getDocIndex(t1), n = y(t1), r = this.documents[e].options;
                    this.events.remove(n, "unload", this.onWindowUnload), this.documents.splice(e, 1), this.events.documents.splice(e, 1), this.fire("scope:remove-document", {
                        doc: t1,
                        window: n,
                        scope: this,
                        options: r
                    });
                }
            },
            {
                key: "getDocIndex",
                value: function(t1) {
                    for(var e = 0; e < this.documents.length; e++)if (this.documents[e].doc === t1) return e;
                    return -1;
                }
            },
            {
                key: "getDocOptions",
                value: function(t1) {
                    var e = this.getDocIndex(t1);
                    return -1 === e ? null : this.documents[e].options;
                }
            },
            {
                key: "now",
                value: function() {
                    return (this.window.Date || Date).now();
                }
            }
        ]), t1;
    }();
    function cn(t1) {
        return t1 && t1.replace(/\/.*$/, "");
    }
    var ln = new sn, un = ln.interactStatic, pn = "undefined" != typeof globalThis ? globalThis : window;
    ln.init(pn);
    var fn = Object.freeze({
        __proto__: null,
        edgeTarget: function() {},
        elements: function() {},
        grid: function(t1) {
            var e = [
                [
                    "x",
                    "y"
                ],
                [
                    "left",
                    "top"
                ],
                [
                    "right",
                    "bottom"
                ],
                [
                    "width",
                    "height"
                ]
            ].filter(function(e) {
                var n = e[0], r = e[1];
                return n in t1 || r in t1;
            }), n = function(n, r) {
                for(var i = t1.range, o = t1.limits, a = void 0 === o ? {
                    left: -1 / 0,
                    right: 1 / 0,
                    top: -1 / 0,
                    bottom: 1 / 0
                } : o, s = t1.offset, c = void 0 === s ? {
                    x: 0,
                    y: 0
                } : s, l = {
                    range: i,
                    grid: t1,
                    x: null,
                    y: null
                }, u = 0; u < e.length; u++){
                    var p = e[u], f = p[0], d = p[1], h = Math.round((n - c.x) / t1[f]), v = Math.round((r - c.y) / t1[d]);
                    l[f] = Math.max(a.left, Math.min(a.right, h * t1[f] + c.x)), l[d] = Math.max(a.top, Math.min(a.bottom, v * t1[d] + c.y));
                }
                return l;
            };
            return n.grid = t1, n.coordFields = e, n;
        }
    }), dn = {
        id: "snappers",
        install: function(t1) {
            var e = t1.interactStatic;
            e.snappers = V(e.snappers || {}, fn), e.createSnapGrid = e.snappers.grid;
        }
    }, hn = dn, vn = {
        start: function(t1) {
            var n = t1.state, r = t1.rect, i = t1.edges, o = t1.pageCoords, a = n.options, s = a.ratio, c = a.enabled, l = n.options, u = l.equalDelta, p = l.modifiers;
            "preserve" === s && (s = r.width / r.height), n.startCoords = V({}, o), n.startRect = V({}, r), n.ratio = s, n.equalDelta = u;
            var f = n.linkedEdges = {
                top: i.top || i.left && !i.bottom,
                left: i.left || i.top && !i.right,
                bottom: i.bottom || i.right && !i.top,
                right: i.right || i.bottom && !i.left
            };
            if (n.xIsPrimaryAxis = !(!i.left && !i.right), n.equalDelta) {
                var d = (f.left ? 1 : -1) * (f.top ? 1 : -1);
                n.edgeSign = {
                    x: d,
                    y: d
                };
            } else n.edgeSign = {
                x: f.left ? -1 : 1,
                y: f.top ? -1 : 1
            };
            if (!1 !== c && V(i, f), null != p && p.length) {
                var h = new me(t1.interaction);
                h.copyFrom(t1.interaction.modification), h.prepareStates(p), n.subModification = h, h.startAll(e({}, t1));
            }
        },
        set: function(t1) {
            var n = t1.state, r = t1.rect, i = t1.coords, o = n.linkedEdges, a = V({}, i), s = n.equalDelta ? gn : mn;
            if (V(t1.edges, o), s(n, n.xIsPrimaryAxis, i, r), !n.subModification) return null;
            var c = V({}, r);
            H(o, c, {
                x: i.x - a.x,
                y: i.y - a.y
            });
            var l = n.subModification.setAll(e(e({}, t1), {}, {
                rect: c,
                edges: o,
                pageCoords: i,
                prevCoords: i,
                prevRect: c
            })), u = l.delta;
            l.changed && (s(n, Math.abs(u.x) > Math.abs(u.y), l.coords, l.rect), V(i, l.coords));
            return l.eventProps;
        },
        defaults: {
            ratio: "preserve",
            equalDelta: !1,
            modifiers: [],
            enabled: !1
        }
    };
    function gn(t1, e, n) {
        var r = t1.startCoords, i = t1.edgeSign;
        e ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x;
    }
    function mn(t1, e, n, r) {
        var i = t1.startRect, o = t1.startCoords, a = t1.ratio, s = t1.edgeSign;
        if (e) {
            var c = r.width / a;
            n.y = o.y + (c - i.height) * s.y;
        } else {
            var l = r.height * a;
            n.x = o.x + (l - i.width) * s.x;
        }
    }
    var yn = be(vn, "aspectRatio"), bn = function() {};
    bn._defaults = {};
    var xn = bn;
    function wn(t1, e, n) {
        return w.func(t1) ? G(t1, e.interactable, e.element, [
            n.x,
            n.y,
            e
        ]) : G(t1, e.interactable, e.element);
    }
    var En = {
        start: function(t1) {
            var e = t1.rect, n = t1.startOffset, r = t1.state, i = t1.interaction, o = t1.pageCoords, a = r.options, s = a.elementRect, c = V({
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }, a.offset || {});
            if (e && s) {
                var l = wn(a.restriction, i, o);
                if (l) {
                    var u = l.right - l.left - e.width, p = l.bottom - l.top - e.height;
                    u < 0 && (c.left += u, c.right += u), p < 0 && (c.top += p, c.bottom += p);
                }
                c.left += n.left - e.width * s.left, c.top += n.top - e.height * s.top, c.right += n.right - e.width * (1 - s.right), c.bottom += n.bottom - e.height * (1 - s.bottom);
            }
            r.offset = c;
        },
        set: function(t1) {
            var e = t1.coords, n = t1.interaction, r = t1.state, i = r.options, o = r.offset, a = wn(i.restriction, n, e);
            if (a) {
                var s = function(t1) {
                    return !t1 || "left" in t1 && "top" in t1 || ((t1 = V({}, t1)).left = t1.x || 0, t1.top = t1.y || 0, t1.right = t1.right || t1.left + t1.width, t1.bottom = t1.bottom || t1.top + t1.height), t1;
                }(a);
                e.x = Math.max(Math.min(s.right - o.right, e.x), s.left + o.left), e.y = Math.max(Math.min(s.bottom - o.bottom, e.y), s.top + o.top);
            }
        },
        defaults: {
            restriction: null,
            elementRect: null,
            offset: null,
            endOnly: !1,
            enabled: !1
        }
    }, Tn = be(En, "restrict"), Sn = {
        top: 1 / 0,
        left: 1 / 0,
        bottom: -1 / 0,
        right: -1 / 0
    }, _n = {
        top: -1 / 0,
        left: -1 / 0,
        bottom: 1 / 0,
        right: 1 / 0
    };
    function Pn(t1, e) {
        for(var n = 0, r = [
            "top",
            "left",
            "bottom",
            "right"
        ]; n < r.length; n++){
            var i = r[n];
            i in t1 || (t1[i] = e[i]);
        }
        return t1;
    }
    var On = {
        noInner: Sn,
        noOuter: _n,
        start: function(t1) {
            var e, n = t1.interaction, r = t1.startOffset, i = t1.state, o = i.options;
            o && (e = N(wn(o.offset, n, n.coords.start.page))), e = e || {
                x: 0,
                y: 0
            }, i.offset = {
                top: e.y + r.top,
                left: e.x + r.left,
                bottom: e.y - r.bottom,
                right: e.x - r.right
            };
        },
        set: function(t1) {
            var e = t1.coords, n = t1.edges, r = t1.interaction, i = t1.state, o = i.offset, a = i.options;
            if (n) {
                var s = V({}, e), c = wn(a.inner, r, s) || {}, l = wn(a.outer, r, s) || {};
                Pn(c, Sn), Pn(l, _n), n.top ? e.y = Math.min(Math.max(l.top + o.top, s.y), c.top + o.top) : n.bottom && (e.y = Math.max(Math.min(l.bottom + o.bottom, s.y), c.bottom + o.bottom)), n.left ? e.x = Math.min(Math.max(l.left + o.left, s.x), c.left + o.left) : n.right && (e.x = Math.max(Math.min(l.right + o.right, s.x), c.right + o.right));
            }
        },
        defaults: {
            inner: null,
            outer: null,
            offset: null,
            endOnly: !1,
            enabled: !1
        }
    }, kn = be(On, "restrictEdges"), Dn = V({
        get elementRect () {
            return {
                top: 0,
                left: 0,
                bottom: 1,
                right: 1
            };
        },
        set elementRect (t){}
    }, En.defaults), In = be({
        start: En.start,
        set: En.set,
        defaults: Dn
    }, "restrictRect"), Mn = {
        width: -1 / 0,
        height: -1 / 0
    }, zn = {
        width: 1 / 0,
        height: 1 / 0
    };
    var An = be({
        start: function(t1) {
            return On.start(t1);
        },
        set: function(t1) {
            var e = t1.interaction, n = t1.state, r = t1.rect, i = t1.edges, o = n.options;
            if (i) {
                var a = U(wn(o.min, e, t1.coords)) || Mn, s = U(wn(o.max, e, t1.coords)) || zn;
                n.options = {
                    endOnly: o.endOnly,
                    inner: V({}, On.noInner),
                    outer: V({}, On.noOuter)
                }, i.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - s.height) : i.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + s.height), i.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - s.width) : i.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + s.width), On.set(t1), n.options = o;
            }
        },
        defaults: {
            min: null,
            max: null,
            endOnly: !1,
            enabled: !1
        }
    }, "restrictSize");
    var Rn = {
        start: function(t1) {
            var e, n = t1.interaction, r = t1.interactable, i = t1.element, o = t1.rect, a = t1.state, s = t1.startOffset, c = a.options, l = c.offsetWithOrigin ? function(t1) {
                var e = t1.interaction.element, n = N(G(t1.state.options.origin, null, null, [
                    e
                ])), r = n || K(t1.interactable, e, t1.interaction.prepared.name);
                return r;
            }(t1) : {
                x: 0,
                y: 0
            };
            if ("startCoords" === c.offset) e = {
                x: n.coords.start.page.x,
                y: n.coords.start.page.y
            };
            else {
                var u = G(c.offset, r, i, [
                    n
                ]);
                (e = N(u) || {
                    x: 0,
                    y: 0
                }).x += l.x, e.y += l.y;
            }
            var p = c.relativePoints;
            a.offsets = o && p && p.length ? p.map(function(t1, n) {
                return {
                    index: n,
                    relativePoint: t1,
                    x: s.left - o.width * t1.x + e.x,
                    y: s.top - o.height * t1.y + e.y
                };
            }) : [
                {
                    index: 0,
                    relativePoint: null,
                    x: e.x,
                    y: e.y
                }
            ];
        },
        set: function(t1) {
            var e = t1.interaction, n = t1.coords, r = t1.state, i = r.options, o = r.offsets, a = K(e.interactable, e.element, e.prepared.name), s = V({}, n), c = [];
            i.offsetWithOrigin || (s.x -= a.x, s.y -= a.y);
            for(var l = 0, u = o; l < u.length; l++)for(var p = u[l], f = s.x - p.x, d = s.y - p.y, h = 0, v = i.targets.length; h < v; h++){
                var g = i.targets[h], m = void 0;
                (m = w.func(g) ? g(f, d, e._proxy, p, h) : g) && c.push({
                    x: (w.number(m.x) ? m.x : f) + p.x,
                    y: (w.number(m.y) ? m.y : d) + p.y,
                    range: w.number(m.range) ? m.range : i.range,
                    source: g,
                    index: h,
                    offset: p
                });
            }
            for(var y = {
                target: null,
                inRange: !1,
                distance: 0,
                range: 0,
                delta: {
                    x: 0,
                    y: 0
                }
            }, b = 0; b < c.length; b++){
                var x = c[b], E = x.range, T = x.x - s.x, S = x.y - s.y, _ = Q(T, S), P = _ <= E;
                E === 1 / 0 && y.inRange && y.range !== 1 / 0 && (P = !1), y.target && !(P ? y.inRange && E !== 1 / 0 ? _ / E < y.distance / y.range : E === 1 / 0 && y.range !== 1 / 0 || _ < y.distance : !y.inRange && _ < y.distance) || (y.target = x, y.distance = _, y.range = E, y.inRange = P, y.delta.x = T, y.delta.y = S);
            }
            return y.inRange && (n.x = y.target.x, n.y = y.target.y), r.closest = y, y;
        },
        defaults: {
            range: 1 / 0,
            targets: null,
            offset: null,
            offsetWithOrigin: !0,
            origin: null,
            relativePoints: null,
            endOnly: !1,
            enabled: !1
        }
    }, Cn = be(Rn, "snap");
    var jn = {
        start: function(t1) {
            var e = t1.state, n = t1.edges, r = e.options;
            if (!n) return null;
            t1.state = {
                options: {
                    targets: null,
                    relativePoints: [
                        {
                            x: n.left ? 0 : 1,
                            y: n.top ? 0 : 1
                        }
                    ],
                    offset: r.offset || "self",
                    origin: {
                        x: 0,
                        y: 0
                    },
                    range: r.range
                }
            }, e.targetFields = e.targetFields || [
                [
                    "width",
                    "height"
                ],
                [
                    "x",
                    "y"
                ]
            ], Rn.start(t1), e.offsets = t1.state.offsets, t1.state = e;
        },
        set: function(t1) {
            var e = t1.interaction, n = t1.state, r = t1.coords, i = n.options, o = n.offsets, a = {
                x: r.x - o[0].x,
                y: r.y - o[0].y
            };
            n.options = V({}, i), n.options.targets = [];
            for(var s = 0, c = i.targets || []; s < c.length; s++){
                var l = c[s], u = void 0;
                if (u = w.func(l) ? l(a.x, a.y, e) : l) {
                    for(var p = 0, f = n.targetFields; p < f.length; p++){
                        var d = f[p], h = d[0], v = d[1];
                        if (h in u || v in u) {
                            u.x = u[h], u.y = u[v];
                            break;
                        }
                    }
                    n.options.targets.push(u);
                }
            }
            var g = Rn.set(t1);
            return n.options = i, g;
        },
        defaults: {
            range: 1 / 0,
            targets: null,
            offset: null,
            endOnly: !1,
            enabled: !1
        }
    }, Fn = be(jn, "snapSize");
    var Xn = {
        aspectRatio: yn,
        restrictEdges: kn,
        restrict: Tn,
        restrictRect: In,
        restrictSize: An,
        snapEdges: be({
            start: function(t1) {
                var e = t1.edges;
                return e ? (t1.state.targetFields = t1.state.targetFields || [
                    [
                        e.left ? "left" : "right",
                        e.top ? "top" : "bottom"
                    ]
                ], jn.start(t1)) : null;
            },
            set: jn.set,
            defaults: V(ge(jn.defaults), {
                targets: void 0,
                range: void 0,
                offset: {
                    x: 0,
                    y: 0
                }
            })
        }, "snapEdges"),
        snap: Cn,
        snapSize: Fn,
        spring: xn,
        avoid: xn,
        transform: xn,
        rubberband: xn
    }, Yn = {
        id: "modifiers",
        install: function(t1) {
            var e = t1.interactStatic;
            for(var n in t1.usePlugin(Ee), t1.usePlugin(hn), e.modifiers = Xn, Xn){
                var r = Xn[n], i = r._defaults, o = r._methods;
                i._methods = o, t1.defaults.perAction[n] = i;
            }
        }
    }, Ln = Yn, qn = function(t1) {
        s(n, t1);
        var e = p(n);
        function n(t1, i, o, a, s, c) {
            var l;
            if (r(this, n), tt(u(l = e.call(this, s)), o), o !== i && tt(u(l), i), l.timeStamp = c, l.originalEvent = o, l.type = t1, l.pointerId = at(i), l.pointerType = dt(i), l.target = a, l.currentTarget = null, "tap" === t1) {
                var p = s.getPointerIndex(i);
                l.dt = l.timeStamp - s.pointers[p].downTime;
                var f = l.timeStamp - s.tapTime;
                l.double = !!s.prevTap && "doubletap" !== s.prevTap.type && s.prevTap.target === l.target && f < 500;
            } else "doubletap" === t1 && (l.dt = i.timeStamp - s.tapTime, l.double = !0);
            return l;
        }
        return o(n, [
            {
                key: "_subtractOrigin",
                value: function(t1) {
                    var e = t1.x, n = t1.y;
                    return this.pageX -= e, this.pageY -= n, this.clientX -= e, this.clientY -= n, this;
                }
            },
            {
                key: "_addOrigin",
                value: function(t1) {
                    var e = t1.x, n = t1.y;
                    return this.pageX += e, this.pageY += n, this.clientX += e, this.clientY += n, this;
                }
            },
            {
                key: "preventDefault",
                value: function() {
                    this.originalEvent.preventDefault();
                }
            }
        ]), n;
    }(vt), Bn = {
        id: "pointer-events/base",
        before: [
            "inertia",
            "modifiers",
            "auto-start",
            "actions"
        ],
        install: function(t1) {
            t1.pointerEvents = Bn, t1.defaults.actions.pointerEvents = Bn.defaults, V(t1.actions.phaselessTypes, Bn.types);
        },
        listeners: {
            "interactions:new": function(t1) {
                var e = t1.interaction;
                e.prevTap = null, e.tapTime = 0;
            },
            "interactions:update-pointer": function(t1) {
                var e = t1.down, n = t1.pointerInfo;
                if (!e && n.hold) return;
                n.hold = {
                    duration: 1 / 0,
                    timeout: null
                };
            },
            "interactions:move": function(t1, e) {
                var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget;
                t1.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && Gn(t1), Vn({
                    interaction: n,
                    pointer: r,
                    event: i,
                    eventTarget: o,
                    type: "move"
                }, e));
            },
            "interactions:down": function(t1, e) {
                !function(t1, e) {
                    for(var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget, a = t1.pointerIndex, s = n.pointers[a].hold, c = q(o), l = {
                        interaction: n,
                        pointer: r,
                        event: i,
                        eventTarget: o,
                        type: "hold",
                        targets: [],
                        path: c,
                        node: null
                    }, u = 0; u < c.length; u++){
                        var p = c[u];
                        l.node = p, e.fire("pointerEvents:collect-targets", l);
                    }
                    if (!l.targets.length) return;
                    for(var f = 1 / 0, d = 0, h = l.targets; d < h.length; d++){
                        var v = h[d].eventable.options.holdDuration;
                        v < f && (f = v);
                    }
                    s.duration = f, s.timeout = setTimeout(function() {
                        Vn({
                            interaction: n,
                            eventTarget: o,
                            pointer: r,
                            event: i,
                            type: "hold"
                        }, e);
                    }, f);
                }(t1, e), Vn(t1, e);
            },
            "interactions:up": function(t1, e) {
                Gn(t1), Vn(t1, e), function(t1, e) {
                    var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget;
                    n.pointerWasMoved || Vn({
                        interaction: n,
                        eventTarget: o,
                        pointer: r,
                        event: i,
                        type: "tap"
                    }, e);
                }(t1, e);
            },
            "interactions:cancel": function(t1, e) {
                Gn(t1), Vn(t1, e);
            }
        },
        PointerEvent: qn,
        fire: Vn,
        collectEventTargets: Wn,
        defaults: {
            holdDuration: 600,
            ignoreFrom: null,
            allowFrom: null,
            origin: {
                x: 0,
                y: 0
            }
        },
        types: {
            down: !0,
            move: !0,
            up: !0,
            cancel: !0,
            tap: !0,
            doubletap: !0,
            hold: !0
        }
    };
    function Vn(t1, e) {
        var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget, a = t1.type, s = t1.targets, c = void 0 === s ? Wn(t1, e) : s, l = new qn(a, r, i, o, n, e.now());
        e.fire("pointerEvents:new", {
            pointerEvent: l
        });
        for(var u = {
            interaction: n,
            pointer: r,
            event: i,
            eventTarget: o,
            targets: c,
            type: a,
            pointerEvent: l
        }, p = 0; p < c.length; p++){
            var f = c[p];
            for(var d in f.props || {})l[d] = f.props[d];
            var h = K(f.eventable, f.node);
            if (l._subtractOrigin(h), l.eventable = f.eventable, l.currentTarget = f.node, f.eventable.fire(l), l._addOrigin(h), l.immediatePropagationStopped || l.propagationStopped && p + 1 < c.length && c[p + 1].node !== l.currentTarget) break;
        }
        if (e.fire("pointerEvents:fired", u), "tap" === a) {
            var v = l.double ? Vn({
                interaction: n,
                pointer: r,
                event: i,
                eventTarget: o,
                type: "doubletap"
            }, e) : l;
            n.prevTap = v, n.tapTime = v.timeStamp;
        }
        return l;
    }
    function Wn(t1, e) {
        var n = t1.interaction, r = t1.pointer, i = t1.event, o = t1.eventTarget, a = t1.type, s = n.getPointerIndex(r), c = n.pointers[s];
        if ("tap" === a && (n.pointerWasMoved || !c || c.downTarget !== o)) return [];
        for(var l = q(o), u = {
            interaction: n,
            pointer: r,
            event: i,
            eventTarget: o,
            type: a,
            path: l,
            targets: [],
            node: null
        }, p = 0; p < l.length; p++){
            var f = l[p];
            u.node = f, e.fire("pointerEvents:collect-targets", u);
        }
        return "hold" === a && (u.targets = u.targets.filter(function(t1) {
            var e, r;
            return t1.eventable.options.holdDuration === (null == (e = n.pointers[s]) || null == (r = e.hold) ? void 0 : r.duration);
        })), u.targets;
    }
    function Gn(t1) {
        var e = t1.interaction, n = t1.pointerIndex, r = e.pointers[n].hold;
        r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
    }
    var Nn = Object.freeze({
        __proto__: null,
        default: Bn
    });
    function Un(t1) {
        var e = t1.interaction;
        e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
    }
    var Hn = {
        id: "pointer-events/holdRepeat",
        install: function(t1) {
            t1.usePlugin(Bn);
            var e = t1.pointerEvents;
            e.defaults.holdRepeatInterval = 0, e.types.holdrepeat = t1.actions.phaselessTypes.holdrepeat = !0;
        },
        listeners: [
            "move",
            "up",
            "cancel",
            "endall"
        ].reduce(function(t1, e) {
            return t1["pointerEvents:".concat(e)] = Un, t1;
        }, {
            "pointerEvents:new": function(t1) {
                var e = t1.pointerEvent;
                "hold" === e.type && (e.count = (e.count || 0) + 1);
            },
            "pointerEvents:fired": function(t1, e) {
                var n = t1.interaction, r = t1.pointerEvent, i = t1.eventTarget, o = t1.targets;
                if ("hold" === r.type && o.length) {
                    var a = o[0].eventable.options.holdRepeatInterval;
                    a <= 0 || (n.holdIntervalHandle = setTimeout(function() {
                        e.pointerEvents.fire({
                            interaction: n,
                            eventTarget: i,
                            type: "hold",
                            pointer: r,
                            event: r
                        }, e);
                    }, a));
                }
            }
        })
    }, Kn = Hn;
    var $n = {
        id: "pointer-events/interactableTargets",
        install: function(t1) {
            var e = t1.Interactable;
            e.prototype.pointerEvents = function(t1) {
                return V(this.events.options, t1), this;
            };
            var n = e.prototype._backCompatOption;
            e.prototype._backCompatOption = function(t1, e) {
                var r = n.call(this, t1, e);
                return r === this && (this.events.options[t1] = e), r;
            };
        },
        listeners: {
            "pointerEvents:collect-targets": function(t1, e) {
                var n = t1.targets, r = t1.node, i = t1.type, o = t1.eventTarget;
                e.interactables.forEachMatch(r, function(t1) {
                    var e = t1.events, a = e.options;
                    e.types[i] && e.types[i].length && t1.testIgnoreAllow(a, r, o) && n.push({
                        node: r,
                        eventable: e,
                        props: {
                            interactable: t1
                        }
                    });
                });
            },
            "interactable:new": function(t1) {
                var e = t1.interactable;
                e.events.getRect = function(t1) {
                    return e.getRect(t1);
                };
            },
            "interactable:set": function(t1, e) {
                var n = t1.interactable, r = t1.options;
                V(n.events.options, e.pointerEvents.defaults), V(n.events.options, r.pointerEvents || {});
            }
        }
    }, Jn = $n, Qn = {
        id: "pointer-events",
        install: function(t1) {
            t1.usePlugin(Nn), t1.usePlugin(Kn), t1.usePlugin(Jn);
        }
    }, Zn = Qn;
    var tr = {
        id: "reflow",
        install: function(t1) {
            var e = t1.Interactable;
            t1.actions.phases.reflow = !0, e.prototype.reflow = function(e) {
                return function(t1, e, n) {
                    for(var r = t1.getAllElements(), i = n.window.Promise, o = i ? [] : null, a = function() {
                        var a = r[s], c = t1.getRect(a);
                        if (!c) return 1;
                        var l, u = bt(n.interactions.list, function(n) {
                            return n.interacting() && n.interactable === t1 && n.element === a && n.prepared.name === e.name;
                        });
                        if (u) u.move(), o && (l = u._reflowPromise || new i(function(t1) {
                            u._reflowResolve = t1;
                        }));
                        else {
                            var p = U(c), f = function(t1) {
                                return {
                                    coords: t1,
                                    get page () {
                                        return this.coords.page;
                                    },
                                    get client () {
                                        return this.coords.client;
                                    },
                                    get timeStamp () {
                                        return this.coords.timeStamp;
                                    },
                                    get pageX () {
                                        return this.coords.page.x;
                                    },
                                    get pageY () {
                                        return this.coords.page.y;
                                    },
                                    get clientX () {
                                        return this.coords.client.x;
                                    },
                                    get clientY () {
                                        return this.coords.client.y;
                                    },
                                    get pointerId () {
                                        return this.coords.pointerId;
                                    },
                                    get target () {
                                        return this.coords.target;
                                    },
                                    get type () {
                                        return this.coords.type;
                                    },
                                    get pointerType () {
                                        return this.coords.pointerType;
                                    },
                                    get buttons () {
                                        return this.coords.buttons;
                                    },
                                    preventDefault: function() {}
                                };
                            }({
                                page: {
                                    x: p.x,
                                    y: p.y
                                },
                                client: {
                                    x: p.x,
                                    y: p.y
                                },
                                timeStamp: n.now()
                            });
                            l = function(t1, e, n, r, i) {
                                var o = t1.interactions.new({
                                    pointerType: "reflow"
                                }), a = {
                                    interaction: o,
                                    event: i,
                                    pointer: i,
                                    eventTarget: n,
                                    phase: "reflow"
                                };
                                o.interactable = e, o.element = n, o.prevEvent = i, o.updatePointer(i, i, n, !0), nt(o.coords.delta), Ut(o.prepared, r), o._doPhase(a);
                                var s = t1.window, c = s.Promise, l = c ? new c(function(t1) {
                                    o._reflowResolve = t1;
                                }) : void 0;
                                o._reflowPromise = l, o.start(r, e, n), o._interacting ? (o.move(a), o.end(i)) : (o.stop(), o._reflowResolve());
                                return o.removePointer(i, i), l;
                            }(n, t1, a, e, f);
                        }
                        o && o.push(l);
                    }, s = 0; s < r.length && !a(); s++);
                    return o && i.all(o).then(function() {
                        return t1;
                    });
                }(this, e, t1);
            };
        },
        listeners: {
            "interactions:stop": function(t1, e) {
                var n = t1.interaction;
                "reflow" === n.pointerType && (n._reflowResolve && n._reflowResolve(), function(t1, e) {
                    t1.splice(t1.indexOf(e), 1);
                }(e.interactions.list, n));
            }
        }
    }, er = tr;
    if (un.use(he), un.use(Ce), un.use(Zn), un.use(qe), un.use(Ln), un.use(pe), un.use(Xt), un.use(Gt), un.use(er), un.default = un, "object" === n(module) && module) try {
        module.exports = un;
    } catch (t1) {}
    return un.default = un, un;
});

},{}],"ccpCS":[function(require,module,exports,__globalThis) {
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateFill", ()=>animateFill);
parcelHelpers.export(exports, "createSingleton", ()=>createSingleton);
parcelHelpers.export(exports, "delegate", ()=>delegate);
parcelHelpers.export(exports, "followCursor", ()=>followCursor);
parcelHelpers.export(exports, "hideAll", ()=>hideAll);
parcelHelpers.export(exports, "inlinePositioning", ()=>inlinePositioning);
parcelHelpers.export(exports, "roundArrow", ()=>ROUND_ARROW);
parcelHelpers.export(exports, "sticky", ()=>sticky);
var _core = require("@popperjs/core");
var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
    passive: true,
    capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
    return document.body;
};
function hasOwnProperty(obj, key) {
    return ({}).hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
        var v = value[index];
        return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }
    return value;
}
function isType(value, type) {
    var str = ({}).toString.call(value);
    return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
    return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) return fn;
    var timeout;
    return function(arg) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            fn(arg);
        }, ms);
    };
}
function removeProperties(obj, keys) {
    var clone = Object.assign({}, obj);
    keys.forEach(function(key) {
        delete clone[key];
    });
    return clone;
}
function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
    return [].concat(value);
}
function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) arr.push(value);
}
function unique(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
}
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
function arrayFrom(value) {
    return [].slice.call(value);
}
function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function(acc, key) {
        if (obj[key] !== undefined) acc[key] = obj[key];
        return acc;
    }, {});
}
function div() {
    return document.createElement('div');
}
function isElement(value) {
    return [
        'Element',
        'Fragment'
    ].some(function(type) {
        return isType(value, type);
    });
}
function isNodeList(value) {
    return isType(value, 'NodeList');
}
function isMouseEvent(value) {
    return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
    if (isElement(value)) return [
        value
    ];
    if (isNodeList(value)) return arrayFrom(value);
    if (Array.isArray(value)) return value;
    return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
    els.forEach(function(el) {
        if (el) el.style.transitionDuration = value + "ms";
    });
}
function setVisibilityState(els, state) {
    els.forEach(function(el) {
        if (el) el.setAttribute('data-state', state);
    });
}
function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body
    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX, clientY = event.clientY;
    return popperTreeData.every(function(_ref) {
        var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
        var interactiveBorder = props.interactiveBorder;
        var basePlacement = getBasePlacement(popperState.placement);
        var offsetData = popperState.modifiersData.offset;
        if (!offsetData) return true;
        var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
        var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
        var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
        var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
        var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
        var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
        var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
        var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
        return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
}
function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
    // `webkitTransitionEnd`...
    [
        'transitionend',
        'webkitTransitionEnd'
    ].forEach(function(event) {
        box[method](event, listener);
    });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */ function actualContains(parent, child) {
    var target = child;
    while(target){
        var _target$getRootNode;
        if (parent.contains(target)) return true;
        target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
}
var currentInput = {
    isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */ function onDocumentTouchStart() {
    if (currentInput.isTouch) return;
    currentInput.isTouch = true;
    if (window.performance) document.addEventListener('mousemove', onDocumentMouseMove);
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */ function onDocumentMouseMove() {
    var now = performance.now();
    if (now - lastMouseMoveTime < 20) {
        currentInput.isTouch = false;
        document.removeEventListener('mousemove', onDocumentMouseMove);
    }
    lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */ function onWindowBlur() {
    var activeElement = document.activeElement;
    if (isReferenceElement(activeElement)) {
        var instance = activeElement._tippy;
        if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
    }
}
function bindGlobalEventListeners() {
    document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
    window.addEventListener('blur', onWindowBlur);
}
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var isIE11 = isBrowser ? !!window.msCrypto : false;
function createMemoryLeakWarning(method) {
    var txt = method === 'destroy' ? 'n already-' : ' ';
    return [
        method + "() was called on a" + txt + "destroyed instance. This is a no-op but",
        'indicates a potential memory leak.'
    ].join(' ');
}
function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}
function getDevMessage(message) {
    return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}
function getFormattedMessage(message) {
    return [
        getDevMessage(message),
        'color: #00C584; font-size: 1.3em; font-weight: bold;',
        'line-height: 1.5',
        'color: #a6a095;'
    ];
} // Assume warnings and errors never have the same message
var visitedMessages;
resetVisitedMessages();
function resetVisitedMessages() {
    visitedMessages = new Set();
}
function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
        var _console;
        visitedMessages.add(message);
        (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
}
function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
        var _console2;
        visitedMessages.add(message);
        (_console2 = console).error.apply(_console2, getFormattedMessage(message));
    }
}
function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
    errorWhen(didPassFalsyValue, [
        'tippy() was passed',
        '`' + String(targets) + '`',
        'as its targets (first) argument. Valid types are: String, Element,',
        'Element[], or NodeList.'
    ].join(' '));
    errorWhen(didPassPlainObject, [
        'tippy() was passed a plain object which is not supported as an argument',
        'for virtual positioning. Use props.getReferenceClientRect instead.'
    ].join(' '));
}
var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
};
var renderProps = {
    allowHTML: false,
    animation: 'fade',
    arrow: true,
    content: '',
    inertia: false,
    maxWidth: 350,
    role: 'tooltip',
    theme: '',
    zIndex: 9999
};
var defaultProps = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
        content: 'auto',
        expanded: 'auto'
    },
    delay: 0,
    duration: [
        300,
        250
    ],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: '',
    offset: [
        0,
        10
    ],
    onAfterUpdate: function onAfterUpdate() {},
    onBeforeUpdate: function onBeforeUpdate() {},
    onCreate: function onCreate() {},
    onDestroy: function onDestroy() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    onClickOutside: function onClickOutside() {},
    placement: 'top',
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: 'mouseenter focus',
    triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
    validateProps(partialProps, []);
    var keys = Object.keys(partialProps);
    keys.forEach(function(key) {
        defaultProps[key] = partialProps[key];
    });
};
function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps = plugins.reduce(function(acc, plugin) {
        var name = plugin.name, defaultValue = plugin.defaultValue;
        if (name) {
            var _name;
            acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
        }
        return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
        plugins: plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function(acc, key) {
        var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();
        if (!valueAsString) return acc;
        if (key === 'content') acc[key] = valueAsString;
        else try {
            acc[key] = JSON.parse(valueAsString);
        } catch (e) {
            acc[key] = valueAsString;
        }
        return acc;
    }, {});
    return props;
}
function evaluateProps(reference, props) {
    var out = Object.assign({}, props, {
        content: invokeWithArgsOrReturn(props.content, [
            reference
        ])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
        expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
        content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
    };
    return out;
}
function validateProps(partialProps, plugins) {
    if (partialProps === void 0) partialProps = {};
    if (plugins === void 0) plugins = [];
    var keys = Object.keys(partialProps);
    keys.forEach(function(prop) {
        var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
        var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`
        if (didPassUnknownProp) didPassUnknownProp = plugins.filter(function(plugin) {
            return plugin.name === prop;
        }).length === 0;
        warnWhen(didPassUnknownProp, [
            "`" + prop + "`",
            "is not a valid prop. You may have spelled it incorrectly, or if it's",
            'a plugin, forgot to pass it in an array as props.plugins.',
            '\n\n',
            'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n',
            'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'
        ].join(' '));
    });
}
var innerHTML = function innerHTML() {
    return 'innerHTML';
};
function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
}
function createArrowElement(value) {
    var arrow = div();
    if (value === true) arrow.className = ARROW_CLASS;
    else {
        arrow.className = SVG_ARROW_CLASS;
        if (isElement(value)) arrow.appendChild(value);
        else dangerouslySetInnerHTML(arrow, value);
    }
    return arrow;
}
function setContent(content, props) {
    if (isElement(props.content)) {
        dangerouslySetInnerHTML(content, '');
        content.appendChild(props.content);
    } else if (typeof props.content !== 'function') {
        if (props.allowHTML) dangerouslySetInnerHTML(content, props.content);
        else content.textContent = props.content;
    }
}
function getChildren(popper) {
    var box = popper.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
        box: box,
        content: boxChildren.find(function(node) {
            return node.classList.contains(CONTENT_CLASS);
        }),
        arrow: boxChildren.find(function(node) {
            return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
        }),
        backdrop: boxChildren.find(function(node) {
            return node.classList.contains(BACKDROP_CLASS);
        })
    };
}
function render(instance) {
    var popper = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute('data-state', 'hidden');
    box.setAttribute('tabindex', '-1');
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute('data-state', 'hidden');
    setContent(content, instance.props);
    popper.appendChild(box);
    box.appendChild(content);
    onUpdate(instance.props, instance.props);
    function onUpdate(prevProps, nextProps) {
        var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
        if (nextProps.theme) box.setAttribute('data-theme', nextProps.theme);
        else box.removeAttribute('data-theme');
        if (typeof nextProps.animation === 'string') box.setAttribute('data-animation', nextProps.animation);
        else box.removeAttribute('data-animation');
        if (nextProps.inertia) box.setAttribute('data-inertia', '');
        else box.removeAttribute('data-inertia');
        box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;
        if (nextProps.role) box.setAttribute('role', nextProps.role);
        else box.removeAttribute('role');
        if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content, instance.props);
        if (nextProps.arrow) {
            if (!arrow) box.appendChild(createArrowElement(nextProps.arrow));
            else if (prevProps.arrow !== nextProps.arrow) {
                box.removeChild(arrow);
                box.appendChild(createArrowElement(nextProps.arrow));
            }
        } else if (arrow) box.removeChild(arrow);
    }
    return {
        popper: popper,
        onUpdate: onUpdate
    };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`
var mountedInstances = [];
function createTippy(reference, passedProps) {
    var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
    // 🔒 Private members
    // ===========================================================================
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    var currentTarget; // ===========================================================================
    // 🔑 Public members
    // ===========================================================================
    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
        // Is the instance currently enabled?
        isEnabled: true,
        // Is the tippy currently showing and not transitioning out?
        isVisible: false,
        // Has the instance been destroyed?
        isDestroyed: false,
        // Is the tippy currently mounted to the DOM?
        isMounted: false,
        // Has the tippy finished transitioning in?
        isShown: false
    };
    var instance = {
        // properties
        id: id,
        reference: reference,
        popper: div(),
        popperInstance: popperInstance,
        props: props,
        state: state,
        plugins: plugins,
        // methods
        clearDelayTimeouts: clearDelayTimeouts,
        setProps: setProps,
        setContent: setContent,
        show: show,
        hide: hide,
        hideWithInteractivity: hideWithInteractivity,
        enable: enable,
        disable: disable,
        unmount: unmount,
        destroy: destroy
    }; // TODO: Investigate why this early return causes a TDZ error in the tests —
    // it doesn't seem to happen in the browser
    /* istanbul ignore if */ if (!props.render) {
        errorWhen(true, 'render() function has not been supplied.');
        return instance;
    } // ===========================================================================
    // Initial mutations
    // ===========================================================================
    var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
    popper.setAttribute('data-tippy-root', '');
    popper.id = "tippy-" + instance.id;
    instance.popper = popper;
    reference._tippy = instance;
    popper._tippy = instance;
    var pluginsHooks = plugins.map(function(plugin) {
        return plugin.fn(instance);
    });
    var hasAriaExpanded = reference.hasAttribute('aria-expanded');
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook('onCreate', [
        instance
    ]);
    if (props.showOnCreate) scheduleShow();
     // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding
    popper.addEventListener('mouseenter', function() {
        if (instance.props.interactive && instance.state.isVisible) instance.clearDelayTimeouts();
    });
    popper.addEventListener('mouseleave', function() {
        if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    });
    return instance; // ===========================================================================
    // 🔒 Private methods
    // ===========================================================================
    function getNormalizedTouchSettings() {
        var touch = instance.props.touch;
        return Array.isArray(touch) ? touch : [
            touch,
            0
        ];
    }
    function getIsCustomTouchBehavior() {
        return getNormalizedTouchSettings()[0] === 'hold';
    }
    function getIsDefaultRenderFn() {
        var _instance$props$rende;
        // @ts-ignore
        return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
        return currentTarget || reference;
    }
    function getDocument() {
        var parent = getCurrentTarget().parentNode;
        return parent ? getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
        return getChildren(popper);
    }
    function getDelay(isShow) {
        // For touch or keyboard input, force `0` delay for UX reasons
        // Also if the instance is mounted but not visible (transitioning out),
        // ignore delay
        if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') return 0;
        return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }
    function handleStyles(fromHide) {
        if (fromHide === void 0) fromHide = false;
        popper.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
        popper.style.zIndex = "" + instance.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
        if (shouldInvokePropsHook === void 0) shouldInvokePropsHook = true;
        pluginsHooks.forEach(function(pluginHooks) {
            if (pluginHooks[hook]) pluginHooks[hook].apply(pluginHooks, args);
        });
        if (shouldInvokePropsHook) {
            var _instance$props;
            (_instance$props = instance.props)[hook].apply(_instance$props, args);
        }
    }
    function handleAriaContentAttribute() {
        var aria = instance.props.aria;
        if (!aria.content) return;
        var attr = "aria-" + aria.content;
        var id = popper.id;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            var currentValue = node.getAttribute(attr);
            if (instance.state.isVisible) node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
            else {
                var nextValue = currentValue && currentValue.replace(id, '').trim();
                if (nextValue) node.setAttribute(attr, nextValue);
                else node.removeAttribute(attr);
            }
        });
    }
    function handleAriaExpandedAttribute() {
        if (hasAriaExpanded || !instance.props.aria.expanded) return;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            if (instance.props.interactive) node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
            else node.removeAttribute('aria-expanded');
        });
    }
    function cleanupInteractiveMouseListeners() {
        getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
        mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
            return listener !== debouncedOnMouseMove;
        });
    }
    function onDocumentPress(event) {
        // Moved finger to scroll instead of an intentional tap outside
        if (currentInput.isTouch) {
            if (didTouchMove || event.type === 'mousedown') return;
        }
        var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper
        if (instance.props.interactive && actualContains(popper, actualTarget)) return;
         // Clicked on the event listeners target
        if (normalizeToArray(instance.props.triggerTarget || reference).some(function(el) {
            return actualContains(el, actualTarget);
        })) {
            if (currentInput.isTouch) return;
            if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) return;
        } else invokeHook('onClickOutside', [
            instance,
            event
        ]);
        if (instance.props.hideOnClick === true) {
            instance.clearDelayTimeouts();
            instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
            // currentTarget. This lets a tippy with `focus` trigger know that it
            // should not show
            didHideDueToDocumentMouseDown = true;
            setTimeout(function() {
                didHideDueToDocumentMouseDown = false;
            }); // The listener gets added in `scheduleShow()`, but this may be hiding it
            // before it shows, and hide()'s early bail-out behavior can prevent it
            // from being cleaned up
            if (!instance.state.isMounted) removeDocumentPress();
        }
    }
    function onTouchMove() {
        didTouchMove = true;
    }
    function onTouchStart() {
        didTouchMove = false;
    }
    function addDocumentPress() {
        var doc = getDocument();
        doc.addEventListener('mousedown', onDocumentPress, true);
        doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
        doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
        doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
        var doc = getDocument();
        doc.removeEventListener('mousedown', onDocumentPress, true);
        doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
        doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
        doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
        onTransitionEnd(duration, function() {
            if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) callback();
        });
    }
    function onTransitionedIn(duration, callback) {
        onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
        var box = getDefaultTemplateChildren().box;
        function listener(event) {
            if (event.target === box) {
                updateTransitionEndListener(box, 'remove', listener);
                callback();
            }
        } // Make callback synchronous if duration is 0
        // `transitionend` won't fire otherwise
        if (duration === 0) return callback();
        updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
        updateTransitionEndListener(box, 'add', listener);
        currentTransitionEndListener = listener;
    }
    function on(eventType, handler, options) {
        if (options === void 0) options = false;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            node.addEventListener(eventType, handler, options);
            listeners.push({
                node: node,
                eventType: eventType,
                handler: handler,
                options: options
            });
        });
    }
    function addListeners() {
        if (getIsCustomTouchBehavior()) {
            on('touchstart', onTrigger, {
                passive: true
            });
            on('touchend', onMouseLeave, {
                passive: true
            });
        }
        splitBySpaces(instance.props.trigger).forEach(function(eventType) {
            if (eventType === 'manual') return;
            on(eventType, onTrigger);
            switch(eventType){
                case 'mouseenter':
                    on('mouseleave', onMouseLeave);
                    break;
                case 'focus':
                    on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
                    break;
                case 'focusin':
                    on('focusout', onBlurOrFocusOut);
                    break;
            }
        });
    }
    function removeListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function onTrigger(event) {
        var _lastTriggerEvent;
        var shouldScheduleClickHide = false;
        if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) return;
        var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
        lastTriggerEvent = event;
        currentTarget = event.currentTarget;
        handleAriaExpandedAttribute();
        if (!instance.state.isVisible && isMouseEvent(event)) // If scrolling, `mouseenter` events can be fired if the cursor lands
        // over a new target, but `mousemove` events don't get fired. This
        // causes interactive tooltips to get stuck open until the cursor is
        // moved
        mouseMoveListeners.forEach(function(listener) {
            return listener(event);
        });
         // Toggle show/hide when clicking click-triggered tooltips
        if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) shouldScheduleClickHide = true;
        else scheduleShow(event);
        if (event.type === 'click') isVisibleFromClick = !shouldScheduleClickHide;
        if (shouldScheduleClickHide && !wasFocused) scheduleHide(event);
    }
    function onMouseMove(event) {
        var target = event.target;
        var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
        if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) return;
        var popperTreeData = getNestedPopperTree().concat(popper).map(function(popper) {
            var _instance$popperInsta;
            var instance = popper._tippy;
            var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
            if (state) return {
                popperRect: popper.getBoundingClientRect(),
                popperState: state,
                props: props
            };
            return null;
        }).filter(Boolean);
        if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
            cleanupInteractiveMouseListeners();
            scheduleHide(event);
        }
    }
    function onMouseLeave(event) {
        var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;
        if (shouldBail) return;
        if (instance.props.interactive) {
            instance.hideWithInteractivity(event);
            return;
        }
        scheduleHide(event);
    }
    function onBlurOrFocusOut(event) {
        if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) return;
         // If focus was moved to within the popper
        if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) return;
        scheduleHide(event);
    }
    function isEventListenerStopped(event) {
        return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
    }
    function createPopperInstance() {
        destroyPopperInstance();
        var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
        var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
        var computedReference = getReferenceClientRect ? {
            getBoundingClientRect: getReferenceClientRect,
            contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
        } : reference;
        var tippyModifier = {
            name: '$$tippy',
            enabled: true,
            phase: 'beforeWrite',
            requires: [
                'computeStyles'
            ],
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                    [
                        'placement',
                        'reference-hidden',
                        'escaped'
                    ].forEach(function(attr) {
                        if (attr === 'placement') box.setAttribute('data-placement', state.placement);
                        else if (state.attributes.popper["data-popper-" + attr]) box.setAttribute("data-" + attr, '');
                        else box.removeAttribute("data-" + attr);
                    });
                    state.attributes.popper = {};
                }
            }
        };
        var modifiers = [
            {
                name: 'offset',
                options: {
                    offset: offset
                }
            },
            {
                name: 'preventOverflow',
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            },
            {
                name: 'flip',
                options: {
                    padding: 5
                }
            },
            {
                name: 'computeStyles',
                options: {
                    adaptive: !moveTransition
                }
            },
            tippyModifier
        ];
        if (getIsDefaultRenderFn() && arrow) modifiers.push({
            name: 'arrow',
            options: {
                element: arrow,
                padding: 3
            }
        });
        modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
        instance.popperInstance = (0, _core.createPopper)(computedReference, popper, Object.assign({}, popperOptions, {
            placement: placement,
            onFirstUpdate: onFirstUpdate,
            modifiers: modifiers
        }));
    }
    function destroyPopperInstance() {
        if (instance.popperInstance) {
            instance.popperInstance.destroy();
            instance.popperInstance = null;
        }
    }
    function mount() {
        var appendTo = instance.props.appendTo;
        var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
        // it's directly after the reference element so the elements inside the
        // tippy can be tabbed to
        // If there are clipping issues, the user can specify a different appendTo
        // and ensure focus management is handled correctly manually
        var node = getCurrentTarget();
        if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') parentNode = node.parentNode;
        else parentNode = invokeWithArgsOrReturn(appendTo, [
            node
        ]);
         // The popper element needs to exist on the DOM before its position can be
        // updated as Popper needs to read its dimensions
        if (!parentNode.contains(popper)) parentNode.appendChild(popper);
        instance.state.isMounted = true;
        createPopperInstance();
        // Accessibility check
        warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, [
            'Interactive tippy element may not be accessible via keyboard',
            'navigation because it is not directly after the reference element',
            'in the DOM source order.',
            '\n\n',
            'Using a wrapper <div> or <span> tag around the reference element',
            'solves this by creating a new parentNode context.',
            '\n\n',
            'Specifying `appendTo: document.body` silences this warning, but it',
            'assumes you are using a focus management solution to handle',
            'keyboard navigation.',
            '\n\n',
            'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'
        ].join(' '));
    }
    function getNestedPopperTree() {
        return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
    }
    function scheduleShow(event) {
        instance.clearDelayTimeouts();
        if (event) invokeHook('onTrigger', [
            instance,
            event
        ]);
        addDocumentPress();
        var delay = getDelay(true);
        var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
        if (currentInput.isTouch && touchValue === 'hold' && touchDelay) delay = touchDelay;
        if (delay) showTimeout = setTimeout(function() {
            instance.show();
        }, delay);
        else instance.show();
    }
    function scheduleHide(event) {
        instance.clearDelayTimeouts();
        invokeHook('onUntrigger', [
            instance,
            event
        ]);
        if (!instance.state.isVisible) {
            removeDocumentPress();
            return;
        } // For interactive tippies, scheduleHide is added to a document.body handler
        // from onMouseLeave so must intercept scheduled hides from mousemove/leave
        // events when trigger contains mouseenter and click, and the tip is
        // currently shown as a result of a click.
        if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && [
            'mouseleave',
            'mousemove'
        ].indexOf(event.type) >= 0 && isVisibleFromClick) return;
        var delay = getDelay(false);
        if (delay) hideTimeout = setTimeout(function() {
            if (instance.state.isVisible) instance.hide();
        }, delay);
        else // Fixes a `transitionend` problem when it fires 1 frame too
        // late sometimes, we don't want hide() to be called.
        scheduleHideAnimationFrame = requestAnimationFrame(function() {
            instance.hide();
        });
    } // ===========================================================================
    // 🔑 Public methods
    // ===========================================================================
    function enable() {
        instance.state.isEnabled = true;
    }
    function disable() {
        // Disabling the instance should also hide it
        // https://github.com/atomiks/tippy.js-react/issues/106
        instance.hide();
        instance.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
        cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
        if (instance.state.isDestroyed) return;
        invokeHook('onBeforeUpdate', [
            instance,
            partialProps
        ]);
        removeListeners();
        var prevProps = instance.props;
        var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
            ignoreAttributes: true
        }));
        instance.props = nextProps;
        addListeners();
        if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
            cleanupInteractiveMouseListeners();
            debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
        } // Ensure stale aria-expanded attributes are removed
        if (prevProps.triggerTarget && !nextProps.triggerTarget) normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
            node.removeAttribute('aria-expanded');
        });
        else if (nextProps.triggerTarget) reference.removeAttribute('aria-expanded');
        handleAriaExpandedAttribute();
        handleStyles();
        if (onUpdate) onUpdate(prevProps, nextProps);
        if (instance.popperInstance) {
            createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
            // and the nested ones get re-rendered first.
            // https://github.com/atomiks/tippyjs-react/issues/177
            // TODO: find a cleaner / more efficient solution(!)
            getNestedPopperTree().forEach(function(nestedPopper) {
                // React (and other UI libs likely) requires a rAF wrapper as it flushes
                // its work in one
                requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
            });
        }
        invokeHook('onAfterUpdate', [
            instance,
            partialProps
        ]);
    }
    function setContent(content) {
        instance.setProps({
            content: content
        });
    }
    function show() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
        var isAlreadyVisible = instance.state.isVisible;
        var isDestroyed = instance.state.isDestroyed;
        var isDisabled = !instance.state.isEnabled;
        var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
        var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
        if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) return;
         // Normalize `disabled` behavior across browsers.
        // Firefox allows events on disabled elements, but Chrome doesn't.
        // Using a wrapper element (i.e. <span>) is recommended.
        if (getCurrentTarget().hasAttribute('disabled')) return;
        invokeHook('onShow', [
            instance
        ], false);
        if (instance.props.onShow(instance) === false) return;
        instance.state.isVisible = true;
        if (getIsDefaultRenderFn()) popper.style.visibility = 'visible';
        handleStyles();
        addDocumentPress();
        if (!instance.state.isMounted) popper.style.transition = 'none';
         // If flipping to the opposite side after hiding at least once, the
        // animation will use the wrong placement without resetting the duration
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
            setTransitionDuration([
                box,
                content
            ], 0);
        }
        onFirstUpdate = function onFirstUpdate() {
            var _instance$popperInsta2;
            if (!instance.state.isVisible || ignoreOnFirstUpdate) return;
            ignoreOnFirstUpdate = true; // reflow
            popper.offsetHeight;
            popper.style.transition = instance.props.moveTransition;
            if (getIsDefaultRenderFn() && instance.props.animation) {
                var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                setTransitionDuration([
                    _box,
                    _content
                ], duration);
                setVisibilityState([
                    _box,
                    _content
                ], 'visible');
            }
            handleAriaContentAttribute();
            handleAriaExpandedAttribute();
            pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
            // popper has been positioned for the first time
            (_instance$popperInsta2 = instance.popperInstance) == null || _instance$popperInsta2.forceUpdate();
            invokeHook('onMount', [
                instance
            ]);
            if (instance.props.animation && getIsDefaultRenderFn()) onTransitionedIn(duration, function() {
                instance.state.isShown = true;
                invokeHook('onShown', [
                    instance
                ]);
            });
        };
        mount();
    }
    function hide() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
        var isAlreadyHidden = !instance.state.isVisible;
        var isDestroyed = instance.state.isDestroyed;
        var isDisabled = !instance.state.isEnabled;
        var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
        if (isAlreadyHidden || isDestroyed || isDisabled) return;
        invokeHook('onHide', [
            instance
        ], false);
        if (instance.props.onHide(instance) === false) return;
        instance.state.isVisible = false;
        instance.state.isShown = false;
        ignoreOnFirstUpdate = false;
        isVisibleFromClick = false;
        if (getIsDefaultRenderFn()) popper.style.visibility = 'hidden';
        cleanupInteractiveMouseListeners();
        removeDocumentPress();
        handleStyles(true);
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
            if (instance.props.animation) {
                setTransitionDuration([
                    box,
                    content
                ], duration);
                setVisibilityState([
                    box,
                    content
                ], 'hidden');
            }
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        if (instance.props.animation) {
            if (getIsDefaultRenderFn()) onTransitionedOut(duration, instance.unmount);
        } else instance.unmount();
    }
    function hideWithInteractivity(event) {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
        getDocument().addEventListener('mousemove', debouncedOnMouseMove);
        pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
        debouncedOnMouseMove(event);
    }
    function unmount() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
        if (instance.state.isVisible) instance.hide();
        if (!instance.state.isMounted) return;
        destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
        // tree by default. This seems mainly for interactive tippies, but we should
        // find a workaround if possible
        getNestedPopperTree().forEach(function(nestedPopper) {
            nestedPopper._tippy.unmount();
        });
        if (popper.parentNode) popper.parentNode.removeChild(popper);
        mountedInstances = mountedInstances.filter(function(i) {
            return i !== instance;
        });
        instance.state.isMounted = false;
        invokeHook('onHidden', [
            instance
        ]);
    }
    function destroy() {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
        if (instance.state.isDestroyed) return;
        instance.clearDelayTimeouts();
        instance.unmount();
        removeListeners();
        delete reference._tippy;
        instance.state.isDestroyed = true;
        invokeHook('onDestroy', [
            instance
        ]);
    }
}
function tippy(targets, optionalProps) {
    if (optionalProps === void 0) optionalProps = {};
    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    validateTargets(targets);
    validateProps(optionalProps, plugins);
    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
        plugins: plugins
    });
    var elements = getArrayOfElements(targets);
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, [
        'tippy() was passed an Element as the `content` prop, but more than',
        'one tippy instance was created by this invocation. This means the',
        'content element will only be appended to the last tippy instance.',
        '\n\n',
        'Instead, pass the .innerHTML of the element, or use a function that',
        'returns a cloned version of the element instead.',
        '\n\n',
        '1) content: element.innerHTML\n',
        '2) content: () => element.cloneNode(true)'
    ].join(' '));
    var instances = elements.reduce(function(acc, reference) {
        var instance = reference && createTippy(reference, passedProps);
        if (instance) acc.push(instance);
        return acc;
    }, []);
    return isElement(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var hideAll = function hideAll(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, excludedReferenceOrInstance = _ref.exclude, duration = _ref.duration;
    mountedInstances.forEach(function(instance) {
        var isExcluded = false;
        if (excludedReferenceOrInstance) isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
        if (!isExcluded) {
            var originalDuration = instance.props.duration;
            instance.setProps({
                duration: duration
            });
            instance.hide();
            if (!instance.state.isDestroyed) instance.setProps({
                duration: originalDuration
            });
        }
    });
};
// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.
var applyStylesModifier = Object.assign({}, (0, _core.applyStyles), {
    effect: function effect(_ref) {
        var state = _ref.state;
        var initialStyles = {
            popper: {
                position: state.options.strategy,
                left: '0',
                top: '0',
                margin: '0'
            },
            arrow: {
                position: 'absolute'
            },
            reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
         // intentionally return no cleanup function
    // return () => { ... }
    }
});
var createSingleton = function createSingleton(tippyInstances, optionalProps) {
    var _optionalProps$popper;
    if (optionalProps === void 0) optionalProps = {};
    errorWhen(!Array.isArray(tippyInstances), [
        'The first argument passed to createSingleton() must be an array of',
        'tippy instances. The passed value was',
        String(tippyInstances)
    ].join(' '));
    var individualInstances = tippyInstances;
    var references = [];
    var triggerTargets = [];
    var currentTarget;
    var overrides = optionalProps.overrides;
    var interceptSetPropsCleanups = [];
    var shownOnCreate = false;
    function setTriggerTargets() {
        triggerTargets = individualInstances.map(function(instance) {
            return normalizeToArray(instance.props.triggerTarget || instance.reference);
        }).reduce(function(acc, item) {
            return acc.concat(item);
        }, []);
    }
    function setReferences() {
        references = individualInstances.map(function(instance) {
            return instance.reference;
        });
    }
    function enableInstances(isEnabled) {
        individualInstances.forEach(function(instance) {
            if (isEnabled) instance.enable();
            else instance.disable();
        });
    }
    function interceptSetProps(singleton) {
        return individualInstances.map(function(instance) {
            var originalSetProps = instance.setProps;
            instance.setProps = function(props) {
                originalSetProps(props);
                if (instance.reference === currentTarget) singleton.setProps(props);
            };
            return function() {
                instance.setProps = originalSetProps;
            };
        });
    } // have to pass singleton, as it maybe undefined on first call
    function prepareInstance(singleton, target) {
        var index = triggerTargets.indexOf(target); // bail-out
        if (target === currentTarget) return;
        currentTarget = target;
        var overrideProps = (overrides || []).concat('content').reduce(function(acc, prop) {
            acc[prop] = individualInstances[index].props[prop];
            return acc;
        }, {});
        singleton.setProps(Object.assign({}, overrideProps, {
            getReferenceClientRect: typeof overrideProps.getReferenceClientRect === 'function' ? overrideProps.getReferenceClientRect : function() {
                var _references$index;
                return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
            }
        }));
    }
    enableInstances(false);
    setReferences();
    setTriggerTargets();
    var plugin = {
        fn: function fn() {
            return {
                onDestroy: function onDestroy() {
                    enableInstances(true);
                },
                onHidden: function onHidden() {
                    currentTarget = null;
                },
                onClickOutside: function onClickOutside(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        currentTarget = null;
                    }
                },
                onShow: function onShow(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        prepareInstance(instance, references[0]);
                    }
                },
                onTrigger: function onTrigger(instance, event) {
                    prepareInstance(instance, event.currentTarget);
                }
            };
        }
    };
    var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, [
        'overrides'
    ]), {
        plugins: [
            plugin
        ].concat(optionalProps.plugins || []),
        triggerTarget: triggerTargets,
        popperOptions: Object.assign({}, optionalProps.popperOptions, {
            modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [
                applyStylesModifier
            ])
        })
    }));
    var originalShow = singleton.show;
    singleton.show = function(target) {
        originalShow(); // first time, showOnCreate or programmatic call with no params
        // default to showing first instance
        if (!currentTarget && target == null) return prepareInstance(singleton, references[0]);
         // triggered from event (do nothing as prepareInstance already called by onTrigger)
        // programmatic call with no params when already visible (do nothing again)
        if (currentTarget && target == null) return;
         // target is index of instance
        if (typeof target === 'number') return references[target] && prepareInstance(singleton, references[target]);
         // target is a child tippy instance
        if (individualInstances.indexOf(target) >= 0) {
            var ref = target.reference;
            return prepareInstance(singleton, ref);
        } // target is a ReferenceElement
        if (references.indexOf(target) >= 0) return prepareInstance(singleton, target);
    };
    singleton.showNext = function() {
        var first = references[0];
        if (!currentTarget) return singleton.show(0);
        var index = references.indexOf(currentTarget);
        singleton.show(references[index + 1] || first);
    };
    singleton.showPrevious = function() {
        var last = references[references.length - 1];
        if (!currentTarget) return singleton.show(last);
        var index = references.indexOf(currentTarget);
        var target = references[index - 1] || last;
        singleton.show(target);
    };
    var originalSetProps = singleton.setProps;
    singleton.setProps = function(props) {
        overrides = props.overrides || overrides;
        originalSetProps(props);
    };
    singleton.setInstances = function(nextInstances) {
        enableInstances(true);
        interceptSetPropsCleanups.forEach(function(fn) {
            return fn();
        });
        individualInstances = nextInstances;
        enableInstances(false);
        setReferences();
        setTriggerTargets();
        interceptSetPropsCleanups = interceptSetProps(singleton);
        singleton.setProps({
            triggerTarget: triggerTargets
        });
    };
    interceptSetPropsCleanups = interceptSetProps(singleton);
    return singleton;
};
var BUBBLING_EVENTS_MAP = {
    mouseover: 'mouseenter',
    focusin: 'focus',
    click: 'click'
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */ function delegate(targets, props) {
    errorWhen(!(props && props.target), [
        'You must specity a `target` prop indicating a CSS selector string matching',
        'the target elements that should receive a tippy.'
    ].join(' '));
    var listeners = [];
    var childTippyInstances = [];
    var disabled = false;
    var target = props.target;
    var nativeProps = removeProperties(props, [
        'target'
    ]);
    var parentProps = Object.assign({}, nativeProps, {
        trigger: 'manual',
        touch: false
    });
    var childProps = Object.assign({
        touch: defaultProps.touch
    }, nativeProps, {
        showOnCreate: true
    });
    var returnValue = tippy(targets, parentProps);
    var normalizedReturnValue = normalizeToArray(returnValue);
    function onTrigger(event) {
        if (!event.target || disabled) return;
        var targetNode = event.target.closest(target);
        if (!targetNode) return;
         // Get relevant trigger with fallbacks:
        // 1. Check `data-tippy-trigger` attribute on target node
        // 2. Fallback to `trigger` passed to `delegate()`
        // 3. Fallback to `defaultProps.trigger`
        var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || defaultProps.trigger; // @ts-ignore
        if (targetNode._tippy) return;
        if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') return;
        if (event.type !== 'touchstart' && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) return;
        var instance = tippy(targetNode, childProps);
        if (instance) childTippyInstances = childTippyInstances.concat(instance);
    }
    function on(node, eventType, handler, options) {
        if (options === void 0) options = false;
        node.addEventListener(eventType, handler, options);
        listeners.push({
            node: node,
            eventType: eventType,
            handler: handler,
            options: options
        });
    }
    function addEventListeners(instance) {
        var reference = instance.reference;
        on(reference, 'touchstart', onTrigger, TOUCH_OPTIONS);
        on(reference, 'mouseover', onTrigger);
        on(reference, 'focusin', onTrigger);
        on(reference, 'click', onTrigger);
    }
    function removeEventListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function applyMutations(instance) {
        var originalDestroy = instance.destroy;
        var originalEnable = instance.enable;
        var originalDisable = instance.disable;
        instance.destroy = function(shouldDestroyChildInstances) {
            if (shouldDestroyChildInstances === void 0) shouldDestroyChildInstances = true;
            if (shouldDestroyChildInstances) childTippyInstances.forEach(function(instance) {
                instance.destroy();
            });
            childTippyInstances = [];
            removeEventListeners();
            originalDestroy();
        };
        instance.enable = function() {
            originalEnable();
            childTippyInstances.forEach(function(instance) {
                return instance.enable();
            });
            disabled = false;
        };
        instance.disable = function() {
            originalDisable();
            childTippyInstances.forEach(function(instance) {
                return instance.disable();
            });
            disabled = true;
        };
        addEventListeners(instance);
    }
    normalizedReturnValue.forEach(applyMutations);
    return returnValue;
}
var animateFill = {
    name: 'animateFill',
    defaultValue: false,
    fn: function fn(instance) {
        var _instance$props$rende;
        // @ts-ignore
        if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) {
            errorWhen(instance.props.animateFill, 'The `animateFill` plugin requires the default render function.');
            return {};
        }
        var _getChildren = getChildren(instance.popper), box = _getChildren.box, content = _getChildren.content;
        var backdrop = instance.props.animateFill ? createBackdropElement() : null;
        return {
            onCreate: function onCreate() {
                if (backdrop) {
                    box.insertBefore(backdrop, box.firstElementChild);
                    box.setAttribute('data-animatefill', '');
                    box.style.overflow = 'hidden';
                    instance.setProps({
                        arrow: false,
                        animation: 'shift-away'
                    });
                }
            },
            onMount: function onMount() {
                if (backdrop) {
                    var transitionDuration = box.style.transitionDuration;
                    var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
                    // tooltip element. `clip-path` is the other alternative but is not
                    // well-supported and is buggy on some devices.
                    content.style.transitionDelay = Math.round(duration / 10) + "ms";
                    backdrop.style.transitionDuration = transitionDuration;
                    setVisibilityState([
                        backdrop
                    ], 'visible');
                }
            },
            onShow: function onShow() {
                if (backdrop) backdrop.style.transitionDuration = '0ms';
            },
            onHide: function onHide() {
                if (backdrop) setVisibilityState([
                    backdrop
                ], 'hidden');
            }
        };
    }
};
function createBackdropElement() {
    var backdrop = div();
    backdrop.className = BACKDROP_CLASS;
    setVisibilityState([
        backdrop
    ], 'hidden');
    return backdrop;
}
var mouseCoords = {
    clientX: 0,
    clientY: 0
};
var activeInstances = [];
function storeMouseCoords(_ref) {
    var clientX = _ref.clientX, clientY = _ref.clientY;
    mouseCoords = {
        clientX: clientX,
        clientY: clientY
    };
}
function addMouseCoordsListener(doc) {
    doc.addEventListener('mousemove', storeMouseCoords);
}
function removeMouseCoordsListener(doc) {
    doc.removeEventListener('mousemove', storeMouseCoords);
}
var followCursor = {
    name: 'followCursor',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        var doc = getOwnerDocument(instance.props.triggerTarget || reference);
        var isInternalUpdate = false;
        var wasFocusEvent = false;
        var isUnmounted = true;
        var prevProps = instance.props;
        function getIsInitialBehavior() {
            return instance.props.followCursor === 'initial' && instance.state.isVisible;
        }
        function addListener() {
            doc.addEventListener('mousemove', onMouseMove);
        }
        function removeListener() {
            doc.removeEventListener('mousemove', onMouseMove);
        }
        function unsetGetReferenceClientRect() {
            isInternalUpdate = true;
            instance.setProps({
                getReferenceClientRect: null
            });
            isInternalUpdate = false;
        }
        function onMouseMove(event) {
            // If the instance is interactive, avoid updating the position unless it's
            // over the reference element
            var isCursorOverReference = event.target ? reference.contains(event.target) : true;
            var followCursor = instance.props.followCursor;
            var clientX = event.clientX, clientY = event.clientY;
            var rect = reference.getBoundingClientRect();
            var relativeX = clientX - rect.left;
            var relativeY = clientY - rect.top;
            if (isCursorOverReference || !instance.props.interactive) instance.setProps({
                // @ts-ignore - unneeded DOMRect properties
                getReferenceClientRect: function getReferenceClientRect() {
                    var rect = reference.getBoundingClientRect();
                    var x = clientX;
                    var y = clientY;
                    if (followCursor === 'initial') {
                        x = rect.left + relativeX;
                        y = rect.top + relativeY;
                    }
                    var top = followCursor === 'horizontal' ? rect.top : y;
                    var right = followCursor === 'vertical' ? rect.right : x;
                    var bottom = followCursor === 'horizontal' ? rect.bottom : y;
                    var left = followCursor === 'vertical' ? rect.left : x;
                    return {
                        width: right - left,
                        height: bottom - top,
                        top: top,
                        right: right,
                        bottom: bottom,
                        left: left
                    };
                }
            });
        }
        function create() {
            if (instance.props.followCursor) {
                activeInstances.push({
                    instance: instance,
                    doc: doc
                });
                addMouseCoordsListener(doc);
            }
        }
        function destroy() {
            activeInstances = activeInstances.filter(function(data) {
                return data.instance !== instance;
            });
            if (activeInstances.filter(function(data) {
                return data.doc === doc;
            }).length === 0) removeMouseCoordsListener(doc);
        }
        return {
            onCreate: create,
            onDestroy: destroy,
            onBeforeUpdate: function onBeforeUpdate() {
                prevProps = instance.props;
            },
            onAfterUpdate: function onAfterUpdate(_, _ref2) {
                var followCursor = _ref2.followCursor;
                if (isInternalUpdate) return;
                if (followCursor !== undefined && prevProps.followCursor !== followCursor) {
                    destroy();
                    if (followCursor) {
                        create();
                        if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) addListener();
                    } else {
                        removeListener();
                        unsetGetReferenceClientRect();
                    }
                }
            },
            onMount: function onMount() {
                if (instance.props.followCursor && !wasFocusEvent) {
                    if (isUnmounted) {
                        onMouseMove(mouseCoords);
                        isUnmounted = false;
                    }
                    if (!getIsInitialBehavior()) addListener();
                }
            },
            onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) mouseCoords = {
                    clientX: event.clientX,
                    clientY: event.clientY
                };
                wasFocusEvent = event.type === 'focus';
            },
            onHidden: function onHidden() {
                if (instance.props.followCursor) {
                    unsetGetReferenceClientRect();
                    removeListener();
                    isUnmounted = true;
                }
            }
        };
    }
};
function getProps(props, modifier) {
    var _props$popperOptions;
    return {
        popperOptions: Object.assign({}, props.popperOptions, {
            modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function(_ref) {
                var name = _ref.name;
                return name !== modifier.name;
            }), [
                modifier
            ])
        })
    };
}
var inlinePositioning = {
    name: 'inlinePositioning',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        function isEnabled() {
            return !!instance.props.inlinePositioning;
        }
        var placement;
        var cursorRectIndex = -1;
        var isInternalUpdate = false;
        var triedPlacements = [];
        var modifier = {
            name: 'tippyInlinePositioning',
            enabled: true,
            phase: 'afterWrite',
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (isEnabled()) {
                    if (triedPlacements.indexOf(state.placement) !== -1) triedPlacements = [];
                    if (placement !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
                        triedPlacements.push(state.placement);
                        instance.setProps({
                            // @ts-ignore - unneeded DOMRect properties
                            getReferenceClientRect: function getReferenceClientRect() {
                                return _getReferenceClientRect(state.placement);
                            }
                        });
                    }
                    placement = state.placement;
                }
            }
        };
        function _getReferenceClientRect(placement) {
            return getInlineBoundingClientRect(getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
        }
        function setInternalProps(partialProps) {
            isInternalUpdate = true;
            instance.setProps(partialProps);
            isInternalUpdate = false;
        }
        function addModifier() {
            if (!isInternalUpdate) setInternalProps(getProps(instance.props, modifier));
        }
        return {
            onCreate: addModifier,
            onAfterUpdate: addModifier,
            onTrigger: function onTrigger(_, event) {
                if (isMouseEvent(event)) {
                    var rects = arrayFrom(instance.reference.getClientRects());
                    var cursorRect = rects.find(function(rect) {
                        return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
                    });
                    var index = rects.indexOf(cursorRect);
                    cursorRectIndex = index > -1 ? index : cursorRectIndex;
                }
            },
            onHidden: function onHidden() {
                cursorRectIndex = -1;
            }
        };
    }
};
function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
    // Not an inline element, or placement is not yet known
    if (clientRects.length < 2 || currentBasePlacement === null) return boundingRect;
     // There are two rects and they are disjoined
    if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) return clientRects[cursorRectIndex] || boundingRect;
    switch(currentBasePlacement){
        case 'top':
        case 'bottom':
            var firstRect = clientRects[0];
            var lastRect = clientRects[clientRects.length - 1];
            var isTop = currentBasePlacement === 'top';
            var top = firstRect.top;
            var bottom = lastRect.bottom;
            var left = isTop ? firstRect.left : lastRect.left;
            var right = isTop ? firstRect.right : lastRect.right;
            var width = right - left;
            var height = bottom - top;
            return {
                top: top,
                bottom: bottom,
                left: left,
                right: right,
                width: width,
                height: height
            };
        case 'left':
        case 'right':
            var minLeft = Math.min.apply(Math, clientRects.map(function(rects) {
                return rects.left;
            }));
            var maxRight = Math.max.apply(Math, clientRects.map(function(rects) {
                return rects.right;
            }));
            var measureRects = clientRects.filter(function(rect) {
                return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
            });
            var _top = measureRects[0].top;
            var _bottom = measureRects[measureRects.length - 1].bottom;
            var _left = minLeft;
            var _right = maxRight;
            var _width = _right - _left;
            var _height = _bottom - _top;
            return {
                top: _top,
                bottom: _bottom,
                left: _left,
                right: _right,
                width: _width,
                height: _height
            };
        default:
            return boundingRect;
    }
}
var sticky = {
    name: 'sticky',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference, popper = instance.popper;
        function getReference() {
            return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
        }
        function shouldCheck(value) {
            return instance.props.sticky === true || instance.props.sticky === value;
        }
        var prevRefRect = null;
        var prevPopRect = null;
        function updatePosition() {
            var currentRefRect = shouldCheck('reference') ? getReference().getBoundingClientRect() : null;
            var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;
            if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
                if (instance.popperInstance) instance.popperInstance.update();
            }
            prevRefRect = currentRefRect;
            prevPopRect = currentPopRect;
            if (instance.state.isMounted) requestAnimationFrame(updatePosition);
        }
        return {
            onMount: function onMount() {
                if (instance.props.sticky) updatePosition();
            }
        };
    }
};
function areRectsDifferent(rectA, rectB) {
    if (rectA && rectB) return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
    return true;
}
tippy.setDefaultProps({
    render: render
});
exports.default = tippy;

},{"@popperjs/core":"7unqC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7unqC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
parcelHelpers.export(exports, "createPopperBase", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "createPopper", ()=>(0, _popperJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper));
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":false,"./modifiers/index.js":"cap3W","./createPopper.js":false,"./popper.js":"1PuRF","./popper-lite.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCAq5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cap3W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>(0, _applyStylesJsDefault.default));
parcelHelpers.export(exports, "arrow", ()=>(0, _arrowJsDefault.default));
parcelHelpers.export(exports, "computeStyles", ()=>(0, _computeStylesJsDefault.default));
parcelHelpers.export(exports, "eventListeners", ()=>(0, _eventListenersJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "hide", ()=>(0, _hideJsDefault.default));
parcelHelpers.export(exports, "offset", ()=>(0, _offsetJsDefault.default));
parcelHelpers.export(exports, "popperOffsets", ()=>(0, _popperOffsetsJsDefault.default));
parcelHelpers.export(exports, "preventOverflow", ()=>(0, _preventOverflowJsDefault.default));
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"4iMn4","./arrow.js":false,"./computeStyles.js":false,"./eventListeners.js":false,"./flip.js":false,"./hide.js":false,"./offset.js":false,"./popperOffsets.js":false,"./preventOverflow.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iMn4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? '' : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = '';
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: [
        'computeStyles'
    ]
};

},{"../dom-utils/getNodeName.js":"a2Qom","../dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2Qom":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeName);
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYFUC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2SkOo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindow);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31HFW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, _mergePaddingObjectJsDefault.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var axis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var isVertical = [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, _getLayoutRectJsDefault.default)(arrowElement);
    var minProp = axis === 'y' ? (0, _enumsJs.top) : (0, _enumsJs.left);
    var maxProp = axis === 'y' ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, _getOffsetParentJsDefault.default)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, _withinJs.within)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, _containsJsDefault.default)(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};

},{"../utils/getBasePlacement.js":"59Wp3","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/contains.js":"4QxRR","../dom-utils/getOffsetParent.js":"laoYw","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/within.js":"3glSz","../utils/mergePaddingObject.js":"lEIf9","../utils/expandToHashMap.js":"iQlH5","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Wp3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBasePlacement);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split('-')[0];
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvjuf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getLayoutRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CFSQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBoundingClientRect);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}

},{"./instanceOf.js":"gYFUC","../utils/math.js":"gQqVe","./getWindow.js":"2SkOo","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQqVe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ipHv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isLayoutViewport);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}

},{"../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hEx0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUAString);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(' ');
    return navigator.userAgent;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QxRR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laoYw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOffsetParent);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === 'fixed') return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === 'fixed') return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        'html',
        'body'
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === 'static')offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === 'html' || (0, _getNodeNameJsDefault.default)(offsetParent) === 'body' && (0, _getComputedStyleJsDefault.default)(offsetParent).position === 'static')) return window;
    return offsetParent || getContainingBlock(element) || window;
}

},{"./getWindow.js":"2SkOo","./getNodeName.js":"a2Qom","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./isTableElement.js":"2qBb7","./getParentNode.js":"bIHpd","../utils/userAgent.js":"1hEx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mZjB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getComputedStyle);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qBb7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isTableElement);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}

},{"./getNodeName.js":"a2Qom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIHpd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getParentNode);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === 'html') return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}

},{"./getNodeName.js":"a2Qom","./getDocumentElement.js":"eJ9Y1","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ9Y1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentElement);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

},{"./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xlom":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getMainAxisFromPlacement);
function getMainAxisFromPlacement(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3glSz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEIf9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergePaddingObject);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}

},{"./getFreshSideObject.js":"g4xOt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4xOt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getFreshSideObject);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQlH5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>expandToHashMap);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDlm2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, _getWindowJsDefault.default)(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"lCAq5","../dom-utils/getOffsetParent.js":"laoYw","../dom-utils/getWindow.js":"2SkOo","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getComputedStyle.js":"3mZjB","../utils/getBasePlacement.js":"59Wp3","../utils/getVariation.js":"hIo7Y","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIo7Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getVariation);
function getVariation(placement) {
    return placement.split('-')[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBKsL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
    });
    if (resize) window.addEventListener('resize', instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
        });
        if (resize) window.removeEventListener('resize', instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fv5wq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"a8CY0","../utils/getBasePlacement.js":"59Wp3","../utils/getOppositeVariationPlacement.js":"bKTLC","../utils/detectOverflow.js":"ltCuw","../utils/computeAutoPlacement.js":"gytMj","../enums.js":"lCAq5","../utils/getVariation.js":"hIo7Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8CY0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositePlacement);
var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKTLC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getOppositeVariationPlacement);
var hash = {
    start: 'end',
    end: 'start'
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltCuw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>detectOverflow);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}

},{"../dom-utils/getClippingRect.js":"eeg2s","../dom-utils/getDocumentElement.js":"eJ9Y1","../dom-utils/getBoundingClientRect.js":"9CFSQ","./computeOffsets.js":"7jtXk","./rectToClientRect.js":"cQ3tg","../enums.js":"lCAq5","../dom-utils/instanceOf.js":"gYFUC","./mergePaddingObject.js":"lEIf9","./expandToHashMap.js":"iQlH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeg2s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getClippingRect);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element, strategy)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== 'body';
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

},{"../enums.js":"lCAq5","./getViewportRect.js":"cnH2G","./getDocumentRect.js":"d94SC","./listScrollParents.js":"2di3T","./getOffsetParent.js":"laoYw","./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./instanceOf.js":"gYFUC","./getBoundingClientRect.js":"9CFSQ","./getParentNode.js":"bIHpd","./contains.js":"4QxRR","./getNodeName.js":"a2Qom","../utils/rectToClientRect.js":"cQ3tg","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnH2G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getViewportRect);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getViewportRect(element, strategy) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, _isLayoutViewportJsDefault.default)();
        if (layoutViewport || !layoutViewport && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}

},{"./getWindow.js":"2SkOo","./getDocumentElement.js":"eJ9Y1","./getWindowScrollBarX.js":"sz4Ld","./isLayoutViewport.js":"3ipHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sz4Ld":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScrollBarX);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}

},{"./getBoundingClientRect.js":"9CFSQ","./getDocumentElement.js":"eJ9Y1","./getWindowScroll.js":"1XUtN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XUtN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindowScroll);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

},{"./getWindow.js":"2SkOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d94SC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocumentRect);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === 'rtl') x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}

},{"./getDocumentElement.js":"eJ9Y1","./getComputedStyle.js":"3mZjB","./getWindowScrollBarX.js":"sz4Ld","./getWindowScroll.js":"1XUtN","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2di3T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>listScrollParents);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}

},{"./getScrollParent.js":"jy4ZS","./getParentNode.js":"bIHpd","./getWindow.js":"2SkOo","./isScrollParent.js":"9rLGO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy4ZS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getScrollParent);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}

},{"./getParentNode.js":"bIHpd","./isScrollParent.js":"9rLGO","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rLGO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isScrollParent);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

},{"./getComputedStyle.js":"3mZjB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ3tg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rectToClientRect);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jtXk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeOffsets);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}

},{"./getBasePlacement.js":"59Wp3","./getVariation.js":"hIo7Y","./getMainAxisFromPlacement.js":"1Xlom","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gytMj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>computeAutoPlacement);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}

},{"./getVariation.js":"hIo7Y","../enums.js":"lCAq5","./detectOverflow.js":"ltCuw","./getBasePlacement.js":"59Wp3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2g4OF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        (0, _enumsJs.top),
        (0, _enumsJs.right),
        (0, _enumsJs.bottom),
        (0, _enumsJs.left)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, _detectOverflowJsDefault.default)(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = (0, _detectOverflowJsDefault.default)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: hide
};

},{"../enums.js":"lCAq5","../utils/detectOverflow.js":"ltCuw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GKVY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
    var invertDistance = [
        (0, _enumsJs.left),
        (0, _enumsJs.top)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, _enumsJs.left),
        (0, _enumsJs.right)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, _enumsJs.placements).reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"59Wp3","../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I679":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"7jtXk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AMhb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === 'y' ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === 'y' ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === 'x' ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === 'x' ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === 'y' ? 'height' : 'width';
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};

},{"../enums.js":"lCAq5","../utils/getBasePlacement.js":"59Wp3","../utils/getMainAxisFromPlacement.js":"1Xlom","../utils/getAltAxis.js":"59FWE","../utils/within.js":"3glSz","../dom-utils/getLayoutRect.js":"jvjuf","../dom-utils/getOffsetParent.js":"laoYw","../utils/detectOverflow.js":"ltCuw","../utils/getVariation.js":"hIo7Y","../utils/getFreshSideObject.js":"g4xOt","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59FWE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getAltAxis);
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHuNp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === 'fixed'),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"ijPls","./dom-utils/getLayoutRect.js":"jvjuf","./dom-utils/listScrollParents.js":"2di3T","./dom-utils/getOffsetParent.js":"laoYw","./utils/orderModifiers.js":"N0VO0","./utils/debounce.js":"g6Chr","./utils/mergeByName.js":"2zTVN","./utils/detectOverflow.js":false,"./dom-utils/instanceOf.js":"gYFUC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijPls":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getCompositeRect);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

},{"./getBoundingClientRect.js":"9CFSQ","./getNodeScroll.js":"bBjCr","./getNodeName.js":"a2Qom","./instanceOf.js":"gYFUC","./getWindowScrollBarX.js":"sz4Ld","./getDocumentElement.js":"eJ9Y1","./isScrollParent.js":"9rLGO","../utils/math.js":"gQqVe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBjCr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getNodeScroll);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}

},{"./getWindowScroll.js":"1XUtN","./getWindow.js":"2SkOo","./instanceOf.js":"gYFUC","./getHTMLElementScroll.js":"6pwY2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pwY2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getHTMLElementScroll);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N0VO0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>orderModifiers);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}

},{"../enums.js":"lCAq5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6Chr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>debounce);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zTVN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeByName);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PuRF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopperLite", ()=>(0, _popperLiteJs.createPopper)) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopper", ()=>createPopper) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default),
    (0, _offsetJsDefault.default),
    (0, _flipJsDefault.default),
    (0, _preventOverflowJsDefault.default),
    (0, _arrowJsDefault.default),
    (0, _hideJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"cHuNp","./modifiers/eventListeners.js":"hBKsL","./modifiers/popperOffsets.js":"6I679","./modifiers/computeStyles.js":"gDlm2","./modifiers/applyStyles.js":"4iMn4","./modifiers/offset.js":"3GKVY","./modifiers/flip.js":"fv5wq","./modifiers/preventOverflow.js":"1AMhb","./modifiers/arrow.js":"31HFW","./modifiers/hide.js":"2g4OF","./popper-lite.js":false,"./modifiers/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2hEyg":[function() {},{}]},["lC3Ec","8ZNvh"], "8ZNvh", "parcelRequire94c2")

//# sourceMappingURL=index.f5c48570.js.map
