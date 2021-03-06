import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-footer-home')
export class AppFooterHome extends LitElement {

  @property({ type: Boolean}) enableBack: boolean = false;

  static get styles() {
    return css`

      footer {
        padding: 16px 0px 16px 0px;
        font-size: 14px;
        display: grid;
        grid-template-columns: 55fr 45fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }

      .suggest {
        justify-self: end;
      }

      footer a {
        color: rgba(61, 61, 61, 1);
        text-decoration: none;
        margin: 0 2px;
      }

      footer a:hover {
        color: rgba(0,113,197, 1.0);
        border-bottom: 1px dashed rgba(0,113,197, 1);
      }

      @media(prefers-color-scheme: light) {
      }

      #slogan {
        margin: 16px auto 0px auto;
        text-align: center;
      }

      #engage {
        background: linear-gradient(90deg, rgba(0, 113, 197, 1.0) 0%, rgba(0, 199, 253, 1.0) 100%);
        background-repeat: no-repeat;
        color: #fff;
      }

      #engage, #play {
        padding: 2px 16px;
        display: inline-block;
      }

      #play {
        margin-left: -4px;
        color: #3D3D3D;
      }

      #play
      {
        background-image: linear-gradient(
          225deg,
          #231557 0%,
          #3d1488 29%,
          rgba(0, 113, 197, 1.0) 67%,
          rgba(0, 199, 253, 1.0) 100%
        );
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        text-fill-color: transparent;
        animation: textclip 2s linear infinite;
        display: inline-block;
      }

      @keyframes textclip {
        to {
          background-position: -200% center;
        }
      }

      #slogan:hover #engage {
        box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px 0px;
      }

      #slogan:hover #play {
        box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px 0px;
      }

      .wechat {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 16px;
        grid-row-gap: 0px;
        align-items: center;
        justify-items: center;
        margin: 16px auto;
      }

      .wechat div div:first-child, .wechat div div:first-child img {
        height: 160px;
        width: 160px;
      }

      .note {
        margin: 8px auto;
        text-align: center;
        font-size: 12px;
      }

    `;
  }

  constructor() {
    super();
  }

  updated(changedProperties: any) {
    if (changedProperties.has('enableBack')) {
      console.log('enableBack', this.enableBack);
    }
  }

  render() {
    return html`
      <div class="wechat">
        <div>
          <div>
            <a href="http://hdxu.cn/eNmed" title="???????????????????????????"><img src="assets/2022/hdx_t.png" alt="????????????"></a>
          </div>
          <div class="note">????????????</div>
        </div>
        <div>
          <div>
            <img src="assets/2022/promote_t.png" alt="????????????">
          </div>
          <div class="note">?????????????????????</div>
        </div>
        <div>
          <div>
            <img src="assets/2022/wechat_group_1_t.png" alt="PWA ??????????????????">
          </div>
          <div class="note">PWA ?????????????????? (8???8??????)</div>
        </div>
        <div>
          <div>
            <img src="assets/2022/wechat_admin_invite_t.png" alt="????????????????????????">
          </div>
          <div class="note">????????????????????????</div>
        </div>
      </div>
      <div id="slogan">
        <span id="engage">??? Web ??????</span>
        <span id="play">Play for Team Web</span>
      </div>
      <footer>
        <div>&copy;2022 <a href="https://pwadev.io" title="?????? PWA ????????????">?????? PWA ????????????</a></div>
        <div class="suggest">
          <a href="/code-of-conduct" appearance="primary" title="????????????">????????????</a>
          <a href="/privacy" appearance="primary" title="??????">??????</a>
          <a href="/about" appearance="primary" title="??????">??????</a>  
        </div>
      </footer>
    `;
  }
}
