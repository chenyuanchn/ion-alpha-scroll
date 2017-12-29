import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlphaScrollComponent} from './alpha-scroll.component';
import {AlphaScrollService} from './alpha-scroll.service';
import {OrderBy} from './order-by';
import {IonicModule} from 'ionic-angular';

export * from './alpha-scroll.component';
export * from './alpha-scroll.service';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        AlphaScrollComponent,
        OrderBy
    ],
    exports: [
        AlphaScrollComponent,
        OrderBy
    ]
})
export class AlphaScrollModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AlphaScrollModule,
            providers: [OrderBy, AlphaScrollService]
        };
    }
}
