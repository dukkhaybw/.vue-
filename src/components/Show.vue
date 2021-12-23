<template>
  <div class="show">
    <h1>代码运行结果</h1>
    <div ref="content"></div>
  </div>
</template>

<script>
export default {
  name: 'show',
  props: {
    code: {
      type: String,
      default: '',
    },
  },
  methods: {
    run() {
      const template = this.getSource('template');
      const script = this.getSource('script').replace(/export default/, 'return');
      const style = this.getSource('style');

      // 动态的加载组件，组件就是一个对象，对象内部包含render函数，data，生命周期，方法等等
      let componentObj = {};
      if (script) {
        componentObj = new Function(script)();
      }
      if (template) {
        componentObj.template = template;
        let vueComponent = new (this.$options._base.extend(componentObj))();
        console.log(vueComponent);
        console.log(vueComponent.$mount().$el);
        this.$refs.content.appendChild(vueComponent.$mount().$el);
      }
      if (style) {
        let element = document.createElement('style');
        element.type = 'text/css';
        element.innerText = style;
        document.head.appendChild(element);
      }
    },
    getSource(type) {
      const reg = new RegExp(`<${type}[^>]*>`); //开始标签
      let code = this.code;
      let matches = code.match(reg);
      if (matches) {
        return code.slice(
          code.indexOf(matches[0]) + matches[0].length,
          code.lastIndexOf(`</${type}>`),
        );
      }
    },
  },
};
</script>

<style></style>
