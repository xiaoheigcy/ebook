<style lang="less">
	.intro{
		padding: 25px 0 25px;
	}
	.bookcover{
		width: 146px;
		height: 200px;
		display: block;
		margin: 0 auto 15px;
	}
	.name{
		font-size: 16px;
		margin-bottom: 10px;
		text-align: center;
	}
	.author{
		font-size: 12px;
		color: #7d7d7d;
		text-align: center;
		margin-bottom: 10px;
	}
	.info-body{
		border-bottom: 1px solid #ccc;
		padding: 0 10px 20px 0;
	}
	.body-name{
		height: 40px;
		line-height: 40px;
		margin-left: -5px;
		margin-bottom: 8px;
	}
	.body-name img{
		width: 3px;
		height: 10px;
	}
	.body-name span{
		font-size: 16px;
	}
	.body-main{
		max-height: 120px;
		line-height: 20px;
		color: #808080;
		overflow: hidden;
		font-size: 12px;
	}
	.main1{
		max-height: 80px;
	}
	.body1{
		padding-bottom: 10px;
	}
	.qr{
		height: 128px;
		width: 128px;
		display: block;
		margin: 25px auto 10px;
	}
	.like{
		font-size: 13px;
		color: #808080;
		text-align: center;
	}
	.others{
		padding-top: 20px;
		padding-right: 10px;
	}
	.imglist{
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
		li{
			img{
				width: 90px;
				height: 135px;
			}
			p{
				margin-top: 10px;
				font-size: 13px;
				text-align: center;
				height: 15px;
				line-height: 15px;
				overflow: hidden;
			}
		}
		:nth-child(3){
			margin-right: 0px;
		}
	}
	.bac{
		padding-left: 10px;
	}
</style>
<template>
	<div class="intro">
		<img class="bookcover" src="../assets/bookcover.png">
		<p class="name">《人生管理学》</p>
		<p class="author">显峰</p>
		<div class="bac">
			<div class="info-body">
				<p class="body-name">
					<img src="../assets/leftbar.png">
					<span>简介</span>
				</p>
				<p class="body-main">
					解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来
				</p>
			</div>
			<div class="info-body body1">
				<p class="body-name">
					<img src="../assets/leftbar.png">
					<span>制作方介绍</span>
				</p>
				<p class="body-main main1">
					解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来解放啦；食噶哈玩 i 哦额回国路上看到；改好假啦；森岛宽晃改哦额我刚喝完歌回来
				</p>
				<img class="qr" src="../assets/qr.png">
				<p class="like">
					关注公众号：climb
				</p>
			</div>
			<div class="others">
				<p class="body-name">
					<img src="../assets/leftbar.png">
					<span>其他书籍推荐</span>
				</p>
				<ul class="imglist">
					<li>
						<img src="../assets/morebooks.png">
						<p>《职业规划》</p>
					</li>
					<li>
						<img src="../assets/morebooks.png">
						<p>《职业规划》</p>
					</li>
					<li>
						<img src="../assets/morebooks.png">
						<p>《职业规划》</p>
					</li>
				</ul>
			</div>
			<div style="height: 30px;">

			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'intro',
		data () {
			return {
			}
		},
		methods: {

		}
	}
</script>