package org.academiadecodigo.bootcamp.persistence.dao;

import org.academiadecodigo.bootcamp.persistence.model.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao extends GenericDao<User> implements Dao<User> {
    public UserDao() {
        super(User.class);
    }
}
