<script>
	import NavHost from '../components/molecules/NavHost.svelte';
	import Hero from '../components/organisms/Hero.svelte';
	import About from '../components/organisms/About.svelte';
	import Skills from '../components/organisms/Skills.svelte';
	import Footer from '../components/molecules/Footer.svelte';
	import ExperienceTimeline from '../components/organisms/ExperienceTimeline.svelte';
	import EducationTimeline from '../components/organisms/EducationTimeline.svelte';
	import StaticRepos from '../components/organisms/StaticRepos.svelte';
</script>

<NavHost />
<main>
	<Hero />
	<About />
	<Skills />
	<StaticRepos />
	<EducationTimeline />
	<ExperienceTimeline />
	<Footer />
</main>
