Ext.define('Sample.store.DepartmentStore', {
    extend: 'Ext.data.Store',
    model: 'Sample.model.Department',
    autoLoad: true,

    proxy: {
        type: 'rest',
        method: 'GET',
        url: '/api/departments',
        reader: {
            type: 'json',
            root: 'departments',
            successProperty: 'success'
        }
    }
});