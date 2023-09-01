package dev.shopieva.contactapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.shopieva.contactapp.entity.Contact;

public interface ContactRepository 
    extends JpaRepository<Contact, Long>{
    
}
