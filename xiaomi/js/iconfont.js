;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-video" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M853.333333 1024 170.666667 1024c-93.866667 0-170.666667-76.8-170.666667-170.666667L0 170.666667c0-93.866667 76.8-170.666667 170.666667-170.666667l682.666667 0c93.866667 0 170.666667 76.8 170.666667 170.666667l0 682.666667C1024 947.2 947.2 1024 853.333333 1024zM170.666667 85.333333C123.733333 85.333333 85.333333 123.733333 85.333333 170.666667l0 682.666667c0 46.933333 38.4 85.333333 85.333333 85.333333l682.666667 0c46.933333 0 85.333333-38.4 85.333333-85.333333L938.666667 170.666667c0-46.933333-38.4-85.333333-85.333333-85.333333L170.666667 85.333333z"  ></path>' +
    '' +
    '<path d="M384 725.333333c-8.533333 0-12.8 0-21.333333-4.266667C349.866667 712.533333 341.333333 699.733333 341.333333 682.666667L341.333333 341.333333c0-17.066667 8.533333-29.866667 21.333333-38.4 12.8-8.533333 29.866667-8.533333 42.666667 0l298.666667 170.666667c12.8 8.533333 21.333333 21.333333 21.333333 38.4s-8.533333 29.866667-21.333333 38.4l-298.666667 170.666667C396.8 725.333333 392.533333 725.333333 384 725.333333zM426.666667 413.866667l0 196.266667 170.666667-98.133333L426.666667 413.866667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)