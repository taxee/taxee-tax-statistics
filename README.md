taxee-tax-statistics contains baseline federal and tax information and tax statistics used by https://taxee.io

## Installation

`npm install taxee-tax-statistics --save-dev`

## Code Example

The following example shows how you would import and reference tax statistics contained

```
import Taxee from 'taxee-tax-statistics';

const 2016_TAX_DATA = Taxee.2016;
const federalStats = 2016.TAX_DATA.federal;
const michiganStats = 2016.TAX_DATA.michigan;
```

## Contributors

While federal tax brackets are updated at a known frequency (once a year), state tax brackets can change at any time.  The Taxee team will update the tax brackets contained in this repository every 3 months.  If you find a discrepancy, feel free to submit a pull request or create an issue - we'd appreciate it! 

## License

MIT