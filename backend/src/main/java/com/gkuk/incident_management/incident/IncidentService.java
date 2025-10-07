package com.gkuk.incident_management.incident;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class IncidentService {
    private final IncidentRepository incidentRepository;

    @Autowired
    public IncidentService(IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    public List<Incident> findAll() {
        return incidentRepository.findAll();
    }

    public Incident getIncidentById(Integer id) {
        return incidentRepository.findById(id).orElse(null);
    }

    public List<Incident> findByCategory(String category) {
        return incidentRepository.findAll().stream()
                .filter(incidentRepository -> category.equals(incidentRepository.getCategory()))
                .collect(Collectors.toList());
    }

    public List<Incident> findByTitle(String title) {
        return incidentRepository.findAll().stream()
                .filter(incidentRepository -> title.toLowerCase()
                        .contains(incidentRepository.getTitle().toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Incident> getAllIncidentsSortedByLastUpdated(Date updatedAt) {
        return incidentRepository.findAll().stream()
                .filter(incidentRepository -> updatedAt.after(incidentRepository.getUpdatedAt()))
                .collect(Collectors.toList());
    }

    public Incident addIncident(Incident incident) {
        return incidentRepository.save(incident);
    }

    public void deleteIncident(Incident incident) {
        incidentRepository.delete(incident);
    }
    public void deleteById(Integer id) {
        incidentRepository.deleteById(id);
    }

    public Incident updateIncident(Incident incident) {
        Optional<Incident> idExisting = incidentRepository.findById(incident.getId());
        if (idExisting.isPresent()){
            Incident incidentToUpdate = idExisting.get();
            incidentToUpdate.setStatus(incident.getStatus());
            incidentToUpdate.setUpdatedAt(incident.getUpdatedAt());
            incidentToUpdate.setAssignedTo(incident.getAssignedTo());
            return incidentRepository.save(incidentToUpdate);
        }
       return null;
    }
}
