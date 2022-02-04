// ==UserScript==
//
// @name         Discogs Scout
// @version      1.0
// @namespace    https://github.com/Purfview/Discogs-Scout
// @description  Auto search for music on torrent and other sites. Adds links to Discogs pages from various sites.
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

1.0     -    First usable version.
             New feature: Support for Release/Master pages.
             New feature: Three bars for sites: 1st for non-searchable sites,
                                                2nd for searchable download sites
                                                3rd for searchable other sites/tools.
             New feature: Auto open the settings if no sites selected.
             Added: First bunch of sites.
             Updated: OPS (advanced search is broken, switched to basic).

0.3     -    Fixed OPS. Check if there are releases on artist page.

0.2.1   -    Added the update links and OPS.

0.1     -    Initial alpha test release.

==============================================================================*/

var icon_sites = [
  {   'name': 'AllMusic',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAAPFBMVEUAKDkAERgAIS8AGSQkqeD+/v4djr0SZokFOE4LTmqVnJ6tt7tSXmI5RUrs7u7d3+B3gIQSIynL0dQnNDr+weAdAAADeklEQVRYw+2V2ZLbIBBFaRE2Sd7//19Db7qmZGdGmTxMpeaCJGjo081SdvjGqly1aD3u6o3vrfotED96ram2Imr1i6DQyi8olzax8ajUp2XDgNeO0zgBR+1xR9Kb9PEFym7V2jZ2sSmfxk01Wx7c7X15mhlr7/w5G9RealbUFFCAy9UMxhzQGsheyKtoQmMtSjMQEgALgfQlrMbOhrPCryY0n81vtMEAtSiL9YTRh2mWNbJwLNLBxjjLUtOY3rFx3TYUUMYo2SLrQC266aVOTiy60LF4XgDyq+lUVWVHU9kSzbalcMZr7MlMZ3EHqk8LzeMxA6VNbVSe6Cy9bfzn0/IzLUsbieDhN1SQmC7Hz0iXj9TKwFAMvgBYCOFyG5tZbBaDR8+xuZtW2TnKDiCfinVis97AQkX44lh3Chlj4P4hs4YtE1fssOMxLXwEQ8i4teqynLaFP23B9HnYtJ3EnNKis/8B7JrS/FUYWss9bIgI2IEDiDi7+/mG88W0F7CI3hiyueua0tXPt725GswJkT/7SxutWWJvLyld2FRkF8UjcxMcc+D3gJNpMhrZuX8eqWu1iyeOFhIyKztpU6SEZpYszjPD7pEzYwBPb5I0OGoNxoKlalCxh1xjDOfEOkXpil1/gtgBjsgMVt2OJhaOFeM1iZbIw1Fq84AgceHMBhzP7BKr6pJUD+16Yk3gz6XD9AtalNRKdK3JNLtF/1DgwEWChC0aoLxroN0ddnaL/tVFOBhOYA7eguifsHqe0qbrE6tgeeo/GQx8t2ajUaQFsEvvGiuTulk1hThq0nf2ld50hYpcybLOWAs0wJAv0xRGs+79areDBJaVgfmAvVan1e5rF/ZmX6IAFvQRjEomIr2wd7Ktmzm1QnQYRr3SRY+RyG7brXN6PQJzGhBEZ8WyOR7MjLj44hbqmu3ikgy9g72KRFrswq4M87bQ9i5iDP3xigHNK85YpW/fhXY02nyCMIEjsOhmF38WMUxvR/TiKO8Ha4DjheyHDMIGWnJ4aQnwHlGkF3avh6cG1JYZEnkqUtf0UjPp8IsSZGSHwo7vdL6R4wYPhfEX1RVP6Y2u2xRUffQABqsRF6zKdLXT1XF4jZlBSO2R/CqYYFrpjcIYBZotDXrSXW33IXj0lsP2up2xSqwT2b7Qe9hpVj2GCGZc38L+Rj+wH9j/AvsN1ksy9BiB4ZUAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.allmusic.com/search/albums/"%release%"',
      'bar': 1},
  {   'name': 'Amazon',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAkFBMVEUAAAD///8EBQX/qABUVlYbHR3/1ZCTlJT7+/vMzMzz8/P/8Nj/v1AwMTHZ2dn/rRN2dnb/6suioqIDBAT+pwD/+vL/9eW+vr6wsbH/4K7/ynLm5uaFhob/w2H/5bz/5Lv/yXL/uD7/9ebNzc2UlZX/0IJmZ2dERUVDRET/sin/rBPl5eX/2p//2Z9lZmZDRUXHx2gpAAAAAXRSTlMAQObYZgAAAclJREFUSMedlul2gjAQhUsm7JuAyqK4tNZq1/d/u0YYExKIob3n8CPH+2XuJEHydJdlENo0bgPjWTPlTfsTl9KCkB/q+mNinOcUE6G4UoiRP0E7Fw1GhOS3iao3mZA72Kj+gj2uUmI4WJAJ2UrbwwL3eePK911ezddWyNGxkPtxtQDFDAEGNAKn3nDGocsLqoBQwLK7CQ5KBKgCaOXjws4AElaH0nhehU1OCZcZCHBp5gK+Tf4ElJLvogHks4cLU7LNezEC9/x22Q2NQEBQOe60Caj4eTYBGsPCBHwrBuNOU1L0bzFPiPrQAFvpFQvEHm4NPRCbEX5MhPxpIBEO5YTEKsC71MjWAKXiy3GGS6ACattFN22FIc+B/njnIjzd4NIurIcvUE4ZY9NtgikpHqwsy9YcCGvrsbIWbgo5ABGj9WK/t04DkPFI+xQOiOgVwbPoIUzhEbJy0tZK02HT4RFgGdWrKfuOpYE6hKb/u/dwkgZuipxMjl8f0iVAurM+YT34ZGEjrAp7rtGr06mNYNlPw9JHjsUBnvQdhkI3XLtVX6ufUUSEGXWsR5cBT+4wHfiPTjjjKhDuHadhfXxl6qJ5/7mcGG8o6uS/49obpgvEcMsAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.amazon.com/s?k=%band%+%release%&i=music-intl-ship&ref=nb_sb_noss',
      'bar': 1},
  {   'name': 'Google',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABMlBMVEUAAABFi///STpP/37/vwX/////////////////////////////////////////6eery///XE7///////9V/4D////////////////////////E2v//wLvw//X/rKTo/+7/UUP/TDvJ/9eJ/6j////+/fz/8/L/4Yj/3n7/1ln/0Ef/xRyjxv//u7VXlv//opv/h37/enD/bF/////A/9H///+1/8hr/5Nl/49c/4j////0+P/o8f//9vX/9+D/997g7P/2//j/0c3/0Mz/siL/xL97rP/0//dkn///mRb/lnL/m5P/lo3/kYj/fiL/c2f/Y1bY/+P/2TNJmv/S/97Q/928/9ev/8VOs/+3/6ee/7iP/61//6F2/5r8/y6P//LC/0pS/5RY/77////////5+/9A6TfbAAAAZHRSTlMA9Oqo++j2myLz+M+XJQn8+uzIxamKh1hVLwv89/X17+vr3L0N/v79/fz8+/n39fTx8O7l2NLSsrCsB/7+/v7+/fn5+fn49/f29fTz8vLx7+3l5OPh4NLOysfGwLm2tbGwpaAOaYKM8gAAAZNJREFUOMt9k9d6wjAMhd3ssiFhlg3d7FKge++99w7v/wq1lGFC+PgvgqMj58hCJoxyXI6IkiRG5HiZuPHLk7rNpOwfkgNRj+7AEw04ti/rLrwK05MihoLZZrhQCDezQXwVk/Z+EeUGZ9PAFFEx/fH76Tw3QP4AXYw6orDOck4u0CWGBh7YzyGterVab9HFuXkWMJHBH79/vasje+Ez3UQm5A/6cwr61YwV3mAdS5E4/dkSLjkuDLqLBDrMCsJJIa2Pwkci9LkgCML+9MgElUCTFmnCvBmZYExBs4hEnwJlzp0Qoq/SuIQKJIyzCIGFXeSto8htqwbVOuanVhxMCEHCOhwTG7UpfPN874jpazWqHxuNKkOrX3jK+46l9w+xBKPV6JFZgYzujaHnvkCv9cHB+rsfeOTjqVjslHj+984oUVLsgWnzDn6eK/bAkIAX1vfUhaE94sitEkTBoc28Mr2Ug8iSMjT2mfZbV9N6pQ6VQU8SG8U75uIggZjHKUsxw5+hOC6vTyFuUgmfCtdf9SVSLPoPxFrAszCo93cAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.google.com/search?q="%band%"+"%release%"',
      'bar': 1},
  {   'name': 'MusicBrainz',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://musicbrainz.org/search?query="%release%"+AND+artist:"%band%"&type=release_group&limit=25&method=advanced',
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
  {   'name': 'RuT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAACxM3XjH0Q4Q/PsGD7kHkQ1S+4yTuvnGz4AzmMA0GE1TenmHkEA1l/aKEEAz2M2TeoF1V8A0l3jH0TnHEIA0WQA114hXu43TegAzmIA02UyTu7oHT43TegAzWPpGkP7CzjjH0Q3TegAzWPjH0R3ovE9AAAAInRSTlMAA/0rP+2ESyvsyL69mRXcqi4U1KyFSRnrtHdwa9FjjVKEHeMnRQAAAWxJREFUOMt9kAmuwjAQQ5N0Sxe674UCbe5/xu9OGsiPAAtpkPzq8YR9Eufslzi7Zr99XyiJ8dXPG6WunwEOMd4qodrvCTKDr4LcJTiTTZa1bSPg43dH3L9sWi0UPPLRwj0X5WHCJoHJfMte54N4Km0HWQAW8+6bjy/7VGOeS/xBBhjU9QXs8YoXBIBsb4se4vjXSJPQ7VAxSyp5XbZxaPHnyV/95v1QImmDTLctzQPh4worAbr4QtAGKJTwD2lgIqC/C8gPt0PlYL1ARX6BWBE8GDaQ0hIKD58n5wbVPvK5R8Jb5fE9+Ti0yquu2C+e5afo0McwNVHQqN4Ro8dwgKuiLg0QYcGaxC4x8Zv2b/Chuu8cxtQIAZzM9F6QJIkBFu3Si2oinuvBg1IrwX6ruGJsIct0sJQA6EFGmyXPiljRjfEXMI5WCVKN+9mZMC4D515421ILYB0WaCAdztgoYo4ICMFxus319PCMpZk/48o2nzAHjjMAAAAASUVORK5CYII=',
      'searchUrl': 'https://rutracker.org/forum/tracker.php?nm=%band%+%release%',
      'loggedOutRegex': /Введите ваше имя/,
      'matchRegex': 'Не найдено',
      'bar': 2},
  {   'name': 'RuT-Discography',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAACxM3XjH0Q4Q/PsGD7kHkQ1S+4yTuvnGz4AzmMA0GE1TenmHkEA1l/aKEEAz2M2TeoF1V8A0l3jH0TnHEIA0WQA114hXu43TegAzmIA02UyTu7oHT43TegAzWPpGkP7CzjjH0Q3TegAzWPjH0R3ovE9AAAAInRSTlMAA/0rP+2ESyvsyL69mRXcqi4U1KyFSRnrtHdwa9FjjVKEHeMnRQAAAWxJREFUOMt9kAmuwjAQQ5N0Sxe674UCbe5/xu9OGsiPAAtpkPzq8YR9Eufslzi7Zr99XyiJ8dXPG6WunwEOMd4qodrvCTKDr4LcJTiTTZa1bSPg43dH3L9sWi0UPPLRwj0X5WHCJoHJfMte54N4Km0HWQAW8+6bjy/7VGOeS/xBBhjU9QXs8YoXBIBsb4se4vjXSJPQ7VAxSyp5XbZxaPHnyV/95v1QImmDTLctzQPh4worAbr4QtAGKJTwD2lgIqC/C8gPt0PlYL1ARX6BWBE8GDaQ0hIKD58n5wbVPvK5R8Jb5fE9+Ti0yquu2C+e5afo0McwNVHQqN4Ro8dwgKuiLg0QYcGaxC4x8Zv2b/Chuu8cxtQIAZzM9F6QJIkBFu3Si2oinuvBg1IrwX6ruGJsIct0sJQA6EFGmyXPiljRjfEXMI5WCVKN+9mZMC4D515421ILYB0WaCAdztgoYo4ICMFxus319PCMpZk/48o2nzAHjjMAAAAASUVORK5CYII=',
      'searchUrl': 'https://rutracker.org/forum/tracker.php?nm=%band%+Дискография',
      'loggedOutRegex': /Введите ваше имя/,
      'matchRegex': 'Не найдено',
      'bar': 2}
];

var private_sites = [
  {   'name': 'OPS',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAilBMVEUEGBPh5OPl5+fe4ODj5uXa3dzY29q3vbu9wsHR1dTGysnLz86xuLbV2Nd4g4DBxsXO0tGor66krKqCjImhqKass7GcpKKYoJ6HkI5yfXuUnJqMlZN9h4VaZ2QvQDyQmZZLWVYnOTQLHhno6uprd3RhbWo+TUpEU083R0MZKyZlcm9TYF1RX1sQIx5dR4NSAAADGUlEQVRYw+3R2ZaiMBSF4RNkFlEBB1TGOCHy/q/X3auac4ImCFW9+oqPS372ihEmk8lk8kn5G/wbTVX8lV4CR+Nf2DJMf3bCIm3djwbXOjh3n98+b3pv1S7tiviu+c7wFT0drqnwbTn2Kq435OGwFL/AGFWOHrr2AXdHHPz+RAeuDVDAQHnSqi1tEJ7DIAlxtYF4Mmj5gmx9MC0fsPxAG/bu60/V2RsthQ9uZ5T9Weo8mhOEfhzH/tEz9deXrIRelR+3fPbCyaHMfXz99ptc6OUTh3WY96/iScWadZ2hR31C29/tDB+2x6bxsQkdsem9kjIkMxG7itmZKruTrUHpvEebznLR7R7UeZ2uUh46OyJDMEtfS59CWywDUEgyFBiCx3uakZV4CNVtH4hjEkuSVkJrCi4gVeyIUBuNLI6p9YTYVfyJW+QtSCaNy4hqITZLab2NkOugRQNSPtWWQ27ScwREaC2Qq+R5JmuLNVmRGhSEfE65LUuTDfLmaNWAwp56e05kaeghS52Sp0c+9BGVtotsUCk84hJZ6llImF6DSmWRD9NCuSRbUGls6Qey1Jbqm5aSnlpa9lzIcvB0tCQWAZXr8P7kkrf0Z30upB4pQMGifEn5RpZWc2JtUAxypZDblGfSeEWtuyYgl8yJR3Utja0VWQcoBSlXqANSSeOLQ9wI7aTxVYjnEVHc3kLIgy26Sm9PaD1qY5CzF8TZkfI9PS4EQlqB3E3sl9mhtX8vTaF0qTyCysIUWEcUv3SFKTpgl91BJTFF3h6dQZQaYjbfE1BzDJEbIr8UDjAzREeqUlBLu1+Z2Qm1n5We0WFREkOfaNY1D/3WufozHLJuYPikhF7m7MUi8uPWxWuHURijFPpV+DFiM2dpWfbKwFdke0ZP+OTKRrAeKIHPasZmA5/lBeFyr1pnw9gJqmGYu8YG0INn3brBUJXBmP7h0U45SmGEnab3c/IbamCUYtE3rp2uqIDRckNTOdwRDo+T2lx7w00/RRV8W5lbOue4yvnqlBatqoQfKtPLPtps1oc4L6q/mrKEyWQymfxPvwD+85sNy6/EZQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://orpheus.network/torrents.php?searchstr=%band%+%release%&filter_cat[1]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me</,
      'matchRegex': /did not match anything/,
      'bar': 2},
  {   'name': 'RED',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABU1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADr6/jc3O+3udmnqM/tAAD09P/Ly+TJy+Tu7vqbncgGBgaHAAAkJCvcAADHx+IUFBUEBAQGAADMzNu0ttdmZnYpKjQhISoeHiEYGBrdAADx8f3l5fTg4PHa2u3d3erW1una2ufS0ufNzuXMzODAwd6ytNOtr9O7u9K6usy+vsuursGOjraNjq9/gax+gahxc4hbW2tBQ1pHR1I9PU02Nk0hISh+AADFxdjHx9fAwMyursqxscGgosCcnLaPj7WHia6Dg52MjJx2eZqHh5dvb49qbY52do1hYYBfX3hUVHJFRWA4PFg3N1UsLD4zMz0LCwuhKa/DAAAAIHRSTlMAm/iwzMP87M+2LBQH6NvFvKehkItdWUc+DOCEb0U3M9ZEgUcAAAFvSURBVDjL7ZPVcgJBEEWBJUjcA9G7QHRxd3cIEiTu7vn/p+zOMmRhkz/IeZqpe2q6u6Za8cPYglKnBbRq5eKYQs4oAwnM+nCuBLjWzUkiEkmU71ocoByIjQxczdRun5SPg15ah0HojGU9jXbIxTk/fWWWLQUxPS55P3QcTTZdoLQ9UU8QszRfA1eJHdkgwVmJlb6w2BP08MWzJJcYxfgjpsV8Cc5s8gBD+NPpIBaIMIPnzAVkXGcaYIgAnDo6kOF3FDkIg2zAlsu7IOc894ElXljFq/kev/BkfsEKaeHBS1t0W+1hqxsiHe8t9Lygw1XBDxHrJs8hRAKFS0zyghbvXfSwC4Kd3rpvUPGCBoBcoJApA3XvtokdLLHFmhz7NiKoULOYBYE0GSZNEmHHXCUlgD0qUKhgAf6FvjCJ2l9CFctkKQL1PBEM81MTKtXE1LyB/gVZjXE1REYUfUYgojOS65xaI+SjklUXDI16jj9+A6CFfEw2ZC3rAAAAAElFTkSuQmCC',
      'searchUrl': 'https://redacted.ch/torrents.php?artistname=%band%&groupname=%release%&filter_cat[1]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me</,
      'matchRegex': /did not match anything/,
      'bar': 2}
];

var other_sites = [
  {   'name': 'Voidtools',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAgMAAAAhHED1AAAACVBMVEUAAAD/gACXOgALtIKSAAAAAXRSTlMAQObYZgAABHBJREFUeNrtm0GOnEAMRRFLjlL3ASkcoU7BJXrPBgl8yiiZTj8R0rb5ZDJShHdJul/bzwVVFJXmjjvuyEdntjZ62DPEr7f2iln8PjGp+W99X0VCMbOl/xkDHk7pt/4VggYze/TE6SIK3/9VxXqyA0u/i/FcCuWXAKKeSaGlAIo4k0JnW3+I8UQK+wTohJgAKcxphSSwt5BUSAL7qEmNHWNgH0NSY2EMSBpbEjhqnFIVoPBYg1gBGhMAKtBqaKmAoIY5oaB3osYSbPMAo4lNpIZJaiIRSihUoEkoVKBJoAJNQksTBQmMAkUCDkUJXAiRBO1CILCYcWhmvzPr7Dncfkv3Zyxpizjk+4ccxjXt0F6xx2bH4fixqmgpgrHoOySB12ol2YbO/rykIAXaEDeh2kxmlrNYljdTabHlJIAESAF0qglmxxkfQNwEZgBmbNqQAFQ73u1pQ6IJth46fApABcwXcRvK4tx3bDsFqKsz6w8Wd9FmZ8ryAFxx3qX+FrBT4BQI/jAMUOD1qL4BbDsFHn+OhoFN7i1/dACOZluCgdAFHyhbACgLDoMM3wAeviQsDuYAnD5HAAPQCB9wfgBJfoqGZAnQhgDaUH1AnTXA5gLinwBgkwToQgB9HP8IwHEjAsKpq7wAqwtYw8l3cADgz/5GuQ5wDNEoB/AIAW0OUC8DphhgGoCxLAKafwSwy4BGA9hlQJ8APL4aUG7A/wAwF/Dl1wL1ffn9oH4eoP1rgMGuTiz2mTOTPrkuOkBfYOhLHHGRRZKfskrb5HVifqXaA3AX24m1srZazz4vjPHzgvrIA+BzHroeALTHPv59kgAlAMSPvovfxw6A9vReNgDR/oH5PzCu4Q7G5DocZ2kTBgCOsts0OIwBFHl0SJuVnSxbHIC3l4YCAM4tjw3NowLwif1EcxQMqzNv8F7Q3xKNN2Xn434k4yizLby+fw9aEwBq4F102EX6yPtZEnicBPS2+1hmc54+cloAhVsMoA3HFIzc6GIEqKRQSIAmhK+ZBrP5ySUBAInXTPVJ6IwEvCZwwZHCDw+86ood2uHsyUds+7+NFVDER+yxa1IBhOzrQhQQA/XjMFIgvDdGQRyjBQqk18YoiMNmSQFxVcGgKsChqACHV0fBfHUUTBdHgV0eBV98IdSro8ByF4JTQU7Bt7cVJBXUh1tBrMCgJU62oYBK7U0CNmXPDSzeka5YgZl5CmMFc+HPu8qapIKpJQWiojBSwJmJvZkmqWBtWBEQRgKhAg5+7Mw2aQUsKiiABGIFH1XtCKORQEZB03D+hTMxWQWsrJ4mB448ZxU8iyAYxEkFEPh+XsGRADSngODA9jkFccQK4ogVEJoC4lZwK7gVxHFVQXtVQacqAHBRQVl0BQBQIAAeugIAKNCGAQoUgKwAAApEAApEAApUAAp0AAr0NtosA1Agj0QU6IC6ioBFVMBGMAo0wIYCKVpTFTCz6QqYWFCgTm1VU8CWuUkK2PKuugKW03IUHgfEGkjgyn9EveOOOy7Ed2JJpzzZXV4JAAAAAElFTkSuQmCC',
      'searchUrl': 'http://localhost:8080/?search=%band%+%release%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'bar': 3}
];

var sites = public_sites.concat(private_sites, other_sites);

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

//   if (typeof(hide_on_err) === 'undefined') { hide_on_err = false }
//   if ('icon' in site) {
//     favicon = site['icon'];
//   } else {
//     var url = new URL(site['searchUrl']);
//     favicon = url.origin + '/favicon.ico';
//   }

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
    }
    link.append(icon);
  } else {
    icon = getFavicon(site);
    icon.css({'border-width': '0px', 'border-style': 'solid', 'border-radius': '2px', 'margin': '1px 2px 2px'});
    (GM_config.get('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(0,220,0)')
                                                                         : icon.css('border-color', 'rgb(0,130,0)');
    link.append(icon);
  }

  // Create elements on Artist pages.
  if (onArtistPage) {
    //const bar_height = (parseInt(GM_config.get('mod_icons_size')) +6) +"px";
    const background = GM_config.get('greybackground_view') ? 'rgb(51, 51, 51)' : '';
    if ($('.result_box_main' + scout_tick).length == 0) {
      $(elem).after($('<tr/>').append($('<td/>',{'colspan':'9'}).addClass('result_box_main' + scout_tick)));
      $('.result_box_main' + scout_tick).css({'background-color': background, 'padding': '0px 4px'});
    }
    if (site['bar'] == 1) {
      if ($('.result_bar_1st' + scout_tick).length == 0) {
        $('.result_box_main' + scout_tick).append($('<div/>').addClass('result_bar_1st' + scout_tick));
        //$('.result_bar_1st' + scout_tick).css({'height': bar_height});
        $.each(valid_states, function(i, name) {
          $('.result_bar_1st' + scout_tick).append("<span id='discogscout1_" + name + scout_tick + "'>"+'</span>');
        });
      }
    }
    if (site['bar'] == 2) {
      if ($('.result_bar_2nd' + scout_tick).length == 0) {
        $('.result_box_main' + scout_tick).append($('<div/>').addClass('result_bar_2nd' + scout_tick));
        //$('.result_bar_2nd' + scout_tick).css({'height': bar_height});
        $.each(valid_states, function(i, name) {
          $('.result_bar_2nd' + scout_tick).append("<span id='discogscout2_" + name + scout_tick + "'>"+'</span>');
        });
      }
    }
    if (site['bar'] == 3) {
      if ($('.result_bar_3rd' + scout_tick).length == 0) {
        $('.result_box_main' + scout_tick).append($('<div/>').addClass('result_bar_3rd' + scout_tick));
        //$('.result_bar_3rd' + scout_tick).css({'height': bar_height});
        $.each(valid_states, function(i, name) {
          $('.result_bar_3rd' + scout_tick).append("<span id='discogscout3_" + name + scout_tick + "'>"+'</span>');
        });
      }
    }
    // Add links to elements on Artist pages.
    if (site['bar'] == 1) {
      $('#discogscout1_' + state + scout_tick).append(link);
    } else if (site['bar'] == 2) {
      $('#discogscout2_' + state + scout_tick).append(link);
    } else if (site['bar'] == 3) {
      $('#discogscout3_' + state + scout_tick).append(link);
    }
  }

  // Create elements on Release/Master pages.
  if (onReleasePage) {
    //const bar_height = (parseInt(GM_config.get('mod_icons_size')) +6) +"px";
    const background = GM_config.get('greybackground_view') ? 'rgb(51, 51, 51)' : '';
    if ($('.result_box_main').length == 0) {
      $(elem).after($('<div/>').addClass('result_box_main'));
      $('.result_box_main').css({'background-color': background, 'padding': '4px 4px 0px 4px'});
    }
    if (site['bar'] == 1) {
      if ($('.result_bar_1st').length == 0) {
        $('.result_box_main').append($('<div/>').addClass('result_bar_1st'));
        //$('.result_bar_1st').css({'height': bar_height});
        $.each(valid_states, function(i, name) {
          $('.result_bar_1st').append("<span id='discogscout1_" + name + "'>"+'</span>');
        });
      }
    }
    if (site['bar'] == 2) {
      if ($('.result_bar_2nd').length == 0) {
        $('.result_box_main').append($('<div/>').addClass('result_bar_2nd'));
        //$('.result_bar_2nd').css({'height': bar_height});
        $.each(valid_states, function(i, name) {
          $('.result_bar_2nd').append("<span id='discogscout2_" + name + "'>"+'</span>');
        });
      }
    }
    if (site['bar'] == 3) {
      if ($('.result_bar_3rd').length == 0) {
        $('.result_box_main').append($('<div/>').addClass('result_bar_3rd'));
        //$('.result_bar_3rd').css({'height': bar_height});
        $.each(valid_states, function(i, name) {
          $('.result_bar_3rd').append("<span id='discogscout3_" + name + "'>"+'</span>');
        });
      }
    }
    // Add links to elements on Release/Master pages.
    if (site['bar'] == 1) {
      $('#discogscout1_' + state).append(link);
    } else if (site['bar'] == 2) {
      $('#discogscout2_' + state).append(link);
    } else if (site['bar'] == 3) {
      $('#discogscout3_' + state).append(link);
    }
  }
}

