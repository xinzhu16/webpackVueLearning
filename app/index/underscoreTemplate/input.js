/**
 * Created by Administrator on 17/6/1.
 */
// var u = require('../../../static/js/underscore');
import $ from '../../../static/js/jquery-3.1.0';
import template from '../../../static/js/template'
$('#temp').html('dddddd');
var $pagePopup = $('#temp');
var showPopup = function(id, data) {
    $pagePopup.removeClass("hide");
    var compiled = template($("#" + id).html());
    $pagePopup.html(compiled(data||{}));
};
showPopup('input-box');
export default {}