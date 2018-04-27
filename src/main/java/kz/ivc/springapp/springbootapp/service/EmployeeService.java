package kz.ivc.springapp.springbootapp.service;

import kz.ivc.springapp.springbootapp.dao.EmployeeDao;
import kz.ivc.springapp.springbootapp.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;

    public List<Employee> getEmployees() {
        return employeeDao.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeDao.findById(id);
    }

    public void saveEmployee(Employee employee) {
        employeeDao.save(employee);
    }

    public void updateEmployee(Employee employee) {
        employeeDao.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeDao.deleteById(id);
    }
}
