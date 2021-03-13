Working Tree -> Staging Area -> Repository (사용 명령 : git status, git add, git commit)
git diff 버전 간의 차이점 비교
git reset --hard  //버전 삭제
git log -p
git checkout //특정 버전으로 working tree를 변경시키는 방법, HEAD 값을 바꾸는 행위
git commit -am "5" //add와 commit 동시 
git commit --amend //commit 후 수정
git revert //버전 되돌리기 역순 

git branch o2

git checkout master
cat work.txt //txt 내용 보기
git branch o2 //병합

외부도구를 이용한 병합
git mergetool
p4merge git config 검색해서 직접 찾기
git config --global merge.tool p4mergetool

git이 conflict를 처리하는 방법 3 way merge

git flow, cherry-pick, rebase

git 혼자서 작업하기
git remote add origin 'github repository address'
git push -u origin master

git 협업
git clone ex)git@github.com:Suhyeon0322/project-study.git
git pull -> commit -> push
git fetch -> git merge FETCH_HEAD -> commit -> push

git pull = git fetch : git merge origin/master
cat .git/FETCH_HEAD
git fetch: git merge FETCT_HEAD

pull request / merge request (code review -> code quality improvement)
Created draft pull request (임시 병합 요청)
start a review : comment를 grouping하여 pull request 요청자에게 제공

충돌 해결
충돌을 해결하면서 topic branch를 개선 -> 우리의 topic branch를 master branch로 merge
