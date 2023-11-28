import {IUser} from '@/interfaces/user';
import {Component, Vue} from 'vue-facing-decorator';
import MenuItem from '@/components/menu-item/menu-item.vue';
import {PfImage} from '@profabric/vue-components';
import SidebarSearch from '@/components/sidebar-search/sidebar-search.vue';
import {i18n} from '@/translation';

@Component({
    name: 'app-menu-sidebar',
    components: {
        'app-menu-item': MenuItem,
        'app-sidebar-search': SidebarSearch,
        'pf-image': PfImage
    }
})
export default class MenuSidebar extends Vue {
    menu = MENU;

    get authentication(): IUser {
        return this.$store.getters['auth/authentication'];
    }

    get sidebarSkin() {
        return this.$store.getters['ui/sidebarSkin'];
    }
}

export const MENU = [
    {
        name: i18n.global.t('labels.dashboard'),
        path: '/',
        icon: "fa fas fa-chart-line",
        adminOnly: false
    },
    {
        name: i18n.global.t('labels.devices'),
        path: '/blank',
        icon: "fa fas fa-microchip",
        adminOnly: false
    },
    {
        name: i18n.global.t('labels.users'),
        path: '/blank',
        icon: "fa fas fa-users",
        adminOnly: true
    },    
    // {
    //     name: i18n.global.t('labels.mainMenu'),
    //     children: [
    //         {
    //             name: i18n.global.t('labels.subMenu'),
    //             path: '/sub-menu-1'
    //         },

    //         {
    //             name: i18n.global.t('labels.blank'),
    //             path: '/sub-menu-2'
    //         }
    //     ]
    // }
];
