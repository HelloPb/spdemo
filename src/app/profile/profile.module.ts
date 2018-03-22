import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { ProfileRoutingModule } from './profile-routing.module';
import { GmapModule } from '../shared/gmap/gmap.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    GmapModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
