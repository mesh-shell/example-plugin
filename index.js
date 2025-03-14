/**
 * example-plugin - A MESH plugin named example-plugin
 * @author rxsonanz
 * @version 1.0.0
 */
const fs = require('fs');
const path = require('path');
const utils = require('./lib/utils');

/**
 * Plugin setup function - Called when the plugin is loaded
 * @param {PluginAPI} api - The plugin API
 */
function setup(api) {
  // Get interfaces from the API
  const Terminal = api.interfaces.Terminal;
  const ErrorHandler = api.interfaces.ErrorHandler;
  
  console.log(Terminal.color('green', 'example-plugin plugin initialized'));
  
  // Load configuration
  let config = {};
  try {
    const configPath = path.join(__dirname, 'config.json');
    if (fs.existsSync(configPath)) {
      config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      console.log('Configuration loaded successfully');
    }
  } catch (error) {
    ErrorHandler.logError('example-plugin: Failed to load configuration', error);
  }
  
  // Load resources
  try {
    const samplePath = path.join(__dirname, 'resources', 'sample.txt');
    if (fs.existsSync(samplePath)) {
      const sampleContent = fs.readFileSync(samplePath, 'utf8');
      // Do something with the resource
    }
  } catch (error) {
    ErrorHandler.logError('example-plugin: Failed to load resources', error);
  }

  // Register a command
  api.registerCommand(
    'example-plugin',
    (args) => {
      try {
        console.log(Terminal.color('cyan', 'example-plugin command executed'));
        console.log(Terminal.box('Hello from example-plugin!', { 
          color: 'green',
          padding: 1,
          title: 'example-plugin v1.0.0'
        }));
        
        if (args.length > 0) {
          console.log('Arguments:', args);
        } else {
          console.log('No arguments provided. Try passing some arguments!');
        }
        
        // Use a utility function
        const timestamp = utils.getTimestamp();
        console.log('Current timestamp:', timestamp);
        
      } catch (error) {
        ErrorHandler.logError('example-plugin command execution', error);
      }
    },
    'Execute example-plugin plugin commands',
    'example-plugin'
  );
  
  // Hook into shell events
  api.addHook('onShellStart', () => {
    console.log(Terminal.color('blue', 'example-plugin plugin is ready'));
  }, { id: 'example-plugin' });
  
  // Hook into command execution
  api.addHook('beforeCommand', (commandInfo) => {
    // You can log commands or modify their behavior
    // Return false to prevent the command from executing
    return true;
  }, { id: 'example-plugin' });
  
  // Hook into prompt generation to customize the prompt
  api.addHook('onPromptGenerate', (promptData) => {
    // You can modify the prompt here
    // Example: Add a plugin indicator to the prompt
    // promptData.segments.push({ text: '[EX]', color: 'green' });
    return promptData;
  }, { id: 'example-plugin' });
}

/**
 * Plugin teardown function - Called when the plugin is unloaded
 * @param {PluginAPI} api - The plugin API
 */
function teardown(api) {
  const Terminal = api.interfaces.Terminal;
  console.log(Terminal.color('yellow', 'example-plugin plugin shutting down'));
  
  // Perform cleanup tasks here
  // For example: close connections, clear intervals, etc.
}

module.exports = {
  setup,
  teardown
};
