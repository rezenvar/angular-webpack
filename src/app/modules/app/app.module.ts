


// vendor
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';




// other
import { AppComponents, ListAppComponent } from './app.components';
import { ListAppService } from './app.services';
import { ROUTES } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		RouterModule.forRoot(ROUTES, { useHash: DEBUG, preloadingStrategy: PreloadAllModules })
	],
	declarations: ListAppComponent,
	providers: ListAppService,
	bootstrap: [AppComponents.AppComponent]
})
export class AppModule {
	constructor(public appRef: ApplicationRef) { }
	hmrOnInit(store) {
		if (!store || !store.state) return;
		console.log('HMR store', store);
		console.log('store.state.data:', store.state.data)
		if ('restoreInputValues' in store) store.restoreInputValues();
		this.appRef.tick();
		delete store.state;
		delete store.restoreInputValues;
	}
	hmrOnDestroy(store) {
		let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
		store.disposeOldHosts = createNewHosts(cmpLocation)
		store.state = { data: 'yolo' };
		store.restoreInputValues = createInputTransfer();
		removeNgStyles();
	}
	hmrAfterDestroy(store) {
		store.disposeOldHosts()
		delete store.disposeOldHosts;
	}
}
