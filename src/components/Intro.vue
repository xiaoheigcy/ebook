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
		font-weight: bold;
	}
	.info-body{
		border-bottom: 1px solid #ccc;
		padding: 0 16px 20px 0;
	}
	.body-name{
		height: 40px;
		line-height: 40px;
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
		font-weight: 300;
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
		padding-right: 16px;
	}
	.imglist{
		display: flex;
		justify-content: space-between;
		li{
			img{
				width: 27.7vw;
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
		padding-left: 16px;
	}
</style>
<template>
	<div class="intro">
		<img class="bookcover" :src="coverImg">
		<p class="name">{{name}}</p>
		<p class="author">作者：<span>{{author}}</span></p>
		<div class="bac">
			<div class="info-body">
				<p class="body-name">
					<img src="../assets/leftbar.jpg">
					<span>简介</span>
				</p>
				<p class="body-main">
					{{intro}}
				</p>
			</div>
			<div class="info-body body1">
				<p class="body-name">
					<img src="../assets/leftbar.jpg">
					<span>制作方介绍</span>
				</p>
				<p class="body-main main1">
					{{producerIntro}}
				</p>
				<img class="qr" :src="producerQr">
				<p class="like">
					关注公众号：{{producerOfficialAccount}}
				</p>
			</div>
			<div class="others">
				<p class="body-name">
					<img src="../assets/leftbar.jpg">
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
	import axios from 'axios'
	export default {
		name: 'intro',
		data () {
			return {
				imgUrl: 'http://ohej1hvbm.bkt.clouddn.com/',
				baseUrl: 'http://114.215.47.40:8080/ebook/api/',
				name: "",
				author: "",
				copyright: "",
				coverImg: "",
				intro: "",
				producerIntro: "",
				producerName: "",
				producerOfficialAccount: "",
				producerQr: "",
			}
		},
		methods: {
			GetRequest() {
	            let url = window.location.href
	            let theRequest = {}
	            if (url.indexOf('?') !== -1) {
	                let strs = url.substr(url.indexOf('?')+1).split('&')
	                for (let str of strs) {
	                    theRequest[str.split('=')[0]] = decodeURIComponent(str.split('=')[1])
	                }
	            }
	            return theRequest
	        },
			getCont() {
				var bookId = this.GetRequest().bookId
				axios.get(`${this.baseUrl}book-infos/${bookId}`).then((res) => {
					this.name = res.data.data.name
					this.author = res.data.data.author
					this.copyright = res.data.data.copyright
					this.coverImg = this.imgUrl + res.data.data.coverImg
					this.intro = res.data.data.intro
					this.producerIntro = res.data.data.producerIntro
					this.producerName = res.data.data.producerName
					this.producerOfficialAccount = res.data.data.producerOfficialAccount
					this.producerQr = this.imgUrl + res.data.data.producerQr
				}).catch((err) => {
					console.log(err)
				})
			}
		},
		mounted() {
			this.getCont()
		}
	}
</script>