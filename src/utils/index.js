import renderRoutes from './renderRoutes'

const parseFormInitialValues = (values) => {
  const obj = {}
  Object.keys(values).forEach(v => {
    obj[v] = {
      value: values[v]
    }
  })
  return obj
}

export {
  renderRoutes,
  parseFormInitialValues
}
