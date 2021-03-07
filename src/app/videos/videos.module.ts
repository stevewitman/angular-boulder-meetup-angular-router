import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosPageComponent } from './videos-page/videos-page.component';

@NgModule({
  declarations: [VideosPageComponent],
  imports: [
    CommonModule,
    VideosRoutingModule
  ],
  exports: [VideosPageComponent]
})
export class VideosModule { }
