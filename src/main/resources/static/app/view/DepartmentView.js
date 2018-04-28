Ext.define('Sample.view.DepartmentView' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.departmentlist',

    title: 'Список департаментов',
    store: 'DepartmentStore',

    initComponent: function() {

        this.columns = [
            {header: 'ID',  dataIndex: 'departmentId',  flex: 1},
            {header: 'Департамент', dataIndex: 'departmentName', flex: 11}
        ];

        this.callParent(arguments);
    }
});