<style type="text/css">
	.btns{
		position: fixed;
		z-index: 1;
		left: 20px;
		bottom: 40px;
		width: 52px;
	}
	.btns img{
		width: 100%;
		height: 100%;
	}
	.sidebar-body{
		width: 80vw;
		background: #fff;
		position: fixed;
		height: 100vh;
		left: -80vw;
		top: 0;
		transition: all 0.3s linear;
		z-index: 10;
		padding: 0 10px;
	}
	.container{
		width: 100vw;
		height: 100vh;
		background: #000;
		opacity: 0.3;
		z-index: 5;
	}
	.sidebar-head{
		height: 60px;
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
	}
	.head-img{
		height: 40px;
		width: 40px;
		float: left;
		display: block;
		margin-right: 10px;
	}
	.list{
		height: 44px;
		border-bottom: 1px solid #ccc;
		line-height: 44px;
		font-size: 16px;
	}
	.list-small{
		height: 44px;
		color: #999;
		font-size: 14px;
		line-height: 44px;
		padding-left: 20px;
		border-bottom: 1px solid #ccc;
	}
</style>
<template>
	<div id="sidebar">
		<div class="btns">
			<img src="../assets/share.png">
			<img src="../assets/more.png" @click="showHide(0)">
		</div>
		<div class="sidebar-body" id="sidebarMove">
			<div class="sidebar-head">
				<img class="head-img" src="../assets/logo.png">
				<p>
					书名
				</p>
			</div>
			<div class="list">
				封面
			</div>
			<div class="list">
				版权信息
			</div>
			<div class="list">
				第一部分
			</div>
			<div class="list-small">
				章节一
			</div>
			<div class="list-small">
				章节二
			</div>
			<div class="list-small">
				章节三
			</div>
			<div class="list-small">
				章节四
			</div>
		</div>
		<div class="container" @click="showHide(1)" id="container">
			
		</div>
	</div>
	
</template>


<script>
export default {
  name: 'sidebar',
  data () {
    return {
    }
  },
  methods: {
  	showHide(num) {
  		if (num === 1) {
  			document.getElementById("sidebarMove").style.left = -80 + 'vw'
  			document.getElementById("container").style.display = "none"
  		} else {
  			document.getElementById("sidebarMove").style.left = 0
  			document.getElementById("container").style.display = "block"
  		}
  	}
  }
}
</script>