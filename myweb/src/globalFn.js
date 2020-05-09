import Vue from 'vue';

// import _ from 'lodash'
// import Promise from 'bluebird'
// import './service/axiosInterceptors';
// import { notify } from './service/UI'
// import moment from 'moment'
// import axios from 'axios'
// import VueClipboard from 'vue-clipboard2'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
// import VueVirtualScroller from 'vue-virtual-scroller'
// import PrettyCheckbox from 'pretty-checkbox-vue';
// import { fbAccount } from './service/Modules/accounts';
// import { FileProcess } from './service/Modules/fileProcess';
// import { ChromeInstante } from './service/Chrome';
// import Ultils from './service/Ultils';
// import Zcloud from './service/API/Zcloud';
// import ServerAPI from './service/API/ServerAPI'
// import { VueContext } from 'vue-context'
// import VueNumerals from 'vue-numerals';
// import UnlockNoBackup from './service/Modules/unlockNoBackup';

// Vue.component('vue-context', VueContext)
// Vue.use(require('vue-moment'), {
//     moment
// })
Vue.use(PerfectScrollbar)
    // Vue.use(VueVirtualScroller)
    // Vue.use(PrettyCheckbox)
    // VueClipboard.config.autoSetContainer = true
    // Vue.use(VueClipboard)
    // Vue.use(VueNumerals)
    // window.ServerAPI = ServerAPI
    // window.FileProcess = FileProcess
    // window.ZcloudAPI = Zcloud
    // window.axios = axios
    // window.notify = notify
    // window.moment = moment
    // window.zlib = {
    //     _: _,
    //     PromiseMap: Promise.map,
    //     fbAccount: new fbAccount(),
    //     chromeHelpers: new ChromeInstante(),
    //     Ultils: Ultils
    // }
    // try {
    //     let port = chrome.runtime.connect('fhbjgbiflinjbdggehcddcbncdddomop', { name: "webFbChanel" });
    //     var that = this
    //     port.postMessage({
    //         method: 'getVersion'
    //     }, function (a) {
    //     });
    //     port.onMessage.addListener(function (message) {
    //         if (message && message.data) {
    //             if (message.data !== "2.0.0") {
    //                 notify('error', 'Vui lòng cập nhật extension bản 2.0.0')
    //                 window.open('https://drive.google.com/file/d/1zmLSuM7BKXaRSoLjolGYmxvTmVVo6BQL/view?usp=sharing');
    //             }
    //         }
    //     });
    // } catch (error) {

// }