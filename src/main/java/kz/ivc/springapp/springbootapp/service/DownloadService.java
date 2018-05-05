package kz.ivc.springapp.springbootapp.service;

import kz.ivc.springapp.springbootapp.dao.DownloadDao;
import kz.ivc.springapp.springbootapp.model.Download;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DownloadService {

    @Autowired
    private DownloadDao downloadDao;

    public List<Download> getDownloads() {
        return downloadDao.findAll();
    }
}
