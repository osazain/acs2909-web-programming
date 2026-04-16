# Course Timeline Parsing

## Course Timeline Iframe Structure

The Course Timeline HTML file (`slides/New/Course Timeline - Internet Programming.html`) has its actual content embedded via an **iframe** element.

**Discovery (2026-04-15 by parse-course-timeline worker):**
- The iframe `src` attribute points to `'Course Timeline (Thursday - 052).html'` in a subfolder
- The iframe content is what contains the actual week-by-week schedule with topics, assignments, and exams
- Simply reading the outer HTML file won't show the course content - need to extract the iframe's source and parse that instead

**Impact:** Workers parsing the Course Timeline for week topics need to:
1. Find the iframe element in the HTML
2. Extract the `src` attribute
3. Load and parse that referenced file for actual content

**Files affected:**
- `slides/New/Course Timeline - Internet Programming.html`

**Reference:** This discovery came from parse-course-timeline feature (commit 48f644e) during gap-analysis workflow.
