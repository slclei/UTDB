package com.example.CUSP_DB.Specification;

import com.example.CUSP_DB.model.Borehole;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class BoreholeSpecificationsBuilder {
    private List<SearchCriteria> params;

    public BoreholeSpecificationsBuilder() {
        this.params=new ArrayList<>();
    }

    public BoreholeSpecificationsBuilder(List<SearchCriteria> params) {
        this.params = params;
    }

    public void UserSpecificationsBuilder() {
        params = new ArrayList<SearchCriteria>();
    }

    public BoreholeSpecificationsBuilder with(String key, String value) {
        params.add(new SearchCriteria(key, value));
        return this;
    }

    public Specification<Borehole> build() {
        if (params.size() == 0) {
            return null;
        }

        Specification result = new BoreholeSpecification(params.get(0));

        for (int i = 1; i < params.size(); i++) {
            result = Specification.where(result)
                    .and(new BoreholeSpecification(params.get(i)));
        }
        return result;
    }
}
