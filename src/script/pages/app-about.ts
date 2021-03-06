import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-about')
export class AppAbout extends LitElement {
  static get styles() {
    return css`
    .about {
      padding: 0 16px;
      margin: 1rem 0 0rem 0;
      color: #3d3d3d;
    }

    h2 {
      margin: 0;
      padding: 16px 0;
      color: rgba(0, 113, 197, 0.9);
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.4);
    }

    fluent-card:hover {
      background: rgba(255, 255, 255, 0.95);
      color: #000;
    }

    fluent-card h3 {
      margin: 10px auto;
    }

    fluent-card p {
      margin: 10px auto;
    }

    @media(prefers-color-scheme: light) {
    }

    @media(prefers-color-scheme: dark) {
    }

    @media (min-width: 1024px) {
    }

    .spam {
      display: none;
    }

    
    .wechat {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
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

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <div class="about">
        <h2>关于中国 PWA 开发者日</h2>
        <fluent-card>
          <h3>为什么要参加？</h3>
          <p>中国 PWA 开发者日的使命是助您使用渐进式 Web 应用（PWA）取得成功。</p>
          <p>创建此活动是为了分享国内和国际厂商的 PWA 的成功案例，传播有关 PWA 的技术及实践，包括如何成功构建 PWA 以及将 PWA 技术集成到您现有的 Web 应用中。我们不专注于推销特定的 Web 框架或技术栈。</p>
          <p>该活动免费。</p>
        </fluent-card>
        <fluent-card>
          <h3>主办方</h3>
          <p>中国 PWA 开发者日由参与创建 PWA 技术的几家公司的人员合作举办。</p>
          <p>主办方：
            <ul>
              <li>2021 年：英特尔 鼎道智联</li>
              <li>2022 年：英特尔 微软 谷歌</li>
            </ul>  
          </p>
          <p>2022 年主办方成员：
            <ul>
              <li>张敏 英特尔软件技术经理</li>
              <li>宋青见 微软首席产品经理</li>
              <li>丛慧君 谷歌高级解决方案顾问</li>
            </ul>  
          </p>
          <p>联系我们: 
            <ul>
              <li>pwadeveloperday<span class="spam">spam</span>@<span class="spam">spam</span>outlook<span class="spam">spam</span>.com</li>
            </ul>
            <div class="wechat">
              <div>
                <div>
                  <img src="assets/2022/wechat_admin_invite_t.png" alt="加此微信邀请入群">
                </div>
                <div class="note">邀请加入 PWA 开发者交流群</div>
              </div>
            </div>
          </p>
          </fluent-card>
      </div>
      <app-footer></app-footer>
    `;
  }
}
