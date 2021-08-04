<!--
 * @Author: He Xiaomei
 * @Date: 2021-08-04 16:50:29
 * @LastEditors: He Xiaomei
 * @LastEditTime: 2021-08-04 17:03:15
-->

# vue 基本知识点

## vue 中的命名规则

| 规则                    | 应用          | 示例                                                                                          |
| ----------------------- | :------------ | :-------------------------------------------------------------------------------------------- |
| camelCase 驼峰          | JS 函数、变量 | props:{bigPop: String}                                                                        |
| PascalCase 帕斯卡命名法 | JS 类         | 组件文件，如 components/VideoList.vue                                                         |
| kebab-case 烤肉串命名法 | HTML          | 1,组件名 Vue.component('video-item',{});2,模板中使用`<video-item :big-prop='1'></video-item>` |

## data 为什么是函数？

```
export default {
    data() {
        return {}
    }
}
```

- 因为只有返回一个生产 data 的函数，这个组件产生的每一个实例才能维持一份被返回对象的独立的拷贝。

## Prop 的属性校验

```
export default {
    props: {
        name: {
            type: String,
            required: true,
            default: 'hello word',
            validator(value) {
                const nameEnums = ['hello word', 'hello 2021'];
                return nameEnums.indexOf(value) !== -1;
            }
        }
    }
}
```

| 规则      | 备注                                                                                                                              |
| --------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| type      | 1,类型检查，value 为对应类型的构造函数；<br/>2,null 和 undefined 会通过任何类型的验证；<br/>3,多种类型传入数组，如[String, Array] |
| required  | 是否必填                                                                                                                          |
| default   | 默认值，默认值为对象或数组的，必须从一个工厂函数获取                                                                              |
| validator | 自定义校验函数，返回为 true 为通过，false 为不通过                                                                                |

## computed、方法和 watch

- 计算属性 computed
  - 计算属性 是基于**其内部的响应式依赖**进行缓存的
  - **只在相关响应式依赖发生变化时**，它们才会重新开始求值
- 方法 methods 中自定义的方法
  - 无缓存
  - 每当**触发重新渲染**（可能是其他绑定数据发生变化）时，调用方法将**总会再次执行函数**
- watch
  - 用途：在数据发生变化后，执行**异步操作**或**开销较大的操作**时

## vuex

| 概念      | 备注                                                                                       |
| --------- | :----------------------------------------------------------------------------------------- |
| State     | - 单一 store<br/>- 响应式                                                                  |
| Mutations | - 由 commit 触发<br/>- 必须是同步函数                                                      |
| Getter    | - 由 State 派生出的状态<br/>- store 的计算属性                                             |
| Actions   | - 由 dispatch 触发<br/>- 可以包含任意异步操作<br/>- 不直接变更状态，可以通过 mutation 变化 |
