// ==UserScript==
//
// @name         Discogs Scout
// @version      2.2
// @namespace    https://github.com/Purfview/Discogs-Scout
// @description  Auto search for music on torrent, local drive, ddl, streaming, predb, and other sites. Adds links to Discogs pages from various sites.
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUBAAAAifwLExgFkP4NJTYQOFUQTHoRYZ0Kbr4Ol/4UgdMGft8acrIPiecWke4Znv7mtRJQAAAEFUlEQVRIx71US4wMURQ9KlXTHWye8utppJRpI8GiFN3Gt4xu4xcpdPuLpo0hhPaZ7sQnad8ZRIQxxiTiM8GEWOhIRCxEzPhEbIhPJCQiIWFHsLFx33uKNtqsxFm8uq/eeffce+vewn+GMi9Rl5hXbeAvmH/VtnTbsvuuLH59rc1+wH5a7HyzxTz0b7v2p8xcfpMxnbtp9Ou16IAhgfus75TsgdZV9fV15vLSeIc41HzjbMbSQqssu9vqlww5vwtMMBnhxpaq6wfzZOguoiiA9rHFZzdXVFj6ZSagJ6G5BYTJ46BmorHE0lPOWUGoILV4QYpWi7JCWNWYyrMN1Drk1vkV4kR36BjP42YSaBRv0/Aw+Lj6iAWz9cJL+YHmVn7XwLOfCmdz3XTueWzG4NuEYZpVdS4WeuUsCSRTJ7fyEpZCwPdtpzWgEn5PwxfBGAdVDYz1lSF9KGcVbxWoI7wkj6mb6DGMVPYZoWgoP6r7hWojBIyGROoWCRtQ2ii/9FKijbnDQwESEFCobMoOi2r33m6Khiz99G0sqBXBuTLGMQbU+a9OGgglKNGZl+MobzjBG89/RRC69Te4BIn8hKlMb6etdkbshveRSmLNSIahuPzVJkkIc9ucp9JTFXa8KrlX3HkisxzF7W3B3eRJPQ5ajtiMiAS5Ln9Mi9O9wf5KAUdAWGPbLeAhZQVhZ440VxtTVjlU1FI5QKsM0VF1grA7B7VpMH06InQNyrY0y0SV6j0Pfha5ibo7BoYTIepoNSURX7UJ1AjCxhF8KEo1Pf8Ok4gQizmhmrEvM0ngoCQcw2TGenU5+TBr7gzyvO/rWRa86XofIzUKXS29aXhanR+zqKrK1bWsRvZGpZyJ3tSITfMzcx6u9DGylUMz7C1Xm8/R0XlZScpddfHi5QqkdF4oRdvuLIlzo0VOjeyLeQbQ1ivlSreiQ9SktPa73jccfMwfuP2L4EtLc1G7eJS1UjNceic6HlKcbkoNhd+oYoY8mxSmlc/mVs9ZW6V403Ct2oFqLGwWwXdNql8gYQxzo3yWQhebG+5tfb1I/Dti5fCf+TlazhYiTAGisTkmp2IlMlFsKGjC56AANTnhlN6uuHJupSKUvJF2iD0wzGurzFHcDLq2J7snC/8gPUKU9metsVzNpdRPwIbpyXUogM8qI/9GyesN0cZlrgvlbka7hUKkepaJkJZUtofIGNrfWY/f4LejWwq2hzd1+4zfsZnZLkr2yM3QN9pEpwOhxNJzmFVB7udgcMDd34KOmG7lMJ3tghbB3NLFEfyJWW8wiIVD/jA2ngikixAUB0NZ8MDiMB7UtKM4hjAWJIJp4i/wMcbyI1H8XKZChKP4O1SLBTffQifIs+BDozNCigUr0Rmm6ePRKbTWWvxrfAfEou1mueFddwAAAABJRU5ErkJggg==
// @license      MIT
//
// @updateURL    https://greasyfork.org/scripts/439452-discogs-scout/code/Discogs%20Scout.meta.js
// @downloadURL  https://greasyfork.org/scripts/439452-discogs-scout/code/Discogs%20Scout.user.js
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
// @include      https://www.discogs.com/master/*
// @include      https://www.discogs.com/release/*
// @include      https://www.discogs.com/label/*
// @include      https://www.discogs.com/user/*/collection*
// @include      https://www.discogs.com/wantlist*
// @include      https://www.discogs.com/mywantlist*
// @include      https://www.discogs.com/lists/*
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
/*
//==============================================================================
//                         Version History:
//==============================================================================

2.2     -    New feature: Option to remove "EP" & "E.P." from the end of release titles. [enabled by default]

2.1.1   -    Added: Bemaniso, AnimeBytes.

2.1     -    Fixed: Own wantlist page wasn't working.

2.0     -    New feature: Support for the new version of the master pages (beta).
             New feature: Support for the wantlist/collection/label/list pages.
             New feature: Searching for Various/No Artist ect. albums should work now.
             Fixed: Old version of the master pages stopped working.
             Fixed: mPOST didn't work for the icon sites.
             Fixed: POST form submit didn't work on the release pages (jQuery issue, replaced with pure JS).
             Fixed: Searchable sites with mPOST didn't work if auto-search was disabled.
             Added: Voidtools-App, TPB-Proxy, RMT, Metal-Tracker, YesAsia, PandaCD, RlsBB, Sharing-DB,
                    Mp3db, BoxAlbums, CorruptNet-Pre, CorruptNet-Trace, LeakedAlbums, Lossless-music,
                    RockBox, TakeMetal, Core Radio, GetMetal Club, Gabber.od.ua, 1Gabba, FLAC Attack,
                    zHouse, 1Techno, 1Trance, The Last Disaster, eBay, Spotify, Spotify-App,
                    JunoDownload, Apple Music, Bleep, Qobuz, Deezer, Tidal.

1.7     -    Fixed: Possible bug with sites (if it's mPOST and there are special chars in the name).
             Removed: PREcBurns, TPB-Proxy.

1.6     -    New feature: Support for new Master release pages.

1.5     -    Added: KG-Release.
             Removed: preFYP.
             Fix to keep the bars order consistent.
             Remove text in brackets from %release% names.
             New attribute 'replaceSpecials' to remove non-latin and special characters.

1.4.1   -    Tweak: JPop.

1.4     -    Added: LiB, LiB-Req, JPop, JPop-Req.
             The settings tweak: If site has 'goToUrl' attribute then show its hostname instead of 'searchUrl'.
             New feature: 'Pre databases' section in the settings.
             Added preDBs: PREcBurns, PreDB.de, PreDB.me, PreDB.org, PreDB.pw, preFYP, PREovh, srrDB, xREL.

1.3     -    Fixed: "+" in band/release.
             Fixed: "&" in band/release.

1.2     -    New setting to put all links into a single bar.

1.1     -    Added: Bunch of sites.
             Blue color for requests.
             Tweaked default rate limit.

1.0     -    First usable version.
             New feature: Support for Release/Master pages.
             New feature: Three bars for sites: 1st for no-auto-search sites,
                                                2nd for searchable download sites
                                                3rd for searchable other sites/tools.
             New feature: Auto open the settings if no sites selected.
             Added: First bunch of sites.
             Updated: OPS (advanced search is broken, switched to basic).

0.3     -    Fixed OPS. Check if there are releases on artist page.

0.2.1   -    Added the update links and OPS.

0.1     -    Initial alpha test release.

//==============================================================================
//    A list of all the sites.
//==============================================================================

    -= Each site is a dictionary with the following attributes: =-

#  'name':
The site name, full or abbreviated, must be unique.

#  'icon' (optional):
Icon for the site. If not defined then script looks at homesite/favicon.ico.
Can be URL or Base64 string (www.base64-image.de).

#  'searchUrl':
The URL to perform the search against, see below for how to tailor the string to a site.

#  'matchRegex':
The string which appears if the searchUrl *doesn't* return a result.

#  'bar':
1,2 or 3 integer. Places site at 1st, 2nd or 3rd bar element.

#  'positiveMatch' (optional):
Changes the test to return true if the searchUrl *does* return a result that matches matchRegex.

#  'SpaceEncode' (optional):
Changes the character used to encode spaces in band/release names. Default is '+'.

#  'replaceSpecials' (optional):
Remove non latin and special characters in band/release names.

#  'goToUrl' (optional):
Most of the time the same URLs that are used for checking are the ones that
are used to actually get to the movie, but this allows overriding that.

#  'loggedOutRegex' (optional):
If any text on the page matches this regex, the site is treated as being logged out,
rather than mising the movie. This option is not effected by positiveMatch.

#  'rateLimit' (optional):
Connection rate limit in milliseconds. Default is 500.
On the Artist/List pages if rateLimit<=1000 then it will be increased by a factor of 4.

#  'mPOST':
HTTP request by POST method. For the sites that doesn't support GET.
Right mouse click won't submit such request.
Atm 'goToUrl' not supported with it.
Examples (3 types of formating):
'cat1=4&cat2=6&filter=%tt%'
'{"cat1":4,"cat2":6,"filter":"all=%band%+%release%&sort=date"}'
'{key:"cat",value:"4"},{key:"cat",value:"6"},{key:"filter",value:"%band%+%release%"}'  // (supports duplicate keys)
Note: only these special chars are allowed in a site name if mPOST: .- ().

#  'ignore404' (optional):
Ignores all 4** HTTP errors.

#  'ignoreEmpty' (optional):
Use it if an empty response means that no results found, otherwise by default it means 'logged_out'.

    -=  Search URL parameters: =-

#  %band%:
Band's name.

#  %release%:
Album/EP/Single name.

*/

