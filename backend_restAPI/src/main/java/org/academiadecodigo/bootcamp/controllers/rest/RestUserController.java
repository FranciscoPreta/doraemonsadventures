package org.academiadecodigo.bootcamp.controllers.rest;

import org.academiadecodigo.bootcamp.persistence.model.User;
import org.academiadecodigo.bootcamp.services.UserNotFoundException;
import org.academiadecodigo.bootcamp.services.UserServiceI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.LinkedList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class RestUserController {

    private UserServiceI userService;

    @Autowired
    public void setUserService(UserServiceI userService) {
        this.userService = userService;
    }



    @RequestMapping(method = RequestMethod.GET, path = {"/{name}"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> getUser(@PathVariable String name) {
        User user = userService.getByName(name.toLowerCase());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


         @RequestMapping(method = RequestMethod.GET, path = {"/id/{id}"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> getUser(@PathVariable Integer id) {
        User user = userService.get(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.POST, path = {"/create", ""})
    public ResponseEntity<?> addUser(@RequestBody User user) {

        if (user.getId() != null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        String name = user.getName().toLowerCase();

        user.setName(name);

        User savedUser = userService.saveOrUpdate(user);

        return new ResponseEntity<>(HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.PUT, path = "/{name}")
    public ResponseEntity<User> editCustomer(@RequestBody User user, @PathVariable String name) {

        if (user != null && !user.getName().equals(name.toLowerCase())) {
             return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if (userService.getByName(name.toLowerCase()) == null) {
             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        user.setId(userService.getByName(name.toLowerCase()).getId());

        User savedUser = userService.saveOrUpdate(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{name}")
    public ResponseEntity<User> deleteCustomer(@PathVariable String name) {

        try {

            userService.delete(name);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



}
