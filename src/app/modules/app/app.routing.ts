
import { HomeComponent } from '../../components/home/home.component';
import { NoContentComponent } from '../../components/no-content/no-content.component';

export const ROUTES = [
	{ path: '', component: HomeComponent },
	{ path: '**',    component: NoContentComponent },
]