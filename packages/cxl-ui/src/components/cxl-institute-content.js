// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlInstituteContentStyles from '../styles/cxl-institute-content-css.js';

class CXLInstituteContentElement extends LitElement {
  static get properties() {
    return {
      sidebarSize: {
        type: String,
        reflect: true
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlInstituteContentStyles];
  }

  render() {
    return html`
      <slot name="content-header"></slot>
      <slot name="content-video"></slot>
      <div class="wrap">
        <div part="content" media-size="wide">
          <slot></slot>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    const appLayoutSelector = document.querySelector('cxl-institute-layout');
    if (appLayoutSelector.hasAttribute('sidebarsize')) {
      this.sidebarSize = appLayoutSelector.getAttribute('sidebarsize');
    }
  }
}

customElements.define('cxl-institute-content', CXLInstituteContentElement);
