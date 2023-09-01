package dev.shopieva.contactapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import dev.shopieva.contactapp.entity.Contact;
import dev.shopieva.contactapp.env.SettingsApp;

@Configuration
public class CorsConfig implements RepositoryRestConfigurer{
    
    
    @Override
	public void configureRepositoryRestConfiguration(
        RepositoryRestConfiguration config, 
        CorsRegistry cors) {
    config.exposeIdsFor(Contact.class);

    cors.addMapping(config.getBasePath() + "/**")
        .allowedOrigins(SettingsApp.getHOST())
        .allowedMethods("GET", "POST", "DELETE")
        .allowCredentials(true);
	}


    
}
