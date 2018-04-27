package kz.ivc.springapp.springbootapp.dao;

import kz.ivc.springapp.springbootapp.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentDao extends JpaRepository<Department, Long> {
}
