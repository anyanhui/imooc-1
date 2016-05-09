function mixinForComponent(mixinFun, component){
    let mixinObj = mixinFun(component);
    let keys = Object.keys(mixinObj);
    let keysLen = keys.length;
    for (let i = 0; i < keysLen; i++) {
        let key = keys[i];
        if (!key.startsWith('$')) {
            key === 'getInitialState' ?
                component.state = mixinObj[key]() :
                component[key] = mixinObj[key];
        }
    }
}
/*
代替mixin：
用法mixin(component,mixins);
第一个参数component是需要加入mixin的组件，
第二个参数mixins就是你自己写的需要注入到组件的minxin
 */
export default (component, mixins = [])=> {
    if (typeof mixins === 'function') {
        mixinForComponent(mixins, component);
    } else {
        //Object.prototype.toString.call(mixins) ==='[object Array]'
        let count = mixins.length;
        for (let i = 0; i < count; i++) {
            mixinForComponent(mixins[i], component);
        }
    }
}