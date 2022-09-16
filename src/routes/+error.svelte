<!-- This page handles any error encountered by the site. -->
<script>
import { page } from '$app/stores'
</script>

<h2>{$page.status}</h2>
<p class="subhead">{$page.error.message}</p>

<p><strong>出错了!</strong></p>
<ul>
	<li><a href="/">主页</a></li>
</ul>