> Feature Minimum Requirements 3.1, below this version, [Please upgrade] (http://github.com/solobat/Steward/) to the latest version.

***

Table of Contents
---

- [Meaning](#meaning)
- [Create](#create)
- [Usage](#usage)
- [Illustration](#illustration)
- [Gif](#gif)
- [Notice](#notice)

Meaning
---
> Workflow is a combination of a series of commands that can be customized in Steward. The commands are enhanced when compared with that when used alone.

Create
---
In the Settings -> workflows panel click `+ New Workflow` button, and then fill in the form on the right, where the Title and Content fields are required.

Content needs to follow a simple syntax:
* Format： `command|numbers|shift`
    * `command` is required，By the `trigger` + space + `query` composition, be careful not to forget the space
        * you can use `variables` in `command`. [Provides some global variables in workflow](https://github.com/solobat/Steward/issues/30)
        
        ```bash
        ### usage
        #### open related bookmarks
        bm {{host}}|shift

        #### search with selected text
        {{selection}}|all

        ### global vars
        {
            title,
            shortTitle,
            selection,
            icon,
            url,
            host,
            pathname,
            baseURL,
            search,
            hash
        }
        ```
    * `numbers` is optional，The number of entries indicating the role of the preceding command is valid only for commands with the batch icon behind the trigger.
        * `from-to` format，will act on the items from `from` to the `to`, such as `bm | 1-8`, note that counting from `1`.
        * `n` format，will act on the `nth` item, such as `po | 2`, also counting from `1`
        * `all` format，will be applied to all matching entries, such as `bk | all`, the use of all must pay attention, or accidentally may open a lot of tabs.
    * `shift` is optional，That the use of the `command + shift` operation,  valid only `⇧` icon is after the trigger of the command, such as `site |shift`, usually shift does not need to exist with the numbers.

> Even more powerful, Workflow can also be used in combination, that is, a Workflow which can perform another workflow, such as:

```
wf disable
wf block
```


![Imgur](https://i.imgur.com/JefFHhT.png)

Usage
---
Enter `wf ` in the command box will list all the workflow, press `Enter / Return` will execute the selected workflow, then there will be Toast to display the commands of workflow.

Illustration
---
![Imgur](https://i.imgur.com/CUmvsmO.png)
![Imgur](https://i.imgur.com/A53H2Ob.png)

Notice
---
Because workflow contains a variety of batches of operations, you must use `numbers` with caution when creating your workflow.

## Gif
![Imgur](http://img.oksteward.com/2017-12-08%2022.33.18.gif)
