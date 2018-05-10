package kz.ivc.springapp.springbootapp.service;

import com.thoughtworks.xstream.XStream;
import kz.ivc.springapp.springbootapp.dao.DepartmentDao;
import kz.ivc.springapp.springbootapp.dao.DownloadDao;
import kz.ivc.springapp.springbootapp.dao.EmployeeDao;
import kz.ivc.springapp.springbootapp.model.Department;
import kz.ivc.springapp.springbootapp.model.Download;
import kz.ivc.springapp.springbootapp.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;
    @Autowired
    private DepartmentDao departmentDao;
    @Autowired
    private DownloadDao downloadDao;

    public List<Employee> getEmployees() {
        return employeeDao.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeDao.findById(id);
    }

    public List<Employee> getListEmployeeByDepartment(Long id) {

        Optional<Department> departmentOptional = departmentDao.findById(id);
        Department department = departmentOptional.get();
        return employeeDao.findAllByDepartment(department);
    }

    public void saveEmployee(Employee employee) {
        employeeDao.save(employee);
    }

    public void updateEmployee(Long id, Employee employee) {
        Optional<Employee> employeeOptional = employeeDao.findById(id);

        Employee currentEmployee = employeeOptional.get();
        currentEmployee.setFirstName(employee.getFirstName());
        currentEmployee.setLastName(employee.getLastName());
        currentEmployee.setDepartment(employee.getDepartment());

        employeeDao.save(currentEmployee);
    }

    public void deleteEmployee(Long id) {
        employeeDao.deleteById(id);
    }

    public Long download(Long id, String filename) {

        String sys = System.getProperty("user.home");
        String path = sys + "/Рабочий стол/" + filename + ".txt";


        Download download = new Download();
        download.setFilename(filename);
        download.setPath(path);
        download.setStatus("В обработке");
        Download save = downloadDao.save(download);
        System.out.println(save.getId());
        return save.getId();
    }
}
