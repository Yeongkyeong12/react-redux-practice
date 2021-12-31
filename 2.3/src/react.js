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

export function createElement(tag, props, ...children) {
  // 방어 코드
  props = props || {};
  return { tag, props, children };
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}
