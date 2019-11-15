# Git conventions

See [Getting-Started for Git](getting-started/git_and_smithers.m) to setup git itself.


## Branch Naming


| Branch Name                                      | Example                                        | Description
| ------------                                     | ---------                                      | ------------
| master                                           | master                                         | Main development branch. Direct push on master is not allowed, only via Bitbucket Pull-Requests.
| feature/\<login\>/\<feature id\>_\<description\> | feature/lemo7242/MIB3-123_break_all_the_things | Branch containing new changes to the code, completely seperate from master. Should be created for each feature, and deleted after the changes are merged.
| release/\<release_name\>                         | release/31.7                                   | The release branch is the equivalent of CopyUp(int/main) as used in previous projects.<br/>This branch is **temporaray**, and will be deleted after the delivery is made.
| stabi/\<release_name\>                           | stabi/31.7                                     | Like release, but does not yet contain the changes to support the newest framework.



## Basic Feature Flow

For feature development use the following best practices:

Note: You can use the [playground](https://bitbucket.eso.local/projects/MIB3-DOC/repos/development/browse/feature-flow-demo/demo.md) to test these out.

| Action                              | Commands                                                                       | Explanation
| ------------                        | ---------                                                                      | ------------
| 1. Create and push a feature branch | `git checkout -b feature/<user>/mib3-<ID>_break_all_the_things`                | Creates a new branch with the specified name (`-b` part), and changes to the new branch (`checkout` part).
|                                     | `git push -u`                                                                  | Pushes your local feature branch to the server, creating a new branch with the new name there, and linking the two.
| 2. Implement                        | \*make changes\*                                                               | Do all the things! `git status` will show you the files you changed/added in red.
|                                     | `git add .`                                                                    | Marks all new and changed files to be in the next commit. You can also add files individually like `git add my_new_file.txt`.
|                                     | `git commit -m "my fancy commit message"`                                      | Creates a commit with all the files you've `git add`ed before.<br/>Your repo might now look something like:<br/><strong> o----o----o----o&#160;&#160;&#160;master<br/>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;\\<br/>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;o----o----o&#160;&#160;&#160;feature</strong>
|                                     | Or both at once: `git commit -am "my fancy commit message"`                    | Note that this does not add new files.
| 3. Interactive rebase on master\*   | `git fetch origin`                                                             | Pull latest changes from the remote.
|                                     | `git rebase -i origin/master`                                                  | Start interactive rebase. An editor will open with a description of what you can do. Save an close to apply.
|                                     | *fix conflicts*                                                                | TODO: More details please
|                                     | `git push -f`                                                                  | Because you changed the history of you branch, you now have to overwrite your remote feature branch.
| 4. Create a pull-request            | Open [bitbucket][] to your repo and klick [create branch]                      |
|                                     | OR: Click the 'Create pull request for ...' link in the console after pushing. |
|                                     | OR: Use git-pr like this `git pr master`                                       |
| 5. Add more changes                 | `git commit --amend` or go back to **2. Implement**.                           | Amend adds changes to an existing commit. Carefull though, it is better to add more commits and rebase again later.
| 6. Review & merge                   | Use bitbucket to review and merge                                              |
| 7. Remove branch                    | `git checkout master`                                                          | Change to another branch so you can remote it
|                                     | `git branch --delete feature/<user>/mib3-<ID>_break_all_the_things`            | Delete your branch
|                                     | `git push --delete origin feature/<user>/mib3-<ID>_break_all_the_things`       | Delete the remote branch. If you've already deleted the branch in Bitbucket, a `git fetch --prune` updates your local list.


## Frequent commands overview

| Group                | Commands                                           | Explanation
| ---------            | ---------                                          | ------------
| Current status       | `git status`                                       | Shows you the status. It lists changed files, new files (both in red), and the things to be commited (in green).
|                      | `git diff`                                         | Shows you which lines inside the files are changed since the last commit. Red are the lines removed, green are the ones added.
|                      | `git diff path/to/file.txt`                        | Same as above, but for a specific file only (supports wildcard paths).
| Server communication | `git pull`                                         | Get the latests changes from the remote, and update your local branch.
|                      | `git fetch --prune`                                | Get the latests changes from the remote, removing any deleted items.
|                      | `git push -u`                                      | Push the local branch to the server, linking the local and remote branches together.
|                      | `git rebase \<branch_name\>`                       | If a git-pull gives you new changes on master, use rebasing to re-applies your commits on top of the new commits.
|                      | `git rebase -i \<branch_name\>`                    | Does the same as normal rebase, but lets you choose what to do with each commit.
| Commiting            | `git add .`                                        | Mark all new and changed files to be in the next commit.
|                      | `git add file.txt`                                 | Mark the one file to be in the next commit.
|                      | `git reset`                                        | Reset markings you did by the adding above.
|                      | `git commit`                                       | Commit the marked changes, opening an editor for the message. `-a` adds all (except for new) and `-m "message"` adds a message without the editor.
| Branching            | `git branch \<branch_name\>`                       | Create a new branch with the specified name. See above for naming conventions.
|                      | `git checkout \<branch_name\>`                     | Switch to an existing branch.
|                      | `git checkout -b \<branch_name\>`                  | Create a new branch like above, but switch to it imidiately. See above for naming conventions.
| Undoing changes      | `git checkout .`                                   | **Carefull!** Reset all local files to their last commited state.
|                      | `git checkout path/to/file.txt`                    | **Carefull!** Reset one local file to its last commited state.
|                      | `git checkout \<branch_name\> -- path/to/file.txt` | **Carefull!** Reset one local file to the state of the specified branch.
|                      | `git reset --hard`                                 | **Carefull!** Same as `git checkout .`, but also moves the head if a branch/commit is specified.
| Undoing commits      | `git revert \<commit_hash\>`                       | Create a new commit that applies the oposite changes from the specified commit.


### \* Interactive rebase why and how
Master should have a clean, traceable history of self-contained commits. Having
one commit per feature or bug allows us to see which feature created a
regression for example, without having to sort through multiple commits per
change. Interactive rebase allows you to edit the history to easily select wich
commits should be combined for example.

For example running `git rebase -i master` opens an editor with something like this.
```
    pick 0000001 commit 1 on the branch
    pick 0000002 commit 2 on the branch
    pick 0000003 commit 3 on the branch
    pick 0000004 commit 4 on the branch
```

You could then then change it to this:
```
    r 0000001 commit 1 on the branch
    f 0000002 commit 2 on the branch
    f 0000003 commit 3 on the branch
    f 0000004 commit 4 on the branch
```
This tells git we want to 'reword' (r) the first commit, and 'fixup' (f) the
others. Which means we want to add (fixup) all changes of commits 2-4 into the
first one, creating one single commit with all the changes, and we also want to
change the commit-message of the first commit. When we save and close the
editor now, git will combine all the commits into one, and open an editor so we
can edit the commit message of it.
