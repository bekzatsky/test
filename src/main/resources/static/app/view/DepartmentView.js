Ext.define('Sample.view.DepartmentView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.departmentlist',

    title: 'Список департаментов',
    store: 'DepartmentStore',

    initComponent: function() {

        this.dockedItems = [
            {
                xtype:'toolbar',
                items: [
                    {
                        text: 'Добавить',
                        action: 'add'
                    },
                    {
                        text: 'Редактировать',
                        action: 'edit',
                        disabled: true,
                        id: 'editDepartmentId'
                    },
                    {
                        text: 'Удалить',
                        action: 'delete',
                        disabled: true,
                        id: 'deleteDepartmentId'
                    }
                ]
            }
        ];

        this.columns = [
            {header: 'ID',  dataIndex: 'departmentId',  flex: 1},
            {header: 'Департамент', dataIndex: 'departmentName', flex: 11}
        ];

        this.callParent(arguments);
    }
});