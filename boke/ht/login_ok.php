<?php
 	session_start();                                                 //初始化SESSION变量
    header("content-type:text/html;charset=utf-8");//设置页面编码格式
	include_once '../conn/conn.php';				//执行连接数据库的操作
	if(!empty($_POST['name']) and !empty($_POST['password'])){		//判断用户名和密码是否为空
		$sql = "select * from admin where name = '".$_POST['name']."' and pass='".$_POST['password']."'";
		$result=mysql_query($sql,$conn);		//执行查询语句
		$count=mysql_num_rows($result);			//返回查询结果行数
		if($count>0){
		  	$_SESSION['name'] = $_POST['name'];//为SESSION变量赋值
            echo $_POST['name']."登录成功"."&nbsp;&nbsp;&nbsp;&nbsp;"."<a href='main.php'>由此进入主页</a>";
		}else{
			echo "登录失败，用户名或密码错误，请重新登录";
		}
	}else{
			echo "用户名和密码不能为空";
	}
?>