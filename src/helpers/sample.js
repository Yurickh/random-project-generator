export default function sample(array) {
  if (array.length === 0) return {}

  return array[Math.floor(Math.random() * array.length)]
}
