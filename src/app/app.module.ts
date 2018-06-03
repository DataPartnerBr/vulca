import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DPApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    DPApp,
    AboutPage,
    ContactPage,
    HomePage,
    IntroPage,
    RegisterPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(DPApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DPApp,
    AboutPage,
    ContactPage,
    HomePage,
    IntroPage,
    RegisterPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
