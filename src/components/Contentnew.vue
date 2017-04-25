<style>
	.contentnew{
		padding: 20px 16px;
		font-size: 12px;
		width: 100vw;
		overflow: hidden;
	}
	.contentnew img{
		width: 100%;
		display: block;
		margin: 7px 0;
	}
</style>

<template>
	<div class="contentnew">
		<!-- <div v-html="sections[0].chapers[0].content"></div> -->
		<!-- <vue-markdown sections[0].chapers[0].content></vue-markdown> -->
		<sidebar></sidebar>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	import vueMarkdown from 'vueMarkdown'
	import Sidebar from './Sidebar'
	export default {
		name: 'contentnew',
		components: {
			Sidebar,
			vueMarkdown
		},
		data () {
			return{
				baseUrl: 'http://114.215.47.40:8080/ebook/api/',
				name: "",
				sections: [
					{
						name: "第一部分",
						chapers: [
							{
								name: "章节一",
								content: ""
							}
						]
					}
				]
			}
		},
		methods: {
			// getBookCont() {
			// 	axios.get(`${this.baseUrl}book-infos`).then((res) => {
			// 		console.log(res.data.data)
			// 	}).catch((err) => {
			// 		console.log(err)
			// 	})
			// },
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
			getChapterCont(){
				let that = this
				axios.get(`${this.baseUrl}chapter-infos`).then((res) => {
					var chapterId = this.GetRequest()
					res.data.data.map(function(a){
						if(Number(chapterId.chapterId) == a.id){
							that.sections[0].chapers[0].content = a.contentRich
						}
					})
				}).catch((err) => {
					console.log(err)
				})
			},
			showBtnMore(){
				var $scrollY = window.scrollY
				// if($scrollY < scrollY0){
				// 	document.getElementById("btns").style.bottom = 0 + "px"
				// }
				// else if($scrollY > scrollY0){
				// 	document.getElementById("btns").style.bottom = -44 + "px"
				// }
				// scrollY0 = $scrollY
			    var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）    
			    var bScrollH = document.body.scrollHeight; // 滚动条总高度 
			    if($scrollY + wInnerH >= bScrollH){
			    	document.getElementById("btn-more").style.bottom = -1 + "px"
			    	window.removeEventListener('scroll',this.showBtnMore)
			    	setTimeout(function(){
						location.href = `/#/intro`
			    	},2000)
			    }
			    else{
			    	document.getElementById("btn-more").style.bottom = -44 + "px"
			    }
			}
		},
		mounted() {
			window.addEventListener('scroll',this.showBtnMore)
			// this.getBookCont()
			this.getChapterCont()
			//console.log(this.sections[0].chapers[0].content)
		}
	}
</script>