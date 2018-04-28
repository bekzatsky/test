Ext.define('Sample.model.Department', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {name:'departmentId', type:'long'},
        {name:'departmentName', type:'string'}
    ]
});