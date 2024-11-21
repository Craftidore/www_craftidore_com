# Research

## What is the Richter Scale

"[The Richter Scale] is a base-10 logarithmic scale."

<https://web.archive.org/web/20210803200647/https://www.gns.cri.nz/Home/Learning/Science-Topics/Earthquakes/Monitoring-Earthquakes/Other-earthquake-questions/What-is-the-Richter-Magnitude-Scale>

## Gnome's Human Interface Guidelines v2.2.3 - Responsiveness

> Highly responsive applications put users in control by quickly acknowledging each user request, by providing continuous feedback about progress toward fulfilling each request, and by letting users complete tasks without unacceptable delays.
> 
> <cite>Characteristics of Responsive Applications, GNOME HIG book, 2.2.3</cite>

<https://web.archive.org/web/20180514184330/https://developer.gnome.org/hig-book/3.12/feedback-responsiveness.html.en>

### Acceptable Response Times

Maximum delays:

- 0.1 for anything involving hand-eye coordination
- 1.0 for displaying progress indicators/ordinary commands/background tasks
- 10.0 for displaying info that takes time to collect
- 10.0 for processing all user input (working through the queue)

<https://web.archive.org/web/20190322144522/https://developer.gnome.org/hig-book/3.12/feedback-response-times.html.en>

### Responding to User Requests

> Discard unnecessary operations. For example, to move back several pages in a web browser, a user might click the browser's Back button several times in rapid succession. To display the final requested page more quickly, the browser might not display the pages visited between the current page and that final page.

<https://web.archive.org/web/20180514183724/https://developer.gnome.org/hig-book/3.12/feedback-responding-to-user.html.en>

### Feedback Types

Checklist Windows: A form of feedback not discussed in the book. A fancy kind of progress bar.

<https://web.archive.org/web/20180623235535/https://developer.gnome.org/hig-book/3.12/feedback-types.html.en>

## Adaptive Graphics / Dynamic Resolution

When Games change resolution/textures/shadows/lighting etc on the fly to match hardware capabilities.

<https://www.howtogeek.com/764408/what-is-dynamic-resolution-scaling-drs/>

## Mouse Latency

[joltfly.com](<https://joltfly.com>) provides a mouse latency test.

"On a Windows computer, the expected latency for a mouse is 8ms, while trackpads on notebook computers usually have a latency of 10-12 ms."

Our book claims mouse cursor only need to be responsive up to 0.1 seconds;
I find this surprising; I definitely think I'd notice that input lag.

<https://joltfly.com/mouse-latency-test/>

## RDP + Mice Stuff

Haven't found a source yet...
May need to drop this one.

## Issues with seeking Responsiveness?

Seems relevant, not sure where/if we want to include this, as its only tangentially related.

Example: Wayland + Xorg (XWayland) window resizing.

See: <https://www.youtube.com/watch?v=8G9zX8CkGTY>

## Frame Generation

<!-- TODO: Research Frame Generation -->

## Pipeline -- Sometimes meeting minimum responsiveness reqs isn't enough

Subpage loading indicator vs caching.

## Expensiveness of Document Layout

<https://www.youtube.com/watch?v=kzdugwr4Fgk>

## Quotes from Book

> Software should display a busy indicator for any function that blocks further user
> actions while it is executing, even if the function normally executes quickly (e.g., in
> less than 0.1 second). 

Page 249

## GUI Examples and Bloopers

- Load large image in web browser: show both blurry and loaded partially
