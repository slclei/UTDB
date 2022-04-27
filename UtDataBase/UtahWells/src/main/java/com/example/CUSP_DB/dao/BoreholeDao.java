package com.example.CUSP_DB.dao;

import com.example.CUSP_DB.model.Borehole;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface BoreholeDao extends JpaRepository<Borehole, String> {

}
