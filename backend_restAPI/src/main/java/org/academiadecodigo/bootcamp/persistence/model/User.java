package org.academiadecodigo.bootcamp.persistence.model;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User extends AbstractModel{

    private String name;

    private String planet;

    private Integer hp;

    private String item;

    private Integer dorayaki;

   // @OneToOne
    //private Item item;
/*
    @OneToMany(
            // propagate changes on customer entity to account entities
            cascade = {CascadeType.ALL},

            // make sure to remove accounts if unlinked from customer
            orphanRemoval = true,

            // user customer foreign key on account table to establish
            // the many-to-one relationship instead of a join table
            mappedBy = "user",

            // fetch accounts from database together with user
            fetch = FetchType.EAGER
    )
    private List<Achievements> achievementsList = new ArrayList<>();

 */


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPlanet() {
        return planet;
    }

    public void setPlanet(String planet) {
        this.planet = planet;
    }

    public Integer getHp() {
        return hp;
    }

    public void setHp(Integer hp) {
        this.hp = hp;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public Integer getDorayaki() {
        return dorayaki;
    }

    public void setDorayaki(Integer dorayaki) {
        this.dorayaki = dorayaki;
    }

    /*
    public void setItem(Item item) {
        this.item = item;
    }

    public Item getItem() {
        return item;
    }

 */

    /*

    public List<Items> getItemsList() {
        return itemsList;
    }

    public void setItemsList(List<Items> itemsList) {
        this.itemsList = itemsList;
    }
/*
    public List<Achievements> getAchievementsList() {
        return achievementsList;
    }

    public void setAchievementsList(List<Achievements> achievementsList) {
        this.achievementsList = achievementsList;
    } */


}
