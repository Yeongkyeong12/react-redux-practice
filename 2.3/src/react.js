const hooks = [];
// hook의 순서 index를 제어할 변수 currentComponent
let currentComponent = 0;

export class Component {
  constructor(props) {
    this.props = props;
  }
}

function createDOM(Node) {
  if (typeof Node === "string" || typeof Node === "number") {
    return document.createTextNode(Node);
  }

  const element = document.createElement(Node.tag);

  Node.props &&
    Object.entries(Node.props).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );

  Node.children &&
    Node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}

function useState(initValue) {
  let position = currentComponent - 1;

  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  const modifier = (nextValue) => {
    hooks[position] = nextValue;
  };

  return [hooks[position], modifier];
}

export function createElement(tag, props, ...children) {
  if (typeof tag === "function") {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));
      return instance.render();
    }

    hooks[currentComponent] = null;
    currentComponent++;

    if (children.length > 0) {
      return tag(makeProps(props, children));
    } else {
      return tag(props);
    }
  }

  return { tag, props, children };
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}

export const render = (function () {
  let prevDom = null;

  return function (vdom, container) {
    if (prevDom === null) {
      prevDom = vdom;
    }

    container.appendChild(createDOM(vdom));
  };
})();
