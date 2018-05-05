package kz.ivc.springapp.springbootapp.controller.api;

import kz.ivc.springapp.springbootapp.model.Download;
import kz.ivc.springapp.springbootapp.service.DownloadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DownloadController {

    @Autowired
    private DownloadService downloadService;

    @GetMapping("/downloads")
    List<Download> getDownloads() {
        return downloadService.getDownloads();
    }

}