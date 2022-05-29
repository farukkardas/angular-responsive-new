import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './pages/parent/parent.component';
import { DataShareComponent } from './service/data-share/data-share.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './components/footer/footer.component';
import {MatRippleModule} from '@angular/material/core';
import { ContactComponent } from './pages/contact/contact.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {  HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './pages/service/services.component';
import {MatInputModule} from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    DataShareComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatRippleModule,
    MatDividerModule,
    MatExpansionModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    AnimateOnScrollModule.forRoot(),
    ToastrModule.forRoot({titleClass:'toastr-title',messageClass:'toastr-message',positionClass: 'toast-bottom-right',toastClass:'toast-class toast-success'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
