const fs = require('fs');
const glob = require('glob');
const path = require('path');

// Scan the folder for all .tsx files
const files = glob.sync('./storybook/stories/**/*.tsx');

let imports = '';
let exp = 'export const stories = {\n';

files.forEach((file) => {
  const componentName = path.basename(file, '.tsx');

  imports += `import ${componentName} from '${file.replace('./storybook', '.').replace('.tsx', '')}';\n`;
  exp += `  '${componentName}': ${componentName},\n`;
});

exp += '};\n';

// Write the result to a file that will be included in the bundle
fs.writeFileSync('./storybook/generatedStories.ts', `${imports}\n${exp}`);
