Ext.define('Sample.store.DownloadStore', {
    extend: 'Ext.data.Store',
    model: 'Sample.model.Download',
    autoLoad: true,

    proxy: {
        type: 'rest',
        method: 'GET',
        url: '/api/downloads',
        reader: {
            type: 'json',
            root: 'departments',
            successProperty: 'success'
        }
    }
});