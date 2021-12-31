import { functionsIn } from "lodash";
import { container } from "webpack";

export class Component {
  constructor(props) {
    this.props = props;
  }
}

export function createDOM(Node) {
  if (typeof Node === "string") {
    return document.createTextNode(Node);
  }

  const element = document.createElement(Node.tag);

  Object.entries(Node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  Node.children.map(createDOM).forEach(element.appendChild.bind(element));
  return element;
}

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}

export function createElement(tag, props, ...children) {
  if (typeof tag === "function") {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));
      return instance.render();
    }
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

    // diff

    container.appendChild(createDOM(vdom));
  };
})();
