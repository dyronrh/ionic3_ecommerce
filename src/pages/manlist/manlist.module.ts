import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManlistPage } from './manlist';

@NgModule({
  declarations: [
    ManlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ManlistPage),
  ],
})
export class ManlistPageModule {}
