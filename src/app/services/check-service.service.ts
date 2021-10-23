import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Title, Meta } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class CheckService implements CanActivate {

  constructor(private titleService: Title, private metaService: Meta) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      switch (state.url) {
        case "/categories": {
          this.removeTags();
          this.titleService.setTitle("From Office To Home - DIGMYCART Gives You Everything ");
          this.metaService.addTag({ property: 'og:title', content: 'Categories' });
          // document.querySelector('meta[name="og:title"]').setAttribute("content", "Categories");
          // document.querySelector('meta[name="description"]').setAttribute("content", "You can get anything on DIGMYCART from your office supplies to your bedroom makeover. Rock your professional and personal life at the same time with DIGMYCART");
          // document.querySelector('meta[property="og:description"]').setAttribute("content", "You can get anything on DIGMYCART from your office supplies to your bedroom makeover. Rock your professional and personal life at the same time with DIGMYCART");
          this.metaService.addTag({ name: 'description', content: 'You can get anything on DIGMYCART from your office supplies to your bedroom makeover. Rock your professional and personal life at the same time with DIGMYCART' });
          this.metaService.addTag({ property: 'og:description', content: 'You can get anything on DIGMYCART from your office supplies to your bedroom makeover. Rock your professional and personal life at the same time with DIGMYCART' });
          break;
        }
        case "/stores": {
          this.removeTags();
          this.titleService.setTitle("Amazing Stores Just A Click Away With DIGMYCART");
          this.metaService.addTag({ property: 'og:title', content: 'Stores' });
          // document.querySelector('meta[name="og:title"]').setAttribute("content", "Stores");
          // document.querySelector('meta[name="description"]').setAttribute("content", "Many Stores that provide you just according to your style. Embrace your style with our stores. Embrace your class with DIGMYCART");
          // document.querySelector('meta[property="og:description"]').setAttribute("content", "Many Stores that provide you just according to your style. Embrace your style with our stores. Embrace your class with DIGMYCART");
          this.metaService.addTag({ name: 'description', content: 'Many Stores that provide you just according to your style. Embrace your style with our stores. Embrace your class with DIGMYCART' });
          this.metaService.addTag({ property: 'og:description', content: 'Many Stores that provide you just according to your style. Embrace your style with our stores. Embrace your class with DIGMYCART' });
          break;
        }
      }
      return resolve(true);
    })
  }
  removeTags() {
    this.metaService.removeTag("property='og:title");
    this.metaService.removeTag("name='description");
    this.metaService.removeTag("property='og:description");
  }
}
