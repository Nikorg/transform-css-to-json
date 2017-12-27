function node_to_json(node) {
  let json = {};
  if (node.nodes) {
    node.each(function (node) {
      json[node.prop] = node.value;
    });
  }
  return json;
}

export default function transformCssToJSON(root) {
  let cssMap = {};
  root.each(function (node) {
    if (node.type == "rule" && node.selectors) {
      cssMap[node.selectors.join(" ")] = node_to_json(node);
    }
  });
  return cssMap;
}
