<script>
	import { navItems } from '$lib/config'
	import { isMenuOpen } from '$lib/assets/js/store'
	import NavItem from './NavItem.svelte'
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" class:open={$isMenuOpen}>
	<ul>
		{#each navItems as page}
		<NavItem href={page.route}>
			{page.title}
		</NavItem>
		{/each}
	</ul>
</nav>