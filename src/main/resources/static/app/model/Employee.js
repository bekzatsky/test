Ext.define('Sample.model.Employee', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {name:'employeeId', type:'long'},
        {name:'firstName', type:'string'},
        {name:'lastName', type:'string'}
    ]
});