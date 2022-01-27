const myPlugins = {}
myPlugins.install = function(Vue, options) {
  // console.log('调用自定义插件')
  Vue.directive(options.name, (ele, params) => {
    console.log(ele, params)
    ele.innerHTML = params.value.toUpperCase()
  })
}
export default myPlugins