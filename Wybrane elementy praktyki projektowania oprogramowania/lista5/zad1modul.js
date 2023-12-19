function Tree(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
}

function Queue() {
	this.data = [];
};

Queue.prototype.enqueue = function(elem) {
	this.data.push(elem);
};
 
Queue.prototype.dequeue = function() {
	return this.data.shift();
};

Queue.prototype.isEmpty = function() {
	return this.data.length === 0;
};

Tree.prototype[Symbol.iterator] = function*() {
    var queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()){
        var node = queue.dequeue();
        if(node.left) queue.enqueue(node.left);
        if(node.right) queue.enqueue(node.right);
        yield node.val;
    }
}

module.exports = Tree;
