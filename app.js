const carlo = require('carlo');
const { execSync } = require('child_process');

(async () => {
  const app = await carlo.launch();

  app.serveFolder(__dirname + '/build');

  await app.exposeFunction('pwd', async () => {
    const result = await execSync('pwd')
    console.log(result.toString())
    return result.toString()
  });

  await app.exposeFunction('run', async (command) => {
    const result = await execSync(command)
    console.log(result.toString())
    return result.toString()
  });

  await app.load('index.html');
})();