export function component(components) {
    return {
        version: '__VERSION__',
        install: vm => {
            for (let key in components) {
                let c = components[key];
                vm.component(c.name, c);
            }
        },
        components
    }
};

export function directive(directives) {
    return {
        version: '__VERSION__',
        install: vm => {
            for (let key in directives) {
                let c = directives[key];
                vm.directive(c.name, c);
            }
        },
        directives
    }
};

export function id(s = '') {
    return 'mdc-' + s + '-' + Math.random().toString(16).substr(2, 9);
};

export function register(plugin) {
    // if (typeof window !== 'undefined' && window.Vue) {
    //     window.Vue.use(plugin);
    // }
    if (typeof window !== 'undefined' && window.Vue) {
        Vue.use(plugin);
    }
}
