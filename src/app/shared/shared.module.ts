import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SnakeToTitlePipe } from './pipes/snake-to-title.pipe';

@NgModule({
  declarations: [LoadingComponent, SnakeToTitlePipe],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoadingComponent, SnakeToTitlePipe],
})
export class SharedModule {}