var icon_sites = [
  {   'name': 'AllMusic',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAAPFBMVEUAKDkAERgAIS8AGSQkqeD+/v4djr0SZokFOE4LTmqVnJ6tt7tSXmI5RUrs7u7d3+B3gIQSIynL0dQnNDr+weAdAAADeklEQVRYw+2V2ZLbIBBFaRE2Sd7//19Db7qmZGdGmTxMpeaCJGjo081SdvjGqly1aD3u6o3vrfotED96ram2Imr1i6DQyi8olzax8ajUp2XDgNeO0zgBR+1xR9Kb9PEFym7V2jZ2sSmfxk01Wx7c7X15mhlr7/w5G9RealbUFFCAy9UMxhzQGsheyKtoQmMtSjMQEgALgfQlrMbOhrPCryY0n81vtMEAtSiL9YTRh2mWNbJwLNLBxjjLUtOY3rFx3TYUUMYo2SLrQC266aVOTiy60LF4XgDyq+lUVWVHU9kSzbalcMZr7MlMZ3EHqk8LzeMxA6VNbVSe6Cy9bfzn0/IzLUsbieDhN1SQmC7Hz0iXj9TKwFAMvgBYCOFyG5tZbBaDR8+xuZtW2TnKDiCfinVis97AQkX44lh3Chlj4P4hs4YtE1fssOMxLXwEQ8i4teqynLaFP23B9HnYtJ3EnNKis/8B7JrS/FUYWss9bIgI2IEDiDi7+/mG88W0F7CI3hiyueua0tXPt725GswJkT/7SxutWWJvLyld2FRkF8UjcxMcc+D3gJNpMhrZuX8eqWu1iyeOFhIyKztpU6SEZpYszjPD7pEzYwBPb5I0OGoNxoKlalCxh1xjDOfEOkXpil1/gtgBjsgMVt2OJhaOFeM1iZbIw1Fq84AgceHMBhzP7BKr6pJUD+16Yk3gz6XD9AtalNRKdK3JNLtF/1DgwEWChC0aoLxroN0ddnaL/tVFOBhOYA7eguifsHqe0qbrE6tgeeo/GQx8t2ajUaQFsEvvGiuTulk1hThq0nf2ld50hYpcybLOWAs0wJAv0xRGs+79areDBJaVgfmAvVan1e5rF/ZmX6IAFvQRjEomIr2wd7Ktmzm1QnQYRr3SRY+RyG7brXN6PQJzGhBEZ8WyOR7MjLj44hbqmu3ikgy9g72KRFrswq4M87bQ9i5iDP3xigHNK85YpW/fhXY02nyCMIEjsOhmF38WMUxvR/TiKO8Ha4DjheyHDMIGWnJ4aQnwHlGkF3avh6cG1JYZEnkqUtf0UjPp8IsSZGSHwo7vdL6R4wYPhfEX1RVP6Y2u2xRUffQABqsRF6zKdLXT1XF4jZlBSO2R/CqYYFrpjcIYBZotDXrSXW33IXj0lsP2up2xSqwT2b7Qe9hpVj2GCGZc38L+Rj+wH9j/AvsN1ksy9BiB4ZUAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.allmusic.com/search/albums/"%release%"',
      'bar': 1},
  {   'name': 'Amazon',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAkFBMVEUAAAD///8EBQX/qABUVlYbHR3/1ZCTlJT7+/vMzMzz8/P/8Nj/v1AwMTHZ2dn/rRN2dnb/6suioqIDBAT+pwD/+vL/9eW+vr6wsbH/4K7/ynLm5uaFhob/w2H/5bz/5Lv/yXL/uD7/9ebNzc2UlZX/0IJmZ2dERUVDRET/sin/rBPl5eX/2p//2Z9lZmZDRUXHx2gpAAAAAXRSTlMAQObYZgAAAclJREFUSMedlul2gjAQhUsm7JuAyqK4tNZq1/d/u0YYExKIob3n8CPH+2XuJEHydJdlENo0bgPjWTPlTfsTl9KCkB/q+mNinOcUE6G4UoiRP0E7Fw1GhOS3iao3mZA72Kj+gj2uUmI4WJAJ2UrbwwL3eePK911ezddWyNGxkPtxtQDFDAEGNAKn3nDGocsLqoBQwLK7CQ5KBKgCaOXjws4AElaH0nhehU1OCZcZCHBp5gK+Tf4ElJLvogHks4cLU7LNezEC9/x22Q2NQEBQOe60Caj4eTYBGsPCBHwrBuNOU1L0bzFPiPrQAFvpFQvEHm4NPRCbEX5MhPxpIBEO5YTEKsC71MjWAKXiy3GGS6ACattFN22FIc+B/njnIjzd4NIurIcvUE4ZY9NtgikpHqwsy9YcCGvrsbIWbgo5ABGj9WK/t04DkPFI+xQOiOgVwbPoIUzhEbJy0tZK02HT4RFgGdWrKfuOpYE6hKb/u/dwkgZuipxMjl8f0iVAurM+YT34ZGEjrAp7rtGr06mNYNlPw9JHjsUBnvQdhkI3XLtVX6ufUUSEGXWsR5cBT+4wHfiPTjjjKhDuHadhfXxl6qJ5/7mcGG8o6uS/49obpgvEcMsAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.amazon.com/s?k=%band%+%release%&i=music-intl-ship&ref=nb_sb_noss',
      'bar': 1},
  {   'name': 'Apple Music',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAhFBMVEUAAAD7W3T7Vm/6ITz7VW77V3D6Ij37V3D6Ij37V3D6Hzn7W3T6Iz76K0X6KUP7W3T6IDr6J0H7OlT6KUP6ITz6MUz7Ql3////7UGr7R2H7V3H7S2T7VW7+wsr9lqP7ZHn/8fP9pLD+1tv9q7X9nKn8jJv8gpH8dof+6ez+3OH+z9X9tLzq9unlAAAAEnRSTlMA9ubYyXZbSSsf9u/v7cu8j4UwG0qCAAABRElEQVQ4y4WRi3aCMAyGM0AF7xYoN0thAiK+//stoZFuY7gvhYb+3wmcAyDB6uTsPn6xc06rAEY2Xr6AtxlzJ1/EQSPwrm/wAlhd0xlXrXPuVuDRxkXk97ZWj75l1wMntegOsyohmsIcOUD3wqzGZFYgoLCoxFJmfPi/kE2wUD1U0/ZlxkBmUQlmnU4zWXyWchLkVEphhrBgCuQLFG7ckSC4BWlRN/GHICZIYDIUGBByKhS4I4FbEBY7QX6fIGKB109B9238EmJK6UbCuOt66BMUTEE8IYeatjv9MhQYQItW1tVDQoJQCdHFHPCEdKBTK1TaTiDCOiGaEFt6RdXEVgiJp5lLbazLVptTeoLDuI9fpkQ44wDH0BjPZ2dzyxEuponGNecCvhu9wfUB1vsoChfWfg3IenGGiznhn93tPN26Zx/DL8jaVsC2vSlKAAAAAElFTkSuQmCC',
      'searchUrl': 'https://music.apple.com/search?term=%band%+%release%',
      'bar': 1},
  {   'name': 'Bandcamp',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEUAAAAdoMMdoMMdoMMdoMMdoMMdoMMdocQdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMO469wmAAAAGHRSTlMAA/xhZVUSCM/D8uba2K6bkodyW0xDMiMrDxECAAAAnUlEQVQ4y82SOQ7FIAwFCUuA7Ht8/5N+S4ls6fOaKE2moRgxkg3mW1SQJ4HgXYFfRZuNLP1jadJCIltAXS0BBwNe7seebOlTlMACA4HNRd0S8FlHmMsAs7O5/NmgwHB7PkYUsIcEDqRp1MCAAs0pgR2OOLO5ySjQ6pIDDCwSiAktuY/yCh4GnC65Q8+cjTDBJW86woo+Wqjef/ZP8QPdwiBy+gWrIwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://bandcamp.com/search?q=%band%+%release%',
      'bar': 1},
  {   'name': 'Beatport',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAGFBMVEUAAAAB/5UB7YsAe0gBoV4ASywAIBMBxHNCtoKSAAABAElEQVQ4y+2SPwvCMBDFC2r3V4XOin9WNYOrFamriHUuqLhai/38Xqo54ZJ0Fuob2sLr7/LuLkEbdNxu0wY7ASZ/+6fsotHuDYGp3+4CuPvtA9nzxtpR7rWXBPfDTKnM9U+HYDxXukSZu+Foh1qlG47wUeqCvxqI8heQRoAbDxMAcUGPcZZtdAs2XA6p6p4GkMgB1PDZTO2iP2Sw6qYjmaMq0VacH3if/MU4ZV3wwm4yW2+ca3ttVivs4BSQbQJ1pE3y02xX9tksb3Jm4nffhejbBEJqTY0VmpkTHNHbkQ0zpR68MWvpvutiImmZiBYuYKmVuKmyvLznUlelTkEL9AK5yTckC7iHmgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.beatport.com/search?q=%band%+%release%',
      'bar': 1},
  {   'name': 'Bleep',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAMFBMVEU4NkGt/7ZEQ0wkGC2+/8e0/73I/9Jedmh1mX+EsI2Mxpav8LmWzqCk6K+h2aua4KTaTcj5AAADJUlEQVRYw+2VT0gUURzHX75AQgp+MLMXL7qrYdjh5Tu4JVm7zE4l/fHRznoQk41xXbcEaa1dkpDaRbdLSW5pCBEYQtKpqAQLJCXL7NKfQ4QRVEQQdKnO/d6sTCsV7t4M5nuZ32PeZ37v9/2994a4ixQpWhWkKJU4gAM4gAM4wNoAKM+JERmy1YHS0YzUYAUjNZlMz+rArohm6Uicbzb1l6sDO3xgSYnxSqHMFg6Aa7i2UEA1NV2AurusUKApkUgaAHsaJGDZRlB29CcQxRe9CGyTAK1LXh2kTM6vPz96Agl8i2POfgNdGO/0LWdgY7pmTlE5/xMaOM9IMjPILjx84snLwAgtE2qzrIH2dQBA6AUjbELaEUnRx/rxWtPQ7zMb2MdIyRyEUujSTL0JIc0HxyhtDIOuC7WTZ6FdQVSP20D50tIPnzrFpa3rferexBy4xukVUD4ngxDyZEEVkTCofmbbGjACoMwyCUyAEufbw6q/PgwxzquFazgLoI1kBXTZAAhAtcURuGRYnr2CLoTuMO4Nq81pUG9z5A2PDRhBrQMU/zqhjKBZJe6KG7B/o1Cuu92lPvCnwZUicoVxu+gSt/usgBi6NIq4pfY+kBLYnjQID6G9oKTyG4cpoR8Bq6KgMFoRCGoBwzCiaWjDrlQLZTi/cew1qBdzGQyp1jOyMBUMgcChHDD+d6DFbalS1iBVkbUyVAECK5eEgFU0t7TJp8zmoqz0h57CGvJ2a+KygPJ+/OhdOMgJv7b4xRuGTk7qvy6+t1ziH8Flu6RqGtoKTXIvDYDrEdliatG6AAR7yElTP4ydbsFeQtDuQ07q0XUINIRB+xYE1wc6AOqB5wEIxbPo19PvADG2EojEsc6ZunuYUEA3JV4THQYlyhEQms/eS42mZsmc51V4a9ANOvbBHGKE9kUMI9Qdp+jSz7zd6l2YlLp5jpOtC7eGCE8+m36AA3T69NvpNz0MgdaaiGafB8KXZZ1hgmPcS/jMRZQRBAyanByh/75b7ZNPMbIAD36w4MtYLkme57UETBhaccDY0rtiAJy15n+KDuAADuAA/zlQtNxF6hfzWR8gU8UUxQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://bleep.com/search/query?q=%release%',
      'bar': 1},
  {   'name': 'CorruptNet-Trace',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUNm7n////f65sSAAAAFklEQVQI12P4/x+KGhvxoQZGIAIqAwD/ohMPaSbQBQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://trace.corrupt-net.org/search.php?search=%band%+%release%+type:FLAC|MP3',
      'replaceSpecials': true,
      'bar': 1},
  {   'name': 'Decks',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAilBMVEUAAABVVVVSUlJZWVlXV1dhYWFbW1tfX19dXV0PDw9EREQ1NTUEBAQGBgYcHBwTExNNTU04ODhjY2NPT088PDwpKSkgICAMDAx9fX1wcHBJSUkwMDAmJiYiIiIXFxeSkpKJiYl2dnZLS0tAQEA+Pj4aGhrFxcWkpKSbm5uHh4dpaWnNzc2goKCTk5M0fYJwAAAAAXRSTlMAQObYZgAAAXVJREFUOMtl09eCgyAQBVAYVBDUaOyJpvfd/f/fWye0GOf1XC9FJX7S+lwyzlleDSlZzkryMOTTCCEiVsVfnFQhDjoGooipZPY4Db8DLP8o2Ym1dW58Gli559EXgSAA05HQmftAsNH7qLT7Aheg6r0A2qJAByguIq0vCygtpvvjzpcFFFJSo7JtnLQ1lLIYN30XousAbch5cmj1cYbg/nP77f/WtoCCIhCGQjuJg9shisJH/3AFIEnEeWUvbHxFOIeuN06hJNPWRhPIsva9w6c8WAfAQOYCKTrrmr1ZAANMiNq+s0ahs6PsXEFOciFyE2izO5/8BUdmHSS5CCG2toLu988jXNauABQZ8O6KFK+hGXZZdr2qwDs0JGV4skAWF8pORX2tz5sPL6cnqwiH6QlwvIPC+zPm2bv+pgrLS9e7T/I5e5eJeUmAtvRT7D5rMDz3FXET49HmDDKe/Xrqi2Fr1vclBXgvVUyWk45KlgC5VE1K3PwDpGkX801HuPEAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.decks.de/decks/workfloor/search_db.php?such=%band%+%release%&wosuch=all&wassuch=atl&where=',
      'bar': 1},
  {   'name': 'Deejay',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAAAwMDD///8ZGRkZGRkaGhobGxsrKysvLy8dHR0eHh4fHx8gICAoKCgxMTFeXl5paWn///8YGBgZGRknJycqKir///8YGBj6phobGhibahlyUBmQYxmCWxl7VhlNHk6zAAAAF3RSTlMAfwb07OXdjILTy8K8lXxBOgP58JyQCX9zfsoAAAB5SURBVBjTTY9XEsMgDERXFBuXuKQp2Enuf0xbiMG8H94ugwZBMK/O+YFmZG6sWDIQGi60q95fEPDmmseCZ5K4fWOSoBPi5yQ1I6wcmxQ/MQ9Xir+Yw1CesNAh6NB9zz/BfOcaA1Cdg2zWXrnXXcnmPCGz0Nj4flrFDxy7ERm/Z/oDAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.deejay.de/%band%+%release%',
      'bar': 1},
  {   'name': 'Deezer',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAABO1BMVEUAAAD5jBUbql34gxYRqF0OrWIXWsgbqVjzkB9IJ6keTcENr2wRm4mxF3oPp3cmQbx0FpcQg7PrdCjxiCHvfSUTYssPgbxWHqcRlJL0rR/1pB/0nR/5kRURaM7yth5nF6AQhqoUrG/jSULpVjjoay6qD4QPooEPgcaIFovPQE3aUUDhYTX0lyGeDIvpYzHvwx0wOLBfH5qWE4fcPkzruRw8O5x/EZagF30OgKv5lhUPddGTDJEXn30QcLUpSKFPL5fVNlXQMF7VSEfugyQQbdEPebPINlXcWTrweCWIDpYYVrjvbir0fRprKI0YpXHmbyzsqBwQcdAQd7wSZLmuKG/0hBwOeKcfV6ETjpuAJYaXJnvHKmQQbK0TY7D2mBbgrR7cux0QfMPCL1vtmB6+Kl/jmyEYY5/kkCXifypyVdifAAAAAXRSTlMAQObYZgAAA5VJREFUaN7t1glT2lAUBWCL1YJ1YRNRsXXBioIUUKRWUKvF3VoXXLGtpaj//xf0nty8vITMJOkMzDidd1DGeZM5n/e9iOlSUVFRUVFRMec18sYUn8/XZgDpOMDNLHQC8IGAQK9OTAABhI+JdgM99OIh0N+RCYSA8vYfck8P1dObENoN9Mh0FPBpbx0E2OjwFklA5WXno8gy5xfF6fq3pkxRvlE8AMsy/w6UXQDUvxP5iXgDpkS/G8Dto8h3xB3gdu4fLLsBsp3TbDadrh9E9Hr6Cf39joDoH0PGxxuNZvPJGZApc78bgH5uR3/j6ckjUKZv1PfHXQCjvpHx+/2RyPaz0/UfzOF+FwC/P+ozev32s2egX6uPX7sA6Jf10XD4xOn6fkvi6HcGrP3RPepPegXi3O8JQH0tSv2HyWza6fq4NdeUyS6Vl53RMe0WquF8D7PZmZnp6S2sX1zc3t4cH29sFIvF9fWrq6vHx0esX15efqJMyoRCbgBuIQJE//SSAUgBBANCkP0xR2CMAb5BZwAstQBSwHq9DkESIU9AJMIDcP+mGRACRQfqlWq1SkBIT8wFGBcABrACKQh5CExg/f6+XqmYgZgrkCGAPoKME9hkYKBUSqVugsd5XcgJgIWq7J9zA/wE7IXlDn3B+gABhVQqGMyTEAgEirlcDusHViDmClh2yA6wMBKg6MDB/TkLMQT9zgAGwA4B4H4ToI0QfA9BAgfn55XK2VlV1HsBotFwMtsCkABgRQoa0EcAC2fc7wZkDCAtdkgAswUpjEDQAAgMPDw8zLkDvEMMLOAeMgGLi2tr+/srBEBgYAiAFBhQeRn5sZpIvEq8oiQoq1qwzg8T4WQynV5Y2NJuojs+5NlZOmU+5hU6ZjplrOeGhuhG6u0dnpj4evqZIwEREBLAw8pJMr1LwPy8CaAAWLMDfQSQcArBDhhTMBAxgF0AHiYYAsAjnNqBbhPBAP4Kwkk5wZ0NQL8dYAGRAAtGsB4BQANkdWDHDvAAFqBPBzgC0Oq1mIAa+rFDAtixADwA75ANoLQC3TICwPOiBfhtAHIAO8AChwE5gGBqWJf9BvDHAAoF9IsBbMCwGfAzQO2ivtbNAPoZ2LIApRJ/mgLI2wAIIgz40W/JEdb3tAGy2CErUNIB9LcCEJBWQBTj64iC9TD65Q61ACnxL80OyDBAj/+0KSKoZwD9YgAnICABCBaiS0VFRUVF5b/JXz0ZRzzMCJOoAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.deezer.com/search/%band%+%release%/album',
      'bar': 1},
  {   'name': 'eBay',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAD0BAMAAABeARbNAAAAMFBMVEUAAAAAAACZzAD/zAEBZt7+AABDQ0OGkn5mZgEzMwBgAABATaf+QEAAGjgBM28nJyijxz+KAAAAAXRSTlMAQObYZgAAAjFJREFUeNrslrFywyAQREljlYYGSn4Nmqg0asRviyptZtJk4ksG7rJHY14vLewuB2axWCxenPpFMZOpD/fNPlH+dE/E3UzhbI4SZ+z8cL/zYZTZmvsLTzaupkwh2hrK87WJ8jTt7HpEo8Ph+nijwc2NEAxBO2gaN97u+XFvbhRrCHrtppYrd+x9r7WeD62m0Y7RO3oj6skAuT/dUuVnD7Li4c6dME+1tG/dV8HWlNI+BtzMKtvehl5CTeNsv5H9dIeOwsm6BhuR4H770UoEuN9l2B6033Z88lxgvxmjJ2D9tpzZg/WbNXEvpN+WNXID0u/Cu2gA85u3jTtwqnB/NZgPJ7zIdcnDorbsux32Pinsw5hQUQt8Ap3qwG9HAD1FE84obl8l3xRIy7zEqQvSMivph4W0LEnuOg9pmawgiFkWZROwAAoeMDFJUrPa5aQIl5/F0tS5gsqJP44B7RT+wgOWLJQO2kFRDmld/i+dpeezkQ/Bi8fbRaUBSUnbotlPNxe/pD/Zm0MCAGEoCoBkoQIVqICiAJ4SZMGQgjrLMDn1vpi+K3AltVqtVqvV6oJarZ6u3+xr2fVMWob/iM49u7dsrajVarVarVar1Wp1b98OagAGgQAI1kJNtpZaCyRIQgg/FHAPQgghswZGwaLRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUajj6NTv1z61X+sb48X4A5Do9FoNBqNDkKj0Wg0Go0OQk+nn7W9lySdUwPQF080xci5zgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.ebay.com/sch/11233/i.html?_nkw=%band%+%release%&_sop=15',
      'bar': 1},
  {   'name': 'Genius',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaBAMAAADKhlwxAAAAGFBMVEX//2QAAABnZyjPz1ExMRORkTjj41mxsUXipzHLAAABcUlEQVRYw+2VPXKDMBCFscG45RFs2nCDMOQAdnIBSC5gN67x/ZtMBsFjpBWSxq1etSN9WvZPIomKinpVedd1H8p+PG4OugFQTOYegDq4k+EjVjTNXSHSd40uZ1OkodEzhXcB3hu0onAW6J1BKxuQKmLQ53mjt4RNmmm2KMzWAGCRs3+7mkMsLUnWqyQutC1JXmR6lGg60U4WIl0zLCfN1atG1wbN7qWNnkMl0ovn6Sh3NuhhonsHXdIkIdKHqSRLIxlryxZTS0k46Ry3XqYZCjckeiCdPNffVvWh2DJTuUinFjoTI0muxgVkEqOwfJLo53RJDKGyPhzSN6XFVNGmRBdW+iCsDbz9puSw37xQvmB+4jXyUMo3yTsQhOSIU5DrIsQ1Ri/4joCwjwgJBEq9DzwouPKH7YHko9bySdY2f/O/sqjYqNjX7y3Jf7CSowqUY/wyUB4j0uq0x/RTo7vMbpj6BEKamDee48ETSVRU1Lb+ABmoNtvoYv3FAAAAAElFTkSuQmCC',
      'searchUrl': 'https://genius.com/search?q=%band%+%release%',
      'bar': 1},
  {   'name': 'Google',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABMlBMVEUAAABFi///STpP/37/vwX/////////////////////////////////////////6eery///XE7///////9V/4D////////////////////////E2v//wLvw//X/rKTo/+7/UUP/TDvJ/9eJ/6j////+/fz/8/L/4Yj/3n7/1ln/0Ef/xRyjxv//u7VXlv//opv/h37/enD/bF/////A/9H///+1/8hr/5Nl/49c/4j////0+P/o8f//9vX/9+D/997g7P/2//j/0c3/0Mz/siL/xL97rP/0//dkn///mRb/lnL/m5P/lo3/kYj/fiL/c2f/Y1bY/+P/2TNJmv/S/97Q/928/9ev/8VOs/+3/6ee/7iP/61//6F2/5r8/y6P//LC/0pS/5RY/77////////5+/9A6TfbAAAAZHRSTlMA9Oqo++j2myLz+M+XJQn8+uzIxamKh1hVLwv89/X17+vr3L0N/v79/fz8+/n39fTx8O7l2NLSsrCsB/7+/v7+/fn5+fn49/f29fTz8vLx7+3l5OPh4NLOysfGwLm2tbGwpaAOaYKM8gAAAZNJREFUOMt9k9d6wjAMhd3ssiFhlg3d7FKge++99w7v/wq1lGFC+PgvgqMj58hCJoxyXI6IkiRG5HiZuPHLk7rNpOwfkgNRj+7AEw04ti/rLrwK05MihoLZZrhQCDezQXwVk/Z+EeUGZ9PAFFEx/fH76Tw3QP4AXYw6orDOck4u0CWGBh7YzyGterVab9HFuXkWMJHBH79/vasje+Ez3UQm5A/6cwr61YwV3mAdS5E4/dkSLjkuDLqLBDrMCsJJIa2Pwkci9LkgCML+9MgElUCTFmnCvBmZYExBs4hEnwJlzp0Qoq/SuIQKJIyzCIGFXeSto8htqwbVOuanVhxMCEHCOhwTG7UpfPN874jpazWqHxuNKkOrX3jK+46l9w+xBKPV6JFZgYzujaHnvkCv9cHB+rsfeOTjqVjslHj+984oUVLsgWnzDn6eK/bAkIAX1vfUhaE94sitEkTBoc28Mr2Ug8iSMjT2mfZbV9N6pQ6VQU8SG8U75uIggZjHKUsxw5+hOC6vTyFuUgmfCtdf9SVSLPoPxFrAszCo93cAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.google.com/search?q="%band%"+"%release%"',
      'bar': 1},
  {   'name': 'Juno',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAALVBMVEUAAABvpecwgt2r0PRGjeBCi9+ozfE4hd02iOSLtOlhn+k1hN0vgdz///8nftvYoGGGAAAAB3RSTlMA4plb4uJb9GWAzwAAAFhJREFUCNdjYGAwWl6lzAAEjB3bqzsEgIyIciBoAQq0gxgVAgwW5WDQzKBRXl5zvLy8iWF1efnLeeXluxiAAnNvAoXgDLgUXDFcO8JABg+oFQhLGZLAzgAAp7o0US8mEgIAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.juno.co.uk/search/?q[all][]=%band%+%release%&hide_forthcoming=0',
      'bar': 1},
  {   'name': 'JunoDownload',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAilBMVEUlJSX////29vZmZmb8/PxLS0tgYGAoKCjGxsY1NTXMzMyoqKhjY2NVVVU6Ojrv7+/t7e3i4uLf39/Y2NjNzc3IyMjCwsK9vb26urqtra2cnJyYmJiTk5N6enp3d3dcXFxEREQ+Pj739/fq6urT09PDw8O0tLSxsbGGhoZ1dXVNTU0yMjIwMDAsLCyz3MgwAAAAsUlEQVQ4y93SRw7DIBAFUIZgIO691/R6/+vFVXKsjKzsovwF6KO3oJH/Cue8mtUH3y4AA6CzqsDmWyCDIFwANM+PQPV92c1NYgGNFXQPiu0Uhp7QEgHCc/vjlTYC+LQuEZBSMdQCAdFhrAYCQnXlJs/uWDkCLmAONUdAw7K+3fcIICm7tqMpIwwIDbzTcRebS1DD9Ny3XMsMIqq3DyMs1gKHoBHQRVsB6pbg0XVek5/NC42kB7iHLzSAAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.junodownload.com/search/?q[all][]=%band%+%release%',
      'bar': 1},
  {   'name': 'Last.fm',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAC5AAD6+fnDJibSYWHtycn15+fglpbOL1ALAAAAAXRSTlMAQObYZgAAAJtJREFUKM9jYGAURAICMD5CBFNAEA3QT0C4VC0ERKoWQwXMlJSUkgWNlJTUDCECSSrCTqqCQcEiSoVgARElRxBOKhR0gagQVwKpCgxKMYQaKqoKpIuUnZTUipEEnFSEy5TUkLSIAUXNkQwVFgcSgkGBYAHhJBVjN+ckdUMTqApBN6DDCs2UYA4DOxrodNegVJAtAxSEhOMWIzkAAPkjMgYRFB9BAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.last.fm/search?q=%band%+%release%',
      'bar': 1},
  {   'name': 'MusicBrainz',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://musicbrainz.org/search?query="%release%"+AND+artist:"%band%"&type=release_group&limit=25&method=advanced',
      'bar': 1},
  {   'name': 'Qobuz',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www.qobuz.com/search?q=%band%+%release%',
      'bar': 1},
  {   'name': 'RYM',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://rateyourmusic.com/search?searchterm=%band%+%release%',
      'bar': 1},
  {   'name': 'SoundCloud',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEX/IwD/////dgD/dAD/cAD/JgD/NAD/MAD/ZQD/XwD/bQD/KgD/LAD/aQD/KAD/QwD/WQD/PAD/VAD/TwD/SgD/+/r/4dr/+Pb/5dv/59r/2cz/3cr/1Lv/dU//hUv/8ej/2MD/xLX/uYj/o2L/m2L/chQ3aOvQAAAA2ElEQVQ4y83KyXaDMAwF0KdQBhfq4AJlyND5/3+x78gcG9KFN1nkSjqyLOGQcIeDzPfskDG1U3zzICF98JSQPnhOwMuNr+H9/L2ZUd0YhE6/YUZlTGUqpvbZiPrg6P9hgpklRrwfs0IbSDuzxDu3K7yqiSU+VuPpqht0SrqJpRFdO0JPUy8xoqUnHEm2EY1HgvMHzsfuYOHKwdHkJEZ0cYRCvYX4FBloHJeLbsAqi5JZRNs/lAlovLqpmc1/qPdsbZmbN3Jrc5srPkhn5tqRJyAHc9cDnR/BH8VZGrE9ue1uAAAAAElFTkSuQmCC',
      'searchUrl': 'https://soundcloud.com/search/albums?q=%band%+%release%',
      'bar': 1},
  {   'name': 'Spotify',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAkFBMVEUAAAAe2GAe2GAe2GAe2WEe3mMe3GIe2WEe3GIe2WEe2WEe22Ie3GIe2mEe2mEe2mEe22Ie3WMe2WEe2WEe2mEe2GAe2GAe2GEe2mEe2mEe2WAe2WEe2WEe22Ie2GAe2WEe2mEe22Ee2mEe2mEe22Ie22Ie3GIe2mEe2mEe2mEe2mEe2mEe22Ee2WEe2mEe12DL2uVYAAAAL3RSTlMA/PPpwgUTtAvJqDkWz3BdGwe6oWL379VsVuOLiCHbrJx7UUw0Lg+Wg3dEkCe+QMe8CCIAAAGjSURBVDjLdVPXtoMgEERAsfdeYklMT/z/v7u0E7wxzhOwZZbZXaBgOn6CPQ8nvmOCLdw0RtrCoSGSul/mqLKkVfrgSf8X/oDLF2BjKHvYq3CVxA4/8f3yE7bMoT+W39AaUUcFlx3AiRNY7JzVFkkuj8vQvwr0qQgzkpRei/HenSNBaLpz1eJckARUv5iGH4GEUrU9sDzEBA6iDhOIOqcqb+Pop8fZ5bV1V5oFnYDPHA8XcoCSOUOF7c+M70I5SpB8PgVRXddI+KH+GEXMNADMrXl8rZxn13XzO21e7BuQ9Oz7MfB4dKmvK5x9nMm8lnQI9PCd3trm6lcOq/FcYU04SIo6PkBZSl4kQUgbSPXjFImSPoM5zDR2Km5hKCIH9k3+lIzB3Tk59+BKao3ePfFeMqGYEE82Vucz01t/+nK8uFAm4Yc0aG3s0ZG1x7sBjJKFCalBKnJpqsnWLYzIp1nAxdtJ8exctRtMuwOTiy7rzd7ItVJfw94dWonQ/jn2q+0ymu3itAZYQZ/w1+odJb9KEpDV8gYG2MI8lUNsWfFQnlbr/wewimayPmhpnAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://open.spotify.com/search/%band%+%release%/albums',
      'spaceEncode': ' ',
      'bar': 1},
  {   'name': 'Spotify-App',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAkFBMVEUAAAAe2GAe2GAe2GAe2WEe3mMe3GIe2WEe3GIe2WEe2WEe22Ie3GIe2mEe2mEe2mEe22Ie3WMe2WEe2WEe2mEe2GAe2GAe2GEe2mEe2mEe2WAe2WEe2WEe22Ie2GAe2WEe2mEe22Ee2mEe2mEe22Ie22Ie3GIe2mEe2mEe2mEe2mEe2mEe22Ee2WEe2mEe12DL2uVYAAAAL3RSTlMA/PPpwgUTtAvJqDkWz3BdGwe6oWL379VsVuOLiCHbrJx7UUw0Lg+Wg3dEkCe+QMe8CCIAAAGjSURBVDjLdVPXtoMgEERAsfdeYklMT/z/v7u0E7wxzhOwZZbZXaBgOn6CPQ8nvmOCLdw0RtrCoSGSul/mqLKkVfrgSf8X/oDLF2BjKHvYq3CVxA4/8f3yE7bMoT+W39AaUUcFlx3AiRNY7JzVFkkuj8vQvwr0qQgzkpRei/HenSNBaLpz1eJckARUv5iGH4GEUrU9sDzEBA6iDhOIOqcqb+Pop8fZ5bV1V5oFnYDPHA8XcoCSOUOF7c+M70I5SpB8PgVRXddI+KH+GEXMNADMrXl8rZxn13XzO21e7BuQ9Oz7MfB4dKmvK5x9nMm8lnQI9PCd3trm6lcOq/FcYU04SIo6PkBZSl4kQUgbSPXjFImSPoM5zDR2Km5hKCIH9k3+lIzB3Tk59+BKao3ePfFeMqGYEE82Vucz01t/+nK8uFAm4Yc0aG3s0ZG1x7sBjJKFCalBKnJpqsnWLYzIp1nAxdtJ8exctRtMuwOTiy7rzd7ItVJfw94dWonQ/jn2q+0ymu3itAZYQZ/w1+odJb9KEpDV8gYG2MI8lUNsWfFQnlbr/wewimayPmhpnAAAAABJRU5ErkJggg==',
      'searchUrl': 'spotify:search:artist:%band% album:%release%',
      'spaceEncode': ' ',
      'bar': 1},
  {   'name': 'Tidal',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAAAAACpc9xZAAABNElEQVRIx+3VPY7CMBAF4FmEtKHkpwFxAxA1zh0oNhyAnp46oqelS8UBKLamzgmSK+QANAitEm8ce8YrbWJhl8iv8sj+JCt6VgB8fHzePx+vDf8z2Id6mB/megj3AxP8jJ85w2F65dcZDix/xoEJPjjPGEFOlGWcP7ppA5E2sKZThAYaSCipgpJK2EkJ1nQ9QyguvM5w3U43dzrMb+eK1tX5pjfumxY5TkrcL6JVSofTVVTgukzGbdcdIi0igAXSdAGAtEyG7Z9IUQGJCoi0EyoqoaISSmqAglYIG4oQ4KuoTBBgdNrqYXlZ6mF7Gpkr3+/pNftmeuj1X39wdXMy5vJSm8q5UNVVe0pdtaUhlZznoZU8/mn80UpSh83NMVFriNQBSuoEBf1xgwCT3cT/9Hx8VH4BDjJCoXu/TPcAAAAASUVORK5CYII=',
      'searchUrl': 'https://store.tidal.com/search?query=%band%+%release%',
      'bar': 1},
  {   'name': 'TPB-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://tpb.one/search.php?q=%band%+%release%&cat=101,104',
      'bar': 1},
  {   'name': 'Wikipedia',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAGFBMVEUAAAD///8BAQFdXV3n5+csLCyPj4/CwsJBNwprAAAAAXRSTlMAQObYZgAAA39JREFUaN7tmc1ymzAUhds+QVRjs275W0Nm2jUe3Kzx5AVwm+5h2vcvFZa+XDJCxsrCC2uTOYH76d4jISnRB9s+qhXtwUTReLgeQffrCcSHEdRVLSABUiA+hKCubiQQkkI4QAU0EghIIRigglowgAqureEGACqw3QF3wB1wB9wBc8DmkfZ91LufZ/GtUyoy4rEcxW/e7AB8+krLRr23qhjpUtBSC3hYBGytyN8ZUFwI2PgzUJ9HyVuvO22Vio9GPCPGlpUAVNP81b9MmmbSP6b+tYqap//iz1k0B/2kqeU82Nn8p3bUPMXD3D4aRlW+nUhTbp2RJy3rSRx0MaZVo+oBiAheO8DTz0BHpAbAGlfIkr7YEIrbmNcAEAE6OpohmYfsdaIAyMxWTUkZrlErFgDAhE6a0OMablOPAOylizsrY0pjSAFgjnQxMlLbmwqzWwGQEZksKWEQmUYoAVAVVVNSrccjq3nLKAAyopQmlLOiYxQAYUIqS0pn477hFQDABf40STmIe5IEIEzIalnSk3EWau0CDEwlTHg5DyYzPFEuwJaphAnGWKCpExCbuUNJfCD0UboALEOYgK9U2bsBA/0xriJnLAAgTSBFTOhEkYUDgO8pJvB5kFPrAGBCjgm4yi96N4BliA5ll5V56gIcZM2R9QSduwEsQ9KEVDxu3QCWITmuiUiwWwSwDAGQK3VWLwP2RLDflUgscAA2IiI2MxGZegAREZwTEoUsFwD4nmPBVBKyXgAQk722AOcrk4wLgAk9s4KSIkbYAcC3FgvkJl0uAjChsJPiBRP4kpwAJp89V8SYcMICF4C867MFxWTk83lBLi4A0OW0JQ3aBL4kL4Aupy1pY3abrZYeADuaOY2R0cD8cAIwIeNoVelx5UtaBDB9enO0MibEGuMDYEKrf9Rmbmb6R+cFYEIxnSQYlkFb6QOwsiYcrSo9LJXmeQGYwNFq0EDD8wPY1jOxRWqeF4AJrCsxu/yFgD1/72ACX5IPQM69XNlSPwAT6BFgeRmAnAuAJOQHYEIJkIT8AHKuJbBYAYjpEWDrB0gT0pmr/RrAwLzjZLIGsDUBmFD4AdKEfOZquwqgjjIgwoILAcMs4JSpdYBtIvUhXwmIfkkdd44Xb+C/+6GAG7hjCQQE3zMFX5WFAsJv+wJTeIcr07AUgm99wy+uadcWQAuLp4r1+f8DlVKhz9lAdawAAAAASUVORK5CYII=',
      'searchUrl': 'https://en.wikipedia.org/w/index.php?search=%band%+%release%&go=Go',
      'bar': 1},
  {   'name': 'YouTube',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/////8PD/0ND/wMD/kJD/gID/UFD/QED/ICD/EBBwI9TdAAAACnRSTlMAwECAMBDwsGAgE90AyAAAAHFJREFUOMvVkkkOgCAMRYXKYBEH9P5nVdCoIdImuuJt/1t0+E09KGkBxAMAK9UVtwJfEe2ZayygD8NgEZMEJIh5RwlxUIk3cy7ITHDDwgiun2hhxwdKSIzrP8GHD0MSa7KHYk/NPYt9N1sYrnJcaathA2rBFn/0Nk1kAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.youtube.com/results?search_query=%band%+%release%',
      'bar': 1}
];

