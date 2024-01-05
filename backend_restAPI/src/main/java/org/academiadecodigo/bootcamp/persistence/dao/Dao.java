package org.academiadecodigo.bootcamp.persistence.dao;

import org.academiadecodigo.bootcamp.persistence.model.Model;

import java.util.List;

public interface Dao<T extends Model> {

    List<T> findAll();

    T findById(Integer id);

    T findByName(String name);

    T saveOrUpdate(T modelObject);

    void delete(Integer id);
}
