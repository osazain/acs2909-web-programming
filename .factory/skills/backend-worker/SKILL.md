---
name: backend-worker
description: Content parity worker - syncs course material to study platform
---

# Backend Worker

NOTE: Startup and cleanup are handled by `worker-base`. This skill defines the WORK PROCEDURE.

## When to Use This Skill

Features involving file content analysis, gap analysis, content addition to quiz banks, and Git operations.

## Required Skills

None for this mission (content parity work doesn't require specialized testing tools).

## Work Procedure

### For inventory features:
1. Use `Glob` tool to list files in `slides/` and `slides/New/` directories
2. Filter to root-level only (exclude `_files` subdirectories)
3. Extract clean topic names from filenames (remove `.html`, clean underscores, etc.)
4. Create structured inventory (can be a simple JSON or text file for tracking)
5. Use `Read` tool to parse Course Timeline HTML for topic extraction
6. Cross-reference with existing platform content using `Grep` and `Read` tools

### For gap analysis:
1. Read existing `mega-question-bank.js` to get current categories and topics
2. Read existing `lecture-content.html` to get current lecture topics
3. Compare against slide inventory and Course Timeline topics
4. Document what exists, what's missing

### For content addition:
1. Read `mega-question-bank.js` format and continue the pattern
2. Add questions for missing topics following existing format
3. Ensure IDs continue sequentially
4. Use `Edit` tool to add content to existing files

### For Git operations:
1. Run `git status` to see changes
2. Run `git add .` to stage changes
3. Run `git commit -m "message"` to commit
4. Run `git push` to push to remote

### Verification:
1. Verify file changes with `git diff`
2. Verify push success with git output
3. Document all changes made

## Example Handoff

```json
{
  "salientSummary": "Completed inventory of slides folders: 53 files in slides/, 19 in slides/New/. Identified 12 missing topic categories from Course Timeline.",
  "whatWasImplemented": "Created structured inventory of all slide files, parsed Course Timeline to extract week-by-week topics, performed gap analysis comparing source material against platform content.",
  "whatWasLeftUndone": "Content addition not started - pending gap analysis approval",
  "verification": {
    "commandsRun": [
      {"command": "git status", "exitCode": 0, "observation": "Working tree clean before changes"}
    ],
    "interactiveChecks": []
  },
  "tests": { "added": [] },
  "discoveredIssues": []
}
```

## When to Return to Orchestrator

- Gap analysis reveals significantly different picture than expected
- Missing content volume is much larger than anticipated
- Git push fails and needs manual intervention
