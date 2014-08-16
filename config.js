
CKEDITOR.stylesSet.add( 'whsol', [
	//table
    { name: 'table', element: 'table', attributes: { class:"table"} },
    { name: 'table-bordered', element: 'table', attributes: { class:"table table-bordered"} },
    { name: 'table-striped', element: 'table', attributes: { class:"table table-striped"} },
    { name: 'table-hover', element: 'table', attributes: { class:"table table-hover"} },
    { name: 'table-condensed', element: 'table', attributes: { class:"table table-condensed"} },
    //tr
    { name: 'active', element: 'tr', attributes: { class:"active"} },
    { name: 'success', element: 'tr', attributes: { class:"success"} },
    { name: 'warning', element: 'tr', attributes: { class:"warning"} },
    { name: 'danger', element: 'tr', attributes: { class:"danger"} },
    { name: 'info', element: 'tr', attributes: { class:"info"} },
    //td
    { name: 'active', element: 'td', attributes: { class:"active"} },
    { name: 'success', element: 'td', attributes: { class:"success"} },
    { name: 'warning', element: 'td', attributes: { class:"warning"} },
    { name: 'danger', element: 'td', attributes: { class:"danger"} },
    { name: 'info', element: 'td', attributes: { class:"info"} },
    //p
    { name: 'lead', element: 'p', attributes: { class:"lead"} },
    { name: 'text-left', element: 'p', attributes: { class:"text-left"} },
    { name: 'text-center', element: 'p', attributes: { class:"text-center"} },
    { name: 'text-right', element: 'p', attributes: { class:"text-right"} },
    { name: 'text-justify', element: 'p', attributes: { class:"text-justify"} },
    { name: 'text-nowrap', element: 'p', attributes: { class:"text-nowrap"} },
    { name: 'text-lowercase', element: 'p', attributes: { class:"text-lowercase"} },
    { name: 'text-uppercase', element: 'p', attributes: { class:"text-uppercase"} },
    { name: 'text-capitalize', element: 'p', attributes: { class:"text-capitalize"} },
    { name: 'text-muted', element: 'p', attributes: { class:"text-muted"} },
    { name: 'text-primary', element: 'p', attributes: { class:"text-primary"} },
    { name: 'text-success', element: 'p', attributes: { class:"text-success"} },
    { name: 'text-info', element: 'p', attributes: { class:"text-info"} },
    { name: 'text-warning', element: 'p', attributes: { class:"text-warning"} },
    { name: 'text-danger', element: 'p', attributes: { class:"text-danger"} },
    { name: 'bg-primary', element: 'p', attributes: { class:"bg-primary"} },
    { name: 'bg-success', element: 'p', attributes: { class:"bg-success"} },
    { name: 'bg-info', element: 'p', attributes: { class:"bg-info"} },
    { name: 'bg-warning', element: 'p', attributes: { class:"bg-warning"} },
    { name: 'bg-danger', element: 'p', attributes: { class:"bg-danger"} },
    //ul
    { name: 'list-unstyled', element: 'ul', attributes: { class:"list-unstyled"} },
    { name: 'list-inline', element: 'ul', attributes: { class:"list-inline"} },
    { name: 'list-group', element: 'ul', attributes: { class:"list-inline"} },
    //li
    { name: 'list-group-item', element: 'li', attributes: { class:"list-group-item"} },
    //dl
    { name: 'dl-horizontal', element: 'dl', attributes: { class:"dl-horizontal"} },
    //img
    { name: 'img-responsive', element: 'img', attributes: { class:"img-responsive"} },
    { name: 'img-rounded', element: 'img', attributes: { class:"img-rounded"} },
    { name: 'img-circle', element: 'img', attributes: { class:"img-circle"} },
    { name: 'img-thumbnail', element: 'img', attributes: { class:"img-thumbnail"} },
    //div
    { name: 'pull-left', element: 'div', attributes: { class:"pull-left"} },
    { name: 'pull-right', element: 'div', attributes: { class:"pull-right"} },
    { name: 'center-block', element: 'div', attributes: { class:"center-block"} },
    { name: 'clearfix', element: 'div', attributes: { class:"clearfix"} },
    { name: 'panel panel-default', element: 'div', attributes: { class:"panel panel-default"} },
    { name: 'panel panel-primary', element: 'div', attributes: { class:"panel panel-primary"} },
    { name: 'panel panel-success', element: 'div', attributes: { class:"panel panel-success"} },
    { name: 'panel panel-info', element: 'div', attributes: { class:"panel panel-info"} },
    { name: 'panel panel-warning', element: 'div', attributes: { class:"panel panel-warning"} },
    { name: 'panel panel-danger', element: 'div', attributes: { class:"panel panel-danger"} },
    { name: 'panel-heading', element: 'div', attributes: { class:"panel-heading"} },
    { name: 'panel-body', element: 'div', attributes: { class:"panel-body"} },
    { name: 'panel-footer', element: 'div', attributes: { class:"panel-footer"} },
    { name: 'well', element: 'div', attributes: { class:"well"} },
    { name: 'well well-lg', element: 'div', attributes: { class:"well well-lg"} },
    { name: 'well well-sm', element: 'div', attributes: { class:"well well-sm"} }

]);

CKEDITOR.editorConfig = function( config ) {
        config.stylesSet = 'whsol';
};