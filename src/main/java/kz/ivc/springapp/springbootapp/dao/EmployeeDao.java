package kz.ivc.springapp.springbootapp.dao;

import kz.ivc.springapp.springbootapp.model.Department;
import kz.ivc.springapp.springbootapp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Long> {

    List<Employee> findAllByDepartment(Department department);
}
