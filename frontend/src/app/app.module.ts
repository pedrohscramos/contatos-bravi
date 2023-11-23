import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from './Material.module';
import { AppEffects } from './Store/Common/App.Effects';
import { PersonEffects } from './Store/Person/Person.Effects';
import { PersonReducer } from './Store/Person/Person.Reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpersonComponent } from './component/addperson/addperson.component';
import { PersonlistingComponent } from './component/personlisting/personlisting.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonlistingComponent,
    AddpersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({person:PersonReducer}, {}),
    EffectsModule.forRoot([PersonEffects, AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
