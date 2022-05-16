package com.example.CUSP_DB.Specification;

import com.example.CUSP_DB.model.Borehole;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class BoreholeSpecification implements Specification<Borehole> {
    private SearchCriteria criteria;

    public BoreholeSpecification(SearchCriteria criteria) {
        this.criteria = criteria;
    }

    public SearchCriteria getCriteria() {
        return criteria;
    }

    public void setCriteria(SearchCriteria criteria) {
        this.criteria = criteria;
    }

    @Override
    public Predicate toPredicate(Root<Borehole> root, CriteriaQuery<?> query, CriteriaBuilder builder){
        return builder.like(
                root.<String>get(criteria.getKey()), "%" + criteria.getValue() + "%");
    }
}
