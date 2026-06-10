// Amazon marketplace router for Mare Non Nostrum.
// Points [data-amz="pb"|"kd"] links at the visitor's likely store, inferred
// from navigator.languages. Plain amazon.com is the default (set in the HTML),
// so the buttons work with JS disabled; this only upgrades them. The "Other
// Amazon stores" picker remains the manual override.
(function () {
  var PB_ASIN = 'B0GWV3BZNH', KD_ASIN = 'B0GWXQNXKJ';

  // marketplaces where each format is actually available
  var PB = {US:'amazon.com',GB:'amazon.co.uk',DE:'amazon.de',FR:'amazon.fr',
            ES:'amazon.es',IT:'amazon.it',NL:'amazon.nl',PL:'amazon.pl',
            SE:'amazon.se',BE:'amazon.com.be',IE:'amazon.ie',JP:'amazon.co.jp',
            CA:'amazon.ca',AU:'amazon.com.au'};
  var KD = {US:'amazon.com',GB:'amazon.co.uk',DE:'amazon.de',FR:'amazon.fr',
            ES:'amazon.es',IT:'amazon.it',NL:'amazon.nl',JP:'amazon.co.jp',
            BR:'amazon.com.br',CA:'amazon.ca',MX:'amazon.com.mx',
            AU:'amazon.com.au',IN:'amazon.in'};
  // language-only fallback (no region subtag) → a sensible marketplace
  var LANG = {en:'US',de:'DE',fr:'FR',es:'ES',it:'IT',nl:'NL',pl:'PL',
              sv:'SE',ja:'JP',pt:'BR',hi:'IN'};

  function region() {
    var ls = navigator.languages || [navigator.language || 'en-US'];
    for (var i = 0; i < ls.length; i++) {
      var p = ls[i].split('-');
      if (p[1]) return p[1].toUpperCase();      // region subtag, e.g. en-GB → GB
    }
    for (var j = 0; j < ls.length; j++) {
      var c = LANG[ls[j].split('-')[0].toLowerCase()];
      if (c) return c;
    }
    return 'US';
  }

  var r = region();
  function set(sel, dom, asin) {
    var a = document.querySelectorAll(sel);
    for (var i = 0; i < a.length; i++) a[i].href = 'https://www.' + dom + '/dp/' + asin;
  }
  set('a[data-amz="pb"]', PB[r] || 'amazon.com', PB_ASIN);
  set('a[data-amz="kd"]', KD[r] || 'amazon.com', KD_ASIN);
})();
