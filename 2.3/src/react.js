export function createDOM(Node) {
  if (typeof Node === "string") {
    return document.createTextNode(Node);
  }

  const element = document.createElement(Node.tag);

  Node.children.map(createDOM).forEach(element.appendChild.bind(element));
  return element;
}
