export default function getIcons(components) {
  return Object.keys(components)
    .filter(key => key.match(/^Icon/))
    .reduce((obj, key) => (obj[key] = components[key], obj), {});
}
