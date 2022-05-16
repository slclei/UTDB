package com.example.CUSP_DB.Specification;

public class SearchCriteria{
    private String key;
    private String value;

    public SearchCriteria(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }

}