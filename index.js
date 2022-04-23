const args = []
const flags = Object.fromEntries(
  process.argv
    .slice(2)
    .filter((arg) => {
      const isFlag = arg.includes('=')
      if (!isFlag) {
        args.push(arg)
      }
      return isFlag
    })
    .map((arg) => {
      const [key, value] = arg.split('=')
      return [key.slice(2), value]
    })
)

module.exports = { args, flags }
