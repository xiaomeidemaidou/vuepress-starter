<!--
 * @Author: He Xiaomei
 * @Date: 2021-08-04 16:50:41
 * @LastEditors: He Xiaomei
 * @LastEditTime: 2021-08-04 17:03:23
-->

# vue 重要知识点

## 父子组件数据同步

- 可通过`:msg.sync`通过 sync 修饰符实现 prop 的“双向绑定” [sync 修饰符](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)

## Objcet.defineProperty

- 不能检测**对象属性**的添加/删除
- 不能检测**数组长度**变化
- 这不是因为 defineProperty 的局限性，而是出于对性能的考量，不会对数组的每个元素都监听
- 针对数组，可通过 push()、pop()、shift()、unshift()、splice()、sort()、reverse()

## 生命周期

| 生命周期钩子  | tips                                                                                                                                            |
| ------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| beforeCreate  | 最初调用触发，data 和 events 都不可用。可以在这里处理整个系统加载的 loading                                                                     |
| created       | 已经具有响应式的 data，可以发送 events。可以在这里发送请求                                                                                      |
| beforeMount   | 在模板编译后，渲染之前触发。SSR 中不可用。基本用不上这个 HOOK                                                                                   |
| mounted       | 在渲染之后触发，并可访问组件中的 DOM 以及\$refs,SSR 中不可用。一般在用于需要在 vue 中嵌入非 vue 的组件时，不建议用于发送请求（放到 created 中） |
| beforeUpdate  | 在数据改变后、模板改变前触发。切勿用它来监听数据变化（使用计算属性和 watch 监听）                                                               |
| updated       | 在数据改变后、模板改变后触发。常用语重渲染后的打点、性能检测或者触发 vue 组件中非 vue 组件的更新                                                |
| beforeDestroy | 组件卸载前触发，可以在此时清理事件、计时器或者取消订阅操作                                                                                      |
| destroyed     | 卸载完毕后触发，可以做最后的打点或事件触发操作                                                                                                  |
