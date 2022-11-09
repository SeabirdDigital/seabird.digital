<script lang="ts">
	let name: boolean, email: boolean, message: boolean;
</script>

<form action="/api/kontakt" method="post">
	<div class="input-field">
		<label for="name">Namn<span class="required">*</span></label>
		<input required id="name" name="name" type="text" autocomplete="name" />
	</div>
	<div class="input-field">
		<label for="email">Email<span class="required">*</span></label>
		<input required id="email" name="email" type="email" autocomplete="email" />
	</div>
	<div class="input-field">
		<label for="website">Nuvarande sida</label>
		<input id="website" name="website" type="url" autocomplete="url" />
	</div>
	<div class="input-field">
		<label for="message">Meddelande<span class="required">*</span></label>
		<textarea required id="message" name="message" class="materialize-textarea" />
	</div>
	<button id="contact-submit" type="submit" disabled={name && email && message}>Skicka</button>
</form>

<style lang="postcss">
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& > div {
			display: flex;
			flex-direction: column;
		}

		button {
			width: fit-content;
			margin-left: auto;

			font-size: 1.25rem;

			border-color: white;
			border-bottom: 2px;
			border-style: solid;

			opacity: 0.7;

			transition: all 200ms;

			&:hover {
				padding-bottom: 0.75rem;
				margin-bottom: -0.75rem;

				border-color: transparent;
			}
		}

		.required {
			color: var(--sb-orange);
		}
	}
</style>