//==============================================================================
//    Determine whether a site should be displayed
//==============================================================================

async function maybeAddLink(elem, site_name, search_url, site, scout_tick, band, release) {
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
//    Perform code for sites
//==============================================================================

function perform(elem, band, release, scout_tick) {
  let site_shown = false;
  $.each(icon_sites, async function(index, site) {
    if (site['show']) {
      site_shown = true;
      var searchUrl = await replaceSearchUrlParams(site, band, release, true);
      addLink(elem, site['name'], searchUrl, site, 'found', scout_tick);
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
//   const band    = title.replace(/ - .+/, '').replace(/\(\d+\)/, '').trim();
//   const release = title.replace(/.+? - /, '').trim();

  let band, release;
  if (Boolean(location.href.match('/master/'))) {
    band    = $('#profile_title').find('a').text().replace(/\(\d+\)/, '').trim();
    release = $('#profile_title').children().last().text().trim();
  } else if (Boolean(location.href.match('/release/'))) {
    band    = $('[class^=body]').find('h1>span>a.link_1ctor:first').text().replace(/\(\d+\)/, '').trim();
    release = JSON.parse(document.getElementById('release_schema').textContent)['name'];
  }
  perform(elem, band, release);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


//============================================================================//
//================================  MAIN  ====================================//
//============================================================================//


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
  'run_artistpages': {
    'type': 'checkbox',
    'label': 'Enable the script on Artist pages?',
    'default': false
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
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
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
          #discogs_scout_section_header_4 { \
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
        var url = new URL(icon_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(icon_sites[index], true));
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
      $('#discogs_scout').contents().find('#discogs_scout_section_4').find('.field_label').each(function(index, label) {
        var url = new URL(other_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(other_sites[index], true));
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

// Are we on an artist page?
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
//    Stuff for /release/ pages (to start after reflow)
//==============================================================================

function startObserver() {
  if ($('[class^=body]').length) {
    addDummyElem();
    const obscfg = {childList: true};
    const obs = new MutationObserver(checkDummyElem);
    obs.observe($('[class^=body]')[0], obscfg);
  } else {
    console.log("Discogs Scout (Start Error): Element not found! Please report it.");
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
  if (onArtistPage && GM_config.get('run_artistpages')) {
    console.log("Discogs Scout: Starting an artist page.")
    performArtist();
  } else if (onReleasePage) {
    console.log("Discogs Scout: Starting a release page.")
    performRelease();
  }
}

if (Boolean(location.href.match('/release/'))) {
  document.addEventListener('DOMContentLoaded', startObserver);
} else {
  document.addEventListener('DOMContentLoaded', startDiscogsScout);
}
