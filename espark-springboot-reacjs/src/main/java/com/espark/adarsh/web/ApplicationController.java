package com.espark.adarsh.web;


@org.springframework.stereotype.Controller
public class ApplicationController {

    @org.springframework.web.bind.annotation.RequestMapping(value = "/")
    public String index() {
        return "index";
    }

}