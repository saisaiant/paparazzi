export default {
    install(Vue) {
        let requireContext = require.context('../components', false, /Base\w*\.vue$/)
        requireContext.keys().forEach(filename => {
            let name = filename.replace(/^.+\//, '').replace(/\.\w+$/, '') // a/b/c => c && foo.vue => foo
            let component = requireContext(filename)  // webpack 4 support .default
            component = component.default || component
            //console.log(filename, name, component)
            Vue.component(component.name || name, component)
        })
    }
}