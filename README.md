# Playwright TypeScript Test Automation Framework

This project is a test automation framework using Playwright with TypeScript.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Visual Studio Code

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd playwright-ts
```

2. Install dependencies
```bash
npm install
```

## Project Structure

```
playwright-ts/
├── pages/          # Page Object Models
│   └── HomePage.ts
├── tests/          # Test files
│   └── homePage.spec.ts
├── playwright.config.ts  # Playwright configuration
└── package.json    # Project dependencies
```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run specific test file:
```bash
npx playwright test tests/homePage.spec.ts
```

Run tests with UI mode:
```bash
npx playwright test --ui
```

## Test Reports

View HTML report:
```bash
npx playwright show-report
```

## Development

- Follow the Page Object Model pattern for better maintainability
- Write descriptive test names using the format: 'should <expected behavior>'
- Add appropriate assertions for each test case

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## Useful Commands

- Install Playwright browsers:
```bash
npx playwright install
```

- Generate code with Playwright Inspector:
```bash
npx playwright codegen
```

## Contact

For any questions or support, please contact [Your Name/Team]