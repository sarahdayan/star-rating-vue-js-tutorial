export default (el, binding) => {
  if (process.env.NODE_ENV === 'test') {
    Object.keys(binding.value).forEach(value => {
      el.setAttribute(`data-test-${value}`, binding.value[value])
    })
  }
}
