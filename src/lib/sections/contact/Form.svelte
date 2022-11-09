<form action="/api/contact" method="post">
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
	<button id="contact-submit" type="submit">Skicka</button>
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
		}

		.required {
			color: var(--sb-orange);
		}
	}
</style>
