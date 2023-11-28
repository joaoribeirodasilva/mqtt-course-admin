import {Component, Vue} from 'vue-facing-decorator';
import {PfDropdown} from '@profabric/vue-components';

@Component({
    name: 'languages-dropdown',
    components: {
        'pf-dropdown': PfDropdown
    }
})
export default class Languages extends Vue {
    public selectedLanguage: string = null;
    public languages: any = [
        {
            key: 'en',
            flag: 'flag-icon-us',
            label: 'English'
        },
        // {
        //     key: 'de',
        //     flag: 'flag-icon-de',
        //     label: 'languages.german'
        // },
        // {
        //     key: 'fr',
        //     flag: 'flag-icon-fr',
        //     label: 'languages.french'
        // },
        {
            key: 'es',
            flag: 'flag-icon-es',
            label: 'Español'
        },
        {
            key: 'pt',
            flag: 'flag-icon-pt',
            label: 'Português'
        },         
        {
            key: 'tr',
            flag: 'flag-icon-tr',
            label: 'Türkçe'
        }
    ];

    public mounted() {
        this.selectedLanguage = this.$i18n.locale;
    }

    get flagIcon() {
        // if (this.selectedLanguage === 'de') {
        //     return 'flag-icon-de';
        // }
        // if (this.selectedLanguage === 'fr') {
        //     return 'flag-icon-fr';
        // }
        if (this.selectedLanguage === 'es') {
            return 'flag-icon-es';
        }
        if (this.selectedLanguage === 'pt') {
            return 'flag-icon-pt';
        }
        if (this.selectedLanguage === 'tr') {
            return 'flag-icon-tr';
        }              
        return 'flag-icon-us';
    }

    public changeLanguage(langCode: string) {
        if (this.$i18n.locale !== langCode) {
            this.$i18n.locale = langCode;
            this.selectedLanguage = langCode;
        }
    }
}
