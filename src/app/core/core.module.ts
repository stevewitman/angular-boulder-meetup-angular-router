import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MaterialModule } from '../shared/material/material.module';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SigninComponent],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [AuthService, AuthGuard],
})
export class CoreModule {}
