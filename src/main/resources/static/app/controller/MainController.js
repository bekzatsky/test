Ext.define('Sample.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: [
        'DepartmentView', 'EmployeeView'
    ],

    stores: [
        'DepartmentStore', 'EmployeeStore'
    ],

    models: [
        'Department', 'Employee'
    ],

    var: recDep = null,

    init: function() {
        this.control({
            'departmentlist': {
                itemclick:this.clickItemDepartment
            },
            'departmentlist button[action=add]': {
                click: this.addDepartment
            },
            'departmentlist button[action=edit]': {
                click: this.editDepartment
            },
            'employeelist': {
                itemclick:this.clickItemEmployee
            },
            'employeelist button[action=add]': {
                click: this.addEmployee
            },
            'employeelist button[action=edit]': {
                click: this.editEmployee
            }

        })
    },

    addEmployee: function() {
        Ext.create('Sample.view.EmployeeEdit').setTitle('Добавить');
    },

    editEmployee: function(grid, record) {
        Ext.create('Sample.view.EmployeeEdit');
        var formEdit = Ext.getCmp('formEditId').getForm();
        formEdit.loadRecord(this.rec);
    },

    clickItemDepartment: function (grid, record) {

        Ext.getCmp('editDepartmentId').setDisabled(false);

        this.rec = record;

        var departmentId = record.data.departmentId;
        Ext.getStore('EmployeeStore').getProxy().url='/api/employeeByDepartment/' + departmentId;
        Ext.getStore('EmployeeStore').load();
    },

    clickItemEmployee: function (grid, record) {

        Ext.getCmp('editEmployeeId').setDisabled(false);

        this.rec = record;
    },

    addDepartment: function() {
        Ext.create('Sample.view.DepartmentEdit').setTitle('Добавить');
    },

    editDepartment: function() {
        Ext.create('Sample.view.DepartmentEdit').setTitle('Редактировать');
        var formEdit = Ext.getCmp('departmentFormEditId').getForm();
        formEdit.loadRecord(this.rec);
    }
});