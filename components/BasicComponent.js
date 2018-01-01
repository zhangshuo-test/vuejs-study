//vue的基础组件的创建
Vue.component('component-name', {
    template: '<li>我是一个基础的vue组件</li>'
});

//将数据从父亲作用域中传递到子组件中
Vue.component('data-from-parent', {
    props:['todo'],
    template: `<li>
                    <p>城市：{{ todo.name }}</p>
                    <p>拼音：{{ todo.pinYin }}</p>
                    <hr/>
               </li>`
});

