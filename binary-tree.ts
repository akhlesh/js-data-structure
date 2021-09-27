import { Node } from './node';

export class BTree {
  root: Node;
  constructor(){
    this.root = null;
  }

  addNode(data: any) {
    const node = new Node(data);
    if(!this.root) {
      this.root = node;
    } else {
      this.insert(this.root, node);
    }
    return this;
  }

  private insert(currentNode: Node, node: Node){
    if(node.value < currentNode.value) {
      if(!currentNode.left) {
        currentNode.left = node;
      } else {
        this.insert(currentNode.left, node);
      }
    } else {
      if(!currentNode.right) {
        currentNode.right = node;
      } else {
        this.insert(currentNode.right, node);
      }
    }
  }

  inline(){
    
  }
}