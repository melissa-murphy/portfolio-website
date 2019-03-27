// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/main.js":[function(require,module,exports) {
/*
	Story by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function ($) {
  var $window = $(window),
      $body = $('body'),
      $wrapper = $('#wrapper'); // Breakpoints.

  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: ['361px', '480px'],
    xxsmall: [null, '360px']
  }); // Play initial animations on page load.

  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  }); // Browser fixes.
  // IE: Flexbox min-height bug.

  if (browser.name == 'ie') (function () {
    var flexboxFixTimeoutId;
    $window.on('resize.flexbox-fix', function () {
      var $x = $('.fullscreen');
      clearTimeout(flexboxFixTimeoutId);
      flexboxFixTimeoutId = setTimeout(function () {
        if ($x.prop('scrollHeight') > $window.height()) $x.css('height', 'auto');else $x.css('height', '100vh');
      }, 250);
    }).triggerHandler('resize.flexbox-fix');
  })(); // Object fit workaround.

  if (!browser.canUse('object-fit')) (function () {
    $('.banner .image, .spotlight .image').each(function () {
      var $this = $(this),
          $img = $this.children('img'),
          positionClass = $this.parent().attr('class').match(/image-position-([a-z]+)/); // Set image.

      $this.css('background-image', 'url("' + $img.attr('src') + '")').css('background-repeat', 'no-repeat').css('background-size', 'cover'); // Set position.

      switch (positionClass.length > 1 ? positionClass[1] : '') {
        case 'left':
          $this.css('background-position', 'left');
          break;

        case 'right':
          $this.css('background-position', 'right');
          break;

        default:
        case 'center':
          $this.css('background-position', 'center');
          break;
      } // Hide original.


      $img.css('opacity', '0');
    });
  })(); // Smooth scroll.

  $('.smooth-scroll').scrolly();
  $('.smooth-scroll-middle').scrolly({
    anchor: 'middle'
  }); // Wrapper.

  $wrapper.children().scrollex({
    top: '30vh',
    bottom: '30vh',
    initialize: function initialize() {
      $(this).addClass('is-inactive');
    },
    terminate: function terminate() {
      $(this).removeClass('is-inactive');
    },
    enter: function enter() {
      $(this).removeClass('is-inactive');
    },
    leave: function leave() {
      var $this = $(this);
      if ($this.hasClass('onscroll-bidirectional')) $this.addClass('is-inactive');
    }
  }); // Items.

  $('.items').scrollex({
    top: '30vh',
    bottom: '30vh',
    delay: 50,
    initialize: function initialize() {
      $(this).addClass('is-inactive');
    },
    terminate: function terminate() {
      $(this).removeClass('is-inactive');
    },
    enter: function enter() {
      $(this).removeClass('is-inactive');
    },
    leave: function leave() {
      var $this = $(this);
      if ($this.hasClass('onscroll-bidirectional')) $this.addClass('is-inactive');
    }
  }).children().wrapInner('<div class="inner"></div>'); // Gallery.

  $('.gallery').wrapInner('<div class="inner"></div>').prepend(browser.mobile ? '' : '<div class="forward"></div><div class="backward"></div>').scrollex({
    top: '30vh',
    bottom: '30vh',
    delay: 50,
    initialize: function initialize() {
      $(this).addClass('is-inactive');
    },
    terminate: function terminate() {
      $(this).removeClass('is-inactive');
    },
    enter: function enter() {
      $(this).removeClass('is-inactive');
    },
    leave: function leave() {
      var $this = $(this);
      if ($this.hasClass('onscroll-bidirectional')) $this.addClass('is-inactive');
    }
  }).children('.inner') //.css('overflow', 'hidden')
  .css('overflow-y', browser.mobile ? 'visible' : 'hidden').css('overflow-x', browser.mobile ? 'scroll' : 'hidden').scrollLeft(0); // Style #1.
  // ...
  // Style #2.

  $('.gallery').on('wheel', '.inner', function (event) {
    var $this = $(this),
        delta = event.originalEvent.deltaX * 10; // Cap delta.

    if (delta > 0) delta = Math.min(25, delta);else if (delta < 0) delta = Math.max(-25, delta); // Scroll.

    $this.scrollLeft($this.scrollLeft() + delta);
  }).on('mouseenter', '.forward, .backward', function (event) {
    var $this = $(this),
        $inner = $this.siblings('.inner'),
        direction = $this.hasClass('forward') ? 1 : -1; // Clear move interval.

    clearInterval(this._gallery_moveIntervalId); // Start interval.

    this._gallery_moveIntervalId = setInterval(function () {
      $inner.scrollLeft($inner.scrollLeft() + 5 * direction);
    }, 10);
  }).on('mouseleave', '.forward, .backward', function (event) {
    // Clear move interval.
    clearInterval(this._gallery_moveIntervalId);
  }); // Lightbox.

  $('.gallery.lightbox').on('click', 'a', function (event) {
    var $a = $(this),
        $gallery = $a.parents('.gallery'),
        $modal = $gallery.children('.modal'),
        $modalImg = $modal.find('img'),
        href = $a.attr('href'); // Not an image? Bail.

    if (!href.match(/\.(jpg|gif|png|mp4)$/)) return; // Prevent default.

    event.preventDefault();
    event.stopPropagation(); // Locked? Bail.

    if ($modal[0]._locked) return; // Lock.

    $modal[0]._locked = true; // Set src.

    $modalImg.attr('src', href); // Set visible.

    $modal.addClass('visible'); // Focus.

    $modal.focus(); // Delay.

    setTimeout(function () {
      // Unlock.
      $modal[0]._locked = false;
    }, 600);
  }).on('click', '.modal', function (event) {
    var $modal = $(this),
        $modalImg = $modal.find('img'); // Locked? Bail.

    if ($modal[0]._locked) return; // Already hidden? Bail.

    if (!$modal.hasClass('visible')) return; // Lock.

    $modal[0]._locked = true; // Clear visible, loaded.

    $modal.removeClass('loaded'); // Delay.

    setTimeout(function () {
      $modal.removeClass('visible');
      setTimeout(function () {
        // Clear src.
        $modalImg.attr('src', ''); // Unlock.

        $modal[0]._locked = false; // Focus.

        $body.focus();
      }, 475);
    }, 125);
  }).on('keypress', '.modal', function (event) {
    var $modal = $(this); // Escape? Hide modal.

    if (event.keyCode == 27) $modal.trigger('click');
  }).prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>').find('img').on('load', function (event) {
    var $modalImg = $(this),
        $modal = $modalImg.parents('.modal');
    setTimeout(function () {
      // No longer visible? Bail.
      if (!$modal.hasClass('visible')) return; // Set loaded.

      $modal.addClass('loaded');
    }, 275);
  });
})(jQuery);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60808" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/main.js"], null)
//# sourceMappingURL=/main.cea5deef.js.map