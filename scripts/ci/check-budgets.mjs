import fs from 'node:fs';

function loadJson(path) {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function fail(msg) {
    console.error(msg);
    process.exit(1);
}

const [,, budgetsPath, reportPath] = process.argv;

if (!budgetsPath || !reportPath) {
    fail('Usage: node scripts/ci/check-budgets.mjs <budgets.json> <route-sizes.json>');
}

const budgets = loadJson(budgetsPath);
const report = loadJson(reportPath);

let hasError = false;

for (const pageType of Object.keys(budgets.pageTypes)) {
    const budget = budgets.pageTypes[pageType];
    const measured = report[pageType];

    if (!measured) {
        console.warn(`No report for ${pageType}, skipping`);
        continue;
    }

    const checks = [
        ['maxPageWeightKb', 'pageWeightKb'],
        ['maxScriptKb', 'scriptKb'],
        ['maxImageKb', 'imageKb'],
        ['maxThirdPartyKb', 'thirdPartyKb'],
        ['maxRequests', 'requests']
    ];

    for (const [limitKey, valueKey] of checks) {
        const limit = budget[limitKey];
        const value = measured[valueKey];
        if (typeof limit === 'number' && typeof value === 'number' && value > limit) {
            console.error(`${pageType} ${valueKey} ${value} exceeds limit ${limit}`);
            hasError = true;
        }
    }
}

if (hasError) fail('Performance budgets failed');

console.log('Performance budgets passed');
