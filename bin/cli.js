#!/usr/bin/env node

const process = require("process");
const mdLinks = require("../lib/index");
const chalk = require("chalk");
const meow = require("meow");
const path = require("path");

const cli = meow(
  chalk`
                   {rgb(255, 10, 136) _    _ _     _       
           _____ _| |  | |_|___| |_ ___ 
          |     | . |  | | |   | '_|_ -|
          |_|_|_|___|  |_|_|_|_|_,_|___|}
  Usage
    {rgb(58, 228, 211).bold $ md-links <path>}

  Options
    {rgb(58, 228, 211).bold --validate, -v}  Includes status info of every link found
    {rgb(58, 228, 211).bold --stats, -s}   Includes overall stats of links

  Example
    {rgb(58, 228, 211).bold $ md-links ./prueba -v -s}`,
  {
    flags: {
      validate: {
        type: "boolean",
        alias: "v",
      },
      stats: {
        type: "boolean",
        alias: "s",
      },
    },
  }
);

const app = (input = cli.input, dir = process.cwd(), flags = cli.flags) => {
  if (
    cli.input.length === 0 &&
    flags.validate === false &&
    flags.stats === false
  ) {
    console.log(
      chalk`
                                              ░░░░░░                        
                                            ▒▒░░░░░░░░                      
                                            ▒▒░░░░░░░░                      
                ████████████                ▒▒░░░░░░░░                      
              ██▒▒▒▒▒▒▒▒▒▒▒▒██              ▒▒░░░░░░░░          ░░░░        
            ██▒▒░░░░░░░░░░░░▒▒██            ▒▒░░░░░░░░        ░░    ░░      
          ██▒▒░░░░░░░░░░░░░░░░▒▒██          ▒▒░░░░░░░░      ░░        ░░    
        ██▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒██        ▒▒░░░░░░░░      ░░        ░░    
        ██░░▓▓                ▓▓░░▒▒██      ▒▒░░░░░░░░        ░░    ░░      
    ▓▓██▒▒▓▓                    ▓▓▒▒██▓▓    ▒▒░░░░░░░░          ░░░░        
  ▓▓░░██▓▓░░  ░░          ░░▓▓    ▓▓▓▓░░▓▓  ▒▒░░░░░░░░                      
  ▓▓░░░░▓▓░░▓▓          ░░▓▓░░▓▓  ▓▓░░░░▓▓██▒▒░░░░░░░░                      
    ▓▓░░▓▓▓▓░░        ░░▓▓░░░░▓▓░░▓▓░░▓▓██▒▒▒▒░░░░░░░░                      
      ▓▓░░▓▓░░░░░░▓▓▓▓▓▓░░░░░░░░▓▓  ▓▓▒▒░░░░▒▒░░░░░░░░                      
      ▓▓░░▓▓▓▓▓▓▓▓▓▓░░░░░░░░████▓▓░░▓▓░░░░░░░░░░░░░░                        
      ▓▓░░▓▓  ░░██░░░░░░░░██░░  ▓▓░░▓▓▒▒▒▒▒▒██░░                            
        ▓▓▓▓░░░░  ░░░░░░░░  ░░░░▓▓▓▓  ██████▒▒░░▓▓░░▓▓                      
          ██░░░░░░░░░░░░░░░░░░░░██        ▓▓▓▓▒▒▒▒▒▒▓▓▓▓                    
          ██▓▓░░░░░░░░░░░░░░░░▓▓▓▓██    ▓▓  ▓▓▓▓  ▓▓▓▓  ▓▓                  
        ██▒▒▓▓▓▓░░░░░░░░░░░░▓▓▓▓░░▓▓██        ▓▓▒▒▓▓                        
      ██▒▒░░▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓░░░░░░▓▓▓▓▓▓██░░░░░░██                      
    ██▒▒░░░░▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓░░░░░░░░░░░░░░░░░░░░██                      
  ██░░░░░░▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓██▓▓██████████░░░░░░██                      
  ██░░░░░░██▒▒▓▓▓▓▓▓░░  ▓▓▓▓▓▓▒▒▓▓██          ██████                        
  ██░░░░░░▓▓▒▒░░▒▒▓▓░░░░▓▓▒▒░░▒▒██                                          
    ████████▒▒░░░░▓▓▒▒▒▒▓▓░░░░▒▒██                                          
          ████▒▒▓▓░░░░░░░░▓▓▒▒████                                          
        ██▓▓▓▓████████████████▓▓▓▓██                                        
        ██▓▓▓▓▓▓██        ██▓▓▓▓▓▓██                                        
          ██████            ██████   
  
  {rgb(255, 10, 136) It's dangerous to go alone! Take these instructions}`
    );
    return cli.showHelp();
  } else if (cli.input.length === 0) return cli.showHelp();
  else
    return mdLinks(input[0], flags.validate, flags.stats)
      .then((info) => {
        const links = info.map((object) => object.href);
        if (flags.validate === false && flags.stats === false)
          return info.forEach((obj) => {
            console.log(
              chalk`{rgb(58, 134, 255) ${path.relative(
                dir,
                obj.file
              )}} {rgb(255, 80, 170) ${
                obj.href
              }} {rgb(58, 228, 211) ${obj.text.substring(0, 51)}}`
            );
          });
        else if (flags.validate === true && flags.stats === false)
          return info.forEach((obj) => {
            console.log(
              chalk`{rgb(58, 134, 255) ${path.relative(
                dir,
                obj.file
              )}}  {rgb(255, 80, 170) ${obj.href}}  {rgb(255, 241, 82) ${
                obj.message
              }}  {rgb(141, 99, 252) ${
                obj.status
              }}  {rgb(58, 228, 211) ${obj.text.substring(0, 51)}}`
            );
          });
        else if (flags.validate === false && flags.stats === true)
          return console.log(chalk`Total: {rgb(58, 228, 211) ${info.length}}
Unique: {rgb(58, 228, 211) ${
            links.filter((link, i) => links.indexOf(link) === i).length
          }}`);
        else if (flags.validate === true && flags.stats === true)
          return console.log(chalk`Total: {rgb(58, 228, 211) ${info.length}}
Unique: {rgb(58, 228, 211) ${
            links.filter((link, i) => links.indexOf(link) === i).length
          }}
Broken: {rgb(58, 228, 211) ${
            info.filter((obj) => obj.message === "fail").length
          }}`);
      })
      .catch((err) => console.log(chalk`{rgb(255, 0, 43) ${err}}`));
};

app(cli.input, process.cwd(), cli.flags);

