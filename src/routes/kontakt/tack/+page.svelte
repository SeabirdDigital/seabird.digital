<div id="tack">
	<iframe
		title="giphy"
		src="https://giphy.com/embed/3yRHVLXGeodopGpq7l"
		width="100%"
		height="100%"
		frameBorder="0"
		class="giphy"
		allowFullScreen
	/>
	<h1>Jajjebox!</h1>
	<p>Tack för att du kontaktat oss. Vi hör av oss så snart som möjligt!</p>
</div>

<style lang="postcss">
	#tack {
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		text-align: center;

		background-color: var(--sb-dark);

		.giphy {
			height: 25vh;
			width: calc(25vh * (16 / 9));
			margin-bottom: 3rem;
		}

		h1 {
			margin-bottom: 1rem;
		}
	}
</style>
