Document.prototype.myGetElementById = function (id) {
  for (child of this.children) {
    if (this.id === id) return this;
    const found = Document.prototype.myGetElementById.call(child, id);
    if (found) return found;
  }
  return null;
};

Document.prototype.myTest = function () {
  const doc = this;
  //doc.querySelector
  //doc.childElementCount;
  return doc.body.childElementCount;
};
