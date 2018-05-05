Ext.define('Sample.view.Download', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.download',

    title: 'Выгрузка',

    initComponent: function() {

        this.columns = [
            {header: 'ID', dataIndex: 'name', flex:1},
            {header: 'Имя файла', dataIndex: 'email', flex:4},
            {header: 'Путь к файлу', dataIndex: 'email', flex:4},
            {header: 'Статус', dataIndex: 'email', flex:3}
        ];

        this.callParent(arguments);
    }
});