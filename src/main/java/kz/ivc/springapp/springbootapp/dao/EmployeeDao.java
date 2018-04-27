package kz.ivc.springapp.springbootapp.dao;

import kz.ivc.springapp.springbootapp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Long> {
}
