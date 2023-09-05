# english-transliterate

english-transliterate is an npm library that helps you convert non-English names into English names. It is particularly useful when dealing with internationalization and localization of applications, ensuring that names from different languages can be represented consistently in English characters.

## Installation

You can easily install Transliterate Names using npm:

```bash
npm i english-transliterate
```

## Usage

To use Transliterate Names in your project, follow these simple steps:

1. Import the library into your JavaScript/TypeScript file:

```javascript
const translate = require('english-transliterate');
```

2. Transliterate a non-English name:

```javascript
const name = "अपूर्व "; // Non-English name, e.g., in Hindi (Devnagiri)
const transliteratedName = translate(name);

console.log(transliteratedName); // Outputs: "Apoorva"
```

## Supported Languages

Transliterate Names currently supports transliteration for a wide range of languages, including but not limited to:

- Chinese
- Japanese
- Russian
- Arabic
- Greek
- Hindi
- Korean
- Thai
- And many more...

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes, and ensure that the code is well-documented and follows the coding guidelines.
4. Create a pull request.

## License

Transliterate Names is licensed under the MIT License. Please see the [LICENSE](https://github.com/ApoorvTyagi/english-transliterate/blob/main/LICENSE) file for more details.

## Issues

If you encounter any bugs or have feature requests, please [open an issue](https://github.com/ApoorvTyagi/english-transliterate/issues) on GitHub. We welcome your feedback and contributions!

---

### Made with ❤️ in Pune for Bajaj Finserv Health!