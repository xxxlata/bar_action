# Dropdown 학습내용
1. <button>, <a> 또는 <p> 요소와 같은 요소를 사용하여 드롭다운 메뉴를 열 수 있다.

2. 컨테이너 요소(예: <div>)를 사용하여 드롭다운 메뉴를 만들고 그 안에 드롭다운 링크를 추가한다.

3. 버튼과 <div> 주위에 <div> 요소를 둘러싸서 CSS를 사용하여 드롭다운 메뉴를 올바르게 배치한다.

4. 배경색, 패딩, 호버 등으로 드롭다운 버튼의 스타일을 지정한다. 

5. dropdown하고 싶은 부모컨텐츠, 즉 .dropdown클래스에 position:relative, .dropdown-content에 position:absolute 를 해준다.
이렇게 해줌으로써 바로아래 위치 시킬 수 있다.

6. .dropdown-content클래스는 드롭다운 메뉴를 가지고있으나, 기본적으로 숨겨져 있고 마우스를 오버하거나 클릭이벤트 발생시 나타난다. 

7. 드롭다운 콘텐츠의 너비를 드롭다운 버튼만큼 넓히려면 width100% overflow:auto로 설정하고 작은 화면에서 스크롤을 활성화 할 수 있다.

7. z-index를 사용하여 드롭다운을 다른 요소 앞에 배치한다.


### hover
```
.ex:hover {
    background-color:#fff;
}
```
마우스 오버 상태의 환경설정.

### cursor
```
.ex {
    cursor:pointer;
}
```
마우스 오버 상태일 경우 커서 모양 손가락으로 변경시켜준다.

