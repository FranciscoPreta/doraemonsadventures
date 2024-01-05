package org.academiadecodigo.bootcamp.services;

import org.academiadecodigo.bootcamp.persistence.model.User;

import java.util.List;

public interface UserServiceI {
    List<User> list();
    User get(Integer id);
    User saveOrUpdate(User user);
    void delete(String name) throws UserNotFoundException;

    User getByName(String name);
}
