// ==UserScript==
//
// @name         Discogs Scout
// @version      0.1
// @namespace    https://github.com/Purfview/Discogs-Scout
// @description  Auto search for music on torrent and other sites. Adds links to Discogs pages from various sites.
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUBAAAAifwLExgFkP4NJTYQOFUQTHoRYZ0Kbr4Ol/4UgdMGft8acrIPiecWke4Znv7mtRJQAAAEFUlEQVRIx71US4wMURQ9KlXTHWye8utppJRpI8GiFN3Gt4xu4xcpdPuLpo0hhPaZ7sQnad8ZRIQxxiTiM8GEWOhIRCxEzPhEbIhPJCQiIWFHsLFx33uKNtqsxFm8uq/eeffce+vewn+GMi9Rl5hXbeAvmH/VtnTbsvuuLH59rc1+wH5a7HyzxTz0b7v2p8xcfpMxnbtp9Ou16IAhgfus75TsgdZV9fV15vLSeIc41HzjbMbSQqssu9vqlww5vwtMMBnhxpaq6wfzZOguoiiA9rHFZzdXVFj6ZSagJ6G5BYTJ46BmorHE0lPOWUGoILV4QYpWi7JCWNWYyrMN1Drk1vkV4kR36BjP42YSaBRv0/Aw+Lj6iAWz9cJL+YHmVn7XwLOfCmdz3XTueWzG4NuEYZpVdS4WeuUsCSRTJ7fyEpZCwPdtpzWgEn5PwxfBGAdVDYz1lSF9KGcVbxWoI7wkj6mb6DGMVPYZoWgoP6r7hWojBIyGROoWCRtQ2ii/9FKijbnDQwESEFCobMoOi2r33m6Khiz99G0sqBXBuTLGMQbU+a9OGgglKNGZl+MobzjBG89/RRC69Te4BIn8hKlMb6etdkbshveRSmLNSIahuPzVJkkIc9ucp9JTFXa8KrlX3HkisxzF7W3B3eRJPQ5ajtiMiAS5Ln9Mi9O9wf5KAUdAWGPbLeAhZQVhZ440VxtTVjlU1FI5QKsM0VF1grA7B7VpMH06InQNyrY0y0SV6j0Pfha5ibo7BoYTIepoNSURX7UJ1AjCxhF8KEo1Pf8Ok4gQizmhmrEvM0ngoCQcw2TGenU5+TBr7gzyvO/rWRa86XofIzUKXS29aXhanR+zqKrK1bWsRvZGpZyJ3tSITfMzcx6u9DGylUMz7C1Xm8/R0XlZScpddfHi5QqkdF4oRdvuLIlzo0VOjeyLeQbQ1ivlSreiQ9SktPa73jccfMwfuP2L4EtLc1G7eJS1UjNceic6HlKcbkoNhd+oYoY8mxSmlc/mVs9ZW6V403Ct2oFqLGwWwXdNql8gYQxzo3yWQhebG+5tfb1I/Dti5fCf+TlazhYiTAGisTkmp2IlMlFsKGjC56AANTnhlN6uuHJupSKUvJF2iD0wzGurzFHcDLq2J7snC/8gPUKU9metsVzNpdRPwIbpyXUogM8qI/9GyesN0cZlrgvlbka7hUKkepaJkJZUtofIGNrfWY/f4LejWwq2hzd1+4zfsZnZLkr2yM3QN9pEpwOhxNJzmFVB7udgcMDd34KOmG7lMJ3tghbB3NLFEfyJWW8wiIVD/jA2ngikixAUB0NZ8MDiMB7UtKM4hjAWJIJp4i/wMcbyI1H8XKZChKP4O1SLBTffQifIs+BDozNCigUr0Rmm6ePRKbTWWvxrfAfEou1mueFddwAAAABJRU5ErkJggg==
// @license      MIT
//
// @homepage     https://github.com/Purfview/Discogs-Scout
// @supportURL   https://github.com/Purfview/Discogs-Scout/issues
//
// @compatible   firefox
// @compatible   opera
// @compatible   chrome
// @compatible   safari (it doesn't support the sites with logins)
// @compatible   edge
//
// @require      https://cdn.jsdelivr.net/gh/sizzlemctwizzle/GM_config@43fd0fe4de1166f343883511e53546e87840aeaf/gm_config.js
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
//
// @include      https://www.discogs.com/artist/*
//
// @connect      *
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.openInTab
// @grant        GM.xmlHttpRequest
// @grant        GM.registerMenuCommand
// @grant        GM.notification
//
// @run-at       document-start
// @noframes
//
// ==/UserScript==
//
/*=========================  Version History  ==================================


0.1     -    Initial alpha test release.


==============================================================================*/

