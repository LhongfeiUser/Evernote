class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    if (this.el) {
      //如果这个元素能够获取到，我们开始编译
      //步骤：
      //1.先把这些真实DOM移入到内存中 fragment
      let fragment = this.node2fragment(this.el);
      //2.编译=> 提取想要的元素节点v-model 文本节点{{}};
      this.compile(fragment)
      //3.把编译好的fragment塞回到页面中去
      this.el.appendChild(fragment);
      fragment = null;
    }
  }

  /*专门写一些辅助方法*/
  isElementNode(node) {
    return node.nodeType === 1;
  }

  //判断方法是不是指令
  isDirective(name) {
    return name.includes('v-')
  }

  /*核心的方法*/
  compileElement(node) {
    // 编译带 v-model的
    let attrs = node.attributes;
    Array.from(attrs).forEach(attr => {
      let attrName = attr.name;
      if (this.isDirective(attrName)) {
        //取到对应的值 放到节点中
        let expr = attr.value;
        //node  this.vm.$data expr
        let [, type] = attrName.split('-');
        CompileUtil[type](node, this.vm, expr);
      }
    });
  };

  compileText(node) {
    //编译带{{}} 的
    let expr = node.textContent;//获取文本
    let reg = /\{\{([^}])+\}\}/g;  //{{a}} {{b}}  {{c}}   看作一个整体表达式text
    if (reg.test(expr)) {
      //node this.vm.$data text
      CompileUtil['text'](node, this.vm, expr);
    }
  }

  compile(fragment) {
    let childNodes = fragment.childNodes;
    Array.from(childNodes).forEach(node => {
      if (this.isElementNode(node)) {
        //文本节点
        this.compile(node);
        this.compileElement(node);
      } else {
        //元素节点
        this.compileText(node)
      }
    });
    // console.log(childNodes);
  }

  node2fragment(el) { //将el中的内容放到文档碎片中
    //文档碎片 内存中的dom节点
    let fragment = document.createDocumentFragment();
    let firstChild;
    while (firstChild = el.firstChild) {
      fragment.appendChild(firstChild)
    }
    return fragment
  }
}

CompileUtil = {  //编译工具库

  getVal(vm, expr) { //获取实例上对应的数据
    expr = expr.split('.');
    return expr.reduce((prev, next) => {
      return prev[next]
    }, vm.$data)
  },

  getTextVal(vm, expr) {
    return expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
      return this.getVal(vm, arguments[1]);
    });
  },

  text(node, vm, expr) { //文本处理
    let updateFn = this.updater['textUpdater'];
    let value = this.getTextVal(vm, expr);
    updateFn && updateFn(node, value)
  },
  model(node, vm, expr) { //输入框处理
    let updateFn = this.updater['modelUpdater'];
    updateFn && updateFn(node, this.getVal(vm, expr));
  },
  updater: {
    textUpdater(node, value) {
      node.textContent = value;
    },
    modelUpdater(node, value) {
      node.value = value;
    }
  }
};
