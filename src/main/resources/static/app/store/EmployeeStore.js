Ext.define('Sample.store.EmployeeStore', {
    extend: 'Ext.data.Store',
    model: 'Sample.model.Employee',
    autoLoad: true,

    proxy: {
        type: 'rest',
        method: 'GET',
        url: '/api/employees',
        reader: {
            type: 'json',
            root: 'employees',
            successProperty: 'success'
        }
    }
});