var public_sites = [
  {   'name': 'Dummy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADsSURBVHja3NhbFoMwCEVR5j9p+ltr4B7Io0v1L6nslGSZoLntve0IIK/kefWY+hUcZg8o5qIKNNLNgfaMCiBeWKNrjPzGs2GDDJ4xKVALHiLhHIjgcR8D0vAqdSMiAch0auIKlEYPCA7c2ynxDYDxk1bXAF05JJ1XpTR+Z4v5DvgLAfVyyHoXAF4D1ox/GtD/dwog6ZwA2GwtALwH2JLwzwfsr4BtAhovC3KEgTtaG4i2TJtIUbwn2wogP1UAgvUiwMoAOdnhs2kb2H66PlAfVCocr1c40zWa8yrT91aZR+rkA5U+Qdi3ip33ZwAb5/CcnuFpKAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://dummy.dummy',
      'loggedOutRegex': /dummy/,
      'matchRegex': /dummy/}
];

var private_sites = [
  {   'name': 'RED',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAAAAADu7vnLzOG9vszc3O6wsdNBQkvnAAArLDAaGh1dXWSen72HiKdub32FAAA3CR0mAAAAAXRSTlMAQObYZgAAARVJREFUKM9jAAOdnQulZh9igANrQTAogfG5BcWvBKn6FgpugPCZCqWDlIBAdaO4AliAXSpJ+flCqXlOKguLwAIbF6tuBBkhbmQlDeKzCKZaQgxdFiJ4AKRDLngiREDK9WEBUMBxcbggFEy2kgEZsfkgTEDWThxoqWByIUxA0kRQgYFZ0k0QDo5MdGDgFfdDCDzZ+ICBWy4dxPzRDyLLgNZwymYCWfIdHR9BLrk4gYFLfCGQJdHR0QhySaEAAyOQhgqAAFBA6pqpIkSLkKrtRKCAbApQAGQoUMDkIlBABiQABGCBxMEjwCmLLHBxAQO3JNAvIsCIqnME+WUDAxMoDgrAMQgKVWBk8k0UFDcACTAXCko+YAAA5BtcVzEnMFcAAAAASUVORK5CYII=',
      'searchUrl': 'https://redacted.ch/torrents.php?artistname=%band%&groupname=%release%&filter_cat[1]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me</,
      'matchRegex': /did not match anything/},
  {   'name': 'RED-Miss',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAAAAADu7vnLzOG9vszc3O6wsdNBQkvnAAArLDAaGh1dXWSen72HiKdub32FAAA3CR0mAAAAAXRSTlMAQObYZgAAARVJREFUKM9jAAOdnQulZh9igANrQTAogfG5BcWvBKn6FgpugPCZCqWDlIBAdaO4AliAXSpJ+flCqXlOKguLwAIbF6tuBBkhbmQlDeKzCKZaQgxdFiJ4AKRDLngiREDK9WEBUMBxcbggFEy2kgEZsfkgTEDWThxoqWByIUxA0kRQgYFZ0k0QDo5MdGDgFfdDCDzZ+ICBWy4dxPzRDyLLgNZwymYCWfIdHR9BLrk4gYFLfCGQJdHR0QhySaEAAyOQhgqAAFBA6pqpIkSLkKrtRKCAbApQAGQoUMDkIlBABiQABGCBxMEjwCmLLHBxAQO3JNAvIsCIqnME+WUDAxMoDgrAMQgKVWBk8k0UFDcACTAXCko+YAAA5BtcVzEnMFcAAAAASUVORK5CYII=',
      'searchUrl': 'https://redacted.ch/torrents.php?artistname=%band%&groupname=mmmiiisssing&filter_cat[1]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me</,
      'matchRegex': /did not match anything/},
  {   'name': 'RED-Error',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAAAAADu7vnLzOG9vszc3O6wsdNBQkvnAAArLDAaGh1dXWSen72HiKdub32FAAA3CR0mAAAAAXRSTlMAQObYZgAAARVJREFUKM9jAAOdnQulZh9igANrQTAogfG5BcWvBKn6FgpugPCZCqWDlIBAdaO4AliAXSpJ+flCqXlOKguLwAIbF6tuBBkhbmQlDeKzCKZaQgxdFiJ4AKRDLngiREDK9WEBUMBxcbggFEy2kgEZsfkgTEDWThxoqWByIUxA0kRQgYFZ0k0QDo5MdGDgFfdDCDzZ+ICBWy4dxPzRDyLLgNZwymYCWfIdHR9BLrk4gYFLfCGQJdHR0QhySaEAAyOQhgqAAFBA6pqpIkSLkKrtRKCAbApQAGQoUMDkIlBABiQABGCBxMEjwCmLLHBxAQO3JNAvIsCIqnME+WUDAxMoDgrAMQgKVWBk8k0UFDcACTAXCko+YAAA5BtcVzEnMFcAAAAASUVORK5CYII=',
      'searchUrl': 'https://redacddted.ch/torrents.php?artistname=%band%&groupname=%release%&filter_cat[1]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me</,
      'matchRegex': /did not match anything/}
];

