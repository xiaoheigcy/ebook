<style type="text/css">
	.intro{
		padding: 25px 0 25px 10px;
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
		border-bottom: 1px solid #000;
		padding: 0 10px 20px 0;
	}
	.body-name{
		height: 40px;
		line-height: 40px;
	}
	.body-name img{
		width: 3px;
		height: 10px;
	}
</style>
<template>
	<div class="intro">
		<img class="bookcover" src="../assets/bookcover.png">
		<p class="name">《人生管理学》</p>
		<p class="author">鱼头</p>
		<div class="info-body">
			<p class="body-name">
				<img src="../assets/logo.png">
			</p>
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