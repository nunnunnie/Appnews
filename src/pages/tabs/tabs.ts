import { Component } from '@angular/core';

/*import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';*/

import { PopularPage } from '../popular/popular';
import { SciencePage } from '../science/science';
import { MoviePage } from '../movie/movie';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PopularPage;
  tab2Root = SciencePage;
  tab3Root = MoviePage;

  constructor() {

  }
}
