# Playwright tests for https://demoqa.com website

# Quick Start

### Install Dependencies

`npm i`

### Install browsers

`npx playwright install`

### Latest Version

`npm init playwright@latest`

# Run Tests

All the UI tests for demoqa.com are present in folder : e2e/ui
All the API tests for Book store application are present in folder : e2e/api

`npx playwright test`

Running separate test files

`npx playwright test <your-file-name>`

## Designed script for running separate file

### All test files

`npm run test`

### Web Table test file

`npm run webtables`

### Broken Image test file

`npm run brokenimage`

### Practice form test file

`npm run practiceform`

### Progress bar test file

`npm run progressbar`

### Tooltip test file

`npm run tooltip`

### Drag and Drop test file

`npm run draganddrop`

### Only UI test file

`npm run completerunui`

### Only API test file

`npm run apitest`


---


## About

## List all test titles

`npx playwright test --list`

---

## File Structure

    .
    ├── data                    # All Test data file
    │   ├── api                 # All Test data and API endpoints file
    ├── e2e                     # Contains UI and API Test
    │   ├── api                 # Test Related to API
    │   ├── ui                  # Test Related to UI
    ├── fixtures                # Contains base page which have all imports
    ├── node_modules            # Dependencies
    ├── pageObjectPages         # Contains all the pages related to ui locators, methods and api methods
    ├── playwright-report       # Folder for generating of Reports
    ├── test-results            # Artifacts for reports
    ├── gitignore               # Files and Folder which do not need to be committed
    ├── package-lock.json       # Describes dependency tree
    ├── package.json            # Project metadata
    ├── playwright.config.ts    # Playwright test configuration
    └── README.md               # This file