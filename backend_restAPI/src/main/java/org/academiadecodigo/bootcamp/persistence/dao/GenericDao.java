package org.academiadecodigo.bootcamp.persistence.dao;

import org.academiadecodigo.bootcamp.persistence.model.Model;
import org.academiadecodigo.bootcamp.persistence.model.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

public abstract class GenericDao<T extends Model> implements Dao<T> {

    protected Class<T> user;

    @PersistenceContext
    protected EntityManager em;

    public GenericDao(Class<T> modelType) {
        this.user = modelType;
    }

    public void setEm(EntityManager em) {
        this.em = em;
    }

    @Override
    public List<T> findAll() {

        CriteriaQuery<T> criteriaQuery = em.getCriteriaBuilder().createQuery(user);
        Root<T> root = criteriaQuery.from(user);
        return em.createQuery(criteriaQuery).getResultList();


    }


    @Override
    public T findById(Integer id) {
        return em.find(user, id);
    }

    @Override
    public T findByName(String name) {

        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<T> cq = cb.createQuery(user);
        Root<T> root = cq.from(user);

        cq.where(cb.equal(root.get("name"), name));
        return em.createQuery(cq).getSingleResult();
    }


    @Override
    public T saveOrUpdate(T modelObject) {
        return em.merge(modelObject);
    }

    @Override
    public void delete(Integer id) {
        em.remove(em.find(user, id));
    }
}

