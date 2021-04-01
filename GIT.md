Working Tree -> Staging Area -> Repository (사용 명령 : git status, git add, git commit)  

초기화  
```
git init 
git config --global user.name "본인의 깃 닉네임" 
git config --global user.email "본인의 깃 이메일"
```
git status 깃의 현재 상태를 확인

변경사항 더하기, 파일 생성
```
git add dog
git commit -m "원하는 메시지"
```

glt log 반영사항 확인하기  

git reset 되돌아 오고자 하는 커밋번호 6자리 -- hard 이전 상태로 되돌리기  
git revert 되돌아 오고자 하는 커밋번호 6자리  

새로운 브랜치 생성
```
git branch 브랜치 이름
git checkout 브랜치 이름

git checkout -b 브랜치명
```
git branch // 브랜치 확인  

git remote add origin https://github.com/유저네임/레파지토리네임.git // 원격저장소 생성, pc 작업 폴더와 깃허브의 저장소 연동  
git push -u origin master //우리의 로컬 저장소의 master와 원격 저장소의 master를 페어링  

소스코드 수정 후 업데이트
```
git add 파일명
git commit -m "msg"
git push 원격저장소명 브랜치명
```
git clone https://github.com/유저네임/원격저장소이름.git // 깃허브에서 소스 내려받기  

내려받기
```git pull 원격저장소명 브랜치명```

git diff 버전 간의 차이점 비교  
git log -p  
git checkout //특정 버전으로 working tree를 변경시키는 방법, HEAD 값을 바꾸는 행위  
git commit -am "5" //add와 commit 동시   
git commit --amend //commit 후 수정  

git checkout master
cat work.txt //txt 내용 보기
git branch o2 //병합

외부도구를 이용한 병합  
git mergetool  
p4merge git config 검색해서 직접 찾기  
git config --global merge.tool p4mergetool  

git이 conflict를 처리하는 방법 3 way merge

git flow, cherry-pick, rebase  

checkout은 change, reset은 delete의 느낌  

git fetch -> git merge FETCH_HEAD -> commit -> push  

git pull = git fetch : git merge origin/master  
cat .git/FETCH_HEAD  
git fetch: git merge FETCT_HEAD  

pull request / merge request (code review -> code quality improvement)  
Created draft pull request (임시 병합 요청)  
start a review : comment를 grouping하여 pull request 요청자에게 제공  

충돌 해결  
충돌을 해결하면서 topic branch를 개선 -> 우리의 topic branch를 master branch로 merge  

```
git branch -d suhyeon //로컬 브랜치 삭제
git push origin --delete suhyeon //원격 브랜치 삭제
```
