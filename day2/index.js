function serializeElement(
  node,
  indent,
  depth
){
  const props = Object.keys(node.props)
  .map(key => {
    const value = node.props[key]
    return isOn(key) || value == null
      ? ''
        : value === ''
        ? key
      : `${key}=${JSON.stringify(value)}`
  })
  .filter(Boolean)
  .join(" ")
}