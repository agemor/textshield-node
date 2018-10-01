# TextShield for Node.js

> Server-side TextShield support for Node.js

## Getting started

Install TextShield for Node.js plugin with npm:

```
$ npm install textshield-node
```

Plugin is reachable through default export.

```javascript
import TextShield, { DecodeCost } from "textshield-node";
```

To protect a text, `TextShield.encode(text: string, cost: number)` does a job.

```javascript
TextShield.encode("example@example.com", DecodeCost.Low);
```

## Contribution

Any kind of contributions or questions are heartly welcomed.

## License

TextShield is released under the [MIT License](http://opensource.org/licenses/MIT).
