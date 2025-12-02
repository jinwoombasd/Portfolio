# GitHub Pages 배포 가이드

## 1단계: GitHub 저장소 생성
1. https://github.com 에서 새 저장소 생성
2. Repository name: `portfolio` (또는 원하는 이름)
3. Public으로 설정
4. README, .gitignore, license는 추가하지 않음

## 2단계: 로컬 저장소를 GitHub에 연결

GitHub에서 저장소를 만든 후, 다음 명령어를 실행하세요:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**YOUR_USERNAME**을 본인의 GitHub 사용자명으로 변경하세요.

## 3단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. Settings 탭 클릭
3. 왼쪽 메뉴에서 "Pages" 클릭
4. Source에서 "Deploy from a branch" 선택
5. Branch: `main` 선택
6. Folder: `/ (root)` 선택
7. Save 클릭

## 4단계: 사이트 확인

몇 분 후 다음 URL에서 사이트를 확인할 수 있습니다:
```
https://YOUR_USERNAME.github.io/portfolio/
```

## 업데이트 방법

파일을 수정한 후:

```bash
git add .
git commit -m "Update portfolio"
git push
```

변경사항은 몇 분 내에 자동으로 반영됩니다.

