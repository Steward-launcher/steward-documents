> Search without command, list search terms by search engine list when no other command is applied—no command is needed for searching. Search terms will be listed by search engine when no other command is applied. 


## Commands
### Set search engine
`trigger: se`    
#### Operating
- `query` empty，list the search engines you have added
    - `Enter` delete the selected engine
- `query` not empty，the query part will be added to the list as a new search engine
    - `Enter` add a new search engine

#### Format

```
## name: name of search engine 
## url: url of search engine, such as `https://www.google.com/search?q=`
## icon: icon of search engine, usually `/favicon.ico` followed by the domain name, such as `https://bing.com/favicon.ico`

name|url|icon
```
