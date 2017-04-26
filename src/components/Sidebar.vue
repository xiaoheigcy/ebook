<style lang="less">
	.btns{
		position: fixed;
		z-index: 3;
		left: 0px;
		bottom: -44px;
		width: 100%;
		height: 44px;
		transition: all 0.5s ease-in-out;
		p{
			height: 100%;
			line-height: 44px;
			font-size: 14px;
			text-align: center;
			width: 50%;
			float: left;
			background: #f60;
			color: #fff;
			&:nth-child(1){
				border-right: 1px solid #fff;
			}
		}	
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
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		transition: all 0.3 linear;
	}
	.sidebar-head{
		height: 60px;
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
		position: relative;
		.next{
			position: absolute;
			display: block;
			right: 10px;
			width: 5px;
			top: 50%;
			transform: rotate(180deg);
			margin-top: -4.5px;
		}
		p{
			font-size: 16px;
			height: 40px;
			line-height: 40px;
		}
	}
	.head-img{
		height: 40px!important;
		width: 40px!important;
		float: left;
		display: block;
		margin: 0 10px 0 0!important;
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
	.btn-showmore{
		position: fixed;
		z-index: 10000;
		height: 44px;
		width: 100%;
		background: blue;
		color: #fff;
		font-size: 14px;
		line-height: 44px;
		text-align: center;
		left: 0;
		bottom: -44px;
		transition: all 0.5s ease-in-out;
	}
	#contain{
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		z-index: 1;
	}
</style>
<template>
	<div id="sidebar">
		<div id="btns" class="btns">
			<p @click="showHide(0)">
				目录
			</p>
			<p>
				分享
			</p>
		</div>
		<div id="btn-more" class="btn-showmore">
			即将加载下一页
		</div>
		<div class="sidebar-body" id="sidebarMove">
			<div class="sidebar-head" @click="goto('intro')">
				<img class="head-img" :src="coverImg">
				<p>
					{{bookName}}
				</p>
				<img class="next" src="../assets/next.png">
			</div>
			<div v-for="section in sections">
				<div class="list">
					{{section.name}}
				</div>
				<div id="chaper" class="list-small" v-for="chapter in section.chapters" @click="newChapter(section.name,chapter.name,section.sectionId,chapter.chapterId)">
					{{chapter.name}}
				</div>
			</div>
		</div>
		<div class="container" @click="showHide(1)" id="container">
			
		</div>
		<div style="height: 44px;">
			
		</div>
		<div id="contain" @click="upDown()">
			
		</div>
	</div>
	
</template>


<script>
	import axios from 'axios'
	export default {
		name: 'sidebar',
		data () {
			return {
				bookId: 8,
				baseUrl: 'http://114.215.47.40:8080/ebook/api/',
				stutes : 0,
				windowScoll : window.onscroll,
				sections: [],
				bookName: "",
				coverImg: ""
			}
		},
		methods: {
			showHide(num) {
				if (num === 1) {
					document.getElementById("sidebarMove").style.left = -80 + 'vw'
					setTimeout(function(){
						document.getElementById("container").style.display = "none"
					},300)

				} else {
					document.getElementById("sidebarMove").style.left = 0
					document.getElementById("container").style.display = "block"
				}
			},
			goto(a){
				// this.showHide(1)
				window.removeEventListener('scroll',this.showBtnMore)
				location.href = `/#/${a}?bookId=${this.bookId}`
				// this.$routes = `/#/${a}`
			},
			newChapter(sectionName,chaperName,sectionId,chapterId){
				var $title = sectionName + "  " + chaperName
				document.title = $title
				location.href = `/#/?chapterId=${chapterId}`
				location.reload()
			},
			upDown(){
				if(this.stutes%2 == 0){
					document.getElementById("btns").style.bottom = -1 + "px"
				}
				else if(this.stutes%2 == 1){
					document.getElementById("btns").style.bottom = -44 + "px"
				}
				this.stutes++
			},
			// getBookCont() {
			// 	axios.get(`${this.baseUrl}book-infos`).then((res) => {
			// 		this.bookName = res.data.data
			// 	}).catch((err) => {
			// 		console.log(err)
			// 	})
			// },
			getChapterCont(){
				let bookSections = []
				let that = this
				axios.get(`${this.baseUrl}chapter-infos`).then((res) => {
					// console.log(res.data.data)
					that.sections = []
					let section = {}
					bookSections = res.data.data.filter(function(a){
						return a.bookInfo.id == that.bookId
					})
					bookSections.map(function(a){
						if(a.level === 0){
							section = {}
							section.name = a.name
							section.sort = a.sort
							section.sectionId = a.id
							section.chapters = []
							that.sections.push(section)
						}
						else{
							section = {}
							section.name = a.name
							section.chapterId = a.id
							that.sections.map(function(b){
								if(b.sort == a.sort){
									b.chapters.push(section)
								}
							})
						}
					})
					that.bookName = bookSections[0].bookInfo.name
					that.coverImg = 'http://ohej1hvbm.bkt.clouddn.com/' + bookSections[0].bookInfo.coverImg
				}).catch((err) => {
					console.log(err)
				})
			}
		},
		mounted() {
			this.getChapterCont()
			// this.getBookCont()
		}
	}
</script>