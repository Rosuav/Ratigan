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

* Chrome, basic: Page goes hidden if another tab selected, but stays visible if
  the entire window is hidden. Never saw 'preloading' even if page opened in
  a background tab.
* Chrome, audio: Exactly as per basic. Playing audio may prevent throttling,
  but does not affect hidden status.
* Chrome, ComfyJS: Exactly as per basic. Same.
* Firefox: No differences seen compared to Chrome.