var sites = public_sites.concat(private_sites);

//==============================================================================
//    Replace Search URL parameters
//==============================================================================

async function replaceSearchUrlParams(site, band, release, mPOSTsearch) {
  var search_url = ('mPOST' in site && !mPOSTsearch) ? site['mPOST'] : site['searchUrl'];
  var space_replace = ('spaceEncode' in site) ? site['spaceEncode'] : '+';
  var band = band.trim().replace(/\s+/g, space_replace);
  var release = release.trim().replace(/\s+/g, space_replace);
  var s = search_url.replace(/%band%/g, band)
                    .replace(/%release%/g, release);
  return s;
}

//==============================================================================
//    Get site's icon
//==============================================================================

function getFavicon(site, hide_on_err) {
  var favicon;
  if (typeof(hide_on_err) === 'undefined') {
    hide_on_err = false;
  } else if (hide_on_err === false) {
    return;
  }
  if ('icon' in site) {
    favicon = site['icon'];
  } else {
    var url = new URL(site['searchUrl']);
    favicon = url.origin + '/favicon.ico';
  }
  const size = GM_config.get('mod_icons_size');
  const border = parseInt(GM_config.get('iconsborder_size')) *2;
  var iconsize = GM_config.get('mod_icons_size');
  var iconsize = ('matchRegex' in site) ? size : GM_config.get('auto_search') ? size - border : size;
  var title = site['name'];
  var img = $('<img />').attr({'style': '-moz-opacity: 0.4; border: 0',
                               'width': iconsize,
                               'height': iconsize,
                               'src': favicon,
                               'title': title,
                               'alt': site['name']});
  if (hide_on_err) { img.attr('onerror', "this.style.display='none';"); }
  return img;
}

//==============================================================================
//    Add search links to an element
//==============================================================================

