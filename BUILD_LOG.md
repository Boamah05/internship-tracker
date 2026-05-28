Task 1 - Initialize repo and create CLAUDE.md

* Brief:
    Set up the capstone repository structure and create a CLAUDE.md file defining project goals, conventions, and AI constraints.

* What Claude proposed:
    Claude suggested a detailed CLAUDE.md with project context, coding standards, and restrictions around dependencies and testing.

* What I changed before approving:
    I simplified the instructions and added stricter rules about avoiding unnecessary dependencies and keeping components small.

* Verification:
    Initialized the repo, committed CLAUDE.md, and confirmed files appeared correctly on GitHub.

* One thing I learned:
    The quality of later AI outputs improves significantly when CLAUDE.md is specific and opinionated.

---

Task 2 - Scaffold React app with Vite and Tailwind

* Brief:
    Create the frontend project using React, TypeScript, Vite, and Tailwind CSS.

* What Claude proposed:
    Claude generated the setup steps and configured Tailwind integration automatically.

* What I changed before approving:
    I removed unnecessary starter files and simplified the default styling setup.

* Verification:
    Ran npm install and npm run dev successfully and confirmed the starter app loaded in the browser.

* One thing I learned:
    AI tools are very strong at project scaffolding but tend to leave behind unused boilerplate code.

---

Task 3 - Create application data model and mock data

* Brief:
    Define the internship application data structure and add mock data for development.

* What Claude proposed:
    Claude suggested a TypeScript interface with fields for company name, role, status, notes, and application date.

* What I changed before approving:
    I reduced the number of fields to keep the MVP smaller and easier to manage.

* Verification:
    Rendered the mock data in the browser and confirmed all fields displayed correctly.

* One thing I learned:
    Claude often designs for future scalability even when a smaller MVP is more practical.

---

Task 4 - Build application list UI

* Brief:
    Create a responsive UI for displaying internship applications.

* What Claude proposed:
    Claude built reusable card components and a responsive grid layout.

* What I changed before approving:
    I simplified some component nesting and adjusted spacing for readability.

* Verification:
    Ran the app locally and confirmed applications rendered correctly across different screen sizes.

* One thing I learned:
    Reviewing AI-generated UI structure is important because unnecessary abstraction can make small projects harder to maintain.

---

Task 5 - Add application form functionality

* Brief:
    Implement a form that allows users to add new internship applications.

* What Claude proposed:
    Claude created a controlled React form with validation and state management.

* What I changed before approving:
    I simplified the validation logic and improved placeholder text for usability.

* Verification:
    Added multiple test applications manually and confirmed they appeared immediately in the UI.

* One thing I learned:
    Clear acceptance criteria helped Claude generate cleaner form logic with fewer unnecessary features.

---

Task 6 - Add filtering and local storage persistence

* Brief:
    Allow users to filter applications by status and persist data using local storage.

* What Claude proposed:
    Claude implemented filtering logic and synchronized application data with browser local storage.

* What I changed before approving:
    I simplified the filter state handling and added fallback logic for missing local storage values.

* Verification:
    Tested filtering across multiple statuses and refreshed the page to confirm persistence worked correctly.

* One thing I learned:
    Claude can implement functional features quickly, but manual testing is still necessary to catch edge cases and state issues.

AI Workflow

For the planning workflow, I relied on ChatGPT and Claude chat to break features down into small implementable units and think about edge cases before writing code. This was particularly useful when determining the component hierarchy and defining acceptance criteria.

For the implementation workflow, I leveraged Claude Code because it was much more adept at understanding context and making multi-file changes coherently. This was demonstrated to be superior to Claude chat when working with react components, localStorage, and tests due to its ability to directly "read" the repository.

For the polishing workflow, I used GitHub Copilot within VS Code to address small cleanups such as renaming variables, fixing small formatting inconsistencies, and writing small utility logic. This saved a lot of time over opening a full agent workflow for small code changes.

One time that I switched contexts between workflow types was while writing the tests. My first draft in Claude chat included an unnecessarily complex test suite and I rewrote the tests in Claude Code, explicitly outlining a more concise test suite that strictly focused on core application logic.