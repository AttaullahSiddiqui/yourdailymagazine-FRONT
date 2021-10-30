import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class AuthService implements CanActivate {
  constructor(private titleService: Title, private metaService: Meta) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      switch (state.url) {
        case "/categories": {
          this.titleService.setTitle(
            "Don’t Look Any Further For Your Essentials BuyMeDeal Offers You Everything"
          );
          this.metaService.updateTag({
            property: "og:title",
            content: "Categories",
          });
          // document.querySelector('meta[name="og:title"]').setAttribute("content", "Categories");
          // document.querySelector('meta[name="description"]').setAttribute("content", "You can get anything on DIGMYCART from your office supplies to your bedroom makeover. Rock your professional and personal life at the same time with DIGMYCART");
          // document.querySelector('meta[property="og:description"]').setAttribute("content", "You can get anything on DIGMYCART from your office supplies to your bedroom makeover. Rock your professional and personal life at the same time with DIGMYCART");
          this.metaService.updateTag({
            name: "description",
            content:
              "You can get anything on DigMyCart from your office supplies to your bedroom makeover. Rock your professional and personal life at the same time with DigMyCart",
          });
          this.metaService.updateTag({
            property: "og:description",
            content:
              "You can get anything on DigMyCart from your office supplies to your bedroom makeover. Rock your professional and personal life at the same time with DigMyCart",
          });
          break;
        }
        case "/stores": {
          this.titleService.setTitle(
            "The Best Stores At Your Favourite Place BuyMeDeal"
          );
          this.metaService.updateTag({
            property: "og:title",
            content: "Stores",
          });
          this.metaService.updateTag({
            name: "description",
            content:
              "Many Stores that provide you just according to your style. Embrace your style with our stores. Embrace your class with DigMyCart",
          });
          this.metaService.updateTag({
            property: "og:description",
            content:
              "Many Stores that provide you just according to your style. Embrace your style with our stores. Embrace your class with DigMyCart",
          });
          break;
        }
        case "/blogs": {
          this.titleService.setTitle("BuyMeDeal Brings The Top Trends For You");
          this.metaService.updateTag({
            name: "description",
            content:
              "Getting your hands on the latest trends is a fundamental task to compete in the race and know what's best for you. DigMyCart is here to update you with the newest vogue",
          });
          this.metaService.updateTag({
            property: "og:description",
            content:
              "Getting your hands on the latest trends is a fundamental task to compete in the race and know what's best for you. DigMyCart is here to update you with the newest vogue",
          });
          this.metaService.updateTag({
            property: "og:title",
            content: "DIGMYCART Brings Latest Trends On Your Screens",
          });
          break;
        }
        case "/products": {
          this.titleService.setTitle(
            "Explore The Best Products From Around The World At BuyMeDeal"
          );
          this.metaService.updateTag({
            name: "description",
            content:
              "From décor to apparel and healthy diet supplements. You can check out mind-blowing products at DigMyCart and make yourself stand out from others in no time",
          });
          this.metaService.updateTag({
            property: "og:description",
            content:
              "From décor to apparel and healthy diet supplements. You can check out mind-blowing products at DigMyCart and make yourself stand out from others in no time",
          });
          this.metaService.updateTag({
            property: "og:title",
            content: "Products on DigMyCart",
          });
          break;
        }
        case "/home": {
          this.titleService.setTitle("BuyMeDeal | Home");
          this.metaService.updateTag({
            name: "description",
            content:
              "Find all the latest coupons and promo codes of thousands of online stores for a hassle-free and convenient online shopping experience with digmycart.com. We provide the best ongoing deals to our global customers and strive hard to satisfy them in finding what they are searching for. Take a seat, sit back and relax while browsing through our website and get enlightened to massive discounts on luxurious brands. We have further categorized the website to make your shopping experience better. Shop high-end brands with coupons and promo codes with digmycart.com and see your dreams come true",
          });
          this.metaService.updateTag({
            property: "og:description",
            content:
              "Find all the latest coupons and promo codes of thousands of online stores for a hassle-free and convenient online shopping experience with digmycart.com. We provide the best ongoing deals to our global customers and strive hard to satisfy them in finding what they are searching for. Take a seat, sit back and relax while browsing through our website and get enlightened to massive discounts on luxurious brands. We have further categorized the website to make your shopping experience better. Shop high-end brands with coupons and promo codes with digmycart.com and see your dreams come true",
          });
          this.metaService.updateTag({ property: "og:title", content: "Home" });
          break;
        }
        case "/event": {
          this.titleService.setTitle(
            "Enjoy exquisite discount offers at special events only at DigMyCart."
          );
          this.metaService.updateTag({
            name: "description",
            content:
              "Do you want to make the best out of the special days of the year? DigMyCart is here with amazing coupon codes, vouchers and discount deals to help you in it.",
          });
          this.metaService.updateTag({
            property: "og:description",
            content:
              "Do you want to make the best out of the special days of the year? DigMyCart is here with amazing coupon codes, vouchers and discount deals to help you in it.",
          });
          this.metaService.updateTag({
            property: "og:title",
            content:
              "Enjoy exquisite discount offers at special events only at DigMyCart.",
          });
          break;
        }
      }
      return resolve(true);
    });
  }
}
