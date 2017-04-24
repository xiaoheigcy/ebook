import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Intro from '@/components/Intro'
import Contentnew from '@/components/Contentnew'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Contentnew',
			component: Contentnew
		},{
			path: '/intro',
			name: 'Intro',
			component: Intro
		}
	]
})
