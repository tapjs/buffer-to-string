export const bufferToString = (buffer: Buffer, limit = 20) =>
  buffer
    .toString('hex')
    .split('')
    .reduce((arr: string[], char: string) => {
      if (arr.length && arr[arr.length - 1]?.length === 1) {
        arr[arr.length - 1] += char
        if (arr.length && arr.length % limit === 0) {
          arr[arr.length - 1] += '\n'
        } else {
          arr[arr.length - 1] += ' '
        }
      } else {
        arr.push(char)
      }
      return arr
    }, [])
    .join('')
    .trim()
