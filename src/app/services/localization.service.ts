import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService, LangChangeEvent} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService{

    langMode: boolean;
    LANG_TOKEN: string = 'LANG_TOKEN';
    selectedLanguage: any;
    
    constructor(public translate: TranslateService){
         
        translate.addLangs(['ar', 'en']);
        let lang = localStorage.getItem(this.LANG_TOKEN);
        if(lang){
            translate.setDefaultLang(lang);
            if(lang == 'en'){
                this.langMode = false;
            } else {
                this.langMode = true;
            }
        } else {
            const browserLang = translate.getBrowserLang();
            translate.use(browserLang.match(/ar|en/) ? browserLang : 'en');
        }

        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            localStorage.setItem(this.LANG_TOKEN, event['lang']);            
            console.log("subscription reply", event);
            translate.setDefaultLang(event["lang"]);
            });            
       }

       

    // TODO: uncomment method 
    useLanguage() {
        if(this.langMode){
            this.translate.use('en');
            this.langMode = false;
        } else {
            this.translate.use('ar');
            this.langMode = true;
        }
    }
}