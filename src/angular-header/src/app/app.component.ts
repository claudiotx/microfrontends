import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'AngularAppHeader',
  template: `
    <header class="w-100 pa3 ph5-ns bg-white bb b--black-10">
      <div class="db dt-ns mw9 center w-100">
        <div class="db dtc-ns v-mid tl w-50">
          <a href="javascript:;" (click)="onClick($event)" class="dib f5 f4-ns fw6 mt0 mb1 link black-70" title="Home">
            {{imRunning}}
            <div class="dib">
              <small class="nowrap f6 mt2 mt3-ns pr2 black-70 fw2">v7.2 via CLI</small>
            </div>
          </a>
        </div>
        <nav class="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
          <a title="Documentation" href="/docs/" class="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
            Docs
          </a>
          <a *ngIf="wasClicked" title="Easter Egg" href="/docs/" class="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
            Easter Egg
          </a>
          <a title="GitHub" href="http://github.com/claudiotx/" class="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dn dib-l">
            GitHub
          </a>
        </nav>
      </div>
    </header>
	`
})
export class AppComponent {
  protected imRunning = `Angular ${VERSION.full}`;
  protected wasClicked = false;

  onClick(evt: any) {
    console.log('I was clicked! Yes!!');
    this.wasClicked = true;
  }
}