var public_sites = [
  {   'name': '1Gabba',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAulBMVEV0WUj////6+vqKhIN1Wkn08vLVzsqxopiVgXR3XUxxVkVnTj9iSjxZQjU+LCUzJiU6Jx8rGhXp5ePTysW9ubmzrq2TjIugjoKNd2lyammKc2RdVFRYTk1GOztOOC0oFxT8/Pz49vbu7e3t7Ozn5ubj4eHl4N3g2tfKx8fOxb/Hvba0sLDBtq65q6O1pp2hnJymloukk4ifjIF7dHSSfXBtZWSEbV5iWlpTR0VsUkNTPTFIMik1KilDLibbc1XpAAAAyUlEQVQ4y7WR1xKCMBREE6JIb1IEEey99/r/v6VjdMwMueaJfd0zOye5qJxUjorCb9QkWk5lT8I4NIvtVvba+JvWpQhM8C/VnLM/ZICZxTGTGCDmKCSYyV0rAhHTD1yOwiYgh5RQYHVDnBg6QnMKnAwEZEQBG+pV+pK+CwF7OhA8IKBGgZ0JAfXPITTozNV3L+XQQIMOjB2BQpgJFJr6fwVsCxR6rkDBtyBApgC5QofoCBwVLHBcvMquT1Lwm9bx2XIyA8HRUCl5AhutCp6fvI66AAAAAElFTkSuQmCC',
      'searchUrl': 'https://1gabba.pw/frontpage?title=%band%+-+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /class="node/,
      'positiveMatch': true,
      'bar': 2},
  {   'name': '1Techno',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAUVBMVEUAqlQAqlUA/wAAqlX////P799pzZsDq1ft+fNly5jb8+ef379byJJwz5/5/fuy5ctVxo5IwoU6vnzL7dzB6tag38CU27iE1a1Xxo8VsWMPrl/oZoaWAAAAA3RSTlPmewHs1fhnAAAAeklEQVQ4y+2TywqAIBBFx8xeWqm9+/8PzUEjCVKIFi46qwtzFjMwFzIC9BEgGRAahACEBZyHSUjY2pExJqlgPsoJpey7HClom/sIJ2iTg8J+CYpzPmHsuEGfO/SzWKyAlBir+xX1L3wkrI1BWAHjkOBPvq8WRMsbrf8B/wsPKn5qb10AAAAASUVORK5CYII=',
      'searchUrl': 'https://1techno.org/?t=%band%+-+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /find any results/,
      'bar': 2},
  {   'name': '1Trance',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABL1BMVEUAAAAAzWQExWEAzWQDymMHpVQC6HIC0GYHpVQAzWQC6HIHpVQAzWQC6HIC6HIAzWQGqlYB320HpVQB428CvF0C6HIHpVQAzWQC6HIHpVQHpVQC6HIAzmQAzWQHpVQHpVQC6HIAzmQAzWQC6HIHpVQAzmQAzWQHplQC6HIC53EAz2QHpVQC5nAA0WYC6HIAzWQHpVQB324C6HIC6HIHpVQAzWQB2moHpVQC6nMHolIB22sAzWQC6HIC6HIC6HIHpFQAzWQAzWQC6HIC6HIHpVQHpVQC6HIHpVQHpVQAzWQHpVQAzWQHpVQC6HIHpVQGqVYBxWEFsFgHpVQDvV0B22sAzWQC6HIEtVoHpVQAzWQAzWQC6HIC6HIHpVQAzWQC6HIAzWQHpVQC6HIHpVQAzWTZU+3UAAAAYnRSTlMA+AREAnN0B/r89fLx76aMVBISDQn79+3q6uPi4dfXzMvAt6+vrZqajIqBfnNuaF9eWlFIPjkvJB8YF+nd2dPRy8rEwMC6uLa0paKhjoKCgHVva2ppaV5cSUhCPzYtLCUkDYPAI4AAAAE1SURBVDjL3ZJVkoRAEAULRmAcGHd3d1l3d/dd4P5n2Oi3AhNzg8mfrujMjvppWkKs/MIw7/s9AkJ7RECpm73QitgxyL6wBcO4IJq8XHGqCD6LDg7BIK1phv/IqyqC4aaus4DvxDRT8JJREfDthI7gq+7SjIC/j6uMRqDm1hFMj0XNCPxnHvi17olDZ2SlXWjxEH7iDcLv3GahuaOrFLzrXGH+dRs66G0m4d2+iyh8rMOz9b1VeE+1FoZPXJZD8OkB1tt/1scbJQ5+6+ZAA4Ux9nud8JluDtpRfNiADp0qBFSQnzzjPefz2+Cj1wIZgbMik4UFK3cCIUg9EhlBpCUQguSTlRDsvZEpWO9bCUHunYgFYnlKpmB/hNPiLs0IgcsWIBPVGYFh8/dakuZ/Ef93/g+0hHwDCu1apon9qdkAAAAASUVORK5CYII=',
      'searchUrl': 'https://1trance.org/?t=%band%+-+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /find any results/,
      'bar': 2},
  {   'name': 'BoxAlbums',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAAAAAAAYGBg9PT0LCwsGBgZJSUlDQ0NNTU01NTUsLCwiIiIREREJCQk6OjovLy8pKSnz5zBhAAAAAXRSTlMAQObYZgAAAE1JREFUGNONjDkOgDAMBNdHYnIB/38tR2EXiCgjTbFTLJah12BLQB4ISgPq6TMzJb5tXnaqUuiw+adpbOEh0lU8MCk/fi7+Q1bAOha5AKoaASjwhVhRAAAAAElFTkSuQmCC',
      'searchUrl': 'https://boxalbums.com/index.php?do=feedback&do=search&subaction=search&story=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /class="sresult"></,
      'bar': 2},
  {   'name': 'Core Radio',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBBAMAAAB82dR2AAAAGFBMVEX///8WFhZOTk7T09Pr6+ttbW2wsLCTk5OCXG0SAAACqUlEQVRIx72VTXPaMBCG15YMVyT542oZaK9SA+FqUyBXQ0NzxZSQqx1I+PvVOpkpBtvMdKbdYd6RNe+s9tm1MPyDoPEth5PecmhxyxFFNwwdoTftDutx3mt3FPPHoNVAAi0K1craiyKrlVfvhfm1siap40atrEVMgzbe5EdgcMZus2M5Fy/vuoWXBBkz4Tfz2pzvpoOFlGEjK1dU8pjIRl6ZwlToEBzeYOgGQKUiPIYib2DFFOasAThuA+vpJJ9Opzd+OnkNrJJ9Bq/ntV1sdzfH5ie1vFlomf3ENd6e7dcYKDvKwBRjSij4A4trWNnWTJYwpsx0v7C8hnXJVJLajIWOS5jn1rAmxaAjMjM4vZkG7jUv8bMDjyNpUCMqJ36mrlgHLNUDvUHWqXDYNLxinQQu4fMeXiqpkuJwxeslRx90H9/CbwKyB3d5yequ4mVMOL7JUlGPDpMLXn3wcbZapg4XONtsIqqOlR1CxwfChGYKsg3Y4fCSdTebLXPQXAroerPZAnmrrBj8o+sS1xe8mbrD2HojLb4vv5QPxK/MdV3GijHJGRt+PJ3PtxPVRvX+0lJn0Bjj9XoP9HX1FUg0XB2NrKO80tI+EAY6x6tghUQquwfVvzxk1zMPgHCwTGtT46D98yI8I87YRW9uHFZoHJWiOj7ayiuQhJ85aFopQ6Bq3LNdKyVM2WJcdfioGe45ruXJI9jBa8XRCVB1+JmjSOHyFMJRE8SzTB2ObxxQvVMSG/yMmfTGSimLkaV77tGmkPlIKqBDkwWyknZbOYY9vfVhGoy2Oc382PYy79dz9W1frH8anawPQPb7mO4x8r/4hNI/S5Rq119QHdzvLlAPWNu9Oiv0HfV+gw6CusMV5Jc5dnmZQxk94upuc1bHDFMrhenK00cf8h/jN1WieyoffHQSAAAAAElFTkSuQmCC',
      'searchUrl': 'https://coreradio.online/?do=search&subaction=search&story=%band%+%release%&titleonly=3',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /search yielded no results/,
      'bar': 2},
  {   'name': 'DW',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://forum.dirtywarez.com/search/search?keywords=%band%+%release%&title_only=1&nodes[]=103',
      'loggedOutRegex': /Cloudflare|Ray ID|You must be logged/,
      'matchRegex': /No results found/,
      'bar': 2},
  {   'name': 'FLAC Attack',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAzFBMVEUAAADepJ7do5zANyfdo5zANyfANiffo5zepJvEOSXgppvinZ3ANyfdo5zANibANyfANifBNye9OiTANyfippzIOCzANyfdo5zdo5zANyfdo5zdo53ANyfANyfANibANyfANifdpJzeoZvfpJzCNyfCNya7MyLHODDANyfdpJzepJzdo5zBNyfANyfdo53ANifeo5zcopy/NyfepJvANyfdo53AOCfBNyfANyjdo5zdopvco5vcpJ3eo5zBNie/Nye/NibBNybYnZ3ANyfcKBISAAAAQ3RSTlMAI+j00b+2PTIUEgX37uqQgTkjHxkF49/a1cS7u5qSenFDLScmGg8K7tTHsayppYhUS0c5y8rKsKGYj31tZGNcUEoN465HoAAAATdJREFUOMudkNeOg0AMRT2ETnpC6qbBBtLr9r47//9PGyOsMURKpNwHRsdzZA+GW/N5TVheExbe/i9b2XPYuXN3EwKPt+H0JtqiZ2eE5hIsRX1bE3PG4O1EHxaKO1ZJdCZMcF/tR7etWD/mBNE76qHGRgRa9g2BZulBiY2EDw94Qm2i2yTcx1SuqX9oW7qgEZXyKMLz56kAymi+g0uClLNt46srZZF6kuY38DuUFOpQMJNh8bhVwXMrKS0SpDQOTrUs5TBp2Ervy7+pUJSUSsLxqICwcmj0TFKqacVEqAOlSvcP07Ryh4RACzGwUBz5wAUHVBpYMBQbyFFeMFOgDj4T6lh4VmziRMgLa8Ur3MKZ8KJ4cMIuF6YoDBUfTjjggkNbonwbg4gLPgpjuBB8du2S4Ky7Y7gt/2oNNR9ntDG8AAAAAElFTkSuQmCC',
      'searchUrl': 'https://flacattack.net/search/node/%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /yielded no results/,
      'bar': 2},
  {   'name': 'Gabber.od.ua',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmBAMAAABaE/SdAAAAGFBMVEXrjxXvpUPzv3jtmCj2zpj99enys2H537zqqdN+AAABVklEQVQoz5XSSZNDQBTA8WcZrjqLXC2ZzFWa4YoQZ6LHVTauJBJffyQxomQu+V90/byqp1TDGzG9s9Y+6Z5J7Rhtd8Sm2sPGcdoS5y/vJoCa5e3ba4aBag5e9rlABRs7ADzaRZnX2LRSAunAlYEGa7o5h41RgcrU31JGFfSm1nAl3Azt9jSRsHnARDIX6GYMIbU6TUdiKoa4JuS+zoqZr21o0OFUPGn+Ge6NHL0KLKaoAn0iw6MU0JEo+Yj8IKBaO8bp5LKpPxKH86PW6Ei3/Os6j8/60e5+VsYr4XiqFJkAf11W7DyHq2vjpDNO3Xr8ovBEQ4KumeAiguZM+SQuQUaacCt0SZ9IleI4WW4tDXqDsr1PTHYkQS+KQjESHl/SRePTvp3qwoYrqwNTJwsZD6ycKc5scD0ifm5/aoMdk0Ae7uDnZFcMjDWJbr9cOAKvuf/YGN7tF+5SP2NP06g6AAAAAElFTkSuQmCC',
      'searchUrl': 'https://gabber.od.ua/tt?t=%band%+-+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nothing was found/,
      'bar': 2},
  {   'name': 'GetMetal Club',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAyVBMVEUAAAEyhYAqeHbU46xYo45CkocgUU4MDwvA2apyspZcknsyhXsrZ18aTEk4RjUSIyURIR4GDQynzKOSon06gXdFeW1hhGtBfGova2l6iGdIb11scFccQzwSLy0zNywcLSUMGxkNFxkdHha92KWyzJ+bv5m6xpiHtJeruI1qpoyesIqBlnVGg3SFjm8kamg4ZltxdVpgbFYcU1YnTFVUZVIlXVJjZ1A4WEs+UkYjSkU0SD1HSDgsQTgTNzchLjYjIy8VLigGERMFCAj2oepMAAAAnElEQVQY03XO1Q7CUAyA4TJ2ztzdBXd35/0fipWEkJHw3TT9e1P4gzvNt+V3i7rNSn8Spe89bfMtfmhZfKAuRgHA2jQ7Kh4MDtBe7LlHQJnq4hB1cQegn8OBIAhZFcpw7OUwY1nPYVkHKj4htnywY+1OiIwhprLUkBpIemB4KktFYdCU+XymXyiliZH4OdQUm6IejJUGddffwN0AXs30C7K+mQ4kAAAAAElFTkSuQmCC',
      'searchUrl': 'https://getmetal.club/index.php?do=search&subaction=search&story=%band%+%release%&titleonly=3',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /search yielded no results/,
      'bar': 2},
  {   'name': 'InternetArchive',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUBAQH+/v6xsbH5+flycnIkJCTPz8+YmJgcORQtAAAAkElEQVQoz+3RsQrCMBDG8Uuou1+/gGuLfYEjPkAzuToIroq+/zPYq9ZgIE66+YdLwm/MyZc6XoeSThdEcDhkWe0jIqEgbgs7qsKiXWep5xTIrZ8IgoDqNBlJTM2n0rBa2kmDURqOksKCfRCvnXh0sm1f2BrM0/+xihvxLDEF+2Qbe37IoVhxBSsp3nogCvxNd8fgHTocf1QUAAAAAElFTkSuQmCC',
      'searchUrl': 'https://archive.org/details/audio_music?query=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results matched/,
      'bar': 2},
  {   'name': 'Knaben',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAACAgJ6224PAAAAAXRSTlMAQObYZgAAAm5JREFUSMfF1L2O1DAQB/BERkqHKenMgyD5zc4+XUHJKxnxIu5oXfqkEPOfD0+8i6hxcbf5JfZMZmZ3+/f68gzl6XpfINJnd0McWO3I89oNWtUbBIFgkBhKtCOGQLIjnuEQyGOCF3i9LIjAbhAFHMCiNvxx5w24N67DAEk+Q952QDfALYAHZIFGcAL2IoB/DtA2VwUyQ2gbjBaCKoTOcPIL9lC3KJG7QZLsG79xj3Ufg6EqFIcUCQpDiwWVKgSkgQCFkUQmRNRhQgRkFKY/AMp2LpDeAEsZa+J2rOAJssIAxHdAueElNUC9gXZZIjsDZdZXyMGecAzU9mpQUJ0DYXUHwUluEwLo1C6BpIAm2g4AAmjUQ6Buu0YNE5xGjQJlOzRqmuA16hDIW7g0SEtIEaC9xTwyYK9GxS0Ba4vCvjYOgKhlhReLiuUZNKqBRpVADKM/AhI0cATyrgbbi19gJwi6xSDhUFuApPNjMB4gMVw3RIbxF+Q7j0vATlAo9iYKVcAbtAX2BYJBv+EEWKrR4FrAjV8GSeCn5m7waqny+W5sBp7gwAxY7grRcj8A/tyCAR5uvtPWZp1roVF3uoIDYG4B9xMR2++6o4ux6G+evm9NyCkaxFEH+zAoQ1K2PH5cOjcz97dToMxp+EbgF/je5dA6Jyo0PlvhGFcisM546YBj+GzfQva+twmnFDtUPszWbw6c9Op9Ds283RX2CU0Hz02oNFsrlChFPCbkIGX2en3NzgSFk55d8+qAmVc+ANw7KWDmg6h3F0MTLvIzBdZmZf3BcJ3BkcdKeekc0fZAnz9qt75SjvTh03avD9t/W38ALE8zQ0sutboAAAAASUVORK5CYII=',
      'searchUrl': 'https://knaben.eu/search/?cat=Audio&q=%band%+%release%&fast=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />Total hits : 0</,
      'bar': 2},
  {   'name': 'LeakedAlbums',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJ1BMVEUAAABSYntKXXqouaaUqs5Lo8VKXXoIu/+bWbYuzHHjGFr+xRv/aQetGhbhAAAABnRSTlMAB/kHIhCYosJtAAAALklEQVQI12OAA7Y0MEgAMdTADDjgnLW8es+JtgRKGQwsDsHGgoICcCvADDVkuwBy1CydEKnqbAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://leakedalbums.org/?do=search&subaction=search&story=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /yielded no result/,
      'bar': 2},
  {   'name': 'Lossless-music',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAMAAAAynjhNAAACWFBMVEUAAADNrXv/bwA1mpx4xVudV7I0kpmkSqqMyT7/cQCKV6r0zUZ8wynK5VujO6T/bwA5dcPJ5lvc3EY2lZn7bwPN5FrD22CdVrFVo9P/bgD/bgC43leaWLL/bwD06yD/bwDz7h7/bwDz7xyeVrFEiM70z0dZsOE1ccNZr+Z4wy7/awAzkpkzjJnI5E/0z0bD5F40kZpIjdKuSKqoPqW1WJo/fMdSxbusTa2oWqG94mI2mpny4DB4wCzN5lH0zUdQxL3z6SSJyDA2ccE5nKB4wiv0zUdOhsTqzjvNjHI2nprGy2bz3TZ3wSu5nX7D1VJGk4vccCM2m5k3cMBaxbP0zUd4wSs/f8qrQae+4nJwcYu/ezHz7B+pUbB2iWlKuLRSnsO+4mHNsC3/bgBLk4imU682nJrz1T6qWpX/cAA4csKM2PSBqGbJ5U70zUdcp7qtS630zkXuuBX3cQahOKH1zEdJj9GOy0GwRany7iBWxbilOKI2c8Izk5qaWbKrT63/bgDP5lT07h+64mTP51fzzEj/cAA3ccJLltj/bwBarOI1mprI5EldsOh4wCtQm9f3z0inO6c1db//agD/bwA0lJo1l5o1mZr03zR4wSulU7D0zkf05ivP51f02js6d8Y3ccGhVbH06SdKktWnTa6qS62nQqc2m5p7wipDh86dV7KmSqurRKnH5V3z7CRareRXp+FRnttNl9dHjdFBgss/gMo+fMioUa+lPaTE5F7L5lr01j5Wpt9Tot1Pm9lGitCkRqm+4mHz0UXz1EDz4jL04y82nJrL5VGBxSlDgChoAAAAk3RSTlMAAvIcBvO5Dw8GBfPv6+rq6OPh3tvTz768vKynopqJbGZeUVBFQiYkHhsTEQr++vf18fHx7uzs7Oro5uTk4t/d3NrZ1tTTzMvKx8XFxcTDwMC8uri3tLGxsK2sq6enpqWlpKSjoJ2Zk5CNioqJiYiIiIWDgH57end3dm5tbWpqYVtbWVVVUE9OTEc/ODc1MyAaGBjWid+RAAAB7ElEQVQoz33PZVcbURCA4dlNQiAFihRvC5RSodTd3d3d3d3dHdsEwiZkSdgYgQiB4G5/i9nLySHc3cP79Zm59wxElpem0aTlgXK6a5WV1dVu91RGSZlzoVCIDCj6B1GswXDA/V6u2pWiWItJrtHK+KHosdvt3d2r9u9JiYtLTL30hQn/mn9j79olHntzc/zNA/OHzGZza11LT8+LaKLfNvRV9e9EjX+qBebvvfWjvtoZK/kzvreqwrTLs/SNDkjqTykSZzmNxwHyeb6tYsC67GRJxI1fE+sWbnYajWo4RpY3vRx/a/SprGHkuTCJx5+tZ4HqzoPYUSZvT6f5ty99m/T4dmSTNYfmf9729HX7AO7z+HX9Z5pneX3+i/8BihdIPIPmOd52f2AmADxSZl9Hp22xDuB1KnKO7PEOf8DWhesbVySZrK9oLuoM2BpcJ0C99cLRJPlhP22oweWg0usNay4/pvl5Q5cr2JRAuNxxl9LcHa5gY5PlNhTqie9WRWBZJtuIaBFKAaKQ0QevhwdislnukAVR+AEA8xYRL3c4Dv8pRMydwnHcaUEQtsxGRZf2cQAzXH0ymcPYhCNvCZJU76KSDckHz5/BRdItoCvAtXBsAcj6OMbZII+ZFtZMBibwKzGg3K8Mls34DhGNALrb3pNUk/1lAAAAAElFTkSuQmCC',
      'searchUrl': 'https://lossless-music.org/search/node/%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /yielded no results/,
      'bar': 2},
  {   'name': 'Metal-Tracker',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACOlBMVEUAAAA4AABxFwA4AAA4AAA+AwA4AAA4AAA4AAB1GQNwFgBxFwA7AQA4AAA4AAA4AABQCgBLCQB6Ig2DFwWEHQp9HAhtFQBqFABhEABWDABtFQBGBgBAAwBrFQA4AABpFAA4AAA4AAA4AAA4AAA4AABkEgA4AAA4AACQOyuvKx/OSUG9PDOrMiSAKheMIQ+ZKBiAFQFxGAFwFwBnEwBvFgBvFgBvFgBcDgBbDgBNCQBZDQBGBgBsFQA7AQA4AABqFAA4AAA4AABhEQBxFwCxCQDVCQTBBwD7j477iYjSBwG9CAC6CADLBgD7jYz8hoX9gID3cG7yXlzuSEWlS0GjKiClIhilHROpDwWtCwK0CQC3CADOBgD////t5ePk19PXxsHQubTIrae+mZL6k5L5jIu8kon5hoW3ioL3gX+1h333fXy0g3v6eXivdm2tbWTxZGH2Y2GraF/wXFmpX1bxVlSmV02mU0mkRjyjQjjuOjijPjTqNzToMi+iNizpLCmjLyXkJCHlHRnfHRjgGBSoHBLcFxLfEw+oFw7dEAupFArYDwqsEQfaCgXPBwHIBwDGBwDFBwDDBwD7+fn49fTy7Ovn3drl2tfg0s/by8fUwLvMs67FpqDCopvAnpe8lY73hoX5goGyf3b1dnSweXHhdHD7b271a2mtcWjzaGb2XFuqZFrkWVSmW1HwT02XVkbVTUboS0bsQD3HRTujOzCeNSnkLCmkMiiiMiimKB6jJRqnFQvYDAejDADHBwA2rtFHAAAAQ3RSTlMAL/4EKxYOBwr9/Pl7aiUaGBL9/fz8+PLexLWklIh1XFZPRT84NSIG/v79/f39/fz67uzp19bV0dGyqZ+LhYJpX15H6TsoXAAAAdBJREFUOMtiIB4I4pXlcHZmsmHGo0DNOSaVyUQAtwJG55hJcULc8sy4FUyeEjttHZMUO04FsVOnxydkchqqokowwxXEzZg5a3ZSpi6TLIo17HAF8QmJc1Ozcws1mMxYkRSwwRUkzpmXvjivuKx8CyeyW1nhCpLSFy5fVRpctW1HizCSWwXgCoCmrwmuqA0Jbe922cNlBHOrIFwByPTN9aEt3S6RXm4TDGBu5YArAJq+PSSsM8LF260/2rVVk8lUANWbYNPDXaK8Jvp4djXVBC4R4rZnRg6o+p1A7ZHebnuB2rcGBWakFYgwOTEjKQAsbBdce3VRVopHkTCXFQuygnCQ9r5o17aGoBXzk/02MYnLKPIjKwBqn+Djubu5pmRRim+AHpOFnDIrihuA2ntdOxo25mck+61nEpN2YGFDjc1+H8+e5rq1AR7uOfrOEjxK/Opo0Q3U3lgZmOXusZqTy5KXkQ0jPfS01QUtS3P312EytlVUY8dMMI3VJTm+HvmiTJK8KoLMWFJUZcECd39toOcU+DiwJrmVfr4BIkzmMM9hKljqr8UkZu3IwoEr0W4QhXoOlwImJkmE5zABH4+0nQIfO+6cxcaiwoLuOrQMgksWAEZ3fXgMZEvyAAAAAElFTkSuQmCC',
      'searchUrl': 'https://en.metal-tracker.com/torrents/search.html',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Torrents not found/,
      'mPOST': 'SearchTorrentsForm[nameTorrent]=%band%+%release%&go-search=Search',
      'bar': 2},
  {   'name': 'Metal-Tracker-Discography',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACOlBMVEUAAAA4AABxFwA4AAA4AAA+AwA4AAA4AAA4AAB1GQNwFgBxFwA7AQA4AAA4AAA4AABQCgBLCQB6Ig2DFwWEHQp9HAhtFQBqFABhEABWDABtFQBGBgBAAwBrFQA4AABpFAA4AAA4AAA4AAA4AAA4AABkEgA4AAA4AACQOyuvKx/OSUG9PDOrMiSAKheMIQ+ZKBiAFQFxGAFwFwBnEwBvFgBvFgBvFgBcDgBbDgBNCQBZDQBGBgBsFQA7AQA4AABqFAA4AAA4AABhEQBxFwCxCQDVCQTBBwD7j477iYjSBwG9CAC6CADLBgD7jYz8hoX9gID3cG7yXlzuSEWlS0GjKiClIhilHROpDwWtCwK0CQC3CADOBgD////t5ePk19PXxsHQubTIrae+mZL6k5L5jIu8kon5hoW3ioL3gX+1h333fXy0g3v6eXivdm2tbWTxZGH2Y2GraF/wXFmpX1bxVlSmV02mU0mkRjyjQjjuOjijPjTqNzToMi+iNizpLCmjLyXkJCHlHRnfHRjgGBSoHBLcFxLfEw+oFw7dEAupFArYDwqsEQfaCgXPBwHIBwDGBwDFBwDDBwD7+fn49fTy7Ovn3drl2tfg0s/by8fUwLvMs67FpqDCopvAnpe8lY73hoX5goGyf3b1dnSweXHhdHD7b271a2mtcWjzaGb2XFuqZFrkWVSmW1HwT02XVkbVTUboS0bsQD3HRTujOzCeNSnkLCmkMiiiMiimKB6jJRqnFQvYDAejDADHBwA2rtFHAAAAQ3RSTlMAL/4EKxYOBwr9/Pl7aiUaGBL9/fz8+PLexLWklIh1XFZPRT84NSIG/v79/f39/fz67uzp19bV0dGyqZ+LhYJpX15H6TsoXAAAAdBJREFUOMtiIB4I4pXlcHZmsmHGo0DNOSaVyUQAtwJG55hJcULc8sy4FUyeEjttHZMUO04FsVOnxydkchqqokowwxXEzZg5a3ZSpi6TLIo17HAF8QmJc1Ozcws1mMxYkRSwwRUkzpmXvjivuKx8CyeyW1nhCpLSFy5fVRpctW1HizCSWwXgCoCmrwmuqA0Jbe922cNlBHOrIFwByPTN9aEt3S6RXm4TDGBu5YArAJq+PSSsM8LF260/2rVVk8lUANWbYNPDXaK8Jvp4djXVBC4R4rZnRg6o+p1A7ZHebnuB2rcGBWakFYgwOTEjKQAsbBdce3VRVopHkTCXFQuygnCQ9r5o17aGoBXzk/02MYnLKPIjKwBqn+Djubu5pmRRim+AHpOFnDIrihuA2ntdOxo25mck+61nEpN2YGFDjc1+H8+e5rq1AR7uOfrOEjxK/Opo0Q3U3lgZmOXusZqTy5KXkQ0jPfS01QUtS3P312EytlVUY8dMMI3VJTm+HvmiTJK8KoLMWFJUZcECd39toOcU+DiwJrmVfr4BIkzmMM9hKljqr8UkZu3IwoEr0W4QhXoOlwImJkmE5zABH4+0nQIfO+6cxcaiwoLuOrQMgksWAEZ3fXgMZEvyAAAAAElFTkSuQmCC',
      'searchUrl': 'https://en.metal-tracker.com/torrents/search.html',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Torrents not found/,
      'mPOST': 'SearchTorrentsForm[nameTorrent]=%band%+Discography&go-search=Search',
      'bar': 2},
  {   'name': 'Mp3db',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqAgMAAAC4rSHIAAAADFBMVEWmsbb9/f7K0NPo6+w2+UkRAAAAwElEQVQY052OMQ6CQBREDTQaY7wCjYkJopW9R6D5gcIQjrAlnV7CnhtYrTWX2M6CmyAzHzYUmhh+MfvyM392FnPm2dUjrkWKka2ItIqB67nyFm9K5Na57K72fhcPBw6PNTwteJRDw4qbN3TV0PmCbDXhBDkOv2B1UA7B+6EJOIrINTjW/AKcZOANC1llwTcPwWYnJaqRz2L6LJGGnE44J194pVz+YMO0lGqm6p32SzJ7KmdsTr+7ggPbqmCWKv/NB8KHRCBPDuwLAAAAAElFTkSuQmCC',
      'searchUrl': 'https://mp3db.pro/search.php?s=%band%+-+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Нет постов/,
      'bar': 2},
  {   'name': 'New Album Releases',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEUAAAAvLy/Nzc1mZmaampoAAAA+wqhOAAAAAXRSTlMAQObYZgAAAHFJREFUCNc1jUEOwyAQA12aB3QL3LfQ3jclDyAoeQAH/v+VOJHi03hkyQC+pTQwk/gif8IaFE6UQtmy4fPGmQW5XrAh6238wkkLHHd10g3TPOrDz4anRPuJEPog9BdcjLYPUV7Eukvgd2rI5RQhpQTgAF8wDXxiNUW+AAAAAElFTkSuQmCC',
      'searchUrl': 'https://newalbumreleases.net/?s=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />Not Found</,
      'bar': 2},
  {   'name': 'NNM',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAMAAACsjQ8GAAAC+lBMVEUAAAB2cW9XWltaVVQpJyhUcI1LRUQwibkYYpk+HwYpIiEfGhkwSWBhTTxIOzRBTV46KBgSVIYYNllKLRMaIS0PEBkcHSJGNSZbV10rKS8kL0AqWINPOiomeasxQVVlSjU4NTs+PD1BV3MnKC0dBAMPVZE/d5kROVk8la8qVnQTOV8bZJIUQGISDhATP2gmCgUUGSUkmsknIB5KXmkXITNZOBRRRUM/KBgYEhQ0PU9MPzwbmNMxb5sWU4Mgep9VaHRMTVIblNs6t9JEOkAdQGtFZX4rQl0baKdKkqkdV4MhO18VExIae68tKShRNh8wqcdTVl8dFxdBJxsoP2NkUk18Z2Jf4fkKSHEKntseldQLNVwIHj0HFjRS2/g+1Ph14/cq0PYnxfIqt+wMq+UNkM0VisYHdKIMb6EOTX0JKEgFCiJ+6foh4PlC2fg01fhl3/c32PcX0fU1yvVD1vMLu/IXwPAgze82xesKuugYtuhNx+U1r94VodsJlssVkconhsQagsMJgLgPc68OeaEMZaALWIUOOWMJK08IIUIzIxUHCBNOLw4YDQgKBAJs6PlK3vmP6fhX3/g0z/hc3vcR2Pcw1fciy/db3PYJyvNU1vFBzfE3zO4eue5Ayu0/xe0OsO0HvuwYrOsUougoueUkpuMMouEfr98lud4Ipd4Yl94TstsFotURgtISm9ANn8cNjMcLh8MijMITk70UgLsqnLkch7UslrEmeLAUbasKdKgobqIRVZgKaZcNWI8IZI4KXY4PUIgNYIMeV20NQG0MQGYbRV4LMlRaRjIdKTEEEC0OFSoHEShKNiQgFBgpFw6n8PpG6/kv5Pk83/hx3vcV1vUFsPQ6ze8ise9V0Owtv+sUuusirOsQoetezectzuUgmdxOvdtBpdc+ttQmt9AKlNBDrs8oqcQimsQadbIbb6ktdKgdh6MxcJUOO4kbXYc9YoYmUoAiTnQxZnMPLm4oSGoIQGgRL2ExW2A0RVwnTldgTDxMPjEjICMxFAVbpqZWAAAAVnRSTlMABg8JWB4b/v38aWI+LSX97ufewayppI+JhYF6X1VJRz4yKxT+/fv79+7u7Orq4+Pg397Z09POzcvKyca+ure3t7a2raygkI+MiomJfHRzcXBtaWZmGFG3Q3UAAAJuSURBVCjPYlDmDuRWYGLAAhS5JcW5mBnEek+1qXK4KKDJMkkKffv8NqbXm4GlKyPlVtlsdldmZPkAzYaVixYtXJPly8AgdjjjeXlx2ANLNrg0szN7fWTkyjmJa0QZGRj4dHbvbtq6tbzKOBSmwGHX9o1JuQkJlXpgx9nsaEqtnDk3rMqeESIv8ap+VlF5btzURC8wHyC3AylrCwumZ8dXS4D5Ie/rkxbfzJ8YN+l6MFhANnVHXenUmXOnF6nJA7m8/LuWVC+bFJubN62BFaKgJnVtSU7fhOqF962Alph9YI+8XRAWHxYbtxGiQKmBIzW5tCD+8sMX/DIMMj/ebI9Migub2J8wzRrqKcNly4v7JpzPLqr7Ym4k8PHlktiw/HkJpZXJPlBf8WjXLS7Oj7+RtPloT+/Zd5HzJvfnJc6p2SzIBg9XgDw0nj6qujtrPsefnkPLy+493rJt2xYnf1aYPKvjnZIpV3LCYvNqTvS8zimsWLfvYPP+vZ6MMAXu85dGRCRfvZQ9e9OZc9+vLVjduP9r+JH0dDmYArulG9avKJlyYXLip1+dx59VrE5LS289EtUCVyAdEfGkdsaMwourfp8ROP5zVVpaa3h4W3SUMkwBz/rGPbURKxaUHeo25e3ubN4XnnksvD3aBO4GBsAE97buTKmtWNfZLc/gx3liT0dmTExmhygiedgeiNrQtCn5KKc4kCP8N7P9ZHTWyTYphALpqIzGgynN54RBhvJyno2OyTrdHsWDUMCi3hK+Mz1anw/MC1I5FXO667AQGwMCKGlltHRY8EF5XLpdx7IMmFGTuJQIC1KS5hJhgekHAOpG6ac4yP7iAAAAAElFTkSuQmCC',
      'searchUrl': 'https://nnmclub.to/forum/tracker.php?nm=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': 'Не найдено',
      'bar': 2},
  {   'name': 'NNM-Discography',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAMAAACsjQ8GAAAC+lBMVEUAAAB2cW9XWltaVVQpJyhUcI1LRUQwibkYYpk+HwYpIiEfGhkwSWBhTTxIOzRBTV46KBgSVIYYNllKLRMaIS0PEBkcHSJGNSZbV10rKS8kL0AqWINPOiomeasxQVVlSjU4NTs+PD1BV3MnKC0dBAMPVZE/d5kROVk8la8qVnQTOV8bZJIUQGISDhATP2gmCgUUGSUkmsknIB5KXmkXITNZOBRRRUM/KBgYEhQ0PU9MPzwbmNMxb5sWU4Mgep9VaHRMTVIblNs6t9JEOkAdQGtFZX4rQl0baKdKkqkdV4MhO18VExIae68tKShRNh8wqcdTVl8dFxdBJxsoP2NkUk18Z2Jf4fkKSHEKntseldQLNVwIHj0HFjRS2/g+1Ph14/cq0PYnxfIqt+wMq+UNkM0VisYHdKIMb6EOTX0JKEgFCiJ+6foh4PlC2fg01fhl3/c32PcX0fU1yvVD1vMLu/IXwPAgze82xesKuugYtuhNx+U1r94VodsJlssVkconhsQagsMJgLgPc68OeaEMZaALWIUOOWMJK08IIUIzIxUHCBNOLw4YDQgKBAJs6PlK3vmP6fhX3/g0z/hc3vcR2Pcw1fciy/db3PYJyvNU1vFBzfE3zO4eue5Ayu0/xe0OsO0HvuwYrOsUougoueUkpuMMouEfr98lud4Ipd4Yl94TstsFotURgtISm9ANn8cNjMcLh8MijMITk70UgLsqnLkch7UslrEmeLAUbasKdKgobqIRVZgKaZcNWI8IZI4KXY4PUIgNYIMeV20NQG0MQGYbRV4LMlRaRjIdKTEEEC0OFSoHEShKNiQgFBgpFw6n8PpG6/kv5Pk83/hx3vcV1vUFsPQ6ze8ise9V0Owtv+sUuusirOsQoetezectzuUgmdxOvdtBpdc+ttQmt9AKlNBDrs8oqcQimsQadbIbb6ktdKgdh6MxcJUOO4kbXYc9YoYmUoAiTnQxZnMPLm4oSGoIQGgRL2ExW2A0RVwnTldgTDxMPjEjICMxFAVbpqZWAAAAVnRSTlMABg8JWB4b/v38aWI+LSX97ufewayppI+JhYF6X1VJRz4yKxT+/fv79+7u7Orq4+Pg397Z09POzcvKyca+ure3t7a2raygkI+MiomJfHRzcXBtaWZmGFG3Q3UAAAJuSURBVCjPYlDmDuRWYGLAAhS5JcW5mBnEek+1qXK4KKDJMkkKffv8NqbXm4GlKyPlVtlsdldmZPkAzYaVixYtXJPly8AgdjjjeXlx2ANLNrg0szN7fWTkyjmJa0QZGRj4dHbvbtq6tbzKOBSmwGHX9o1JuQkJlXpgx9nsaEqtnDk3rMqeESIv8ap+VlF5btzURC8wHyC3AylrCwumZ8dXS4D5Ie/rkxbfzJ8YN+l6MFhANnVHXenUmXOnF6nJA7m8/LuWVC+bFJubN62BFaKgJnVtSU7fhOqF962Alph9YI+8XRAWHxYbtxGiQKmBIzW5tCD+8sMX/DIMMj/ebI9Migub2J8wzRrqKcNly4v7JpzPLqr7Ym4k8PHlktiw/HkJpZXJPlBf8WjXLS7Oj7+RtPloT+/Zd5HzJvfnJc6p2SzIBg9XgDw0nj6qujtrPsefnkPLy+493rJt2xYnf1aYPKvjnZIpV3LCYvNqTvS8zimsWLfvYPP+vZ6MMAXu85dGRCRfvZQ9e9OZc9+vLVjduP9r+JH0dDmYArulG9avKJlyYXLip1+dx59VrE5LS289EtUCVyAdEfGkdsaMwourfp8ROP5zVVpaa3h4W3SUMkwBz/rGPbURKxaUHeo25e3ubN4XnnksvD3aBO4GBsAE97buTKmtWNfZLc/gx3liT0dmTExmhygiedgeiNrQtCn5KKc4kCP8N7P9ZHTWyTYphALpqIzGgynN54RBhvJyno2OyTrdHsWDUMCi3hK+Mz1anw/MC1I5FXO667AQGwMCKGlltHRY8EF5XLpdx7IMmFGTuJQIC1KS5hJhgekHAOpG6ac4yP7iAAAAAElFTkSuQmCC',
      'searchUrl': 'https://nnmclub.to/forum/tracker.php?nm=%band%+Дискография',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': 'Не найдено',
      'bar': 2},
  {   'name': 'PandaCD',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA7VBMVEUAAAAAAAAAAAD+/v6mpqYAAAAAAAAAAAABAQGLi4sAAAAAAAAAAAAAAAAAAAD7+/v5+fn9/f0AAAAAAAAAAAAAAAD///8AAAAWFhYAAAAAAAD+/v79/f0bGxsAAAAmJiYAAABzc3O+vr6enp6Hh4eurq4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9/f0cHBwLCwv09PQ1NTUXFxcVFRVPT089PT3h4eFbW1vd3d0aGhqjo6PAwMC2traIiIjr6+vt7e3n5+fm5uaOjo59fX2qqqoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9JeSbxAAAATXRSTlMA+uvtu01JIfa/r5o6JBzy8Oi1YVQ0/PLx8e/u6unm49/e2tbDu5dmVUQ/LhgB+PDu7erm5uXl5ODf39va1tTQzMvFwL+9uaSeWVArH5NNKDcAAAFASURBVDjLrdLXcsIwEAVQydgGF3qHBEKA0NN77/3u/39OjCURYcwb58Eazd1Z7eyYbVh6VCza6XXp+MNAqOWVY+JkARo3Gc3tBgKHnS6EhrWcDziA+ywRQeIDPbeCvJ0j2r/YxcK39n4VuKxQ7gy6eoYpLnBcoVtEuCovA8hS2JxftzkWJrLAA27oCECq3yRK9FOQ9mSBMW9wHuSPFHpSTVozMSJQoxwAk6Q3SGJMG+jQFcATRFu91/kX0jgsKAFdugO2icgBnOA4hSDW+YU5UdADXoLjBEIpLBip5eaJmo4TPJGH5IufQFy0Ic3lIWeGavEg8me1iB0mfEJVmMErCZNHF+XjX+1Au/wwqYBYLlPS1bjcmLKFUkzObaYp8pV8yJZY9Uh/m0X8vut5IcNWlT1D7sebsDWm/tDyk2yz/gCezpSjzj3NtQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://pandacd.io/index.php?search=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'bar': 2},
  {   'name': 'RlsBB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJUExURf///+KWHP7+/g40ZLEAAAABdFJOUwBA5thmAAAAxUlEQVQ4y83Uu3EFIQyFYRKX4L4c+CdQCfSjEhToVOlAsHcWrh+JxyZivmEEOrvQGrfR2ssd3trrHd5PYBt/BSZJSZck+QJFQUJjKHotQXIaJjCBnK6gYQldjhxGTkCBHOwALRg/hX6suIoO33eZEBdQB/N10pzABIvqJanm+iwzvEBKQJJYoCjQqjHOPGLPI/fmcjbnE0zPgV+GfA79i8/wSepjtW8z5OuHUYVsuiL0ijCg0WvyCPmfXI8Dvr/Zx2OwPxcfV/CgxyM3gh4AAAAASUVORK5CYII=',
      'searchUrl': 'https://search.rlsbb.cc/?s=%band%+%release%&category[]=music',
      'loggedOutRegex': /Ray ID|security check to access/,
      'matchRegex': /Not Found!/,
      'bar': 2},
  {   'name': 'RockBox',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAulBMVEVJREONlY2ss6o0JSNudHB6gnu8wrbV3NNxQDSdp5yCi4TavZvGlXBZLyfHycG8qpnq7+deZGDJ0sq3iW9pVU789uaLWE/15MXp1byieGT65Nb33Lzyzq3oxaaXnZbIooezloyvcFXdqIX68M+ciIGWZ1To2M3lvqnptZTas4zd5tzVzLfky7PMubCQa2jZ1cPv27KgloWLTj3p5NjKr5/FlIrMr4PkzqOdWUK+zcLfy8bo4b6FPjBwfIQdnM3sAAAC5klEQVQ4yzWS6YKcIBCEARFQFO/7HMfRcee+Z7Ob93+tNJuEv3xUF1WNAhRgjC3CQn9inuftylMYct8njCv1yQ1EgwBblkW4f4L7sein0g95kpDQ5/zDDzVgYkKUulw8794V6eZxP8Bzy2KEEEYAoBiTMLzExbOpqrpPr6mnSEjIJ2NMAUApOFA4Lpyhqdbr9VwIb1IfHx8+nMRHpk0xsTBy/wFZfh/7w+0GBOccAGqDR4oMN426fd30Xf61O+x2Hvf/A2ARI4TcOOrGout6j+1OufQOSpvkXCu0OECGEW8K4RZzV3innWzm/kJI2zKFTEgJFIAwRCrEphjzMpdN3l8UVyFnMMImBBmaEMXbFX1ZlllVz3dPhRDpJwIB1gIAhNikYuNNSdkXEaQFgFZoW6IBA8UgIcSjP/bjMRVHcKmT4AhTkxCKtAIc9zGiGHmH4/HwS91ufpL8BUyE4hgIV2w246/p13yYp+l0Usr3ETZtC75hAEHb/pimj7LcN1VZ3jgPWagQtk1IIgAAIr/3Y3qNhjqrmiw5McUYgS5AAmYYgWnaUPkYizSSs6zWJ1gfpdDPNhCQCKhpmpjxi2u4V2dbZV9fu92No0C3xVgbIASEFTKqI32vlipbJ9OOAGACQHRhgQ0RIBfyXq2i5ZwlSTJ5P3WTT/0RYCEhcU0L57ksi8xLTSCKMSbMwlhHATk4TvRosvPSybrOs6REtv4naS2IO07F9zsatnW2zvayqaWUeYNsG2aEaoSN2aTX98pZZgDKfL8/n+Wz3iMbrINFeD9GKzC3bZoqzzPd+fn5rCrograYGm6cRg/HcYZaK++n/JasX04kJbIptU14f7xuIriHyV3UVbm3X6/zrogcZNKABrAOQqQwYGjmZYAYa3nO8j2gnY7P1lvvuuL7++0Mw7LdbpvXK8vlvYjmGgXQpa1XQZ/rCqZst4t8nbOzdFZOPSCD/v5NAfjRuOqQHThP+ZJdsRq2xh887k8KMBj8EgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://rawkbawx.rocks/torrents.php?search=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No torrents here/,
      'bar': 2},
  {   'name': 'RuT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAACxM3XjH0Q4Q/PsGD7kHkQ1S+4yTuvnGz4AzmMA0GE1TenmHkEA1l/aKEEAz2M2TeoF1V8A0l3jH0TnHEIA0WQA114hXu43TegAzmIA02UyTu7oHT43TegAzWPpGkP7CzjjH0Q3TegAzWPjH0R3ovE9AAAAInRSTlMAA/0rP+2ESyvsyL69mRXcqi4U1KyFSRnrtHdwa9FjjVKEHeMnRQAAAWxJREFUOMt9kAmuwjAQQ5N0Sxe674UCbe5/xu9OGsiPAAtpkPzq8YR9Eufslzi7Zr99XyiJ8dXPG6WunwEOMd4qodrvCTKDr4LcJTiTTZa1bSPg43dH3L9sWi0UPPLRwj0X5WHCJoHJfMte54N4Km0HWQAW8+6bjy/7VGOeS/xBBhjU9QXs8YoXBIBsb4se4vjXSJPQ7VAxSyp5XbZxaPHnyV/95v1QImmDTLctzQPh4worAbr4QtAGKJTwD2lgIqC/C8gPt0PlYL1ARX6BWBE8GDaQ0hIKD58n5wbVPvK5R8Jb5fE9+Ti0yquu2C+e5afo0McwNVHQqN4Ro8dwgKuiLg0QYcGaxC4x8Zv2b/Chuu8cxtQIAZzM9F6QJIkBFu3Si2oinuvBg1IrwX6ruGJsIct0sJQA6EFGmyXPiljRjfEXMI5WCVKN+9mZMC4D515421ILYB0WaCAdztgoYo4ICMFxus319PCMpZk/48o2nzAHjjMAAAAASUVORK5CYII=',
      'searchUrl': 'https://rutracker.org/forum/tracker.php?nm=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID|Введите ваше имя/,
      'matchRegex': 'Не найдено',
      'bar': 2},
  {   'name': 'RuT-Discography',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAACxM3XjH0Q4Q/PsGD7kHkQ1S+4yTuvnGz4AzmMA0GE1TenmHkEA1l/aKEEAz2M2TeoF1V8A0l3jH0TnHEIA0WQA114hXu43TegAzmIA02UyTu7oHT43TegAzWPpGkP7CzjjH0Q3TegAzWPjH0R3ovE9AAAAInRSTlMAA/0rP+2ESyvsyL69mRXcqi4U1KyFSRnrtHdwa9FjjVKEHeMnRQAAAWxJREFUOMt9kAmuwjAQQ5N0Sxe674UCbe5/xu9OGsiPAAtpkPzq8YR9Eufslzi7Zr99XyiJ8dXPG6WunwEOMd4qodrvCTKDr4LcJTiTTZa1bSPg43dH3L9sWi0UPPLRwj0X5WHCJoHJfMte54N4Km0HWQAW8+6bjy/7VGOeS/xBBhjU9QXs8YoXBIBsb4se4vjXSJPQ7VAxSyp5XbZxaPHnyV/95v1QImmDTLctzQPh4worAbr4QtAGKJTwD2lgIqC/C8gPt0PlYL1ARX6BWBE8GDaQ0hIKD58n5wbVPvK5R8Jb5fE9+Ti0yquu2C+e5afo0McwNVHQqN4Ro8dwgKuiLg0QYcGaxC4x8Zv2b/Chuu8cxtQIAZzM9F6QJIkBFu3Si2oinuvBg1IrwX6ruGJsIct0sJQA6EFGmyXPiljRjfEXMI5WCVKN+9mZMC4D515421ILYB0WaCAdztgoYo4ICMFxus319PCMpZk/48o2nzAHjjMAAAAASUVORK5CYII=',
      'searchUrl': 'https://rutracker.org/forum/tracker.php?nm=%band%+Дискография',
      'loggedOutRegex': /Cloudflare|Ray ID|Введите ваше имя/,
      'matchRegex': 'Не найдено',
      'bar': 2},
  {   'name': 'Sharing-DB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAnFBMVEX////8+/vt7ez09PT29vf9rQv8axL+mg7y8vHf39/b29vk5OO5ubmnp6f745P9iQ76zoGYmJj7Vw7o5+bExMT9fRLX1tb67Kj8q3DT0tP2w238gjzNzMz0zK3ziCbZyLTy5s/7eiz8nFz7i07ospT1tzXk29Hy18X7lEXpk0Xy8OjiqXzlkWv6rFDobzr1nSXhnWDz797X0cnmh0WiWGkdAAAB9klEQVQ4y22T6ZKiMAAGlwQhhysugayEG0HwGh19/3fbj4DHWNs/lKS7kljEXz9wLK/xh3VdOsKo6/xXMxhKXWSMIfn00PS7+guqg0sJ+yhcwmi1Wq3GAF/flBDnwx9Wa6ttYfqfhQO/NqsX6y5nKF6eHEy3fsdcUNDnBorkxXltzGbGGHPZV1jiuYDax2foZpODTYNm8I5E0TnAAl58PjdN07O+r9otngrva6fIFFBJTqE3NMO2ddo03Y4MdRi2RE17ECm/Qq/epunGaevUUntheCLyEewQeFDbiuZNWqc1PAIl3ffAi4tiyA80HyaPgM8Bn4PA9y/nnOZF7IHwJB+B4Hfo0S9AX12CeAyOkk9nYEIeJ991i0VX9Rc/iJGUfA4cwcs6DgJ/YfC+q8osFii8+04o2BEp+NVu0Bm8BayCIIhbLugcUM3L+xg8wQrXncAOM1KLtngrfD/Yl0LT130Rc+FbPflEOc+r7pJEi/JaBGhgg+J4E4lwYdBAM6JEloikvO4LsD+WWmeJJLjlKHCDpUiyaBlpoW8luEFjmAkkLgJ4jH+DKEu01kliR8tlpiWhNtAZZv6MYB6P81OUcBswxZMI8xAP7ALYQxFsgTPaQ2RRhAxAARyajx6B4yIhSkr+Qkql5h8BHODafzZj44f9xIRj9T/z9DTkAVmBJwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://sharing-db.pro/?s=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No posts found/,
      'bar': 2},
  {   'name': 'SunXDCC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3BAMAAABa9c91AAAAMFBMVEX872/860765if88pj79seKhVpeW0HQxVbp3m/p2USvp2PYxR0nJh25qR+/u4/a05ThAYZPAAAEMUlEQVQ4y02UP2gTURzH35HlnLx3iz1cem+REgoHL0Nx0CHnaqYXodC6mAzSQQW5XkSNRMjZwZou8SyOIXhiqFlEjqydiohQipabail0OIUGDA6J398lil+Sy5/PfX/3/d1792NCiLzg+cGBbRgGY1rYMjlkClvMA5Iu7q/4LWYYnIcgls1tIQDzfXxyK3nn+wbTvNC7a2iXtjjHn/Ns8VBw2+bWh7ctxi50vegu09rvCZpwJl9sLgwr9F4w1vQ8r860VssApGsOEluEXDPm6oyxQA9wxGU1U4gdJhYTwTlyshxjet1xWCaN88XPTOQHh5xQjgUNJqV0IMaMf7BFlDmbwa+TgEnyGhrTUNYWsee3DKbXVJVUWW6gKCjnCGQufPjQrusdgDUIuFvPvAhiczP0X15QZaAprCp1hwIDChzDVx3UBKiUq3uwqk63GXJrHtCwatG+qlRvNySpU6moFbXyJrR24G97394pBXS8tra7e3vobCillrvB1gvGrZdetL9ykDtd28tUvXm2dF+pA98i2PZq3cZGuVqdwt1q5cjZ2O8G6I/Ptdv1ZgdsdwqRV3UdHcsAyLle63TQym5mrWS93PjJCFKgKAJbLUwI3pqcltVyFHnBE8CF0IOz99R13Qy6w9KxinreOkGr6UWPpSwCUt5hyS0WL0ddb4T9ZraeIe1ZkeC1vb1PLul31D2hVc/fC7xapH4UXKg0pGPx93J0sk6BXvtzTUqkjtyZrisEOnIYNHiDfVXrKFWt9NIfaZqqikIeMOjSRxzkb6XK5WqmChYlOpI6wqJPgjJVqjJjVFVKugkZzMncZDjOvOWyUqtRJKe7kBuAufNnQ8Qdj8fuNaXcXk+CaXAybGeZk3KW9VjddKMfcil4cuEONijTA+nIwr8+XLd34ujNZ7XPcDIjaOD2yZlx1S310tFSs/kQiw0rwUKBvKXV1e/fx+njoB5YPqXFDW7IArxkPE5LkyuPJ2cSeQDxZo4kVnSvp+lw6F6ZjHIMAkSjkIS3UDo9/V4qycmo7rCsFdsMOXUqoXGauljN0aP15sk6t/+Hxeco6spicTIaBdgn4TzjYgGnOJLJqxPkQEsyCPTmxruD+AWzFxKfM+j85uamLBZA6zpjYdd/sMPMwcpXPJ3rgbO0KWeiNNzGNBHJt48Gm/MCNgUOvYji+QRMDlrYgvUckRwImPb3+RwkyXuOxOh76stWi4exAMwnMZw0a/A33nRzYNx+0Cd4+NHWDAoMM02Dc08QR2yLqbNvmxxwKn2ubWB+bW/HNN7iJO6b2RAjaW3vLr6bW3kBiLIJEISMUNu3pmPRzmByiLIGx2ykVbI4dHGrL0yCi8khJrnNDQ1eqs45rvjFFjNnn8Z8JitEDTOMKQZBEcMJ2aZt4EnGWcjYF6i2QzDGmM/HYkGg9Xhb4AdBOP8AngHilO+e6QkAAAAASUVORK5CYII=',
      'searchUrl': 'https://sunxdcc.com/deliver.php?sterm=%band% %release%',
      'goToUrl': 'https://sunxdcc.com/?sterm=%band% %release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /botrec":\[]/,
      'spaceEncode': ' ',
      'bar': 2},
  {   'name': 'TakeMetal',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD///8fHx6cmppZWVmGhYU9PTxwb2+ura3MzMu+vbzs7OvW1tXe3t3k5OP09PR43bfOAAAD7ElEQVRIx5WVW4wLURjHP9NOWxsv/7jurq3R2qpbMjrUIpFBWeLBkKVIxKi1IkQa26p4kLrfEknd1y1o3BLChIQQEeISl5DlQcS18YaXDS8kEt9QnZlGN/weJjlzfnO+OfP9J4f+FUGiThEVZWRnime3Liw+2YkwVOVLOFtZ2EhCgmhT5QpZmos7VFXxLbyaF4Aqatam0nG7LWquDuCiRy7daYi3nnQIogH0oggV8WX5nWV7CVPoYQlriDltCW7Ny0JvilKREzRlBIVtguy+CfSkpj+7kgVAd+lEpRvud3ZBTIqALKrWpmTPE1OIF8cuvQrIikkqEREevEOv0juEaYgpaJYQFQ63HdRoRHE4kcYDsk3gmZ0P20bxxC+41AxAs5eI07gjOCMFi8P1tA5QXaolpGmtgbzuC5gNCAyQhbHoK7kkuzDfwBfdlVeiExVltCru3XaAguQQCuijkyRM2RiQBPL52zbRRKfQziuUxoMMjscsmzCJ1t5C7wkU4lyFmifQdOAUb81iEU079G1lIvzqR9JdgJ+Go1+E92IRpOVHDjSp4/PbL3fbu/2WfAG1SbdMjPXxuYS6IK7sHnrGMG5fQJ3u1RzC4EPomdj29OX3wQVg11mjRvcm7YJadQQ99MDAV33Dt4Db5xru6qJdEFXfY0T1oDa+Llxg4bg/6hS8Sden6pB4us5XGzS4RA6XJc6LM7V9pGn3jfobwQ5gvYHuxIlzpPYT6E333OLPiwBEgBoye2UP5es+3h09O+rfLgYwGehb7JUVykfv5+7IV/sKLPgHArX8de1EhFwC/lyvYf3qgT4ulriZdqL0oCsAefglEXhRxRKlHUIT7enCd93YGzAQ7d9R+gesQCRWA8cW1qak1acnBFe3f7W6XQy6eKW9n6d6dnNgcos+9+aPexRxCK20sO/xU9yfZqklIQLX9gmyQ9jMQX++SPVI5kc5DtSccq7gyQqobatOLEnpxHEC6soEMekFcGLkUlxLLkMBgCVYv3PNlLoZQPcZl0xhn1MI0grgI0xuHJgK5nbZCtJQA7+pfrYOzK4yQfV+vl406mGSdW7Tc4zOH2yHiT8Mpp8j9cwWmvYgB5Oe9WaJD47UM2EKnz0Kk/1LZhm4mpE4cXZ8ukfZBqYmHovPyacy/IgD9zFaPGsH8GNLUyaTijWuKouDeVYI6XTDhpGZlrhprORuO6mSSWjMZDKx5lgmFmvUhSyVMUYnaua5WEsjXyRRKxfceYkoxHO8RmwCDZKoHHGDSiRQqIWRrLPAvsaYlcSwROTK/vVsa2gKBH47Wyucz61Kw8iUJITmaRWPcKGxVVGUmZ2f8wH6H34CkUUGTqBEkmAAAAAASUVORK5CYII=',
      'searchUrl': 'https://takemetal.org/?s=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /no results were found/,
      'bar': 2},
  {   'name': 'TGx',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://torrentgalaxy.to/torrents.php?c22=1&c26=1&c23=1&c25=1&c24=1&search=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'bar': 2},
  {   'name': 'The Last Disaster',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAilBMVEUAAADFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxzFjxwJ4EaiAAAALnRSTlMABgrHOcO3FzNBbh2xaCuiRpSOEMu/modkdFhJE7udgHsmIt+rptNdTfZT7c9Qxz53ZQAAAiVJREFUOMt1U+d65CAMFN3Y4N57WW9L8v6vdzKb3GX3En7MZyPQaEYIfl6EImip4LfVzQjtbSK/xIOiRLTvLPwvtQoUpdzcJvxJprR6iatJCDEUrDxrTCO4LtTz/dTwwIv1Wg8ZgG9oX8T/guuHTd7GmlMsMb8DeCwGEvlfYT3m7LYlaSQ59IUl4BUzSiibR3xNWB6p7iQ4ZAQyOemZNYcVnxm8oVx4HgKtEvfPdzlqvI+5OhcvGkquWHiwV19GPhy6OhWBbAjod0t5MQZPqjxRO20Rsmm2kH2m38PLzNwGd35Sc6Hm/klQc8SYlZxkSJWmCEGdc/Aj/KJdk8UrnjI+6tljUCiNWGGuZPWZApTqOyIqP4A2Nx9i0WM2TZFKXgiJ5FedNRuN2HzwdwLVoS6tXEW5h/If5tp2Ga7QlADzSICeWtx17qtIAXVOBMJzB0IxebVYnXTW4fYaGhkfSoYemvHYjpi8OuakIhDk3kVqhekS5G4ldS8J0R1oIEtZ6KqC+LAoZMvDndBeFPRlAt6Z41twTltEevKdrxOLhr2VBht+ioaJgKrFw/p26I8yR06CRNoMqKcrn/ulMPdHSzPjA01SVwlCPzJhs4+3lP/tnM515zSSIKCHU500pem/vWXLmHVk+fkOqrCg5PvTxBB/a8nRHnmuYWEdTgd/macLSzwCWpYhSU+tPIXwupaU7TbmC6/ftqHOfpr3cJbnbdvyqH2etj8xNSLlsYD/wAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://thelastdisaster.vip/?s="%band%"+"%release%"',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nothing found/,
      'bar': 2},
  {   'name': 'TPB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%band%+%release%&cat=101,104',
      'goToUrl': 'https://thepiratebay.org/search.php?q=%band%+%release%&cat=101,104',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/,
      'bar': 2},
  {   'name': 'XDCC',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www.xdcc.eu/search.php?searchkey=%band%+%release%',
      'matchRegex': /No result found/,
      'bar': 2},
  {   'name': 'zHouse',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAq1BMVEUAAABKKyv92DX/6DYxEinGvLx8XC//3DU7HypnTU1aOSz10DXi3d2voKCIZi5NLixHGyT/+jdgREP7+/tMuVP+4DT5VhwzCgzq6Oi+tLRUNzlOJiYqWXiLcGYBvP2XhIUNj8xJf0MbASW4RCJTGA5/OSexkzLVzs6klZX/65PpwXrOoWlHUjcXHS60il1FODO0qKc/P0nZtjPtzDFtHSWrmpwrNElkAADu1jUjSIqqAAAAAXRSTlMAQObYZgAAAhBJREFUWMPtlm2PojAQgLdLqQMqlDd5FwTE11VXb/fu//+yG2JNOHOAmNwlm+X5pLV9nJkOYV4GOlmtrOcPW6tEIcRM5Kccnh8HRBDEJ6/f6cmHopM/UdarRwOXE5P8hceS8U4YeAt6fJq0nJ4quAWogNyywA9UALimTJsK4lehg6qxCo3ptT9mYlGFKhW/QSAr+CtlhlRhOLhZAKojFhmt6im3CyRnhEjjumAsjRBHekwwekXuBdXaaBAMgv4CyKgggycEzlhjmoBpY6evAJFq4Nf+glGNvoIG/rOgfwr9i9j/Gp9vpC/6LAyCby7ofjv/w/mge0LpEHTPSG0Cy5s8hGc1jZf+evoAa3/SOKUBRSAsQr0odCLyAEwLU+eIzl3X5c1TmmkeDnG8/IyORRSF1CzPGoCaq7DMCd8vFnuuJMlUMRuLGLDtbrth0fz9ZzrH+zQko3xbzpZv+YzvbdteuFPL85Kg5RYy2OzcaB6RNOUXSaWlwX5cBQt7EXJ3bSVB0HKNQLcbjgIkVY0yy3SjvArCI0awR4FnxS0R0MOGZMU1gtC5QKbdItCBowISKzGDthpstvFuKWqgGb/OxhnCGZJTTMG23Q9rJbdEYLLdYbdln+l7EaUh1S6vJQGi5rOcwB4NRzf25UlbCnd9AFD1LiBE5zy89YEiN4/7dwCpERJBYyN5si93g5u8l4E6vwGse0cyJ8IxhQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://zhouse.org/search/node/%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /yielded no results/,
      'bar': 2},
];

var private_sites = [
  {   'name': 'AnimeBytes',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAdVBMVEUAAADuEWruEGruEGv/JH7uEWvvEGvzE232FXTwEWzuEGruEGvuEGvuEGruEGvuEGvuEWvvEGvwEmzzF3HuEGvuEWvxE23tEWvuEGruEGruEWvvEGvvEWvuEWvvEm3xE23uEGvuEWzuEWvuEmzwEWvvEGvtEGq6iLhqAAAAJnRSTlMA9ubtBodJHg4/25DgtqOcd2xTFa6pNNfQy8V7cWYvKMCAWTlgXPPVW0UAAAI5SURBVFjDpdfbtqIwDAbgtAUEFEXxfD7t//0fcfZYFU2ajg7fjcuyGkNKQyVNr/CfV2eXVTrp0VeK/mBwoF/JCHdlv6APJbsSWPif7ONFWTefTN9aANbPn+CdSXP6h7HDL3fw35bg3Jhimgo32b0UCFgfSJVZ3JzI2yDEZCS9VexId0MEGeU2Ro/rzxwrKPrK/PYGvBk000Sfb9trG6iG8v4ftu3gHjpWhwwsAW8KlSne1t/iIaUXBwOVf1hlud+33RW6NT3t+GjrJ5LD7rl/XDtYE7PX6+By8sZo7UnY9wd4w+uV2HbIUtBlqqQgClWRYr5Ai93wgicl+eYmlbf08OJMuhTSnI9nFDEMb8uSRdQlssMtiJq3gXj7LyA0rPHmJEU314RSlsGXKZxY17lQnHgmZ7RiGQnxhViRZX0mbgdmQI61urgMjCPDvsfNwRgy/NmMuoAjx5clagKOL4xNKGYsA6xEo/tuP4mhMrqdHDj5+vqJrqIgy+IaUh0DARpws0gCUugcVFNYXkKSrU7vjBUCgu9ws9NOIJI/ywn9RORfQQuwRUBZsPqVUAPkDiHL6zOLJFtDEzsK2dk2K4rzdmaAaIDc4v/5U0TXAHTsGqBnOwaguekQoFsZ2rd/1wA06xqA0q4B6Gw6BqC5xQecUwNQ74MnathMZYDW2SJqkLFiEZfXNjK9zv/maVgAJhmvEHScBP4KUdAhXbEVMdVm317ftldJk2f1aL2wzi3W01F9SVi1Tyvj/QG3wl/Y00jOAQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://animebytes.tv/torrents2.php?searchstr=%band%+%release%&tags=-lolicon+-shotacon+&sort=relevance&way=desc&showhidden=0&cdtype[album]=1&cdtype[soundtrack]=1&cdtype[single]=1&cdtype[ep]=1&cdtype[compilation]=1&cdtype[remix_cd]=1&cdtype[live_album]=1&cdtype[spokenword]=1&cdtype[image_cd]=1&cdtype[vocal_cd]=1&theme[Opening]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot your username/,
      'matchRegex': /No search results/,
      'bar': 2},
  {   'name': 'Bemaniso',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABLFBMVEX////+/f79//////36/f/3ysP2+P0BQ/r09PkAN/kAPPj/+/cBP/bq5O7m3exbfunazuV1i+FJad/aydncws9sdM/musTrxsPvxsL/0sHUp7vYqbfGnrXy8//z7vTt7PTv5fL07PH16vHl4/AVR+/P0+5Ldus0X+sPSusFP+vc0egkVefBw+bg1uXXzeC1stwtU9zfz9usq9rMvtfZxNPAv8/Zus6Mic14e8380sze1sdycsbVtcPft8L0yb/Djr/qtr73w7zhrrzIo7zNq7uxqbvktbrdprrpj7jsu7fdz7bksrbSpra9mrbZl7bct7TjsLTWdbDUZbDsX6/VVqvkpaedkqbZx6TNvKDRjZqtlJOQd5LOqYDm1GrEnkzdwErjwC3WsCznxQDfvQA3Hf9FAAAAwElEQVQY0z3NhY7DMAwGYCdpRze+8XYwZmZmZmZ+/3dYprWNlMT69NsGQKCIIPVgG6AVPW/4Hqubh/v1B3j4Tdry09ujwEeA0Y32tdPzjInQ01mzpssOBPhrGRo2Q0YkDPlfLFdds0UCiAPlvDdhrVWGSxCcMhmNFrai5NeISubhrF4uJoSWaC6r1/qkmi9AH5B4ZWKpXKzlADDxyIIqldzl5BOKmN8NRKMPf4BgnTUEDLb342+gN310YET/TZs+L4sBFSEPQgFpAAAAAElFTkSuQmCC',
      'searchUrl': 'https://bemaniso.ws/torrents.php?searchstr=%band%+%release%&filter_cat[1]=1&action=basic&searchsubmit=1#',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me</,
      'matchRegex': /did not match anything/,
      'bar': 2},
  {   'name': 'JPop',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEX+//9zhdCBkNWQnNwShcapt+y/vfQ/mNGap+Li3f4CbLRwrt6nq+fTzvygzubS6fVtDDNqAAABvklEQVQoz22RMWjUYBTHH1o8jkjDSzjJcEsS7qhQh+RDcVBwyHGQcwkakaqDtolWKThctZzSwSAEuzgdfGDHGvHg6pBaaJdeS48OLdzSQqGFmzvd3C59X3rd+t/+P773f/y/B1drtO44zjykzsehd+d8/4VbbQUJubN5OKlM6jgeNFa0HwOQXbeWTKKBqAYePu2DVAncT4ZpEylaAozE6oc3ZhzZOiIqEwMY8ayyfX/7ZWQQKNQBcp0Qze9h8Fw8udsmsBnq5jRv+hGBUo2At4tlznmwQzPaGmX871oPDznf37EpZOofSMmsvncBCke48AggXcJXx3yxGVsb4JUoVXqMM4eQP4jtn3C9UKXUrzjTAziOTOjfKH7OQNiT+81oXE7ymgBz2O1Jy81oLPc3r6YZuNd7//sXMxZnbxIQI7emr91+wow73NPSbIsS8iNGH6BjkdqNVhDNmDFD1BVr5T/UyiAJUGoBQLWDOPTWwjKBtdeoYibVmhJ3OF1B9ZvwSqRN9AlISx0cY7piRnrZAaGGT3sYs1F5285ArvUOM3UbYkLE1vwtxh48S9uXt24k63G8Xk8GMJS86pC+CH8ObniK6jHjur8AAAAASUVORK5CYII=',
      'searchUrl': 'https://jpopsuki.eu/torrents.php?searchstr=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID|Lost your password/,
      'matchRegex': /did not match anything/,
      'bar': 2},
  {   'name': 'JPop-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEX+//9zhdCBkNWQnNwShcapt+y/vfQ/mNGap+Li3f4CbLRwrt6nq+fTzvygzubS6fVtDDNqAAABvklEQVQoz22RMWjUYBTHH1o8jkjDSzjJcEsS7qhQh+RDcVBwyHGQcwkakaqDtolWKThctZzSwSAEuzgdfGDHGvHg6pBaaJdeS48OLdzSQqGFmzvd3C59X3rd+t/+P773f/y/B1drtO44zjykzsehd+d8/4VbbQUJubN5OKlM6jgeNFa0HwOQXbeWTKKBqAYePu2DVAncT4ZpEylaAozE6oc3ZhzZOiIqEwMY8ayyfX/7ZWQQKNQBcp0Qze9h8Fw8udsmsBnq5jRv+hGBUo2At4tlznmwQzPaGmX871oPDznf37EpZOofSMmsvncBCke48AggXcJXx3yxGVsb4JUoVXqMM4eQP4jtn3C9UKXUrzjTAziOTOjfKH7OQNiT+81oXE7ymgBz2O1Jy81oLPc3r6YZuNd7//sXMxZnbxIQI7emr91+wow73NPSbIsS8iNGH6BjkdqNVhDNmDFD1BVr5T/UyiAJUGoBQLWDOPTWwjKBtdeoYibVmhJ3OF1B9ZvwSqRN9AlISx0cY7piRnrZAaGGT3sYs1F5285ArvUOM3UbYkLE1vwtxh48S9uXt24k63G8Xk8GMJS86pC+CH8ObniK6jHjur8AAAAASUVORK5CYII=',
      'searchUrl': 'https://jpopsuki.eu/requests.php?search=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID|Lost your password/,
      'matchRegex': /Nothing found!|>Yes<|Nichts gefunden!|Aucune requête trouvée!|Nada Encontrado!|Нет результатов!|何も見つかりませんでした/,
      'bar': 2},
  {   'name': 'KG-Release',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://karagarga.in/browse.php?search="%release%"&search_type=title&cat=2',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in!/,
      'matchRegex': /No torrents found/,
      'bar': 2},
  {   'name': 'LiB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAALVBMVEUETZQETpwIU5zH2OgERpQcYqQoaqdOhLYPWpy3zuTm7fTc5vDS3ux+pMycutRGoswNAAAAgUlEQVQI12N4fNjYeLOxsTFDU5mG6lQltSIGhiYGpkkOTA0MAiwMTJcYGRkZGNoSGBgEBAQYVKqOOgiARFSKpwIpIEOkeKqDAFiqxpSRiZFRgIGleIaDiKMDI1BkaqhaUpgCg0r13NW31u4qYRBoi0hVBYkwsjCAACMDIxQwCEABAJy4Gxrz0bmsAAAAAElFTkSuQmCC',
      'searchUrl': 'https://libble.me/torrents.php?artistname=%band%&groupname=%release%&filter_cat[1]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|>Keep me logged in.</,
      'matchRegex': /did not match anything/,
      'bar': 2},
  {   'name': 'LiB-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAALVBMVEUETZQETpwIU5zH2OgERpQcYqQoaqdOhLYPWpy3zuTm7fTc5vDS3ux+pMycutRGoswNAAAAgUlEQVQI12N4fNjYeLOxsTFDU5mG6lQltSIGhiYGpkkOTA0MAiwMTJcYGRkZGNoSGBgEBAQYVKqOOgiARFSKpwIpIEOkeKqDAFiqxpSRiZFRgIGleIaDiKMDI1BkaqhaUpgCg0r13NW31u4qYRBoi0hVBYkwsjCAACMDIxQwCEABAJy4Gxrz0bmsAAAAAElFTkSuQmCC',
      'searchUrl': 'https://libble.me/requests.php?submit=true&search=%band%+%release%&filter_cat[1]=1&releases[]=1&releases[]=3&releases[]=5&releases[]=7&releases[]=9&releases[]=11&releases[]=13&releases[]=14&releases[]=15&releases[]=16&releases[]=17&releases[]=18&releases[]=19&releases[]=21&formats[]=0&formats[]=1&formats[]=2&formats[]=3&formats[]=4&formats[]=5&formats[]=6&formats[]=7&formats[]=8&formats[]=9&formats[]=10&bitrates[]=0&bitrates[]=1&bitrates[]=2&bitrates[]=3&bitrates[]=4&bitrates[]=5&bitrates[]=6&bitrates[]=7&bitrates[]=8&media[]=0&media[]=1&media[]=2&media[]=3&media[]=4&media[]=5&media[]=6&media[]=7&media[]=8&media[]=9&media[]=10',
      'loggedOutRegex': /Cloudflare|Ray ID|>Keep me logged in.</,
      'matchRegex': /Nothing found!/,
      'bar': 2},
  {   'name': 'RMT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAADFBMVEX8/vwIBwhhYWKzs7OLFLOWAAAFMUlEQVRYw73WS+wLQRwH8O/uaP+WbuvQ0oSDQ0sjEg6td6K4EbHCrPXXUK+DcFhxRSYeB4lII5ZKHBohkSIaEgciJsRBOEikXkGEEMShV49guuuxs+3ogfge/vlv89nM7Mz8Zgb/MaMGAePvAR8AzPIg4A4AWnUA0K0BgDgYkJWDwNFB4PkgMAF/zCzkINJQgjSKEHmkBI8Qh8gMJTgBI5gyNTATADTllFnQDgEgrhroezgwz1I3QRYyIPf0T0C0PyKtAnWQRQKMyqnAEehlFzDjKvBAfGEV0ParQIYbzAJ0qhqpKW6J1QgnlClAoe6hpjOsVQ3liLyNpxpDTbW4R5sOnpoMj6xEf5BExwfpE0lFWXQXnQC5RxrrD3gAZqaJohcsAEMz4HQfetPAvHmiwouxmzZgoTcTUehWeNrctauMer+RQjFhWmKw6N6KmJneFDGUjD1MujiKScizXjCEuHbMGIaIyWLVfttgDBV0QDhQMxxEkoCJGO+6jy4wWaO9lavxUrfhPLU5zBvLo5N6DxrLu4TDo3SYE9eqAdPDoAptqWdprknts++anZozS/wWAQuoYzqv7Q6Qah53ktDDgFjQFlF6mtKW/7jZIWUtCspUxEGQ97wmATiik54ADEH0alqTZuwYTC7A7/GZNEMAuSzQpvR38ZsHblTCIL9tpgA2fmf1QgkYpysCOOFXNkpAX8QFcMOvWPKE1QDvR12Sb18AaBVH2j5ymE1XIQTI8KYQmIxRKFGpUXj7wg0ynRnhLiS/fRg/Wj6PGhplIdBsZMMADiYQGlnFUpE+xBBsGcRT0khyE0dkYBJpJMtaOXIUaDekJ4u492Sg75GeHFgRQBZIG95lWC9ApJ+2S0/XeKWDvIOJ+JXjEnjpVlqwPTYVv9IOg8TUtsVEWVgFfPu1yqRTsVDaUY4D9Vlzmo1+oDiL3CgXxLTGHfxsZVIY5EaKwngBxAw3tAbCCyIhprwDmDH++6UwKCUSfvVrQ0j0BTPOGUe77+qz0GTQre7/WekrOsaqThcAXysgVstfx6GMhLky2NOJZwMN0V9SkbewAKRgdCv4xYsUkJamG7cd+BEVWgUao4EhabpZOwCEUio64Y6O3g/dvA+mmgKsgsnF68KE8tT0wb0Speu86w/4KPJupwRmkgB8o9R+TVdzfTN1IrfFI8GG2qYidwBK5YuA7qb9PiDfBZgO700tcssZCoBBRSOoImNHQHxUAIgA2/S9Vn5VSwYnFwD+/jxbbNZJwymt5DKoH2Y+8HM3vzJWiV4gnroApsEP81YZLuRknKnzgCc/qo7aJibKIPdh5jyQ9cHcik8hyEYPNfNLy9jgQiQhBlwMbvRmTpwnXrURtEcpR0wGehkPRp13g1XjdYHZc9UqMd0NCsI/GOKQMxfGGnzx9wpdgC9IQ47ONLp1dgvktaUJ8OZTFZF8ABVpnnbKGl1D8zbvPZw9um02pSs46Do7wxBJSnczNkCHXTFhG5yxvRcl1DKi2cxaiGgs2+d+UMjcXIZ8Naiwez2g1L0i0WrpB3jRC1i2Gtv2tvRjMDs9IL6uxh8iOeMcFDFOu6QF7ZTy9q7vxHzxt1IPbiS8V7z/1AKwcUnK35FbvSB1ASJbbl3xt/kyFGnHH7z/AOhKEB+Rzn8+OF1TgtHF7GRta/E1UwEya0JO23F6uKUEZ8YUdH7svhLgRC1rov6qowQzatkScS5yJUiNqT/e83a3GuD+4ktXZw4zNXh2CFONphqgDZEY1BnnDyjUSQfbvzrT8W/zHc2Ya/iGIR/1AAAAAElFTkSuQmCC',
      'searchUrl': 'https://metal.iplay.ro/browse.php?search=%band%+%release%&tlt=50&incldead=2',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in!/,
      'matchRegex': /Nothing found!/,
      'bar': 2},
  {   'name': 'RMT-Discography',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAADFBMVEX8/vwIBwhhYWKzs7OLFLOWAAAFMUlEQVRYw73WS+wLQRwH8O/uaP+WbuvQ0oSDQ0sjEg6td6K4EbHCrPXXUK+DcFhxRSYeB4lII5ZKHBohkSIaEgciJsRBOEikXkGEEMShV49guuuxs+3ogfge/vlv89nM7Mz8Zgb/MaMGAePvAR8AzPIg4A4AWnUA0K0BgDgYkJWDwNFB4PkgMAF/zCzkINJQgjSKEHmkBI8Qh8gMJTgBI5gyNTATADTllFnQDgEgrhroezgwz1I3QRYyIPf0T0C0PyKtAnWQRQKMyqnAEehlFzDjKvBAfGEV0ParQIYbzAJ0qhqpKW6J1QgnlClAoe6hpjOsVQ3liLyNpxpDTbW4R5sOnpoMj6xEf5BExwfpE0lFWXQXnQC5RxrrD3gAZqaJohcsAEMz4HQfetPAvHmiwouxmzZgoTcTUehWeNrctauMer+RQjFhWmKw6N6KmJneFDGUjD1MujiKScizXjCEuHbMGIaIyWLVfttgDBV0QDhQMxxEkoCJGO+6jy4wWaO9lavxUrfhPLU5zBvLo5N6DxrLu4TDo3SYE9eqAdPDoAptqWdprknts++anZozS/wWAQuoYzqv7Q6Qah53ktDDgFjQFlF6mtKW/7jZIWUtCspUxEGQ97wmATiik54ADEH0alqTZuwYTC7A7/GZNEMAuSzQpvR38ZsHblTCIL9tpgA2fmf1QgkYpysCOOFXNkpAX8QFcMOvWPKE1QDvR12Sb18AaBVH2j5ymE1XIQTI8KYQmIxRKFGpUXj7wg0ynRnhLiS/fRg/Wj6PGhplIdBsZMMADiYQGlnFUpE+xBBsGcRT0khyE0dkYBJpJMtaOXIUaDekJ4u492Sg75GeHFgRQBZIG95lWC9ApJ+2S0/XeKWDvIOJ+JXjEnjpVlqwPTYVv9IOg8TUtsVEWVgFfPu1yqRTsVDaUY4D9Vlzmo1+oDiL3CgXxLTGHfxsZVIY5EaKwngBxAw3tAbCCyIhprwDmDH++6UwKCUSfvVrQ0j0BTPOGUe77+qz0GTQre7/WekrOsaqThcAXysgVstfx6GMhLky2NOJZwMN0V9SkbewAKRgdCv4xYsUkJamG7cd+BEVWgUao4EhabpZOwCEUio64Y6O3g/dvA+mmgKsgsnF68KE8tT0wb0Speu86w/4KPJupwRmkgB8o9R+TVdzfTN1IrfFI8GG2qYidwBK5YuA7qb9PiDfBZgO700tcssZCoBBRSOoImNHQHxUAIgA2/S9Vn5VSwYnFwD+/jxbbNZJwymt5DKoH2Y+8HM3vzJWiV4gnroApsEP81YZLuRknKnzgCc/qo7aJibKIPdh5jyQ9cHcik8hyEYPNfNLy9jgQiQhBlwMbvRmTpwnXrURtEcpR0wGehkPRp13g1XjdYHZc9UqMd0NCsI/GOKQMxfGGnzx9wpdgC9IQ47ONLp1dgvktaUJ8OZTFZF8ABVpnnbKGl1D8zbvPZw9um02pSs46Do7wxBJSnczNkCHXTFhG5yxvRcl1DKi2cxaiGgs2+d+UMjcXIZ8Naiwez2g1L0i0WrpB3jRC1i2Gtv2tvRjMDs9IL6uxh8iOeMcFDFOu6QF7ZTy9q7vxHzxt1IPbiS8V7z/1AKwcUnK35FbvSB1ASJbbl3xt/kyFGnHH7z/AOhKEB+Rzn8+OF1TgtHF7GRta/E1UwEya0JO23F6uKUEZ8YUdH7svhLgRC1rov6qowQzatkScS5yJUiNqT/e83a3GuD+4ktXZw4zNXh2CFONphqgDZEY1BnnDyjUSQfbvzrT8W/zHc2Ya/iGIR/1AAAAAElFTkSuQmCC',
      'searchUrl': 'https://metal.iplay.ro/browse.php?search=%band%&tlt=50&incldead=2&c63=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in!/,
      'matchRegex': /Nothing found!/,
      'bar': 2},
  {   'name': 'OPS',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAilBMVEUEGBPh5OPl5+fe4ODj5uXa3dzY29q3vbu9wsHR1dTGysnLz86xuLbV2Nd4g4DBxsXO0tGor66krKqCjImhqKass7GcpKKYoJ6HkI5yfXuUnJqMlZN9h4VaZ2QvQDyQmZZLWVYnOTQLHhno6uprd3RhbWo+TUpEU083R0MZKyZlcm9TYF1RX1sQIx5dR4NSAAADGUlEQVRYw+3R2ZaiMBSF4RNkFlEBB1TGOCHy/q/X3auac4ImCFW9+oqPS372ihEmk8lk8kn5G/wbTVX8lV4CR+Nf2DJMf3bCIm3djwbXOjh3n98+b3pv1S7tiviu+c7wFT0drqnwbTn2Kq435OGwFL/AGFWOHrr2AXdHHPz+RAeuDVDAQHnSqi1tEJ7DIAlxtYF4Mmj5gmx9MC0fsPxAG/bu60/V2RsthQ9uZ5T9Weo8mhOEfhzH/tEz9deXrIRelR+3fPbCyaHMfXz99ptc6OUTh3WY96/iScWadZ2hR31C29/tDB+2x6bxsQkdsem9kjIkMxG7itmZKruTrUHpvEebznLR7R7UeZ2uUh46OyJDMEtfS59CWywDUEgyFBiCx3uakZV4CNVtH4hjEkuSVkJrCi4gVeyIUBuNLI6p9YTYVfyJW+QtSCaNy4hqITZLab2NkOugRQNSPtWWQ27ScwREaC2Qq+R5JmuLNVmRGhSEfE65LUuTDfLmaNWAwp56e05kaeghS52Sp0c+9BGVtotsUCk84hJZ6llImF6DSmWRD9NCuSRbUGls6Qey1Jbqm5aSnlpa9lzIcvB0tCQWAZXr8P7kkrf0Z30upB4pQMGifEn5RpZWc2JtUAxypZDblGfSeEWtuyYgl8yJR3Utja0VWQcoBSlXqANSSeOLQ9wI7aTxVYjnEVHc3kLIgy26Sm9PaD1qY5CzF8TZkfI9PS4EQlqB3E3sl9mhtX8vTaF0qTyCysIUWEcUv3SFKTpgl91BJTFF3h6dQZQaYjbfE1BzDJEbIr8UDjAzREeqUlBLu1+Z2Qm1n5We0WFREkOfaNY1D/3WufozHLJuYPikhF7m7MUi8uPWxWuHURijFPpV+DFiM2dpWfbKwFdke0ZP+OTKRrAeKIHPasZmA5/lBeFyr1pnw9gJqmGYu8YG0INn3brBUJXBmP7h0U45SmGEnab3c/IbamCUYtE3rp2uqIDRckNTOdwRDo+T2lx7w00/RRV8W5lbOue4yvnqlBatqoQfKtPLPtps1oc4L6q/mrKEyWQymfxPvwD+85sNy6/EZQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://orpheus.network/torrents.php?searchstr=%band%+%release%&filter_cat[1]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me</,
      'matchRegex': /did not match anything/,
      'bar': 2},
  {   'name': 'OPS-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAilBMVEUEGBPh5OPl5+fe4ODj5uXa3dzY29q3vbu9wsHR1dTGysnLz86xuLbV2Nd4g4DBxsXO0tGor66krKqCjImhqKass7GcpKKYoJ6HkI5yfXuUnJqMlZN9h4VaZ2QvQDyQmZZLWVYnOTQLHhno6uprd3RhbWo+TUpEU083R0MZKyZlcm9TYF1RX1sQIx5dR4NSAAADGUlEQVRYw+3R2ZaiMBSF4RNkFlEBB1TGOCHy/q/X3auac4ImCFW9+oqPS372ihEmk8lk8kn5G/wbTVX8lV4CR+Nf2DJMf3bCIm3djwbXOjh3n98+b3pv1S7tiviu+c7wFT0drqnwbTn2Kq435OGwFL/AGFWOHrr2AXdHHPz+RAeuDVDAQHnSqi1tEJ7DIAlxtYF4Mmj5gmx9MC0fsPxAG/bu60/V2RsthQ9uZ5T9Weo8mhOEfhzH/tEz9deXrIRelR+3fPbCyaHMfXz99ptc6OUTh3WY96/iScWadZ2hR31C29/tDB+2x6bxsQkdsem9kjIkMxG7itmZKruTrUHpvEebznLR7R7UeZ2uUh46OyJDMEtfS59CWywDUEgyFBiCx3uakZV4CNVtH4hjEkuSVkJrCi4gVeyIUBuNLI6p9YTYVfyJW+QtSCaNy4hqITZLab2NkOugRQNSPtWWQ27ScwREaC2Qq+R5JmuLNVmRGhSEfE65LUuTDfLmaNWAwp56e05kaeghS52Sp0c+9BGVtotsUCk84hJZ6llImF6DSmWRD9NCuSRbUGls6Qey1Jbqm5aSnlpa9lzIcvB0tCQWAZXr8P7kkrf0Z30upB4pQMGifEn5RpZWc2JtUAxypZDblGfSeEWtuyYgl8yJR3Utja0VWQcoBSlXqANSSeOLQ9wI7aTxVYjnEVHc3kLIgy26Sm9PaD1qY5CzF8TZkfI9PS4EQlqB3E3sl9mhtX8vTaF0qTyCysIUWEcUv3SFKTpgl91BJTFF3h6dQZQaYjbfE1BzDJEbIr8UDjAzREeqUlBLu1+Z2Qm1n5We0WFREkOfaNY1D/3WufozHLJuYPikhF7m7MUi8uPWxWuHURijFPpV+DFiM2dpWfbKwFdke0ZP+OTKRrAeKIHPasZmA5/lBeFyr1pnw9gJqmGYu8YG0INn3brBUJXBmP7h0U45SmGEnab3c/IbamCUYtE3rp2uqIDRckNTOdwRDo+T2lx7w00/RRV8W5lbOue4yvnqlBatqoQfKtPLPtps1oc4L6q/mrKEyWQymfxPvwD+85sNy6/EZQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://orpheus.network/requests.php?submit=true&search=%band%+%release%&tags=&tags_type=1&showall=on&filter_cat[1]=1&releases[]=1&releases[]=3&releases[]=5&releases[]=6&releases[]=7&releases[]=8&releases[]=9&releases[]=10&releases[]=11&releases[]=12&releases[]=13&releases[]=14&releases[]=15&releases[]=16&releases[]=17&releases[]=18&releases[]=21&formats[]=0&formats[]=1&formats[]=2&formats[]=3&formats[]=4&formats[]=5&bitrates[]=0&bitrates[]=1&bitrates[]=2&bitrates[]=3&bitrates[]=4&bitrates[]=5&bitrates[]=6&bitrates[]=7&bitrates[]=8&bitrates[]=9&bitrates[]=10&bitrates[]=11&bitrates[]=12&bitrates[]=13&bitrates[]=14&bitrates[]=15&media[]=0&media[]=1&media[]=2&media[]=3&media[]=4&media[]=5&media[]=6&media[]=7&media[]=8',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me</,
      'matchRegex': /Nothing found!/,
      'bar': 2},
  {   'name': 'RED',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABU1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADr6/jc3O+3udmnqM/tAAD09P/Ly+TJy+Tu7vqbncgGBgaHAAAkJCvcAADHx+IUFBUEBAQGAADMzNu0ttdmZnYpKjQhISoeHiEYGBrdAADx8f3l5fTg4PHa2u3d3erW1una2ufS0ufNzuXMzODAwd6ytNOtr9O7u9K6usy+vsuursGOjraNjq9/gax+gahxc4hbW2tBQ1pHR1I9PU02Nk0hISh+AADFxdjHx9fAwMyursqxscGgosCcnLaPj7WHia6Dg52MjJx2eZqHh5dvb49qbY52do1hYYBfX3hUVHJFRWA4PFg3N1UsLD4zMz0LCwuhKa/DAAAAIHRSTlMAm/iwzMP87M+2LBQH6NvFvKehkItdWUc+DOCEb0U3M9ZEgUcAAAFvSURBVDjL7ZPVcgJBEEWBJUjcA9G7QHRxd3cIEiTu7vn/p+zOMmRhkz/IeZqpe2q6u6Za8cPYglKnBbRq5eKYQs4oAwnM+nCuBLjWzUkiEkmU71ocoByIjQxczdRun5SPg15ah0HojGU9jXbIxTk/fWWWLQUxPS55P3QcTTZdoLQ9UU8QszRfA1eJHdkgwVmJlb6w2BP08MWzJJcYxfgjpsV8Cc5s8gBD+NPpIBaIMIPnzAVkXGcaYIgAnDo6kOF3FDkIg2zAlsu7IOc894ElXljFq/kev/BkfsEKaeHBS1t0W+1hqxsiHe8t9Lygw1XBDxHrJs8hRAKFS0zyghbvXfSwC4Kd3rpvUPGCBoBcoJApA3XvtokdLLHFmhz7NiKoULOYBYE0GSZNEmHHXCUlgD0qUKhgAf6FvjCJ2l9CFctkKQL1PBEM81MTKtXE1LyB/gVZjXE1REYUfUYgojOS65xaI+SjklUXDI16jj9+A6CFfEw2ZC3rAAAAAElFTkSuQmCC',
      'searchUrl': 'https://redacted.ch/torrents.php?artistname=%band%&groupname=%release%&filter_cat[1]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me</,
      'matchRegex': /did not match anything/,
      'bar': 2},
  {   'name': 'RED-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABU1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADr6/jc3O+3udmnqM/tAAD09P/Ly+TJy+Tu7vqbncgGBgaHAAAkJCvcAADHx+IUFBUEBAQGAADMzNu0ttdmZnYpKjQhISoeHiEYGBrdAADx8f3l5fTg4PHa2u3d3erW1una2ufS0ufNzuXMzODAwd6ytNOtr9O7u9K6usy+vsuursGOjraNjq9/gax+gahxc4hbW2tBQ1pHR1I9PU02Nk0hISh+AADFxdjHx9fAwMyursqxscGgosCcnLaPj7WHia6Dg52MjJx2eZqHh5dvb49qbY52do1hYYBfX3hUVHJFRWA4PFg3N1UsLD4zMz0LCwuhKa/DAAAAIHRSTlMAm/iwzMP87M+2LBQH6NvFvKehkItdWUc+DOCEb0U3M9ZEgUcAAAFvSURBVDjL7ZPVcgJBEEWBJUjcA9G7QHRxd3cIEiTu7vn/p+zOMmRhkz/IeZqpe2q6u6Za8cPYglKnBbRq5eKYQs4oAwnM+nCuBLjWzUkiEkmU71ocoByIjQxczdRun5SPg15ah0HojGU9jXbIxTk/fWWWLQUxPS55P3QcTTZdoLQ9UU8QszRfA1eJHdkgwVmJlb6w2BP08MWzJJcYxfgjpsV8Cc5s8gBD+NPpIBaIMIPnzAVkXGcaYIgAnDo6kOF3FDkIg2zAlsu7IOc894ElXljFq/kev/BkfsEKaeHBS1t0W+1hqxsiHe8t9Lygw1XBDxHrJs8hRAKFS0zyghbvXfSwC4Kd3rpvUPGCBoBcoJApA3XvtokdLLHFmhz7NiKoULOYBYE0GSZNEmHHXCUlgD0qUKhgAf6FvjCJ2l9CFctkKQL1PBEM81MTKtXE1LyB/gVZjXE1REYUfUYgojOS65xaI+SjklUXDI16jj9+A6CFfEw2ZC3rAAAAAElFTkSuQmCC',
      'searchUrl': 'https://redacted.ch/requests.php?submit=true&search=%band%+%release%&tags=&tags_type=1&showall=on&filter_cat[1]=1&releases[]=1&releases[]=3&releases[]=5&releases[]=6&releases[]=7&releases[]=9&releases[]=11&releases[]=13&releases[]=14&releases[]=15&releases[]=16&releases[]=17&releases[]=18&releases[]=19&releases[]=21&formats[]=0&formats[]=1&formats[]=2&formats[]=3&formats[]=4&bitrates[]=0&bitrates[]=1&bitrates[]=2&bitrates[]=3&bitrates[]=4&bitrates[]=5&bitrates[]=6&bitrates[]=7&bitrates[]=8&bitrates[]=9&bitrates[]=10&media[]=0&media[]=1&media[]=2&media[]=3&media[]=4&media[]=5&media[]=6&media[]=7&media[]=8',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me</,
      'matchRegex': /Nothing found!/,
      'bar': 2}
];

var other_sites = [
  {   'name': 'Voidtools',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAgMAAAAhHED1AAAACVBMVEUAAAD/gACXOgALtIKSAAAAAXRSTlMAQObYZgAABHBJREFUeNrtm0GOnEAMRRFLjlL3ASkcoU7BJXrPBgl8yiiZTj8R0rb5ZDJShHdJul/bzwVVFJXmjjvuyEdntjZ62DPEr7f2iln8PjGp+W99X0VCMbOl/xkDHk7pt/4VggYze/TE6SIK3/9VxXqyA0u/i/FcCuWXAKKeSaGlAIo4k0JnW3+I8UQK+wTohJgAKcxphSSwt5BUSAL7qEmNHWNgH0NSY2EMSBpbEjhqnFIVoPBYg1gBGhMAKtBqaKmAoIY5oaB3osYSbPMAo4lNpIZJaiIRSihUoEkoVKBJoAJNQksTBQmMAkUCDkUJXAiRBO1CILCYcWhmvzPr7Dncfkv3Zyxpizjk+4ccxjXt0F6xx2bH4fixqmgpgrHoOySB12ol2YbO/rykIAXaEDeh2kxmlrNYljdTabHlJIAESAF0qglmxxkfQNwEZgBmbNqQAFQ73u1pQ6IJth46fApABcwXcRvK4tx3bDsFqKsz6w8Wd9FmZ8ryAFxx3qX+FrBT4BQI/jAMUOD1qL4BbDsFHn+OhoFN7i1/dACOZluCgdAFHyhbACgLDoMM3wAeviQsDuYAnD5HAAPQCB9wfgBJfoqGZAnQhgDaUH1AnTXA5gLinwBgkwToQgB9HP8IwHEjAsKpq7wAqwtYw8l3cADgz/5GuQ5wDNEoB/AIAW0OUC8DphhgGoCxLAKafwSwy4BGA9hlQJ8APL4aUG7A/wAwF/Dl1wL1ffn9oH4eoP1rgMGuTiz2mTOTPrkuOkBfYOhLHHGRRZKfskrb5HVifqXaA3AX24m1srZazz4vjPHzgvrIA+BzHroeALTHPv59kgAlAMSPvovfxw6A9vReNgDR/oH5PzCu4Q7G5DocZ2kTBgCOsts0OIwBFHl0SJuVnSxbHIC3l4YCAM4tjw3NowLwif1EcxQMqzNv8F7Q3xKNN2Xn434k4yizLby+fw9aEwBq4F102EX6yPtZEnicBPS2+1hmc54+cloAhVsMoA3HFIzc6GIEqKRQSIAmhK+ZBrP5ySUBAInXTPVJ6IwEvCZwwZHCDw+86ood2uHsyUds+7+NFVDER+yxa1IBhOzrQhQQA/XjMFIgvDdGQRyjBQqk18YoiMNmSQFxVcGgKsChqACHV0fBfHUUTBdHgV0eBV98IdSro8ByF4JTQU7Bt7cVJBXUh1tBrMCgJU62oYBK7U0CNmXPDSzeka5YgZl5CmMFc+HPu8qapIKpJQWiojBSwJmJvZkmqWBtWBEQRgKhAg5+7Mw2aQUsKiiABGIFH1XtCKORQEZB03D+hTMxWQWsrJ4mB448ZxU8iyAYxEkFEPh+XsGRADSngODA9jkFccQK4ogVEJoC4lZwK7gVxHFVQXtVQacqAHBRQVl0BQBQIAAeugIAKNCGAQoUgKwAAApEAApEAApUAAp0AAr0NtosA1Agj0QU6IC6ioBFVMBGMAo0wIYCKVpTFTCz6QqYWFCgTm1VU8CWuUkK2PKuugKW03IUHgfEGkjgyn9EveOOOy7Ed2JJpzzZXV4JAAAAAElFTkSuQmCC',
      'searchUrl': 'http://localhost:8080/?search=%band%+%release%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'replaceSpecials': true,
      'bar': 3},
  {   'name': 'Voidtools-App',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAgMAAAAhHED1AAAACVBMVEUAAAD/gACXOgALtIKSAAAAAXRSTlMAQObYZgAABHBJREFUeNrtm0GOnEAMRRFLjlL3ASkcoU7BJXrPBgl8yiiZTj8R0rb5ZDJShHdJul/bzwVVFJXmjjvuyEdntjZ62DPEr7f2iln8PjGp+W99X0VCMbOl/xkDHk7pt/4VggYze/TE6SIK3/9VxXqyA0u/i/FcCuWXAKKeSaGlAIo4k0JnW3+I8UQK+wTohJgAKcxphSSwt5BUSAL7qEmNHWNgH0NSY2EMSBpbEjhqnFIVoPBYg1gBGhMAKtBqaKmAoIY5oaB3osYSbPMAo4lNpIZJaiIRSihUoEkoVKBJoAJNQksTBQmMAkUCDkUJXAiRBO1CILCYcWhmvzPr7Dncfkv3Zyxpizjk+4ccxjXt0F6xx2bH4fixqmgpgrHoOySB12ol2YbO/rykIAXaEDeh2kxmlrNYljdTabHlJIAESAF0qglmxxkfQNwEZgBmbNqQAFQ73u1pQ6IJth46fApABcwXcRvK4tx3bDsFqKsz6w8Wd9FmZ8ryAFxx3qX+FrBT4BQI/jAMUOD1qL4BbDsFHn+OhoFN7i1/dACOZluCgdAFHyhbACgLDoMM3wAeviQsDuYAnD5HAAPQCB9wfgBJfoqGZAnQhgDaUH1AnTXA5gLinwBgkwToQgB9HP8IwHEjAsKpq7wAqwtYw8l3cADgz/5GuQ5wDNEoB/AIAW0OUC8DphhgGoCxLAKafwSwy4BGA9hlQJ8APL4aUG7A/wAwF/Dl1wL1ffn9oH4eoP1rgMGuTiz2mTOTPrkuOkBfYOhLHHGRRZKfskrb5HVifqXaA3AX24m1srZazz4vjPHzgvrIA+BzHroeALTHPv59kgAlAMSPvovfxw6A9vReNgDR/oH5PzCu4Q7G5DocZ2kTBgCOsts0OIwBFHl0SJuVnSxbHIC3l4YCAM4tjw3NowLwif1EcxQMqzNv8F7Q3xKNN2Xn434k4yizLby+fw9aEwBq4F102EX6yPtZEnicBPS2+1hmc54+cloAhVsMoA3HFIzc6GIEqKRQSIAmhK+ZBrP5ySUBAInXTPVJ6IwEvCZwwZHCDw+86ood2uHsyUds+7+NFVDER+yxa1IBhOzrQhQQA/XjMFIgvDdGQRyjBQqk18YoiMNmSQFxVcGgKsChqACHV0fBfHUUTBdHgV0eBV98IdSro8ByF4JTQU7Bt7cVJBXUh1tBrMCgJU62oYBK7U0CNmXPDSzeka5YgZl5CmMFc+HPu8qapIKpJQWiojBSwJmJvZkmqWBtWBEQRgKhAg5+7Mw2aQUsKiiABGIFH1XtCKORQEZB03D+hTMxWQWsrJ4mB448ZxU8iyAYxEkFEPh+XsGRADSngODA9jkFccQK4ogVEJoC4lZwK7gVxHFVQXtVQacqAHBRQVl0BQBQIAAeugIAKNCGAQoUgKwAAApEAApEAApUAAp0AAr0NtosA1Agj0QU6IC6ioBFVMBGMAo0wIYCKVpTFTCz6QqYWFCgTm1VU8CWuUkK2PKuugKW03IUHgfEGkjgyn9EveOOOy7Ed2JJpzzZXV4JAAAAAElFTkSuQmCC',
      'searchUrl': 'http://localhost:8080/?search=%band%+%release%',
      'goToUrl': 'es:%band%+%release%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'replaceSpecials': true,
      'bar': 3},
  {   'name': 'YesAsia',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAvVBMVEUAAAAOZ0cblmWLOQWkYwt+tnl0sXFurGpmpmKWxY+QwomDun5qqWb3wkGcyZSTxI3/63d5s3X/6nJyrm3/51pAoUCfy5iZx5H/6W1TzGj/6GZQxmJio15Ov1tdoVlVm1JItFH/3VBRmE5EqUf+y0bvuDw8lzZUXiL/7YuLvoX/7IFZnlZMuVX/5VT/4VL/2k/qj09Grk3/00z/0kr5xkM/njw+nDs9mjo9mTjlqzc7lTV4bCxqZyhoZydhYyXG0g3zAAAAAXRSTlMAQObYZgAAAKpJREFUGNNNzlcOgzAQBFDApmM6BAiBQCjpvbf7HytrA1Lmb580o+UgwhB6MNAsdWSaYSwMMF/aLlAc9hLtCDltLZWH0Ns/Iwg5QnFMocDoLYo6RpWmMcB7QZIcSq/FhO9GZa8jnUHECYZMyRfFNaskrqIYslvgjzMFANkktu1X6OtJAExIXT9QC8VDP4rhjzaF4qyHsszzVZalygDPprnfrpcgCDrg/8L9AAbpDIqFnNEnAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.yesasia.com/global/search-music/%band%+%release%/0-0-0-q.%band%+%release%_ss.101_bpt.48_bt.48-en/list.html',
      'matchRegex': /were unable to find|has returned zero/,
      'bar': 3}
];

var pre_databases = [
  {   'name': 'CorruptNet-Pre',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUPrXP///+lsnldAAAAJElEQVQI12P4/5/hfyPD/4MMDx4yPEiEoYdAEZD4A0ZkBFQMAEN3FicKuK0LAAAAAElFTkSuQmCC',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'searchUrl': 'https://pre.corrupt-net.org/search.php?search=%band%+%release%+type:FLAC|MP3',
      'matchRegex': /Nothing found/,
      'replaceSpecials': true,
      'bar': 3},
  {   'name': 'PreDB.de',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAB/lBMVEUAAABT8vIv4eE36upM9PMu4uIb2NhH8vFO9/c26uoi3d1c/v0Bycpf//1W+/kv5OQg29sKzs9f//8Hy8sW09M47e0S09MIzs8e2dlc//5B7e0u4+NT+fgJzc4IzMwLzc446Ogh29sGy8s45+c/7u4Ezc094+NS/PwY19gEzM0Ey8xP+voj3NwByMhL9vU76upa/fxb/v5D8PBM9vU/6+sBx8g06elU+fgCycou4+MDysoU0tMt4eFc/f0DzMwc19cw4+Mm398AyMhg//1G7+9P9fM+7e1Y/Pth//8AyMpH8vI55+cKy8sAyck65uZa//8n3NxJ8fET09Mp4eEo4eEw5+cS1NQz5OQMzc8c19dD7u5D7u0v4uIV09NZ+/sV0tI76ek76ekz5uZP9vUz5eVV+vks4eEg2to/6+sg2tpS9/cOzc9W+voPz89G8PA56OhH8PA46ekw4+MCysow4+MX1tZQ9vZS9vYJy8sFyclX+Pgo3t4k29sg2dkc19cY1dVZ/PsV09NW+vkS0dEt6ekt6Ohg//9b/v1U+PdR9/ZM9PQOz9AJ0NBF8fEX2ttc//8t5uYKzs5Z//9J+flK8vIz8fAi4eECyso88fFV//9V/fxQ/fw+9vZB9PRD7u4/7e0l5uYp5eUd4OAd29sP19cP1NQL1NQS09MH0NAu6ur6PYxoAAAAe3RSTlMAAqIFs5A3LBEO/vaGhIN3TiopIgz+8eXgz56QiIeDZV5eXVo7FxL++/v49fX18/Py7Orp6enj2da4sq+mnZuain1vbW1nZl1PT0E2MCcjIh0aFPv6+ff23drY2MO+uLaxsK6spaKioJuZlpSPioaGhX9vaWVXVlRUNCNdm1MpAAACAklEQVQ4y5XOZXfaUADG8YeFUZzhULyFuru7ezt3d3f3jm0s+JC6y77lkuwm0J6+2e/NPfmfm+TB/6DGh3uUyp7hcQoH0SqbUqny+vryVKpJqcV++o7ikpanr30Gg2/M1VJS3KHHHnnmXUdW0jt3zXnIEDlpms4OeBWlaacIPMd2NEqbfRDMnKKj0W0HCNfWL8bmXQjub7Jly0Xmm3a+sk5IQIyZuLBj0nIDWkOfOaHzFJl0kS+t7AxJ0Uci5AHneYgvRexHO9c/EBuWGTBkpzf4st4JGCzy97zkzSOM20khyC0GSOTvMpKrZWWryawgl8Cz9jbjWPfUVPfRrLDmgebPN14k0gbGjUhklojMatB1vO0QcS7xBIxniebDLJvN1pzoguakDERBwxX2uNZQAMKb0MBtzAEv3/hwYuKxMR+8kbQbo+nMs+jyYmXl4iUReO70KGR1uRAMLK2sLA1AcKtOBuTWSEFIzwaXl4NnhAmyGvZlb7wPxKN4kBF/AKIv7mV/LK6dBienIvCbEaggs6drxSKul14Vgbu5EOAs/OuUuJTc7J+zs8fLwp9E4Qv2/p25fhD22D0K0sb5H8R8oxTS6zE7BOrwhTfq2BdBTD1iDauRZbC6qupTtnD1IPaYbFf4w9+JsF/RPon9dCqrws9RWFU6HITSDfWqVL1DOgoZfwGRBc1hlSSjOgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predb.de/search.php?t=pre&s=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID|experiencing some problems/,
      'matchRegex': /itemListElement/,
      'positiveMatch': true,
      'replaceSpecials': true,
      'bar': 3},
  {   'name': 'PreDB.me',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAGDC6urrej6pEAAAAAXRSTlMAQObYZgAAACBJREFUCNdjQAOhQMCQtTRrKUMmEMAIKBdBgJVAFKMCAKceEPrGnb57AAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|seconds to search again/,
      'searchUrl': 'https://predb.me/?search=%band%+%release%&cats=music-audio',
      'matchRegex': /Nothing found.../,
      'bar': 3},
  {   'name': 'PreDB.org',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAnFBMVEX/iAD/iAD/gAD+iAD/iAD/////uWj/58v/5MX/8+X/0p7/vXH/r1P/pDz/iQL//fv/+vT/+O//69T/3rf/16n/0Zv/oDT/mib/9en/7tr/6tH/3LP/1aX/wXr/sVj/rE3/nS3/lyD/khb/jw//8N7+4L7/yYv/x4f/rU//qkj+2a7/2K3/0qD+zpX/y5H/yYz/xoX/s13/lRz/jgzyD/i6AAAABHRSTlPmfAJ8dum23wAAANtJREFUOMvUjTeywkAQRBfoWa2T995hv8Xc/24gUUWGcl4wwfSrbrZeMbyFbdZsg0VWjGGRKV/mQwQ7FMLfXV+fsRKROOI3tGRg5gZfQ9MBL2qBik7cc2xynUnYGuxJR31co1FnjVqhpci46KicG4pMSO54+9g/UpMUzeEHhsqWvqRvz4J1GgDkKY/1lnOeqAh/9N9m6N38KVyAx02A0VJxdSuDzvNSk42dG0zCINUkBByAk/YYcll8J+BWuAvnifv4IG7nFR/McTGqAAQIZz1GQpmXiRlf9mdkAgCu2xnljMbIfgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predb.org/search/%band%+%release%/all',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'replaceSpecials': true,
      'bar': 3},
  {   'name': 'PreDB.pw',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAFklEQVQI12NQUmfo6MdHdq1nUP8PJwENVw0h7PKMxQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predb.pw/search.php?search=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /<tbody><\/tbody>/,
      'replaceSpecials': true,
      'bar': 3},
  {   'name': 'PREovh',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAADmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQCFDl5aAAAAD3RSTlMAnu3OvE8vGBH0851ZWJ/vQJUxAAAAMUlEQVQI12NAAFZh/U+GAUCG/38g+AJk/AcDZJFSkJpwIGPisQaO3F2US7E+BlsKBwASDDQfgbbhXwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predb.ovh/api/v1/?q=%band%+%release%',
      'goToUrl': 'https://predb.ovh/?q=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /total": 0/,
      'replaceSpecials': true,
      'bar': 3},
  {   'name': 'srrDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAUVBMVEUAAAAAAAAAAAAAAAAAAAC7u7v///+ZzP/Mmf+Z/5n/mZn//2b/mWaMjIxymL6Ycr5yvnK+cnK+vky+ckxUcY1xVI1nZ2dUjVSNVFSNjTiNVDi2juC+AAAABHRSTlN9PL4AffGBGQAAAMlJREFUWMPtlzcOwzAQBElLVKZy/v9DjXVBLK5Q4StkyJxygJ3uCNAk1qRfY2xi7CtV8LLGpCqw1/EJ7ENFDDvcOTXEdMIdY02MRwhgzwU47LkAhz0XQqASwDUCuFoQAzHwtIDqmPTnrOBJga0viX6Dm9ucaGe4pSuIbgkB7LkAhz0X4LDnQgiUArhcAFcIYiAGnhZQHJPunH/oRbo/sHpH+BXOu4xw/jKAPRfgsOfCZcAJ4DJBDMTAPwR0x6Q/53u/rkb9+VZ//9+xTWbto7vDzQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://api.srrdb.com/v1/search/%band%/%release%',
      'goToUrl': 'https://www.srrdb.com/browse/%band%/%release%',
      'matchRegex': /resultsCount":"0/,
      'spaceEncode': '/',
      'replaceSpecials': true,
      'bar': 3},
  {   'name': 'xREL',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAV1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/vgD/uwD/mgD/sAD/owD/twD/jAA3cDarAAAAFXRSTlMAFgdFUjEbD9U+TS4OwsC+639yYihON4QCAAAAgElEQVQY04WOSQ7DMAwDLctrk3Snt/b/76ycGr4FGeggigJIdYD25Bx5PTVZNoYt6S5WIhc3CFfru7lENk/knBKYlPL2hhBwB5BgnFLEyH1PKef/4YIPZIQ6DgG1Aq2VAqb9owEFM4W4qy8er9FjpGz83puOHhwXMQfSVFinPuUHh/cIEFGhr1oAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.xrel.to/search.html?xrel_search_query=%band%+%release%&lang=en_US',
      'matchRegex': /not return any results/,
      'bar': 3}
];

var sites = public_sites.concat(private_sites, other_sites, pre_databases);

//==============================================================================
//    Replace Search URL parameters
//==============================================================================

  // URLs for tests:
  // https://www.discogs.com/artist/2274430-Tuning-Circuits
  // https://www.discogs.com/master/2385727-Twice-Formula-Of-Love-OT3
  // https://www.discogs.com/master/1257041-For-King-Country-Crave
  // https://www.discogs.com/master/1787931-Baauer-Planets-Mad

async function replaceSearchUrlParams(site, band, release, mPOSTsearch) {
  var search_url = ('mPOST' in site && !mPOSTsearch) ? site['mPOST'] : site['searchUrl'];
  var space_replace = ('spaceEncode' in site) ? site['spaceEncode'] : '+';

  let band_str    = band.replace(/\(\d+\)/g, '')            // delete brackets with numbers inside
                        .replace(/\*/g, '')                 // delete *
                        .replace(/^Unknown Artist$/, '')    // delete string if Various and ect.:
                        .replace(/^No Artist$/, '')
                        .replace(/^Anonymous$/, '')
                        .replace(/^Various$/, '').trim();

  let release_str = release.replace(/\(.+\)/g, '')          // delete brackets with anything inside
                           .replace(/-|–/g, ' ').trim();    // replace - – with space
      release_str = GM_config.get('remove_ep') ? release_str.replace(/\sEP+$|\sE\.P\.+$/, '') : release_str // remove " EP" & " E.P." from the end

  if (site['replaceSpecials'] === true) {                   // Replace non latin | Special chars remove. Not included "`", "-", ".", "_".
    band_str    =    band_str.trim().replace(/[\u0250-\ue007f]/g, ' ').replace(/\'/g, '').replace(/\¬|\!|\"|\£|\$|\%|\^|\&|\*|\(|\)|\+|\=|\||\\|\[|\]|\;|\#|\,|\?|\/|\{|\}|\:|\@|\~|\<|\>/g, ' ');
    release_str = release_str.trim().replace(/[\u0250-\ue007f]/g, ' ').replace(/\'/g, '').replace(/\¬|\!|\"|\£|\$|\%|\^|\&|\*|\(|\)|\+|\=|\||\\|\[|\]|\;|\#|\,|\?|\/|\{|\}|\:|\@|\~|\<|\>/g, ' ');
  }
  // encode illegal chars
  band_str    =    band_str.replace(/\+/g, '%2B').replace(/&/g, '%26').replace(/#/g, '%23').replace(/=/g, '%3D').replace(/\s+/g, space_replace).trim();
  release_str = release_str.replace(/\+/g, '%2B').replace(/&/g, '%26').replace(/#/g, '%23').replace(/=/g, '%3D').replace(/\s+/g, space_replace).trim();

  var s = search_url.replace(/%band%/g, band_str)
                    .replace(/%release%/g, release_str);
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
  var iconsize = (site['bar'] == 1) ? size : GM_config.get('auto_search') ? size - border : size;
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
//    Create elements and add search links
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
        form_name = form_name.replace(/\s|\.|\(|\)/g, '-');
    var placebo_url = new URL(target).origin;
    link = $('<a />').attr('href', placebo_url).attr('onclick', "document.getElementById('"+form_name+"').submit(); return false;").attr('target', '_blank').attr('rel', 'noreferrer');

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
  if (GM_config.get('auto_search') && site['bar'] != 1) {
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
        if ((site['name']).match('-Req')) icon.css('border-color', 'rgb(50,50,200)');
    }
    link.append(icon);
  } else {
    icon = getFavicon(site);
    icon.css({'border-width': '0px', 'border-style': 'solid', 'border-radius': '2px', 'margin': '1px 2px 2px'});
    (GM_config.get('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(0,220,0)')
                                                                         : icon.css('border-color', 'rgb(0,130,0)');
    if ((site['name']).match('-Req')) icon.css('border-color', 'rgb(50,50,200)');
    link.append(icon);
  }

  // Create elements on Release/Master pages.
  if (onReleasePage) {
    const background = GM_config.get('greybackground_view') ? 'rgb(51, 51, 51)' : '';
    if ($('.result_box_main').length == 0) {
      $(elem).after($('<div/>').addClass('result_box_main'));
      $('.result_box_main').css({'background-color': background, 'padding': '4px 4px 0px 4px'});

      $('.result_box_main').append($('<div/>').addClass('result_bar_1st'));
      $.each(valid_states, function(i, name) {
        $('.result_bar_1st').append("<span id='discogscout1_" + name + "'>"+'</span>');
      });

      $('.result_box_main').append($('<div/>').addClass('result_bar_2nd'));
      $.each(valid_states, function(i, name) {
        $('.result_bar_2nd').append("<span id='discogscout2_" + name + "'>"+'</span>');
      });

      $('.result_box_main').append($('<div/>').addClass('result_bar_3rd'));
      $.each(valid_states, function(i, name) {
        $('.result_bar_3rd').append("<span id='discogscout3_" + name + "'>"+'</span>');
      });
    }
    // Add links to elements on Release/Master pages.
    if (site['bar'] == 1 || GM_config.get('all_in_one_bar')) {
      $('#discogscout1_' + state).append(link);
    } else if (site['bar'] == 2) {
      $('#discogscout2_' + state).append(link);
    } else if (site['bar'] == 3) {
      $('#discogscout3_' + state).append(link);
    }
  } else { // Create elements on Artist/Label/Collection/Wantlist/MyWantlist/List pages.
      const background = GM_config.get('greybackground_view') ? 'rgb(51, 51, 51)' : '';
      if ($('.result_box_main' + scout_tick).length == 0) {
        $(elem).after($('<tr/>').append($('<td/>',{'colspan':'11'}).addClass('result_box_main' + scout_tick)));
        $('.result_box_main' + scout_tick).css({'background-color': background, 'padding': '0px 4px'});

        $('.result_box_main' + scout_tick).append($('<div/>').addClass('result_bar_1st' + scout_tick));
        $.each(valid_states, function(i, name) {
          $('.result_bar_1st' + scout_tick).append("<span id='discogscout1_" + name + scout_tick + "'>"+'</span>');
        });

        $('.result_box_main' + scout_tick).append($('<div/>').addClass('result_bar_2nd' + scout_tick));
        $.each(valid_states, function(i, name) {
          $('.result_bar_2nd' + scout_tick).append("<span id='discogscout2_" + name + scout_tick + "'>"+'</span>');
        });

        $('.result_box_main' + scout_tick).append($('<div/>').addClass('result_bar_3rd' + scout_tick));
        $.each(valid_states, function(i, name) {
          $('.result_bar_3rd' + scout_tick).append("<span id='discogscout3_" + name + scout_tick + "'>"+'</span>');
        });
      }
      // Add links to elements on Artist/Label/Collection/Wantlist/MyWantlist/List pages.
      if (site['bar'] == 1 || GM_config.get('all_in_one_bar')) {
        $('#discogscout1_' + state + scout_tick).append(link);
      } else if (site['bar'] == 2) {
        $('#discogscout2_' + state + scout_tick).append(link);
      } else if (site['bar'] == 3) {
        $('#discogscout3_' + state + scout_tick).append(link);
      }
    }
}

//==============================================================================
//    Determine whether a site should be displayed
//==============================================================================

async function maybeAddLink(elem, site_name, search_url, site, scout_tick, band, release) {
  // Connection rate limiter per domain.
  var set_rate = ('rateLimit' in site) ? site['rateLimit'] : 500;
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
    target = await replaceSearchUrlParams({'searchUrl': site['goToUrl'], 'spaceEncode': ('spaceEncode' in site) ? site['spaceEncode'] : '+',  'replaceSpecials': ('replaceSpecials' in site) ? site['replaceSpecials'] : false}, band, release);
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
//    Perform code for sites
//==============================================================================

function perform(elem, band, release, scout_tick) {
  let site_shown = false;
  $.each(icon_sites, async function(index, site) {
    if (site['show']) {
      site_shown = true;
      const searchUrl = await replaceSearchUrlParams(site, band, release, true);
      const post_data = await replaceSearchUrlParams(site, band, release, false); // run on non-post sites too to keep order of icons
      addLink(elem, site['name'], searchUrl, site, 'found', scout_tick, post_data);
      }
  });

  $.each(sites, async function(index, site) {
    if (site['show']) {
      site_shown = true;
      var searchUrl = await replaceSearchUrlParams(site, band, release, true);

      if ('goToUrl' in site && GM_config.get('auto_search')) {
        maybeAddLink(elem, site['name'], searchUrl, site, scout_tick, band, release);
      }
      if ('goToUrl' in site && !GM_config.get('auto_search')) {
        searchUrl = await replaceSearchUrlParams({'searchUrl': site['goToUrl'], 'spaceEncode': ('spaceEncode' in site) ? site['spaceEncode'] : '+',  'replaceSpecials': ('replaceSpecials' in site) ? site['replaceSpecials'] : false}, band, release);
        addLink(elem, site['name'], searchUrl, site, 'found', scout_tick);
      }
      if (!('goToUrl' in site) && GM_config.get('auto_search')) {
        maybeAddLink(elem, site['name'], searchUrl, site, scout_tick, band, release);
      }
      if (!('goToUrl' in site) && !GM_config.get('auto_search')){
        const post_data = await replaceSearchUrlParams(site, band, release, false); // run on non-post sites too to keep order of icons
        addLink(elem, site['name'], searchUrl, site, 'found', scout_tick, post_data);
      }
    }
  });
  // Open settings if no sites selected:
  if (!site_shown) {
    GM_config.open();
  }
}

//==============================================================================
//    Artist Page code
//==============================================================================

function performArtist() {
  // Check if artist has releases
  if (!Boolean($('.credit_type:contains("Releases")').text().match('Releases'))) {
    console.log("Discogs Scout: Artist page doesn't have releases! Quitting...")
    return;
  }
  const band   = $('meta[property="og\:title"]').attr('content').replace(/\(\d+\)/, '').trim();
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
//    Release Page code
//==============================================================================

async function performRelease() {
  const elem = $('[class^=body]');

  // This won't work properly if " - " is in band's name:
//   const title   = $('meta[property="og\:title"]').attr('content').trim();
//   const band    = title.replace(/ - .+/, '').trim();
//   const release = title.replace(/.+? - /, '').trim();

  let band = "";
  let release = "";
  if (Boolean(location.href.match('/master/'))) {
      if ($('[id*=profile_title]').length > 0) {    // the old version of the master page
        band    = $('[id*=profile_title]').find('a').text().trim();
        release = $('[id*=profile_title]').children().last().text().trim();
      } else if ($('#master_schema').length > 0) { // the new version of the master page (beta)
          band    = $('[class^=body]').find('h1>span>a.link_1ctor:first').text().trim();
          release = JSON.parse(document.getElementById('master_schema').textContent)['@graph'][0]['name'];
      }
  } else if (Boolean(location.href.match('/release/'))) {
      if ($('#release_schema').length > 0) {
        band    = $('[class^=body]').find('h1>span>a.link_1ctor:first').text().trim();
        release = JSON.parse(document.getElementById('release_schema').textContent)['name'];
      }
  }

  if (band == "" || release == "") {
    GM.notification("Error detected! Please report this URL.", "IMDb Discogs Scout");
    console.log("Discogs Scout: Error detected! Please report this URL.");
    return;
  }
  perform(elem, band, release);
}

//==============================================================================
//    Label/Collection/Wantlist/List Page code
//==============================================================================

function performList() {
  if($('.shortcut_navigable').length !== 0) {
    $('.shortcut_navigable').each(function() {
      const elem = $(this);
      let band = "";
      let release = "";
      if (onLabelPage) {
        // https://www.discogs.com/label/34268-Roadrunner-Records
        band      = $(this).find('.artist>a').text().trim();
        release   = $(this).find('.title>a' ).text().trim();
      } else if (onWantlistPage || onCollectionPage) {
          // https://www.discogs.com/wantlist?user=GPX
          // https://www.discogs.com/user/GPX/collection
          band = $(this).find('.release_title>a:eq(0)').text().trim();
          if ($(this).find('.release_title>a[href*="/release/"]').length > 0) {
            release = $(this).find('.release_title>a[href*="/release/"]:eq(0)').text().trim();
          } else if ($(this).find('.release_title>a[href*="/master/"]').length > 0) {
              release = $(this).find('.release_title>a[href*="/master/"]:eq(0)').text().trim();
          }
      } else if (onMyCollectionPage) {
          // own collection page
          band = $(this).find('.collection-card-title>a:eq(0)').text().trim();
          if ($(this).find('.collection-card-title>a[href*="/release/"]').length > 0) {
            release = $(this).find('.collection-card-title>a[href*="/release/"]:eq(0)').text().trim();
          } else if ($(this).find('.collection-card-title>a[href*="/master/"]').length > 0) {
              release = $(this).find('.collection-card-title>a[href*="/master/"]:eq(0)').text().trim();
          }
      } else if (onMyWantlistPage) {
          // own wantlist page
          // https://www.discogs.com/mywantlist
          band = $(this).find('.release_title>a:eq(0)').text().trim();
          if ($(this).find('.release_title_link>a[href*="/release/"]').length > 0) {
            release = $(this).find('.release_title_link>a[href*="/release/"]:eq(0)').text().trim();
          } else if ($(this).find('.release_title_link>a[href*="/master/"]').length > 0) {
              release = $(this).find('.release_title_link>a[href*="/master/"]:eq(0)').text().trim();
          }
      } else if (onListPage) {
          // This won't work properly if " - " is in band's name or there are more than one artist in title:
          const title  = $(this).find('.listitem_title>a:eq(0)').text().trim();
          band     = title.replace(/ - .+/, '').trim();
          release  = title.replace(/.+? - /, '').trim();
      }

      if (band == "" || release == "") {
        GM.notification("Error detected! Please report this URL.", "IMDb Discogs Scout");
        console.log("Discogs Scout: Error detected! Please report this URL.");
        Discogs_Scout__Generate_Not_Defined_Error_To_Stop_The_Script();
      }

      let scout_tick = window.localStorage['_discogscout_tick'];
      if (!scout_tick) {
        scout_tick = 1;
        window.localStorage['_discogscout_tick'] = scout_tick;
      }

      perform(elem, band, release, scout_tick);
      scout_tick = parseInt(scout_tick) + 1;
      window.localStorage['_discogscout_tick'] = scout_tick;
    });
  } else {
      GM.notification("Error detected! Please report this URL.", "IMDb Discogs Scout");
      console.log("Discogs Scout: Error detected! Please report this URL.");
      return;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


//============================================================================//
//================================  MAIN  ====================================//
//============================================================================//


//==============================================================================
//    Polyfill for GM3 notifications
//==============================================================================

if (typeof GM.notification === "undefined") {
  this.GM_notification = function(options) {
    const opts = {};
    if (typeof options === "string") {
      opts.text = options;
      opts.title = arguments[1];
      opts.image = arguments[2];
      opts.onclick = arguments[3];
    } else {
      Object.keys(options).forEach(function(key) {
        opts[key] = options[key];
      });
    }

    checkPermission();

    function checkPermission() {
      if (Notification.permission === "granted") {
        fireNotice(opts);
      } else if (Notification.permission === "denied") {
        alert("User has denied notifications for this page/site!");
        // eslint-disable-next-line no-useless-return
        return;
      } else {
        Notification.requestPermission(function(permission) {
          console.log("New permission: ", permission);
          checkPermission();
        });
      }
    }

    function fireNotice(ntcOptions) {
      if (ntcOptions.text && !ntcOptions.body) {
        ntcOptions.body = ntcOptions.text;
      }
      var ntfctn = new Notification(ntcOptions.title, ntcOptions);

      if (ntcOptions.onclick) {
        ntfctn.onclick = ntcOptions.onclick;
      }
      if (ntcOptions.timeout) {
        setTimeout(function() {
          ntfctn.close();
        }, ntcOptions.timeout);
      }
    }
  };
  GM.notification = GM_notification;
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
    'type': 'checkbox',
    'label': 'Auto-search sites for results?',
    'default': true
  },
  'hide_missing': {
    'type': 'checkbox',
    'label': "Hide link if search didn't found results?",
    'default': false
  },
  'greybackground_view': {
    'type': 'checkbox',
    'label': 'Enable grey background for the links?',
    'default': true
  },
  'all_in_one_bar': {
    'type': 'checkbox',
    'label': 'Put all links into one bar?',
    'default': false
  },
  'run_artistpages': {
    'type': 'checkbox',
    'label': 'Enable the script on Artist/Label/Collection/Wantlist/List pages?',
    'default': false
  },
  'remove_ep': {
    'type': 'checkbox',
    'label': 'Remove "EP" & "E.P." from the end of release titles?',
    'default': true
  },
  'highlight_sites': {
    'label': 'Highlight sites: &nbsp &nbsp &nbsp',
    'type': 'text',
    'default': 'RED,OPS'
  }
};

//==============================================================================
//    Add sites to Settings (GM_config)
//==============================================================================

$.each(icon_sites, function(index, site) {
  config_fields['show_' + site['name']] = {
    'section': (index == 0) ? ['Icon sites (no search):'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name']
  };
});

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

$.each(other_sites, function(index, site) {
  config_fields['show_' + site['name']] = {
    'section': (index == 0) ? ['Other sites/tools:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name']
  };
});

$.each(pre_databases, function(index, site) {
  config_fields['show_' + site['name']] = {
    'section': (index == 0) ? ['Pre databases:'] : '',
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
  'css': `#discogs_scout_section_header_1, #discogs_scout_section_header_2, #discogs_scout_section_header_3, \
          #discogs_scout_section_header_4, #discogs_scout_section_header_5 { \
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
      const modUrl = 'https://greasyfork.org/en/scripts/439452-discogs-scout';
      $('#discogs_scout').contents().find('#discogs_scout_section_header_0').append($('<a href="'+modUrl+'" target ="_blank">'+modVersion+'</a>'));
      $('#discogs_scout').contents().find('#discogs_scout_section_header_0').find('a').css({
       'text-decoration': 'none',
       'color': '#cb0000'
      });

      $('#discogs_scout').contents().find('#discogs_scout_section_1').find('.field_label').each(function(index, label) {
        var url = (icon_sites[index].goToUrl) ? new URL(icon_sites[index].goToUrl) : new URL(icon_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(icon_sites[index], true));
      });
      $('#discogs_scout').contents().find('#discogs_scout_section_2').find('.field_label').each(function(index, label) {
        var url = (public_sites[index].goToUrl) ? new URL(public_sites[index].goToUrl) : new URL(public_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(public_sites[index], true));
      });
      $('#discogs_scout').contents().find('#discogs_scout_section_3').find('.field_label').each(function(index, label) {
        var url = (private_sites[index].goToUrl) ? new URL(private_sites[index].goToUrl) : new URL(private_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(private_sites[index], true));
      });
      $('#discogs_scout').contents().find('#discogs_scout_section_4').find('.field_label').each(function(index, label) {
        var url = (other_sites[index].goToUrl) ? new URL(other_sites[index].goToUrl) : new URL(other_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(other_sites[index], true));
      });
      $('#discogs_scout').contents().find('#discogs_scout_section_5').find('.field_label').each(function(index, label) {
        var url = (pre_databases[index].goToUrl) ? new URL(pre_databases[index].goToUrl) : new URL(pre_databases[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(pre_databases[index], true));
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

$.each(icon_sites, function(index, site) {
  site['show'] = GM_config.get('show_' + site['name']);
});

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

var onArtistPage       = false;
var onReleasePage      = false;
var onLabelPage        = false;
var onMyCollectionPage = false;
var onCollectionPage   = false;
var onMyWantlistPage   = false;
var onWantlistPage     = false;
var onListPage         = false;

if (Boolean(location.href.match('/artist/'))) {                                                        // artist page?
  onArtistPage = true;
  if (Boolean(location.href.match('type='))) {
    if (Boolean(location.href.match('subtype=Videos'))) {
      onArtistPage = false;
    } else if (!Boolean(location.href.match('type=Releases'))) {
      onArtistPage = false;
    }
  }
} else if (Boolean(location.href.match('/release/')) || Boolean(location.href.match('/master/'))) {    // release page?
    onReleasePage = true;
} else if (Boolean(location.href.match('/label/'))) {                                                  // label page?
    onLabelPage = true;
} else if (Boolean(location.href.match('/collection')) && Boolean(location.href.match('/user/'))) {    // collection page?
    onCollectionPage = true;
} else if (Boolean(location.href.match('/wantlist'))) {                                                // wantlist page?
    onWantlistPage = true;
} else if (Boolean(location.href.match('/mywantlist'))) {                                              // own wantlist page?
    onMyWantlistPage = true;
} else if (Boolean(location.href.match('/lists/')) && !Boolean(location.href.match('/byuser/'))) {     // list page?
    onListPage = true;
}

//==============================================================================
//    Stuff for /release/ pages (to start after reflow)
//==============================================================================

function startObserver() {
  if ($('[class^=body]').length) {
    addDummyElem();
    const obscfg = {childList: true};
    const obs = new MutationObserver(checkDummyElem);
    obs.observe($('[class^=body]')[0], obscfg);
  } else {
    GM.notification("Element not found! Please report it.", "IMDb Discogs Scout");
    console.log("Discogs Scout (Start Error): Element not found! Please report it.");
    return;
  }
}

function addDummyElem() {
  const temp = $('<temp />').attr('id','temp_scout').css({'display':'none'});
  $('[class^=body]').append(temp);
  setTimeout(function(){
    temp.remove();
  }, 2000);
}

function checkDummyElem(mutation, observer) {
  if (!$('#temp_scout').length) {
    observer.disconnect();
    startDiscogsScout();
  }
}

//==============================================================================
//    Start: Add links to sites
//==============================================================================

function startDiscogsScout() {
  //  We don't want to run on these urls
  if (Boolean(location.href.match('/image')) || Boolean(location.href.match('/history'))) {
    console.log("Discogs Scout: Not starting. [Report it if you think that it should start here!]");
    return;
  } else if (Boolean(location.href.match('layout=big')) || $('.cards_layout_large').length > 0) {
      GM.notification("Large covers layout is not supported!", "IMDb Discogs Scout");
      console.log("Discogs Scout: Not starting. [Report it if you think that it should start here!]");
      return;
  }
  //  Check if we are on the own collection page
  if (onCollectionPage && $('.collection-row').length > 0) {
    onMyCollectionPage = true;
    onCollectionPage = false;
  }

  if (onReleasePage) {
    console.log("Discogs Scout: Starting a release page.");
    performRelease();
  } else if (GM_config.get('run_artistpages')) {
      if (onArtistPage) {
        console.log("Discogs Scout: Starting an artist page.");
        performArtist();
      } else if (onLabelPage) {
          console.log("Discogs Scout: Starting a label page.");
          performList();
      } else if (onMyCollectionPage) {
          console.log("Discogs Scout: Starting a mycollection page.");
          performList();
      } else if (onCollectionPage) {
          console.log("Discogs Scout: Starting a collection page.");
          performList();
      } else if (onWantlistPage) {
          console.log("Discogs Scout: Starting a wantlist page.");
          performList();
      } else if (onMyWantlistPage) {
          console.log("Discogs Scout: Starting a mywantlist page.");
          performList();
      } else if (onListPage) {
          console.log("Discogs Scout: Starting a list page.");
          performList();
      } else {
          console.log("Discogs Scout: Not starting. [Report it if you think that it should start here!]");
      }
  } else {
      console.log("Discogs Scout: Not starting.");
  }
}

if (onReleasePage) {
  document.addEventListener('DOMContentLoaded', startObserver);
} else {
  document.addEventListener('DOMContentLoaded', startDiscogsScout);
}
