<template>
  <div id="app">
    <Edit @input="handleInput" @run="handleRun" @clear="handleClear"></Edit>
    <Show :code="code" ref="show"></Show>
  </div>
</template>

<script>
import Edit from '@/components/Edit.vue';
import Show from '@/components/Show.vue';
export default {
  name: 'App',
  components: {
    Edit,
    Show,
  },
  data() {
    return {
      code: '',
    };
  },
  methods: {
    handleInput(value) {
      this.code = value;
    },
    handleRun() {
      this.$refs.show.run();
    },
    handleClear() {
      this.code = '';
    },
  },
};
</script>

<style lang="stylus">
*
  margin 0
  padding 0
html,body,#app
  width 100%
  height 100%

#app
  display flex
  &>div
    flex 1
</style>
