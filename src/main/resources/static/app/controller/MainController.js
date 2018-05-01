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
            'departmentedit button[action=save]': {
                click: this.saveDepartment
            },
            'departmentlist button[action=delete]': {
                click: this.deleteDepartment
            },
            'employeelist': {
                itemclick:this.clickItemEmployee
            },
            'employeelist button[action=add]': {
                click: this.addEmployee
            },
            'employeelist button[action=edit]': {
                click: this.editEmployee
            },
            'employeeedit button[action=save]': {
                click: this.saveEmployee
            },
            'employeelist button[action=delete]': {
                click: this.deleteEmployee
            }

        })
    },

    addEmployee: function() {
        Ext.create('Sample.view.EmployeeEdit').setTitle('Добавить сотрудника');
    },

    editEmployee: function(grid, record) {
        Ext.create('Sample.view.EmployeeEdit').setTitle('Редактировать сотрудника');
        var formEdit = Ext.getCmp('formEditId').getForm();
        formEdit.loadRecord(this.rec);
    },

    clickItemEmployee: function (grid, record) {
        Ext.getCmp('editEmployeeId').setDisabled(false);
        Ext.getCmp('deleteEmployeeId').setDisabled(false);
        this.rec = record;
    },

    saveEmployee: function () {
        console.log('employee created')
    },

    deleteEmployee: function () {
        console.log('employee deleted')
    },

    addDepartment: function() {
        Ext.create('Sample.view.DepartmentEdit').setTitle('Добавить департамент');
    },

    editDepartment: function() {
        Ext.create('Sample.view.DepartmentEdit').setTitle('Редактировать департамент');
        var formEdit = Ext.getCmp('departmentFormEditId').getForm();
        formEdit.loadRecord(this.rec);
    },

    clickItemDepartment: function (grid, record) {

        Ext.getCmp('editDepartmentId').setDisabled(false);
        Ext.getCmp('deleteDepartmentId').setDisabled(false);

        this.rec = record;

        var departmentId = record.data.departmentId;
        Ext.getStore('EmployeeStore').getProxy().url='/api/employeeByDepartment/' + departmentId;
        Ext.getStore('EmployeeStore').load();
    },

    saveDepartment: function () {
        // var departmentId = Ext.getCmp('departmentId').getValue();
        // var departmentName = Ext.getCmp('departmentName').getValue();
        console.log(departmentId + ' ' + departmentName);
    },

    deleteDepartment: function () {
        console.log('department deleted')
    }
});