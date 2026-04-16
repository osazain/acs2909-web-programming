# User Testing

## Validation Surface

This mission involves content parity validation. The primary surface is manual code review and content verification.

## Validation Approach

1. **Inventory Validation** - Verify all slide files are enumerated correctly
2. **Gap Analysis Review** - Review gap analysis for completeness and accuracy
3. **Content Coverage** - Spot-check that new content matches expected format and covers topics
4. **Git Sync Verification** - Verify push succeeded and GitHub Actions triggered

## Tool Usage

- `Grep` - Search for topic coverage in question bank and lecture content
- `Read` - Verify content format and completeness
- `Glob` - List files to verify inventory

## Resource Cost Classification

- **Low cost** - File reading and searching operations
- No browser automation needed (static content verification)
- No service startup required (local file operations)
