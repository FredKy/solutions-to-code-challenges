// Vi inför en diameter-variabel för längsta stigen måste inte gå genom roten i trädet.
// Om vi inte använder den så kommer algon räkna ut längsta stigen där roten ingår.

var diameterOfBinaryTree = function (root) {
  if (root == null) {
    return 0;
  }

  var diameter = 0;

  var maxDepth = function (root) {
    if (root == null) {
      return 0;
    } else {
      var left = maxDepth(root.left);
      var right = maxDepth(root.right);
      diameter = Math.max(left + right, diameter);
      return 1 + Math.max(left, right);
    }
  };

  maxDepth(root);
  return diameter;
};

// Lösning med konventionen att tomma noder har höjden -1.

var diameter = function (root) {
  var res = 0;

  var maxDepth = function (root) {
    if (root == null) {
      return -1;
    } else {
      var left = maxDepth(root.left);
      var right = maxDepth(root.right);
      res = Math.max(2 + left + right, res);
      return 1 + Math.max(left, right);
    }
  };

  maxDepth(root);
  return res;
};
