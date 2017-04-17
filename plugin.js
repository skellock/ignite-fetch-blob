const NPM_MODULE_NAME = 'react-native-fetch-blob'

const add = async function (context) {
  const { ignite } = context
  await ignite.addModule(NPM_MODULE_NAME, { link: true })
}

const remove = async function (context) {
  const { ignite } = context
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })
}

module.exports = { add, remove }
