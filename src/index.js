import {LitElement, html,css} from 'lit';
import '@justinribeiro/code-block';
import  './bujug.css'
import 'elix/define/Menu.js';
import 'elix/define/MenuButton';
import '@alenaksu/json-viewer';

export class MyElement extends LitElement {
  static properties = {
    version: {},
    namae: {}
  };

  changeName(event) {
    const input = event.target;
    this.namae = input.value;
  }

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <p>Welcome to the Litseh tutorial, ${this.namae}!</p>
    <p>This is the ${this.version} code.</p>
    <input @input=${this.changeName} placeholder="Enter your name">
    `;
  }
}
customElements.define('my-element', MyElement);
