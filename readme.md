# Playwright e2e test automation project

A test automation framework built with Playwright and JavaScript, following the Page Object Model design pattern.

## Overview

This framework provides a structured approach to writing end-to-end tests for web applications using Playwright with JavaScript. It implements the Page Object Model pattern to enhance test maintainability, reusability, and readability.  

 *This framework is put into practice by implementing e2e UI tests for demo website created by SauceLabs.*

## Structure

```bash

├── config/                     # Configuration files
├── tests/                      # Test suites
│   ├── e2e/                    # End-to-end tests
│   └── api/                    # API tests
├── page-objects/               # Page Object classes
│   ├── base.page.js            # Base page with common methods
│   ├── components/             # Reusable components
│   └── [feature directories]   # Feature-specific page objects
├── utils/                      # Utility functions and test data
├── fixtures/                   # Test fixtures
├── package.json
└── README.md
```

## Running Tests


```bash
npx playwright test             #runs tests in headless mode
npx playwright test --headed    #runs tests with UI
npx playwright test --ui        #runs tests with playwrights test runner
```

Alternatively for selectively running tests, such as adding tags to your tests and running them, use:



```bash
npm run test:tag "@your-tag"
```


## Key Concepts

**Page Object Model**: Each page has a corresponding class that encapsulates its elements and actions  
**Component-Based Architecture**: Reusable UI components like headers and navigation menus  
**Test Data Management**: External JSON files store test data (users, products, etc.)

## CI/CD Integration
The framework includes **GitHub Actions** configuration for continuous testing. Tests are run at every commit or merge to main branch.

## Best Practices

Keep page objects focused on a single page or component  
Centralize selectors at the top of page object classes  
Use explicit waits instead of arbitrary timeouts  
Keep test data separate from test logic  
Clean up application state between tests  


