

#### vue中的插槽

+ 普通插槽

```
// 在 son.vue 文件中
<template>
 <li>
 <!--普通插槽-->
   <slot/>
 </li>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>

// 在 father.vue 文件中
<template>
  <div>
      父组件
      <input type="text" v-model="info">
      <button @click="handleClick">添加</button>
      <ul>
        <son v-for="item in list" :key="item.id">
          <!-- 普通插槽 -->
          <span>{{item.name}}</span>
        </son>
      </ul>

  </div>
</template>
<script>
import son from './son'
export default {
  data () {
    return {
      list: [
        { name: '张三', id: 1 }
      ]
    }
  },
  components: {
    son
  },
  methods: {
    handleClick () {
      this.list.push({
        name: this.info,
        id: this.info.length + 1
      })
      this.info = ''
    }
  }
}
</script>

```

+ 具名插槽

```
//在 son.vue 文件中
<template>
 <li>
    <!--具名插槽-->
   <slot name="item"/>
 </li>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>


// 在 father.vue 文件中
<template>
  <div>
      父组件
      <input type="text" v-model="info">
      <button @click="handleClick">添加</button>
      <ul>
        <son v-for="item in list" :key="item.id">
            <!--具名插槽1-->
          <template v-slot:item>
            <span style="fontSize: 20px">{{item.name}}</span>
          </template>
          <!-- 具名插槽 2-->
          <span slot="item" style="fontSize: 20px">{{item.name}}</span> 
        </son>
      </ul>

  </div>
</template>
<script>
import son from './son'
export default {
  data () {
    return {
      list: [
        { name: '张三', id: 1 }
      ]
    }
  },
  components: {
    son
  },
  methods: {
    handleClick () {
      this.list.push({
        name: this.info,
        id: this.info.length + 1
      })
      this.info = ''
    }
  }
}
</script>

```

+ 作用域插槽

```
// 在 son.vue 文件中
<template>
 <li>
   <input type="checkbox" v-model="checked">
   <!--通过 v-bind 将值传给组件上的 template-->
   <slot name="item" :checked="checked"/>
 </li>
</template>
<script>
export default {
  data () {
    return {
      checked: false
    }
  }
}
</script>

// 在 father.vue 文件中
<template>
  <div>
      父组件
      <input type="text" v-model="info">
      <button @click="handleClick">添加</button>
      <ul>
        <son v-for="item in list" :key="item.id">
        <!--子组件通过 v-bind 的值 通过 itemProps来接收-->
          <template v-slot:item='itemProps'>
            <span :style="{fontSize: '20px',color:itemProps.checked?'red':'blue'}">{{item.name}}</span>
          </template>
        </son>
      </ul>

  </div>
</template>
<script>
import son from './son'
export default {
  data () {
    return {
      list: [
        { name: '张三', id: 1 }
      ]
    }
  },
  components: {
    son
  },
  methods: {
    handleClick () {
      this.list.push({
        name: this.info,
        id: this.info.length + 1
      })
      this.info = ''
    }
  }
}
</script>

```