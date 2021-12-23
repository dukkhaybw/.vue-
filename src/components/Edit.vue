<template>
  <div class="edit">
    <div class="edit-title">
      <button @click="handleRun">运行</button>
      <button @click="handleClear">清空</button>
    </div>
    <div class="edit-content">
      <!-- :value='code' + @input='handleInput'   v-mode好像等价于前面的语法糖写法，但是
        是存在不同的（面试也可能问），就是v-model 是否等价于 :value + @input 事件
        不同是：对于元素表单标签绑定v-model时，vue框架内部会处理输入法问题，而且不同的
        标签解析出的结果不一样，比如复选框绑定v-mode 类似于 :checked + @change事件 
      -->
      <textarea v-model="code" @input="handleInput" @keydown.9.prevent></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data() {
    return {
      code: '',
    };
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    handleRun() {
      if (this.code) {
        this.$emit('run');
      } else {
        alert('编辑内容不能为空');
      }
    },
    handleClear() {
      this.code = '';
    },
  },
};
</script>

<style lang="stylus">
.edit
  position relative
  .edit-title
    padding: 10px
    background-color #ccc
    button
      padding 10px
      height 40px
      width 80px
      margin 5px
  .edit-content
    position absolute
    top 80px
    bottom 0
    left 0
    right 0
    background-color pink
    textarea
      box-sizing border-box
      outline none
      border none
      height 100%
      width 100%
      padding 10px
      font-size 24px
</style>
