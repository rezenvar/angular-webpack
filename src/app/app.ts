import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app/app.module';
import { bootloader  } from "@angularclass/hmr";

import './../styles/main.scss'




if (NODE_ENV === 'production') enableProdMode();


const main = () => platformBrowserDynamic().bootstrapModule(AppModule);



bootloader(main)