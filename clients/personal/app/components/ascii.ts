/* eslint-disable no-console */
/* eslint-disable max-len */
const ascii: () => void = (() => {
  let hasRunOnce = false
  return () => {
    if (hasRunOnce) return

    const styles = [
      'color: red',
      'color: orange',
      'color: yellow',
      'color: green',
      'color: pink',
      'color: salmon',
      'color: lime',
    ]

    const text =
      '     ___ _______ _______ __   __   __   __      \n    |   |       |       |  | |  | |  |_|  |     \n    |   |   _   |    ___|  |_|  | |       |     \n    |   |  | |  |   |___|       | |       |     \n ___|   |  |_|  |    ___|_     _| |       |___  \n|       |       |   |___  |   |   | ||_|| |   | \n|_______|_______|_______| |___|   |_|   |_|___|\n                                                '

    let styledText = ''
    const styleList = []

    for (let i = 0, len = text.length; i < len; i++) {
      styledText += `%c${text[i]}`
      styleList.push(styles[i % 7])
    }

    console.log(styledText, ...styleList)

    hasRunOnce = true
  }
})()

export default ascii
