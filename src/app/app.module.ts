import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HeaderComponent } from './layout/header/header.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CodeFormatComponent } from './components/code-format/code-format.component';
import { SearchComponent } from './components/search/search.component';
import { InputComponent } from './components/input/input.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    AvatarComponent,
    CodeFormatComponent,
    SearchComponent,
    InputComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
