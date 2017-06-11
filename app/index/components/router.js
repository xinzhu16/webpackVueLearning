
/**
 * Created by Administrator on 17/6/11.
 */
import flex from './flex';
import boxModel from './boxModel';
import Favlist from './Favlist';
export default {
    router:[{'path':'',redirect:'box'},
        {'path':'flex',component:Favlist},
        {path:'box',component:boxModel}]
}