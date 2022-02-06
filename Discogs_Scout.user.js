// ==UserScript==
//
// @name         Discogs Scout
// @version      1.2
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
  {   'name': 'Bandcamp',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEUAAAAdoMMdoMMdoMMdoMMdoMMdoMMdocQdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMMdoMO469wmAAAAGHRSTlMAA/xhZVUSCM/D8uba2K6bkodyW0xDMiMrDxECAAAAnUlEQVQ4y82SOQ7FIAwFCUuA7Ht8/5N+S4ls6fOaKE2moRgxkg3mW1SQJ4HgXYFfRZuNLP1jadJCIltAXS0BBwNe7seebOlTlMACA4HNRd0S8FlHmMsAs7O5/NmgwHB7PkYUsIcEDqRp1MCAAs0pgR2OOLO5ySjQ6pIDDCwSiAktuY/yCh4GnC65Q8+cjTDBJW86woo+Wqjef/ZP8QPdwiBy+gWrIwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://bandcamp.com/search?q=%band%+%release%',
      'bar': 1},
  {   'name': 'Beatport',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAGFBMVEUAAAAB/5UB7YsAe0gBoV4ASywAIBMBxHNCtoKSAAABAElEQVQ4y+2SPwvCMBDFC2r3V4XOin9WNYOrFamriHUuqLhai/38Xqo54ZJ0Fuob2sLr7/LuLkEbdNxu0wY7ASZ/+6fsotHuDYGp3+4CuPvtA9nzxtpR7rWXBPfDTKnM9U+HYDxXukSZu+Foh1qlG47wUeqCvxqI8heQRoAbDxMAcUGPcZZtdAs2XA6p6p4GkMgB1PDZTO2iP2Sw6qYjmaMq0VacH3if/MU4ZV3wwm4yW2+ca3ttVivs4BSQbQJ1pE3y02xX9tksb3Jm4nffhejbBEJqTY0VmpkTHNHbkQ0zpR68MWvpvutiImmZiBYuYKmVuKmyvLznUlelTkEL9AK5yTckC7iHmgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.beatport.com/search?q=%band%+%release%',
      'bar': 1},
  {   'name': 'Decks',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAilBMVEUAAABVVVVSUlJZWVlXV1dhYWFbW1tfX19dXV0PDw9EREQ1NTUEBAQGBgYcHBwTExNNTU04ODhjY2NPT088PDwpKSkgICAMDAx9fX1wcHBJSUkwMDAmJiYiIiIXFxeSkpKJiYl2dnZLS0tAQEA+Pj4aGhrFxcWkpKSbm5uHh4dpaWnNzc2goKCTk5M0fYJwAAAAAXRSTlMAQObYZgAAAXVJREFUOMtl09eCgyAQBVAYVBDUaOyJpvfd/f/fWye0GOf1XC9FJX7S+lwyzlleDSlZzkryMOTTCCEiVsVfnFQhDjoGooipZPY4Db8DLP8o2Ym1dW58Gli559EXgSAA05HQmftAsNH7qLT7Aheg6r0A2qJAByguIq0vCygtpvvjzpcFFFJSo7JtnLQ1lLIYN30XousAbch5cmj1cYbg/nP77f/WtoCCIhCGQjuJg9shisJH/3AFIEnEeWUvbHxFOIeuN06hJNPWRhPIsva9w6c8WAfAQOYCKTrrmr1ZAANMiNq+s0ahs6PsXEFOciFyE2izO5/8BUdmHSS5CCG2toLu988jXNauABQZ8O6KFK+hGXZZdr2qwDs0JGV4skAWF8pORX2tz5sPL6cnqwiH6QlwvIPC+zPm2bv+pgrLS9e7T/I5e5eJeUmAtvRT7D5rMDz3FXET49HmDDKe/Xrqi2Fr1vclBXgvVUyWk45KlgC5VE1K3PwDpGkX801HuPEAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.decks.de/decks/workfloor/search_db.php?such=%band%+%release%&wosuch=all&wassuch=atl&where=',
      'bar': 1},
  {   'name': 'Deejay',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAAAwMDD///8ZGRkZGRkaGhobGxsrKysvLy8dHR0eHh4fHx8gICAoKCgxMTFeXl5paWn///8YGBgZGRknJycqKir///8YGBj6phobGhibahlyUBmQYxmCWxl7VhlNHk6zAAAAF3RSTlMAfwb07OXdjILTy8K8lXxBOgP58JyQCX9zfsoAAAB5SURBVBjTTY9XEsMgDERXFBuXuKQp2Enuf0xbiMG8H94ugwZBMK/O+YFmZG6sWDIQGi60q95fEPDmmseCZ5K4fWOSoBPi5yQ1I6wcmxQ/MQ9Xir+Yw1CesNAh6NB9zz/BfOcaA1Cdg2zWXrnXXcnmPCGz0Nj4flrFDxy7ERm/Z/oDAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.deejay.de/%band%+%release%',
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
  {   'name': 'Last.fm',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAC5AAD6+fnDJibSYWHtycn15+fglpbOL1ALAAAAAXRSTlMAQObYZgAAAJtJREFUKM9jYGAURAICMD5CBFNAEA3QT0C4VC0ERKoWQwXMlJSUkgWNlJTUDCECSSrCTqqCQcEiSoVgARElRxBOKhR0gagQVwKpCgxKMYQaKqoKpIuUnZTUipEEnFSEy5TUkLSIAUXNkQwVFgcSgkGBYAHhJBVjN+ckdUMTqApBN6DDCs2UYA4DOxrodNegVJAtAxSEhOMWIzkAAPkjMgYRFB9BAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.last.fm/search?q=%band%+%release%',
      'bar': 1},
  {   'name': 'MusicBrainz',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://musicbrainz.org/search?query="%release%"+AND+artist:"%band%"&type=release_group&limit=25&method=advanced',
      'bar': 1},
  {   'name': 'RYM',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://rateyourmusic.com/search?searchterm=%band%+%release%',
      'bar': 1},
  {   'name': 'SoundCloud',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEX/IwD/////dgD/dAD/cAD/JgD/NAD/MAD/ZQD/XwD/bQD/KgD/LAD/aQD/KAD/QwD/WQD/PAD/VAD/TwD/SgD/+/r/4dr/+Pb/5dv/59r/2cz/3cr/1Lv/dU//hUv/8ej/2MD/xLX/uYj/o2L/m2L/chQ3aOvQAAAA2ElEQVQ4y83KyXaDMAwF0KdQBhfq4AJlyND5/3+x78gcG9KFN1nkSjqyLOGQcIeDzPfskDG1U3zzICF98JSQPnhOwMuNr+H9/L2ZUd0YhE6/YUZlTGUqpvbZiPrg6P9hgpklRrwfs0IbSDuzxDu3K7yqiSU+VuPpqht0SrqJpRFdO0JPUy8xoqUnHEm2EY1HgvMHzsfuYOHKwdHkJEZ0cYRCvYX4FBloHJeLbsAqi5JZRNs/lAlovLqpmc1/qPdsbZmbN3Jrc5srPkhn5tqRJyAHc9cDnR/BH8VZGrE9ue1uAAAAAElFTkSuQmCC',
      'searchUrl': 'https://soundcloud.com/search/albums?q=%band%+%release%',
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
  {   'name': 'DW',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://forum.dirtywarez.com/search/search?keywords=%band%+%release%&title_only=1&nodes[]=103',
      'loggedOutRegex': /Cloudflare|Ray ID|You must be logged/,
      'matchRegex': /No results found/,
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
  {   'name': 'NNM',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://nnmclub.to/forum/tracker.php?nm=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': 'Не найдено',
      'bar': 2},
  {   'name': 'NNM-Discography',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://nnmclub.to/forum/tracker.php?nm=%band%+Дискография',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': 'Не найдено',
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
  {   'name': 'SunXDCC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3BAMAAABa9c91AAAAMFBMVEX872/860765if88pj79seKhVpeW0HQxVbp3m/p2USvp2PYxR0nJh25qR+/u4/a05ThAYZPAAAEMUlEQVQ4y02UP2gTURzH35HlnLx3iz1cem+REgoHL0Nx0CHnaqYXodC6mAzSQQW5XkSNRMjZwZou8SyOIXhiqFlEjqydiohQipabail0OIUGDA6J398lil+Sy5/PfX/3/d1792NCiLzg+cGBbRgGY1rYMjlkClvMA5Iu7q/4LWYYnIcgls1tIQDzfXxyK3nn+wbTvNC7a2iXtjjHn/Ns8VBw2+bWh7ctxi50vegu09rvCZpwJl9sLgwr9F4w1vQ8r860VssApGsOEluEXDPm6oyxQA9wxGU1U4gdJhYTwTlyshxjet1xWCaN88XPTOQHh5xQjgUNJqV0IMaMf7BFlDmbwa+TgEnyGhrTUNYWsee3DKbXVJVUWW6gKCjnCGQufPjQrusdgDUIuFvPvAhiczP0X15QZaAprCp1hwIDChzDVx3UBKiUq3uwqk63GXJrHtCwatG+qlRvNySpU6moFbXyJrR24G97394pBXS8tra7e3vobCillrvB1gvGrZdetL9ykDtd28tUvXm2dF+pA98i2PZq3cZGuVqdwt1q5cjZ2O8G6I/Ptdv1ZgdsdwqRV3UdHcsAyLle63TQym5mrWS93PjJCFKgKAJbLUwI3pqcltVyFHnBE8CF0IOz99R13Qy6w9KxinreOkGr6UWPpSwCUt5hyS0WL0ddb4T9ZraeIe1ZkeC1vb1PLul31D2hVc/fC7xapH4UXKg0pGPx93J0sk6BXvtzTUqkjtyZrisEOnIYNHiDfVXrKFWt9NIfaZqqikIeMOjSRxzkb6XK5WqmChYlOpI6wqJPgjJVqjJjVFVKugkZzMncZDjOvOWyUqtRJKe7kBuAufNnQ8Qdj8fuNaXcXk+CaXAybGeZk3KW9VjddKMfcil4cuEONijTA+nIwr8+XLd34ujNZ7XPcDIjaOD2yZlx1S310tFSs/kQiw0rwUKBvKXV1e/fx+njoB5YPqXFDW7IArxkPE5LkyuPJ2cSeQDxZo4kVnSvp+lw6F6ZjHIMAkSjkIS3UDo9/V4qycmo7rCsFdsMOXUqoXGauljN0aP15sk6t/+Hxeco6spicTIaBdgn4TzjYgGnOJLJqxPkQEsyCPTmxruD+AWzFxKfM+j85uamLBZA6zpjYdd/sMPMwcpXPJ3rgbO0KWeiNNzGNBHJt48Gm/MCNgUOvYji+QRMDlrYgvUckRwImPb3+RwkyXuOxOh76stWi4exAMwnMZw0a/A33nRzYNx+0Cd4+NHWDAoMM02Dc08QR2yLqbNvmxxwKn2ubWB+bW/HNN7iJO6b2RAjaW3vLr6bW3kBiLIJEISMUNu3pmPRzmByiLIGx2ykVbI4dHGrL0yCi8khJrnNDQ1eqs45rvjFFjNnn8Z8JitEDTOMKQZBEcMJ2aZt4EnGWcjYF6i2QzDGmM/HYkGg9Xhb4AdBOP8AngHilO+e6QkAAAAASUVORK5CYII=',
      'searchUrl': 'https://sunxdcc.com/deliver.php?sterm=%band% %release%',
      'goToUrl': 'https://sunxdcc.com/?sterm=%band% %release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /botrec":\[]/,
      'spaceEncode': ' ',
      'bar': 2},
  {   'name': 'TGx',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://torrentgalaxy.to/torrents.php?c22=1&c26=1&c23=1&c25=1&c24=1&search=%band%+%release%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'bar': 2},
  {   'name': 'TPB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%band%+%release%&cat=101,104',
      'goToUrl': 'https://thepiratebay.org/search.php?q=%band%+%release%&cat=101,104',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/,
      'bar': 2},
  {   'name': 'TPB-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%band%+%release%&cat=101,104',
      'goToUrl': 'https://tpb.cnp.cx/search.php?q=%band%+%release%&cat=101,104',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/,
      'bar': 2},
  {   'name': 'XDCC',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www.xdcc.eu/search.php?searchkey=%band%+%release%',
      'matchRegex': /No result found/,
      'bar': 2}
];

var private_sites = [
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
    if (site['bar'] == 1 || GM_config.get('all_in_one_bar')) {
      $('#discogscout1_' + state + scout_tick).append(link);
    } else if (site['bar'] == 2) {
      $('#discogscout2_' + state + scout_tick).append(link);
    } else if (site['bar'] == 3) {
      $('#discogscout3_' + state + scout_tick).append(link);
    }
  }

  // Create elements on Release/Master pages.
  if (onReleasePage) {
    const background = GM_config.get('greybackground_view') ? 'rgb(51, 51, 51)' : '';
    if ($('.result_box_main').length == 0) {
      $(elem).after($('<div/>').addClass('result_box_main'));
      $('.result_box_main').css({'background-color': background, 'padding': '4px 4px 0px 4px'});
    }
    if (site['bar'] == 1) {
      if ($('.result_bar_1st').length == 0) {
        $('.result_box_main').append($('<div/>').addClass('result_bar_1st'));
        $.each(valid_states, function(i, name) {
          $('.result_bar_1st').append("<span id='discogscout1_" + name + "'>"+'</span>');
        });
      }
    }
    if (site['bar'] == 2) {
      if ($('.result_bar_2nd').length == 0) {
        $('.result_box_main').append($('<div/>').addClass('result_bar_2nd'));
        $.each(valid_states, function(i, name) {
          $('.result_bar_2nd').append("<span id='discogscout2_" + name + "'>"+'</span>');
        });
      }
    }
    if (site['bar'] == 3) {
      if ($('.result_bar_3rd').length == 0) {
        $('.result_box_main').append($('<div/>').addClass('result_bar_3rd'));
        $.each(valid_states, function(i, name) {
          $('.result_bar_3rd').append("<span id='discogscout3_" + name + "'>"+'</span>');
        });
      }
    }
    // Add links to elements on Release/Master pages.
    if (site['bar'] == 1 || GM_config.get('all_in_one_bar')) {
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
  'all_in_one_bar': {
    'type': 'checkbox',
    'label': 'Put all links into one bar?',
    'default': false
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
