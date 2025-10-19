package com.gkuk.incident_management.incident;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/v1/incident")
public class IncidentController {
    private final IncidentService incidentService;

    @Autowired
    public IncidentController(IncidentService incidentService){
        this.incidentService = incidentService;
    }

    @GetMapping()
    public List<Incident> getAllIncidents(){
        return incidentService.findAll();
    }

    @GetMapping("/id/{id}")
    Incident getIncidentById(@PathVariable Integer id){
        return incidentService.getIncidentById(id);
    }

    @GetMapping("/category/{category}")
    public List<Incident> getIncidentByCategory(@PathVariable String category){
        return incidentService.findByCategory(category);
    }

    @GetMapping("/title/{title}")
    public List<Incident> getIncidentByTitle(@PathVariable String title){
        return incidentService.findByTitle(title);
    }

    @GetMapping("/updated")
    public List<Incident> getIncidentsUpdatedAfter(@RequestParam("after") String afterDate) throws ParseException {
        Date updatedAt = new SimpleDateFormat("yyyy-MM-dd").parse(afterDate);
        return incidentService.getAllIncidentsSortedByLastUpdated(updatedAt);
    }

    @PostMapping
    Incident addIncident(@RequestBody Incident incident){
        return incidentService.addIncident(incident);
    }

    @PutMapping
    Incident updateIncident(@RequestBody Incident incident){
        return incidentService.updateIncident(incident);
    }

    @DeleteMapping
    void deleteIncident(@RequestBody Incident incident){
        incidentService.deleteIncident(incident);
    }

    @DeleteMapping("/id/{id}")
    void deleteIncidentById(@PathVariable Integer id){
        incidentService.deleteById(id);
    }
}
