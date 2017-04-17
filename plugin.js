// Ignite plugin for FetchBlob
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-MODULENAME'
// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()


const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install a npm module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true })

  

  // Example of copying templates/FetchBlob to App/FetchBlob
  // if (!filesystem.exists(`${APP_PATH}/App/FetchBlob`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/FetchBlob`, `${APP_PATH}/App/FetchBlob`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../FetchBlob/FetchBlob'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  

  // Example of removing App/FetchBlob folder
  // const removeFetchBlob = await context.prompt.confirm(
  //   'Do you want to remove App/FetchBlob?'
  // )
  // if (removeFetchBlob) { filesystem.remove(`${APP_PATH}/App/FetchBlob`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../FetchBlob/FetchBlob'\n`
  // )
}

// Required in all Ignite plugins
module.exports = { add, remove }

