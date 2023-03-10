import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: true,
})
export class AppFooter {

  render() {
    return (
      <Host>
        <ul class="footer-list">
          <slot></slot>
        </ul>
      </Host>
    );
  }

}
