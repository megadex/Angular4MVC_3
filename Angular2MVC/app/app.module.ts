import { NgModule, ErrorHandler } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ManageUser } from './Components/manageuser.component';
import { UserComponent } from './Components/user.component';
import { HomeComponent } from './Components/home.component';
import { UserService } from './Service/user.service';
import { UserFilterPipe } from './filter/user.pipe';
import { SearchComponent } from './shared/search.component';
import AppErrorHandler from './shared/errorhandler';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule, BrowserAnimationsModule, MaterialModule, MdNativeDateModule],
    declarations: [AppComponent, HomeComponent, UserComponent, UserFilterPipe, SearchComponent, ManageUser],
    entryComponents: [ManageUser],
    providers: [{ provide: ErrorHandler, useClass: AppErrorHandler },{ provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]
})

export class AppModule { }