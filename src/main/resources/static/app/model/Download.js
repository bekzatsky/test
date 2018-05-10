Ext.define('Sample.model.Download', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {name:'id', type:'long'},
        {name:'filename', type:'string'},
        {name:'path', type:'string'},
        {name:'status', type:'string'}
    ]
});