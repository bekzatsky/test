package kz.ivc.springapp.springbootapp.service;

import kz.ivc.springapp.springbootapp.dao.DepartmentDao;
import kz.ivc.springapp.springbootapp.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class DepartmentService {

    @Autowired
    private DepartmentDao departmentDao;


    public List<Department> getDepartments() {
        return departmentDao.findAll();
    }


    public Optional<Department> getDepartmentById(Long id) {
        return departmentDao.findById(id);
    }


    public void saveDepartment(Department department) {
        departmentDao.save(department);
    }


    public void updateDepartment(Long id, Department department) {
        Optional<Department> departmentOptional = departmentDao.findById(id);
        Department currentDepartment = departmentOptional.get();
        currentDepartment.setDepartmentName(department.getDepartmentName());
        departmentDao.save(currentDepartment);
    }


    public void deleteDepartment(Long id) {
        departmentDao.deleteById(id);
    }
}
