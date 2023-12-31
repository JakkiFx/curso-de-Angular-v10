import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayComponent } from './components/array/array.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { EventsComponent } from './components/events/events.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FilhoComponent } from './components/input-properties/filho/filho.component';
import { PaiComponent } from './components/input-properties/pai/pai.component';
import { OutputPaiComponent } from './components/output-properties/output-pai/output-pai.component';
import { OutputFilhoComponent } from './components/output-properties/output-filho/output-filho.component';
import { CycleComponent } from './components/cycle/cycle.component';
import { InputDataComponent } from './components/input-data/input-data.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { DiretivesComponent } from './components/diretives/diretives.component';
import { OperatorElvisComponent } from './components/operator-elvis/operator-elvis.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    DataBindingComponent,
    StyleBindingComponent,
    EventsComponent,
    TwoWayBindingComponent,
    FilhoComponent,
    PaiComponent,
    OutputPaiComponent,
    OutputFilhoComponent,
    CycleComponent,
    InputDataComponent,
    LibrariesComponent,
    DiretivesComponent,
    OperatorElvisComponent,
    NgContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
