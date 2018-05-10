Ext.define('Sample.view.DownloadView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.download',

    title: 'Выгрузка',
    store: 'DownloadStore',

    initComponent: function() {

        this.columns = [
            {header: 'ID', dataIndex: 'id', flex:1},
            {header: 'Имя файла', dataIndex: 'filename', flex:4},
            {header: 'Путь к файлу', dataIndex: 'path', flex:4},
            {header: 'Статус', dataIndex: 'status', flex:3}
        ];

        this.dockedItems = [
            {
                xtype:'toolbar',
                items: [
                    {
                        text: 'Обновить',
                        action: 'refresh',
                        id: 'refreshStore'
                    },
                    {
                        text: 'Скачать',
                        action: 'download',
                        disabled: true,
                        id: 'downloadFile'
                    }
                ]
            }
        ];

        this.callParent(arguments);
    }
});