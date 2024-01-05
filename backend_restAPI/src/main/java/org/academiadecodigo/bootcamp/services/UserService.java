package org.academiadecodigo.bootcamp.services;

import org.academiadecodigo.bootcamp.persistence.model.User;

import org.academiadecodigo.bootcamp.persistence.dao.UserDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserServiceI{
    private UserDao userDao;

    @Autowired
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Transactional
    @Override
    public List<User> list() {
        return userDao.findAll();
    }

    @Transactional
    public User get(Integer id) { return userDao.findById(id);}

   @Transactional
   public User getByName(String name) {
        return userDao.findByName(name);
   }

    @Transactional
    public User saveOrUpdate(User user) {
       return userDao.saveOrUpdate(user);
    }

    @Transactional
    @Override
    public void delete(String name) throws UserNotFoundException {

        if (userDao.findByName(name) == null) {
            throw new UserNotFoundException("cenas");
        }
        userDao.delete(userDao.findByName(name).getId());
    }

}
