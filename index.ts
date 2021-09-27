// Import stylesheets
import { BTree } from './binary-tree';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const bst = new BTree();
bst.addNode(4);
bst.addNode(2);
bst.addNode(5);
bst.addNode(1);

console.log(bst);