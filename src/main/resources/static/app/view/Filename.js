Ext.define('Sample.view.Filename', {
    extend: 'Ext.window.Window',
    alias: 'widget.filename',
    id: 'filenamewin',
    title: 'Введите имя файла',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                id: 'filenameedit',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'filename',
                        fieldLabel: 'Имя файла',
                        id: 'filename'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            },
            {
                text: 'Отменить',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});