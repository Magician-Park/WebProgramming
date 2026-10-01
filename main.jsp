<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ page import="java.io.PrintWriter" %>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="utf-8">
        <title>IWASACAR</title>
        <meta name="description" content="IWASACAR 메인 페이지">
        <link rel="icon" type="image/png" href="images/we-removebg-preview.png">
        <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSS -->
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
        <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
    </head>

    <body>
    <%
        String userID=null;
        if(session.getAttribute("userID")!=null){
            userID=(String)session.getAttribute("userID");
        }
    %>
        <div id="home" class="big-bg">
            <header class="page-header wrapper">
                <h1><a href="main.jsp"><img class="logo" src="images/iwas.png" alt="IWASACAR"></a></h1>
                <nav>
                    <ul class="main-nav">
                        <li><a href="bulletinboard.jsp">중형차</a></li>
                        <li><a href="bigboard.jsp">대형차</a></li>
                        <li><a href="bulletin_main.jsp">질문하기</a></li>

                    <%
                        if(userID==null){//로그인이 되어 있지 않다면
                    %>
                                <li><a href="login.jsp">로그인</a></li>
                                <li><a href="join.jsp">회원가입</a></li>
                    </ul>
                    <%
                    } else{//로그인이 되어있다면
                    %>
                                <li><a href="logoutAction.jsp">로그아웃</a></li>
                                <li><a href="userUpdate.jsp">내 정보</a></li>
                    </ul>
                    <%
                        }
                    %>
                </nav>
            </header>

            <div class="home-content wrapper">
                <h2 class="page-title">We'll Make Revolution</h2>
                <p>차를 잘 모르겠다면?</p>
                <a class="button" href="bulletin_main.jsp">질문 글쓰기</a>
            </div>
        </div>

    </body>
</html>