package kz.ivc.springapp.springbootapp.dao;

import kz.ivc.springapp.springbootapp.model.Download;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DownloadDao extends JpaRepository<Download, Long>{
}
