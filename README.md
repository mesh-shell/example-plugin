# example-plugin

A MESH plugin named example-plugin

## Installation

```bash
plugin install username/example-plugin
```

Alternatively, you can download the .meshplugin file from the releases page and install it manually:

```bash
plugin install path/to/example-plugin-1.0.0.meshplugin
```

## Usage

This plugin adds the `example-plugin` command to MESH:

```bash
example-plugin [arguments]
```

### Examples:

```bash
example-plugin
example-plugin hello world
```

## Configuration

Edit the `config.json` file to customize the plugin behavior:

```json
{
  "enabled": true,
  "debug": false,
  "options": {
    "greeting": "Hello World!",
    "color": "green"
  }
}
```

## Features

- Command registration example
- Hook integration with MESH events
- Configuration loading and handling
- Resource file usage
- Utility functions in separate module

## Development

1. Edit the plugin files as needed
2. Run `plugin build example-plugin` to build the plugin
3. This will create a `example-plugin-1.0.0.meshplugin` file in the `dist` directory
4. Install the plugin with `plugin install ./dist/example-plugin-1.0.0.meshplugin`

## Plugin Structure

```
example-plugin/
├── config.json       - Plugin configuration
├── index.js          - Main plugin entry point
├── plugin.json       - Plugin metadata
├── lib/              - Helper modules
│   └── utils.js      - Utility functions
├── resources/        - Resource files
│   └── sample.txt    - Sample resource
└── dist/             - Build output directory
    └── example-plugin-1.0.0.meshplugin - Plugin package file
```

## License

MIT
