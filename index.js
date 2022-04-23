const args = []
const flags = {}

process.argv.slice(2).forEach((arg) => {
  if (!arg.includes('--')) {
    args.push(arg)
    return
  }

  let [key, value] = arg.split('=')
  const isNumber = !isNaN(value)
  const isFloat = value.includes('.')

  if (isNumber) {
    if (isFloat) {
      value = parseFloat(value)
    } else {
      value = Number(value)
    }
  }

  if (value === 'true') {
    value = true
  }

  if (value === 'false') {
    value = false
  }

  if (value === undefined) {
    value = true
  }

  flags[key.slice(2)] = value
})

module.exports = { args, flags }
