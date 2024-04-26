# git : software
- management tool for main codebase
- Git is a version control system that allows developers to track changes in their code
# github : website
- same as git but its in the form of website and for hosting websites
- GitHub is a web-based hosting service for git repositories

- repository = folder
- commit = save
- fork = complete copy
- github issues = compliant

# cmd commands :
- cd = to change directory/folder
- ls = to see list of files
- dir = to see list of folders
- cd ../ = goes to previous folder
- mkdir = to make a new folder

# git's area :
## working area
- folders and files not cared by git
## tracked area
- folders and files are known by git
## staging area
- folders and files will upload by git
## git directory
- folder and files uploaded by git

# git process :
### git config (for username/email)
- git config --global user.name "user name"
- git config --global user.email "email"
### git init
- allows you to run any git command on that folder
### git status
- shows the current tracked and untracked files

# tracked area :
### git add .
- to add every file in git's tracking area

# staging area :
### git commit -m "msg likho"
- stages the files to get pushed on next "push command"

# git directory :
### git remote add origin https://github.com/user/reponame.git
- setting address of the location where the changes will be pushed to
### git push -u origin branchname
### git pull origin master
- to make sure u r up to date ( if in that repo more peoples are working, then to make sure that if anyone changed the files by using pull and then push our files)

# git other commands :
### git reset
- makes all files untracked (when u made the folder/files to be tracked by "git add .", it will be untracked by "git reset")
### git ignore
- its a file to ignore the files which u don't want to get track of by git
    - (two methods : 1. by file name[index.html], 2. by file extension[8.html])
### git log
- shows the hash code and details about the recent commit
### git clone
- clones/copies the git files from internet to ur computer
- git clone address of the repo that u need to make a clone

# git branches :
### git branch
- shows all branches
### git branch bname
- creates a branch with that bname
### git checkout bname
- switched you to that branch

# merging branch to master branch :
### git checkout bname
- switched you to that branch
### git pull origin master
- makes sure it is up to date on your mastre branch before you merge
### merging the branch :
- git branch --merged
 - git merge bname
### git push origin master
- pushes the changes


# Deploying through github and vercel

## Step 1 : github upload/push in new repo

1.1 create a repo in github page
Go to the code terminal in vscode
1.2 git init
1.3 git add .
1.4 git commit -m "commit message comes here"
1.5 git branch -M main
1.6 git remote add origin githubLink
1.7 git push -u origin main

## Step 2 : github upload/push in existing repo

Go to the code terminal in vscode
2.1 git add .
2.2 git commit -m "commit message comes here"
( // ! just incase of problem
	2.3 git remote add origin githubLink )
2.4 git push -u origin main

## Step 3 : Deploy in Vercel

- Go to vercel add your project and deploy it
- can change domain name

## some error

1. If you have changed something in github online page but you have not changed in your local 'main', then when you push some changes from local 'main' to remote 'main' you will get some error
	==solution== : 1. git pull, to your local 'main' then, 2. git push 