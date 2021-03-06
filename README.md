Professor Ratigan
=================

Instruction and exploration into the Page Visibility API and how it can be
used inside OBS Studio.

Goals:

* Have a series of pages that can reliably mark whether a page is visible or
  not. This is harder than it seems due to the light-in-the-fridge effect.
* Test these pages in multiple browsers on multiple operating systems, and see
  if there are any inconsistencies. (There will be. Undoubtedly.)
* Test the pages inside OBS Studio on multiple OSes and see if there are the
  same inconsistencies, or different ones.

Results
-------

Chrome 80 and Firefox 68 on Debian Linux

* Chrome, basic: Page goes hidden if another tab selected, but stays visible if
  the entire window is hidden. Never saw 'preloading' even if page opened in
  a background tab. Page is deemed "hidden" if the entire window is minimized.
* Chrome, audio: Exactly as per basic. Playing audio may prevent throttling,
  but does not affect hidden status.
* Chrome, ComfyJS: Exactly as per basic. Same.
* Firefox: No differences seen compared to Chrome.

Edge 44, Chrome 81, and Firefox 75 on Win 10. Using the same baseline. Not
testing for the preloading state because 4GB RAM in a Win 10 VM is tedious.

* Chrome: Matched baseline.
* Firefox: Matched baseline.
* Edge: Matched baseline.

OBS

* OBS v25 on Debian with OBS-LinuxBrowser: No visibility events, and no support
  for scripts type=module. Will look into this.
* OBS v25 on Win 10 with built-in Browser: Visibility events behave correctly.
  Not all forms tested but scene switching DOES mark the page as hidden.
* OBS v25 on Debian with built-in Browser: Visibility events behave correctly,
  as per the Win 10 test (surprise surprise). Font issues with CEF 3770 but
  everything works in CEF 3809 (or hack in another setting in the plugin).
