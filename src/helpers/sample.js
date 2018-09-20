export default function sample(array) {
  if (array.length === 0) return undefined

  return array[Math.floor(Math.random() * array.length)]
}
