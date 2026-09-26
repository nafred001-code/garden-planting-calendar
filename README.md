# garden-planting-calendar

Builds a month-by-month planting calendar from your seed list and growing zone, on-device. Built with [Tether's QVAC SDK](https://github.com/tetherto/qvac) — the model runs on-device, so nothing leaves your machine.

## What it does

Builds a month-by-month planting calendar from your seed list and growing zone, on-device.

**QVAC functions used:** `loadModel` and `completion`.

![garden-planting-calendar demo](demo.png)

## Why I built it

I buy seeds in January with confidence and forget to plant half of them.

## Requirements

- Node.js >= 22
- `@qvac/sdk` `^0.19.0` (installed automatically via `npm install`)

## Install

```bash
git clone https://github.com/nafred001-code/garden-planting-calendar.git
cd garden-planting-calendar
npm install
```

## Run

```bash
npm start
```

An example input is included: `seeds.example.txt`.

See the comments at the top of `index.js` for the exact input this app expects. On first run, QVAC downloads the model it needs once and caches it locally; every run after that is fully offline.

## SDK version used

`@qvac/sdk` `0.19.1`

## License

MIT — see [LICENSE](LICENSE).
