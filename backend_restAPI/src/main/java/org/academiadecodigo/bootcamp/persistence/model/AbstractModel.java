package org.academiadecodigo.bootcamp.persistence.model;

import javax.persistence.*;

@MappedSuperclass
public abstract class AbstractModel implements Model{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @Override
    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public Integer getId() {
        return id;
    }
}
