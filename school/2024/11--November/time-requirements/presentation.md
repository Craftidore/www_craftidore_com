# Ty Bates and Elliot Hodge Presentation

# Where We're Splitting Up

- Ty: Intro -> Important Deadlines
- Elliot: Orders of Magnitude -> Guidelines on Desktop + Gnome
- Ty: Designing to meet... -> Wow + Chromium
- Elliot: Jellyfin + Q2 -> Project 1 example
- Ty: When can we delay -> End

# Presentation

## Responsiveness vs Performance

- Performance is how fast your app runs.
- Good performance might let your app transfer a few hundred files in 10 seconds
- Good responsiveness in this case would involve communicating to the user
    - Yes, I acknowledge that you asked me to transfer files between two folders
    - How long they should expect to wait
    - That yes, files are still being transfered
- Responsiveness matters more to user experience than performance;
    even if the responsive app took 5 times as long to transfer the files, a whole 50 seconds,
    the users are likely to be far less annoyed with it and have a better user experience.
- (Ideally you want to be both responsive and performant)
- Example: Customer service (Ty take over)
    - Restaurant example
- Design issue, not an implementation issue
- The main thing that makes a system responsive is whether it keeps users informed of its status and progress

> [!question]
> 
> What are some examples of unresponsive websites or applications you have used?

## Order of Magnitude

- When thinking about time responsiveness, we really only care about the order of mangitude of any given delay
- Order of Magnitude used to define a significant change
- Example: Earthquakes
    - Only a significant change when order of magnitude changes; seen in Richter scale
- When making one's app responsive, we usually only care in which order of magnitude an operation takes

## Important Deadlines

### <0.1 sec

- Auditory gaps can be detected even at incredibly short intervals
    - 0.001 second long gaps in playing audio can be noticed and will bother users
    - 0.01 seconds for auditory tone recognition
- Hand-eye coordination requires very quick feedback
    - 0.01 second long gaps are noticable
    - The book lists "digital ink lag" as a concern
    - Tangent: Mouse Movements
        - Jeff Johnson claims mice only need to have an updated position every tenth of a second (page 245); more isn't needed for hand-eye coordination
        - Joltify.com, a site which provides a mouse latency test, mentions mouse latency usually varies from 0.008 to 0.012, well below that threshold.
        - Video games often run at either 30fps or 60fps, which means processing mouse movements every 0.033 or 0.0166 seconds.
        - Side tangent about DLSS 3.0 & frame generation?

### 0.1 sec

Things having to do with cause-and-effect

Things we notice:

- I expect a reaction to stimulus within this time
    - Still system 1, not 2, so within this range it matters less whether the responsive reaction can be understood (read/etc), but we are expecting stimulus <!-- WARN: Not loving this wording -->
- Recognition of number of items (less than 4) (subitizing)
- Should display busy indicators for operations taking longer than 1 perceptual moment (.01 seconds)

Things not noticed:

- Audiovisual lock: We don't notice sync issues between audio and video within 0.1 second
- Vision Suppression due to saccades: Have no visual input for a full 0.1 second while eye is moving
    - Undetectable gaps in vision (video feed gets stitched together) <!-- TODO: Research a bit more; have more solid understanding -->
    - <!-- TODO: Video demonstration? Or in-person mirror -->

### 1 sec

- Things regarding to the same topic/goal
    - Maximum gap expected in conversation; we expect to need to say (or in this case, do) something if more than this time has passed
- should display progress indicators for anything longer than this
- TODO: FINISH 1 sec

### 10 sec

- Short term memory lasts ~ this long if not "refreshed"
    - Refreshing short-term memory 
        - is a system 2 operation <!--TODO: Fact check-->
        - Is expensive and inconvenient, and can lead to other things leaving short-term memory
- Individual steps shouldn't take longer than this
    - Example from Book: Wizards 
    - Filling out form fields
    - Example: Windows Printing Dialog
        - If you need to change any settings, locating and changing those settings should be a sub-10-second operation.

## Guidelines on the Desktop

- Gnome is a "Desktop Environment" for Linux and BSD
    - DE: A set of applications for providing a graphical frontend to the operating system,
        from a file explorer to disk manager to pdf viewer, clock, and calculator;
        everything required to make a computer actually usable
    - Could coble together individual pieces... but a DE provides consistency (screenshots of Gnome?)
- Let's examine Gnome's guidelines for how apps are to behave and look at their time requirements

- Delays:
    - 0.1 sec: lines up with book
    - 1.0 sec: lines up with book; show a progress bar!
    - 10.0 sec: Be done processing input queue!
- User Requests
    - Gnome Guidelines state
        > Discard unnecessary operations. For example, to move back several pages in a web browser, a user might click the browser's Back button several times in rapid succession. To display the final requested page more quickly, the browser might not display the pages visited between the current page and that final page.
- Feedback: Checklist Window
    - Not referenced in book, but another kind of progress bar (show picture)



## Designing To Meet Real-Time Human-Interaction Deadlines

- Acknowledge user actions instantly even if returning the answer will take time; preserve users’ perceptions of cause and effect.
- Free users to do other things while waiting for a function to finish.
    - Continue in a web browser while downloading a file in Windows 
- Animate movement smoothly and clearly.
    - Target framerate at 20 fps 
    <!-- stick figure framerate fight: https://www.youtube.com/watch?v=jBx3vZLZJRc -->
- Allow users to abort (cancel) lengthy operations they don’t want.
    - First project using root folder

## When Can We Delay?

- Use Busy Indicators when necessary
    - If busy indidcator has an animation, tie the animation to the process being waited on,
        so if that process becomes blocked, the busy indicator will itself freeze.
- <!-- TODO: What is a unit task? -->
- "Delays between unit tasks are less bothersome than delays within unit tasks"
    - **QUESTION**: Can anyone think of an example of when you've been interrupted mid-unit-task?
    - <!-- TODO: Discuss this in greater depth -->
    - Modal Dialogs! These can be annoying when overused, but especially in-between unit-tasks
    - Windows Error Noise
- Showing important information first
    - Document Editing Software (Word will show first page before all is loaded)
        - Terrinoth PDF example with pdf.js <!-- TODO: Record GIF of Terrinoth being partially loaded -->
    - "This approach buys at least 1 more second for the system to catch up before the user tries to do anything." (Page 251)
    - Counter example: React/heavy frontend web frameworks. However, SSR (Server Side Rendering & Hydration) can fix this.
- Aborting operations (web page back button example)
    - Cite Gnome's guidelines

<!-- Busy indicator examples: https://uxdesign.cc/loading-progress-indicators-ui-components-series-f4b1fc35339a -->

## Guidelines for Progress Indicators

"[Progress indidcators] greatly increase the perceived responsiveness of an application even though they don’t shorten the time to complete operations."

Guidelines:

- Work remaining
- Total progress, not just current step progress
- Show percentage of operation
    - start at 1%
- Never display 100% for very long
    - More than 1-2 seconds at 100% worries users
- Linear progress, not erratic jumps
    - Counterargument: Many things can't be broken up better than that
- "Use human-scale precision" / Don't be too fine-grained
    - About 4 minutes better than 240 seconds
    - Can say "4 minutes" for a couple minutes before worry kicks in
    - Can say "240 seconds" for about 10 seconds before I get worried
<!-- visual examples of good and bad progress indicators -->
<!-- https://www.nngroup.com/articles/progress-indicators/ -->

<!-- Amazing example of horrible website for possible demo: https://userinyerface.com/index.html -->
<!-- https://www.steinmetz-reuter.de/ -->
<!-- https://wwe2.glitch.me/app.html -->

