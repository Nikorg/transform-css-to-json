function node_to_string(node) {
  let string = "";
  if (node.nodes) {
    node.nodes.each(function (node) {
      if (node.type === 'decl') {
        string += node.prop + ":" + node.value + ";";
      }
    });
  }
  return string;
}

export default function transformCssToJSON(root) {
  let cssMap = {};
  root.each(function (node) {
    if (node.type == "rule" && node.selectors) {
      cssMap[node.selectors.join(" ")] = node_to_string(node);
    }
  });
  return cssMap;
}