function addLink(elem, site_name, target, site, state, scout_tick, post_data) {
  // State should always be one of the values defined in valid_states.
  if ($.inArray(state, valid_states) < 0) {
    console.log("Unknown state: " + state);
  }

  var link = $('<a />').attr('href', target).attr('target', '_blank').attr('rel', 'noreferrer');
  // Link and add Form element for POST method.
  if ('mPOST' in site) {
    var form_name = site['name'] + '-form-' + scout_tick;
    var placebo_url = new URL(target).origin;
    link = $('<a />').attr('href', placebo_url).attr('onclick', "$('#" + form_name + "').submit(); return false;").attr('target', '_blank').attr('rel', 'noreferrer');

    var data = (post_data.match('{')) ? post_data : '{"' + post_data.replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') + '"}';
    var addform = $('<form></form>');
        addform.attr('id', form_name);
        addform.attr('action', target);
        addform.attr('method', 'post');
        addform.attr('style', 'display: none;');
        addform.attr('target', '_blank');
        addform.attr('rel', 'noreferrer');

    if (post_data.match('},{')) {
      const dataArray = (new Function("return [" +data+ "];")());
      dataArray.forEach(function (item, index) {
        let addinput = $("<input>");
            addinput.attr('type', 'text');
            addinput.attr('name', item.key);
            addinput.attr('value', item.value);
        addform.append(addinput);
        $('body').append(addform);
      });
    } else {
      data = JSON.parse(data);
      for (const name in data) {
        let addinput = $("<input>");
            addinput.attr('type', 'text');
            addinput.attr('name', name);
            addinput.attr('value', data[name]);
        addform.append(addinput);
        $('body').append(addform);
     }
    }
  }
  // Icon appearance.
  let icon;
  const border_width = GM_config.get('iconsborder_size');
  if (GM_config.get('auto_search')) {
    icon = getFavicon(site);
    icon.css({'border-width': border_width, 'border-style': 'solid', 'border-radius': '2px', 'margin': '1px 2px 2px'});
    if (state == 'error' || state == 'logged_out') {
      (GM_config.get('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(255,0,0)')
                                                                           : icon.css('border-color', 'rgb(180,0,0)');
    } else if (state == 'missing') {
      (GM_config.get('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(255,255,0)')
                                                                           : icon.css('border-color', 'rgb(230,200,100)');
    } else if (state == 'found') {
      (GM_config.get('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(0,220,0)')
                                                                           : icon.css('border-color', 'rgb(0,130,0)');
    }
    link.append(icon);
  } else {
    icon = getFavicon(site);
    icon.css({'border-width': '0px', 'border-style': 'solid', 'border-radius': '2px', 'margin': '1px 2px 2px'});
    (GM_config.get('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(0,220,0)')
                                                                         : icon.css('border-color', 'rgb(0,130,0)');
    link.append(icon);
  }
  // Create/find elements for Artist pages.
  if (onArtistPage) {
    if ($('.result_box' + scout_tick).length == 0) {
      $(elem).after($('<tr/>').append($('<td/>',{'colspan':'8'}).append($('<div/>').addClass('result_box' + scout_tick))));
      $.each(valid_states, function(i, name) {
        $('.result_box' + scout_tick).append("<span id='discogscout_" + name + scout_tick + "'>"+'</span>');
      });
    }
  }
  if (onArtistPage && GM_config.get('load_second_bar')) {
    if ($('.result_box_2nd' + scout_tick).length == 0) {
      $(elem).after($('<tr/>').append($('<td/>',{'colspan':'8'}).append($('<div/>').addClass('result_box_2nd' + scout_tick))));
      $.each(valid_states, function(i, name) {
        $('.result_box_2nd' + scout_tick).append("<span id='discogscout2_" + name + scout_tick + "'>"+'</span>');
      });
    }
  }
  // Add links to Discogs page.
  var in_element_two = ('inSecondSearchBar' in site) ? site['inSecondSearchBar'] : false;
  if (in_element_two && !GM_config.get('load_second_bar')) {
    return;
  } else if (!in_element_two) {
    $('#discogscout_' + state + scout_tick).append(link);
  } else {
    $('#discogscout2_' + state + scout_tick).append(link);
  }
}

//==============================================================================
//    Determine whether a site should be displayed
//==============================================================================

async function maybeAddLink(elem, site_name, search_url, site, scout_tick, band, release) {
  // Don't check the second/third bar sites if a 2nd bar is disabled in the Settings.
  var in_element_two = ('inSecondSearchBar' in site) ? site['inSecondSearchBar'] : false;
  if (in_element_two && !GM_config.get('load_second_bar')) {
    return;
  }
  // Connection rate limiter per domain.
  var set_rate = ('rateLimit' in site) ? site['rateLimit'] : 200;
  var rate     = (set_rate > 1000) ? set_rate : set_rate * 4;
  var domain   = search_url.split('/')[2];
  var now      = (new Date())*1;
  var lastLoaded = window.localStorage[domain+'_lastLoaded'];
  if (!lastLoaded) {
    lastLoaded = now - 50000;
  } else {
    lastLoaded = parseInt(lastLoaded);
  }
  if (now - lastLoaded < rate) {
    window.setTimeout(maybeAddLink.bind(undefined, elem, site['name'], search_url, site, scout_tick, band, release), rate);
    return;
  } else {
    window.localStorage[domain+'_lastLoaded'] = (new Date())*1;
  }

  var success_match = ('positiveMatch' in site) ? site['positiveMatch'] : false;
  var target = search_url;
  if ('goToUrl' in site) {
    target = await replaceSearchUrlParams({'searchUrl': site['goToUrl'], 'spaceEncode': ('spaceEncode' in site) ? site['spaceEncode'] : '+'}, band, release);
  }
  // Check for results with POST method.
  if ('mPOST' in site) {
    const post_data = await replaceSearchUrlParams(site, band, release);
    GM.xmlHttpRequest({
      method: 'POST',
      timeout: parseInt(GM_config.get('timeout_ms')),
      url: search_url,
      data: post_data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      onload: function(response) {
        if (GM_config.get('debug_sites')) {
          const name = site['name'];
          console.log(name + " POST Response Status: " + response.status + "\n ");
          console.log(name + " POST Response Headers: " + response.responseHeaders + "\n ");
          console.log(name + " POST Response: " + response.responseText + "\n ");
        }
        if (response.responseHeaders.indexOf('efresh: 0; url') > -1 || response.status > 499 || (response.status > 399 && !site.ignore404) || (response.responseText == "" && !site.ignoreEmpty)) {
          addLink(elem, site_name, target, site, 'logged_out', scout_tick, post_data);
        } else if (site['positiveMatch'] && site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
          addLink(elem, site_name, target, site, 'logged_out', scout_tick, post_data);
        } else if (String(response.responseText).match(site['matchRegex']) ? !(success_match) : success_match) {
            if (!GM_config.get('hide_missing')) {
              addLink(elem, site_name, target, site, 'missing', scout_tick, post_data);
            }
        } else if (site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
          addLink(elem, site_name, target, site, 'logged_out', scout_tick, post_data);
        } else {
          addLink(elem, site_name, target, site, 'found', scout_tick, post_data);
        }
      },
      onerror: function() {
        addLink(elem, site_name, target, site, 'error', scout_tick, post_data);
        console.log("Discogs Scout (POST-Request Error. Site): " +site_name);
      },
      onabort: function() {
        addLink(elem, site_name, target, site, 'error', scout_tick, post_data);
        console.log("Discogs Scout (POST-Request aborted. Site): " +site_name);
      },
      ontimeout: function() {
        addLink(elem, site_name, target, site, 'error', scout_tick, post_data);
        console.log("Discogs Scout (POST-Request timed out. Site): " +site_name);
      }
    });
    return;
  }
  // Request header tweaks
  let reqHeader = {};

  // Check for results with GET method.
  GM.xmlHttpRequest({
    method: 'GET',
    headers: reqHeader,
    timeout: parseInt(GM_config.get('timeout_ms')),
    url: search_url,
    onload: function(response) {
      if (GM_config.get('debug_sites')) {
        const name = site['name'];
        console.log(name + " GET Response Status: " + response.status + "\n ");
        console.log(name + " GET Response Headers: " + response.responseHeaders + "\n ");
        console.log(name + " GET Response: " + response.responseText + "\n ");
      }
      if (response.responseHeaders.indexOf('efresh: 0; url') > -1 || response.status > 499 || (response.status > 399 && !site.ignore404) || (response.responseText == "" && !site.ignoreEmpty)) {
        addLink(elem, site_name, target, site, 'logged_out', scout_tick);
      } else if (site['positiveMatch'] && site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
        addLink(elem, site_name, target, site, 'logged_out', scout_tick);
      } else if (String(response.responseText).match(site['matchRegex']) ? !(success_match) : success_match) {
          if (!GM_config.get('hide_missing')) {
            addLink(elem, site_name, target, site, 'missing', scout_tick);
          }
      } else if (site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
        addLink(elem, site_name, target, site, 'logged_out', scout_tick);
      } else {
        addLink(elem, site_name, target, site, 'found', scout_tick);
      }
    },
    onerror: function() {
      addLink(elem, site_name, target, site, 'error', scout_tick);
      console.log("Discogs Scout (GET-Request Error. Site): " +site_name);
    },
    onabort: function() {
      addLink(elem, site_name, target, site, 'error', scout_tick);
      console.log("Discogs Scout (GET-Request aborted. Site): " +site_name);
    },
    ontimeout: function() {
      addLink(elem, site_name, target, site, 'error', scout_tick);
      console.log("Discogs Scout (GET-Request timed out. Site): " +site_name);
    }
  });
}

//==============================================================================
//    Perform code to create fields and display sites
//==============================================================================

function perform(elem, band, release, scout_tick) {
  $.each(sites, async function(index, site) {
    if (site['show']) {
      var searchUrl = await replaceSearchUrlParams(site, band, release, true);

      if ('goToUrl' in site && GM_config.get('auto_search')) {
        maybeAddLink(elem, site['name'], searchUrl, site, scout_tick, band, release);
      }
      if ('goToUrl' in site && !GM_config.get('auto_search')) {
        searchUrl = await replaceSearchUrlParams({'searchUrl': site['goToUrl'], 'spaceEncode': ('spaceEncode' in site) ? site['spaceEncode'] : '+'}, band, release);
        addLink(elem, site['name'], searchUrl, site, 'found', scout_tick);
      }
      if (!('goToUrl' in site) && GM_config.get('auto_search')) {
        maybeAddLink(elem, site['name'], searchUrl, site, scout_tick, band, release);
      }
      if (!('goToUrl' in site) && !GM_config.get('auto_search')){
        addLink(elem, site['name'], searchUrl, site, 'found', scout_tick);
      }
    }
  });
}

//==============================================================================
//    Artist Page code
//==============================================================================

function performArtist() {
  const band = $('.profile>h1').text();
  if($('.card').length !== 0) {
    $('.card').each(function() {
      const elem     = $(this);
      const release  = $(this).find('.title>a').text();

      let scout_tick = window.localStorage['_discogscout_tick'];
      if (!scout_tick) {
        scout_tick = 1;
        window.localStorage['_discogscout_tick'] = scout_tick;
      }

      perform(elem, band, release, scout_tick);
      scout_tick = parseInt(scout_tick) + 1;
      window.localStorage['_discogscout_tick'] = scout_tick;
    });
  }
}

//==============================================================================
//    Settings Menu (GM_config)
//==============================================================================

// To have consistent spacing in different browsers.
var set_cfg_iconsize_spacing = "&nbsp &nbsp";
var timeout_ms_spacing = "&nbsp";
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  set_cfg_iconsize_spacing = " &nbsp";
  timeout_ms_spacing = "";
}

var config_fields = {
  'aftertitle': {
    'section': ' ',
    'label': ' &nbsp',
    'type': 'hidden'
  },
  'mod_icons_size': {
    'label': 'Size of the icons (pixels): &nbsp &nbsp',
    'type': 'text',
    'default': '32'
  },
  'iconsborder_size': {
    'label': 'Size of the icons border:&nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['2px', '3px', '4px', '5px', '6px'],
    'default': '3px'
  },
  'cfg_iconsize': {
    'label': 'Size of the settings icons:' + set_cfg_iconsize_spacing,
    'type': 'text',
    'default': '22'
  },
  'timeout_ms': {
    'label': 'Timeout requests after: &nbsp &nbsp &nbsp' + timeout_ms_spacing,
    'type': 'select',
    'options': ['10000 ms', '20000 ms', '30000 ms', '45000 ms', '60000 ms'],
    'default': '30000 ms'
  },
  'debug_sites': {
    'type': 'checkbox',
    'label': 'Debug (the searchable sites)?',
    'default': false
  },
  'auto_search': {
    'section': 'Artist Page:',
    'type': 'checkbox',
    'label': 'Auto-search sites for results?',
    'default': true
  },
  'load_second_bar': {
    'type': 'checkbox',
    'label': 'Enable the 2nd search bar?',
    'default': false
  },
  'hide_missing': {
    'type': 'checkbox',
    'label': "Hide link if search didn't found results?",
    'default': false
  },
  'highlight_sites': {
    'label': 'Highlight sites: &nbsp &nbsp &nbsp',
    'type': 'text',
    'default': ''
  }
};

//==============================================================================
//    Add sites to Settings (GM_config)
//==============================================================================

$.each(public_sites, function(index, site) {
  config_fields['show_' + site['name']] = {
    'section': (index == 0) ? ['Public download sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name']
  };
});

$.each(private_sites, function(index, site) {
  config_fields['show_' + site['name']] = {
    'section': (index == 0) ? ['Private download sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name']
  };
});

//==============================================================================
//    Initialize and register GM_config
//==============================================================================

GM_config.init({
  'id': 'discogs_scout',
  'title': 'Discogs Scout Settings',
  'fields': config_fields,
  'css': `#discogs_scout_section_header_1, #discogs_scout_section_header_2, #discogs_scout_section_header_3, #discogs_scout_section_header_4 { \
             background:   #00ab00 !important; \
             color:          black !important; \
             font-weight:     bold !important; \
             border:           0px !important; \
             padding-left:     0px !important; \
             text-align:    middle !important;}\
          .field_label { \
             display:         flex !important; \
             align-items:   center !important; \
             font-weight:   normal !important;}\
          .config_var { \
             margin-top:       2px !important; \
             margin-bottom:    2px !important; \
             display:         flex !important; \
             align-items:   center !important;}\
          #discogs_scout_aftertitle_var { \
             margin-top:       0px !important; \
             margin-bottom:    0px !important;}\
          input { \
             margin-top:       0px !important; \
             margin-bottom:    0px !important;}\
          .grey_link { \
             margin-left:      4px !important;}\
          #discogs_scout_section_header_0 { \
             font-weight:     bold !important; \
             border:           0px !important; \
             margin-top:       0px !important; \
             background:   #bfbfbf !important;}\
          #discogs_scout_header { \
             background:     black !important; \
             color:          white !important;}\
          #discogs_scout_section_0 { \
             margin-top:       0px !important;}`,
  'events':
  {
    'open': function() {
      // Iframe position.
      this.frame.style.top    = '50px';
      this.frame.style.left   = 'auto';
      this.frame.style.right  = '150px';
      this.frame.style.height = '90%';
      this.frame.style.width  = '450px';

      $('#discogs_scout').contents().find('input#discogs_scout_field_mod_icons_size').attr('size', '1');
      $('#discogs_scout').contents().find('input#discogs_scout_field_cfg_iconsize').attr('size', '1');

      const modVersion = 'Discogs Scout v' + GM.info.script.version;
      const modUrl = 'https://greasyfork.org/en/scripts/';    ///////////////////////////////////////////////////////////////////////////////////////////////////
      $('#discogs_scout').contents().find('#discogs_scout_section_header_0').append($('<a href="'+modUrl+'" target ="_blank">'+modVersion+'</a>'));
      $('#discogs_scout').contents().find('#discogs_scout_section_header_0').find('a').css({
       'text-decoration': 'none',
       'color': '#cb0000'
      });

      $('#discogs_scout').contents().find('#discogs_scout_section_2').find('.field_label').each(function(index, label) {
        var url = new URL(public_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(public_sites[index], true));
      });
      $('#discogs_scout').contents().find('#discogs_scout_section_3').find('.field_label').each(function(index, label) {
        var url = new URL(private_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(private_sites[index], true));
      });

      $('#discogs_scout').contents().find("img").css({"margin-right": "4px", "width": GM_config.get('cfg_iconsize'), "height": GM_config.get('cfg_iconsize')});
    },

    'close': function() {
      location.reload();
    }
  }
});

GM.registerMenuCommand('Discogs Scout Settings', function() {GM_config.open();});

//==============================================================================
//    Fetch per-site values from GM_config
//==============================================================================

$.each(sites, function(index, site) {
  site['show'] = GM_config.get('show_' + site['name']);
});

//==============================================================================
//    Global variables
//==============================================================================

// For internal use (order matters).
const valid_states = [
  'found',
  'missing',
  'logged_out',
  'error'
];

// Are we on a artist releases page?
var onArtistPage = Boolean(location.href.match('/artist/'));
if (onArtistPage && Boolean(location.href.match('type='))) {
  if (Boolean(location.href.match('subtype=Videos'))) {
    onArtistPage = false;
  } else if (!Boolean(location.href.match('type=Releases'))) {
    onArtistPage = false;
  }
}

// Are we on a release page?
var onReleasePage = false;
if (!Boolean(location.href.match('/artist/'))) {
  if (Boolean(location.href.match('/release/')) || Boolean(location.href.match('/master/'))) {
    onReleasePage = true;
  }
}

//==============================================================================
//    Start: Add links to sites
//==============================================================================

function startDiscogsScout() {
  if (onArtistPage) {
    console.log("START ARTIST")
    performArtist();
  }
}

window.addEventListener('DOMContentLoaded', startDiscogsScout);
